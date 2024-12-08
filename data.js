// codegen_kernel_to_post_grad_nodes_mapping.txt
// {"kernel_name": ["post_grad_node1", "post_grad_node2", ...]", ...}

let jsonString = '{"triton_poi_fused_mul_0": ["mul"], "triton_poi_fused_addmm_gelu_1": ["mul_2", "mul_3", "add_tensor", "add", "erf", "mul_1"]}'
const jsonData = JSON.parse(jsonString)

function getTransformedMapping(mapping) {
    const transformedObject = {};
    // Iterate over the original object and reverse the key-value relationship
    for (let [key, values] of Object.entries(mapping)) {
        values.forEach(value => {
            if (transformedObject[value]) {
                transformedObject[value].push(key)
            } else {
                transformedObject[value] = [key]
            }
        });
    }
    return transformedObject
}
