/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/wasm_demo_bg.wasm": function() {
/******/ 			return {
/******/ 				"./wasm_demo_bg.js": {
/******/ 					"__wbg_beginPath_0948db80d0d23ce3": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_beginPath_0948db80d0d23ce3"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_073fc10b086c1727": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_setstrokeStyle_073fc10b086c1727"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_moveTo_b0d9695c44d309f0": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_moveTo_b0d9695c44d309f0"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_lineTo_b902f35217ff96ab": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_lineTo_b902f35217ff96ab"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_stroke_6e1b85c72caa53ea": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_stroke_6e1b85c72caa53ea"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_e7c1f827057f6584": function() {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_self_e7c1f827057f6584"]();
/******/ 					},
/******/ 					"__wbg_window_a09ec664e14b1b81": function() {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_window_a09ec664e14b1b81"]();
/******/ 					},
/******/ 					"__wbg_globalThis_87cbb8506fecf3a9": function() {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_globalThis_87cbb8506fecf3a9"]();
/******/ 					},
/******/ 					"__wbg_global_c85a9259e621f3db": function() {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_global_c85a9259e621f3db"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_2b8b6bd7753c76ba": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_newnoargs_2b8b6bd7753c76ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_95d1ea488d03e4e8": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_call_95d1ea488d03e4e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_029a979dfb73aa17": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_stringify_029a979dfb73aa17"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e266f02eee43b570": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_instanceof_Window_e266f02eee43b570"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_950215a728589a2d": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_document_950215a728589a2d"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_be46234bb33edd63": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_body_be46234bb33edd63"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_e2a0e21263eb5416": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_createElement_e2a0e21263eb5416"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_settextContent_19dc6a6146112f16": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_settextContent_19dc6a6146112f16"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_79c9562d32d05e66": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_setAttribute_79c9562d32d05e66"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_append_a27bbb15a194e574": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_append_a27bbb15a194e574"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_9e442d53bb553421": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_instanceof_HtmlElement_9e442d53bb553421"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetHeight_31cde48f5fbc2368": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_offsetHeight_31cde48f5fbc2368"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetWidth_56caa7d0f7e171a2": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_offsetWidth_56caa7d0f7e171a2"](p0i32);
/******/ 					},
/******/ 					"__wbg_remove_b18bc815630b67ec": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_remove_b18bc815630b67ec"](p0i32);
/******/ 					},
/******/ 					"__wbg_setlineWidth_2b5a5da5c4bf4084": function(p0i32,p1f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_setlineWidth_2b5a5da5c4bf4084"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_save_bab01f1913b2e819": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_save_bab01f1913b2e819"](p0i32);
/******/ 					},
/******/ 					"__wbg_translate_775b28f4f71b0a4a": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_translate_775b28f4f71b0a4a"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_rotate_6b035a321d3e851f": function(p0i32,p1f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_rotate_6b035a321d3e851f"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_settextBaseline_1415eff4e466c559": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_settextBaseline_1415eff4e466c559"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_settextAlign_aefb62085068cf7c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_settextAlign_aefb62085068cf7c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_b065cfad34a78974": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_setfillStyle_b065cfad34a78974"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfont_5ff88bdcda655052": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_setfont_5ff88bdcda655052"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_fillText_1c8a94ba170ba3ee": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_fillText_1c8a94ba170ba3ee"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_restore_38b3fc1b40a29757": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_restore_38b3fc1b40a29757"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_3ae404b649cf9287": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_getContext_3ae404b649cf9287"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_a40e21a22129b197": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_width_a40e21a22129b197"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_98d51321254345a5": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_height_98d51321254345a5"](p0i32);
/******/ 					},
/******/ 					"__wbg_fillRect_f63ba845233f000a": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_fillRect_f63ba845233f000a"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_arc_37174ad97fea93a9": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_arc_37174ad97fea93a9"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_fill_ae4121c3dafa1f99": function(p0i32) {
/******/ 						return installedModules["../pkg/wasm_demo_bg.js"].exports["__wbg_fill_ae4121c3dafa1f99"](p0i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 		"./node_modules/wasm-demo/wasm_demo_bg.wasm": function() {
/******/ 			return {
/******/ 				"./wasm_demo_bg.js": {
/******/ 					"__wbg_beginPath_0948db80d0d23ce3": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_beginPath_0948db80d0d23ce3"](p0i32);
/******/ 					},
/******/ 					"__wbg_setstrokeStyle_073fc10b086c1727": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_setstrokeStyle_073fc10b086c1727"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_moveTo_b0d9695c44d309f0": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_moveTo_b0d9695c44d309f0"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_lineTo_b902f35217ff96ab": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_lineTo_b902f35217ff96ab"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_stroke_6e1b85c72caa53ea": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_stroke_6e1b85c72caa53ea"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_e7c1f827057f6584": function() {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_self_e7c1f827057f6584"]();
/******/ 					},
/******/ 					"__wbg_window_a09ec664e14b1b81": function() {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_window_a09ec664e14b1b81"]();
/******/ 					},
/******/ 					"__wbg_globalThis_87cbb8506fecf3a9": function() {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_globalThis_87cbb8506fecf3a9"]();
/******/ 					},
/******/ 					"__wbg_global_c85a9259e621f3db": function() {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_global_c85a9259e621f3db"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_2b8b6bd7753c76ba": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_newnoargs_2b8b6bd7753c76ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_95d1ea488d03e4e8": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_call_95d1ea488d03e4e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_029a979dfb73aa17": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_stringify_029a979dfb73aa17"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e266f02eee43b570": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_instanceof_Window_e266f02eee43b570"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_950215a728589a2d": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_document_950215a728589a2d"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_be46234bb33edd63": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_body_be46234bb33edd63"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_e2a0e21263eb5416": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_createElement_e2a0e21263eb5416"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_settextContent_19dc6a6146112f16": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_settextContent_19dc6a6146112f16"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_79c9562d32d05e66": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_setAttribute_79c9562d32d05e66"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_append_a27bbb15a194e574": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_append_a27bbb15a194e574"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_9e442d53bb553421": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_instanceof_HtmlElement_9e442d53bb553421"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetHeight_31cde48f5fbc2368": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_offsetHeight_31cde48f5fbc2368"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetWidth_56caa7d0f7e171a2": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_offsetWidth_56caa7d0f7e171a2"](p0i32);
/******/ 					},
/******/ 					"__wbg_remove_b18bc815630b67ec": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_remove_b18bc815630b67ec"](p0i32);
/******/ 					},
/******/ 					"__wbg_setlineWidth_2b5a5da5c4bf4084": function(p0i32,p1f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_setlineWidth_2b5a5da5c4bf4084"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_save_bab01f1913b2e819": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_save_bab01f1913b2e819"](p0i32);
/******/ 					},
/******/ 					"__wbg_translate_775b28f4f71b0a4a": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_translate_775b28f4f71b0a4a"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_rotate_6b035a321d3e851f": function(p0i32,p1f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_rotate_6b035a321d3e851f"](p0i32,p1f64);
/******/ 					},
/******/ 					"__wbg_settextBaseline_1415eff4e466c559": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_settextBaseline_1415eff4e466c559"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_settextAlign_aefb62085068cf7c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_settextAlign_aefb62085068cf7c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setfillStyle_b065cfad34a78974": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_setfillStyle_b065cfad34a78974"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setfont_5ff88bdcda655052": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_setfont_5ff88bdcda655052"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_fillText_1c8a94ba170ba3ee": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_fillText_1c8a94ba170ba3ee"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_restore_38b3fc1b40a29757": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_restore_38b3fc1b40a29757"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_3ae404b649cf9287": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_getContext_3ae404b649cf9287"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_a40e21a22129b197": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_width_a40e21a22129b197"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_98d51321254345a5": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_height_98d51321254345a5"](p0i32);
/******/ 					},
/******/ 					"__wbg_fillRect_f63ba845233f000a": function(p0i32,p1f64,p2f64,p3f64,p4f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_fillRect_f63ba845233f000a"](p0i32,p1f64,p2f64,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_arc_37174ad97fea93a9": function(p0i32,p1f64,p2f64,p3f64,p4f64,p5f64) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_arc_37174ad97fea93a9"](p0i32,p1f64,p2f64,p3f64,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_fill_ae4121c3dafa1f99": function(p0i32) {
/******/ 						return installedModules["./node_modules/wasm-demo/wasm_demo_bg.js"].exports["__wbg_fill_ae4121c3dafa1f99"](p0i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["../pkg/wasm_demo_bg.wasm"],"2":["./node_modules/wasm-demo/wasm_demo_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/wasm_demo_bg.wasm":"3df12ed2779bb205a88d","./node_modules/wasm-demo/wasm_demo_bg.wasm":"ef27fd44ba679ecb331c"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\ninit();\n\nasync function init() {\n  if (typeof process == \"object\") {\n    // We run in the npm/webpack environment.\n    const [{ Chart }, { main, setup }] = await Promise.all([\n      __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! wasm-demo */ \"./node_modules/wasm-demo/wasm_demo.js\")),\n      __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\")),\n    ]);\n    setup(Chart);\n    main();\n  } else {\n    const [{ Chart, default: init }, { main, setup }] = await Promise.all([\n      __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../pkg/wasm_demo */ \"../pkg/wasm_demo.js\")),\n      __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\")),\n    ]);\n    await init();\n    setup(Chart);\n    main();\n  }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body, main {\\n    width: 100%;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    margin: auto;\\n    max-width: 800px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n@media (max-width: 800px) {\\n    body {\\n        padding: 10px;\\n        box-sizing: border-box;\\n    }\\n}\\n\\nmain {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n#coord, #status {\\n    color: grey;\\n    font-size: 10px;\\n    height: 15px\\n}\\n\\n#control {\\n    margin-top: 1em;\\n}\\n\\n#control label {\\n    font-weight: bold;\\n    margin-right: 1em;\\n}\\n\\n#control select {\\n    padding: 0.25em 0.5em;\\n}\\n\\nfooter {\\n    margin-top: 2em;\\n    font-size: 12px;\\n    text-align: center;\\n}\\n\\n.hide {\\n\\tvisibility: hidden;\\n\\theight: 0px;\\n}\\n\\n#coefficients {\\n  display: flex;\\n  flex-direction: column;\\n  \\n}\\n\\n#coefficients-container > * {\\n  margin: 4px;\\n}\\n\\n#coefficients > div {\\n  margin-bottom: 4px;\\n}\\n\\n#coefficients > div > input {\\n  margin-right: 4px;\\n} \\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });