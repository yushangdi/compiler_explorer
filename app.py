import json
import logging
import os
import traceback
from collections import defaultdict

import requests
from bs4 import BeautifulSoup
from flask import Flask, jsonify, render_template, request

from utils import analyze_unmatched_lines

app = Flask(__name__)

logger = logging.getLogger(__name__)


def fetch_content_from_url(path_or_url):
    """Fetch and clean content from URL or local file path"""
    try:
        # Check if it's a local file path
        if (
            os.path.exists(path_or_url)
            or path_or_url.startswith("./")
            or path_or_url.startswith("/")
        ):
            print(f"Reading local file: {path_or_url}")
            try:
                with open(path_or_url, "r") as f:
                    content = f.read()
                return [line for line in content.split("\n")]
            except Exception as e:
                print(f"Error reading local file: {e}")
                raise

        # If not a local file, treat as URL
        headers = {
            "User-Agent": "Mozilla/5.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Connection": "keep-alive",
        }

        response = requests.get(path_or_url, headers=headers, verify=False)
        response.raise_for_status()

        # Parse HTML and extract text content
        soup = BeautifulSoup(response.text, "html.parser")
        content = soup.get_text()

        # Split into lines and filter empty ones
        return [line for line in content.split("\n") if line.strip()]

    except requests.exceptions.RequestException as e:
        print(f"Request Error: {e}")
        raise
    except Exception as e:
        print(f"Unexpected error: {e}")
        raise


def extract_graph_id(fx_graph_lines):
    # Get the last non-empty line
    last_line = next((line for line in reversed(fx_graph_lines) if line.strip()), None)
    if not last_line:
        return None

    # Extract number after "graph id:"
    import re

    match = re.search(r"graph id:\s*(\d+)", last_line.strip("# "))
    return int(match.group(1)) if match else None


def create_node_mapping(json_data, fx_graph_id):
    """Create bidirectional mappings between FX graph nodes and generated code nodes"""
    try:
        left_to_right = defaultdict(set)
        right_to_left = defaultdict(set)

        for outer_key, node_array in json_data.items():
            for node in node_array:
                # Check the current node first
                if node.get("graph_id") == fx_graph_id:
                    left_to_right[node["node_name"]].add(outer_key)
                    right_to_left[outer_key].add(node["node_name"])

                # Check nested from_node array recursively
                stack = [(n, outer_key) for n in node.get("from_node", [])]
                while stack:
                    current_node, parent_key = stack.pop()
                    if current_node.get("graph_id") == fx_graph_id:
                        left_to_right[current_node["node_name"]].add(parent_key)
                        right_to_left[parent_key].add(current_node["node_name"])
                    stack.extend(
                        (n, parent_key) for n in current_node.get("from_node", [])
                    )

        return {"leftToRight": left_to_right, "rightToLeft": right_to_left}

    except AttributeError as e:
        logger.error(f"AttributeError in create_node_mapping: {str(e)}")
        logger.error(f"json_data type: {type(json_data)}")
        logger.error(f"fx_graph_id type: {type(fx_graph_id)}")
        logger.error(traceback.format_exc())
        raise

    except TypeError as e:
        logger.error(f"TypeError in create_node_mapping: {str(e)}")
        logger.error(f"json_data: {json_data}")
        logger.error(f"fx_graph_id: {fx_graph_id}")
        logger.error(traceback.format_exc())
        raise

    except Exception as e:
        logger.error(f"Unexpected error in create_node_mapping: {str(e)}")
        logger.error(f"json_data: {json_data}")
        logger.error(f"fx_graph_id: {fx_graph_id}")
        logger.error(traceback.format_exc())
        raise


def convert_node_mappings_to_line_numbers(node_mappings, fx_graph_lines, code_lines):

    def valid_line(line):
        stripped = line.strip()
        return stripped and not stripped.startswith("#")

    # Create lookup maps for both files
    fx_node_to_lines = {}
    code_node_to_lines = {}

    # Build FX graph lookup map
    for i, line in enumerate(fx_graph_lines):
        if valid_line(line):
            node_name = line.strip().split("=", 1)[0].split(":", 1)[0].strip()
            if node_name:
                fx_node_to_lines[node_name] = i

    # Build code lookup map
    for i, line in enumerate(code_lines):
        if valid_line(line):
            node_name = line.strip().split("=", 1)[0].split(":", 1)[0].strip()
            if node_name:
                code_node_to_lines[node_name] = i

    line_left_to_right = {}
    line_right_to_left = {}

    # Process leftToRight using lookup maps
    for fx_node_name, gen_code_nodes in node_mappings["leftToRight"].items():
        if fx_node_name in fx_node_to_lines:
            fx_line_num = fx_node_to_lines[fx_node_name]
            line_left_to_right[fx_line_num] = []
            for gen_node_name in gen_code_nodes:
                if gen_node_name in code_node_to_lines:
                    line_left_to_right[fx_line_num].append(
                        code_node_to_lines[gen_node_name]
                    )

    # Process rightToLeft using lookup maps
    for gen_node_name, fx_node_names in node_mappings["rightToLeft"].items():
        if gen_node_name in code_node_to_lines:
            gen_line_num = code_node_to_lines[gen_node_name]
            line_right_to_left[gen_line_num] = []
            for fx_node_name in fx_node_names:
                if fx_node_name in fx_node_to_lines:
                    line_right_to_left[gen_line_num].append(
                        fx_node_to_lines[fx_node_name]
                    )

    return {"leftToRight": line_left_to_right, "rightToLeft": line_right_to_left}


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/load_file", methods=["POST"])
def load_file():
    """Endpoint to load file content from URL"""
    try:
        data = request.json
        url = data.get("url")
        if not url:
            return jsonify({"error": "No URL provided"}), 400

        lines = fetch_content_from_url(url)
        return jsonify({"lines": lines})

    except requests.RequestException as e:
        return jsonify({"error": f"Failed to fetch URL: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500


@app.route("/process_mapping", methods=["POST"])
def process_mapping():
    """Endpoint to process mappings between FX graph and generated code"""
    try:
        data = request.json
        fx_graph_lines = data["fxGraphData"]
        post_grad_graph_lines = data["postGradGraphData"]

        # Extract graph ID
        fx_graph_id = extract_graph_id(fx_graph_lines)
        if not fx_graph_id:
            logger.error(traceback.format_exc())
            return jsonify({"error": "Could not extract graph ID"}), 400

        # Parse JSON data from last line of code
        try:
            for line in reversed(post_grad_graph_lines):
                if line.strip().startswith("#"):
                    json_data = json.loads(line.strip("# "))
                    break
        except json.JSONDecodeError:
            logger.error(traceback.format_exc())
            return jsonify({"error": "Could not parse JSON data"}), 400

        # Create mappings
        node_mappings = create_node_mapping(json_data, fx_graph_id)
        line_mappings = convert_node_mappings_to_line_numbers(
            node_mappings, fx_graph_lines, post_grad_graph_lines
        )

        print(analyze_unmatched_lines(post_grad_graph_lines, line_mappings))

        return jsonify(line_mappings)

    except Exception as e:
        logger.error(traceback.format_exc())
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
