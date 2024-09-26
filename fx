class GraphModule(torch.nn.Module):
    def forward(self, primals_1: "bf16[640, 4481, 192][860352, 192, 1]cuda:0", primals_2: "bf16[769, 4481][4481, 1]cuda:0", primals_3: "bf16[769, 1][1, 1]cuda:0", primals_4: "bf16[1024][1]cuda:0", primals_5: "bf16[1024, 49152][49152, 1]cuda:0", primals_6: "bf16[1024][1]cuda:0", primals_7: "bf16[1024][1]cuda:0", primals_8: "bf16[1024][1]cuda:0", primals_9: "bf16[1024, 1024][1024, 1]cuda:0", primals_10: "bf16[1024][1]cuda:0", primals_11: "bf16[1024][1]cuda:0", primals_12: "bf16[143392][1]cuda:0", primals_13: "bf16[143392, 1024][1024, 1]cuda:0", primals_14: "bf16[143392][1]cuda:0", primals_15: "bf16[143392][1]cuda:0", primals_16: "bf16[4800][1]cuda:0", primals_17: "bf16[4800, 143392][143392, 1]cuda:0", primals_18: "bf16[4800][1]cuda:0", primals_19: "bf16[4800][1]cuda:0", primals_20: "bf16[640, 1536][1536, 1]cuda:0", primals_21: "bf16[640, 2048][2048, 1]cuda:0", primals_22: "bf16[8384][1]cuda:0", primals_23: "bf16[8384][1]cuda:0", primals_24: "bf16[1024][1]cuda:0", primals_25: "bf16[1024, 8384][8384, 1]cuda:0", primals_26: "bf16[8384][1]cuda:0", primals_27: "bf16[8384, 1024][1024, 1]cuda:0", primals_28: "bf16[1024][1]cuda:0", primals_29: "bf16[1024, 8384][8384, 1]cuda:0", primals_30: "bf16[8384][1]cuda:0", primals_31: "bf16[8384, 1024][1024, 1]cuda:0", primals_32: "bf16[1024][1]cuda:0", primals_33: "bf16[1024, 8384][8384, 1]cuda:0", primals_34: "bf16[8384][1]cuda:0", primals_35: "bf16[8384, 1024][1024, 1]cuda:0", primals_36: "bf16[1024][1]cuda:0", primals_37: "bf16[1024, 8384][8384, 1]cuda:0", primals_38: "bf16[8384][1]cuda:0", primals_39: "bf16[8384, 1024][1024, 1]cuda:0", primals_40: "bf16[1024][1]cuda:0", primals_41: "bf16[1024, 8384][8384, 1]cuda:0", primals_42: "bf16[8384][1]cuda:0", primals_43: "bf16[8384, 1024][1024, 1]cuda:0", primals_44: "bf16[1024][1]cuda:0", primals_45: "bf16[1024, 8384][8384, 1]cuda:0", primals_46: "bf16[8384][1]cuda:0", primals_47: "bf16[8384, 1024][1024, 1]cuda:0", primals_48: "bf16[1024][1]cuda:0", primals_49: "bf16[1024, 8384][8384, 1]cuda:0", primals_50: "bf16[8384][1]cuda:0", primals_51: "bf16[8384, 1024][1024, 1]cuda:0", primals_52: "bf16[1024][1]cuda:0", primals_53: "bf16[1024, 8384][8384, 1]cuda:0", primals_54: "bf16[8384][1]cuda:0", primals_55: "bf16[8384, 1024][1024, 1]cuda:0", primals_56: "bf16[1024][1]cuda:0", primals_57: "bf16[1024, 8384][8384, 1]cuda:0", primals_58: "bf16[8384][1]cuda:0", primals_59: "bf16[8384, 1024][1024, 1]cuda:0", primals_60: "bf16[1024][1]cuda:0", primals_61: "bf16[1024, 8384][8384, 1]cuda:0", primals_62: "bf16[8384][1]cuda:0", primals_63: "bf16[8384, 1024][1024, 1]cuda:0", primals_64: "bf16[1024][1]cuda:0", primals_65: "bf16[1024, 8384][8384, 1]cuda:0", primals_66: "bf16[8384][1]cuda:0", primals_67: "bf16[8384, 1024][1024, 1]cuda:0", primals_68: "bf16[1024][1]cuda:0", primals_69: "bf16[1024, 8384][8384, 1]cuda:0", primals_70: "bf16[8384][1]cuda:0", primals_71: "bf16[8384, 1024][1024, 1]cuda:0", primals_72: "bf16[1024][1]cuda:0", primals_73: "bf16[1024, 8384][8384, 1]cuda:0", primals_74: "bf16[8384][1]cuda:0", primals_75: "bf16[8384, 1024][1024, 1]cuda:0", primals_76: "bf16[1024][1]cuda:0", primals_77: "bf16[1024, 8384][8384, 1]cuda:0", primals_78: "bf16[8384][1]cuda:0", primals_79: "bf16[8384, 1024][1024, 1]cuda:0", primals_80: "bf16[1024][1]cuda:0", primals_81: "bf16[1024, 8384][8384, 1]cuda:0", primals_82: "bf16[8384][1]cuda:0", primals_83: "bf16[8384, 1024][1024, 1]cuda:0", primals_84: "bf16[1024][1]cuda:0", primals_85: "bf16[1024, 8384][8384, 1]cuda:0", primals_86: "bf16[8384][1]cuda:0", primals_87: "bf16[8384, 1024][1024, 1]cuda:0", primals_88: "bf16[8384][1]cuda:0", primals_89: "bf16[8384][1]cuda:0", primals_90: "bf16[49152][1]cuda:0", primals_91: "bf16[49152, 8384][8384, 1]cuda:0", primals_92: "bf16[640, 192][192, 1]cuda:0", primals_93: "bf16[192][1]cuda:0", primals_94: "bf16[192][1]cuda:0", primals_95: "bf16[384, 385][385, 1]cuda:0", primals_96: "bf16[384, 1][1, 1]cuda:0", primals_97: "bf16[1024][1]cuda:0", primals_98: "bf16[1024, 49152][49152, 1]cuda:0", primals_99: "bf16[1024][1]cuda:0", primals_100: "bf16[1024][1]cuda:0", primals_101: "bf16[1024][1]cuda:0", primals_102: "bf16[1024, 1024][1024, 1]cuda:0", primals_103: "bf16[1024][1]cuda:0", primals_104: "bf16[1024][1]cuda:0", primals_105: "bf16[12320][1]cuda:0", primals_106: "bf16[12320, 1024][1024, 1]cuda:0", primals_107: "bf16[12320][1]cuda:0", primals_108: "bf16[12320][1]cuda:0", primals_109: "bf16[4800][1]cuda:0", primals_110: "bf16[4800, 12320][12320, 1]cuda:0", primals_111: "bf16[4800][1]cuda:0", primals_112: "bf16[4800][1]cuda:0", primals_113: "bf16[8384][1]cuda:0", primals_114: "bf16[8384][1]cuda:0", primals_115: "bf16[1024][1]cuda:0", primals_116: "bf16[1024, 8384][8384, 1]cuda:0", primals_117: "bf16[8384][1]cuda:0", primals_118: "bf16[8384, 1024][1024, 1]cuda:0", primals_119: "bf16[1024][1]cuda:0", primals_120: "bf16[1024, 8384][8384, 1]cuda:0", primals_121: "bf16[8384][1]cuda:0", primals_122: "bf16[8384, 1024][1024, 1]cuda:0", primals_123: "bf16[1024][1]cuda:0", primals_124: "bf16[1024, 8384][8384, 1]cuda:0", primals_125: "bf16[8384][1]cuda:0", primals_126: "bf16[8384, 1024][1024, 1]cuda:0", primals_127: "bf16[1024][1]cuda:0", primals_128: "bf16[1024, 8384][8384, 1]cuda:0", primals_129: "bf16[8384][1]cuda:0", primals_130: "bf16[8384, 1024][1024, 1]cuda:0", primals_131: "bf16[1024][1]cuda:0", primals_132: "bf16[1024, 8384][8384, 1]cuda:0", primals_133: "bf16[8384][1]cuda:0", primals_134: "bf16[8384, 1024][1024, 1]cuda:0", primals_135: "bf16[1024][1]cuda:0", primals_136: "bf16[1024, 8384][8384, 1]cuda:0", primals_137: "bf16[8384][1]cuda:0", primals_138: "bf16[8384, 1024][1024, 1]cuda:0", primals_139: "bf16[1024][1]cuda:0", primals_140: "bf16[1024, 8384][8384, 1]cuda:0", primals_141: "bf16[8384][1]cuda:0", primals_142: "bf16[8384, 1024][1024, 1]cuda:0", primals_143: "bf16[1024][1]cuda:0", primals_144: "bf16[1024, 8384][8384, 1]cuda:0", primals_145: "bf16[8384][1]cuda:0", primals_146: "bf16[8384, 1024][1024, 1]cuda:0", primals_147: "bf16[1024][1]cuda:0", primals_148: "bf16[1024, 8384][8384, 1]cuda:0", primals_149: "bf16[8384][1]cuda:0", primals_150: "bf16[8384, 1024][1024, 1]cuda:0", primals_151: "bf16[1024][1]cuda:0", primals_152: "bf16[1024, 8384][8384, 1]cuda:0", primals_153: "bf16[8384][1]cuda:0", primals_154: "bf16[8384, 1024][1024, 1]cuda:0", primals_155: "bf16[1024][1]cuda:0", primals_156: "bf16[1024, 8384][8384, 1]cuda:0", primals_157: "bf16[8384][1]cuda:0", primals_158: "bf16[8384, 1024][1024, 1]cuda:0", primals_159: "bf16[1024][1]cuda:0", primals_160: "bf16[1024, 8384][8384, 1]cuda:0", primals_161: "bf16[8384][1]cuda:0", primals_162: "bf16[8384, 1024][1024, 1]cuda:0", primals_163: "bf16[1024][1]cuda:0", primals_164: "bf16[1024, 8384][8384, 1]cuda:0", primals_165: "bf16[8384][1]cuda:0", primals_166: "bf16[8384, 1024][1024, 1]cuda:0", primals_167: "bf16[1024][1]cuda:0", primals_168: "bf16[1024, 8384][8384, 1]cuda:0", primals_169: "bf16[8384][1]cuda:0", primals_170: "bf16[8384, 1024][1024, 1]cuda:0", primals_171: "bf16[1024][1]cuda:0", primals_172: "bf16[1024, 8384][8384, 1]cuda:0", primals_173: "bf16[8384][1]cuda:0", primals_174: "bf16[8384, 1024][1024, 1]cuda:0", primals_175: "bf16[1024][1]cuda:0", primals_176: "bf16[1024, 8384][8384, 1]cuda:0", primals_177: "bf16[8384][1]cuda:0", primals_178: "bf16[8384, 1024][1024, 1]cuda:0", primals_179: "bf16[8384][1]cuda:0", primals_180: "bf16[8384][1]cuda:0", primals_181: "bf16[49152][1]cuda:0", primals_182: "bf16[49152, 8384][8384, 1]cuda:0", primals_183: "bf16[192][1]cuda:0", primals_184: "bf16[192][1]cuda:0", primals_185: "bf16[384, 385][385, 1]cuda:0", primals_186: "bf16[384, 1][1, 1]cuda:0", primals_187: "bf16[1024][1]cuda:0", primals_188: "bf16[1024, 49152][49152, 1]cuda:0", primals_189: "bf16[1024][1]cuda:0", primals_190: "bf16[1024][1]cuda:0", primals_191: "bf16[1024][1]cuda:0", primals_192: "bf16[1024, 1024][1024, 1]cuda:0", primals_193: "bf16[1024][1]cuda:0", primals_194: "bf16[1024][1]cuda:0", primals_195: "bf16[12320][1]cuda:0", primals_196: "bf16[12320, 1024][1024, 1]cuda:0", primals_197: "bf16[12320][1]cuda:0", primals_198: "bf16[12320][1]cuda:0", primals_199: "bf16[4800][1]cuda:0", primals_200: "bf16[4800, 12320][12320, 1]cuda:0", primals_201: "bf16[4800][1]cuda:0", primals_202: "bf16[4800][1]cuda:0", primals_203: "bf16[8384][1]cuda:0", primals_204: "bf16[8384][1]cuda:0", primals_205: "bf16[1024][1]cuda:0", primals_206: "bf16[1024, 8384][8384, 1]cuda:0", primals_207: "bf16[8384][1]cuda:0", primals_208: "bf16[8384, 1024][1024, 1]cuda:0", primals_209: "bf16[1024][1]cuda:0", primals_210: "bf16[1024, 8384][8384, 1]cuda:0", primals_211: "bf16[8384][1]cuda:0", primals_212: "bf16[8384, 1024][1024, 1]cuda:0", primals_213: "bf16[1024][1]cuda:0", primals_214: "bf16[1024, 8384][8384, 1]cuda:0", primals_215: "bf16[8384][1]cuda:0", primals_216: "bf16[8384, 1024][1024, 1]cuda:0", primals_217: "bf16[1024][1]cuda:0", primals_218: "bf16[1024, 8384][8384, 1]cuda:0", primals_219: "bf16[8384][1]cuda:0", primals_220: "bf16[8384, 1024][1024, 1]cuda:0", primals_221: "bf16[1024][1]cuda:0", primals_222: "bf16[1024, 8384][8384, 1]cuda:0", primals_223: "bf16[8384][1]cuda:0", primals_224: "bf16[8384, 1024][1024, 1]cuda:0", primals_225: "bf16[1024][1]cuda:0", primals_226: "bf16[1024, 8384][8384, 1]cuda:0", primals_227: "bf16[8384][1]cuda:0", primals_228: "bf16[8384, 1024][1024, 1]cuda:0", primals_229: "bf16[1024][1]cuda:0", primals_230: "bf16[1024, 8384][8384, 1]cuda:0", primals_231: "bf16[8384][1]cuda:0", primals_232: "bf16[8384, 1024][1024, 1]cuda:0", primals_233: "bf16[1024][1]cuda:0", primals_234: "bf16[1024, 8384][8384, 1]cuda:0", primals_235: "bf16[8384][1]cuda:0", primals_236: "bf16[8384, 1024][1024, 1]cuda:0", primals_237: "bf16[1024][1]cuda:0", primals_238: "bf16[1024, 8384][8384, 1]cuda:0", primals_239: "bf16[8384][1]cuda:0", primals_240: "bf16[8384, 1024][1024, 1]cuda:0", primals_241: "bf16[1024][1]cuda:0", primals_242: "bf16[1024, 8384][8384, 1]cuda:0", primals_243: "bf16[8384][1]cuda:0", primals_244: "bf16[8384, 1024][1024, 1]cuda:0", primals_245: "bf16[1024][1]cuda:0", primals_246: "bf16[1024, 8384][8384, 1]cuda:0", primals_247: "bf16[8384][1]cuda:0", primals_248: "bf16[8384, 1024][1024, 1]cuda:0", primals_249: "bf16[1024][1]cuda:0", primals_250: "bf16[1024, 8384][8384, 1]cuda:0", primals_251: "bf16[8384][1]cuda:0", primals_252: "bf16[8384, 1024][1024, 1]cuda:0", primals_253: "bf16[1024][1]cuda:0", primals_254: "bf16[1024, 8384][8384, 1]cuda:0", primals_255: "bf16[8384][1]cuda:0", primals_256: "bf16[8384, 1024][1024, 1]cuda:0", primals_257: "bf16[1024][1]cuda:0", primals_258: "bf16[1024, 8384][8384, 1]cuda:0", primals_259: "bf16[8384][1]cuda:0", primals_260: "bf16[8384, 1024][1024, 1]cuda:0", primals_261: "bf16[1024][1]cuda:0", primals_262: "bf16[1024, 8384][8384, 1]cuda:0", primals_263: "bf16[8384][1]cuda:0", primals_264: "bf16[8384, 1024][1024, 1]cuda:0", primals_265: "bf16[1024][1]cuda:0", primals_266: "bf16[1024, 8384][8384, 1]cuda:0", primals_267: "bf16[8384][1]cuda:0", primals_268: "bf16[8384, 1024][1024, 1]cuda:0", primals_269: "bf16[8384][1]cuda:0", primals_270: "bf16[8384][1]cuda:0", primals_271: "bf16[49152][1]cuda:0", primals_272: "bf16[49152, 8384][8384, 1]cuda:0", primals_273: "bf16[192][1]cuda:0", primals_274: "bf16[192][1]cuda:0"):
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/simple_lce.py:121 in forward, code: out = torch.matmul(self._compression_w, embeddings) + self._compression_b
        permute: "bf16[640, 192, 4481][860352, 1, 192]cuda:0" = torch.ops.aten.permute.default(primals_1, [0, 2, 1])
        permute_1: "bf16[4481, 769][1, 4481]cuda:0" = torch.ops.aten.permute.default(primals_2, [1, 0]);  primals_2 = None
        clone: "bf16[640, 192, 4481][860352, 4481, 1]cuda:0" = torch.ops.aten.clone.default(permute, memory_format = torch.contiguous_format)
        view: "bf16[122880, 4481][4481, 1]cuda:0" = torch.ops.aten.view.default(clone, [122880, 4481]);  clone = None
        
        # No stacktrace found for following nodes
        full_default_13: "bf16[122880, 7][7, 1]cuda:0" = torch.ops.aten.full.default([122880, 7], 0, dtype = torch.bfloat16, layout = torch.strided, device = device(type='cuda', index=0), pin_memory = False)
        cat_default_13: "bf16[122880, 4488][4488, 1]cuda:0" = torch.ops.aten.cat.default([view, full_default_13], 1);  view = None
        constant_pad_nd_default_1: "bf16[4488, 776][776, 1]cuda:0" = torch.ops.aten.constant_pad_nd.default(permute_1, [0, 7, 0, 7])
        mm_default_8: "bf16[122880, 776][776, 1]cuda:0" = torch.ops.aten.mm.default(cat_default_13, constant_pad_nd_default_1);  cat_default_13 = constant_pad_nd_default_1 = None
        slice_tensor_9: "bf16[122880, 769][776, 1]cuda:0" = torch.ops.aten.slice.Tensor(mm_default_8, 1, 0, -7);  mm_default_8 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/simple_lce.py:121 in forward, code: out = torch.matmul(self._compression_w, embeddings) + self._compression_b
        view_1: "bf16[640, 192, 769][147648, 769, 1]cuda:0" = torch.ops.aten.view.default(slice_tensor_9, [640, 192, 769]);  slice_tensor_9 = None
        permute_2: "bf16[640, 769, 192][147648, 1, 769]cuda:0" = torch.ops.aten.permute.default(view_1, [0, 2, 1]);  view_1 = None
        clone_1: "bf16[640, 769, 192][147648, 192, 1]cuda:0" = torch.ops.aten.clone.default(permute_2, memory_format = torch.contiguous_format);  permute_2 = None
        add: "bf16[640, 769, 192][147648, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(clone_1, primals_3);  clone_1 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:319 in forward, code: lce_fused_split = torch.split(
        split_with_sizes = torch.ops.aten.split_with_sizes.default(add, [128, 256, 385], 1);  add = None
        getitem: "bf16[640, 128, 192][147648, 192, 1]cuda:0" = split_with_sizes[0]
        getitem_1: "bf16[640, 256, 192][147648, 192, 1]cuda:0" = split_with_sizes[1]
        getitem_2: "bf16[640, 385, 192][147648, 192, 1]cuda:0" = split_with_sizes[2];  split_with_sizes = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:331 in forward, code: lce_output = lce_output.reshape(
        view_2: "bf16[640, 24576][147648, 1]cuda:0" = torch.ops.aten.view.default(getitem, [640, 24576]);  getitem = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:246 in forward, code: compressed_emb_flatten = torch.reshape(
        view_3: "bf16[640, 49152][147648, 1]cuda:0" = torch.ops.aten.view.default(getitem_1, [640, 49152]);  getitem_1 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_4: "bf16[49152, 1024][1, 49152]cuda:0" = torch.ops.aten.permute.default(primals_5, [1, 0]);  primals_5 = None
        addmm: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_4, view_3, permute_4);  primals_4 = view_3 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_5: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm, torch.float32)
        var_mean = torch.ops.aten.var_mean.correction(convert_element_type_5, [1], correction = 0, keepdim = True);  convert_element_type_5 = None
        getitem_3: "f32[640, 1][1, 1]cuda:0" = var_mean[0]
        getitem_4: "f32[640, 1][1, 1]cuda:0" = var_mean[1];  var_mean = None
        add_1: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_3, 1e-05);  getitem_3 = None
        rsqrt: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_1);  add_1 = None
        sub: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm, getitem_4);  getitem_4 = None
        mul: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub, rsqrt);  sub = rsqrt = None
        mul_1: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul, primals_7);  mul = None
        add_2: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_1, primals_6);  mul_1 = None
        convert_element_type_6: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_2, torch.bfloat16);  add_2 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_6);  convert_element_type_6 = None
        mul_2: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm, sigmoid);  sigmoid = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_5: "bf16[1024, 1024][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_9, [1, 0]);  primals_9 = None
        addmm_1: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_8, mul_2, permute_5);  mul_2 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_10: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_1, torch.float32)
        var_mean_1 = torch.ops.aten.var_mean.correction(convert_element_type_10, [1], correction = 0, keepdim = True);  convert_element_type_10 = None
        getitem_5: "f32[640, 1][1, 1]cuda:0" = var_mean_1[0]
        getitem_6: "f32[640, 1][1, 1]cuda:0" = var_mean_1[1];  var_mean_1 = None
        add_3: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_5, 1e-05);  getitem_5 = None
        rsqrt_1: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_3);  add_3 = None
        sub_1: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_1, getitem_6);  getitem_6 = None
        mul_3: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_1, rsqrt_1);  sub_1 = rsqrt_1 = None
        mul_4: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_3, primals_11);  mul_3 = None
        add_4: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_4, primals_10);  mul_4 = None
        convert_element_type_11: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_4, torch.bfloat16);  add_4 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_1: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_11);  convert_element_type_11 = None
        mul_5: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_1, sigmoid_1);  addmm_1 = sigmoid_1 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_6: "bf16[1024, 143392][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_13, [1, 0]);  primals_13 = None
        addmm_2: "bf16[640, 143392][143392, 1]cuda:0" = torch.ops.aten.addmm.default(primals_12, mul_5, permute_6);  mul_5 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:257 in forward, code: tensor_after_match_reshape = torch.reshape(
        view_4: "bf16[640, 4481, 32][143392, 32, 1]cuda:0" = torch.ops.aten.view.default(addmm_2, [-1, 4481, 32]);  addmm_2 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:260 in forward, code: weight_arch_output = torch.bmm(
        bmm: "bf16[640, 192, 32][6144, 32, 1]cuda:0" = torch.ops.aten.bmm.default(permute, view_4);  permute = view_4 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:288 in forward, code: dot_product = torch.bmm(
        bmm_1: "bf16[640, 4481, 32][143392, 32, 1]cuda:0" = torch.ops.aten.bmm.default(primals_1, bmm);  bmm = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:291 in forward, code: dot_product_flatten = torch.flatten(
        view_5: "bf16[640, 143392][143392, 1]cuda:0" = torch.ops.aten.view.default(bmm_1, [640, 143392]);  bmm_1 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_19: "f32[640, 143392][143392, 1]cuda:0" = torch.ops.prims.convert_element_type.default(view_5, torch.float32)
        var_mean_2 = torch.ops.aten.var_mean.correction(convert_element_type_19, [1], correction = 0, keepdim = True);  convert_element_type_19 = None
        getitem_7: "f32[640, 1][1, 1]cuda:0" = var_mean_2[0]
        getitem_8: "f32[640, 1][1, 1]cuda:0" = var_mean_2[1];  var_mean_2 = None
        add_5: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_7, 1e-05);  getitem_7 = None
        rsqrt_2: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_5);  add_5 = None
        sub_2: "f32[640, 143392][143392, 1]cuda:0" = torch.ops.aten.sub.Tensor(view_5, getitem_8);  view_5 = getitem_8 = None
        mul_6: "f32[640, 143392][143392, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_2, rsqrt_2);  sub_2 = rsqrt_2 = None
        mul_7: "f32[640, 143392][143392, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_6, primals_15);  mul_6 = None
        add_6: "f32[640, 143392][143392, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_7, primals_14);  mul_7 = None
        convert_element_type_20: "bf16[640, 143392][143392, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_6, torch.bfloat16);  add_6 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_7: "bf16[143392, 4800][1, 143392]cuda:0" = torch.ops.aten.permute.default(primals_17, [1, 0]);  primals_17 = None
        addmm_3: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.addmm.default(primals_16, convert_element_type_20, permute_7);  primals_16 = convert_element_type_20 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_24: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_3, torch.float32)
        var_mean_3 = torch.ops.aten.var_mean.correction(convert_element_type_24, [1], correction = 0, keepdim = True);  convert_element_type_24 = None
        getitem_9: "f32[640, 1][1, 1]cuda:0" = var_mean_3[0]
        getitem_10: "f32[640, 1][1, 1]cuda:0" = var_mean_3[1];  var_mean_3 = None
        add_7: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_9, 1e-05);  getitem_9 = None
        rsqrt_3: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_7);  add_7 = None
        sub_3: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_3, getitem_10);  getitem_10 = None
        mul_8: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_3, rsqrt_3);  sub_3 = rsqrt_3 = None
        mul_9: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_8, primals_19);  mul_8 = None
        add_8: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_9, primals_18);  mul_9 = None
        convert_element_type_25: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_8, torch.bfloat16);  add_8 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_2: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_25);  convert_element_type_25 = None
        mul_10: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_3, sigmoid_2);  sigmoid_2 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:372 in forward, code: temp_overarch_input = torch.cat(
        cat: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.cat.default([primals_20, primals_21, mul_10], 1);  mul_10 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_26: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(cat, torch.float32)
        var_mean_4 = torch.ops.aten.var_mean.correction(convert_element_type_26, [1], correction = 0, keepdim = True);  convert_element_type_26 = None
        getitem_11: "f32[640, 1][1, 1]cuda:0" = var_mean_4[0]
        getitem_12: "f32[640, 1][1, 1]cuda:0" = var_mean_4[1];  var_mean_4 = None
        add_9: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_11, 1e-05);  getitem_11 = None
        rsqrt_4: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_9);  add_9 = None
        sub_4: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.sub.Tensor(cat, getitem_12);  cat = getitem_12 = None
        mul_11: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_4, rsqrt_4);  sub_4 = rsqrt_4 = None
        mul_12: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_11, primals_23);  mul_11 = None
        add_10: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_12, primals_22);  mul_12 = None
        convert_element_type_27: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_10, torch.bfloat16);  add_10 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_8: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_25, [1, 0]);  primals_25 = None
        addmm_4: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_24, convert_element_type_27, permute_8)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_9: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_27, [1, 0]);  primals_27 = None
        addmm_5: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_26, addmm_4, permute_9);  addmm_4 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_34: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_27, torch.float32);  convert_element_type_27 = None
        convert_element_type_36: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_5, torch.float32);  addmm_5 = None
        mul_13: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(convert_element_type_34, 1.0)
        mul_14: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_36);  convert_element_type_36 = None
        add_11: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_34, mul_14);  convert_element_type_34 = mul_14 = None
        convert_element_type_37: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_11, torch.bfloat16);  add_11 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_10: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_29, [1, 0]);  primals_29 = None
        addmm_6: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_28, convert_element_type_37, permute_10)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_11: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_31, [1, 0]);  primals_31 = None
        addmm_7: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_30, addmm_6, permute_11);  addmm_6 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_44: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_37, torch.float32);  convert_element_type_37 = None
        convert_element_type_46: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_7, torch.float32);  addmm_7 = None
        mul_16: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_46);  convert_element_type_46 = None
        add_12: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_44, mul_16);  convert_element_type_44 = mul_16 = None
        convert_element_type_47: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_12, torch.bfloat16);  add_12 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_12: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_33, [1, 0]);  primals_33 = None
        addmm_8: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_32, convert_element_type_47, permute_12);  primals_32 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_13: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_35, [1, 0]);  primals_35 = None
        addmm_9: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_34, addmm_8, permute_13)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_54: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_47, torch.float32);  convert_element_type_47 = None
        convert_element_type_56: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_9, torch.float32);  addmm_9 = None
        mul_18: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_56);  convert_element_type_56 = None
        add_13: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_54, mul_18);  convert_element_type_54 = mul_18 = None
        convert_element_type_57: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_13, torch.bfloat16);  add_13 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_14: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_37, [1, 0]);  primals_37 = None
        addmm_10: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_36, convert_element_type_57, permute_14);  primals_36 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_15: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_39, [1, 0]);  primals_39 = None
        addmm_11: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_38, addmm_10, permute_15)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_64: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_57, torch.float32);  convert_element_type_57 = None
        convert_element_type_66: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_11, torch.float32);  addmm_11 = None
        mul_20: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_66);  convert_element_type_66 = None
        add_14: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_64, mul_20);  convert_element_type_64 = mul_20 = None
        convert_element_type_67: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_14, torch.bfloat16);  add_14 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_16: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_41, [1, 0]);  primals_41 = None
        addmm_12: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_40, convert_element_type_67, permute_16)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_17: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_43, [1, 0]);  primals_43 = None
        addmm_13: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_42, addmm_12, permute_17);  addmm_12 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_74: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_67, torch.float32);  convert_element_type_67 = None
        convert_element_type_76: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_13, torch.float32);  addmm_13 = None
        mul_22: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_76);  convert_element_type_76 = None
        add_15: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_74, mul_22);  convert_element_type_74 = mul_22 = None
        convert_element_type_77: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_15, torch.bfloat16);  add_15 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_18: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_45, [1, 0]);  primals_45 = None
        addmm_14: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_44, convert_element_type_77, permute_18)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_19: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_47, [1, 0]);  primals_47 = None
        addmm_15: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_46, addmm_14, permute_19);  addmm_14 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_84: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_77, torch.float32);  convert_element_type_77 = None
        convert_element_type_86: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_15, torch.float32);  addmm_15 = None
        mul_24: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_86);  convert_element_type_86 = None
        add_16: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_84, mul_24);  convert_element_type_84 = mul_24 = None
        convert_element_type_87: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_16, torch.bfloat16);  add_16 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_20: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_49, [1, 0]);  primals_49 = None
        addmm_16: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_48, convert_element_type_87, permute_20)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_21: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_51, [1, 0]);  primals_51 = None
        addmm_17: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_50, addmm_16, permute_21);  addmm_16 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_94: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_87, torch.float32);  convert_element_type_87 = None
        convert_element_type_96: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_17, torch.float32);  addmm_17 = None
        mul_26: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_96);  convert_element_type_96 = None
        add_17: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_94, mul_26);  convert_element_type_94 = mul_26 = None
        convert_element_type_97: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_17, torch.bfloat16);  add_17 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_22: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_53, [1, 0]);  primals_53 = None
        addmm_18: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_52, convert_element_type_97, permute_22)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_23: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_55, [1, 0]);  primals_55 = None
        addmm_19: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_54, addmm_18, permute_23);  addmm_18 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_104: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_97, torch.float32);  convert_element_type_97 = None
        convert_element_type_106: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_19, torch.float32);  addmm_19 = None
        mul_28: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_106);  convert_element_type_106 = None
        add_18: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_104, mul_28);  convert_element_type_104 = mul_28 = None
        convert_element_type_107: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_18, torch.bfloat16);  add_18 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_24: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_57, [1, 0]);  primals_57 = None
        addmm_20: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_56, convert_element_type_107, permute_24)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_25: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_59, [1, 0]);  primals_59 = None
        addmm_21: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_58, addmm_20, permute_25);  addmm_20 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_114: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_107, torch.float32);  convert_element_type_107 = None
        convert_element_type_116: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_21, torch.float32);  addmm_21 = None
        mul_30: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_116);  convert_element_type_116 = None
        add_19: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_114, mul_30);  convert_element_type_114 = mul_30 = None
        convert_element_type_117: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_19, torch.bfloat16);  add_19 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_26: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_61, [1, 0]);  primals_61 = None
        addmm_22: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_60, convert_element_type_117, permute_26)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_27: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_63, [1, 0]);  primals_63 = None
        addmm_23: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_62, addmm_22, permute_27);  addmm_22 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_124: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_117, torch.float32);  convert_element_type_117 = None
        convert_element_type_126: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_23, torch.float32);  addmm_23 = None
        mul_32: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_126);  convert_element_type_126 = None
        add_20: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_124, mul_32);  convert_element_type_124 = mul_32 = None
        convert_element_type_127: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_20, torch.bfloat16);  add_20 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_28: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_65, [1, 0]);  primals_65 = None
        addmm_24: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_64, convert_element_type_127, permute_28);  primals_64 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_29: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_67, [1, 0]);  primals_67 = None
        addmm_25: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_66, addmm_24, permute_29)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_134: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_127, torch.float32);  convert_element_type_127 = None
        convert_element_type_136: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_25, torch.float32);  addmm_25 = None
        mul_34: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_136);  convert_element_type_136 = None
        add_21: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_134, mul_34);  convert_element_type_134 = mul_34 = None
        convert_element_type_137: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_21, torch.bfloat16);  add_21 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_30: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_69, [1, 0]);  primals_69 = None
        addmm_26: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_68, convert_element_type_137, permute_30);  primals_68 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_31: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_71, [1, 0]);  primals_71 = None
        addmm_27: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_70, addmm_26, permute_31)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_144: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_137, torch.float32);  convert_element_type_137 = None
        convert_element_type_146: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_27, torch.float32);  addmm_27 = None
        mul_36: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_146);  convert_element_type_146 = None
        add_22: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_144, mul_36);  convert_element_type_144 = mul_36 = None
        convert_element_type_147: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_22, torch.bfloat16);  add_22 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_32: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_73, [1, 0]);  primals_73 = None
        addmm_28: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_72, convert_element_type_147, permute_32)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_33: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_75, [1, 0]);  primals_75 = None
        addmm_29: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_74, addmm_28, permute_33);  addmm_28 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_154: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_147, torch.float32);  convert_element_type_147 = None
        convert_element_type_156: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_29, torch.float32);  addmm_29 = None
        mul_38: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_156);  convert_element_type_156 = None
        add_23: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_154, mul_38);  convert_element_type_154 = mul_38 = None
        convert_element_type_157: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_23, torch.bfloat16);  add_23 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_34: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_77, [1, 0]);  primals_77 = None
        addmm_30: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_76, convert_element_type_157, permute_34)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_35: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_79, [1, 0]);  primals_79 = None
        addmm_31: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_78, addmm_30, permute_35);  addmm_30 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_164: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_157, torch.float32);  convert_element_type_157 = None
        convert_element_type_166: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_31, torch.float32);  addmm_31 = None
        mul_40: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_166);  convert_element_type_166 = None
        add_24: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_164, mul_40);  convert_element_type_164 = mul_40 = None
        convert_element_type_167: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_24, torch.bfloat16);  add_24 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_36: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_81, [1, 0]);  primals_81 = None
        addmm_32: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_80, convert_element_type_167, permute_36);  primals_80 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_37: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_83, [1, 0]);  primals_83 = None
        addmm_33: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_82, addmm_32, permute_37)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_174: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_167, torch.float32);  convert_element_type_167 = None
        convert_element_type_176: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_33, torch.float32);  addmm_33 = None
        mul_42: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_176);  convert_element_type_176 = None
        add_25: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_174, mul_42);  convert_element_type_174 = mul_42 = None
        convert_element_type_177: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_25, torch.bfloat16);  add_25 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_38: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_85, [1, 0]);  primals_85 = None
        addmm_34: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_84, convert_element_type_177, permute_38);  primals_84 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_39: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_87, [1, 0]);  primals_87 = None
        addmm_35: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_86, addmm_34, permute_39)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_184: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_177, torch.float32);  convert_element_type_177 = None
        convert_element_type_186: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_35, torch.float32);  addmm_35 = None
        mul_44: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_13, convert_element_type_186);  mul_13 = convert_element_type_186 = None
        add_26: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_184, mul_44);  convert_element_type_184 = mul_44 = None
        convert_element_type_187: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_26, torch.bfloat16);  add_26 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_188: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_187, torch.float32)
        var_mean_5 = torch.ops.aten.var_mean.correction(convert_element_type_188, [1], correction = 0, keepdim = True);  convert_element_type_188 = None
        getitem_13: "f32[640, 1][1, 1]cuda:0" = var_mean_5[0]
        getitem_14: "f32[640, 1][1, 1]cuda:0" = var_mean_5[1];  var_mean_5 = None
        add_27: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_13, 1e-05);  getitem_13 = None
        rsqrt_5: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_27);  add_27 = None
        sub_5: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.sub.Tensor(convert_element_type_187, getitem_14);  convert_element_type_187 = getitem_14 = None
        mul_45: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_5, rsqrt_5);  sub_5 = rsqrt_5 = None
        mul_46: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_45, primals_89);  mul_45 = None
        add_28: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_46, primals_88);  mul_46 = None
        convert_element_type_189: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_28, torch.bfloat16);  add_28 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:347 in forward, code: return self.mlp_net(input)
        permute_40: "bf16[8384, 49152][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_91, [1, 0]);  primals_91 = None
        addmm_36: "bf16[640, 49152][49152, 1]cuda:0" = torch.ops.aten.addmm.default(primals_90, convert_element_type_189, permute_40);  primals_90 = convert_element_type_189 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/dper_lib/fx_tracing/utils.py:9 in _cat_helper, code: return torch.cat(tensors, dim=dim)
        cat_1: "bf16[640, 73920][73920, 1]cuda:0" = torch.ops.aten.cat.default([primals_92, view_2, addmm_36], 1);  view_2 = addmm_36 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:399 in forward, code: ).view(-1, self._dhen_layer_output_emb_num, self._emb_dim)
        view_6: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.view.default(cat_1, [-1, 385, 192])
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:407 in forward, code: emb_residual_sum = matching_lce_output + emb_concated
        add_29: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_2, view_6);  getitem_2 = view_6 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_193: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_29, torch.float32)
        var_mean_6 = torch.ops.aten.var_mean.correction(convert_element_type_193, [2], correction = 0, keepdim = True);  convert_element_type_193 = None
        getitem_15: "f32[640, 385, 1][385, 1, 1]cuda:0" = var_mean_6[0]
        getitem_16: "f32[640, 385, 1][385, 1, 1]cuda:0" = var_mean_6[1];  var_mean_6 = None
        add_30: "f32[640, 385, 1][385, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_15, 1e-05);  getitem_15 = None
        rsqrt_6: "f32[640, 385, 1][385, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_30);  add_30 = None
        sub_6: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.sub.Tensor(add_29, getitem_16);  add_29 = getitem_16 = None
        mul_47: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_6, rsqrt_6);  sub_6 = rsqrt_6 = None
        mul_48: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_47, primals_94);  mul_47 = None
        add_31: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_48, primals_93);  mul_48 = None
        convert_element_type_194: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_31, torch.bfloat16);  add_31 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/simple_lce.py:121 in forward, code: out = torch.matmul(self._compression_w, embeddings) + self._compression_b
        permute_41: "bf16[640, 192, 385][73920, 1, 192]cuda:0" = torch.ops.aten.permute.default(convert_element_type_194, [0, 2, 1])
        permute_42: "bf16[385, 384][1, 385]cuda:0" = torch.ops.aten.permute.default(primals_95, [1, 0])
        clone_2: "bf16[640, 192, 385][73920, 385, 1]cuda:0" = torch.ops.aten.clone.default(permute_41, memory_format = torch.contiguous_format)
        view_7: "bf16[122880, 385][385, 1]cuda:0" = torch.ops.aten.view.default(clone_2, [122880, 385]);  clone_2 = None
        
        # No stacktrace found for following nodes
        cat_default_11: "bf16[122880, 392][392, 1]cuda:0" = torch.ops.aten.cat.default([view_7, full_default_13], 1);  view_7 = None
        full_default_12: "bf16[7, 384][384, 1]cuda:0" = torch.ops.aten.full.default([7, 384], 0, dtype = torch.bfloat16, layout = torch.strided, device = device(type='cuda', index=0), pin_memory = False)
        cat_default_12: "bf16[392, 384][384, 1]cuda:0" = torch.ops.aten.cat.default([permute_42, full_default_12]);  permute_42 = None
        mm_default_7: "bf16[122880, 384][384, 1]cuda:0" = torch.ops.aten.mm.default(cat_default_11, cat_default_12);  cat_default_11 = cat_default_12 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/simple_lce.py:121 in forward, code: out = torch.matmul(self._compression_w, embeddings) + self._compression_b
        view_8: "bf16[640, 192, 384][73728, 384, 1]cuda:0" = torch.ops.aten.view.default(mm_default_7, [640, 192, 384]);  mm_default_7 = None
        permute_43: "bf16[640, 384, 192][73728, 1, 384]cuda:0" = torch.ops.aten.permute.default(view_8, [0, 2, 1]);  view_8 = None
        clone_3: "bf16[640, 384, 192][73728, 192, 1]cuda:0" = torch.ops.aten.clone.default(permute_43, memory_format = torch.contiguous_format);  permute_43 = None
        add_32: "bf16[640, 384, 192][73728, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(clone_3, primals_96);  clone_3 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:319 in forward, code: lce_fused_split = torch.split(
        split_with_sizes_1 = torch.ops.aten.split_with_sizes.default(add_32, [128, 256], 1);  add_32 = None
        getitem_17: "bf16[640, 128, 192][73728, 192, 1]cuda:0" = split_with_sizes_1[0]
        getitem_18: "bf16[640, 256, 192][73728, 192, 1]cuda:0" = split_with_sizes_1[1];  split_with_sizes_1 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:331 in forward, code: lce_output = lce_output.reshape(
        view_9: "bf16[640, 24576][73728, 1]cuda:0" = torch.ops.aten.view.default(getitem_17, [640, 24576]);  getitem_17 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:246 in forward, code: compressed_emb_flatten = torch.reshape(
        view_10: "bf16[640, 49152][73728, 1]cuda:0" = torch.ops.aten.view.default(getitem_18, [640, 49152]);  getitem_18 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_45: "bf16[49152, 1024][1, 49152]cuda:0" = torch.ops.aten.permute.default(primals_98, [1, 0]);  primals_98 = None
        addmm_37: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_97, view_10, permute_45);  primals_97 = view_10 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_200: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_37, torch.float32)
        var_mean_7 = torch.ops.aten.var_mean.correction(convert_element_type_200, [1], correction = 0, keepdim = True);  convert_element_type_200 = None
        getitem_19: "f32[640, 1][1, 1]cuda:0" = var_mean_7[0]
        getitem_20: "f32[640, 1][1, 1]cuda:0" = var_mean_7[1];  var_mean_7 = None
        add_33: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_19, 1e-05);  getitem_19 = None
        rsqrt_7: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_33);  add_33 = None
        sub_7: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_37, getitem_20);  getitem_20 = None
        mul_49: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_7, rsqrt_7);  sub_7 = rsqrt_7 = None
        mul_50: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_49, primals_100);  mul_49 = None
        add_34: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_50, primals_99);  mul_50 = None
        convert_element_type_201: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_34, torch.bfloat16);  add_34 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_3: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_201);  convert_element_type_201 = None
        mul_51: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_37, sigmoid_3);  sigmoid_3 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_46: "bf16[1024, 1024][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_102, [1, 0]);  primals_102 = None
        addmm_38: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_101, mul_51, permute_46);  mul_51 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_205: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_38, torch.float32)
        var_mean_8 = torch.ops.aten.var_mean.correction(convert_element_type_205, [1], correction = 0, keepdim = True);  convert_element_type_205 = None
        getitem_21: "f32[640, 1][1, 1]cuda:0" = var_mean_8[0]
        getitem_22: "f32[640, 1][1, 1]cuda:0" = var_mean_8[1];  var_mean_8 = None
        add_35: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_21, 1e-05);  getitem_21 = None
        rsqrt_8: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_35);  add_35 = None
        sub_8: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_38, getitem_22);  getitem_22 = None
        mul_52: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_8, rsqrt_8);  sub_8 = rsqrt_8 = None
        mul_53: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_52, primals_104);  mul_52 = None
        add_36: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_53, primals_103);  mul_53 = None
        convert_element_type_206: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_36, torch.bfloat16);  add_36 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_4: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_206);  convert_element_type_206 = None
        mul_54: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_38, sigmoid_4);  addmm_38 = sigmoid_4 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_47: "bf16[1024, 12320][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_106, [1, 0]);  primals_106 = None
        addmm_39: "bf16[640, 12320][12320, 1]cuda:0" = torch.ops.aten.addmm.default(primals_105, mul_54, permute_47);  mul_54 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:257 in forward, code: tensor_after_match_reshape = torch.reshape(
        view_11: "bf16[640, 385, 32][12320, 32, 1]cuda:0" = torch.ops.aten.view.default(addmm_39, [-1, 385, 32]);  addmm_39 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:260 in forward, code: weight_arch_output = torch.bmm(
        bmm_2: "bf16[640, 192, 32][6144, 32, 1]cuda:0" = torch.ops.aten.bmm.default(permute_41, view_11);  permute_41 = view_11 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:288 in forward, code: dot_product = torch.bmm(
        bmm_3: "bf16[640, 385, 32][12320, 32, 1]cuda:0" = torch.ops.aten.bmm.default(convert_element_type_194, bmm_2);  bmm_2 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:291 in forward, code: dot_product_flatten = torch.flatten(
        view_12: "bf16[640, 12320][12320, 1]cuda:0" = torch.ops.aten.view.default(bmm_3, [640, 12320]);  bmm_3 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_214: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.prims.convert_element_type.default(view_12, torch.float32)
        var_mean_9 = torch.ops.aten.var_mean.correction(convert_element_type_214, [1], correction = 0, keepdim = True);  convert_element_type_214 = None
        getitem_23: "f32[640, 1][1, 1]cuda:0" = var_mean_9[0]
        getitem_24: "f32[640, 1][1, 1]cuda:0" = var_mean_9[1];  var_mean_9 = None
        add_37: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_23, 1e-05);  getitem_23 = None
        rsqrt_9: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_37);  add_37 = None
        sub_9: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.sub.Tensor(view_12, getitem_24);  view_12 = getitem_24 = None
        mul_55: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_9, rsqrt_9);  sub_9 = rsqrt_9 = None
        mul_56: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_55, primals_108);  mul_55 = None
        add_38: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_56, primals_107);  mul_56 = None
        convert_element_type_215: "bf16[640, 12320][12320, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_38, torch.bfloat16);  add_38 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_48: "bf16[12320, 4800][1, 12320]cuda:0" = torch.ops.aten.permute.default(primals_110, [1, 0]);  primals_110 = None
        addmm_40: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.addmm.default(primals_109, convert_element_type_215, permute_48);  primals_109 = convert_element_type_215 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_219: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_40, torch.float32)
        var_mean_10 = torch.ops.aten.var_mean.correction(convert_element_type_219, [1], correction = 0, keepdim = True);  convert_element_type_219 = None
        getitem_25: "f32[640, 1][1, 1]cuda:0" = var_mean_10[0]
        getitem_26: "f32[640, 1][1, 1]cuda:0" = var_mean_10[1];  var_mean_10 = None
        add_39: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_25, 1e-05);  getitem_25 = None
        rsqrt_10: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_39);  add_39 = None
        sub_10: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_40, getitem_26);  getitem_26 = None
        mul_57: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_10, rsqrt_10);  sub_10 = rsqrt_10 = None
        mul_58: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_57, primals_112);  mul_57 = None
        add_40: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_58, primals_111);  mul_58 = None
        convert_element_type_220: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_40, torch.bfloat16);  add_40 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_5: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_220);  convert_element_type_220 = None
        mul_59: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_40, sigmoid_5);  sigmoid_5 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:372 in forward, code: temp_overarch_input = torch.cat(
        cat_2: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.cat.default([primals_20, primals_21, mul_59], 1);  mul_59 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_221: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(cat_2, torch.float32)
        var_mean_11 = torch.ops.aten.var_mean.correction(convert_element_type_221, [1], correction = 0, keepdim = True);  convert_element_type_221 = None
        getitem_27: "f32[640, 1][1, 1]cuda:0" = var_mean_11[0]
        getitem_28: "f32[640, 1][1, 1]cuda:0" = var_mean_11[1];  var_mean_11 = None
        add_41: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_27, 1e-05);  getitem_27 = None
        rsqrt_11: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_41);  add_41 = None
        sub_11: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.sub.Tensor(cat_2, getitem_28);  cat_2 = getitem_28 = None
        mul_60: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_11, rsqrt_11);  sub_11 = rsqrt_11 = None
        mul_61: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_60, primals_114);  mul_60 = None
        add_42: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_61, primals_113);  mul_61 = None
        convert_element_type_222: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_42, torch.bfloat16);  add_42 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_49: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_116, [1, 0]);  primals_116 = None
        addmm_41: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_115, convert_element_type_222, permute_49)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_50: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_118, [1, 0]);  primals_118 = None
        addmm_42: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_117, addmm_41, permute_50);  addmm_41 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_229: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_222, torch.float32);  convert_element_type_222 = None
        convert_element_type_231: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_42, torch.float32);  addmm_42 = None
        mul_62: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(convert_element_type_229, 1.0)
        mul_63: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_231);  convert_element_type_231 = None
        add_43: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_229, mul_63);  convert_element_type_229 = mul_63 = None
        convert_element_type_232: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_43, torch.bfloat16);  add_43 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_51: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_120, [1, 0]);  primals_120 = None
        addmm_43: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_119, convert_element_type_232, permute_51)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_52: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_122, [1, 0]);  primals_122 = None
        addmm_44: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_121, addmm_43, permute_52);  addmm_43 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_239: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_232, torch.float32);  convert_element_type_232 = None
        convert_element_type_241: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_44, torch.float32);  addmm_44 = None
        mul_65: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_241);  convert_element_type_241 = None
        add_44: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_239, mul_65);  convert_element_type_239 = mul_65 = None
        convert_element_type_242: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_44, torch.bfloat16);  add_44 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_53: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_124, [1, 0]);  primals_124 = None
        addmm_45: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_123, convert_element_type_242, permute_53)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_54: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_126, [1, 0]);  primals_126 = None
        addmm_46: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_125, addmm_45, permute_54);  addmm_45 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_249: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_242, torch.float32);  convert_element_type_242 = None
        convert_element_type_251: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_46, torch.float32);  addmm_46 = None
        mul_67: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_251);  convert_element_type_251 = None
        add_45: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_249, mul_67);  convert_element_type_249 = mul_67 = None
        convert_element_type_252: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_45, torch.bfloat16);  add_45 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_55: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_128, [1, 0]);  primals_128 = None
        addmm_47: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_127, convert_element_type_252, permute_55);  primals_127 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_56: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_130, [1, 0]);  primals_130 = None
        addmm_48: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_129, addmm_47, permute_56)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_259: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_252, torch.float32);  convert_element_type_252 = None
        convert_element_type_261: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_48, torch.float32);  addmm_48 = None
        mul_69: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_261);  convert_element_type_261 = None
        add_46: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_259, mul_69);  convert_element_type_259 = mul_69 = None
        convert_element_type_262: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_46, torch.bfloat16);  add_46 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_57: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_132, [1, 0]);  primals_132 = None
        addmm_49: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_131, convert_element_type_262, permute_57);  primals_131 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_58: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_134, [1, 0]);  primals_134 = None
        addmm_50: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_133, addmm_49, permute_58)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_269: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_262, torch.float32);  convert_element_type_262 = None
        convert_element_type_271: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_50, torch.float32);  addmm_50 = None
        mul_71: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_271);  convert_element_type_271 = None
        add_47: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_269, mul_71);  convert_element_type_269 = mul_71 = None
        convert_element_type_272: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_47, torch.bfloat16);  add_47 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_59: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_136, [1, 0]);  primals_136 = None
        addmm_51: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_135, convert_element_type_272, permute_59)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_60: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_138, [1, 0]);  primals_138 = None
        addmm_52: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_137, addmm_51, permute_60);  addmm_51 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_279: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_272, torch.float32);  convert_element_type_272 = None
        convert_element_type_281: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_52, torch.float32);  addmm_52 = None
        mul_73: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_281);  convert_element_type_281 = None
        add_48: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_279, mul_73);  convert_element_type_279 = mul_73 = None
        convert_element_type_282: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_48, torch.bfloat16);  add_48 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_61: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_140, [1, 0]);  primals_140 = None
        addmm_53: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_139, convert_element_type_282, permute_61)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_62: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_142, [1, 0]);  primals_142 = None
        addmm_54: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_141, addmm_53, permute_62);  addmm_53 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_289: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_282, torch.float32);  convert_element_type_282 = None
        convert_element_type_291: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_54, torch.float32);  addmm_54 = None
        mul_75: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_291);  convert_element_type_291 = None
        add_49: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_289, mul_75);  convert_element_type_289 = mul_75 = None
        convert_element_type_292: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_49, torch.bfloat16);  add_49 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_63: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_144, [1, 0]);  primals_144 = None
        addmm_55: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_143, convert_element_type_292, permute_63)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_64: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_146, [1, 0]);  primals_146 = None
        addmm_56: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_145, addmm_55, permute_64);  addmm_55 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_299: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_292, torch.float32);  convert_element_type_292 = None
        convert_element_type_301: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_56, torch.float32);  addmm_56 = None
        mul_77: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_301);  convert_element_type_301 = None
        add_50: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_299, mul_77);  convert_element_type_299 = mul_77 = None
        convert_element_type_302: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_50, torch.bfloat16);  add_50 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_65: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_148, [1, 0]);  primals_148 = None
        addmm_57: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_147, convert_element_type_302, permute_65);  primals_147 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_66: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_150, [1, 0]);  primals_150 = None
        addmm_58: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_149, addmm_57, permute_66)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_309: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_302, torch.float32);  convert_element_type_302 = None
        convert_element_type_311: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_58, torch.float32);  addmm_58 = None
        mul_79: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_311);  convert_element_type_311 = None
        add_51: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_309, mul_79);  convert_element_type_309 = mul_79 = None
        convert_element_type_312: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_51, torch.bfloat16);  add_51 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_67: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_152, [1, 0]);  primals_152 = None
        addmm_59: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_151, convert_element_type_312, permute_67);  primals_151 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_68: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_154, [1, 0]);  primals_154 = None
        addmm_60: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_153, addmm_59, permute_68)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_319: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_312, torch.float32);  convert_element_type_312 = None
        convert_element_type_321: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_60, torch.float32);  addmm_60 = None
        mul_81: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_321);  convert_element_type_321 = None
        add_52: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_319, mul_81);  convert_element_type_319 = mul_81 = None
        convert_element_type_322: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_52, torch.bfloat16);  add_52 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_69: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_156, [1, 0]);  primals_156 = None
        addmm_61: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_155, convert_element_type_322, permute_69)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_70: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_158, [1, 0]);  primals_158 = None
        addmm_62: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_157, addmm_61, permute_70);  addmm_61 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_329: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_322, torch.float32);  convert_element_type_322 = None
        convert_element_type_331: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_62, torch.float32);  addmm_62 = None
        mul_83: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_331);  convert_element_type_331 = None
        add_53: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_329, mul_83);  convert_element_type_329 = mul_83 = None
        convert_element_type_332: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_53, torch.bfloat16);  add_53 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_71: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_160, [1, 0]);  primals_160 = None
        addmm_63: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_159, convert_element_type_332, permute_71)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_72: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_162, [1, 0]);  primals_162 = None
        addmm_64: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_161, addmm_63, permute_72);  addmm_63 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_339: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_332, torch.float32);  convert_element_type_332 = None
        convert_element_type_341: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_64, torch.float32);  addmm_64 = None
        mul_85: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_341);  convert_element_type_341 = None
        add_54: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_339, mul_85);  convert_element_type_339 = mul_85 = None
        convert_element_type_342: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_54, torch.bfloat16);  add_54 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_73: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_164, [1, 0]);  primals_164 = None
        addmm_65: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_163, convert_element_type_342, permute_73);  primals_163 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_74: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_166, [1, 0]);  primals_166 = None
        addmm_66: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_165, addmm_65, permute_74)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_349: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_342, torch.float32);  convert_element_type_342 = None
        convert_element_type_351: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_66, torch.float32);  addmm_66 = None
        mul_87: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_351);  convert_element_type_351 = None
        add_55: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_349, mul_87);  convert_element_type_349 = mul_87 = None
        convert_element_type_352: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_55, torch.bfloat16);  add_55 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_75: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_168, [1, 0]);  primals_168 = None
        addmm_67: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_167, convert_element_type_352, permute_75);  primals_167 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_76: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_170, [1, 0]);  primals_170 = None
        addmm_68: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_169, addmm_67, permute_76)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_359: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_352, torch.float32);  convert_element_type_352 = None
        convert_element_type_361: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_68, torch.float32);  addmm_68 = None
        mul_89: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_361);  convert_element_type_361 = None
        add_56: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_359, mul_89);  convert_element_type_359 = mul_89 = None
        convert_element_type_362: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_56, torch.bfloat16);  add_56 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_77: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_172, [1, 0]);  primals_172 = None
        addmm_69: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_171, convert_element_type_362, permute_77);  primals_171 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_78: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_174, [1, 0]);  primals_174 = None
        addmm_70: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_173, addmm_69, permute_78)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_369: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_362, torch.float32);  convert_element_type_362 = None
        convert_element_type_371: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_70, torch.float32);  addmm_70 = None
        mul_91: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_371);  convert_element_type_371 = None
        add_57: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_369, mul_91);  convert_element_type_369 = mul_91 = None
        convert_element_type_372: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_57, torch.bfloat16);  add_57 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_79: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_176, [1, 0]);  primals_176 = None
        addmm_71: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_175, convert_element_type_372, permute_79)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_80: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_178, [1, 0]);  primals_178 = None
        addmm_72: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_177, addmm_71, permute_80);  addmm_71 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_379: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_372, torch.float32);  convert_element_type_372 = None
        convert_element_type_381: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_72, torch.float32);  addmm_72 = None
        mul_93: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_62, convert_element_type_381);  mul_62 = convert_element_type_381 = None
        add_58: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_379, mul_93);  convert_element_type_379 = mul_93 = None
        convert_element_type_382: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_58, torch.bfloat16);  add_58 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_383: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_382, torch.float32)
        var_mean_12 = torch.ops.aten.var_mean.correction(convert_element_type_383, [1], correction = 0, keepdim = True);  convert_element_type_383 = None
        getitem_29: "f32[640, 1][1, 1]cuda:0" = var_mean_12[0]
        getitem_30: "f32[640, 1][1, 1]cuda:0" = var_mean_12[1];  var_mean_12 = None
        add_59: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_29, 1e-05);  getitem_29 = None
        rsqrt_12: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_59);  add_59 = None
        sub_12: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.sub.Tensor(convert_element_type_382, getitem_30);  convert_element_type_382 = getitem_30 = None
        mul_94: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_12, rsqrt_12);  sub_12 = rsqrt_12 = None
        mul_95: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_94, primals_180);  mul_94 = None
        add_60: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_95, primals_179);  mul_95 = None
        convert_element_type_384: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_60, torch.bfloat16);  add_60 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:347 in forward, code: return self.mlp_net(input)
        permute_81: "bf16[8384, 49152][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_182, [1, 0]);  primals_182 = None
        addmm_73: "bf16[640, 49152][49152, 1]cuda:0" = torch.ops.aten.addmm.default(primals_181, convert_element_type_384, permute_81);  primals_181 = convert_element_type_384 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/dper_lib/fx_tracing/utils.py:9 in _cat_helper, code: return torch.cat(tensors, dim=dim)
        cat_3: "bf16[640, 73920][73920, 1]cuda:0" = torch.ops.aten.cat.default([primals_92, view_9, addmm_73], 1);  view_9 = addmm_73 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:399 in forward, code: ).view(-1, self._dhen_layer_output_emb_num, self._emb_dim)
        view_13: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.view.default(cat_3, [-1, 385, 192])
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:402 in forward, code: emb_residual_sum = emb_concated + input_embs
        add_61: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(view_13, convert_element_type_194);  view_13 = convert_element_type_194 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_388: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_61, torch.float32)
        var_mean_13 = torch.ops.aten.var_mean.correction(convert_element_type_388, [2], correction = 0, keepdim = True);  convert_element_type_388 = None
        getitem_31: "f32[640, 385, 1][385, 1, 1]cuda:0" = var_mean_13[0]
        getitem_32: "f32[640, 385, 1][385, 1, 1]cuda:0" = var_mean_13[1];  var_mean_13 = None
        add_62: "f32[640, 385, 1][385, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_31, 1e-05);  getitem_31 = None
        rsqrt_13: "f32[640, 385, 1][385, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_62);  add_62 = None
        sub_13: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.sub.Tensor(add_61, getitem_32);  add_61 = getitem_32 = None
        mul_96: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_13, rsqrt_13);  sub_13 = rsqrt_13 = None
        mul_97: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_96, primals_184);  mul_96 = None
        add_63: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_97, primals_183);  mul_97 = None
        convert_element_type_389: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_63, torch.bfloat16);  add_63 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/simple_lce.py:121 in forward, code: out = torch.matmul(self._compression_w, embeddings) + self._compression_b
        permute_82: "bf16[640, 192, 385][73920, 1, 192]cuda:0" = torch.ops.aten.permute.default(convert_element_type_389, [0, 2, 1])
        permute_83: "bf16[385, 384][1, 385]cuda:0" = torch.ops.aten.permute.default(primals_185, [1, 0])
        clone_4: "bf16[640, 192, 385][73920, 385, 1]cuda:0" = torch.ops.aten.clone.default(permute_82, memory_format = torch.contiguous_format)
        view_14: "bf16[122880, 385][385, 1]cuda:0" = torch.ops.aten.view.default(clone_4, [122880, 385]);  clone_4 = None
        
        # No stacktrace found for following nodes
        cat_default_9: "bf16[122880, 392][392, 1]cuda:0" = torch.ops.aten.cat.default([view_14, full_default_13], 1);  view_14 = full_default_13 = None
        cat_default_10: "bf16[392, 384][384, 1]cuda:0" = torch.ops.aten.cat.default([permute_83, full_default_12]);  permute_83 = full_default_12 = None
        mm_default_6: "bf16[122880, 384][384, 1]cuda:0" = torch.ops.aten.mm.default(cat_default_9, cat_default_10);  cat_default_9 = cat_default_10 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/simple_lce.py:121 in forward, code: out = torch.matmul(self._compression_w, embeddings) + self._compression_b
        view_15: "bf16[640, 192, 384][73728, 384, 1]cuda:0" = torch.ops.aten.view.default(mm_default_6, [640, 192, 384]);  mm_default_6 = None
        permute_84: "bf16[640, 384, 192][73728, 1, 384]cuda:0" = torch.ops.aten.permute.default(view_15, [0, 2, 1]);  view_15 = None
        clone_5: "bf16[640, 384, 192][73728, 192, 1]cuda:0" = torch.ops.aten.clone.default(permute_84, memory_format = torch.contiguous_format);  permute_84 = None
        add_64: "bf16[640, 384, 192][73728, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(clone_5, primals_186);  clone_5 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:319 in forward, code: lce_fused_split = torch.split(
        split_with_sizes_2 = torch.ops.aten.split_with_sizes.default(add_64, [128, 256], 1);  add_64 = None
        getitem_33: "bf16[640, 128, 192][73728, 192, 1]cuda:0" = split_with_sizes_2[0]
        getitem_34: "bf16[640, 256, 192][73728, 192, 1]cuda:0" = split_with_sizes_2[1];  split_with_sizes_2 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:331 in forward, code: lce_output = lce_output.reshape(
        view_16: "bf16[640, 24576][73728, 1]cuda:0" = torch.ops.aten.view.default(getitem_33, [640, 24576]);  getitem_33 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:246 in forward, code: compressed_emb_flatten = torch.reshape(
        view_17: "bf16[640, 49152][73728, 1]cuda:0" = torch.ops.aten.view.default(getitem_34, [640, 49152]);  getitem_34 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_86: "bf16[49152, 1024][1, 49152]cuda:0" = torch.ops.aten.permute.default(primals_188, [1, 0]);  primals_188 = None
        addmm_74: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_187, view_17, permute_86);  primals_187 = view_17 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_395: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_74, torch.float32)
        var_mean_14 = torch.ops.aten.var_mean.correction(convert_element_type_395, [1], correction = 0, keepdim = True);  convert_element_type_395 = None
        getitem_35: "f32[640, 1][1, 1]cuda:0" = var_mean_14[0]
        getitem_36: "f32[640, 1][1, 1]cuda:0" = var_mean_14[1];  var_mean_14 = None
        add_65: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_35, 1e-05);  getitem_35 = None
        rsqrt_14: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_65);  add_65 = None
        sub_14: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_74, getitem_36);  getitem_36 = None
        mul_98: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_14, rsqrt_14);  sub_14 = rsqrt_14 = None
        mul_99: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_98, primals_190);  mul_98 = None
        add_66: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_99, primals_189);  mul_99 = None
        convert_element_type_396: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_66, torch.bfloat16);  add_66 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_6: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_396);  convert_element_type_396 = None
        mul_100: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_74, sigmoid_6);  sigmoid_6 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_87: "bf16[1024, 1024][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_192, [1, 0]);  primals_192 = None
        addmm_75: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_191, mul_100, permute_87);  mul_100 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_400: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_75, torch.float32)
        var_mean_15 = torch.ops.aten.var_mean.correction(convert_element_type_400, [1], correction = 0, keepdim = True);  convert_element_type_400 = None
        getitem_37: "f32[640, 1][1, 1]cuda:0" = var_mean_15[0]
        getitem_38: "f32[640, 1][1, 1]cuda:0" = var_mean_15[1];  var_mean_15 = None
        add_67: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_37, 1e-05);  getitem_37 = None
        rsqrt_15: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_67);  add_67 = None
        sub_15: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_75, getitem_38);  getitem_38 = None
        mul_101: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_15, rsqrt_15);  sub_15 = rsqrt_15 = None
        mul_102: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_101, primals_194);  mul_101 = None
        add_68: "f32[640, 1024][1024, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_102, primals_193);  mul_102 = None
        convert_element_type_401: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_68, torch.bfloat16);  add_68 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_7: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_401);  convert_element_type_401 = None
        mul_103: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_75, sigmoid_7);  addmm_75 = sigmoid_7 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_88: "bf16[1024, 12320][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_196, [1, 0]);  primals_196 = None
        addmm_76: "bf16[640, 12320][12320, 1]cuda:0" = torch.ops.aten.addmm.default(primals_195, mul_103, permute_88);  mul_103 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:257 in forward, code: tensor_after_match_reshape = torch.reshape(
        view_18: "bf16[640, 385, 32][12320, 32, 1]cuda:0" = torch.ops.aten.view.default(addmm_76, [-1, 385, 32]);  addmm_76 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:260 in forward, code: weight_arch_output = torch.bmm(
        bmm_4: "bf16[640, 192, 32][6144, 32, 1]cuda:0" = torch.ops.aten.bmm.default(permute_82, view_18);  permute_82 = view_18 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:288 in forward, code: dot_product = torch.bmm(
        bmm_5: "bf16[640, 385, 32][12320, 32, 1]cuda:0" = torch.ops.aten.bmm.default(convert_element_type_389, bmm_4);  bmm_4 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dot_compress_pp.py:291 in forward, code: dot_product_flatten = torch.flatten(
        view_19: "bf16[640, 12320][12320, 1]cuda:0" = torch.ops.aten.view.default(bmm_5, [640, 12320]);  bmm_5 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_409: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.prims.convert_element_type.default(view_19, torch.float32)
        var_mean_16 = torch.ops.aten.var_mean.correction(convert_element_type_409, [1], correction = 0, keepdim = True);  convert_element_type_409 = None
        getitem_39: "f32[640, 1][1, 1]cuda:0" = var_mean_16[0]
        getitem_40: "f32[640, 1][1, 1]cuda:0" = var_mean_16[1];  var_mean_16 = None
        add_69: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_39, 1e-05);  getitem_39 = None
        rsqrt_16: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_69);  add_69 = None
        sub_16: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.sub.Tensor(view_19, getitem_40);  view_19 = getitem_40 = None
        mul_104: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_16, rsqrt_16);  sub_16 = rsqrt_16 = None
        mul_105: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_104, primals_198);  mul_104 = None
        add_70: "f32[640, 12320][12320, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_105, primals_197);  mul_105 = None
        convert_element_type_410: "bf16[640, 12320][12320, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_70, torch.bfloat16);  add_70 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_89: "bf16[12320, 4800][1, 12320]cuda:0" = torch.ops.aten.permute.default(primals_200, [1, 0]);  primals_200 = None
        addmm_77: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.addmm.default(primals_199, convert_element_type_410, permute_89);  primals_199 = convert_element_type_410 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:187 in forward, code: normalized = F.layer_norm(
        convert_element_type_414: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_77, torch.float32)
        var_mean_17 = torch.ops.aten.var_mean.correction(convert_element_type_414, [1], correction = 0, keepdim = True);  convert_element_type_414 = None
        getitem_41: "f32[640, 1][1, 1]cuda:0" = var_mean_17[0]
        getitem_42: "f32[640, 1][1, 1]cuda:0" = var_mean_17[1];  var_mean_17 = None
        add_71: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_41, 1e-05);  getitem_41 = None
        rsqrt_17: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_71);  add_71 = None
        sub_17: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.sub.Tensor(addmm_77, getitem_42);  getitem_42 = None
        mul_106: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_17, rsqrt_17);  sub_17 = rsqrt_17 = None
        mul_107: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_106, primals_202);  mul_106 = None
        add_72: "f32[640, 4800][4800, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_107, primals_201);  mul_107 = None
        convert_element_type_415: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_72, torch.bfloat16);  add_72 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/swish_layer_norm.py:118 in forward, code: return input * self.sigmoid(self.norm(input))
        sigmoid_8: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.sigmoid.default(convert_element_type_415);  convert_element_type_415 = None
        mul_108: "bf16[640, 4800][4800, 1]cuda:0" = torch.ops.aten.mul.Tensor(addmm_77, sigmoid_8);  sigmoid_8 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:372 in forward, code: temp_overarch_input = torch.cat(
        cat_4: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.cat.default([primals_20, primals_21, mul_108], 1);  mul_108 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_416: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(cat_4, torch.float32)
        var_mean_18 = torch.ops.aten.var_mean.correction(convert_element_type_416, [1], correction = 0, keepdim = True);  convert_element_type_416 = None
        getitem_43: "f32[640, 1][1, 1]cuda:0" = var_mean_18[0]
        getitem_44: "f32[640, 1][1, 1]cuda:0" = var_mean_18[1];  var_mean_18 = None
        add_73: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_43, 1e-05);  getitem_43 = None
        rsqrt_18: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_73);  add_73 = None
        sub_18: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.sub.Tensor(cat_4, getitem_44);  cat_4 = getitem_44 = None
        mul_109: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_18, rsqrt_18);  sub_18 = rsqrt_18 = None
        mul_110: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_109, primals_204);  mul_109 = None
        add_74: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_110, primals_203);  mul_110 = None
        convert_element_type_417: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_74, torch.bfloat16);  add_74 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_90: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_206, [1, 0]);  primals_206 = None
        addmm_78: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_205, convert_element_type_417, permute_90)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_91: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_208, [1, 0]);  primals_208 = None
        addmm_79: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_207, addmm_78, permute_91);  addmm_78 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_424: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_417, torch.float32);  convert_element_type_417 = None
        convert_element_type_426: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_79, torch.float32);  addmm_79 = None
        mul_111: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(convert_element_type_424, 1.0)
        mul_112: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_426);  convert_element_type_426 = None
        add_75: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_424, mul_112);  convert_element_type_424 = mul_112 = None
        convert_element_type_427: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_75, torch.bfloat16);  add_75 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_92: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_210, [1, 0]);  primals_210 = None
        addmm_80: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_209, convert_element_type_427, permute_92)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_93: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_212, [1, 0]);  primals_212 = None
        addmm_81: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_211, addmm_80, permute_93);  addmm_80 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_434: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_427, torch.float32);  convert_element_type_427 = None
        convert_element_type_436: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_81, torch.float32);  addmm_81 = None
        mul_114: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_436);  convert_element_type_436 = None
        add_76: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_434, mul_114);  convert_element_type_434 = mul_114 = None
        convert_element_type_437: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_76, torch.bfloat16);  add_76 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_94: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_214, [1, 0]);  primals_214 = None
        addmm_82: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_213, convert_element_type_437, permute_94)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_95: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_216, [1, 0]);  primals_216 = None
        addmm_83: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_215, addmm_82, permute_95);  addmm_82 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_444: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_437, torch.float32);  convert_element_type_437 = None
        convert_element_type_446: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_83, torch.float32);  addmm_83 = None
        mul_116: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_446);  convert_element_type_446 = None
        add_77: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_444, mul_116);  convert_element_type_444 = mul_116 = None
        convert_element_type_447: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_77, torch.bfloat16);  add_77 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_96: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_218, [1, 0]);  primals_218 = None
        addmm_84: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_217, convert_element_type_447, permute_96);  primals_217 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_97: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_220, [1, 0]);  primals_220 = None
        addmm_85: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_219, addmm_84, permute_97)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_454: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_447, torch.float32);  convert_element_type_447 = None
        convert_element_type_456: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_85, torch.float32);  addmm_85 = None
        mul_118: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_456);  convert_element_type_456 = None
        add_78: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_454, mul_118);  convert_element_type_454 = mul_118 = None
        convert_element_type_457: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_78, torch.bfloat16);  add_78 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_98: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_222, [1, 0]);  primals_222 = None
        addmm_86: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_221, convert_element_type_457, permute_98);  primals_221 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_99: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_224, [1, 0]);  primals_224 = None
        addmm_87: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_223, addmm_86, permute_99)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_464: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_457, torch.float32);  convert_element_type_457 = None
        convert_element_type_466: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_87, torch.float32);  addmm_87 = None
        mul_120: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_466);  convert_element_type_466 = None
        add_79: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_464, mul_120);  convert_element_type_464 = mul_120 = None
        convert_element_type_467: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_79, torch.bfloat16);  add_79 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_100: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_226, [1, 0]);  primals_226 = None
        addmm_88: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_225, convert_element_type_467, permute_100)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_101: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_228, [1, 0]);  primals_228 = None
        addmm_89: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_227, addmm_88, permute_101);  addmm_88 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_474: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_467, torch.float32);  convert_element_type_467 = None
        convert_element_type_476: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_89, torch.float32);  addmm_89 = None
        mul_122: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_476);  convert_element_type_476 = None
        add_80: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_474, mul_122);  convert_element_type_474 = mul_122 = None
        convert_element_type_477: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_80, torch.bfloat16);  add_80 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_102: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_230, [1, 0]);  primals_230 = None
        addmm_90: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_229, convert_element_type_477, permute_102)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_103: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_232, [1, 0]);  primals_232 = None
        addmm_91: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_231, addmm_90, permute_103);  addmm_90 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_484: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_477, torch.float32);  convert_element_type_477 = None
        convert_element_type_486: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_91, torch.float32);  addmm_91 = None
        mul_124: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_486);  convert_element_type_486 = None
        add_81: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_484, mul_124);  convert_element_type_484 = mul_124 = None
        convert_element_type_487: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_81, torch.bfloat16);  add_81 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_104: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_234, [1, 0]);  primals_234 = None
        addmm_92: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_233, convert_element_type_487, permute_104);  primals_233 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_105: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_236, [1, 0]);  primals_236 = None
        addmm_93: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_235, addmm_92, permute_105)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_494: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_487, torch.float32);  convert_element_type_487 = None
        convert_element_type_496: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_93, torch.float32);  addmm_93 = None
        mul_126: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_496);  convert_element_type_496 = None
        add_82: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_494, mul_126);  convert_element_type_494 = mul_126 = None
        convert_element_type_497: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_82, torch.bfloat16);  add_82 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_106: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_238, [1, 0]);  primals_238 = None
        addmm_94: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_237, convert_element_type_497, permute_106);  primals_237 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_107: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_240, [1, 0]);  primals_240 = None
        addmm_95: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_239, addmm_94, permute_107)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_504: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_497, torch.float32);  convert_element_type_497 = None
        convert_element_type_506: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_95, torch.float32);  addmm_95 = None
        mul_128: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_506);  convert_element_type_506 = None
        add_83: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_504, mul_128);  convert_element_type_504 = mul_128 = None
        convert_element_type_507: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_83, torch.bfloat16);  add_83 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_108: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_242, [1, 0]);  primals_242 = None
        addmm_96: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_241, convert_element_type_507, permute_108);  primals_241 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_109: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_244, [1, 0]);  primals_244 = None
        addmm_97: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_243, addmm_96, permute_109)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_514: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_507, torch.float32);  convert_element_type_507 = None
        convert_element_type_516: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_97, torch.float32);  addmm_97 = None
        mul_130: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_516);  convert_element_type_516 = None
        add_84: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_514, mul_130);  convert_element_type_514 = mul_130 = None
        convert_element_type_517: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_84, torch.bfloat16);  add_84 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_110: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_246, [1, 0]);  primals_246 = None
        addmm_98: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_245, convert_element_type_517, permute_110)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_111: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_248, [1, 0]);  primals_248 = None
        addmm_99: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_247, addmm_98, permute_111);  addmm_98 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_524: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_517, torch.float32);  convert_element_type_517 = None
        convert_element_type_526: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_99, torch.float32);  addmm_99 = None
        mul_132: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_526);  convert_element_type_526 = None
        add_85: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_524, mul_132);  convert_element_type_524 = mul_132 = None
        convert_element_type_527: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_85, torch.bfloat16);  add_85 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_112: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_250, [1, 0]);  primals_250 = None
        addmm_100: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_249, convert_element_type_527, permute_112)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_113: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_252, [1, 0]);  primals_252 = None
        addmm_101: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_251, addmm_100, permute_113);  addmm_100 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_534: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_527, torch.float32);  convert_element_type_527 = None
        convert_element_type_536: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_101, torch.float32);  addmm_101 = None
        mul_134: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_536);  convert_element_type_536 = None
        add_86: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_534, mul_134);  convert_element_type_534 = mul_134 = None
        convert_element_type_537: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_86, torch.bfloat16);  add_86 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_114: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_254, [1, 0]);  primals_254 = None
        addmm_102: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_253, convert_element_type_537, permute_114)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_115: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_256, [1, 0]);  primals_256 = None
        addmm_103: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_255, addmm_102, permute_115);  addmm_102 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_544: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_537, torch.float32);  convert_element_type_537 = None
        convert_element_type_546: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_103, torch.float32);  addmm_103 = None
        mul_136: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_546);  convert_element_type_546 = None
        add_87: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_544, mul_136);  convert_element_type_544 = mul_136 = None
        convert_element_type_547: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_87, torch.bfloat16);  add_87 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_116: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_258, [1, 0]);  primals_258 = None
        addmm_104: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_257, convert_element_type_547, permute_116)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_117: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_260, [1, 0]);  primals_260 = None
        addmm_105: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_259, addmm_104, permute_117);  addmm_104 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_554: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_547, torch.float32);  convert_element_type_547 = None
        convert_element_type_556: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_105, torch.float32);  addmm_105 = None
        mul_138: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_556);  convert_element_type_556 = None
        add_88: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_554, mul_138);  convert_element_type_554 = mul_138 = None
        convert_element_type_557: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_88, torch.bfloat16);  add_88 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_118: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_262, [1, 0]);  primals_262 = None
        addmm_106: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_261, convert_element_type_557, permute_118)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_119: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_264, [1, 0]);  primals_264 = None
        addmm_107: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_263, addmm_106, permute_119);  addmm_106 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_564: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_557, torch.float32);  convert_element_type_557 = None
        convert_element_type_566: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_107, torch.float32);  addmm_107 = None
        mul_140: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_566);  convert_element_type_566 = None
        add_89: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_564, mul_140);  convert_element_type_564 = mul_140 = None
        convert_element_type_567: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_89, torch.bfloat16);  add_89 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_120: "bf16[8384, 1024][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_266, [1, 0]);  primals_266 = None
        addmm_108: "bf16[640, 1024][1024, 1]cuda:0" = torch.ops.aten.addmm.default(primals_265, convert_element_type_567, permute_120)
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_121: "bf16[1024, 8384][1, 1024]cuda:0" = torch.ops.aten.permute.default(primals_268, [1, 0]);  primals_268 = None
        addmm_109: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.aten.addmm.default(primals_267, addmm_108, permute_121);  addmm_108 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/dcn.py:119 in forward, code: interacted_tensor = torch.addcmul(
        convert_element_type_574: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_567, torch.float32);  convert_element_type_567 = None
        convert_element_type_576: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(addmm_109, torch.float32);  addmm_109 = None
        mul_142: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_111, convert_element_type_576);  mul_111 = convert_element_type_576 = None
        add_90: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(convert_element_type_574, mul_142);  convert_element_type_574 = mul_142 = None
        convert_element_type_577: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_90, torch.bfloat16);  add_90 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_578: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(convert_element_type_577, torch.float32)
        var_mean_19 = torch.ops.aten.var_mean.correction(convert_element_type_578, [1], correction = 0, keepdim = True);  convert_element_type_578 = None
        getitem_45: "f32[640, 1][1, 1]cuda:0" = var_mean_19[0]
        getitem_46: "f32[640, 1][1, 1]cuda:0" = var_mean_19[1];  var_mean_19 = None
        add_91: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_45, 1e-05);  getitem_45 = None
        rsqrt_19: "f32[640, 1][1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_91);  add_91 = None
        sub_19: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.sub.Tensor(convert_element_type_577, getitem_46);  convert_element_type_577 = getitem_46 = None
        mul_143: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_19, rsqrt_19);  sub_19 = rsqrt_19 = None
        mul_144: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_143, primals_270);  mul_143 = None
        add_92: "f32[640, 8384][8384, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_144, primals_269);  mul_144 = None
        convert_element_type_579: "bf16[640, 8384][8384, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_92, torch.bfloat16);  add_92 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:347 in forward, code: return self.mlp_net(input)
        permute_122: "bf16[8384, 49152][1, 8384]cuda:0" = torch.ops.aten.permute.default(primals_272, [1, 0]);  primals_272 = None
        addmm_110: "bf16[640, 49152][49152, 1]cuda:0" = torch.ops.aten.addmm.default(primals_271, convert_element_type_579, permute_122);  primals_271 = convert_element_type_579 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/dper_lib/fx_tracing/utils.py:9 in _cat_helper, code: return torch.cat(tensors, dim=dim)
        cat_5: "bf16[640, 73920][73920, 1]cuda:0" = torch.ops.aten.cat.default([primals_92, view_16, addmm_110], 1);  primals_92 = view_16 = addmm_110 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:399 in forward, code: ).view(-1, self._dhen_layer_output_emb_num, self._emb_dim)
        view_20: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.view.default(cat_5, [-1, 385, 192])
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/aps_models/ads/interformer/modules/non_seq_arch.py:402 in forward, code: emb_residual_sum = emb_concated + input_embs
        add_93: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(view_20, convert_element_type_389);  view_20 = convert_element_type_389 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/lazy_layer_norm.py:95 in forward, code: return torch.nn.functional.layer_norm(
        convert_element_type_583: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_93, torch.float32)
        var_mean_20 = torch.ops.aten.var_mean.correction(convert_element_type_583, [2], correction = 0, keepdim = True);  convert_element_type_583 = None
        getitem_47: "f32[640, 385, 1][385, 1, 1]cuda:0" = var_mean_20[0]
        getitem_48: "f32[640, 385, 1][385, 1, 1]cuda:0" = var_mean_20[1];  var_mean_20 = None
        add_94: "f32[640, 385, 1][385, 1, 1]cuda:0" = torch.ops.aten.add.Tensor(getitem_47, 1e-05);  getitem_47 = None
        rsqrt_20: "f32[640, 385, 1][385, 1, 1]cuda:0" = torch.ops.aten.rsqrt.default(add_94);  add_94 = None
        sub_20: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.sub.Tensor(add_93, getitem_48);  add_93 = getitem_48 = None
        mul_145: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.mul.Tensor(sub_20, rsqrt_20);  sub_20 = rsqrt_20 = None
        mul_146: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.mul.Tensor(mul_145, primals_274);  mul_145 = None
        add_95: "f32[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.aten.add.Tensor(mul_146, primals_273);  mul_146 = primals_273 = None
        convert_element_type_584: "bf16[640, 385, 192][73920, 192, 1]cuda:0" = torch.ops.prims.convert_element_type.default(add_95, torch.bfloat16);  add_95 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:347 in forward, code: return self.mlp_net(input)
        permute_123: "bf16[49152, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_122, [1, 0]);  permute_122 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_179: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_108, [1, 0]);  permute_108 = None
        permute_187: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_106, [1, 0]);  permute_106 = None
        permute_195: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_104, [1, 0]);  permute_104 = None
        permute_219: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_98, [1, 0]);  permute_98 = None
        permute_227: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_96, [1, 0]);  permute_96 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_255: "bf16[4800, 12320][12320, 1]cuda:0" = torch.ops.aten.permute.default(permute_89, [1, 0]);  permute_89 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_271: "bf16[1024, 49152][49152, 1]cuda:0" = torch.ops.aten.permute.default(permute_86, [1, 0]);  permute_86 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:347 in forward, code: return self.mlp_net(input)
        permute_282: "bf16[49152, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_81, [1, 0]);  permute_81 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_298: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_77, [1, 0]);  permute_77 = None
        permute_306: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_75, [1, 0]);  permute_75 = None
        permute_314: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_73, [1, 0]);  permute_73 = None
        permute_338: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_67, [1, 0]);  permute_67 = None
        permute_346: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_65, [1, 0]);  permute_65 = None
        permute_378: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_57, [1, 0]);  permute_57 = None
        permute_386: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_55, [1, 0]);  permute_55 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_414: "bf16[4800, 12320][12320, 1]cuda:0" = torch.ops.aten.permute.default(permute_48, [1, 0]);  permute_48 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_430: "bf16[1024, 49152][49152, 1]cuda:0" = torch.ops.aten.permute.default(permute_45, [1, 0]);  permute_45 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:347 in forward, code: return self.mlp_net(input)
        permute_441: "bf16[49152, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_40, [1, 0]);  permute_40 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_449: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_38, [1, 0]);  permute_38 = None
        permute_457: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_36, [1, 0]);  permute_36 = None
        permute_481: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_30, [1, 0]);  permute_30 = None
        permute_489: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_28, [1, 0]);  permute_28 = None
        permute_545: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_14, [1, 0]);  permute_14 = None
        permute_553: "bf16[1024, 8384][8384, 1]cuda:0" = torch.ops.aten.permute.default(permute_12, [1, 0]);  permute_12 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_573: "bf16[4800, 143392][143392, 1]cuda:0" = torch.ops.aten.permute.default(permute_7, [1, 0]);  permute_7 = None
        
         # File: /packages/aps.ads.icvr/icvr_launcher-inplace#link-tree/legokit/modules/pytorch_modules/mlp.py:179 in forward, code: return self.mlp_net(input)
        permute_589: "bf16[1024, 49152][49152, 1]cuda:0" = torch.ops.aten.permute.default(permute_4, [1, 0]);  permute_4 = None
        return (convert_element_type_584, primals_1, primals_3, primals_6, primals_7, primals_8, primals_10, primals_11, primals_12, primals_14, primals_15, primals_18, primals_19, primals_20, primals_21, primals_22, primals_23, primals_24, primals_26, primals_28, primals_30, primals_34, primals_38, primals_40, primals_42, primals_44, primals_46, primals_48, primals_50, primals_52, primals_54, primals_56, primals_58, primals_60, primals_62, primals_66, primals_70, primals_72, primals_74, primals_76, primals_78, primals_82, primals_86, primals_88, primals_89, primals_93, primals_94, primals_95, primals_96, primals_99, primals_100, primals_101, primals_103, primals_104, primals_105, primals_107, primals_108, primals_111, primals_112, primals_113, primals_114, primals_115, primals_117, primals_119, primals_121, primals_123, primals_125, primals_129, primals_133, primals_135, primals_137, primals_139, primals_141, primals_143, primals_145, primals_149, primals_153, primals_155, primals_157, primals_159, primals_161, primals_165, primals_169, primals_173, primals_175, primals_177, primals_179, primals_180, primals_183, primals_184, primals_185, primals_186, primals_189, primals_190, primals_191, primals_193, primals_194, primals_195, primals_197, primals_198, primals_201, primals_202, primals_203, primals_204, primals_205, primals_207, primals_209, primals_211, primals_213, primals_215, primals_219, primals_223, primals_225, primals_227, primals_229, primals_231, primals_235, primals_239, primals_243, primals_245, primals_247, primals_249, primals_251, primals_253, primals_255, primals_257, primals_259, primals_261, primals_263, primals_265, primals_267, primals_269, primals_270, primals_274, permute_1, addmm, permute_5, permute_6, addmm_3, permute_8, permute_9, permute_10, permute_11, addmm_8, permute_13, addmm_10, permute_15, permute_16, permute_17, permute_18, permute_19, permute_20, permute_21, permute_22, permute_23, permute_24, permute_25, permute_26, permute_27, addmm_24, permute_29, addmm_26, permute_31, permute_32, permute_33, permute_34, permute_35, addmm_32, permute_37, addmm_34, permute_39, cat_1, addmm_37, permute_46, permute_47, addmm_40, permute_49, permute_50, permute_51, permute_52, permute_53, permute_54, addmm_47, permute_56, addmm_49, permute_58, permute_59, permute_60, permute_61, permute_62, permute_63, permute_64, addmm_57, permute_66, addmm_59, permute_68, permute_69, permute_70, permute_71, permute_72, addmm_65, permute_74, addmm_67, permute_76, addmm_69, permute_78, permute_79, permute_80, cat_3, addmm_74, permute_87, permute_88, addmm_77, permute_90, permute_91, permute_92, permute_93, permute_94, permute_95, addmm_84, permute_97, addmm_86, permute_99, permute_100, permute_101, permute_102, permute_103, addmm_92, permute_105, addmm_94, permute_107, addmm_96, permute_109, permute_110, permute_111, permute_112, permute_113, permute_114, permute_115, permute_116, permute_117, permute_118, permute_119, permute_120, permute_121, cat_5, permute_123, permute_179, permute_187, permute_195, permute_219, permute_227, permute_255, permute_271, permute_282, permute_298, permute_306, permute_314, permute_338, permute_346, permute_378, permute_386, permute_414, permute_430, permute_441, permute_449, permute_457, permute_481, permute_489, permute_545, permute_553, permute_573, permute_589)
        