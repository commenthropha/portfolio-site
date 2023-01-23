"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n        const camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n            canvas: document.querySelector(\"#bg\")\n        });\n        renderer.setPixelRatio(window.devicePixelRatio);\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        camera.position.setZ(30);\n        renderer.render(scene, camera);\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_4__.TorusGeometry(10, 3, 16, 100);\n        const material = new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({\n            color: 0xff6347,\n            wireframe: true\n        });\n        const torus = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, material);\n        scene.add(torus);\n        function resizeCanvasToDisplaySize() {\n            const canvas = renderer.domElement;\n            const width = canvas.clientWidth;\n            const height = canvas.clientHeight;\n            // adjust displayBuffer size to match\n            if (canvas.width !== width || canvas.height !== height) {\n                renderer.setPixelRatio(window.devicePixelRatio);\n                renderer.setSize(width, height, false);\n                camera.aspect = width / height;\n                camera.updateProjectionMatrix();\n            }\n        }\n        function animate() {\n            requestAnimationFrame(animate);\n            torus.rotation.x += 0.01;\n            torus.rotation.y += 0.005;\n            torus.rotation.z += 0.01;\n            renderer.render(scene, camera);\n        }\n        animate();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"root\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        id: \"bg\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Navbar, {}, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU9NQTtBQVBzQjtBQUVtQjtBQUNGO0FBQ1g7QUFDSDtBQUtoQixTQUFTTyxPQUFPOztJQUU3QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1HLFFBQVEsSUFBSUYsd0NBQVc7UUFDN0IsTUFBTUksU0FBUyxJQUFJSixvREFBdUIsQ0FBQyxJQUFJTSxPQUFPQyxVQUFVLEdBQUNELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1FBQzFGLE1BQU1DLFdBQVcsSUFBSVQsZ0RBQW1CLENBQUM7WUFDdkNXLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztRQUNqQztRQUVBSixTQUFTSyxhQUFhLENBQUNSLE9BQU9TLGdCQUFnQjtRQUM5Q04sU0FBU08sT0FBTyxDQUFDVixPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVc7UUFDdERKLE9BQU9hLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO1FBRXJCVCxTQUFTVSxNQUFNLENBQUNqQixPQUFNRTtRQUV0QixNQUFNZ0IsV0FBVyxJQUFJcEIsZ0RBQW1CLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDcEQsTUFBTXNCLFdBQVcsSUFBSXRCLG9EQUF1QixDQUFDO1lBQUN3QixPQUFPO1lBQVVDLFdBQVcsSUFBSTtRQUFBO1FBQzlFLE1BQU1DLFFBQVEsSUFBSTFCLHVDQUFVLENBQUNvQixVQUFVRTtRQUV2Q3BCLE1BQU0wQixHQUFHLENBQUNGO1FBRVYsU0FBU0csNEJBQTRCO1lBQ25DLE1BQU1sQixTQUFTRixTQUFTcUIsVUFBVTtZQUNsQyxNQUFNQyxRQUFRcEIsT0FBT3FCLFdBQVc7WUFDaEMsTUFBTUMsU0FBU3RCLE9BQU91QixZQUFZO1lBRWxDLHFDQUFxQztZQUNyQyxJQUFJdkIsT0FBT29CLEtBQUssS0FBS0EsU0FBU3BCLE9BQU9zQixNQUFNLEtBQUtBLFFBQVE7Z0JBQ3REeEIsU0FBU0ssYUFBYSxDQUFDUixPQUFPUyxnQkFBZ0I7Z0JBQzlDTixTQUFTTyxPQUFPLENBQUNlLE9BQU9FLFFBQVEsS0FBSztnQkFDckM3QixPQUFPK0IsTUFBTSxHQUFHSixRQUFRRTtnQkFDeEI3QixPQUFPZ0Msc0JBQXNCO1lBQy9CLENBQUM7UUFDSDtRQUVBLFNBQVNDLFVBQVU7WUFDakJDLHNCQUFzQkQ7WUFFdEJYLE1BQU1hLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJO1lBQ3BCZCxNQUFNYSxRQUFRLENBQUNFLENBQUMsSUFBSTtZQUNwQmYsTUFBTWEsUUFBUSxDQUFDRyxDQUFDLElBQUk7WUFFcEJqQyxTQUFTVSxNQUFNLENBQUNqQixPQUFPRTtRQUN6QjtRQUVBaUM7SUFDRjtJQUlBLHFCQUNFOzswQkFDRSw4REFBQzFDLGtEQUFJQTs7a0NBQ0gsOERBQUNnRDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBSUMsSUFBSzs7a0NBQ1IsOERBQUN4Qzt3QkFBT3dDLElBQUs7Ozs7OztrQ0FDYiw4REFBQ3RELCtDQUFNQTs7Ozs7a0NBQ1AsOERBQUNELCtDQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7R0FqRXVCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgeyBIZWFkZXIsIE5hdmJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUgLHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJylcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldFooMzApO1xuXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLGNhbWVyYSk7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDEwLCAzLCAxNiwgMTAwKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4ZmY2MzQ3LCB3aXJlZnJhbWU6IHRydWV9KTtcbiAgICBjb25zdCB0b3J1cyA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICBzY2VuZS5hZGQodG9ydXMpO1xuXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSgpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgXG4gICAgICAvLyBhZGp1c3QgZGlzcGxheUJ1ZmZlciBzaXplIHRvIG1hdGNoXG4gICAgICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCwgZmFsc2UpO1xuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgICAgdG9ydXMucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgdG9ydXMucm90YXRpb24ueSArPSAwLjAwNTtcbiAgICAgIHRvcnVzLnJvdGF0aW9uLnogKz0gMC4wMTtcblxuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKTtcbiAgfSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkID0gJ3Jvb3QnPlxuICAgICAgICA8Y2FudmFzIGlkID0gJ2JnJz48L2NhbnZhcz5cbiAgICAgICAgPE5hdmJhci8+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJIZWFkZXIiLCJOYXZiYXIiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJUSFJFRSIsIkhvbWUiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJwb3NpdGlvbiIsInNldFoiLCJyZW5kZXIiLCJnZW9tZXRyeSIsIlRvcnVzR2VvbWV0cnkiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY29sb3IiLCJ3aXJlZnJhbWUiLCJ0b3J1cyIsIk1lc2giLCJhZGQiLCJyZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIiwiZG9tRWxlbWVudCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvdGF0aW9uIiwieCIsInkiLCJ6IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});