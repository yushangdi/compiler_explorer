/* inputs.js */

let fx_str = `
# post_grad_graph.txt
class <lambda>(torch.nn.Module):
    def forward(self, arg0_1: "f32[10, 20][20, 1]cuda:0", arg1_1: "f32[20, 30][30, 1]cuda:0", arg2_1: "f32[10, 30][30, 1]cuda:0"):
        # File: /mnt/xarfuse/uid-659722/e645270b-seed-nspid4026531836_cgpid16800532-ns-4026531841/caffe2/test/inductor/test_aot_inductor.py:607 in forward, code: x = a * 3.14
    from_node=[('x', '<built-in function mul>')]
    pass_source=[]
    mul: "f32[10, 20][20, 1]cuda:0" = torch.ops.aten.mul.Tensor(arg0_1, 3.14);  arg0_1 = None

        # File: /mnt/xarfuse/uid-659722/e645270b-seed-nspid4026531836_cgpid16800532-ns-4026531841/caffe2/test/inductor/test_aot_inductor.py:608 in forward, code: y = torch.addmm(c, x, b)
    from_node=[('y', '<built-in method addmm of type object at 0x55c7a71989a0>')]
    pass_source=[]
    addmm: "f32[10, 30][30, 1]cuda:0" = torch.ops.aten.addmm.default(arg2_1, mul, arg1_1);  arg2_1 = mul = arg1_1 = None

        # File: /mnt/xarfuse/uid-659722/e645270b-seed-nspid4026531836_cgpid16800532-ns-4026531841/caffe2/test/inductor/test_aot_inductor.py:609 in forward, code: z = torch.nn.functional.gelu(y)
    from_node=[('z', '<built-in function gelu>')]
    pass_source=[]
    mul_1: "f32[10, 30][30, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm, 0.5)
    from_node=[('z', '<built-in function gelu>')]
    pass_source=[]
    mul_2: "f32[10, 30][30, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm, 0.7071067811865476);  addmm = None
    from_node=[('z', '<built-in function gelu>')]
    pass_source=[]
    erf: "f32[10, 30][30, 1]cuda:0" = torch.ops.aten.erf.default(mul_2);  mul_2 = None
    from_node=[('z', '<built-in function gelu>')]
    pass_source=[]
    add: "f32[10, 30][30, 1]cuda:0" = torch.ops.aten.add.Tensor(erf, 1);  erf = None
    from_node=[('z', '<built-in function gelu>')]
    pass_source=[]
    mul_3: "f32[10, 30][30, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_1, add);  mul_1 = add = None
    return (mul_3,)
    `
let code_str = `
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


# kernel path: /tmp/torchinductor_guorachel/tmpm7gasxh8/s7/cs7bvu2ly26gfdjcqyr234uljvvs7ixewcymj436bbogbmhqkjsg.py
# Topologically Sorted Source Nodes: [x], Original ATen: [aten.mul]
# Source node to ATen node mapping:
#   x => mul
# Graph fragment:
#   %mul : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%arg0_1, 3.14), kwargs = {})
triton_poi_fused_mul_0 = async_compile.triton('triton_poi_fused_mul_0', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, DeviceProperties
triton_helpers.set_driver_to_gpu()

@triton_heuristics.pointwise(
    size_hints=[256],
    filename=__file__,
    triton_meta={'signature': {'in_ptr0': '*fp32', 'out_ptr0': '*fp32', 'xnumel': 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=90, major=9, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=132, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_mul_0', 'mutated_arg_names': [], 'optimize_mem': True, 'no_x_dim': False, 'num_load': 1, 'num_reduction': 0, 'backend_hash': 'B34EEE23CB25737B0783931EA8D99A342C090EE4AEACFCE242233C64593BF56F', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': True, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': True, 'is_fbcode': True},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_mul_0(in_ptr0, out_ptr0, xnumel, XBLOCK : tl.constexpr):
    xnumel = 200
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x0 = xindex
    tmp0 = tl.load(in_ptr0 + (x0), xmask)
    tmp1 = 3.14
    tmp2 = tmp0 * tmp1
    tl.store(out_ptr0 + (x0), tmp2, xmask)
''', device_str='cuda')


# kernel path: /tmp/torchinductor_guorachel/tmpm7gasxh8/es/cesmnxk2in4r7xnukgv6kaioyjfozkqcbisv7zbb25xzbijwwbxv.py
# Topologically Sorted Source Nodes: [y, z], Original ATen: [aten.addmm, aten.gelu]
# Source node to ATen node mapping:
#   y => add_tensor
#   z => add, erf, mul_1, mul_2, mul_3
# Graph fragment:
#   %add_tensor : [num_users=2] = call_function[target=torch.ops.aten.add.Tensor](args = (%mm_default, %arg2_1), kwargs = {})
#   %mul_1 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%add_tensor, 0.5), kwargs = {})
#   %mul_2 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%add_tensor, 0.7071067811865476), kwargs = {})
#   %erf : [num_users=1] = call_function[target=torch.ops.aten.erf.default](args = (%mul_2,), kwargs = {})
#   %add : [num_users=1] = call_function[target=torch.ops.aten.add.Tensor](args = (%erf, 1), kwargs = {})
#   %mul_3 : [num_users=1] = call_function[target=torch.ops.aten.mul.Tensor](args = (%mul_1, %add), kwargs = {})
triton_poi_fused_addmm_gelu_1 = async_compile.triton('triton_poi_fused_addmm_gelu_1', '''
import triton
import triton.language as tl
from triton.compiler.compiler import AttrsDescriptor

from torch._inductor.runtime import triton_helpers, triton_heuristics
from torch._inductor.runtime.triton_helpers import libdevice, math as tl_math
from torch._inductor.runtime.hints import AutotuneHint, ReductionHint, TileHint, DeviceProperties
triton_helpers.set_driver_to_gpu()

@triton_heuristics.pointwise(
    size_hints=[512],
    filename=__file__,
    triton_meta={'signature': {'in_out_ptr0': '*fp32', 'in_ptr0': '*fp32', 'xnumel': 'i32'}, 'device': DeviceProperties(type='cuda', index=0, cc=90, major=9, regs_per_multiprocessor=65536, max_threads_per_multi_processor=2048, multi_processor_count=132, warp_size=32), 'constants': {}, 'configs': [AttrsDescriptor(divisible_by_16=(0, 1), equal_to_1=())]},
    inductor_meta={'autotune_hints': set(), 'kernel_name': 'triton_poi_fused_addmm_gelu_1', 'mutated_arg_names': ['in_out_ptr0'], 'optimize_mem': True, 'no_x_dim': False, 'num_load': 2, 'num_reduction': 0, 'backend_hash': 'B34EEE23CB25737B0783931EA8D99A342C090EE4AEACFCE242233C64593BF56F', 'are_deterministic_algorithms_enabled': False, 'assert_indirect_indexing': True, 'autotune_local_cache': True, 'autotune_pointwise': True, 'autotune_remote_cache': None, 'force_disable_caches': True, 'dynamic_scale_rblock': True, 'max_autotune': False, 'max_autotune_pointwise': False, 'min_split_scan_rblock': 256, 'spill_threshold': 16, 'store_cubin': True, 'is_fbcode': True},
    min_elem_per_thread=0
)
@triton.jit
def triton_poi_fused_addmm_gelu_1(in_out_ptr0, in_ptr0, xnumel, XBLOCK : tl.constexpr):
    xnumel = 300
    xoffset = tl.program_id(0) * XBLOCK
    xindex = xoffset + tl.arange(0, XBLOCK)[:]
    xmask = xindex < xnumel
    x0 = xindex
    tmp0 = tl.load(in_out_ptr0 + (x0), xmask)
    tmp1 = tl.load(in_ptr0 + (x0), xmask)
    tmp2 = tmp0 + tmp1
    tmp3 = 0.5
    tmp4 = tmp2 * tmp3
    tmp5 = 0.7071067811865476
    tmp6 = tmp2 * tmp5
    tmp7 = libdevice.erf(tmp6)
    tmp8 = 1.0
    tmp9 = tmp7 + tmp8
    tmp10 = tmp4 * tmp9
    tl.store(in_out_ptr0 + (x0), tmp10, xmask)
''', device_str='cuda')


async_compile.wait(globals())
del async_compile

def call(args):
    arg0_1, arg1_1, arg2_1 = args
    args.clear()
    assert_size_stride(arg0_1, (10, 20), (20, 1))
    assert_size_stride(arg1_1, (20, 30), (30, 1))
    assert_size_stride(arg2_1, (10, 30), (30, 1))

    for kernel in globals().values():
        if isinstance(kernel, torch._inductor.runtime.triton_heuristics.CachingAutotuner):
            kernel.cuda_kernel_saved = False
    with torch.cuda._DeviceGuard(0):
        torch.cuda.set_device(0)
        buf0 = empty_strided_cuda((10, 20), (20, 1), torch.float32)
        # Topologically Sorted Source Nodes: [x], Original ATen: [aten.mul]
        stream0 = get_raw_stream(0)
        triton_poi_fused_mul_0.run(arg0_1, buf0, 200, grid=grid(200), stream=stream0)
        del arg0_1
        buf1 = empty_strided_cuda((10, 30), (30, 1), torch.float32)
        # Topologically Sorted Source Nodes: [x, y], Original ATen: [aten.mul, aten.addmm]
        extern_kernels.mm(buf0, arg1_1, out=buf1)
        del arg1_1
        del buf0
        buf2 = buf1; del buf1  # reuse
        # Topologically Sorted Source Nodes: [y, z], Original ATen: [aten.addmm, aten.gelu]
        triton_poi_fused_addmm_gelu_1.run(buf2, arg2_1, 300, grid=grid(300), stream=stream0)
        del arg2_1

    for kernel in globals().values():
        if isinstance(kernel, torch._inductor.runtime.triton_heuristics.CachingAutotuner):
            if not kernel.cuda_kernel_saved:
                if len(kernel.launchers) == 0:
                    kernel.precompile()
                kernel.save_gpu_kernel(
                    grid=(0, 0, 0),   # use dummy grid
                    stream="stream",  # use dummy stream
                    launcher=kernel.launchers[0],
                )
    return (buf2, )


def benchmark_compiled_module(times=10, repeat=10):
    from torch._dynamo.testing import rand_strided
    from torch._inductor.utils import print_performance
    arg0_1 = rand_strided((10, 20), (20, 1), device='cuda:0', dtype=torch.float32)
    arg1_1 = rand_strided((20, 30), (30, 1), device='cuda:0', dtype=torch.float32)
    arg2_1 = rand_strided((10, 30), (30, 1), device='cuda:0', dtype=torch.float32)
    fn = lambda: call([arg0_1, arg1_1, arg2_1])
    return print_performance(fn, times=times, repeat=repeat)


if __name__ == "__main__":
    from torch._inductor.wrapper_benchmark import compiled_module_main
    compiled_module_main('None', benchmark_compiled_module)
    `
let cpp_code_str = `
#include <torch/csrc/inductor/aoti_runtime/arrayref_tensor.h>
#include <torch/csrc/inductor/aoti_runtime/interface.h>
#include <torch/csrc/inductor/aoti_runtime/model_container.h>
#include <torch/csrc/inductor/aoti_runtime/scalar_to_tensor.h>
#include <torch/csrc/inductor/aoti_runtime/thread_local.h>

#include <iostream>
#include <sstream>
#include <stdexcept>
#include <vector>

#define CONVERT_EXCEPTION_TO_ERROR_CODE(...)                 \
try {                                                      \
    __VA_ARGS__                                              \
} catch (const std::exception& e) {                        \
    std::cerr << "Error: " << e.what() << std::endl;         \
    return AOTI_RUNTIME_FAILURE;                             \
} catch (...) {                                            \
    std::cerr << "Unknown exception occurred." << std::endl; \
    return AOTI_RUNTIME_FAILURE;                             \
}                                                          \
return AOTI_RUNTIME_SUCCESS;

#define AOTI_VECTOR_SIZE_CHECK(actual_size, expected_size, name)  \
do {                                                            \
    AOTI_RUNTIME_CHECK(                                           \
        actual_size == expected_size,                             \
        "expected " + std::string(name) + " vector size to be " + \
            std::to_string(expected_size) + ", but got " +        \
            std::to_string(actual_size));                         \
} while (0)

// AOTInductor uses at::addmm_out, which doesn't supports
// arguments that requires gradient. For this reason, we
// enforce no_grad context for run APIs.
//
// A RAII, thread local (!) guard that enables or disables grad mode upon
// construction, and sets it back to the original value upon destruction.
struct AOTINoGradGuard {
AOTINoGradGuard() : prev_mode(aoti_torch_grad_mode_is_enabled()) {
    aoti_torch_grad_mode_set_enabled(false);
}
~AOTINoGradGuard() {
    aoti_torch_grad_mode_set_enabled(prev_mode);
}
bool prev_mode;
};

extern "C" {

AOTIRuntimeError AOTInductorModelContainerCreate(
    AOTInductorModelContainerHandle* container_handle,
    size_t num_models,
    bool is_cpu,
    const char* cubin_dir) {
    return AOTInductorModelContainerCreateWithDevice(
        container_handle,
        num_models,
        is_cpu ? "cpu" : "cuda",
        cubin_dir);
}

AOTIRuntimeError AOTInductorModelContainerCreateWithDevice(
    AOTInductorModelContainerHandle* container_handle,
    size_t num_models,
    const char* device_str,
    const char* cubin_dir) {
if (num_models == 0) {
    std::cerr << "Error: num_models must be positive, but got 0" << std::endl;
    return AOTI_RUNTIME_FAILURE;
}
CONVERT_EXCEPTION_TO_ERROR_CODE({
    std::optional<std::string> cubin_dir_opt;
    if (cubin_dir != nullptr) {
    cubin_dir_opt.emplace(cubin_dir);
    }
    auto* container = new torch::aot_inductor::AOTInductorModelContainer(
        num_models, std::string(device_str), cubin_dir_opt);
    *container_handle =
        reinterpret_cast<AOTInductorModelContainerHandle>(container);
})
}

AOTIRuntimeError AOTInductorModelContainerDelete(
    AOTInductorModelContainerHandle container_handle) {
CONVERT_EXCEPTION_TO_ERROR_CODE({
    auto* container =
        reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
            container_handle);
    delete container;
});
}

AOTIRuntimeError AOTInductorModelContainerRun(
    AOTInductorModelContainerHandle container_handle,
    AtenTensorHandle* input_handles, // array of input AtenTensorHandle; handles
                                    // are stolen; the array itself is borrowed
    size_t num_inputs,
    AtenTensorHandle*
        output_handles, // array for writing output AtenTensorHandle; handles
                        // will be stolen by the caller; the array itself is
                        // borrowed
    size_t num_outputs,
    AOTInductorStreamHandle stream_handle,
    AOTIProxyExecutorHandle proxy_executor_handle) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
AOTI_VECTOR_SIZE_CHECK(num_inputs, container->num_inputs(), "inputs");
AOTI_VECTOR_SIZE_CHECK(num_outputs, container->num_outputs(), "outputs");

auto stream =
    reinterpret_cast<torch::aot_inductor::DeviceStreamType>(stream_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({
    AOTINoGradGuard guard;
    container->run(
        input_handles, output_handles, stream, proxy_executor_handle);
})
}

AOTIRuntimeError AOTInductorModelContainerGetNumConstants(
    AOTInductorModelContainerHandle container_handle,
    size_t* num_constants) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *num_constants = container->num_constants(); })
}

AOTIRuntimeError AOTInductorModelContainerGetConstantName(
    AOTInductorModelContainerHandle container_handle,
    size_t idx,
    const char** name) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *name = container->constant_name(idx); })
}

AOTIRuntimeError AOTInductorModelContainerGetConstantOriginalFQN(
    AOTInductorModelContainerHandle container_handle,
    size_t idx,
    const char** original_fqn) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *original_fqn = container->constant_original_fqn(idx); })
}

AOTIRuntimeError AOTInductorModelContainerGetConstantFromFolded(
    AOTInductorModelContainerHandle container_handle,
    size_t idx,
    bool* from_folded) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({ *from_folded = container->constant_from_folded(idx); })
}

AOTIRuntimeError AOTInductorModelContainerGetConstantType(
    AOTInductorModelContainerHandle container_handle,
    size_t idx,
    int32_t* type) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({ *type = container->constant_type(idx); })
}

AOTIRuntimeError AOTInductorModelContainerGetConstantDtype(
    AOTInductorModelContainerHandle container_handle,
    size_t idx,
    int32_t* dtype) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *dtype = container->constant_dtype(idx); })
}

AOTIRuntimeError AOTInductorModelContainerUpdateConstantBuffer(
    AOTInductorModelContainerHandle container_handle,
    AOTInductorConstantMapHandle constant_map_handle,
    bool use_inactive,
    bool validate_full_update) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
auto input_map = reinterpret_cast<std::unordered_map<std::string, AtenTensorHandle>*>(constant_map_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({
    container->update_constant_buffer(
        *input_map, use_inactive, validate_full_update);
})
}

AOTIRuntimeError AOTInductorModelContainerUpdateInactiveConstantBuffer(
    AOTInductorModelContainerHandle container_handle,
    AOTInductorConstantMapHandle constant_map_handle) {
return AOTInductorModelContainerUpdateConstantBuffer(container_handle,
        constant_map_handle,
        /*use_inactive*/ true,
        /*validate_full_update*/ true);
}

AOTIRuntimeError AOTInductorModelContainerRunConstantFolding(
    AOTInductorModelContainerHandle container_handle,
    bool use_inactive,
    AOTInductorStreamHandle stream_handle,
    AOTIProxyExecutorHandle proxy_executor_handle) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
auto stream =
    reinterpret_cast<torch::aot_inductor::DeviceStreamType>(stream_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({
    AOTINoGradGuard guard;
    container->run_const_fold(use_inactive, stream, proxy_executor_handle);
})
}

AOTIRuntimeError AOTInductorModelContainerSwapConstantBuffer(
    AOTInductorModelContainerHandle container_handle) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({
    container->swap_constant_buffer();
})
}

AOTIRuntimeError AOTInductorModelContainerGetNumInputs(
    AOTInductorModelContainerHandle container_handle,
    size_t* ret_num_inputs) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *ret_num_inputs = container->num_inputs(); })
}

AOTIRuntimeError AOTInductorModelContainerGetInputName(
    AOTInductorModelContainerHandle container_handle,
    size_t input_idx,
    const char** ret_input_names) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *ret_input_names = container->input_name(input_idx); })
}

AOTIRuntimeError AOTInductorModelContainerGetNumOutputs(
    AOTInductorModelContainerHandle container_handle,
    size_t* ret_num_outputs) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *ret_num_outputs = container->num_outputs(); })
}

AOTIRuntimeError AOTInductorModelContainerGetOutputName(
    AOTInductorModelContainerHandle container_handle,
    size_t output_idx,
    const char** ret_output_names) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE(
    { *ret_output_names = container->output_name(output_idx); })
}

AOTIRuntimeError AOTInductorModelContainerGetCallSpec(
    AOTInductorModelContainerHandle container_handle,
    const char** in_spec,
    const char** out_spec) {
auto* container =
    reinterpret_cast<torch::aot_inductor::AOTInductorModelContainer*>(
        container_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({
    *in_spec = container->get_in_spec();
    *out_spec = container->get_out_spec();
})
}

AOTIRuntimeError AOTInductorModelCreate(
    AOTInductorModelHandle* model_handle,
    AOTInductorConstantMapHandle constant_map_handle){
    CONVERT_EXCEPTION_TO_ERROR_CODE({
    auto constant_map = std::make_shared<torch::aot_inductor::ConstantMap>();
    auto constant_array = std::make_shared<std::vector<torch::aot_inductor::ConstantHandle>>();
    auto input_map = reinterpret_cast<std::unordered_map<std::string, AtenTensorHandle>*>(constant_map_handle);

    auto model = new torch::aot_inductor::AOTInductorModel(
        constant_map,
        constant_array,
        "cpu", // device_str is hardcoded, as AOTInductorModelCreate is only use for CPU models
        ""
    );

    if (input_map) {
        for (auto const& kv : *input_map) {
        constant_map->emplace(kv.first, kv.second);
        }
    } else {
        model->load_constants();
    }

    *model_handle = reinterpret_cast<AOTInductorModelHandle>(model);
    })}

AOTIRuntimeError AOTInductorModelRun(
    AOTInductorModelHandle model_handle,
    AtenTensorHandle* input_handles,
    AtenTensorHandle* output_handles) {
auto model =
    reinterpret_cast<torch::aot_inductor::AOTInductorModel*>(model_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({
    AOTINoGradGuard guard;
    model->run_impl(
        input_handles,
        output_handles,
        (torch::aot_inductor::DeviceStreamType) nullptr,
        nullptr);
})
}

AOTIRuntimeError AOTInductorModelDelete(AOTInductorModelHandle model_handle){
    CONVERT_EXCEPTION_TO_ERROR_CODE({
    auto model = reinterpret_cast<torch::aot_inductor::AOTInductorModel*>(
        model_handle);
    delete model;
    })}

AOTIRuntimeError AOTInductorModelGetNumOutputs(
    AOTInductorModelHandle model_handle,
    size_t* ret_num_outputs) {
CONVERT_EXCEPTION_TO_ERROR_CODE({
    auto model = reinterpret_cast<torch::aot_inductor::AOTInductorModel*>(model_handle);
    *ret_num_outputs = model->num_outputs();
})
}

AOTIRuntimeError AOTInductorModelUpdateConstantsMap(
    AOTInductorModelHandle model_handle,
    AOTInductorConstantMapHandle constant_map_handle) {
auto model =
    reinterpret_cast<torch::aot_inductor::AOTInductorModel*>(model_handle);
CONVERT_EXCEPTION_TO_ERROR_CODE({
    auto constant_map = std::make_shared<torch::aot_inductor::ConstantMap>();
    auto input_map =
        reinterpret_cast<std::unordered_map<std::string, AtenTensorHandle>*>(
            constant_map_handle);

    for (auto const& kv : *input_map) {
    constant_map->emplace(kv.first, kv.second);
    }
    model->update_constants_map(std::move(constant_map));
})
}

} // extern "C"
// NOTE: Like interface.cpp, this file will be copied into AOTInductor
// generated output. This file is intended to keep implementation
// details separate from the implementation of the AOTI public
// interface. Note also that #includes should go into interface.cpp
// for simplicity of maintenance.

namespace torch {
namespace aot_inductor {
template <typename T>
void convert_output_to_handle(
    const ArrayRefTensor<T>& output,
    AtenTensorHandle& handle) {
handle = output.expensiveCopyToTensor();
}

template <typename... Ts, std::size_t... Is>
void convert_outputs_to_handles_helper(
    const std::tuple<ArrayRefTensor<Ts>...>& outputs,
    AtenTensorHandle* output_handles,
    std::index_sequence<Is...>) {
(convert_output_to_handle(std::get<Is>(outputs), output_handles[Is]), ...);
}
template <typename... Ts>
void convert_outputs_to_handles(
    const std::tuple<ArrayRefTensor<Ts>...>& outputs,
    AtenTensorHandle* output_handles) {
convert_outputs_to_handles_helper(
    outputs, output_handles, std::make_index_sequence<sizeof...(Ts)>());
}

template <typename T>
void convert_handle_to_arrayref_tensor(
    AtenTensorHandle handle,
    ArrayRefTensor<T>& input) {
void* data_ptr;
AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_data_ptr(handle, &data_ptr));
int64_t dim;
AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_dim(handle, &dim));
int64_t numel;
AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_numel(handle, &numel));
int64_t* sizes;
AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_sizes(handle, &sizes));
int64_t* strides;
AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_strides(handle, &strides));
int32_t dtype;
AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_dtype(handle, &dtype));
int32_t device_type;
AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_device_type(handle, &device_type));
int32_t device_index;
AOTI_TORCH_ERROR_CODE_CHECK(
    aoti_torch_get_device_index(handle, &device_index));

input = ArrayRefTensor<T>(
    MiniArrayRef<T>(reinterpret_cast<T*>(data_ptr), numel),
    MiniArrayRef<const int64_t>(sizes, dim),
    MiniArrayRef<const int64_t>(strides, dim),
    device_type,
    device_index);
}

template <typename... Ts, std::size_t... Is>
void convert_handles_to_inputs_helper(
    AtenTensorHandle* input_handles,
    std::tuple<ArrayRefTensor<Ts>...>& inputs,
    std::index_sequence<Is...>) {
(convert_handle_to_arrayref_tensor(input_handles[Is], std::get<Is>(inputs)),
...);
}

template <typename... Ts>
void convert_handles_to_inputs(
    AtenTensorHandle* input_handles,
    std::tuple<ArrayRefTensor<Ts>...>& inputs) {
convert_handles_to_inputs_helper(
    input_handles, inputs, std::make_index_sequence<sizeof...(Ts)>());
}

template <typename T>
void assert_numel(const ArrayRefTensor<T>& tensor, uint64_t numel) {
if (tensor.numel() != numel) {
    std::stringstream err;
    err << "incorrect numel for input tensor. expected " << numel << ", got " << tensor.numel();
    throw std::runtime_error(err.str());
}
}
} // namespace aot_inductor
} // namespace torch
#include <torch/csrc/inductor/aoti_torch/generated/c_shim_cuda.h>

#include <torch/csrc/inductor/aoti_runtime/arrayref_tensor.h>
#include <torch/csrc/inductor/aoti_runtime/thread_local.h>
#include <torch/csrc/inductor/aoti_runtime/scalar_to_tensor.h>

#include <torch/csrc/inductor/aoti_runtime/model.h>
typedef at::Half half;
typedef at::BFloat16 bfloat16;
#include <c10/util/generic_math.h>

[[maybe_unused]] static int64_t align(int64_t nbytes) {
return (nbytes + 64 - 1) & -64;
}
#include <filesystem>
#include <torch/csrc/inductor/aoti_runtime/utils_cuda.h>

#define CUDA_DRIVER_CHECK(EXPR)                    \
do {                                               \
    CUresult code = EXPR;                          \
    const char *msg;                               \
    CUresult code_get_error = cuGetErrorString(code, &msg); \
    if (code_get_error != CUDA_SUCCESS) {          \
        throw std::runtime_error(                  \
            std::string("CUDA driver error: ") +   \
            std::string("invalid error code!"));   \
    }                                              \
    if (code != CUDA_SUCCESS) {                    \
        throw std::runtime_error(                  \
            std::string("CUDA driver error: ") +   \
            std::string(msg));                     \
    }                                              \
} while (0);

namespace {

struct Grid {
    Grid(uint32_t x, uint32_t y, uint32_t z)
    : grid_x(x), grid_y(y), grid_z(z) {}
    uint32_t grid_x;
    uint32_t grid_y;
    uint32_t grid_z;

    bool is_non_zero() {
        return grid_x > 0 && grid_y > 0 && grid_z > 0;
    }
};

}  // anonymous namespace

static inline CUfunction loadKernel(
        std::string filePath,
        const std::string &funcName,
        uint32_t sharedMemBytes,
        const std::optional<std::string> &cubinDir = std::nullopt) {
    if (cubinDir) {
        std::filesystem::path p1{*cubinDir};
        std::filesystem::path p2{filePath};
        filePath = (p1 / p2.filename()).string();
    }

    CUmodule mod;
    CUfunction func;
    CUDA_DRIVER_CHECK(cuModuleLoad(&mod, filePath.c_str()));
    CUDA_DRIVER_CHECK(cuModuleGetFunction(&func, mod, funcName.c_str()));
    if (sharedMemBytes > 0) {
        CUDA_DRIVER_CHECK(cuFuncSetAttribute(
            func,
            CU_FUNC_ATTRIBUTE_MAX_DYNAMIC_SHARED_SIZE_BYTES,
            sharedMemBytes
        ))
    }
    return func;
}

static inline void launchKernel(
        CUfunction func,
        uint32_t gridX,
        uint32_t gridY,
        uint32_t gridZ,
        uint32_t numWarps,
        uint32_t sharedMemBytes,
        void* args[],
        cudaStream_t stream) {
    CUDA_DRIVER_CHECK(cuLaunchKernel(
        func, gridX, gridY, gridZ, 32*numWarps, 1, 1, sharedMemBytes, stream, args, nullptr
    ));
}
CACHE_TORCH_DTYPE(float32);
CACHE_TORCH_DEVICE(cuda);
namespace torch {
namespace aot_inductor {

namespace {
class AOTInductorModelKernels : public AOTInductorModelKernelsBase {
public:
    CUfunction triton_poi_fused_addmm_gelu_1{nullptr};
    CUfunction triton_poi_fused_mul_0{nullptr};
};
}  // namespace

AOTInductorModel::AOTInductorModel(std::shared_ptr<ConstantMap> constants_map,
                                std::shared_ptr<std::vector<ConstantHandle>> constants_array,
                                const std::string& device_str,
                                std::optional<std::string> cubin_dir)
    : AOTInductorModelBase(3, 1, 0, device_str, cubin_dir) {
    inputs_info_[0].name = "arg0_1";
    inputs_info_[1].name = "arg1_1";
    inputs_info_[2].name = "arg2_1";
    update_constants_map(std::move(constants_map));
    update_constants_array(std::move(constants_array));
    in_spec_ = "[1, {\"type\": \"builtins.tuple\", \"context\": \"null\", \"children_spec\": [{\"type\": \"builtins.tuple\", \"context\": \"null\", \"children_spec\": [{\"type\": null, \"context\": null, \"children_spec\": []}, {\"type\": null, \"context\": null, \"children_spec\": []}, {\"type\": null, \"context\": null, \"children_spec\": []}]}, {\"type\": \"builtins.dict\", \"context\": \"[]\", \"children_spec\": []}]}]";
    out_spec_ = "[1, {\"type\": null, \"context\": null, \"children_spec\": []}]";
    outputs_info_[0].name = "output0";
    this->kernels_ = std::make_unique<AOTInductorModelKernels>();
}

std::unordered_map<std::string, AtenTensorHandle> AOTInductorModel::const_run_impl(
    DeviceStreamType stream,
    AOTIProxyExecutorHandle proxy_executor,
    bool initialization
) {

    if (!initialization) {
        std::cerr << "[WARNING] Calling constant_folding in model, but compiled with config: "
                << "aot_inductor.use_runtime_constant_folding=False\n";
    }
    return {};
}

void AOTInductorModel::_const_run_impl(
    std::vector<AtenTensorHandle>& output_handles,
    DeviceStreamType stream,
    AOTIProxyExecutorHandle proxy_executor
) {}

void AOTInductorModel::run_impl(
    AtenTensorHandle*
        input_handles, // array of input AtenTensorHandle; handles
                        // are stolen; the array itself is borrowed
    AtenTensorHandle*
        output_handles, // array for writing output AtenTensorHandle; handles
                        // will be stolen by the caller; the array itself is
                        // borrowed
    DeviceStreamType stream,
    AOTIProxyExecutorHandle proxy_executor
) {

    auto inputs = steal_from_raw_handles_to_raii_handles(input_handles, 3);
    auto arg0_1 = std::move(inputs[0]);
    auto arg1_1 = std::move(inputs[1]);
    auto arg2_1 = std::move(inputs[2]);
    inputs.clear();
    auto& kernels = static_cast<AOTInductorModelKernels&>(*this->kernels_.get());

    AOTICudaStreamGuard stream_guard(stream, this->device_idx_);
    static constexpr int64_t int_array_0[] = {10L, 20L};
    static constexpr int64_t int_array_1[] = {20L, 1L};
    AtenTensorHandle buf0_handle;
    AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_empty_strided(2, int_array_0, int_array_1, cached_torch_dtype_float32, cached_torch_device_type_cuda, this->device_idx_, &buf0_handle));
    RAIIAtenTensorHandle buf0(buf0_handle);
    // Topologically Sorted Source Nodes: [x], Original ATen: [aten.mul]
    if (kernels.triton_poi_fused_mul_0 == nullptr) {
        kernels.triton_poi_fused_mul_0 = loadKernel("/tmp/torchinductor_guorachel/tmpm7gasxh8/cif2yuqlykozxauuf2szjp75dvsdhs5ucg4qilo2p4ctg7e5gx5k/c7xh5xipfzn5fufk57nvmiagnbavubaudsxuxwq3qdvpnrdkctxa.cubin", "triton_poi_fused_mul_0", 0, this->cubin_dir_);
    }
    CUdeviceptr var_0;
    AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_data_ptr(arg0_1, reinterpret_cast<void**>(&var_0)));
    CUdeviceptr var_1;
    AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_data_ptr(buf0, reinterpret_cast<void**>(&var_1)));
    int var_2 = 200L;
    void* kernel_args_var_0[] = {&var_0, &var_1, &var_2};
    Grid triton_poi_fused_mul_0_grid_0 = Grid(1L, 1L, 1L);
    if (triton_poi_fused_mul_0_grid_0.is_non_zero()) {
        launchKernel(kernels.triton_poi_fused_mul_0, triton_poi_fused_mul_0_grid_0.grid_x, triton_poi_fused_mul_0_grid_0.grid_y, triton_poi_fused_mul_0_grid_0.grid_z, 4, 0, kernel_args_var_0, stream);
    }
    arg0_1.reset();
    static constexpr int64_t int_array_2[] = {10L, 30L};
    static constexpr int64_t int_array_3[] = {30L, 1L};
    AtenTensorHandle buf1_handle;
    AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_empty_strided(2, int_array_2, int_array_3, cached_torch_dtype_float32, cached_torch_device_type_cuda, this->device_idx_, &buf1_handle));
    RAIIAtenTensorHandle buf1(buf1_handle);
    // Topologically Sorted Source Nodes: [x, y], Original ATen: [aten.mul, aten.addmm]
    AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_cuda_mm_out(convert_arrayref_tensor_to_tensor(buf1), convert_arrayref_tensor_to_tensor(buf0), convert_arrayref_tensor_to_tensor(arg1_1)));
    arg1_1.reset();
    buf0.reset();
    auto buf2 = std::move(buf1);  // reuse
    // Topologically Sorted Source Nodes: [y, z], Original ATen: [aten.addmm, aten.gelu]
    if (kernels.triton_poi_fused_addmm_gelu_1 == nullptr) {
        kernels.triton_poi_fused_addmm_gelu_1 = loadKernel("/tmp/torchinductor_guorachel/tmpm7gasxh8/cif2yuqlykozxauuf2szjp75dvsdhs5ucg4qilo2p4ctg7e5gx5k/cvttykk7r2k3y7xvwcfcxtcy2rn76pta367kz4exjtwuzd6skjsj.cubin", "triton_poi_fused_addmm_gelu_1", 0, this->cubin_dir_);
    }
    CUdeviceptr var_3;
    AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_data_ptr(buf2, reinterpret_cast<void**>(&var_3)));
    CUdeviceptr var_4;
    AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_get_data_ptr(arg2_1, reinterpret_cast<void**>(&var_4)));
    int var_5 = 300L;
    void* kernel_args_var_1[] = {&var_3, &var_4, &var_5};
    Grid triton_poi_fused_addmm_gelu_1_grid_1 = Grid(2L, 1L, 1L);
    if (triton_poi_fused_addmm_gelu_1_grid_1.is_non_zero()) {
        launchKernel(kernels.triton_poi_fused_addmm_gelu_1, triton_poi_fused_addmm_gelu_1_grid_1.grid_x, triton_poi_fused_addmm_gelu_1_grid_1.grid_y, triton_poi_fused_addmm_gelu_1_grid_1.grid_z, 4, 0, kernel_args_var_1, stream);
    }
    arg2_1.reset();
    if constexpr (std::is_same_v<std::decay_t<decltype(buf2)>,RAIIAtenTensorHandle> || std::is_same_v<std::decay_t<decltype(buf2)>,AtenTensorHandle> || std::is_same_v<std::decay_t<decltype(buf2)>,ConstantHandle>) {
        output_handles[0] = buf2.release();
    } else {
        thread_local ThreadLocalCachedOutputTensor<std::decay_t<decltype(buf2)>> cached_output_0(buf2);
        cached_output_0.copy_data_from(buf2);
        AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_new_uninitialized_tensor(&output_handles[0]));
        AOTI_TORCH_ERROR_CODE_CHECK(aoti_torch_assign_tensors(cached_output_0.tensor(), output_handles[0]));
    }
} // AOTInductorModel::run_impl
} // namespace aot_inductor
} // namespace torch
`

function getGraph() {
    return fx_str.split('\n');
}

function getCode() {
    return code_str.split('\n');
}

function escapeSpecialChars(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function getCppCode() {
    const escaped_cpp_code_str = escapeSpecialChars(cpp_code_str);
    return escaped_cpp_code_str.split('\n')
}
