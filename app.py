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


def read_local_json_file(file_path):
    """Read a local JSON file and return its content"""
    # Check if it's a local file path
    if (
        os.path.exists(file_path)
        or file_path.startswith("./")
        or file_path.startswith("/")
    ):
        print(f"Reading local JSON file: {file_path}")
        try:
            with open(file_path, 'r') as f:
                content = json.load(f)
                if content is not None:
                   print(f"Successfully loaded local JSON content")
            return content
        except Exception as e:
            print(f"Error reading local JSON file: {e}")
            return None


def extract_graph_id(fx_graph_lines):
    # Get the last non-empty line
    last_line = next((line for line in reversed(fx_graph_lines) if line.strip()), None)
    if not last_line:
        return None

    # Extract number after "graph id:"
    import re

    match = re.search(r"graph id:\s*(\d+)", last_line.strip("# "))
    return int(match.group(1)) if match else None


def create_node_mapping(json_data, fx_graph_id, json_data_2):
    print("enter creating node mapping")
    """Create bidirectional mappings between pre_grad graph nodes and post_grad graph code nodes"""
    try:
        pre_to_post = defaultdict(set)
        post_to_pre = defaultdict(set)

        # post_to_py_code = defaultdict(set)
        py_code_to_post = defaultdict(set)
        print("Creating node mappings")

        # {'triton_kernel_name': ['post_node_name1', 'post_node_name2', ...]}
        for outer_key, node_array in json_data_2.items():  
            for curr_node in node_array:
                # for curr_node -> outer_key: triton kernel name
                # post_to_py_code[curr_node].add(outer_key)
                py_code_to_post[outer_key].add(curr_node)

        for outer_key, node_array in json_data.items():
            for node in node_array:
                # Check the current node first
                if node.get("graph_id") == fx_graph_id:
                    pre_to_post[node["node_name"]].add(outer_key)
                    post_to_pre[outer_key].add(node["node_name"])

                # Check nested from_node array recursively
                stack = [(n, outer_key) for n in node.get("from_node", [])]
                while stack:
                    current_node, parent_key = stack.pop()
                    if current_node.get("graph_id") == fx_graph_id:
                        pre_to_post[current_node["node_name"]].add(parent_key)
                        post_to_pre[parent_key].add(current_node["node_name"])
                    stack.extend(
                        (n, parent_key) for n in current_node.get("from_node", [])
                    )

        # return {"preToPost": pre_to_post, "postToPre": post_to_pre, "postToPyCode": post_to_py_code, "pyCodeToPost": py_code_to_post}
        return {"preToPost": pre_to_post, "postToPre": post_to_pre, "pyCodeToPost": py_code_to_post}

    except AttributeError as e:
        logger.error(f"AttributeError in create_node_mapping: {str(e)}")
        logger.error(f"json_data type: {type(json_data)}")
        logger.error(f"json_data_2 type: {type(json_data_2)}")
        logger.error(f"fx_graph_id type: {type(fx_graph_id)}")
        logger.error(traceback.format_exc())
        raise

    except TypeError as e:
        logger.error(f"TypeError in create_node_mapping: {str(e)}")
        logger.error(f"json_data: {json_data}")
        logger.error(f"json_data_2: {json_data_2}")
        logger.error(f"fx_graph_id: {fx_graph_id}")
        logger.error(traceback.format_exc())
        raise

    except Exception as e:
        logger.error(f"Unexpected error in create_node_mapping: {str(e)}")
        logger.error(f"json_data: {json_data}")
        logger.error(f"json_data_2: {json_data_2}")
        logger.error(f"fx_graph_id: {fx_graph_id}")
        logger.error(traceback.format_exc())
        raise


def convert_node_mappings_to_line_numbers(node_mappings, pre_grad_graph_lines, post_grad_graph_lines, py_code_lines):

    def valid_line(line):
        stripped = line.strip()
        return stripped and not stripped.startswith("#")

    # Create lookup maps for both files
    pre_grad_node_to_lines = {}
    post_grad_node_to_lines = {}
    py_kernel_to_lines = {}

    # Build FX graph lookup map
    for i, line in enumerate(pre_grad_graph_lines):
        if valid_line(line):
            node_name = line.strip().split("=", 1)[0].split(":", 1)[0].strip()
            if node_name:
                pre_grad_node_to_lines[node_name] = i

    # Build code lookup map
    for i, line in enumerate(post_grad_graph_lines):
        if valid_line(line):
            node_name = line.strip().split("=", 1)[0].split(":", 1)[0].strip()
            if node_name:
                post_grad_node_to_lines[node_name] = i
    
    # Build generated python code lookup map
    for i, line in enumerate(py_code_lines):
        if valid_line(line) and 'async_compile.triton(' in line:
            kernel_name = line.split('=')[0].strip()
            if kernel_name:
                py_kernel_to_lines[kernel_name] = i

    line_pre_to_post = {}
    line_post_to_pre = {}
    line_py_code_to_post = {}

    # Process preToPost using lookup maps
    for fx_node_name, gen_code_nodes in node_mappings["preToPost"].items():
        if fx_node_name in pre_grad_node_to_lines:
            fx_line_num = pre_grad_node_to_lines[fx_node_name]
            line_pre_to_post[fx_line_num] = []
            for gen_node_name in gen_code_nodes:
                if gen_node_name in post_grad_node_to_lines:
                    line_pre_to_post[fx_line_num].append(
                        post_grad_node_to_lines[gen_node_name]
                    )

    # Process postToPre using lookup maps
    for gen_node_name, fx_node_names in node_mappings["postToPre"].items():
        if gen_node_name in post_grad_node_to_lines:
            gen_line_num = post_grad_node_to_lines[gen_node_name]
            line_post_to_pre[gen_line_num] = []
            for fx_node_name in fx_node_names:
                if fx_node_name in pre_grad_node_to_lines:
                    line_post_to_pre[gen_line_num].append(
                        pre_grad_node_to_lines[fx_node_name]
                    )
    # Process pyCodeToPost using lookup maps
    for py_kernel_name, post_grad_node_names in node_mappings["pyCodeToPost"].items():
        if py_kernel_name in py_kernel_to_lines:
            gen_line_num = py_kernel_to_lines[py_kernel_name]
            line_py_code_to_post[gen_line_num] = []
            for post_grad_node_name in post_grad_node_names:
                if post_grad_node_name in py_kernel_to_lines:
                    line_py_code_to_post[gen_line_num].append(
                        py_kernel_to_lines[post_grad_node_name]
                    )

    return {"preToPost": line_pre_to_post, "postToPre": line_post_to_pre, "pyCodeToPost": line_py_code_to_post}


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
        python_code_lines = data["codeData"]

        # Read the local inductor triton kernel to post grad nodes mapping
        file_path = 'tl_out/inductor_triton_kernel_to_post_grad_nodes.json'
        kernel_post_grad_mapping_json = read_local_json_file(file_path)
        if not kernel_post_grad_mapping_json:
            logger.error(traceback.format_exc())
            return jsonify({"error": "Could not read kernel_post_grad_mapping"}), 400

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

        # Create mappings from pre_grad graph nodes to post_grad graph code nodes
        node_mappings = create_node_mapping(json_data, fx_graph_id, kernel_post_grad_mapping_json)
        print("Node mappings created")
        # print(node_mappings["pyCodeToPost"])
        # print(node_mappings)
        line_mappings = convert_node_mappings_to_line_numbers(
            node_mappings, fx_graph_lines, post_grad_graph_lines, 
            python_code_lines
        )

        print(analyze_unmatched_lines(post_grad_graph_lines, line_mappings))

        return jsonify(line_mappings)

    except Exception as e:
        logger.error(traceback.format_exc())
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
