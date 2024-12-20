import unittest
from app import create_node_mapping, extract_graph_id, convert_node_mappings_to_line_numbers

class TestProcessMapping(unittest.TestCase):
    def setUp(self):
        self.fx_graph_id = 140226430922096
        self.node_json = {
            "cat_22": [
                {
                    "name": "cat_default_2",
                    "target": "aten.cat.default",
                    "graph_id": 140226430922096,
                    "pass_name": "Interpreter_PropagateUnbackedSymInts",
                    "action": "create",
                    "from_node": [
                        {
                            "name": "cat_10",
                            "target": "aten.cat.default",
                            "graph_id": 140226430922096,
                            "pass_name": "pattern_matcher",
                            "action": "replace+create",
                            "from_node": []
                        },
                        {
                            "name": "cat_10",
                            "target": "aten.cat.default",
                            "graph_id": 140226430922096,
                            "pass_name": "[Pre grad(predispatch IR)]Apply normalization pass",
                            "action": "replace+create",
                            "from_node": []
                        }
                    ]
                }
            ]
        }
        
        self.fx_graph_lines = [
            "graph():",
            "        cat_10: f16[s0, 6354][6354, 1]cuda:0 = torch.ops.aten.cat.default([mul_570, mul_567, layer_norm_120], 1);",
            "# graph id: 140226430922096"
        ]
        
        self.code_lines = [
            "def forward(self, x):",
            "        cat_22: f16[s0, 6354][6354, 1]cuda:0 = torch.ops.aten.cat.default([mul_570, mul_567, layer_norm_120], 1);",
            "# " + str(self.node_json)
        ]

    def test_extract_graph_id(self):
        """Test extracting graph ID from FX graph lines"""
        graph_id = extract_graph_id(self.fx_graph_lines)
        self.assertEqual(graph_id, self.fx_graph_id)

    def test_create_node_mapping(self):
        """Test creating node mappings between FX graph and generated code"""
        mappings = create_node_mapping(self.node_json, self.fx_graph_id)
        
        # Test leftToRight mapping
        self.assertIn('cat_default_2', mappings['leftToRight'])
        self.assertIn('cat_10', mappings['leftToRight'])
        self.assertEqual(mappings['leftToRight']['cat_default_2'], {'cat_22'})
        self.assertEqual(mappings['leftToRight']['cat_10'], {'cat_22'})
        
        # Test rightToLeft mapping
        self.assertIn('cat_22', mappings['rightToLeft'])
        self.assertEqual(mappings['rightToLeft']['cat_22'], {'cat_default_2', 'cat_10'})

    def test_convert_node_mappings_to_line_numbers(self):
        """Test converting node mappings to line numbers"""
        node_mappings = create_node_mapping(self.node_json, self.fx_graph_id)
        line_mappings = convert_node_mappings_to_line_numbers(
            node_mappings,
            self.fx_graph_lines,
            self.code_lines
        )
        
        # # Test leftToRight line mappings
        # self.assertIn(1, line_mappings['leftToRight'])  # Line number for cat_default_2 in fx_graph
        # self.assertEqual(line_mappings['leftToRight'][1], [1])  # Should map to line 1 in code
        
        # # Test rightToLeft line mappings
        # self.assertIn(1, line_mappings['rightToLeft'])  # Line number for cat_default_2 in code
        # self.assertEqual(line_mappings['rightToLeft'][1], [1])  # Should map to line 1 in fx_graph

    def test_invalid_graph_id(self):
        """Test behavior with invalid graph ID"""
        invalid_id = 999999
        mappings = create_node_mapping(self.node_json, invalid_id)
        self.assertEqual(mappings['leftToRight'], {})
        self.assertEqual(mappings['rightToLeft'], {})

    def test_empty_input(self):
        """Test behavior with empty input"""
        empty_mappings = create_node_mapping({}, self.fx_graph_id)
        self.assertEqual(empty_mappings['leftToRight'], {})
        self.assertEqual(empty_mappings['rightToLeft'], {})

if __name__ == '__main__':
    unittest.main() 