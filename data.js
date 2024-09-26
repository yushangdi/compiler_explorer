let fx_str = `
DEBUG:torch._functorch._aot_autograd.dispatch_and_compile_graph.__aot_graphs:aot_config id: 0, fw_metadata=ViewAndMutationMeta(input_info=[InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=True, mutates_metadata=False, mutations_hidden_from_autograd=False, mutations_under_no_grad_or_inference_mode=True, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=False, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True), InputAliasInfo(is_leaf=True, mutates_data=False, mutates_metadata=False, mutations_hidden_from_autograd=True, mutations_under_no_grad_or_inference_mode=False, mutation_inductor_storage_resize=False, mutates_storage_metadata=False, requires_grad=True, keep_input_mutations=True)], output_info=[OutputAliasInfo(output_type=<OutputType.non_alias: 1>, raw_type=<class 'torch._subclasses.functional_tensor.FunctionalTensor'>, base_idx=None, dynamic_dims=set(), requires_grad=False, functional_tensor=None)], num_intermediate_bases=0, keep_input_mutations=True, traced_tangents=[], subclass_inp_meta=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], subclass_fw_graph_out_meta=[0], subclass_tangent_meta=[], is_train=False, traced_tangent_metas=None, num_symints_saved_for_bw=None, grad_enabled_mutation=None, deterministic=None, static_input_indices=[0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], tokens={}, indices_of_inputs_that_requires_grad_with_mutations_in_bw=[], bw_donated_idxs=None, num_backward_tokens=0),subclass_metadata=None
INFO:torch._functorch._aot_autograd.dispatch_and_compile_graph.__aot_graphs:TRACED GRAPH
 ===== Forward graph 0 =====
 /data/users/chilli/pytorch/torch/fx/_lazy_graph_module.py class <lambda>(torch.nn.Module):
    def forward(self, arg0_1: "f32[64, 3, 7, 7][147, 49, 7, 1]cuda:0", arg1_1: "f32[1, 3, 224, 224][150528, 50176, 224, 1]cuda:0", arg2_1: "i64[][]cuda:0", arg3_1: "f32[64][1]cuda:0", arg4_1: "f32[64][1]cuda:0", arg5_1: "f32[64][1]cuda:0", arg6_1: "f32[64][1]cuda:0", arg7_1: "f32[64, 64, 3, 3][576, 9, 3, 1]cuda:0", arg8_1: "i64[][]cuda:0", arg9_1: "f32[64][1]cuda:0", arg10_1: "f32[64][1]cuda:0", arg11_1: "f32[64][1]cuda:0", arg12_1: "f32[64][1]cuda:0", arg13_1: "f32[64, 64, 3, 3][576, 9, 3, 1]cuda:0", arg14_1: "i64[][]cuda:0", arg15_1: "f32[64][1]cuda:0", arg16_1: "f32[64][1]cuda:0", arg17_1: "f32[64][1]cuda:0", arg18_1: "f32[64][1]cuda:0", arg19_1: "f32[64, 64, 3, 3][576, 9, 3, 1]cuda:0", arg20_1: "i64[][]cuda:0", arg21_1: "f32[64][1]cuda:0", arg22_1: "f32[64][1]cuda:0", arg23_1: "f32[64][1]cuda:0", arg24_1: "f32[64][1]cuda:0", arg25_1: "f32[64, 64, 3, 3][576, 9, 3, 1]cuda:0", arg26_1: "i64[][]cuda:0", arg27_1: "f32[64][1]cuda:0", arg28_1: "f32[64][1]cuda:0", arg29_1: "f32[64][1]cuda:0", arg30_1: "f32[64][1]cuda:0", arg31_1: "f32[128, 64, 3, 3][576, 9, 3, 1]cuda:0", arg32_1: "i64[][]cuda:0", arg33_1: "f32[128][1]cuda:0", arg34_1: "f32[128][1]cuda:0", arg35_1: "f32[128][1]cuda:0", arg36_1: "f32[128][1]cuda:0", arg37_1: "f32[128, 128, 3, 3][1152, 9, 3, 1]cuda:0", arg38_1: "i64[][]cuda:0", arg39_1: "f32[128][1]cuda:0", arg40_1: "f32[128][1]cuda:0", arg41_1: "f32[128][1]cuda:0", arg42_1: "f32[128][1]cuda:0", arg43_1: "f32[128, 64, 1, 1][64, 1, 1, 1]cuda:0", arg44_1: "i64[][]cuda:0", arg45_1: "f32[128][1]cuda:0", arg46_1: "f32[128][1]cuda:0", arg47_1: "f32[128][1]cuda:0", arg48_1: "f32[128][1]cuda:0", arg49_1: "f32[128, 128, 3, 3][1152, 9, 3, 1]cuda:0", arg50_1: "i64[][]cuda:0", arg51_1: "f32[128][1]cuda:0", arg52_1: "f32[128][1]cuda:0", arg53_1: "f32[128][1]cuda:0", arg54_1: "f32[128][1]cuda:0", arg55_1: "f32[128, 128, 3, 3][1152, 9, 3, 1]cuda:0", arg56_1: "i64[][]cuda:0", arg57_1: "f32[128][1]cuda:0", arg58_1: "f32[128][1]cuda:0", arg59_1: "f32[128][1]cuda:0", arg60_1: "f32[128][1]cuda:0", arg61_1: "f32[256, 128, 3, 3][1152, 9, 3, 1]cuda:0", arg62_1: "i64[][]cuda:0", arg63_1: "f32[256][1]cuda:0", arg64_1: "f32[256][1]cuda:0", arg65_1: "f32[256][1]cuda:0", arg66_1: "f32[256][1]cuda:0", arg67_1: "f32[256, 256, 3, 3][2304, 9, 3, 1]cuda:0", arg68_1: "i64[][]cuda:0", arg69_1: "f32[256][1]cuda:0", arg70_1: "f32[256][1]cuda:0", arg71_1: "f32[256][1]cuda:0", arg72_1: "f32[256][1]cuda:0", arg73_1: "f32[256, 128, 1, 1][128, 1, 1, 1]cuda:0", arg74_1: "i64[][]cuda:0", arg75_1: "f32[256][1]cuda:0", arg76_1: "f32[256][1]cuda:0", arg77_1: "f32[256][1]cuda:0", arg78_1: "f32[256][1]cuda:0", arg79_1: "f32[256, 256, 3, 3][2304, 9, 3, 1]cuda:0", arg80_1: "i64[][]cuda:0", arg81_1: "f32[256][1]cuda:0", arg82_1: "f32[256][1]cuda:0", arg83_1: "f32[256][1]cuda:0", arg84_1: "f32[256][1]cuda:0", arg85_1: "f32[256, 256, 3, 3][2304, 9, 3, 1]cuda:0", arg86_1: "i64[][]cuda:0", arg87_1: "f32[256][1]cuda:0", arg88_1: "f32[256][1]cuda:0", arg89_1: "f32[256][1]cuda:0", arg90_1: "f32[256][1]cuda:0", arg91_1: "f32[512, 256, 3, 3][2304, 9, 3, 1]cuda:0", arg92_1: "i64[][]cuda:0", arg93_1: "f32[512][1]cuda:0", arg94_1: "f32[512][1]cuda:0", arg95_1: "f32[512][1]cuda:0", arg96_1: "f32[512][1]cuda:0", arg97_1: "f32[512, 512, 3, 3][4608, 9, 3, 1]cuda:0", arg98_1: "i64[][]cuda:0", arg99_1: "f32[512][1]cuda:0", arg100_1: "f32[512][1]cuda:0", arg101_1: "f32[512][1]cuda:0", arg102_1: "f32[512][1]cuda:0", arg103_1: "f32[512, 256, 1, 1][256, 1, 1, 1]cuda:0", arg104_1: "i64[][]cuda:0", arg105_1: "f32[512][1]cuda:0", arg106_1: "f32[512][1]cuda:0", arg107_1: "f32[512][1]cuda:0", arg108_1: "f32[512][1]cuda:0", arg109_1: "f32[512, 512, 3, 3][4608, 9, 3, 1]cuda:0", arg110_1: "i64[][]cuda:0", arg111_1: "f32[512][1]cuda:0", arg112_1: "f32[512][1]cuda:0", arg113_1: "f32[512][1]cuda:0", arg114_1: "f32[512][1]cuda:0", arg115_1: "f32[512, 512, 3, 3][4608, 9, 3, 1]cuda:0", arg116_1: "i64[][]cuda:0", arg117_1: "f32[512][1]cuda:0", arg118_1: "f32[512][1]cuda:0", arg119_1: "f32[512][1]cuda:0", arg120_1: "f32[512][1]cuda:0", arg121_1: "f32[1000, 512][512, 1]cuda:0", arg122_1: "f32[1000][1]cuda:0"):
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution: "f32[1, 64, 112, 112][802816, 12544, 112, 1]cuda:0" = torch.ops.aten.convolution.default(arg1_1, arg0_1, None, [2, 2], [3, 3], [1, 1], False, [0, 0], 1);  arg1_1 = arg0_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:269 in _forward_impl, code: x = self.bn1(x)
        add: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg2_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean = torch.ops.aten.var_mean.correction(convolution, [0, 2, 3], correction = 0, keepdim = True)
        getitem: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean[0]
        getitem_1: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean[1];  var_mean = None
        add_1: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem, 1e-05)
        rsqrt: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_1);  add_1 = None
        sub: "f32[1, 64, 112, 112][802816, 12544, 112, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution, getitem_1);  convolution = None
        mul: "f32[1, 64, 112, 112][802816, 12544, 112, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub, rsqrt);  sub = rsqrt = None
        squeeze: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_1, [0, 2, 3]);  getitem_1 = None
        mul_1: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze, 0.1);  squeeze = None
        mul_2: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg3_1, 0.9)
        add_2: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_1, mul_2);  mul_1 = mul_2 = None
        squeeze_2: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem, [0, 2, 3]);  getitem = None
        mul_3: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_2, 1.0000797257434426);  squeeze_2 = None
        mul_4: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_3, 0.1);  mul_3 = None
        mul_5: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg4_1, 0.9)
        add_3: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_4, mul_5);  mul_4 = mul_5 = None
        unsqueeze: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg5_1, -1);  arg5_1 = None
        unsqueeze_1: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze, -1);  unsqueeze = None
        mul_6: "f32[1, 64, 112, 112][802816, 12544, 112, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul, unsqueeze_1);  mul = unsqueeze_1 = None
        unsqueeze_2: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg6_1, -1);  arg6_1 = None
        unsqueeze_3: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_2, -1);  unsqueeze_2 = None
        add_4: "f32[1, 64, 112, 112][802816, 12544, 112, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_6, unsqueeze_3);  mul_6 = unsqueeze_3 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu: "f32[1, 64, 112, 112][802816, 12544, 112, 1]cuda:0" = torch.ops.aten.relu.default(add_4);  add_4 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        _low_memory_max_pool2d_with_offsets = torch.ops.prims._low_memory_max_pool2d_with_offsets.default(relu, [3, 3], [2, 2], [1, 1], [1, 1], False);  relu = None
        getitem_2: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = _low_memory_max_pool2d_with_offsets[0];  _low_memory_max_pool2d_with_offsets = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_1: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.convolution.default(getitem_2, arg7_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  arg7_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_5: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg8_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_1 = torch.ops.aten.var_mean.correction(convolution_1, [0, 2, 3], correction = 0, keepdim = True)
        getitem_4: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_1[0]
        getitem_5: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_1[1];  var_mean_1 = None
        add_6: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_4, 1e-05)
        rsqrt_1: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_6);  add_6 = None
        sub_1: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_1, getitem_5);  convolution_1 = None
        mul_7: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_1, rsqrt_1);  sub_1 = rsqrt_1 = None
        squeeze_3: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_5, [0, 2, 3]);  getitem_5 = None
        mul_8: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_3, 0.1);  squeeze_3 = None
        mul_9: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg9_1, 0.9)
        add_7: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_8, mul_9);  mul_8 = mul_9 = None
        squeeze_5: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_4, [0, 2, 3]);  getitem_4 = None
        mul_10: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_5, 1.0003189792663476);  squeeze_5 = None
        mul_11: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_10, 0.1);  mul_10 = None
        mul_12: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg10_1, 0.9)
        add_8: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_11, mul_12);  mul_11 = mul_12 = None
        unsqueeze_4: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg11_1, -1);  arg11_1 = None
        unsqueeze_5: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_4, -1);  unsqueeze_4 = None
        mul_13: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_7, unsqueeze_5);  mul_7 = unsqueeze_5 = None
        unsqueeze_6: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg12_1, -1);  arg12_1 = None
        unsqueeze_7: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_6, -1);  unsqueeze_6 = None
        add_9: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_13, unsqueeze_7);  mul_13 = unsqueeze_7 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_1: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.relu.default(add_9);  add_9 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_2: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.convolution.default(relu_1, arg13_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_1 = arg13_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_10: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg14_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_2 = torch.ops.aten.var_mean.correction(convolution_2, [0, 2, 3], correction = 0, keepdim = True)
        getitem_6: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_2[0]
        getitem_7: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_2[1];  var_mean_2 = None
        add_11: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_6, 1e-05)
        rsqrt_2: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_11);  add_11 = None
        sub_2: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_2, getitem_7);  convolution_2 = None
        mul_14: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_2, rsqrt_2);  sub_2 = rsqrt_2 = None
        squeeze_6: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_7, [0, 2, 3]);  getitem_7 = None
        mul_15: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_6, 0.1);  squeeze_6 = None
        mul_16: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg15_1, 0.9)
        add_12: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_15, mul_16);  mul_15 = mul_16 = None
        squeeze_8: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_6, [0, 2, 3]);  getitem_6 = None
        mul_17: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_8, 1.0003189792663476);  squeeze_8 = None
        mul_18: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_17, 0.1);  mul_17 = None
        mul_19: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg16_1, 0.9)
        add_13: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_18, mul_19);  mul_18 = mul_19 = None
        unsqueeze_8: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg17_1, -1);  arg17_1 = None
        unsqueeze_9: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_8, -1);  unsqueeze_8 = None
        mul_20: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_14, unsqueeze_9);  mul_14 = unsqueeze_9 = None
        unsqueeze_10: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg18_1, -1);  arg18_1 = None
        unsqueeze_11: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_10, -1);  unsqueeze_10 = None
        add_14: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_20, unsqueeze_11);  mul_20 = unsqueeze_11 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_15: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.add.Tensor(add_14, getitem_2);  add_14 = getitem_2 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_2: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.relu.default(add_15);  add_15 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_3: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.convolution.default(relu_2, arg19_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  arg19_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_16: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg20_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_3 = torch.ops.aten.var_mean.correction(convolution_3, [0, 2, 3], correction = 0, keepdim = True)
        getitem_8: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_3[0]
        getitem_9: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_3[1];  var_mean_3 = None
        add_17: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_8, 1e-05)
        rsqrt_3: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_17);  add_17 = None
        sub_3: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_3, getitem_9);  convolution_3 = None
        mul_21: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_3, rsqrt_3);  sub_3 = rsqrt_3 = None
        squeeze_9: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_9, [0, 2, 3]);  getitem_9 = None
        mul_22: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_9, 0.1);  squeeze_9 = None
        mul_23: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg21_1, 0.9)
        add_18: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_22, mul_23);  mul_22 = mul_23 = None
        squeeze_11: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_8, [0, 2, 3]);  getitem_8 = None
        mul_24: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_11, 1.0003189792663476);  squeeze_11 = None
        mul_25: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_24, 0.1);  mul_24 = None
        mul_26: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg22_1, 0.9)
        add_19: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_25, mul_26);  mul_25 = mul_26 = None
        unsqueeze_12: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg23_1, -1);  arg23_1 = None
        unsqueeze_13: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_12, -1);  unsqueeze_12 = None
        mul_27: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_21, unsqueeze_13);  mul_21 = unsqueeze_13 = None
        unsqueeze_14: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg24_1, -1);  arg24_1 = None
        unsqueeze_15: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_14, -1);  unsqueeze_14 = None
        add_20: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_27, unsqueeze_15);  mul_27 = unsqueeze_15 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_3: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.relu.default(add_20);  add_20 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_4: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.convolution.default(relu_3, arg25_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_3 = arg25_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_21: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg26_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_4 = torch.ops.aten.var_mean.correction(convolution_4, [0, 2, 3], correction = 0, keepdim = True)
        getitem_10: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_4[0]
        getitem_11: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = var_mean_4[1];  var_mean_4 = None
        add_22: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_10, 1e-05)
        rsqrt_4: "f32[1, 64, 1, 1][64, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_22);  add_22 = None
        sub_4: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_4, getitem_11);  convolution_4 = None
        mul_28: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_4, rsqrt_4);  sub_4 = rsqrt_4 = None
        squeeze_12: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_11, [0, 2, 3]);  getitem_11 = None
        mul_29: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_12, 0.1);  squeeze_12 = None
        mul_30: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg27_1, 0.9)
        add_23: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_29, mul_30);  mul_29 = mul_30 = None
        squeeze_14: "f32[64][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_10, [0, 2, 3]);  getitem_10 = None
        mul_31: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_14, 1.0003189792663476);  squeeze_14 = None
        mul_32: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_31, 0.1);  mul_31 = None
        mul_33: "f32[64][1]cuda:0" = torch.ops.aten.mul.Tensor(arg28_1, 0.9)
        add_24: "f32[64][1]cuda:0" = torch.ops.aten.add.Tensor(mul_32, mul_33);  mul_32 = mul_33 = None
        unsqueeze_16: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg29_1, -1);  arg29_1 = None
        unsqueeze_17: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_16, -1);  unsqueeze_16 = None
        mul_34: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_28, unsqueeze_17);  mul_28 = unsqueeze_17 = None
        unsqueeze_18: "f32[64, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg30_1, -1);  arg30_1 = None
        unsqueeze_19: "f32[64, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_18, -1);  unsqueeze_18 = None
        add_25: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_34, unsqueeze_19);  mul_34 = unsqueeze_19 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_26: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.add.Tensor(add_25, relu_2);  add_25 = relu_2 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_4: "f32[1, 64, 56, 56][200704, 3136, 56, 1]cuda:0" = torch.ops.aten.relu.default(add_26);  add_26 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_5: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.convolution.default(relu_4, arg31_1, None, [2, 2], [1, 1], [1, 1], False, [0, 0], 1);  arg31_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_27: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg32_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_5 = torch.ops.aten.var_mean.correction(convolution_5, [0, 2, 3], correction = 0, keepdim = True)
        getitem_12: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_5[0]
        getitem_13: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_5[1];  var_mean_5 = None
        add_28: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_12, 1e-05)
        rsqrt_5: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_28);  add_28 = None
        sub_5: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_5, getitem_13);  convolution_5 = None
        mul_35: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_5, rsqrt_5);  sub_5 = rsqrt_5 = None
        squeeze_15: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_13, [0, 2, 3]);  getitem_13 = None
        mul_36: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_15, 0.1);  squeeze_15 = None
        mul_37: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg33_1, 0.9)
        add_29: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_36, mul_37);  mul_36 = mul_37 = None
        squeeze_17: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_12, [0, 2, 3]);  getitem_12 = None
        mul_38: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_17, 1.0012771392081736);  squeeze_17 = None
        mul_39: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_38, 0.1);  mul_38 = None
        mul_40: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg34_1, 0.9)
        add_30: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_39, mul_40);  mul_39 = mul_40 = None
        unsqueeze_20: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg35_1, -1);  arg35_1 = None
        unsqueeze_21: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_20, -1);  unsqueeze_20 = None
        mul_41: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_35, unsqueeze_21);  mul_35 = unsqueeze_21 = None
        unsqueeze_22: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg36_1, -1);  arg36_1 = None
        unsqueeze_23: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_22, -1);  unsqueeze_22 = None
        add_31: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_41, unsqueeze_23);  mul_41 = unsqueeze_23 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_5: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.relu.default(add_31);  add_31 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_6: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.convolution.default(relu_5, arg37_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_5 = arg37_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_32: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg38_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_6 = torch.ops.aten.var_mean.correction(convolution_6, [0, 2, 3], correction = 0, keepdim = True)
        getitem_14: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_6[0]
        getitem_15: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_6[1];  var_mean_6 = None
        add_33: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_14, 1e-05)
        rsqrt_6: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_33);  add_33 = None
        sub_6: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_6, getitem_15);  convolution_6 = None
        mul_42: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_6, rsqrt_6);  sub_6 = rsqrt_6 = None
        squeeze_18: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_15, [0, 2, 3]);  getitem_15 = None
        mul_43: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_18, 0.1);  squeeze_18 = None
        mul_44: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg39_1, 0.9)
        add_34: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_43, mul_44);  mul_43 = mul_44 = None
        squeeze_20: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_14, [0, 2, 3]);  getitem_14 = None
        mul_45: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_20, 1.0012771392081736);  squeeze_20 = None
        mul_46: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_45, 0.1);  mul_45 = None
        mul_47: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg40_1, 0.9)
        add_35: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_46, mul_47);  mul_46 = mul_47 = None
        unsqueeze_24: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg41_1, -1);  arg41_1 = None
        unsqueeze_25: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_24, -1);  unsqueeze_24 = None
        mul_48: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_42, unsqueeze_25);  mul_42 = unsqueeze_25 = None
        unsqueeze_26: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg42_1, -1);  arg42_1 = None
        unsqueeze_27: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_26, -1);  unsqueeze_26 = None
        add_36: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_48, unsqueeze_27);  mul_48 = unsqueeze_27 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_7: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.convolution.default(relu_4, arg43_1, None, [2, 2], [0, 0], [1, 1], False, [0, 0], 1);  relu_4 = arg43_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:100 in forward, code: identity = self.downsample(x)
        add_37: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg44_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_7 = torch.ops.aten.var_mean.correction(convolution_7, [0, 2, 3], correction = 0, keepdim = True)
        getitem_16: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_7[0]
        getitem_17: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_7[1];  var_mean_7 = None
        add_38: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_16, 1e-05)
        rsqrt_7: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_38);  add_38 = None
        sub_7: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_7, getitem_17);  convolution_7 = None
        mul_49: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_7, rsqrt_7);  sub_7 = rsqrt_7 = None
        squeeze_21: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_17, [0, 2, 3]);  getitem_17 = None
        mul_50: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_21, 0.1);  squeeze_21 = None
        mul_51: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg45_1, 0.9)
        add_39: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_50, mul_51);  mul_50 = mul_51 = None
        squeeze_23: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_16, [0, 2, 3]);  getitem_16 = None
        mul_52: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_23, 1.0012771392081736);  squeeze_23 = None
        mul_53: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_52, 0.1);  mul_52 = None
        mul_54: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg46_1, 0.9)
        add_40: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_53, mul_54);  mul_53 = mul_54 = None
        unsqueeze_28: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg47_1, -1);  arg47_1 = None
        unsqueeze_29: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_28, -1);  unsqueeze_28 = None
        mul_55: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_49, unsqueeze_29);  mul_49 = unsqueeze_29 = None
        unsqueeze_30: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg48_1, -1);  arg48_1 = None
        unsqueeze_31: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_30, -1);  unsqueeze_30 = None
        add_41: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_55, unsqueeze_31);  mul_55 = unsqueeze_31 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_42: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.add.Tensor(add_36, add_41);  add_36 = add_41 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_6: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.relu.default(add_42);  add_42 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_8: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.convolution.default(relu_6, arg49_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  arg49_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_43: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg50_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_8 = torch.ops.aten.var_mean.correction(convolution_8, [0, 2, 3], correction = 0, keepdim = True)
        getitem_18: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_8[0]
        getitem_19: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_8[1];  var_mean_8 = None
        add_44: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_18, 1e-05)
        rsqrt_8: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_44);  add_44 = None
        sub_8: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_8, getitem_19);  convolution_8 = None
        mul_56: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_8, rsqrt_8);  sub_8 = rsqrt_8 = None
        squeeze_24: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_19, [0, 2, 3]);  getitem_19 = None
        mul_57: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_24, 0.1);  squeeze_24 = None
        mul_58: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg51_1, 0.9)
        add_45: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_57, mul_58);  mul_57 = mul_58 = None
        squeeze_26: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_18, [0, 2, 3]);  getitem_18 = None
        mul_59: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_26, 1.0012771392081736);  squeeze_26 = None
        mul_60: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_59, 0.1);  mul_59 = None
        mul_61: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg52_1, 0.9)
        add_46: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_60, mul_61);  mul_60 = mul_61 = None
        unsqueeze_32: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg53_1, -1);  arg53_1 = None
        unsqueeze_33: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_32, -1);  unsqueeze_32 = None
        mul_62: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_56, unsqueeze_33);  mul_56 = unsqueeze_33 = None
        unsqueeze_34: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg54_1, -1);  arg54_1 = None
        unsqueeze_35: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_34, -1);  unsqueeze_34 = None
        add_47: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_62, unsqueeze_35);  mul_62 = unsqueeze_35 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_7: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.relu.default(add_47);  add_47 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_9: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.convolution.default(relu_7, arg55_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_7 = arg55_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_48: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg56_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_9 = torch.ops.aten.var_mean.correction(convolution_9, [0, 2, 3], correction = 0, keepdim = True)
        getitem_20: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_9[0]
        getitem_21: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = var_mean_9[1];  var_mean_9 = None
        add_49: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_20, 1e-05)
        rsqrt_9: "f32[1, 128, 1, 1][128, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_49);  add_49 = None
        sub_9: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_9, getitem_21);  convolution_9 = None
        mul_63: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_9, rsqrt_9);  sub_9 = rsqrt_9 = None
        squeeze_27: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_21, [0, 2, 3]);  getitem_21 = None
        mul_64: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_27, 0.1);  squeeze_27 = None
        mul_65: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg57_1, 0.9)
        add_50: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_64, mul_65);  mul_64 = mul_65 = None
        squeeze_29: "f32[128][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_20, [0, 2, 3]);  getitem_20 = None
        mul_66: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_29, 1.0012771392081736);  squeeze_29 = None
        mul_67: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_66, 0.1);  mul_66 = None
        mul_68: "f32[128][1]cuda:0" = torch.ops.aten.mul.Tensor(arg58_1, 0.9)
        add_51: "f32[128][1]cuda:0" = torch.ops.aten.add.Tensor(mul_67, mul_68);  mul_67 = mul_68 = None
        unsqueeze_36: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg59_1, -1);  arg59_1 = None
        unsqueeze_37: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_36, -1);  unsqueeze_36 = None
        mul_69: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_63, unsqueeze_37);  mul_63 = unsqueeze_37 = None
        unsqueeze_38: "f32[128, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg60_1, -1);  arg60_1 = None
        unsqueeze_39: "f32[128, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_38, -1);  unsqueeze_38 = None
        add_52: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_69, unsqueeze_39);  mul_69 = unsqueeze_39 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_53: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.add.Tensor(add_52, relu_6);  add_52 = relu_6 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_8: "f32[1, 128, 28, 28][100352, 784, 28, 1]cuda:0" = torch.ops.aten.relu.default(add_53);  add_53 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_10: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.convolution.default(relu_8, arg61_1, None, [2, 2], [1, 1], [1, 1], False, [0, 0], 1);  arg61_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_54: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg62_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_10 = torch.ops.aten.var_mean.correction(convolution_10, [0, 2, 3], correction = 0, keepdim = True)
        getitem_22: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_10[0]
        getitem_23: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_10[1];  var_mean_10 = None
        add_55: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_22, 1e-05)
        rsqrt_10: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_55);  add_55 = None
        sub_10: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_10, getitem_23);  convolution_10 = None
        mul_70: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_10, rsqrt_10);  sub_10 = rsqrt_10 = None
        squeeze_30: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_23, [0, 2, 3]);  getitem_23 = None
        mul_71: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_30, 0.1);  squeeze_30 = None
        mul_72: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg63_1, 0.9)
        add_56: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_71, mul_72);  mul_71 = mul_72 = None
        squeeze_32: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_22, [0, 2, 3]);  getitem_22 = None
        mul_73: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_32, 1.005128205128205);  squeeze_32 = None
        mul_74: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_73, 0.1);  mul_73 = None
        mul_75: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg64_1, 0.9)
        add_57: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_74, mul_75);  mul_74 = mul_75 = None
        unsqueeze_40: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg65_1, -1);  arg65_1 = None
        unsqueeze_41: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_40, -1);  unsqueeze_40 = None
        mul_76: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_70, unsqueeze_41);  mul_70 = unsqueeze_41 = None
        unsqueeze_42: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg66_1, -1);  arg66_1 = None
        unsqueeze_43: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_42, -1);  unsqueeze_42 = None
        add_58: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_76, unsqueeze_43);  mul_76 = unsqueeze_43 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_9: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.relu.default(add_58);  add_58 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_11: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.convolution.default(relu_9, arg67_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_9 = arg67_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_59: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg68_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_11 = torch.ops.aten.var_mean.correction(convolution_11, [0, 2, 3], correction = 0, keepdim = True)
        getitem_24: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_11[0]
        getitem_25: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_11[1];  var_mean_11 = None
        add_60: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_24, 1e-05)
        rsqrt_11: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_60);  add_60 = None
        sub_11: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_11, getitem_25);  convolution_11 = None
        mul_77: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_11, rsqrt_11);  sub_11 = rsqrt_11 = None
        squeeze_33: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_25, [0, 2, 3]);  getitem_25 = None
        mul_78: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_33, 0.1);  squeeze_33 = None
        mul_79: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg69_1, 0.9)
        add_61: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_78, mul_79);  mul_78 = mul_79 = None
        squeeze_35: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_24, [0, 2, 3]);  getitem_24 = None
        mul_80: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_35, 1.005128205128205);  squeeze_35 = None
        mul_81: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_80, 0.1);  mul_80 = None
        mul_82: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg70_1, 0.9)
        add_62: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_81, mul_82);  mul_81 = mul_82 = None
        unsqueeze_44: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg71_1, -1);  arg71_1 = None
        unsqueeze_45: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_44, -1);  unsqueeze_44 = None
        mul_83: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_77, unsqueeze_45);  mul_77 = unsqueeze_45 = None
        unsqueeze_46: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg72_1, -1);  arg72_1 = None
        unsqueeze_47: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_46, -1);  unsqueeze_46 = None
        add_63: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_83, unsqueeze_47);  mul_83 = unsqueeze_47 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_12: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.convolution.default(relu_8, arg73_1, None, [2, 2], [0, 0], [1, 1], False, [0, 0], 1);  relu_8 = arg73_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:100 in forward, code: identity = self.downsample(x)
        add_64: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg74_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_12 = torch.ops.aten.var_mean.correction(convolution_12, [0, 2, 3], correction = 0, keepdim = True)
        getitem_26: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_12[0]
        getitem_27: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_12[1];  var_mean_12 = None
        add_65: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_26, 1e-05)
        rsqrt_12: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_65);  add_65 = None
        sub_12: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_12, getitem_27);  convolution_12 = None
        mul_84: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_12, rsqrt_12);  sub_12 = rsqrt_12 = None
        squeeze_36: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_27, [0, 2, 3]);  getitem_27 = None
        mul_85: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_36, 0.1);  squeeze_36 = None
        mul_86: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg75_1, 0.9)
        add_66: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_85, mul_86);  mul_85 = mul_86 = None
        squeeze_38: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_26, [0, 2, 3]);  getitem_26 = None
        mul_87: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_38, 1.005128205128205);  squeeze_38 = None
        mul_88: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_87, 0.1);  mul_87 = None
        mul_89: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg76_1, 0.9)
        add_67: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_88, mul_89);  mul_88 = mul_89 = None
        unsqueeze_48: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg77_1, -1);  arg77_1 = None
        unsqueeze_49: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_48, -1);  unsqueeze_48 = None
        mul_90: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_84, unsqueeze_49);  mul_84 = unsqueeze_49 = None
        unsqueeze_50: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg78_1, -1);  arg78_1 = None
        unsqueeze_51: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_50, -1);  unsqueeze_50 = None
        add_68: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_90, unsqueeze_51);  mul_90 = unsqueeze_51 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_69: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.add.Tensor(add_63, add_68);  add_63 = add_68 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_10: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.relu.default(add_69);  add_69 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_13: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.convolution.default(relu_10, arg79_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  arg79_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_70: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg80_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_13 = torch.ops.aten.var_mean.correction(convolution_13, [0, 2, 3], correction = 0, keepdim = True)
        getitem_28: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_13[0]
        getitem_29: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_13[1];  var_mean_13 = None
        add_71: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_28, 1e-05)
        rsqrt_13: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_71);  add_71 = None
        sub_13: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_13, getitem_29);  convolution_13 = None
        mul_91: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_13, rsqrt_13);  sub_13 = rsqrt_13 = None
        squeeze_39: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_29, [0, 2, 3]);  getitem_29 = None
        mul_92: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_39, 0.1);  squeeze_39 = None
        mul_93: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg81_1, 0.9)
        add_72: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_92, mul_93);  mul_92 = mul_93 = None
        squeeze_41: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_28, [0, 2, 3]);  getitem_28 = None
        mul_94: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_41, 1.005128205128205);  squeeze_41 = None
        mul_95: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_94, 0.1);  mul_94 = None
        mul_96: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg82_1, 0.9)
        add_73: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_95, mul_96);  mul_95 = mul_96 = None
        unsqueeze_52: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg83_1, -1);  arg83_1 = None
        unsqueeze_53: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_52, -1);  unsqueeze_52 = None
        mul_97: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_91, unsqueeze_53);  mul_91 = unsqueeze_53 = None
        unsqueeze_54: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg84_1, -1);  arg84_1 = None
        unsqueeze_55: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_54, -1);  unsqueeze_54 = None
        add_74: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_97, unsqueeze_55);  mul_97 = unsqueeze_55 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_11: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.relu.default(add_74);  add_74 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_14: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.convolution.default(relu_11, arg85_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_11 = arg85_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_75: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg86_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_14 = torch.ops.aten.var_mean.correction(convolution_14, [0, 2, 3], correction = 0, keepdim = True)
        getitem_30: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_14[0]
        getitem_31: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = var_mean_14[1];  var_mean_14 = None
        add_76: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_30, 1e-05)
        rsqrt_14: "f32[1, 256, 1, 1][256, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_76);  add_76 = None
        sub_14: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_14, getitem_31);  convolution_14 = None
        mul_98: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_14, rsqrt_14);  sub_14 = rsqrt_14 = None
        squeeze_42: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_31, [0, 2, 3]);  getitem_31 = None
        mul_99: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_42, 0.1);  squeeze_42 = None
        mul_100: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg87_1, 0.9)
        add_77: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_99, mul_100);  mul_99 = mul_100 = None
        squeeze_44: "f32[256][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_30, [0, 2, 3]);  getitem_30 = None
        mul_101: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_44, 1.005128205128205);  squeeze_44 = None
        mul_102: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_101, 0.1);  mul_101 = None
        mul_103: "f32[256][1]cuda:0" = torch.ops.aten.mul.Tensor(arg88_1, 0.9)
        add_78: "f32[256][1]cuda:0" = torch.ops.aten.add.Tensor(mul_102, mul_103);  mul_102 = mul_103 = None
        unsqueeze_56: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg89_1, -1);  arg89_1 = None
        unsqueeze_57: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_56, -1);  unsqueeze_56 = None
        mul_104: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_98, unsqueeze_57);  mul_98 = unsqueeze_57 = None
        unsqueeze_58: "f32[256, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg90_1, -1);  arg90_1 = None
        unsqueeze_59: "f32[256, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_58, -1);  unsqueeze_58 = None
        add_79: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_104, unsqueeze_59);  mul_104 = unsqueeze_59 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_80: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.add.Tensor(add_79, relu_10);  add_79 = relu_10 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_12: "f32[1, 256, 14, 14][50176, 196, 14, 1]cuda:0" = torch.ops.aten.relu.default(add_80);  add_80 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_15: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.convolution.default(relu_12, arg91_1, None, [2, 2], [1, 1], [1, 1], False, [0, 0], 1);  arg91_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_81: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg92_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_15 = torch.ops.aten.var_mean.correction(convolution_15, [0, 2, 3], correction = 0, keepdim = True)
        getitem_32: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_15[0]
        getitem_33: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_15[1];  var_mean_15 = None
        add_82: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_32, 1e-05)
        rsqrt_15: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_82);  add_82 = None
        sub_15: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_15, getitem_33);  convolution_15 = None
        mul_105: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_15, rsqrt_15);  sub_15 = rsqrt_15 = None
        squeeze_45: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_33, [0, 2, 3]);  getitem_33 = None
        mul_106: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_45, 0.1);  squeeze_45 = None
        mul_107: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg93_1, 0.9)
        add_83: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_106, mul_107);  mul_106 = mul_107 = None
        squeeze_47: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_32, [0, 2, 3]);  getitem_32 = None
        mul_108: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_47, 1.0208333333333333);  squeeze_47 = None
        mul_109: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_108, 0.1);  mul_108 = None
        mul_110: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg94_1, 0.9)
        add_84: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_109, mul_110);  mul_109 = mul_110 = None
        unsqueeze_60: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg95_1, -1);  arg95_1 = None
        unsqueeze_61: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_60, -1);  unsqueeze_60 = None
        mul_111: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_105, unsqueeze_61);  mul_105 = unsqueeze_61 = None
        unsqueeze_62: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg96_1, -1);  arg96_1 = None
        unsqueeze_63: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_62, -1);  unsqueeze_62 = None
        add_85: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_111, unsqueeze_63);  mul_111 = unsqueeze_63 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_13: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.relu.default(add_85);  add_85 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_16: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.convolution.default(relu_13, arg97_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_13 = arg97_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_86: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg98_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_16 = torch.ops.aten.var_mean.correction(convolution_16, [0, 2, 3], correction = 0, keepdim = True)
        getitem_34: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_16[0]
        getitem_35: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_16[1];  var_mean_16 = None
        add_87: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_34, 1e-05)
        rsqrt_16: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_87);  add_87 = None
        sub_16: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_16, getitem_35);  convolution_16 = None
        mul_112: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_16, rsqrt_16);  sub_16 = rsqrt_16 = None
        squeeze_48: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_35, [0, 2, 3]);  getitem_35 = None
        mul_113: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_48, 0.1);  squeeze_48 = None
        mul_114: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg99_1, 0.9)
        add_88: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_113, mul_114);  mul_113 = mul_114 = None
        squeeze_50: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_34, [0, 2, 3]);  getitem_34 = None
        mul_115: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_50, 1.0208333333333333);  squeeze_50 = None
        mul_116: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_115, 0.1);  mul_115 = None
        mul_117: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg100_1, 0.9)
        add_89: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_116, mul_117);  mul_116 = mul_117 = None
        unsqueeze_64: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg101_1, -1);  arg101_1 = None
        unsqueeze_65: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_64, -1);  unsqueeze_64 = None
        mul_118: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_112, unsqueeze_65);  mul_112 = unsqueeze_65 = None
        unsqueeze_66: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg102_1, -1);  arg102_1 = None
        unsqueeze_67: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_66, -1);  unsqueeze_66 = None
        add_90: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_118, unsqueeze_67);  mul_118 = unsqueeze_67 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_17: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.convolution.default(relu_12, arg103_1, None, [2, 2], [0, 0], [1, 1], False, [0, 0], 1);  relu_12 = arg103_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:100 in forward, code: identity = self.downsample(x)
        add_91: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg104_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_17 = torch.ops.aten.var_mean.correction(convolution_17, [0, 2, 3], correction = 0, keepdim = True)
        getitem_36: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_17[0]
        getitem_37: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_17[1];  var_mean_17 = None
        add_92: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_36, 1e-05)
        rsqrt_17: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_92);  add_92 = None
        sub_17: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_17, getitem_37);  convolution_17 = None
        mul_119: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_17, rsqrt_17);  sub_17 = rsqrt_17 = None
        squeeze_51: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_37, [0, 2, 3]);  getitem_37 = None
        mul_120: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_51, 0.1);  squeeze_51 = None
        mul_121: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg105_1, 0.9)
        add_93: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_120, mul_121);  mul_120 = mul_121 = None
        squeeze_53: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_36, [0, 2, 3]);  getitem_36 = None
        mul_122: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_53, 1.0208333333333333);  squeeze_53 = None
        mul_123: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_122, 0.1);  mul_122 = None
        mul_124: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg106_1, 0.9)
        add_94: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_123, mul_124);  mul_123 = mul_124 = None
        unsqueeze_68: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg107_1, -1);  arg107_1 = None
        unsqueeze_69: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_68, -1);  unsqueeze_68 = None
        mul_125: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_119, unsqueeze_69);  mul_119 = unsqueeze_69 = None
        unsqueeze_70: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg108_1, -1);  arg108_1 = None
        unsqueeze_71: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_70, -1);  unsqueeze_70 = None
        add_95: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_125, unsqueeze_71);  mul_125 = unsqueeze_71 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_96: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.add.Tensor(add_90, add_95);  add_90 = add_95 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_14: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.relu.default(add_96);  add_96 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_18: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.convolution.default(relu_14, arg109_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  arg109_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        add_97: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg110_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_18 = torch.ops.aten.var_mean.correction(convolution_18, [0, 2, 3], correction = 0, keepdim = True)
        getitem_38: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_18[0]
        getitem_39: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_18[1];  var_mean_18 = None
        add_98: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_38, 1e-05)
        rsqrt_18: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_98);  add_98 = None
        sub_18: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_18, getitem_39);  convolution_18 = None
        mul_126: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_18, rsqrt_18);  sub_18 = rsqrt_18 = None
        squeeze_54: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_39, [0, 2, 3]);  getitem_39 = None
        mul_127: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_54, 0.1);  squeeze_54 = None
        mul_128: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg111_1, 0.9)
        add_99: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_127, mul_128);  mul_127 = mul_128 = None
        squeeze_56: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_38, [0, 2, 3]);  getitem_38 = None
        mul_129: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_56, 1.0208333333333333);  squeeze_56 = None
        mul_130: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_129, 0.1);  mul_129 = None
        mul_131: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg112_1, 0.9)
        add_100: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_130, mul_131);  mul_130 = mul_131 = None
        unsqueeze_72: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg113_1, -1);  arg113_1 = None
        unsqueeze_73: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_72, -1);  unsqueeze_72 = None
        mul_132: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_126, unsqueeze_73);  mul_126 = unsqueeze_73 = None
        unsqueeze_74: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg114_1, -1);  arg114_1 = None
        unsqueeze_75: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_74, -1);  unsqueeze_74 = None
        add_101: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_132, unsqueeze_75);  mul_132 = unsqueeze_75 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_15: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.relu.default(add_101);  add_101 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        convolution_19: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.convolution.default(relu_15, arg115_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1);  relu_15 = arg115_1 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        add_102: "i64[][]cuda:0" = torch.ops.aten.add.Tensor(arg116_1, 1)
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        var_mean_19 = torch.ops.aten.var_mean.correction(convolution_19, [0, 2, 3], correction = 0, keepdim = True)
        getitem_40: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_19[0]
        getitem_41: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = var_mean_19[1];  var_mean_19 = None
        add_103: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_40, 1e-05)
        rsqrt_19: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_103);  add_103 = None
        sub_19: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.sub.Tensor(convolution_19, getitem_41);  convolution_19 = None
        mul_133: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_19, rsqrt_19);  sub_19 = rsqrt_19 = None
        squeeze_57: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_41, [0, 2, 3]);  getitem_41 = None
        mul_134: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_57, 0.1);  squeeze_57 = None
        mul_135: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg117_1, 0.9)
        add_104: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_134, mul_135);  mul_134 = mul_135 = None
        squeeze_59: "f32[512][1]cuda:0" = torch.ops.aten.squeeze.dims(getitem_40, [0, 2, 3]);  getitem_40 = None
        mul_136: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(squeeze_59, 1.0208333333333333);  squeeze_59 = None
        mul_137: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(mul_136, 0.1);  mul_136 = None
        mul_138: "f32[512][1]cuda:0" = torch.ops.aten.mul.Tensor(arg118_1, 0.9)
        add_105: "f32[512][1]cuda:0" = torch.ops.aten.add.Tensor(mul_137, mul_138);  mul_137 = mul_138 = None
        unsqueeze_76: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg119_1, -1);  arg119_1 = None
        unsqueeze_77: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_76, -1);  unsqueeze_76 = None
        mul_139: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_133, unsqueeze_77);  mul_133 = unsqueeze_77 = None
        unsqueeze_78: "f32[512, 1][1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(arg120_1, -1);  arg120_1 = None
        unsqueeze_79: "f32[512, 1, 1][1, 1, 1]cuda:0" = torch.ops.aten.unsqueeze.default(unsqueeze_78, -1);  unsqueeze_78 = None
        add_106: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_139, unsqueeze_79);  mul_139 = unsqueeze_79 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:102 in forward, code: out += identity
        add_107: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.add.Tensor(add_106, relu_14);  add_106 = relu_14 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        relu_16: "f32[1, 512, 7, 7][25088, 49, 7, 1]cuda:0" = torch.ops.aten.relu.default(add_107);  add_107 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        mean: "f32[1, 512, 1, 1][512, 1, 1, 1]cuda:0" = torch.ops.aten.mean.dim(relu_16, [-1, -2], True);  relu_16 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        view: "f32[1, 512][512, 1]cuda:0" = torch.ops.aten.view.default(mean, [1, 512]);  mean = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        permute: "f32[512, 1000][1, 512]cuda:0" = torch.ops.aten.permute.default(arg121_1, [1, 0]);  arg121_1 = None
        addmm: "f32[1, 1000][1000, 1]cuda:0" = torch.ops.aten.addmm.default(arg122_1, view, permute);  arg122_1 = view = permute = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:269 in _forward_impl, code: x = self.bn1(x)
        copy_: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg2_1, add);  arg2_1 = add = copy_ = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__1: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg3_1, add_2);  arg3_1 = add_2 = copy__1 = None
        copy__2: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg4_1, add_3);  arg4_1 = add_3 = copy__2 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__3: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg8_1, add_5);  arg8_1 = add_5 = copy__3 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__4: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg9_1, add_7);  arg9_1 = add_7 = copy__4 = None
        copy__5: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg10_1, add_8);  arg10_1 = add_8 = copy__5 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__6: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg14_1, add_10);  arg14_1 = add_10 = copy__6 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__7: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg15_1, add_12);  arg15_1 = add_12 = copy__7 = None
        copy__8: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg16_1, add_13);  arg16_1 = add_13 = copy__8 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__9: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg20_1, add_16);  arg20_1 = add_16 = copy__9 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__10: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg21_1, add_18);  arg21_1 = add_18 = copy__10 = None
        copy__11: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg22_1, add_19);  arg22_1 = add_19 = copy__11 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__12: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg26_1, add_21);  arg26_1 = add_21 = copy__12 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__13: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg27_1, add_23);  arg27_1 = add_23 = copy__13 = None
        copy__14: "f32[64][1]cuda:0" = torch.ops.aten.copy_.default(arg28_1, add_24);  arg28_1 = add_24 = copy__14 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__15: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg32_1, add_27);  arg32_1 = add_27 = copy__15 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__16: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg33_1, add_29);  arg33_1 = add_29 = copy__16 = None
        copy__17: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg34_1, add_30);  arg34_1 = add_30 = copy__17 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__18: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg38_1, add_32);  arg38_1 = add_32 = copy__18 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__19: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg39_1, add_34);  arg39_1 = add_34 = copy__19 = None
        copy__20: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg40_1, add_35);  arg40_1 = add_35 = copy__20 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:100 in forward, code: identity = self.downsample(x)
        copy__21: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg44_1, add_37);  arg44_1 = add_37 = copy__21 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__22: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg45_1, add_39);  arg45_1 = add_39 = copy__22 = None
        copy__23: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg46_1, add_40);  arg46_1 = add_40 = copy__23 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__24: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg50_1, add_43);  arg50_1 = add_43 = copy__24 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__25: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg51_1, add_45);  arg51_1 = add_45 = copy__25 = None
        copy__26: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg52_1, add_46);  arg52_1 = add_46 = copy__26 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__27: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg56_1, add_48);  arg56_1 = add_48 = copy__27 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__28: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg57_1, add_50);  arg57_1 = add_50 = copy__28 = None
        copy__29: "f32[128][1]cuda:0" = torch.ops.aten.copy_.default(arg58_1, add_51);  arg58_1 = add_51 = copy__29 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__30: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg62_1, add_54);  arg62_1 = add_54 = copy__30 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__31: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg63_1, add_56);  arg63_1 = add_56 = copy__31 = None
        copy__32: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg64_1, add_57);  arg64_1 = add_57 = copy__32 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__33: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg68_1, add_59);  arg68_1 = add_59 = copy__33 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__34: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg69_1, add_61);  arg69_1 = add_61 = copy__34 = None
        copy__35: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg70_1, add_62);  arg70_1 = add_62 = copy__35 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:100 in forward, code: identity = self.downsample(x)
        copy__36: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg74_1, add_64);  arg74_1 = add_64 = copy__36 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__37: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg75_1, add_66);  arg75_1 = add_66 = copy__37 = None
        copy__38: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg76_1, add_67);  arg76_1 = add_67 = copy__38 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__39: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg80_1, add_70);  arg80_1 = add_70 = copy__39 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__40: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg81_1, add_72);  arg81_1 = add_72 = copy__40 = None
        copy__41: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg82_1, add_73);  arg82_1 = add_73 = copy__41 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__42: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg86_1, add_75);  arg86_1 = add_75 = copy__42 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__43: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg87_1, add_77);  arg87_1 = add_77 = copy__43 = None
        copy__44: "f32[256][1]cuda:0" = torch.ops.aten.copy_.default(arg88_1, add_78);  arg88_1 = add_78 = copy__44 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__45: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg92_1, add_81);  arg92_1 = add_81 = copy__45 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__46: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg93_1, add_83);  arg93_1 = add_83 = copy__46 = None
        copy__47: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg94_1, add_84);  arg94_1 = add_84 = copy__47 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__48: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg98_1, add_86);  arg98_1 = add_86 = copy__48 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__49: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg99_1, add_88);  arg99_1 = add_88 = copy__49 = None
        copy__50: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg100_1, add_89);  arg100_1 = add_89 = copy__50 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:100 in forward, code: identity = self.downsample(x)
        copy__51: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg104_1, add_91);  arg104_1 = add_91 = copy__51 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__52: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg105_1, add_93);  arg105_1 = add_93 = copy__52 = None
        copy__53: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg106_1, add_94);  arg106_1 = add_94 = copy__53 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:93 in forward, code: out = self.bn1(out)
        copy__54: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg110_1, add_97);  arg110_1 = add_97 = copy__54 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__55: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg111_1, add_99);  arg111_1 = add_99 = copy__55 = None
        copy__56: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg112_1, add_100);  arg112_1 = add_100 = copy__56 = None
        
         # File: /data/users/chilli/vision/torchvision/models/resnet.py:97 in forward, code: out = self.bn2(out)
        copy__57: "i64[][]cuda:0" = torch.ops.aten.copy_.default(arg116_1, add_102);  arg116_1 = add_102 = copy__57 = None
        
         # File: /data/users/chilli/pytorch/torch/utils/_device.py:106 in __torch_function__, code: return func(*args, **kwargs)
        copy__58: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg117_1, add_104);  arg117_1 = add_104 = copy__58 = None
        copy__59: "f32[512][1]cuda:0" = torch.ops.aten.copy_.default(arg118_1, add_105);  arg118_1 = add_105 = copy__59 = None
        return (addmm,)
`
let code_str = `
# AOT ID: ['0_inference']
from ctypes import c_void_p, c_long, c_int
import torch
import math
import random
import os
import tempfile
from math import inf, nan
from torch._inductor.hooks import run_intermediate_hooks
from torch._inductor.utils import maybe_profile
from torch._inductor.codegen.memory_planning import _align as align
from torch import device, empty_strided
from torch._inductor.async_compile import AsyncCompile
from torch._inductor.select_algorithm import extern_kernels
from torch._inductor.codegen.multi_kernel import MultiKernelCall
import triton
import triton.language as tl
from torch._inductor.runtime.triton_heuristics import grid, split_scan_grid, grid_combo_kernels, start_graph, end_graph
from torch._C import _cuda_getCurrentRawStream as get_raw_stream

aten = torch.ops.aten
inductor_ops = torch.ops.inductor
_quantized = torch.ops._quantized
assert_size_stride = torch._C._dynamo.guards.assert_size_stride
empty_strided_cpu = torch._C._dynamo.guards._empty_strided_cpu
empty_strided_cuda = torch._C._dynamo.guards._empty_strided_cuda
empty_strided_xpu = torch._C._dynamo.guards._empty_strided_xpu
reinterpret_tensor = torch._C._dynamo.guards._reinterpret_tensor
alloc_from_pool = torch.ops.inductor._alloc_from_pool
async_compile = AsyncCompile()


# kernel path: /tmp/torchinductor_chilli/3k/c3krw73s4gx6tabfimxa3z7ooy3zhzk7cnebohcsmrl6kjzl7zfk.py
# Topologically Sorted Source Nodes: [x], Original ATen: [aten.convolution]
# Source node to ATen node mapping:
#   x => convolution
# Graph fragment:
#   %convolution : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%arg1_1, %arg0_1, None, [2, 2], [3, 3], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused_convolution_0 = async_compile.triton('triton_poi_fused_convolution_0', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[4, 65536], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 3), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_convolution_0', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_convolution_0(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 3
    xnumel = 50176
    yoffset = tl.program_id(1) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = yindex < ynumel
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x1 = xindex
    y0 = yindex
    tmp0 = tl.load(in_ptr0 + (x1 + (50176*y0)), xmask & ymask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (3*x1)), tmp0, xmask & ymask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/3b/c3bhtpqmthra7zie57zxatssacilt44auacsryelugkul7lheqbx.py
# Topologically Sorted Source Nodes: [x], Original ATen: [aten.convolution]
# Source node to ATen node mapping:
#   x => convolution
# Graph fragment:
#   %convolution : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%arg1_1, %arg0_1, None, [2, 2], [3, 3], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused_convolution_1 = async_compile.triton('triton_poi_fused_convolution_1', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[256, 64], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_convolution_1', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_convolution_1(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 192
    xnumel = 49
    yoffset = tl.program_id(1) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = yindex < ynumel
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 3
    y1 = (yindex // 3)
    tmp0 = tl.load(in_ptr0 + (x2 + (49*y3)), xmask & ymask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (3*x2) + (147*y1)), tmp0, xmask & ymask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/tn/ctn3ynmkocadyniddzbezjrou5n2nc4gmtk27k7gl54a5pwjtaq2.py
# Topologically Sorted Source Nodes: [x_1], Original ATen: [aten._native_batch_norm_legit_functional]
# Source node to ATen node mapping:
#   x_1 => var_mean
# Graph fragment:
#   %var_mean : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
triton_per_fused__native_batch_norm_legit_functional_2 = async_compile.triton('triton_per_fused__native_batch_norm_legit_functional_2', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.persistent_reduction(
    size_hints=[8192, 128],
    reduction_hint=ReductionHint.INNER,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: 'i32', 5: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_per_fused__native_batch_norm_legit_functional_2', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 5, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_per_fused__native_batch_norm_legit_functional_2(in_ptr0, out_ptr0, out_ptr1, out_ptr2, xnumel, rnumel, XBLOCK : tl.constexpr):
    xnumel = 6272
    rnumel = 128
    RBLOCK: tl.constexpr = 128
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    rindex = tl.arange(0, RBLOCK)[None, :]
    roffset = 0
    rmask = tl.full([XBLOCK, RBLOCK], True, tl.int1)
    r2 = rindex
    x0 = xindex % 64
    x1 = (xindex // 64)
    x3 = xindex
    tmp0 = tl.load(in_ptr0 + (x0 + (64*r2) + (8192*x1)), xmask, other=0.0)
    tmp1 = tl.broadcast_to(tmp0, [XBLOCK, RBLOCK])
    tmp3 = tl.where(xmask, tmp1, 0)
    tmp4 = tl.broadcast_to(tmp1, [XBLOCK, RBLOCK])
    tmp6 = tl.where(xmask, tmp4, 0)
    tmp7 = tl.sum(tmp6, 1)[:, None]
    tmp8 = tl.full([XBLOCK, 1], 128, tl.int32)
    tmp9 = tmp8.to(tl.float32)
    tmp10 = tmp7 / tmp9
    tmp11 = tmp1 - tmp10
    tmp12 = tmp11 * tmp11
    tmp13 = tl.broadcast_to(tmp12, [XBLOCK, RBLOCK])
    tmp15 = tl.where(xmask, tmp13, 0)
    tmp16 = tl.sum(tmp15, 1)[:, None]
    tl.store(out_ptr0 + (x3), tmp10, xmask)
    tl.store(out_ptr1 + (x3), tmp16, xmask)
    tl.store(out_ptr2 + (x3), tmp9, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/xm/cxmbus4yrwubzf4zdbqtrm2n4cv4uwlxynm7bqs6ajmbrizs5qir.py
# Topologically Sorted Source Nodes: [x_1], Original ATen: [aten._native_batch_norm_legit_functional]
# Source node to ATen node mapping:
#   x_1 => var_mean
# Graph fragment:
#   %var_mean : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
triton_per_fused__native_batch_norm_legit_functional_3 = async_compile.triton('triton_per_fused__native_batch_norm_legit_functional_3', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.persistent_reduction(
    size_hints=[128, 64],
    reduction_hint=ReductionHint.INNER,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32', 7: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_per_fused__native_batch_norm_legit_functional_3', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 3, 'num_reduction': 3, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_per_fused__native_batch_norm_legit_functional_3(in_ptr0, in_ptr1, in_ptr2, out_ptr0, out_ptr1, out_ptr2, xnumel, rnumel, XBLOCK : tl.constexpr):
    xnumel = 128
    rnumel = 49
    RBLOCK: tl.constexpr = 64
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    rindex = tl.arange(0, RBLOCK)[None, :]
    roffset = 0
    rmask = rindex < rnumel
    r2 = rindex
    x0 = xindex % 64
    x1 = (xindex // 64)
    x3 = xindex
    tmp0 = tl.load(in_ptr0 + (x0 + (64*r2) + (3136*x1)), rmask & xmask, other=0.0)
    tmp1 = tl.load(in_ptr1 + (x0 + (64*r2) + (3136*x1)), rmask & xmask, other=0.0)
    tmp2 = tl.load(in_ptr2 + (x0 + (64*r2) + (3136*x1)), rmask & xmask, other=0.0)
    tmp3 = tl.broadcast_to(tmp0, [XBLOCK, RBLOCK])
    tmp4 = tl.broadcast_to(tmp1, [XBLOCK, RBLOCK])
    tmp5 = tl.broadcast_to(tmp2, [XBLOCK, RBLOCK])
    tmp7 = tl.where(rmask & xmask, tmp3, 0)
    tmp8 = tl.where(rmask & xmask, tmp4, 0)
    tmp9 = tl.where(rmask & xmask, tmp5, 0)
    tmp10, tmp11, tmp12 = triton_helpers.welford(tmp7, tmp8, tmp9, 1)
    tmp13 = tmp10[:, None]
    tmp14 = tmp11[:, None]
    tmp15 = tmp12[:, None]
    tl.store(out_ptr0 + (x3), tmp13, xmask)
    tl.store(out_ptr1 + (x3), tmp14, xmask)
    tl.store(out_ptr2 + (x3), tmp15, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/5k/c5kyq6ilmfpqjaef5ouysr4ecwf6xjkkqkjsot4clbsp56xxgkvk.py
# Topologically Sorted Source Nodes: [x_1], Original ATen: [aten._native_batch_norm_legit_functional]
# Source node to ATen node mapping:
#   x_1 => add_2, add_3, mul_1, mul_2, mul_3, mul_4, mul_5, var_mean
# Graph fragment:
#   %var_mean : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %mul_1 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze, 0.1), kwargs = {})
#   %mul_2 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg3_1, 0.9), kwargs = {})
#   %add_2 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_1, %mul_2), kwargs = {})
#   %mul_3 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_2, 1.0000797257434426), kwargs = {})
#   %mul_4 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_3, 0.1), kwargs = {})
#   %mul_5 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg4_1, 0.9), kwargs = {})
#   %add_3 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_4, %mul_5), kwargs = {})
#   %copy__1 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg3_1, %add_2), kwargs = {})
#   %copy__2 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg4_1, %add_3), kwargs = {})
triton_per_fused__native_batch_norm_legit_functional_4 = async_compile.triton('triton_per_fused__native_batch_norm_legit_functional_4', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.persistent_reduction(
    size_hints=[64, 2],
    reduction_hint=ReductionHint.INNER,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: '*fp32', 8: '*fp32', 9: 'i32', 10: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7, 8, 9), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_per_fused__native_batch_norm_legit_functional_4', 'mutated_arg_names': ['in_ptr3', 'in_ptr4', 'out_ptr3', 'out_ptr5'], 'no_x_dim': False, 'num_load': 5, 'num_reduction': 2, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_per_fused__native_batch_norm_legit_functional_4(in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, out_ptr0, out_ptr1, out_ptr3, out_ptr5, xnumel, rnumel, XBLOCK : tl.constexpr):
    xnumel = 64
    rnumel = 2
    RBLOCK: tl.constexpr = 2
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    rindex = tl.arange(0, RBLOCK)[None, :]
    roffset = 0
    rmask = tl.full([XBLOCK, RBLOCK], True, tl.int1)
    r1 = rindex
    x0 = xindex
    tmp0 = tl.load(in_ptr0 + (x0 + (64*r1)), xmask, other=0.0)
    tmp1 = tl.load(in_ptr1 + (x0 + (64*r1)), xmask, other=0.0)
    tmp2 = tl.load(in_ptr2 + (x0 + (64*r1)), xmask, other=0.0)
    tmp18 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp27 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.broadcast_to(tmp0, [XBLOCK, RBLOCK])
    tmp4 = tl.broadcast_to(tmp1, [XBLOCK, RBLOCK])
    tmp5 = tl.broadcast_to(tmp2, [XBLOCK, RBLOCK])
    tmp7 = tl.where(xmask, tmp3, 0)
    tmp8 = tl.where(xmask, tmp4, 0)
    tmp9 = tl.where(xmask, tmp5, 0)
    tmp10, tmp11, tmp12 = triton_helpers.welford(tmp7, tmp8, tmp9, 1)
    tmp13 = tmp10[:, None]
    tmp14 = tmp11[:, None]
    tmp15 = tmp12[:, None]
    tmp16 = 0.1
    tmp17 = tmp13 * tmp16
    tmp19 = 0.9
    tmp20 = tmp18 * tmp19
    tmp21 = tmp17 + tmp20
    tmp22 = 12544.0
    tmp23 = tmp14 / tmp22
    tmp24 = 1.0000797257434426
    tmp25 = tmp23 * tmp24
    tmp26 = tmp25 * tmp16
    tmp28 = tmp27 * tmp19
    tmp29 = tmp26 + tmp28
    tl.store(out_ptr3 + (x0), tmp21, xmask)
    tl.store(out_ptr5 + (x0), tmp29, xmask)
    tl.store(out_ptr0 + (x0), tmp13, xmask)
    tl.store(out_ptr1 + (x0), tmp14, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/vj/cvjmrjza3nggxzt7bdsycoz76eva6d25nvgrwgojmthv64z6b2wn.py
# Topologically Sorted Source Nodes: [x_1, x_2], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
# Source node to ATen node mapping:
#   x_1 => add_1, add_4, mul, mul_6, rsqrt, sub, var_mean
#   x_2 => relu
# Graph fragment:
#   %var_mean : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution, %getitem_1), kwargs = {})
#   %add_1 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem, 1e-05), kwargs = {})
#   %rsqrt : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_1,), kwargs = {})
#   %mul : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub, %rsqrt), kwargs = {})
#   %mul_6 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul, %unsqueeze_1), kwargs = {})
#   %add_4 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_6, %unsqueeze_3), kwargs = {})
#   %relu : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_4,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_relu_5 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_relu_5', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[1048576], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_relu_5', 'mutated_arg_names': ['in_out_ptr0'], 'no_x_dim': False, 'num_load': 5, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_relu_5(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, xnumel, XBLOCK : tl.constexpr):
    xnumel = 802816
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = tl.full([XBLOCK], True, tl.int1)
    x2 = xindex
    x0 = xindex % 64
    tmp0 = tl.load(in_out_ptr0 + (x2), None)
    tmp1 = tl.load(in_ptr0 + (x0), None, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr1 + (x0), None, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr2 + (x0), None, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr3 + (x0), None, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 12544.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp14 = tl.full([1], 0, tl.int32)
    tmp15 = triton_helpers.maximum(tmp14, tmp13)
    tl.store(in_out_ptr0 + (x2), tmp15, None)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/2i/c2idz2pehr5sta2icsluz2eshxscfd2cpwuhipytvsh3r55qqshr.py
# Topologically Sorted Source Nodes: [x_1, x_2, x_3], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.max_pool2d_with_indices]
# Source node to ATen node mapping:
#   x_1 => add_1, add_4, mul, mul_6, rsqrt, sub, var_mean
#   x_2 => relu
#   x_3 => _low_memory_max_pool2d_with_offsets
# Graph fragment:
#   %var_mean : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution, %getitem_1), kwargs = {})
#   %add_1 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem, 1e-05), kwargs = {})
#   %rsqrt : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_1,), kwargs = {})
#   %mul : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub, %rsqrt), kwargs = {})
#   %mul_6 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul, %unsqueeze_1), kwargs = {})
#   %add_4 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_6, %unsqueeze_3), kwargs = {})
#   %relu : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_4,), kwargs = {})
#   %_low_memory_max_pool2d_with_offsets : [num_users=1] = call_function[target=torch.ops.prims._low_memory_max_pool2d_with_offsets.default](args = (%relu, [3, 3], [2, 2], [1, 1], [1, 1], False), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_max_pool2d_with_indices_relu_6 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_max_pool2d_with_indices_relu_6', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[262144], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_max_pool2d_with_indices_relu_6', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 9, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_max_pool2d_with_indices_relu_6(in_ptr0, out_ptr0, xnumel, XBLOCK : tl.constexpr):
    xnumel = 200704
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = tl.full([XBLOCK], True, tl.int1)
    x2 = (xindex // 3584)
    x1 = (xindex // 64) % 56
    x0 = xindex % 64
    x4 = xindex
    tmp0 = (-1) + (2*x2)
    tmp1 = tl.full([1], 0, tl.int64)
    tmp2 = tmp0 >= tmp1
    tmp3 = tl.full([1], 112, tl.int64)
    tmp4 = tmp0 < tmp3
    tmp5 = tmp2 & tmp4
    tmp6 = (-1) + (2*x1)
    tmp7 = tmp6 >= tmp1
    tmp8 = tmp6 < tmp3
    tmp9 = tmp7 & tmp8
    tmp10 = tmp5 & tmp9
    tmp11 = tl.load(in_ptr0 + ((-7232) + x0 + (128*x1) + (14336*x2)), tmp10, other=float("-inf"))
    tmp12 = 2*x1
    tmp13 = tmp12 >= tmp1
    tmp14 = tmp12 < tmp3
    tmp15 = tmp13 & tmp14
    tmp16 = tmp5 & tmp15
    tmp17 = tl.load(in_ptr0 + ((-7168) + x0 + (128*x1) + (14336*x2)), tmp16, other=float("-inf"))
    tmp18 = triton_helpers.maximum(tmp17, tmp11)
    tmp19 = 1 + (2*x1)
    tmp20 = tmp19 >= tmp1
    tmp21 = tmp19 < tmp3
    tmp22 = tmp20 & tmp21
    tmp23 = tmp5 & tmp22
    tmp24 = tl.load(in_ptr0 + ((-7104) + x0 + (128*x1) + (14336*x2)), tmp23, other=float("-inf"))
    tmp25 = triton_helpers.maximum(tmp24, tmp18)
    tmp26 = 2*x2
    tmp27 = tmp26 >= tmp1
    tmp28 = tmp26 < tmp3
    tmp29 = tmp27 & tmp28
    tmp30 = tmp29 & tmp9
    tmp31 = tl.load(in_ptr0 + ((-64) + x0 + (128*x1) + (14336*x2)), tmp30, other=float("-inf"))
    tmp32 = triton_helpers.maximum(tmp31, tmp25)
    tmp33 = tmp29 & tmp15
    tmp34 = tl.load(in_ptr0 + (x0 + (128*x1) + (14336*x2)), tmp33, other=float("-inf"))
    tmp35 = triton_helpers.maximum(tmp34, tmp32)
    tmp36 = tmp29 & tmp22
    tmp37 = tl.load(in_ptr0 + (64 + x0 + (128*x1) + (14336*x2)), tmp36, other=float("-inf"))
    tmp38 = triton_helpers.maximum(tmp37, tmp35)
    tmp39 = 1 + (2*x2)
    tmp40 = tmp39 >= tmp1
    tmp41 = tmp39 < tmp3
    tmp42 = tmp40 & tmp41
    tmp43 = tmp42 & tmp9
    tmp44 = tl.load(in_ptr0 + (7104 + x0 + (128*x1) + (14336*x2)), tmp43, other=float("-inf"))
    tmp45 = triton_helpers.maximum(tmp44, tmp38)
    tmp46 = tmp42 & tmp15
    tmp47 = tl.load(in_ptr0 + (7168 + x0 + (128*x1) + (14336*x2)), tmp46, other=float("-inf"))
    tmp48 = triton_helpers.maximum(tmp47, tmp45)
    tmp49 = tmp42 & tmp22
    tmp50 = tl.load(in_ptr0 + (7232 + x0 + (128*x1) + (14336*x2)), tmp49, other=float("-inf"))
    tmp51 = triton_helpers.maximum(tmp50, tmp48)
    tl.store(out_ptr0 + (x4), tmp51, None)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/uk/cukrovmigmb3dk2rhkplpmbdo7bmtxahbsb3uzttnbhukdmdhm7j.py
# Topologically Sorted Source Nodes: [out], Original ATen: [aten.convolution]
# Source node to ATen node mapping:
#   out => convolution_1
# Graph fragment:
#   %convolution_1 : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%getitem_2, %arg7_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused_convolution_7 = async_compile.triton('triton_poi_fused_convolution_7', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[4096, 16], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_convolution_7', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_convolution_7(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 4096
    xnumel = 9
    yoffset = tl.program_id(1) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = tl.full([XBLOCK, YBLOCK], True, tl.int1)
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 64
    y1 = (yindex // 64)
    tmp0 = tl.load(in_ptr0 + (x2 + (9*y3)), xmask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (64*x2) + (576*y1)), tmp0, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/md/cmdqzzbflckyvq7ejf53h6jd3zlbjoysihyj4fplh7mryixi2j7f.py
# Topologically Sorted Source Nodes: [out_1], Original ATen: [aten._native_batch_norm_legit_functional]
# Source node to ATen node mapping:
#   out_1 => add_7, add_8, mul_10, mul_11, mul_12, mul_8, mul_9, var_mean_1
# Graph fragment:
#   %var_mean_1 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_1, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %mul_8 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_3, 0.1), kwargs = {})
#   %mul_9 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg9_1, 0.9), kwargs = {})
#   %add_7 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_8, %mul_9), kwargs = {})
#   %mul_10 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_5, 1.0003189792663476), kwargs = {})
#   %mul_11 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_10, 0.1), kwargs = {})
#   %mul_12 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg10_1, 0.9), kwargs = {})
#   %add_8 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_11, %mul_12), kwargs = {})
#   %copy__4 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg9_1, %add_7), kwargs = {})
#   %copy__5 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg10_1, %add_8), kwargs = {})
triton_red_fused__native_batch_norm_legit_functional_8 = async_compile.triton('triton_red_fused__native_batch_norm_legit_functional_8', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.reduction(
    size_hints=[64, 4096],
    reduction_hint=ReductionHint.INNER,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: 'i32', 8: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7, 8), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_red_fused__native_batch_norm_legit_functional_8', 'mutated_arg_names': ['in_ptr1', 'in_ptr2', 'out_ptr3', 'out_ptr5'], 'no_x_dim': False, 'num_load': 3, 'num_reduction': 2, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_red_fused__native_batch_norm_legit_functional_8(in_ptr0, in_ptr1, in_ptr2, out_ptr0, out_ptr1, out_ptr3, out_ptr5, xnumel, rnumel, XBLOCK : tl.constexpr, RBLOCK : tl.constexpr):
    xnumel = 64
    rnumel = 3136
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    rbase = tl.arange(0, RBLOCK)[None, :]
    x0 = xindex
    tmp2_mean = tl.zeros([XBLOCK, RBLOCK], tl.float32)
    tmp2_m2 = tl.zeros([XBLOCK, RBLOCK], tl.float32)
    tmp2_weight = tl.zeros([XBLOCK, RBLOCK], tl.float32)
    for roffset in range(0, rnumel, RBLOCK):
        rindex = roffset + rbase
        rmask = rindex < rnumel
        r1 = rindex
        tmp0 = tl.load(in_ptr0 + (x0 + (64*r1)), rmask & xmask, eviction_policy='evict_first', other=0.0)
        tmp1 = tl.broadcast_to(tmp0, [XBLOCK, RBLOCK])
        tmp2_mean_next, tmp2_m2_next, tmp2_weight_next = triton_helpers.welford_reduce(
            tmp1, tmp2_mean, tmp2_m2, tmp2_weight, roffset == 0
        )
        tmp2_mean = tl.where(rmask & xmask, tmp2_mean_next, tmp2_mean)
        tmp2_m2 = tl.where(rmask & xmask, tmp2_m2_next, tmp2_m2)
        tmp2_weight = tl.where(rmask & xmask, tmp2_weight_next, tmp2_weight)
    tmp2_tmp, tmp3_tmp, tmp4_tmp = triton_helpers.welford(
        tmp2_mean, tmp2_m2, tmp2_weight, 1
    )
    tmp2 = tmp2_tmp[:, None]
    tmp3 = tmp3_tmp[:, None]
    tmp4 = tmp4_tmp[:, None]
    tl.store(out_ptr0 + (x0), tmp2, xmask)
    tl.store(out_ptr1 + (x0), tmp3, xmask)
    tmp7 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp16 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp5 = 0.1
    tmp6 = tmp2 * tmp5
    tmp8 = 0.9
    tmp9 = tmp7 * tmp8
    tmp10 = tmp6 + tmp9
    tmp11 = 3136.0
    tmp12 = tmp3 / tmp11
    tmp13 = 1.0003189792663476
    tmp14 = tmp12 * tmp13
    tmp15 = tmp14 * tmp5
    tmp17 = tmp16 * tmp8
    tmp18 = tmp15 + tmp17
    tl.store(out_ptr3 + (x0), tmp10, xmask)
    tl.store(out_ptr5 + (x0), tmp18, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/pm/cpmhrq7x7vek2dlvcrhtq6ui436gvaynpenr763k4dfqh3vglimf.py
# Topologically Sorted Source Nodes: [out_1, out_2], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
# Source node to ATen node mapping:
#   out_1 => add_6, add_9, mul_13, mul_7, rsqrt_1, sub_1, var_mean_1
#   out_2 => relu_1
# Graph fragment:
#   %var_mean_1 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_1, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_1 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_1, %getitem_5), kwargs = {})
#   %add_6 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_4, 1e-05), kwargs = {})
#   %rsqrt_1 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_6,), kwargs = {})
#   %mul_7 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_1, %rsqrt_1), kwargs = {})
#   %mul_13 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_7, %unsqueeze_5), kwargs = {})
#   %add_9 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_13, %unsqueeze_7), kwargs = {})
#   %relu_1 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_9,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_relu_9 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_relu_9', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[262144], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_relu_9', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 5, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_relu_9(in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, out_ptr0, xnumel, XBLOCK : tl.constexpr):
    xnumel = 200704
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = tl.full([XBLOCK], True, tl.int1)
    x2 = xindex
    x0 = xindex % 64
    tmp0 = tl.load(in_ptr0 + (x2), None)
    tmp1 = tl.load(in_ptr1 + (x0), None, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), None, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), None, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), None, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 3136.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp14 = tl.full([1], 0, tl.int32)
    tmp15 = triton_helpers.maximum(tmp14, tmp13)
    tl.store(out_ptr0 + (x2), tmp15, None)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/vt/cvthgypewlynnzrzh2jumgwiaibutomikpgbscbrqjbngrusmiy7.py
# Topologically Sorted Source Nodes: [out_4, out_5, out_6], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
# Source node to ATen node mapping:
#   out_4 => add_11, add_14, mul_14, mul_20, rsqrt_2, sub_2, var_mean_2
#   out_5 => add_15
#   out_6 => relu_2
# Graph fragment:
#   %var_mean_2 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_2, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_2 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_2, %getitem_7), kwargs = {})
#   %add_11 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_6, 1e-05), kwargs = {})
#   %rsqrt_2 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_11,), kwargs = {})
#   %mul_14 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_2, %rsqrt_2), kwargs = {})
#   %mul_20 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_14, %unsqueeze_9), kwargs = {})
#   %add_14 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_20, %unsqueeze_11), kwargs = {})
#   %add_15 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%add_14, %getitem_2), kwargs = {})
#   %relu_2 : [num_users=2] = call_function[target=torch.ops.aten.relu.default](args = (%add_15,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_add_relu_10 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_add_relu_10', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[262144], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_add_relu_10', 'mutated_arg_names': ['in_out_ptr0'], 'no_x_dim': False, 'num_load': 6, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_add_relu_10(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, xnumel, XBLOCK : tl.constexpr):
    xnumel = 200704
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = tl.full([XBLOCK], True, tl.int1)
    x2 = xindex
    x0 = xindex % 64
    tmp0 = tl.load(in_ptr0 + (x2), None)
    tmp1 = tl.load(in_ptr1 + (x0), None, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), None, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), None, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), None, eviction_policy='evict_last')
    tmp14 = tl.load(in_out_ptr0 + (x2), None)
    tmp2 = tmp0 - tmp1
    tmp4 = 3136.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp15 = tmp13 + tmp14
    tmp16 = tl.full([1], 0, tl.int32)
    tmp17 = triton_helpers.maximum(tmp16, tmp15)
    tl.store(in_out_ptr0 + (x2), tmp17, None)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/e4/ce4inzmumergd3bhtu6urjwokb3d3smxsv7po36b2mbaxdhh5p37.py
# Topologically Sorted Source Nodes: [out_14], Original ATen: [aten.convolution]
# Source node to ATen node mapping:
#   out_14 => convolution_5
# Graph fragment:
#   %convolution_5 : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%relu_4, %arg31_1, None, [2, 2], [1, 1], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused_convolution_11 = async_compile.triton('triton_poi_fused_convolution_11', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[8192, 16], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_convolution_11', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_convolution_11(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 8192
    xnumel = 9
    yoffset = tl.program_id(1) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = tl.full([XBLOCK, YBLOCK], True, tl.int1)
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 64
    y1 = (yindex // 64)
    tmp0 = tl.load(in_ptr0 + (x2 + (9*y3)), xmask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (64*x2) + (576*y1)), tmp0, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/mp/cmphh7qh643f3ot6mh45hktfqdsyby3lnuzp57egnzy7h4t6dj4r.py
# Topologically Sorted Source Nodes: [out_15], Original ATen: [aten._native_batch_norm_legit_functional]
# Source node to ATen node mapping:
#   out_15 => add_29, add_30, mul_36, mul_37, mul_38, mul_39, mul_40, var_mean_5
# Graph fragment:
#   %var_mean_5 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_5, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %mul_36 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_15, 0.1), kwargs = {})
#   %mul_37 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg33_1, 0.9), kwargs = {})
#   %add_29 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_36, %mul_37), kwargs = {})
#   %mul_38 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_17, 1.0012771392081736), kwargs = {})
#   %mul_39 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_38, 0.1), kwargs = {})
#   %mul_40 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg34_1, 0.9), kwargs = {})
#   %add_30 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_39, %mul_40), kwargs = {})
#   %copy__16 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg33_1, %add_29), kwargs = {})
#   %copy__17 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg34_1, %add_30), kwargs = {})
triton_per_fused__native_batch_norm_legit_functional_12 = async_compile.triton('triton_per_fused__native_batch_norm_legit_functional_12', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.persistent_reduction(
    size_hints=[128, 1024],
    reduction_hint=ReductionHint.INNER,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: 'i32', 8: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7, 8), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_per_fused__native_batch_norm_legit_functional_12', 'mutated_arg_names': ['in_ptr1', 'in_ptr2', 'out_ptr3', 'out_ptr5'], 'no_x_dim': True, 'num_load': 3, 'num_reduction': 4, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_per_fused__native_batch_norm_legit_functional_12(in_ptr0, in_ptr1, in_ptr2, out_ptr0, out_ptr1, out_ptr3, out_ptr5, xnumel, rnumel):
    xnumel = 128
    XBLOCK: tl.constexpr = 1
    rnumel = 784
    RBLOCK: tl.constexpr = 1024
    xoffset = tl.program_id(0) * XBLOCK
    xindex = tl.full([1], xoffset, tl.int32)
    xmask = tl.full([RBLOCK], True, tl.int1)
    rindex = tl.arange(0, RBLOCK)[:]
    roffset = 0
    rmask = rindex < rnumel
    r1 = rindex
    x0 = xindex
    tmp0 = tl.load(in_ptr0 + (x0 + (128*r1)), rmask, other=0.0)
    tmp19 = tl.load(in_ptr1 + (x0), None, eviction_policy='evict_last')
    tmp28 = tl.load(in_ptr2 + (x0), None, eviction_policy='evict_last')
    tmp1 = tl.broadcast_to(tmp0, [RBLOCK])
    tmp3 = tl.where(rmask, tmp1, 0)
    tmp4 = tl.broadcast_to(tmp1, [RBLOCK])
    tmp6 = tl.where(rmask, tmp4, 0)
    tmp7 = triton_helpers.promote_to_tensor(tl.sum(tmp6, 0))
    tmp8 = tl.full([1], 784, tl.int32)
    tmp9 = tmp8.to(tl.float32)
    tmp10 = tmp7 / tmp9
    tmp11 = tmp1 - tmp10
    tmp12 = tmp11 * tmp11
    tmp13 = tl.broadcast_to(tmp12, [RBLOCK])
    tmp15 = tl.where(rmask, tmp13, 0)
    tmp16 = triton_helpers.promote_to_tensor(tl.sum(tmp15, 0))
    tmp17 = 0.1
    tmp18 = tmp10 * tmp17
    tmp20 = 0.9
    tmp21 = tmp19 * tmp20
    tmp22 = tmp18 + tmp21
    tmp23 = 784.0
    tmp24 = tmp16 / tmp23
    tmp25 = 1.0012771392081736
    tmp26 = tmp24 * tmp25
    tmp27 = tmp26 * tmp17
    tmp29 = tmp28 * tmp20
    tmp30 = tmp27 + tmp29
    tl.store(out_ptr3 + (x0), tmp22, None)
    tl.store(out_ptr5 + (x0), tmp30, None)
    tl.store(out_ptr0 + (x0), tmp10, None)
    tl.store(out_ptr1 + (x0), tmp16, None)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/fm/cfmzrpkxe6w5p2e5zktvajdl2apihmd32prftcxesmibxf76nd67.py
# Topologically Sorted Source Nodes: [out_15, out_16], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
# Source node to ATen node mapping:
#   out_15 => add_28, add_31, mul_35, mul_41, rsqrt_5, sub_5, var_mean_5
#   out_16 => relu_5
# Graph fragment:
#   %var_mean_5 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_5, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_5 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_5, %getitem_13), kwargs = {})
#   %add_28 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_12, 1e-05), kwargs = {})
#   %rsqrt_5 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_28,), kwargs = {})
#   %mul_35 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_5, %rsqrt_5), kwargs = {})
#   %mul_41 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_35, %unsqueeze_21), kwargs = {})
#   %add_31 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_41, %unsqueeze_23), kwargs = {})
#   %relu_5 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_31,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_relu_13 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_relu_13', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[131072], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_relu_13', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 5, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_relu_13(in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, out_ptr0, xnumel, XBLOCK : tl.constexpr):
    xnumel = 100352
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 128
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 784.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp14 = tl.full([1], 0, tl.int32)
    tmp15 = triton_helpers.maximum(tmp14, tmp13)
    tl.store(out_ptr0 + (x2), tmp15, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/kq/ckqzevzhcwquduhbz6vbqxvac5wzstqeahmlj2sczzkphrw5d3fe.py
# Topologically Sorted Source Nodes: [out_15, out_16, out_17], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
# Source node to ATen node mapping:
#   out_15 => add_28, add_31, mul_35, mul_41, rsqrt_5, sub_5, var_mean_5
#   out_16 => relu_5
#   out_17 => convolution_6
# Graph fragment:
#   %var_mean_5 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_5, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_5 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_5, %getitem_13), kwargs = {})
#   %add_28 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_12, 1e-05), kwargs = {})
#   %rsqrt_5 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_28,), kwargs = {})
#   %mul_35 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_5, %rsqrt_5), kwargs = {})
#   %mul_41 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_35, %unsqueeze_21), kwargs = {})
#   %add_31 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_41, %unsqueeze_23), kwargs = {})
#   %relu_5 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_31,), kwargs = {})
#   %convolution_6 : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%relu_5, %arg37_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_14 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_14', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[16384, 16], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_14', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_14(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 16384
    xnumel = 9
    yoffset = tl.program_id(1) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = tl.full([XBLOCK, YBLOCK], True, tl.int1)
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 128
    y1 = (yindex // 128)
    tmp0 = tl.load(in_ptr0 + (x2 + (9*y3)), xmask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (128*x2) + (1152*y1)), tmp0, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/fu/cfunceabqei6sra2n47mjtxzeqpjyghxnl7ivuoz5uovqq6pxnuj.py
# Topologically Sorted Source Nodes: [out_18, input_2, out_19, out_20], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
# Source node to ATen node mapping:
#   input_2 => add_38, add_41, mul_49, mul_55, rsqrt_7, sub_7, var_mean_7
#   out_18 => add_33, add_36, mul_42, mul_48, rsqrt_6, sub_6, var_mean_6
#   out_19 => add_42
#   out_20 => relu_6
# Graph fragment:
#   %var_mean_6 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_6, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %var_mean_7 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_7, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_6 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_6, %getitem_15), kwargs = {})
#   %add_33 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_14, 1e-05), kwargs = {})
#   %rsqrt_6 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_33,), kwargs = {})
#   %mul_42 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_6, %rsqrt_6), kwargs = {})
#   %mul_48 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_42, %unsqueeze_25), kwargs = {})
#   %add_36 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_48, %unsqueeze_27), kwargs = {})
#   %sub_7 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_7, %getitem_17), kwargs = {})
#   %add_38 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_16, 1e-05), kwargs = {})
#   %rsqrt_7 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_38,), kwargs = {})
#   %mul_49 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_7, %rsqrt_7), kwargs = {})
#   %mul_55 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_49, %unsqueeze_29), kwargs = {})
#   %add_41 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_55, %unsqueeze_31), kwargs = {})
#   %add_42 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%add_36, %add_41), kwargs = {})
#   %relu_6 : [num_users=2] = call_function[target=torch.ops.aten.relu.default](args = (%add_42,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_add_relu_15 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_add_relu_15', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[131072], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: '*fp32', 8: '*fp32', 9: '*fp32', 10: '*fp32', 11: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_add_relu_15', 'mutated_arg_names': ['in_out_ptr0'], 'no_x_dim': False, 'num_load': 10, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_add_relu_15(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, in_ptr5, in_ptr6, in_ptr7, in_ptr8, in_ptr9, xnumel, XBLOCK : tl.constexpr):
    xnumel = 100352
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 128
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp14 = tl.load(in_ptr5 + (x2), xmask)
    tmp15 = tl.load(in_ptr6 + (x0), xmask, eviction_policy='evict_last')
    tmp17 = tl.load(in_ptr7 + (x0), xmask, eviction_policy='evict_last')
    tmp22 = tl.load(in_ptr8 + (x0), xmask, eviction_policy='evict_last')
    tmp24 = tl.load(in_ptr9 + (x0), xmask, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 784.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp16 = tmp14 - tmp15
    tmp18 = tmp17 / tmp4
    tmp19 = tmp18 + tmp6
    tmp20 = libdevice.rsqrt(tmp19)
    tmp21 = tmp16 * tmp20
    tmp23 = tmp21 * tmp22
    tmp25 = tmp23 + tmp24
    tmp26 = tmp13 + tmp25
    tmp27 = tl.full([1], 0, tl.int32)
    tmp28 = triton_helpers.maximum(tmp27, tmp26)
    tl.store(in_out_ptr0 + (x2), tmp28, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/kw/ckwd3zk2v42pk4zldggdskhd4ad7tqfsffdzuupku3kxdmdre2fj.py
# Topologically Sorted Source Nodes: [out_25, out_26, out_27], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
# Source node to ATen node mapping:
#   out_25 => add_49, add_52, mul_63, mul_69, rsqrt_9, sub_9, var_mean_9
#   out_26 => add_53
#   out_27 => relu_8
# Graph fragment:
#   %var_mean_9 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_9, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_9 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_9, %getitem_21), kwargs = {})
#   %add_49 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_20, 1e-05), kwargs = {})
#   %rsqrt_9 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_49,), kwargs = {})
#   %mul_63 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_9, %rsqrt_9), kwargs = {})
#   %mul_69 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_63, %unsqueeze_37), kwargs = {})
#   %add_52 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_69, %unsqueeze_39), kwargs = {})
#   %add_53 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%add_52, %relu_6), kwargs = {})
#   %relu_8 : [num_users=2] = call_function[target=torch.ops.aten.relu.default](args = (%add_53,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_add_relu_16 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_add_relu_16', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[131072], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_add_relu_16', 'mutated_arg_names': ['in_out_ptr0'], 'no_x_dim': False, 'num_load': 6, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_add_relu_16(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, xnumel, XBLOCK : tl.constexpr):
    xnumel = 100352
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 128
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp14 = tl.load(in_out_ptr0 + (x2), xmask)
    tmp2 = tmp0 - tmp1
    tmp4 = 784.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp15 = tmp13 + tmp14
    tmp16 = tl.full([1], 0, tl.int32)
    tmp17 = triton_helpers.maximum(tmp16, tmp15)
    tl.store(in_out_ptr0 + (x2), tmp17, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/3z/c3znvp4tixjnbohnvrenr5igvk23ecpgaw4xaf6tlw7mxpammrfh.py
# Topologically Sorted Source Nodes: [out_28], Original ATen: [aten.convolution]
# Source node to ATen node mapping:
#   out_28 => convolution_10
# Graph fragment:
#   %convolution_10 : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%relu_8, %arg61_1, None, [2, 2], [1, 1], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused_convolution_17 = async_compile.triton('triton_poi_fused_convolution_17', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[32768, 16], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_convolution_17', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_convolution_17(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 32768
    xnumel = 9
    yoffset = tl.program_id(1) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = tl.full([XBLOCK, YBLOCK], True, tl.int1)
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 128
    y1 = (yindex // 128)
    tmp0 = tl.load(in_ptr0 + (x2 + (9*y3)), xmask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (128*x2) + (1152*y1)), tmp0, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/kz/ckziznpvt7n6wfc3ne7xy3as7wtzylf5bvwexsqlzaws35zsw4sp.py
# Topologically Sorted Source Nodes: [out_29], Original ATen: [aten._native_batch_norm_legit_functional]
# Source node to ATen node mapping:
#   out_29 => add_56, add_57, mul_71, mul_72, mul_73, mul_74, mul_75, var_mean_10
# Graph fragment:
#   %var_mean_10 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_10, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %mul_71 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_30, 0.1), kwargs = {})
#   %mul_72 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg63_1, 0.9), kwargs = {})
#   %add_56 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_71, %mul_72), kwargs = {})
#   %mul_73 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_32, 1.005128205128205), kwargs = {})
#   %mul_74 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_73, 0.1), kwargs = {})
#   %mul_75 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg64_1, 0.9), kwargs = {})
#   %add_57 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_74, %mul_75), kwargs = {})
#   %copy__31 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg63_1, %add_56), kwargs = {})
#   %copy__32 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg64_1, %add_57), kwargs = {})
triton_per_fused__native_batch_norm_legit_functional_18 = async_compile.triton('triton_per_fused__native_batch_norm_legit_functional_18', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.persistent_reduction(
    size_hints=[256, 256],
    reduction_hint=ReductionHint.INNER,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: 'i32', 8: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_per_fused__native_batch_norm_legit_functional_18', 'mutated_arg_names': ['in_ptr1', 'in_ptr2', 'out_ptr3', 'out_ptr5'], 'no_x_dim': False, 'num_load': 3, 'num_reduction': 4, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_per_fused__native_batch_norm_legit_functional_18(in_ptr0, in_ptr1, in_ptr2, out_ptr0, out_ptr1, out_ptr3, out_ptr5, xnumel, rnumel, XBLOCK : tl.constexpr):
    xnumel = 256
    rnumel = 196
    RBLOCK: tl.constexpr = 256
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    rindex = tl.arange(0, RBLOCK)[None, :]
    roffset = 0
    rmask = rindex < rnumel
    r1 = rindex
    x0 = xindex
    tmp0 = tl.load(in_ptr0 + (x0 + (256*r1)), rmask & xmask, other=0.0)
    tmp19 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp28 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp1 = tl.broadcast_to(tmp0, [XBLOCK, RBLOCK])
    tmp3 = tl.where(rmask & xmask, tmp1, 0)
    tmp4 = tl.broadcast_to(tmp1, [XBLOCK, RBLOCK])
    tmp6 = tl.where(rmask & xmask, tmp4, 0)
    tmp7 = tl.sum(tmp6, 1)[:, None]
    tmp8 = tl.full([XBLOCK, 1], 196, tl.int32)
    tmp9 = tmp8.to(tl.float32)
    tmp10 = tmp7 / tmp9
    tmp11 = tmp1 - tmp10
    tmp12 = tmp11 * tmp11
    tmp13 = tl.broadcast_to(tmp12, [XBLOCK, RBLOCK])
    tmp15 = tl.where(rmask & xmask, tmp13, 0)
    tmp16 = tl.sum(tmp15, 1)[:, None]
    tmp17 = 0.1
    tmp18 = tmp10 * tmp17
    tmp20 = 0.9
    tmp21 = tmp19 * tmp20
    tmp22 = tmp18 + tmp21
    tmp23 = 196.0
    tmp24 = tmp16 / tmp23
    tmp25 = 1.005128205128205
    tmp26 = tmp24 * tmp25
    tmp27 = tmp26 * tmp17
    tmp29 = tmp28 * tmp20
    tmp30 = tmp27 + tmp29
    tl.store(out_ptr3 + (x0), tmp22, xmask)
    tl.store(out_ptr5 + (x0), tmp30, xmask)
    tl.store(out_ptr0 + (x0), tmp10, xmask)
    tl.store(out_ptr1 + (x0), tmp16, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/dv/cdvyuzaeger6iezxhi3naeuvffjhwkmffguaaoj37n46wpj355wr.py
# Topologically Sorted Source Nodes: [out_29, out_30], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
# Source node to ATen node mapping:
#   out_29 => add_55, add_58, mul_70, mul_76, rsqrt_10, sub_10, var_mean_10
#   out_30 => relu_9
# Graph fragment:
#   %var_mean_10 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_10, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_10 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_10, %getitem_23), kwargs = {})
#   %add_55 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_22, 1e-05), kwargs = {})
#   %rsqrt_10 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_55,), kwargs = {})
#   %mul_70 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_10, %rsqrt_10), kwargs = {})
#   %mul_76 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_70, %unsqueeze_41), kwargs = {})
#   %add_58 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_76, %unsqueeze_43), kwargs = {})
#   %relu_9 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_58,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_relu_19 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_relu_19', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[65536], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_relu_19', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 5, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_relu_19(in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, out_ptr0, xnumel, XBLOCK : tl.constexpr):
    xnumel = 50176
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 256
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 196.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp14 = tl.full([1], 0, tl.int32)
    tmp15 = triton_helpers.maximum(tmp14, tmp13)
    tl.store(out_ptr0 + (x2), tmp15, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/o7/co7yaca75oillngw2srswrcyaeji63mmnietytsoav4tabh2a77k.py
# Topologically Sorted Source Nodes: [out_29, out_30, out_31], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
# Source node to ATen node mapping:
#   out_29 => add_55, add_58, mul_70, mul_76, rsqrt_10, sub_10, var_mean_10
#   out_30 => relu_9
#   out_31 => convolution_11
# Graph fragment:
#   %var_mean_10 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_10, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_10 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_10, %getitem_23), kwargs = {})
#   %add_55 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_22, 1e-05), kwargs = {})
#   %rsqrt_10 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_55,), kwargs = {})
#   %mul_70 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_10, %rsqrt_10), kwargs = {})
#   %mul_76 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_70, %unsqueeze_41), kwargs = {})
#   %add_58 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_76, %unsqueeze_43), kwargs = {})
#   %relu_9 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_58,), kwargs = {})
#   %convolution_11 : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%relu_9, %arg67_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_20 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_20', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[65536, 16], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_20', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_20(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 65536
    xnumel = 9
    yoffset = (tl.program_id(1) + tl.program_id(2) * tl.num_programs(1)) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = tl.full([XBLOCK, YBLOCK], True, tl.int1)
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 256
    y1 = (yindex // 256)
    tmp0 = tl.load(in_ptr0 + (x2 + (9*y3)), xmask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (256*x2) + (2304*y1)), tmp0, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/wy/cwyggxxhuv2uojdzxol3bzat6ux4t2oqvlzxy65qxvqefyw2v6fp.py
# Topologically Sorted Source Nodes: [out_32, input_4, out_33, out_34], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
# Source node to ATen node mapping:
#   input_4 => add_65, add_68, mul_84, mul_90, rsqrt_12, sub_12, var_mean_12
#   out_32 => add_60, add_63, mul_77, mul_83, rsqrt_11, sub_11, var_mean_11
#   out_33 => add_69
#   out_34 => relu_10
# Graph fragment:
#   %var_mean_11 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_11, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %var_mean_12 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_12, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_11 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_11, %getitem_25), kwargs = {})
#   %add_60 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_24, 1e-05), kwargs = {})
#   %rsqrt_11 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_60,), kwargs = {})
#   %mul_77 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_11, %rsqrt_11), kwargs = {})
#   %mul_83 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_77, %unsqueeze_45), kwargs = {})
#   %add_63 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_83, %unsqueeze_47), kwargs = {})
#   %sub_12 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_12, %getitem_27), kwargs = {})
#   %add_65 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_26, 1e-05), kwargs = {})
#   %rsqrt_12 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_65,), kwargs = {})
#   %mul_84 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_12, %rsqrt_12), kwargs = {})
#   %mul_90 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_84, %unsqueeze_49), kwargs = {})
#   %add_68 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_90, %unsqueeze_51), kwargs = {})
#   %add_69 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%add_63, %add_68), kwargs = {})
#   %relu_10 : [num_users=2] = call_function[target=torch.ops.aten.relu.default](args = (%add_69,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_add_relu_21 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_add_relu_21', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[65536], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: '*fp32', 8: '*fp32', 9: '*fp32', 10: '*fp32', 11: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_add_relu_21', 'mutated_arg_names': ['in_out_ptr0'], 'no_x_dim': False, 'num_load': 10, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_add_relu_21(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, in_ptr5, in_ptr6, in_ptr7, in_ptr8, in_ptr9, xnumel, XBLOCK : tl.constexpr):
    xnumel = 50176
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 256
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp14 = tl.load(in_ptr5 + (x2), xmask)
    tmp15 = tl.load(in_ptr6 + (x0), xmask, eviction_policy='evict_last')
    tmp17 = tl.load(in_ptr7 + (x0), xmask, eviction_policy='evict_last')
    tmp22 = tl.load(in_ptr8 + (x0), xmask, eviction_policy='evict_last')
    tmp24 = tl.load(in_ptr9 + (x0), xmask, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 196.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp16 = tmp14 - tmp15
    tmp18 = tmp17 / tmp4
    tmp19 = tmp18 + tmp6
    tmp20 = libdevice.rsqrt(tmp19)
    tmp21 = tmp16 * tmp20
    tmp23 = tmp21 * tmp22
    tmp25 = tmp23 + tmp24
    tmp26 = tmp13 + tmp25
    tmp27 = tl.full([1], 0, tl.int32)
    tmp28 = triton_helpers.maximum(tmp27, tmp26)
    tl.store(in_out_ptr0 + (x2), tmp28, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/t7/ct7pxe2odxxlvfjkoun2k5oyetht2t6itsmm7deibx7ntqiy3qky.py
# Topologically Sorted Source Nodes: [out_39, out_40, out_41], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
# Source node to ATen node mapping:
#   out_39 => add_76, add_79, mul_104, mul_98, rsqrt_14, sub_14, var_mean_14
#   out_40 => add_80
#   out_41 => relu_12
# Graph fragment:
#   %var_mean_14 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_14, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_14 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_14, %getitem_31), kwargs = {})
#   %add_76 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_30, 1e-05), kwargs = {})
#   %rsqrt_14 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_76,), kwargs = {})
#   %mul_98 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_14, %rsqrt_14), kwargs = {})
#   %mul_104 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_98, %unsqueeze_57), kwargs = {})
#   %add_79 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_104, %unsqueeze_59), kwargs = {})
#   %add_80 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%add_79, %relu_10), kwargs = {})
#   %relu_12 : [num_users=2] = call_function[target=torch.ops.aten.relu.default](args = (%add_80,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_add_relu_22 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_add_relu_22', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[65536], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_add_relu_22', 'mutated_arg_names': ['in_out_ptr0'], 'no_x_dim': False, 'num_load': 6, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_add_relu_22(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, xnumel, XBLOCK : tl.constexpr):
    xnumel = 50176
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 256
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp14 = tl.load(in_out_ptr0 + (x2), xmask)
    tmp2 = tmp0 - tmp1
    tmp4 = 196.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp15 = tmp13 + tmp14
    tmp16 = tl.full([1], 0, tl.int32)
    tmp17 = triton_helpers.maximum(tmp16, tmp15)
    tl.store(in_out_ptr0 + (x2), tmp17, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/22/c22q3jiwi2zupr4xt3hqr5toz2z4loq4ewtgcoh5jxmz6uidq3kl.py
# Topologically Sorted Source Nodes: [out_42], Original ATen: [aten.convolution]
# Source node to ATen node mapping:
#   out_42 => convolution_15
# Graph fragment:
#   %convolution_15 : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%relu_12, %arg91_1, None, [2, 2], [1, 1], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused_convolution_23 = async_compile.triton('triton_poi_fused_convolution_23', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[131072, 16], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_convolution_23', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_convolution_23(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 131072
    xnumel = 9
    yoffset = (tl.program_id(1) + tl.program_id(2) * tl.num_programs(1)) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = tl.full([XBLOCK, YBLOCK], True, tl.int1)
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 256
    y1 = (yindex // 256)
    tmp0 = tl.load(in_ptr0 + (x2 + (9*y3)), xmask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (256*x2) + (2304*y1)), tmp0, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/da/cdascc4te6rhgzdh6p5tcinsigymcpbx7npkvpbbcs333kr4xxar.py
# Topologically Sorted Source Nodes: [out_43], Original ATen: [aten._native_batch_norm_legit_functional]
# Source node to ATen node mapping:
#   out_43 => add_83, add_84, mul_106, mul_107, mul_108, mul_109, mul_110, var_mean_15
# Graph fragment:
#   %var_mean_15 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_15, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %mul_106 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_45, 0.1), kwargs = {})
#   %mul_107 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg93_1, 0.9), kwargs = {})
#   %add_83 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_106, %mul_107), kwargs = {})
#   %mul_108 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_47, 1.0208333333333333), kwargs = {})
#   %mul_109 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_108, 0.1), kwargs = {})
#   %mul_110 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg94_1, 0.9), kwargs = {})
#   %add_84 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_109, %mul_110), kwargs = {})
#   %copy__46 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg93_1, %add_83), kwargs = {})
#   %copy__47 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg94_1, %add_84), kwargs = {})
triton_per_fused__native_batch_norm_legit_functional_24 = async_compile.triton('triton_per_fused__native_batch_norm_legit_functional_24', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.persistent_reduction(
    size_hints=[512, 64],
    reduction_hint=ReductionHint.INNER,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: 'i32', 8: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_per_fused__native_batch_norm_legit_functional_24', 'mutated_arg_names': ['in_ptr1', 'in_ptr2', 'out_ptr3', 'out_ptr5'], 'no_x_dim': False, 'num_load': 3, 'num_reduction': 4, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_per_fused__native_batch_norm_legit_functional_24(in_ptr0, in_ptr1, in_ptr2, out_ptr0, out_ptr1, out_ptr3, out_ptr5, xnumel, rnumel, XBLOCK : tl.constexpr):
    xnumel = 512
    rnumel = 49
    RBLOCK: tl.constexpr = 64
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    rindex = tl.arange(0, RBLOCK)[None, :]
    roffset = 0
    rmask = rindex < rnumel
    r1 = rindex
    x0 = xindex
    tmp0 = tl.load(in_ptr0 + (x0 + (512*r1)), rmask & xmask, other=0.0)
    tmp19 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp28 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp1 = tl.broadcast_to(tmp0, [XBLOCK, RBLOCK])
    tmp3 = tl.where(rmask & xmask, tmp1, 0)
    tmp4 = tl.broadcast_to(tmp1, [XBLOCK, RBLOCK])
    tmp6 = tl.where(rmask & xmask, tmp4, 0)
    tmp7 = tl.sum(tmp6, 1)[:, None]
    tmp8 = tl.full([XBLOCK, 1], 49, tl.int32)
    tmp9 = tmp8.to(tl.float32)
    tmp10 = tmp7 / tmp9
    tmp11 = tmp1 - tmp10
    tmp12 = tmp11 * tmp11
    tmp13 = tl.broadcast_to(tmp12, [XBLOCK, RBLOCK])
    tmp15 = tl.where(rmask & xmask, tmp13, 0)
    tmp16 = tl.sum(tmp15, 1)[:, None]
    tmp17 = 0.1
    tmp18 = tmp10 * tmp17
    tmp20 = 0.9
    tmp21 = tmp19 * tmp20
    tmp22 = tmp18 + tmp21
    tmp23 = 49.0
    tmp24 = tmp16 / tmp23
    tmp25 = 1.0208333333333333
    tmp26 = tmp24 * tmp25
    tmp27 = tmp26 * tmp17
    tmp29 = tmp28 * tmp20
    tmp30 = tmp27 + tmp29
    tl.store(out_ptr3 + (x0), tmp22, xmask)
    tl.store(out_ptr5 + (x0), tmp30, xmask)
    tl.store(out_ptr0 + (x0), tmp10, xmask)
    tl.store(out_ptr1 + (x0), tmp16, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/dy/cdynmc4cvzrrojjdtn2oxiy76gunlxmyjqtgk3ivf3juounmtrgg.py
# Topologically Sorted Source Nodes: [out_43, out_44], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
# Source node to ATen node mapping:
#   out_43 => add_82, add_85, mul_105, mul_111, rsqrt_15, sub_15, var_mean_15
#   out_44 => relu_13
# Graph fragment:
#   %var_mean_15 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_15, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_15 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_15, %getitem_33), kwargs = {})
#   %add_82 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_32, 1e-05), kwargs = {})
#   %rsqrt_15 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_82,), kwargs = {})
#   %mul_105 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_15, %rsqrt_15), kwargs = {})
#   %mul_111 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_105, %unsqueeze_61), kwargs = {})
#   %add_85 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_111, %unsqueeze_63), kwargs = {})
#   %relu_13 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_85,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_relu_25 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_relu_25', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[32768], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_relu_25', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 5, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_relu_25(in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, out_ptr0, xnumel, XBLOCK : tl.constexpr):
    xnumel = 25088
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 512
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 49.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp14 = tl.full([1], 0, tl.int32)
    tmp15 = triton_helpers.maximum(tmp14, tmp13)
    tl.store(out_ptr0 + (x2), tmp15, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/fk/cfki42trs2kzphui35yndlw3lqu75kg4nehxeyxaxwqiqsmx3chm.py
# Topologically Sorted Source Nodes: [out_43, out_44, out_45], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
# Source node to ATen node mapping:
#   out_43 => add_82, add_85, mul_105, mul_111, rsqrt_15, sub_15, var_mean_15
#   out_44 => relu_13
#   out_45 => convolution_16
# Graph fragment:
#   %var_mean_15 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_15, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_15 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_15, %getitem_33), kwargs = {})
#   %add_82 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_32, 1e-05), kwargs = {})
#   %rsqrt_15 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_82,), kwargs = {})
#   %mul_105 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_15, %rsqrt_15), kwargs = {})
#   %mul_111 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_105, %unsqueeze_61), kwargs = {})
#   %add_85 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_111, %unsqueeze_63), kwargs = {})
#   %relu_13 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_85,), kwargs = {})
#   %convolution_16 : [num_users=2] = call_function[target=torch.ops.aten.convolution.default](args = (%relu_13, %arg97_1, None, [1, 1], [1, 1], [1, 1], False, [0, 0], 1), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_26 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_26', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[262144, 16], tile_hint=TileHint.SQUARE,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: 'i32', 3: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_26', 'mutated_arg_names': [], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_26(in_ptr0, out_ptr0, ynumel, xnumel, YBLOCK : tl.constexpr, XBLOCK : tl.constexpr):
    ynumel = 262144
    xnumel = 9
    yoffset = (tl.program_id(1) + tl.program_id(2) * tl.num_programs(1)) * YBLOCK
    yindex = yoffset + tl.arange(0, YBLOCK)[None, :]
    ymask = tl.full([XBLOCK, YBLOCK], True, tl.int1)
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    x2 = xindex
    y3 = yindex
    y0 = yindex % 512
    y1 = (yindex // 512)
    tmp0 = tl.load(in_ptr0 + (x2 + (9*y3)), xmask, eviction_policy='evict_last')
    tl.store(out_ptr0 + (y0 + (512*x2) + (4608*y1)), tmp0, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/mu/cmuumashei2kkktuv4suajcyhl6k6ubtsb37nnwncinlcivafuwz.py
# Topologically Sorted Source Nodes: [out_46, input_6, out_47, out_48], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
# Source node to ATen node mapping:
#   input_6 => add_92, add_95, mul_119, mul_125, rsqrt_17, sub_17, var_mean_17
#   out_46 => add_87, add_90, mul_112, mul_118, rsqrt_16, sub_16, var_mean_16
#   out_47 => add_96
#   out_48 => relu_14
# Graph fragment:
#   %var_mean_16 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_16, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %var_mean_17 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_17, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %sub_16 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_16, %getitem_35), kwargs = {})
#   %add_87 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_34, 1e-05), kwargs = {})
#   %rsqrt_16 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_87,), kwargs = {})
#   %mul_112 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_16, %rsqrt_16), kwargs = {})
#   %mul_118 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_112, %unsqueeze_65), kwargs = {})
#   %add_90 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_118, %unsqueeze_67), kwargs = {})
#   %sub_17 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_17, %getitem_37), kwargs = {})
#   %add_92 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_36, 1e-05), kwargs = {})
#   %rsqrt_17 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_92,), kwargs = {})
#   %mul_119 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_17, %rsqrt_17), kwargs = {})
#   %mul_125 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_119, %unsqueeze_69), kwargs = {})
#   %add_95 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_125, %unsqueeze_71), kwargs = {})
#   %add_96 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%add_90, %add_95), kwargs = {})
#   %relu_14 : [num_users=2] = call_function[target=torch.ops.aten.relu.default](args = (%add_96,), kwargs = {})
triton_poi_fused__native_batch_norm_legit_functional_add_relu_27 = async_compile.triton('triton_poi_fused__native_batch_norm_legit_functional_add_relu_27', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[32768], 
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: '*fp32', 8: '*fp32', 9: '*fp32', 10: '*fp32', 11: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused__native_batch_norm_legit_functional_add_relu_27', 'mutated_arg_names': ['in_out_ptr0'], 'no_x_dim': False, 'num_load': 10, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused__native_batch_norm_legit_functional_add_relu_27(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, in_ptr5, in_ptr6, in_ptr7, in_ptr8, in_ptr9, xnumel, XBLOCK : tl.constexpr):
    xnumel = 25088
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x2 = xindex
    x0 = xindex % 512
    tmp0 = tl.load(in_ptr0 + (x2), xmask)
    tmp1 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp3 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp10 = tl.load(in_ptr3 + (x0), xmask, eviction_policy='evict_last')
    tmp12 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp14 = tl.load(in_ptr5 + (x2), xmask)
    tmp15 = tl.load(in_ptr6 + (x0), xmask, eviction_policy='evict_last')
    tmp17 = tl.load(in_ptr7 + (x0), xmask, eviction_policy='evict_last')
    tmp22 = tl.load(in_ptr8 + (x0), xmask, eviction_policy='evict_last')
    tmp24 = tl.load(in_ptr9 + (x0), xmask, eviction_policy='evict_last')
    tmp2 = tmp0 - tmp1
    tmp4 = 49.0
    tmp5 = tmp3 / tmp4
    tmp6 = 1e-05
    tmp7 = tmp5 + tmp6
    tmp8 = libdevice.rsqrt(tmp7)
    tmp9 = tmp2 * tmp8
    tmp11 = tmp9 * tmp10
    tmp13 = tmp11 + tmp12
    tmp16 = tmp14 - tmp15
    tmp18 = tmp17 / tmp4
    tmp19 = tmp18 + tmp6
    tmp20 = libdevice.rsqrt(tmp19)
    tmp21 = tmp16 * tmp20
    tmp23 = tmp21 * tmp22
    tmp25 = tmp23 + tmp24
    tmp26 = tmp13 + tmp25
    tmp27 = tl.full([1], 0, tl.int32)
    tmp28 = triton_helpers.maximum(tmp27, tmp26)
    tl.store(in_out_ptr0 + (x2), tmp28, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/b3/cb3dom6z2tcirbp5ucdmbxgqc4jvhlt5n6akfknr54d5zyjxetbu.py
# Topologically Sorted Source Nodes: [out_53, out_54, out_55, x_4], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu, aten.mean]
# Source node to ATen node mapping:
#   out_53 => add_103, add_104, add_105, add_106, mul_133, mul_134, mul_135, mul_136, mul_137, mul_138, mul_139, rsqrt_19, sub_19, var_mean_19
#   out_54 => add_107
#   out_55 => relu_16
#   x_4 => mean
# Graph fragment:
#   %var_mean_19 : [num_users=2] = call_function[target=torch.ops.aten.var_mean.correction](args = (%convolution_19, [0, 2, 3]), kwargs = {correction: 0, keepdim: True})
#   %mul_134 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_57, 0.1), kwargs = {})
#   %mul_135 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg117_1, 0.9), kwargs = {})
#   %add_104 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_134, %mul_135), kwargs = {})
#   %mul_136 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%squeeze_59, 1.0208333333333333), kwargs = {})
#   %mul_137 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_136, 0.1), kwargs = {})
#   %mul_138 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg118_1, 0.9), kwargs = {})
#   %add_105 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_137, %mul_138), kwargs = {})
#   %sub_19 : [num_users=1] = call_function[target=torch.ops.aten.sub.Tensor](args = (%convolution_19, %getitem_41), kwargs = {})
#   %add_103 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%getitem_40, 1e-05), kwargs = {})
#   %rsqrt_19 : [num_users=1] = call_function[target=torch.ops.aten.rsqrt.default](args = (%add_103,), kwargs = {})
#   %mul_133 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%sub_19, %rsqrt_19), kwargs = {})
#   %mul_139 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_133, %unsqueeze_77), kwargs = {})
#   %add_106 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%mul_139, %unsqueeze_79), kwargs = {})
#   %add_107 : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%add_106, %relu_14), kwargs = {})
#   %relu_16 : [num_users=1] = call_function[target=torch.ops.aten.relu.default](args = (%add_107,), kwargs = {})
#   %mean : [num_users=1] = call_function[target=torch.ops.aten.mean.dim](args = (%relu_16, [-1, -2], True), kwargs = {})
#   %copy__58 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg117_1, %add_104), kwargs = {})
#   %copy__59 : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg118_1, %add_105), kwargs = {})
triton_per_fused__native_batch_norm_legit_functional_add_mean_relu_28 = async_compile.triton('triton_per_fused__native_batch_norm_legit_functional_add_mean_relu_28', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.persistent_reduction(
    size_hints=[512, 64],
    reduction_hint=ReductionHint.DEFAULT,
    filename=__file__,
    triton_meta={'signature': {0: '*fp32', 1: '*fp32', 2: '*fp32', 3: '*fp32', 4: '*fp32', 5: '*fp32', 6: '*fp32', 7: '*fp32', 8: '*fp32', 9: 'i32', 10: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1, 2, 3, 4, 5, 6, 7, 8, 9), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_per_fused__native_batch_norm_legit_functional_add_mean_relu_28', 'mutated_arg_names': ['in_out_ptr0', 'in_ptr4', 'in_ptr5', 'out_ptr3', 'out_ptr5'], 'no_x_dim': False, 'num_load': 6, 'num_reduction': 5, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False}
)
@triton.jit
def triton_per_fused__native_batch_norm_legit_functional_add_mean_relu_28(in_out_ptr0, in_ptr0, in_ptr1, in_ptr2, in_ptr3, in_ptr4, in_ptr5, out_ptr3, out_ptr5, xnumel, rnumel, XBLOCK : tl.constexpr):
    xnumel = 512
    rnumel = 49
    RBLOCK: tl.constexpr = 64
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:, None]
    xmask = xindex < xnumel
    rindex = tl.arange(0, RBLOCK)[None, :]
    roffset = 0
    rmask = rindex < rnumel
    r1 = rindex
    x0 = xindex
    tmp0 = tl.load(in_ptr0 + (x0 + (512*r1)), rmask & xmask, other=0.0)
    tmp24 = tl.load(in_ptr1 + (x0), xmask, eviction_policy='evict_last')
    tmp26 = tl.load(in_ptr2 + (x0), xmask, eviction_policy='evict_last')
    tmp28 = tl.load(in_ptr3 + (x0 + (512*r1)), rmask & xmask, other=0.0)
    tmp39 = tl.load(in_ptr4 + (x0), xmask, eviction_policy='evict_last')
    tmp46 = tl.load(in_ptr5 + (x0), xmask, eviction_policy='evict_last')
    tmp1 = tl.broadcast_to(tmp0, [XBLOCK, RBLOCK])
    tmp3 = tl.where(rmask & xmask, tmp1, 0)
    tmp4 = tl.broadcast_to(tmp1, [XBLOCK, RBLOCK])
    tmp6 = tl.where(rmask & xmask, tmp4, 0)
    tmp7 = tl.sum(tmp6, 1)[:, None]
    tmp8 = tl.full([XBLOCK, 1], 49, tl.int32)
    tmp9 = tmp8.to(tl.float32)
    tmp10 = tmp7 / tmp9
    tmp11 = tmp1 - tmp10
    tmp12 = tmp11 * tmp11
    tmp13 = tl.broadcast_to(tmp12, [XBLOCK, RBLOCK])
    tmp15 = tl.where(rmask & xmask, tmp13, 0)
    tmp16 = tl.sum(tmp15, 1)[:, None]
    tmp17 = tmp0 - tmp10
    tmp18 = 49.0
    tmp19 = tmp16 / tmp18
    tmp20 = 1e-05
    tmp21 = tmp19 + tmp20
    tmp22 = libdevice.rsqrt(tmp21)
    tmp23 = tmp17 * tmp22
    tmp25 = tmp23 * tmp24
    tmp27 = tmp25 + tmp26
    tmp29 = tmp27 + tmp28
    tmp30 = tl.full([1, 1], 0, tl.int32)
    tmp31 = triton_helpers.maximum(tmp30, tmp29)
    tmp32 = tl.broadcast_to(tmp31, [XBLOCK, RBLOCK])
    tmp34 = tl.where(rmask & xmask, tmp32, 0)
    tmp35 = tl.sum(tmp34, 1)[:, None]
    tmp36 = tmp35 / tmp18
    tmp37 = 0.1
    tmp38 = tmp10 * tmp37
    tmp40 = 0.9
    tmp41 = tmp39 * tmp40
    tmp42 = tmp38 + tmp41
    tmp43 = 1.0208333333333333
    tmp44 = tmp19 * tmp43
    tmp45 = tmp44 * tmp37
    tmp47 = tmp46 * tmp40
    tmp48 = tmp45 + tmp47
    tl.debug_barrier()
    tl.store(in_out_ptr0 + (x0), tmp36, xmask)
    tl.store(out_ptr3 + (x0), tmp42, xmask)
    tl.store(out_ptr5 + (x0), tmp48, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_chilli/fy/cfyieznqsyjbomutldkfliwhvzjbatnih3paah52or5axllyfsgd.py
# Topologically Sorted Source Nodes: [add_], Original ATen: [aten.add]
# Source node to ATen node mapping:
#   add_ => add
# Graph fragment:
#   %add : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%arg2_1, 1), kwargs = {})
#   %copy_ : [num_users=0] = call_function[target=torch.ops.aten.copy_.default](args = (%arg2_1, %add), kwargs = {})
triton_poi_fused_add_29 = async_compile.triton('triton_poi_fused_add_29', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, instance_descriptor, DeviceProperties

@triton_heuristics.pointwise(
    size_hints=[1], 
    filename=__file__,
    triton_meta={'signature': {0: '*i64', 1: '*i64', 2: 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=80, major=8, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=108, warp_size=32), 'constants': {2: 1}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1), equal_to_1=(2,))]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_add_29', 'mutated_arg_names': ['in_ptr0', 'out_ptr1'], 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'F8AAB9CD3B5EBE4FD8CFF1A9B47057F713742DBC44F7203E881A75F6C34FE9AF', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': False, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': False},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_add_29(in_ptr0, out_ptr1, xnumel, XBLOCK : tl.constexpr):
    xnumel = 1
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = tl.full([XBLOCK], True, tl.int1)
    tmp0 = tl.load(in_ptr0 + (0))
    tmp1 = tl.broadcast_to(tmp0, [XBLOCK])
    tmp2 = tl.full([1], 1, tl.int64)
    tmp3 = tmp1 + tmp2
    tl.store(out_ptr1 + (tl.full([XBLOCK], 0, tl.int32)), tmp3, None)
''', device_str='cuda')


async_compile.wait(globals())
del async_compile

def call(args):
    arg0_1, arg1_1, arg2_1, arg3_1, arg4_1, arg5_1, arg6_1, arg7_1, arg8_1, arg9_1, arg10_1, arg11_1, arg12_1, arg13_1, arg14_1, arg15_1, arg16_1, arg17_1, arg18_1, arg19_1, arg20_1, arg21_1, arg22_1, arg23_1, arg24_1, arg25_1, arg26_1, arg27_1, arg28_1, arg29_1, arg30_1, arg31_1, arg32_1, arg33_1, arg34_1, arg35_1, arg36_1, arg37_1, arg38_1, arg39_1, arg40_1, arg41_1, arg42_1, arg43_1, arg44_1, arg45_1, arg46_1, arg47_1, arg48_1, arg49_1, arg50_1, arg51_1, arg52_1, arg53_1, arg54_1, arg55_1, arg56_1, arg57_1, arg58_1, arg59_1, arg60_1, arg61_1, arg62_1, arg63_1, arg64_1, arg65_1, arg66_1, arg67_1, arg68_1, arg69_1, arg70_1, arg71_1, arg72_1, arg73_1, arg74_1, arg75_1, arg76_1, arg77_1, arg78_1, arg79_1, arg80_1, arg81_1, arg82_1, arg83_1, arg84_1, arg85_1, arg86_1, arg87_1, arg88_1, arg89_1, arg90_1, arg91_1, arg92_1, arg93_1, arg94_1, arg95_1, arg96_1, arg97_1, arg98_1, arg99_1, arg100_1, arg101_1, arg102_1, arg103_1, arg104_1, arg105_1, arg106_1, arg107_1, arg108_1, arg109_1, arg110_1, arg111_1, arg112_1, arg113_1, arg114_1, arg115_1, arg116_1, arg117_1, arg118_1, arg119_1, arg120_1, arg121_1, arg122_1 = args
    args.clear()
    assert_size_stride(arg0_1, (64, 3, 7, 7), (147, 49, 7, 1))
    assert_size_stride(arg1_1, (1, 3, 224, 224), (150528, 50176, 224, 1))
    assert_size_stride(arg2_1, (), ())
    assert_size_stride(arg3_1, (64, ), (1, ))
    assert_size_stride(arg4_1, (64, ), (1, ))
    assert_size_stride(arg5_1, (64, ), (1, ))
    assert_size_stride(arg6_1, (64, ), (1, ))
    assert_size_stride(arg7_1, (64, 64, 3, 3), (576, 9, 3, 1))
    assert_size_stride(arg8_1, (), ())
    assert_size_stride(arg9_1, (64, ), (1, ))
    assert_size_stride(arg10_1, (64, ), (1, ))
    assert_size_stride(arg11_1, (64, ), (1, ))
    assert_size_stride(arg12_1, (64, ), (1, ))
    assert_size_stride(arg13_1, (64, 64, 3, 3), (576, 9, 3, 1))
    assert_size_stride(arg14_1, (), ())
    assert_size_stride(arg15_1, (64, ), (1, ))
    assert_size_stride(arg16_1, (64, ), (1, ))
    assert_size_stride(arg17_1, (64, ), (1, ))
    assert_size_stride(arg18_1, (64, ), (1, ))
    assert_size_stride(arg19_1, (64, 64, 3, 3), (576, 9, 3, 1))
    assert_size_stride(arg20_1, (), ())
    assert_size_stride(arg21_1, (64, ), (1, ))
    assert_size_stride(arg22_1, (64, ), (1, ))
    assert_size_stride(arg23_1, (64, ), (1, ))
    assert_size_stride(arg24_1, (64, ), (1, ))
    assert_size_stride(arg25_1, (64, 64, 3, 3), (576, 9, 3, 1))
    assert_size_stride(arg26_1, (), ())
    assert_size_stride(arg27_1, (64, ), (1, ))
    assert_size_stride(arg28_1, (64, ), (1, ))
    assert_size_stride(arg29_1, (64, ), (1, ))
    assert_size_stride(arg30_1, (64, ), (1, ))
    assert_size_stride(arg31_1, (128, 64, 3, 3), (576, 9, 3, 1))
    assert_size_stride(arg32_1, (), ())
    assert_size_stride(arg33_1, (128, ), (1, ))
    assert_size_stride(arg34_1, (128, ), (1, ))
    assert_size_stride(arg35_1, (128, ), (1, ))
    assert_size_stride(arg36_1, (128, ), (1, ))
    assert_size_stride(arg37_1, (128, 128, 3, 3), (1152, 9, 3, 1))
    assert_size_stride(arg38_1, (), ())
    assert_size_stride(arg39_1, (128, ), (1, ))
    assert_size_stride(arg40_1, (128, ), (1, ))
    assert_size_stride(arg41_1, (128, ), (1, ))
    assert_size_stride(arg42_1, (128, ), (1, ))
    assert_size_stride(arg43_1, (128, 64, 1, 1), (64, 1, 1, 1))
    assert_size_stride(arg44_1, (), ())
    assert_size_stride(arg45_1, (128, ), (1, ))
    assert_size_stride(arg46_1, (128, ), (1, ))
    assert_size_stride(arg47_1, (128, ), (1, ))
    assert_size_stride(arg48_1, (128, ), (1, ))
    assert_size_stride(arg49_1, (128, 128, 3, 3), (1152, 9, 3, 1))
    assert_size_stride(arg50_1, (), ())
    assert_size_stride(arg51_1, (128, ), (1, ))
    assert_size_stride(arg52_1, (128, ), (1, ))
    assert_size_stride(arg53_1, (128, ), (1, ))
    assert_size_stride(arg54_1, (128, ), (1, ))
    assert_size_stride(arg55_1, (128, 128, 3, 3), (1152, 9, 3, 1))
    assert_size_stride(arg56_1, (), ())
    assert_size_stride(arg57_1, (128, ), (1, ))
    assert_size_stride(arg58_1, (128, ), (1, ))
    assert_size_stride(arg59_1, (128, ), (1, ))
    assert_size_stride(arg60_1, (128, ), (1, ))
    assert_size_stride(arg61_1, (256, 128, 3, 3), (1152, 9, 3, 1))
    assert_size_stride(arg62_1, (), ())
    assert_size_stride(arg63_1, (256, ), (1, ))
    assert_size_stride(arg64_1, (256, ), (1, ))
    assert_size_stride(arg65_1, (256, ), (1, ))
    assert_size_stride(arg66_1, (256, ), (1, ))
    assert_size_stride(arg67_1, (256, 256, 3, 3), (2304, 9, 3, 1))
    assert_size_stride(arg68_1, (), ())
    assert_size_stride(arg69_1, (256, ), (1, ))
    assert_size_stride(arg70_1, (256, ), (1, ))
    assert_size_stride(arg71_1, (256, ), (1, ))
    assert_size_stride(arg72_1, (256, ), (1, ))
    assert_size_stride(arg73_1, (256, 128, 1, 1), (128, 1, 1, 1))
    assert_size_stride(arg74_1, (), ())
    assert_size_stride(arg75_1, (256, ), (1, ))
    assert_size_stride(arg76_1, (256, ), (1, ))
    assert_size_stride(arg77_1, (256, ), (1, ))
    assert_size_stride(arg78_1, (256, ), (1, ))
    assert_size_stride(arg79_1, (256, 256, 3, 3), (2304, 9, 3, 1))
    assert_size_stride(arg80_1, (), ())
    assert_size_stride(arg81_1, (256, ), (1, ))
    assert_size_stride(arg82_1, (256, ), (1, ))
    assert_size_stride(arg83_1, (256, ), (1, ))
    assert_size_stride(arg84_1, (256, ), (1, ))
    assert_size_stride(arg85_1, (256, 256, 3, 3), (2304, 9, 3, 1))
    assert_size_stride(arg86_1, (), ())
    assert_size_stride(arg87_1, (256, ), (1, ))
    assert_size_stride(arg88_1, (256, ), (1, ))
    assert_size_stride(arg89_1, (256, ), (1, ))
    assert_size_stride(arg90_1, (256, ), (1, ))
    assert_size_stride(arg91_1, (512, 256, 3, 3), (2304, 9, 3, 1))
    assert_size_stride(arg92_1, (), ())
    assert_size_stride(arg93_1, (512, ), (1, ))
    assert_size_stride(arg94_1, (512, ), (1, ))
    assert_size_stride(arg95_1, (512, ), (1, ))
    assert_size_stride(arg96_1, (512, ), (1, ))
    assert_size_stride(arg97_1, (512, 512, 3, 3), (4608, 9, 3, 1))
    assert_size_stride(arg98_1, (), ())
    assert_size_stride(arg99_1, (512, ), (1, ))
    assert_size_stride(arg100_1, (512, ), (1, ))
    assert_size_stride(arg101_1, (512, ), (1, ))
    assert_size_stride(arg102_1, (512, ), (1, ))
    assert_size_stride(arg103_1, (512, 256, 1, 1), (256, 1, 1, 1))
    assert_size_stride(arg104_1, (), ())
    assert_size_stride(arg105_1, (512, ), (1, ))
    assert_size_stride(arg106_1, (512, ), (1, ))
    assert_size_stride(arg107_1, (512, ), (1, ))
    assert_size_stride(arg108_1, (512, ), (1, ))
    assert_size_stride(arg109_1, (512, 512, 3, 3), (4608, 9, 3, 1))
    assert_size_stride(arg110_1, (), ())
    assert_size_stride(arg111_1, (512, ), (1, ))
    assert_size_stride(arg112_1, (512, ), (1, ))
    assert_size_stride(arg113_1, (512, ), (1, ))
    assert_size_stride(arg114_1, (512, ), (1, ))
    assert_size_stride(arg115_1, (512, 512, 3, 3), (4608, 9, 3, 1))
    assert_size_stride(arg116_1, (), ())
    assert_size_stride(arg117_1, (512, ), (1, ))
    assert_size_stride(arg118_1, (512, ), (1, ))
    assert_size_stride(arg119_1, (512, ), (1, ))
    assert_size_stride(arg120_1, (512, ), (1, ))
    assert_size_stride(arg121_1, (1000, 512), (512, 1))
    assert_size_stride(arg122_1, (1000, ), (1, ))
    with torch.cuda._DeviceGuard(0):
        torch.cuda.set_device(0)
        buf0 = empty_strided_cuda((1, 3, 224, 224), (150528, 1, 672, 3), torch.float32)
        # Topologically Sorted Source Nodes: [x], Original ATen: [aten.convolution]
        stream0 = get_raw_stream(0)
        triton_poi_fused_convolution_0.run(arg1_1, buf0, 3, 50176, grid=grid(3, 50176), stream=stream0)
        del arg1_1
        buf1 = empty_strided_cuda((64, 3, 7, 7), (147, 1, 21, 3), torch.float32)
        # Topologically Sorted Source Nodes: [x], Original ATen: [aten.convolution]
        triton_poi_fused_convolution_1.run(arg0_1, buf1, 192, 49, grid=grid(192, 49), stream=stream0)
        del arg0_1
        # Topologically Sorted Source Nodes: [x], Original ATen: [aten.convolution]
        buf2 = extern_kernels.convolution(buf0, buf1, stride=(2, 2), padding=(3, 3), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf2, (1, 64, 112, 112), (802816, 1, 7168, 64))
        del buf0
        del buf1
        buf3 = empty_strided_cuda((1, 64, 1, 1, 2, 49), (6272, 1, 6272, 6272, 3136, 64), torch.float32)
        buf4 = empty_strided_cuda((1, 64, 1, 1, 2, 49), (6272, 1, 6272, 6272, 3136, 64), torch.float32)
        buf5 = empty_strided_cuda((1, 64, 1, 1, 2, 49), (6272, 1, 6272, 6272, 3136, 64), torch.float32)
        # Topologically Sorted Source Nodes: [x_1], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_2.run(buf2, buf3, buf4, buf5, 6272, 128, grid=grid(6272), stream=stream0)
        buf6 = empty_strided_cuda((1, 64, 1, 1, 2), (128, 1, 128, 128, 64), torch.float32)
        buf7 = empty_strided_cuda((1, 64, 1, 1, 2), (128, 1, 128, 128, 64), torch.float32)
        buf8 = empty_strided_cuda((1, 64, 1, 1, 2), (128, 1, 128, 128, 64), torch.float32)
        # Topologically Sorted Source Nodes: [x_1], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_3.run(buf3, buf4, buf5, buf6, buf7, buf8, 128, 49, grid=grid(128), stream=stream0)
        del buf3
        del buf4
        del buf5
        buf9 = empty_strided_cuda((1, 64, 1, 1), (64, 1, 1, 1), torch.float32)
        buf10 = empty_strided_cuda((1, 64, 1, 1), (64, 1, 64, 64), torch.float32)
        # Topologically Sorted Source Nodes: [x_1], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_4.run(buf6, buf7, buf8, arg3_1, arg4_1, buf9, buf10, arg3_1, arg4_1, 64, 2, grid=grid(64), stream=stream0)
        del arg3_1
        del arg4_1
        buf12 = buf2; del buf2  # reuse
        # Topologically Sorted Source Nodes: [x_1, x_2], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_5.run(buf12, buf9, buf10, arg5_1, arg6_1, 802816, grid=grid(802816), stream=stream0)
        del arg5_1
        del arg6_1
        buf13 = empty_strided_cuda((1, 64, 56, 56), (200704, 1, 3584, 64), torch.float32)
        # Topologically Sorted Source Nodes: [x_1, x_2, x_3], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.max_pool2d_with_indices]
        triton_poi_fused__native_batch_norm_legit_functional_max_pool2d_with_indices_relu_6.run(buf12, buf13, 200704, grid=grid(200704), stream=stream0)
        del buf12
        buf14 = empty_strided_cuda((64, 64, 3, 3), (576, 1, 192, 64), torch.float32)
        # Topologically Sorted Source Nodes: [out], Original ATen: [aten.convolution]
        triton_poi_fused_convolution_7.run(arg7_1, buf14, 4096, 9, grid=grid(4096, 9), stream=stream0)
        del arg7_1
        # Topologically Sorted Source Nodes: [out], Original ATen: [aten.convolution]
        buf15 = extern_kernels.convolution(buf13, buf14, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf15, (1, 64, 56, 56), (200704, 1, 3584, 64))
        buf16 = buf9; del buf9  # reuse
        buf17 = buf10; del buf10  # reuse
        # Topologically Sorted Source Nodes: [out_1], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_red_fused__native_batch_norm_legit_functional_8.run(buf15, arg9_1, arg10_1, buf16, buf17, arg9_1, arg10_1, 64, 3136, grid=grid(64), stream=stream0)
        del arg10_1
        del arg9_1
        buf19 = empty_strided_cuda((1, 64, 56, 56), (200704, 1, 3584, 64), torch.float32)
        # Topologically Sorted Source Nodes: [out_1, out_2], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_9.run(buf15, buf16, buf17, arg11_1, arg12_1, buf19, 200704, grid=grid(200704), stream=stream0)
        del arg11_1
        del arg12_1
        del buf15
        buf20 = buf14; del buf14  # reuse
        # Topologically Sorted Source Nodes: [out_1, out_2, out_3], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused_convolution_7.run(arg13_1, buf20, 4096, 9, grid=grid(4096, 9), stream=stream0)
        del arg13_1
        # Topologically Sorted Source Nodes: [out_1, out_2, out_3], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf21 = extern_kernels.convolution(buf19, buf20, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf21, (1, 64, 56, 56), (200704, 1, 3584, 64))
        del buf19
        buf22 = reinterpret_tensor(buf17, (1, 64, 1, 1), (64, 1, 1, 1), 0); del buf17  # reuse
        buf23 = reinterpret_tensor(buf16, (1, 64, 1, 1), (64, 1, 64, 64), 0); del buf16  # reuse
        # Topologically Sorted Source Nodes: [out_4], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_red_fused__native_batch_norm_legit_functional_8.run(buf21, arg15_1, arg16_1, buf22, buf23, arg15_1, arg16_1, 64, 3136, grid=grid(64), stream=stream0)
        del arg15_1
        del arg16_1
        buf25 = buf13; del buf13  # reuse
        # Topologically Sorted Source Nodes: [out_4, out_5, out_6], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_add_relu_10.run(buf25, buf21, buf22, buf23, arg17_1, arg18_1, 200704, grid=grid(200704), stream=stream0)
        del arg17_1
        del arg18_1
        buf26 = buf20; del buf20  # reuse
        # Topologically Sorted Source Nodes: [out_7], Original ATen: [aten.convolution]
        triton_poi_fused_convolution_7.run(arg19_1, buf26, 4096, 9, grid=grid(4096, 9), stream=stream0)
        del arg19_1
        # Topologically Sorted Source Nodes: [out_7], Original ATen: [aten.convolution]
        buf27 = extern_kernels.convolution(buf25, buf26, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf27, (1, 64, 56, 56), (200704, 1, 3584, 64))
        buf28 = reinterpret_tensor(buf23, (1, 64, 1, 1), (64, 1, 1, 1), 0); del buf23  # reuse
        buf29 = reinterpret_tensor(buf22, (1, 64, 1, 1), (64, 1, 64, 64), 0); del buf22  # reuse
        # Topologically Sorted Source Nodes: [out_8], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_red_fused__native_batch_norm_legit_functional_8.run(buf27, arg21_1, arg22_1, buf28, buf29, arg21_1, arg22_1, 64, 3136, grid=grid(64), stream=stream0)
        del arg21_1
        del arg22_1
        buf31 = buf21; del buf21  # reuse
        # Topologically Sorted Source Nodes: [out_8, out_9], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_9.run(buf27, buf28, buf29, arg23_1, arg24_1, buf31, 200704, grid=grid(200704), stream=stream0)
        del arg23_1
        del arg24_1
        del buf27
        buf32 = buf26; del buf26  # reuse
        # Topologically Sorted Source Nodes: [out_8, out_9, out_10], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused_convolution_7.run(arg25_1, buf32, 4096, 9, grid=grid(4096, 9), stream=stream0)
        del arg25_1
        # Topologically Sorted Source Nodes: [out_8, out_9, out_10], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf33 = extern_kernels.convolution(buf31, buf32, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf33, (1, 64, 56, 56), (200704, 1, 3584, 64))
        del buf31
        del buf32
        buf34 = reinterpret_tensor(buf29, (1, 64, 1, 1), (64, 1, 1, 1), 0); del buf29  # reuse
        buf35 = reinterpret_tensor(buf28, (1, 64, 1, 1), (64, 1, 64, 64), 0); del buf28  # reuse
        # Topologically Sorted Source Nodes: [out_11], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_red_fused__native_batch_norm_legit_functional_8.run(buf33, arg27_1, arg28_1, buf34, buf35, arg27_1, arg28_1, 64, 3136, grid=grid(64), stream=stream0)
        del arg27_1
        del arg28_1
        buf37 = buf25; del buf25  # reuse
        # Topologically Sorted Source Nodes: [out_11, out_12, out_13], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_add_relu_10.run(buf37, buf33, buf34, buf35, arg29_1, arg30_1, 200704, grid=grid(200704), stream=stream0)
        del arg29_1
        del arg30_1
        del buf33
        del buf34
        del buf35
        buf38 = empty_strided_cuda((128, 64, 3, 3), (576, 1, 192, 64), torch.float32)
        # Topologically Sorted Source Nodes: [out_14], Original ATen: [aten.convolution]
        triton_poi_fused_convolution_11.run(arg31_1, buf38, 8192, 9, grid=grid(8192, 9), stream=stream0)
        del arg31_1
        # Topologically Sorted Source Nodes: [out_14], Original ATen: [aten.convolution]
        buf39 = extern_kernels.convolution(buf37, buf38, stride=(2, 2), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf39, (1, 128, 28, 28), (100352, 1, 3584, 128))
        del buf38
        buf40 = reinterpret_tensor(buf8, (1, 128, 1, 1), (128, 1, 1, 1), 0); del buf8  # reuse
        buf41 = reinterpret_tensor(buf7, (1, 128, 1, 1), (128, 1, 128, 128), 0); del buf7  # reuse
        # Topologically Sorted Source Nodes: [out_15], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_12.run(buf39, arg33_1, arg34_1, buf40, buf41, arg33_1, arg34_1, 128, 784, grid=grid(128), stream=stream0)
        del arg33_1
        del arg34_1
        buf43 = empty_strided_cuda((1, 128, 28, 28), (100352, 1, 3584, 128), torch.float32)
        # Topologically Sorted Source Nodes: [out_15, out_16], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_13.run(buf39, buf40, buf41, arg35_1, arg36_1, buf43, 100352, grid=grid(100352), stream=stream0)
        del arg35_1
        del arg36_1
        del buf39
        buf44 = empty_strided_cuda((128, 128, 3, 3), (1152, 1, 384, 128), torch.float32)
        # Topologically Sorted Source Nodes: [out_15, out_16, out_17], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_14.run(arg37_1, buf44, 16384, 9, grid=grid(16384, 9), stream=stream0)
        del arg37_1
        # Topologically Sorted Source Nodes: [out_15, out_16, out_17], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf45 = extern_kernels.convolution(buf43, buf44, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf45, (1, 128, 28, 28), (100352, 1, 3584, 128))
        buf46 = reinterpret_tensor(buf41, (1, 128, 1, 1), (128, 1, 1, 1), 0); del buf41  # reuse
        buf47 = reinterpret_tensor(buf40, (1, 128, 1, 1), (128, 1, 128, 128), 0); del buf40  # reuse
        # Topologically Sorted Source Nodes: [out_18], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_12.run(buf45, arg39_1, arg40_1, buf46, buf47, arg39_1, arg40_1, 128, 784, grid=grid(128), stream=stream0)
        del arg39_1
        del arg40_1
        # Topologically Sorted Source Nodes: [input_1], Original ATen: [aten.convolution]
        buf49 = extern_kernels.convolution(buf37, arg43_1, stride=(2, 2), padding=(0, 0), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf49, (1, 128, 28, 28), (100352, 1, 3584, 128))
        del arg43_1
        del buf37
        buf50 = reinterpret_tensor(buf6, (1, 128, 1, 1), (128, 1, 1, 1), 0); del buf6  # reuse
        buf51 = empty_strided_cuda((1, 128, 1, 1), (128, 1, 128, 128), torch.float32)
        # Topologically Sorted Source Nodes: [input_2], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_12.run(buf49, arg45_1, arg46_1, buf50, buf51, arg45_1, arg46_1, 128, 784, grid=grid(128), stream=stream0)
        del arg45_1
        del arg46_1
        buf53 = buf43; del buf43  # reuse
        buf54 = buf53; del buf53  # reuse
        # Topologically Sorted Source Nodes: [out_18, input_2, out_19, out_20], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_add_relu_15.run(buf54, buf45, buf46, buf47, arg41_1, arg42_1, buf49, buf50, buf51, arg47_1, arg48_1, 100352, grid=grid(100352), stream=stream0)
        del arg41_1
        del arg42_1
        del arg47_1
        del arg48_1
        del buf45
        del buf46
        del buf47
        buf55 = buf44; del buf44  # reuse
        # Topologically Sorted Source Nodes: [out_20, out_21], Original ATen: [aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_14.run(arg49_1, buf55, 16384, 9, grid=grid(16384, 9), stream=stream0)
        del arg49_1
        # Topologically Sorted Source Nodes: [out_20, out_21], Original ATen: [aten.relu, aten.convolution]
        buf56 = extern_kernels.convolution(buf54, buf55, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf56, (1, 128, 28, 28), (100352, 1, 3584, 128))
        buf57 = reinterpret_tensor(buf51, (1, 128, 1, 1), (128, 1, 1, 1), 0); del buf51  # reuse
        buf58 = reinterpret_tensor(buf50, (1, 128, 1, 1), (128, 1, 128, 128), 0); del buf50  # reuse
        # Topologically Sorted Source Nodes: [out_22], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_12.run(buf56, arg51_1, arg52_1, buf57, buf58, arg51_1, arg52_1, 128, 784, grid=grid(128), stream=stream0)
        del arg51_1
        del arg52_1
        buf60 = buf49; del buf49  # reuse
        # Topologically Sorted Source Nodes: [out_22, out_23], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_13.run(buf56, buf57, buf58, arg53_1, arg54_1, buf60, 100352, grid=grid(100352), stream=stream0)
        del arg53_1
        del arg54_1
        del buf56
        buf61 = buf55; del buf55  # reuse
        # Topologically Sorted Source Nodes: [out_22, out_23, out_24], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_14.run(arg55_1, buf61, 16384, 9, grid=grid(16384, 9), stream=stream0)
        del arg55_1
        # Topologically Sorted Source Nodes: [out_22, out_23, out_24], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf62 = extern_kernels.convolution(buf60, buf61, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf62, (1, 128, 28, 28), (100352, 1, 3584, 128))
        del buf60
        del buf61
        buf63 = reinterpret_tensor(buf58, (1, 128, 1, 1), (128, 1, 1, 1), 0); del buf58  # reuse
        buf64 = reinterpret_tensor(buf57, (1, 128, 1, 1), (128, 1, 128, 128), 0); del buf57  # reuse
        # Topologically Sorted Source Nodes: [out_25], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_12.run(buf62, arg57_1, arg58_1, buf63, buf64, arg57_1, arg58_1, 128, 784, grid=grid(128), stream=stream0)
        del arg57_1
        del arg58_1
        buf66 = buf54; del buf54  # reuse
        # Topologically Sorted Source Nodes: [out_25, out_26, out_27], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_add_relu_16.run(buf66, buf62, buf63, buf64, arg59_1, arg60_1, 100352, grid=grid(100352), stream=stream0)
        del arg59_1
        del arg60_1
        del buf62
        del buf63
        del buf64
        buf67 = empty_strided_cuda((256, 128, 3, 3), (1152, 1, 384, 128), torch.float32)
        # Topologically Sorted Source Nodes: [out_28], Original ATen: [aten.convolution]
        triton_poi_fused_convolution_17.run(arg61_1, buf67, 32768, 9, grid=grid(32768, 9), stream=stream0)
        del arg61_1
        # Topologically Sorted Source Nodes: [out_28], Original ATen: [aten.convolution]
        buf68 = extern_kernels.convolution(buf66, buf67, stride=(2, 2), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf68, (1, 256, 14, 14), (50176, 1, 3584, 256))
        del buf67
        buf69 = empty_strided_cuda((1, 256, 1, 1), (256, 1, 1, 1), torch.float32)
        buf70 = empty_strided_cuda((1, 256, 1, 1), (256, 1, 256, 256), torch.float32)
        # Topologically Sorted Source Nodes: [out_29], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_18.run(buf68, arg63_1, arg64_1, buf69, buf70, arg63_1, arg64_1, 256, 196, grid=grid(256), stream=stream0)
        del arg63_1
        del arg64_1
        buf72 = empty_strided_cuda((1, 256, 14, 14), (50176, 1, 3584, 256), torch.float32)
        # Topologically Sorted Source Nodes: [out_29, out_30], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_19.run(buf68, buf69, buf70, arg65_1, arg66_1, buf72, 50176, grid=grid(50176), stream=stream0)
        del arg65_1
        del arg66_1
        del buf68
        buf73 = empty_strided_cuda((256, 256, 3, 3), (2304, 1, 768, 256), torch.float32)
        # Topologically Sorted Source Nodes: [out_29, out_30, out_31], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_20.run(arg67_1, buf73, 65536, 9, grid=grid(65536, 9), stream=stream0)
        del arg67_1
        # Topologically Sorted Source Nodes: [out_29, out_30, out_31], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf74 = extern_kernels.convolution(buf72, buf73, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf74, (1, 256, 14, 14), (50176, 1, 3584, 256))
        buf75 = reinterpret_tensor(buf70, (1, 256, 1, 1), (256, 1, 1, 1), 0); del buf70  # reuse
        buf76 = reinterpret_tensor(buf69, (1, 256, 1, 1), (256, 1, 256, 256), 0); del buf69  # reuse
        # Topologically Sorted Source Nodes: [out_32], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_18.run(buf74, arg69_1, arg70_1, buf75, buf76, arg69_1, arg70_1, 256, 196, grid=grid(256), stream=stream0)
        del arg69_1
        del arg70_1
        # Topologically Sorted Source Nodes: [input_3], Original ATen: [aten.convolution]
        buf78 = extern_kernels.convolution(buf66, arg73_1, stride=(2, 2), padding=(0, 0), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf78, (1, 256, 14, 14), (50176, 1, 3584, 256))
        del arg73_1
        del buf66
        buf79 = empty_strided_cuda((1, 256, 1, 1), (256, 1, 1, 1), torch.float32)
        buf80 = empty_strided_cuda((1, 256, 1, 1), (256, 1, 256, 256), torch.float32)
        # Topologically Sorted Source Nodes: [input_4], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_18.run(buf78, arg75_1, arg76_1, buf79, buf80, arg75_1, arg76_1, 256, 196, grid=grid(256), stream=stream0)
        del arg75_1
        del arg76_1
        buf82 = buf72; del buf72  # reuse
        buf83 = buf82; del buf82  # reuse
        # Topologically Sorted Source Nodes: [out_32, input_4, out_33, out_34], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_add_relu_21.run(buf83, buf74, buf75, buf76, arg71_1, arg72_1, buf78, buf79, buf80, arg77_1, arg78_1, 50176, grid=grid(50176), stream=stream0)
        del arg71_1
        del arg72_1
        del arg77_1
        del arg78_1
        del buf74
        del buf75
        del buf76
        buf84 = buf73; del buf73  # reuse
        # Topologically Sorted Source Nodes: [out_34, out_35], Original ATen: [aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_20.run(arg79_1, buf84, 65536, 9, grid=grid(65536, 9), stream=stream0)
        del arg79_1
        # Topologically Sorted Source Nodes: [out_34, out_35], Original ATen: [aten.relu, aten.convolution]
        buf85 = extern_kernels.convolution(buf83, buf84, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf85, (1, 256, 14, 14), (50176, 1, 3584, 256))
        buf86 = reinterpret_tensor(buf80, (1, 256, 1, 1), (256, 1, 1, 1), 0); del buf80  # reuse
        buf87 = reinterpret_tensor(buf79, (1, 256, 1, 1), (256, 1, 256, 256), 0); del buf79  # reuse
        # Topologically Sorted Source Nodes: [out_36], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_18.run(buf85, arg81_1, arg82_1, buf86, buf87, arg81_1, arg82_1, 256, 196, grid=grid(256), stream=stream0)
        del arg81_1
        del arg82_1
        buf89 = buf78; del buf78  # reuse
        # Topologically Sorted Source Nodes: [out_36, out_37], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_19.run(buf85, buf86, buf87, arg83_1, arg84_1, buf89, 50176, grid=grid(50176), stream=stream0)
        del arg83_1
        del arg84_1
        del buf85
        buf90 = buf84; del buf84  # reuse
        # Topologically Sorted Source Nodes: [out_36, out_37, out_38], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_20.run(arg85_1, buf90, 65536, 9, grid=grid(65536, 9), stream=stream0)
        del arg85_1
        # Topologically Sorted Source Nodes: [out_36, out_37, out_38], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf91 = extern_kernels.convolution(buf89, buf90, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf91, (1, 256, 14, 14), (50176, 1, 3584, 256))
        del buf89
        del buf90
        buf92 = reinterpret_tensor(buf87, (1, 256, 1, 1), (256, 1, 1, 1), 0); del buf87  # reuse
        buf93 = reinterpret_tensor(buf86, (1, 256, 1, 1), (256, 1, 256, 256), 0); del buf86  # reuse
        # Topologically Sorted Source Nodes: [out_39], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_18.run(buf91, arg87_1, arg88_1, buf92, buf93, arg87_1, arg88_1, 256, 196, grid=grid(256), stream=stream0)
        del arg87_1
        del arg88_1
        buf95 = buf83; del buf83  # reuse
        # Topologically Sorted Source Nodes: [out_39, out_40, out_41], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_add_relu_22.run(buf95, buf91, buf92, buf93, arg89_1, arg90_1, 50176, grid=grid(50176), stream=stream0)
        del arg89_1
        del arg90_1
        del buf91
        del buf92
        del buf93
        buf96 = empty_strided_cuda((512, 256, 3, 3), (2304, 1, 768, 256), torch.float32)
        # Topologically Sorted Source Nodes: [out_42], Original ATen: [aten.convolution]
        triton_poi_fused_convolution_23.run(arg91_1, buf96, 131072, 9, grid=grid(131072, 9), stream=stream0)
        del arg91_1
        # Topologically Sorted Source Nodes: [out_42], Original ATen: [aten.convolution]
        buf97 = extern_kernels.convolution(buf95, buf96, stride=(2, 2), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf97, (1, 512, 7, 7), (25088, 1, 3584, 512))
        del buf96
        buf98 = empty_strided_cuda((1, 512, 1, 1), (512, 1, 1, 1), torch.float32)
        buf99 = empty_strided_cuda((1, 512, 1, 1), (512, 1, 512, 512), torch.float32)
        # Topologically Sorted Source Nodes: [out_43], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_24.run(buf97, arg93_1, arg94_1, buf98, buf99, arg93_1, arg94_1, 512, 49, grid=grid(512), stream=stream0)
        del arg93_1
        del arg94_1
        buf101 = empty_strided_cuda((1, 512, 7, 7), (25088, 1, 3584, 512), torch.float32)
        # Topologically Sorted Source Nodes: [out_43, out_44], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_25.run(buf97, buf98, buf99, arg95_1, arg96_1, buf101, 25088, grid=grid(25088), stream=stream0)
        del arg95_1
        del arg96_1
        del buf97
        buf102 = empty_strided_cuda((512, 512, 3, 3), (4608, 1, 1536, 512), torch.float32)
        # Topologically Sorted Source Nodes: [out_43, out_44, out_45], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_26.run(arg97_1, buf102, 262144, 9, grid=grid(262144, 9), stream=stream0)
        del arg97_1
        # Topologically Sorted Source Nodes: [out_43, out_44, out_45], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf103 = extern_kernels.convolution(buf101, buf102, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf103, (1, 512, 7, 7), (25088, 1, 3584, 512))
        buf104 = reinterpret_tensor(buf99, (1, 512, 1, 1), (512, 1, 1, 1), 0); del buf99  # reuse
        buf105 = reinterpret_tensor(buf98, (1, 512, 1, 1), (512, 1, 512, 512), 0); del buf98  # reuse
        # Topologically Sorted Source Nodes: [out_46], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_24.run(buf103, arg99_1, arg100_1, buf104, buf105, arg99_1, arg100_1, 512, 49, grid=grid(512), stream=stream0)
        del arg100_1
        del arg99_1
        # Topologically Sorted Source Nodes: [input_5], Original ATen: [aten.convolution]
        buf107 = extern_kernels.convolution(buf95, arg103_1, stride=(2, 2), padding=(0, 0), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf107, (1, 512, 7, 7), (25088, 1, 3584, 512))
        del arg103_1
        del buf95
        buf108 = empty_strided_cuda((1, 512, 1, 1), (512, 1, 1, 1), torch.float32)
        buf109 = empty_strided_cuda((1, 512, 1, 1), (512, 1, 512, 512), torch.float32)
        # Topologically Sorted Source Nodes: [input_6], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_24.run(buf107, arg105_1, arg106_1, buf108, buf109, arg105_1, arg106_1, 512, 49, grid=grid(512), stream=stream0)
        del arg105_1
        del arg106_1
        buf111 = buf101; del buf101  # reuse
        buf112 = buf111; del buf111  # reuse
        # Topologically Sorted Source Nodes: [out_46, input_6, out_47, out_48], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_add_relu_27.run(buf112, buf103, buf104, buf105, arg101_1, arg102_1, buf107, buf108, buf109, arg107_1, arg108_1, 25088, grid=grid(25088), stream=stream0)
        del arg101_1
        del arg102_1
        del arg107_1
        del arg108_1
        del buf103
        del buf104
        del buf105
        buf113 = buf102; del buf102  # reuse
        # Topologically Sorted Source Nodes: [out_48, out_49], Original ATen: [aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_26.run(arg109_1, buf113, 262144, 9, grid=grid(262144, 9), stream=stream0)
        del arg109_1
        # Topologically Sorted Source Nodes: [out_48, out_49], Original ATen: [aten.relu, aten.convolution]
        buf114 = extern_kernels.convolution(buf112, buf113, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf114, (1, 512, 7, 7), (25088, 1, 3584, 512))
        buf115 = reinterpret_tensor(buf109, (1, 512, 1, 1), (512, 1, 1, 1), 0); del buf109  # reuse
        buf116 = reinterpret_tensor(buf108, (1, 512, 1, 1), (512, 1, 512, 512), 0); del buf108  # reuse
        # Topologically Sorted Source Nodes: [out_50], Original ATen: [aten._native_batch_norm_legit_functional]
        triton_per_fused__native_batch_norm_legit_functional_24.run(buf114, arg111_1, arg112_1, buf115, buf116, arg111_1, arg112_1, 512, 49, grid=grid(512), stream=stream0)
        del arg111_1
        del arg112_1
        buf118 = buf107; del buf107  # reuse
        # Topologically Sorted Source Nodes: [out_50, out_51], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu]
        triton_poi_fused__native_batch_norm_legit_functional_relu_25.run(buf114, buf115, buf116, arg113_1, arg114_1, buf118, 25088, grid=grid(25088), stream=stream0)
        del arg113_1
        del arg114_1
        del buf114
        del buf115
        buf119 = buf113; del buf113  # reuse
        # Topologically Sorted Source Nodes: [out_50, out_51, out_52], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        triton_poi_fused__native_batch_norm_legit_functional_convolution_relu_26.run(arg115_1, buf119, 262144, 9, grid=grid(262144, 9), stream=stream0)
        del arg115_1
        # Topologically Sorted Source Nodes: [out_50, out_51, out_52], Original ATen: [aten._native_batch_norm_legit_functional, aten.relu, aten.convolution]
        buf120 = extern_kernels.convolution(buf118, buf119, stride=(1, 1), padding=(1, 1), dilation=(1, 1), transposed=False, output_padding=(0, 0), groups=1, bias=None)
        assert_size_stride(buf120, (1, 512, 7, 7), (25088, 1, 3584, 512))
        del buf118
        del buf119
        buf124 = buf116; del buf116  # reuse
        buf125 = buf124; del buf124  # reuse
        # Topologically Sorted Source Nodes: [out_53, out_54, out_55, x_4], Original ATen: [aten._native_batch_norm_legit_functional, aten.add, aten.relu, aten.mean]
        triton_per_fused__native_batch_norm_legit_functional_add_mean_relu_28.run(buf125, buf120, arg119_1, arg120_1, buf112, arg117_1, arg118_1, arg117_1, arg118_1, 512, 49, grid=grid(512), stream=stream0)
        del arg117_1
        del arg118_1
        del arg119_1
        del arg120_1
        del buf112
        del buf120
        buf126 = empty_strided_cuda((1, 1000), (1000, 1), torch.float32)
        # Topologically Sorted Source Nodes: [x_6], Original ATen: [aten.addmm]
        extern_kernels.addmm(arg122_1, reinterpret_tensor(buf125, (1, 512), (0, 1), 0), reinterpret_tensor(arg121_1, (512, 1000), (1, 512), 0), alpha=1, beta=1, out=buf126)
        del arg121_1
        del arg122_1
        del buf125
        # Topologically Sorted Source Nodes: [add_], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg2_1, arg2_1, 1, grid=grid(1), stream=stream0)
        del arg2_1
        # Topologically Sorted Source Nodes: [add__1], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg8_1, arg8_1, 1, grid=grid(1), stream=stream0)
        del arg8_1
        # Topologically Sorted Source Nodes: [add__2], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg14_1, arg14_1, 1, grid=grid(1), stream=stream0)
        del arg14_1
        # Topologically Sorted Source Nodes: [add__3], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg20_1, arg20_1, 1, grid=grid(1), stream=stream0)
        del arg20_1
        # Topologically Sorted Source Nodes: [add__4], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg26_1, arg26_1, 1, grid=grid(1), stream=stream0)
        del arg26_1
        # Topologically Sorted Source Nodes: [add__5], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg32_1, arg32_1, 1, grid=grid(1), stream=stream0)
        del arg32_1
        # Topologically Sorted Source Nodes: [add__6], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg38_1, arg38_1, 1, grid=grid(1), stream=stream0)
        del arg38_1
        # Topologically Sorted Source Nodes: [add__7], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg44_1, arg44_1, 1, grid=grid(1), stream=stream0)
        del arg44_1
        # Topologically Sorted Source Nodes: [add__8], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg50_1, arg50_1, 1, grid=grid(1), stream=stream0)
        del arg50_1
        # Topologically Sorted Source Nodes: [add__9], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg56_1, arg56_1, 1, grid=grid(1), stream=stream0)
        del arg56_1
        # Topologically Sorted Source Nodes: [add__10], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg62_1, arg62_1, 1, grid=grid(1), stream=stream0)
        del arg62_1
        # Topologically Sorted Source Nodes: [add__11], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg68_1, arg68_1, 1, grid=grid(1), stream=stream0)
        del arg68_1
        # Topologically Sorted Source Nodes: [add__12], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg74_1, arg74_1, 1, grid=grid(1), stream=stream0)
        del arg74_1
        # Topologically Sorted Source Nodes: [add__13], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg80_1, arg80_1, 1, grid=grid(1), stream=stream0)
        del arg80_1
        # Topologically Sorted Source Nodes: [add__14], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg86_1, arg86_1, 1, grid=grid(1), stream=stream0)
        del arg86_1
        # Topologically Sorted Source Nodes: [add__15], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg92_1, arg92_1, 1, grid=grid(1), stream=stream0)
        del arg92_1
        # Topologically Sorted Source Nodes: [add__16], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg98_1, arg98_1, 1, grid=grid(1), stream=stream0)
        del arg98_1
        # Topologically Sorted Source Nodes: [add__17], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg104_1, arg104_1, 1, grid=grid(1), stream=stream0)
        del arg104_1
        # Topologically Sorted Source Nodes: [add__18], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg110_1, arg110_1, 1, grid=grid(1), stream=stream0)
        del arg110_1
        # Topologically Sorted Source Nodes: [add__19], Original ATen: [aten.add]
        triton_poi_fused_add_29.run(arg116_1, arg116_1, 1, grid=grid(1), stream=stream0)
        del arg116_1
    return (buf126, )


def benchmark_compiled_module(times=10, repeat=10):
    from torch._dynamo.testing import rand_strided
    from torch._inductor.utils import print_performance
    arg0_1 = rand_strided((64, 3, 7, 7), (147, 49, 7, 1), device='cuda:0', dtype=torch.float32)
    arg1_1 = rand_strided((1, 3, 224, 224), (150528, 50176, 224, 1), device='cuda:0', dtype=torch.float32)
    arg2_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg3_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg4_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg5_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg6_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg7_1 = rand_strided((64, 64, 3, 3), (576, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg8_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg9_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg10_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg11_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg12_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg13_1 = rand_strided((64, 64, 3, 3), (576, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg14_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg15_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg16_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg17_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg18_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg19_1 = rand_strided((64, 64, 3, 3), (576, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg20_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg21_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg22_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg23_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg24_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg25_1 = rand_strided((64, 64, 3, 3), (576, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg26_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg27_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg28_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg29_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg30_1 = rand_strided((64, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg31_1 = rand_strided((128, 64, 3, 3), (576, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg32_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg33_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg34_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg35_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg36_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg37_1 = rand_strided((128, 128, 3, 3), (1152, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg38_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg39_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg40_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg41_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg42_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg43_1 = rand_strided((128, 64, 1, 1), (64, 1, 1, 1), device='cuda:0', dtype=torch.float32)
    arg44_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg45_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg46_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg47_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg48_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg49_1 = rand_strided((128, 128, 3, 3), (1152, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg50_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg51_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg52_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg53_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg54_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg55_1 = rand_strided((128, 128, 3, 3), (1152, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg56_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg57_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg58_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg59_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg60_1 = rand_strided((128, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg61_1 = rand_strided((256, 128, 3, 3), (1152, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg62_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg63_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg64_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg65_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg66_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg67_1 = rand_strided((256, 256, 3, 3), (2304, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg68_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg69_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg70_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg71_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg72_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg73_1 = rand_strided((256, 128, 1, 1), (128, 1, 1, 1), device='cuda:0', dtype=torch.float32)
    arg74_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg75_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg76_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg77_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg78_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg79_1 = rand_strided((256, 256, 3, 3), (2304, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg80_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg81_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg82_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg83_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg84_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg85_1 = rand_strided((256, 256, 3, 3), (2304, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg86_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg87_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg88_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg89_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg90_1 = rand_strided((256, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg91_1 = rand_strided((512, 256, 3, 3), (2304, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg92_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg93_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg94_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg95_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg96_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg97_1 = rand_strided((512, 512, 3, 3), (4608, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg98_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg99_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg100_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg101_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg102_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg103_1 = rand_strided((512, 256, 1, 1), (256, 1, 1, 1), device='cuda:0', dtype=torch.float32)
    arg104_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg105_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg106_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg107_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg108_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg109_1 = rand_strided((512, 512, 3, 3), (4608, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg110_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg111_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg112_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg113_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg114_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg115_1 = rand_strided((512, 512, 3, 3), (4608, 9, 3, 1), device='cuda:0', dtype=torch.float32)
    arg116_1 = rand_strided((), (), device='cuda:0', dtype=torch.int64)
    arg117_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg118_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg119_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg120_1 = rand_strided((512, ), (1, ), device='cuda:0', dtype=torch.float32)
    arg121_1 = rand_strided((1000, 512), (512, 1), device='cuda:0', dtype=torch.float32)
    arg122_1 = rand_strided((1000, ), (1, ), device='cuda:0', dtype=torch.float32)
    fn = lambda: call([arg0_1, arg1_1, arg2_1, arg3_1, arg4_1, arg5_1, arg6_1, arg7_1, arg8_1, arg9_1, arg10_1, arg11_1, arg12_1, arg13_1, arg14_1, arg15_1, arg16_1, arg17_1, arg18_1, arg19_1, arg20_1, arg21_1, arg22_1, arg23_1, arg24_1, arg25_1, arg26_1, arg27_1, arg28_1, arg29_1, arg30_1, arg31_1, arg32_1, arg33_1, arg34_1, arg35_1, arg36_1, arg37_1, arg38_1, arg39_1, arg40_1, arg41_1, arg42_1, arg43_1, arg44_1, arg45_1, arg46_1, arg47_1, arg48_1, arg49_1, arg50_1, arg51_1, arg52_1, arg53_1, arg54_1, arg55_1, arg56_1, arg57_1, arg58_1, arg59_1, arg60_1, arg61_1, arg62_1, arg63_1, arg64_1, arg65_1, arg66_1, arg67_1, arg68_1, arg69_1, arg70_1, arg71_1, arg72_1, arg73_1, arg74_1, arg75_1, arg76_1, arg77_1, arg78_1, arg79_1, arg80_1, arg81_1, arg82_1, arg83_1, arg84_1, arg85_1, arg86_1, arg87_1, arg88_1, arg89_1, arg90_1, arg91_1, arg92_1, arg93_1, arg94_1, arg95_1, arg96_1, arg97_1, arg98_1, arg99_1, arg100_1, arg101_1, arg102_1, arg103_1, arg104_1, arg105_1, arg106_1, arg107_1, arg108_1, arg109_1, arg110_1, arg111_1, arg112_1, arg113_1, arg114_1, arg115_1, arg116_1, arg117_1, arg118_1, arg119_1, arg120_1, arg121_1, arg122_1])
    return print_performance(fn, times=times, repeat=repeat)


if __name__ == "__main__":
    from torch._inductor.wrapper_benchmark import compiled_module_main
    compiled_module_main('None', benchmark_compiled_module)

INFO:torch._inductor.codecache.__output_code:Output code written to: /tmp/torchinductor_chilli/yg/cygkfcohesgtwwvfz2mhyoulllgy26o5zwupshmm6icgvcybrvrd.py
`;
function getGraph() {
        return fx_str.split('\n'); 
        }

function getCode() {
    return code_str.split('\n'); 
}

function computeSourceMaps(fxGraph, generatedCode) {
    const leftToRight = [];
    const rightToLeft = [];
    
    const fxLines = fxGraph;
    const codeLines = generatedCode;
    // Initialize leftToRight and rightToLeft as arrays
    for (let i = 0; i < fxLines.length; i++) {
        leftToRight[i] = [];
    }
    for (let i = 0; i < codeLines.length; i++) {
        rightToLeft[i] = [];
    }

    // Regular expression to match node names in fx graph lines
    const nodeNameRegex = /^\s*(\w+):/;

    // Iterate through each line in the fx graph
    fxLines.forEach((fxLine, fxIndex) => {
        const match = fxLine.match(nodeNameRegex);
        if (match) {
            const nodeName = match[1];
            console.log(nodeName);

            // Search for the node name in the generated code
            codeLines.forEach((codeLine, codeIndex) => {
                if (codeLine.includes('%' + nodeName + " :")) {
                    console.log(nodeName, fxIndex, codeLine, codeIndex)
                    leftToRight[fxIndex].push(codeIndex);
                    rightToLeft[codeIndex].push(fxIndex);
                }
            });
        }
    });
    return { leftToRight, rightToLeft };
}