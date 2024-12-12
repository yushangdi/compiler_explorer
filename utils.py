from collections import defaultdict
from typing import Dict, List, Union

def is_valid_line(line: str) -> bool:
    """Check if a line is valid (non-empty, non-comment, non-get_attr)."""
    stripped = line.strip()
    return (stripped 
            and not stripped.startswith('#') 
            and 'torch.ops.' in line)

def analyze_unmatched_lines(post_grad_lines: List[str], 
                          line_mappings: Dict[str, Union[dict, defaultdict]]) -> Dict[str, Union[int, float, List[str]]]:
    # Filter out comments, empty lines, and get_attr lines
    valid_lines = [
        line.strip() 
        for line in post_grad_lines 
        if is_valid_line(line)
    ]
    
    total_valid_lines = len(valid_lines)
    unmatched_count = 0
    unmatched_nodes = []
    
    # Find lines that have no matches in the mappings
    for i, line in enumerate(post_grad_lines):
        if is_valid_line(line):
            if i not in line_mappings['postToPre'] or len(line_mappings['postToPre'][i]) == 0:
                unmatched_count += 1
                # Extract node name (content before ':' or '=')
                stripped_line = line.strip()
                node_content = stripped_line.split('=', 1)[0].split(':', 1)[0]
                unmatched_nodes.append(node_content.strip())
            
    return {
        'total_valid_lines': total_valid_lines,
        'unmatched_lines': unmatched_count,
        'percentage_unmatched': (unmatched_count / total_valid_lines * 100) if total_valid_lines > 0 else 0,
        'unmatched_nodes': unmatched_nodes
    }
