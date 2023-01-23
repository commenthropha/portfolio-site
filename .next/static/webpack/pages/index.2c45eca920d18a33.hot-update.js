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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n        const camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n            canvas: document.querySelector(\"#bg\")\n        });\n        renderer.setPixelRatio(window.devicePixelRatio);\n        const container = document.getElementById(\"container\");\n        renderer.setSize($(container).width(), $(container).height());\n        container.appendChild(renderer.domElement);\n        camera.position.setZ(30);\n        renderer.render(scene, camera);\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_4__.TorusGeometry(10, 3, 16, 100);\n        const material = new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({\n            color: 0xff6347,\n            wireframe: true\n        });\n        const torus = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, material);\n        scene.add(torus);\n        function animate() {\n            requestAnimationFrame(animate);\n            resizeCanvasToDisplaySize();\n            torus.rotation.x += 0.01;\n            torus.rotation.y += 0.005;\n            torus.rotation.z += 0.01;\n            renderer.render(scene, camera);\n        }\n        animate();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"root\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        id: \"bg\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Navbar, {}, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU9NQTtBQVBzQjtBQUVtQjtBQUNGO0FBQ1g7QUFDSDtBQUtoQixTQUFTTyxPQUFPOztJQUU3QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1HLFFBQVEsSUFBSUYsd0NBQVc7UUFDN0IsTUFBTUksU0FBUyxJQUFJSixvREFBdUIsQ0FBQyxJQUFJTSxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1FBQzVGLE1BQU1DLFdBQVcsSUFBSVQsZ0RBQW1CLENBQUM7WUFDdkNXLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztRQUNqQztRQUVBSixTQUFTSyxhQUFhLENBQUNSLE9BQU9TLGdCQUFnQjtRQUM5QyxNQUFNQyxZQUFZSixTQUFTSyxjQUFjLENBQUM7UUFDMUNSLFNBQVNTLE9BQU8sQ0FBQ0MsRUFBRUgsV0FBV0ksS0FBSyxJQUFJRCxFQUFFSCxXQUFXSyxNQUFNO1FBQzFETCxVQUFVTSxXQUFXLENBQUNiLFNBQVNjLFVBQVU7UUFDekNuQixPQUFPb0IsUUFBUSxDQUFDQyxJQUFJLENBQUM7UUFFckJoQixTQUFTaUIsTUFBTSxDQUFDeEIsT0FBT0U7UUFFdkIsTUFBTXVCLFdBQVcsSUFBSTNCLGdEQUFtQixDQUFDLElBQUksR0FBRyxJQUFJO1FBQ3BELE1BQU02QixXQUFXLElBQUk3QixvREFBdUIsQ0FBQztZQUFFK0IsT0FBTztZQUFVQyxXQUFXLElBQUk7UUFBQztRQUNoRixNQUFNQyxRQUFRLElBQUlqQyx1Q0FBVSxDQUFDMkIsVUFBVUU7UUFFdkMzQixNQUFNaUMsR0FBRyxDQUFDRjtRQUVWLFNBQVNHLFVBQVU7WUFDakJDLHNCQUFzQkQ7WUFFdEJFO1lBRUFMLE1BQU1NLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJO1lBQ3BCUCxNQUFNTSxRQUFRLENBQUNFLENBQUMsSUFBSTtZQUNwQlIsTUFBTU0sUUFBUSxDQUFDRyxDQUFDLElBQUk7WUFFcEJqQyxTQUFTaUIsTUFBTSxDQUFDeEIsT0FBT0U7UUFDekI7UUFFQWdDO0lBQ0Y7SUFJQSxxQkFDRTs7MEJBQ0UsOERBQUN6QyxrREFBSUE7O2tDQUNILDhEQUFDZ0Q7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUlDLElBQUc7O2tDQUNOLDhEQUFDeEM7d0JBQU93QyxJQUFHOzs7Ozs7a0NBQ1gsOERBQUN0RCwrQ0FBTUE7Ozs7O2tDQUNQLDhEQUFDRCwrQ0FBTUE7Ozs7Ozs7Ozs7Ozs7QUFJZixDQUFDO0dBdkR1Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgSGVhZGVyLCBOYXZiYXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJylcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICByZW5kZXJlci5zZXRTaXplKCQoY29udGFpbmVyKS53aWR0aCgpLCAkKGNvbnRhaW5lcikuaGVpZ2h0KCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0WigzMCk7XG5cbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDEwLCAzLCAxNiwgMTAwKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmNjM0Nywgd2lyZWZyYW1lOiB0cnVlIH0pO1xuICAgIGNvbnN0IHRvcnVzID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgIHNjZW5lLmFkZCh0b3J1cyk7XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gICAgICByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKCk7XG5cbiAgICAgIHRvcnVzLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgICAgIHRvcnVzLnJvdGF0aW9uLnkgKz0gMC4wMDU7XG4gICAgICB0b3J1cy5yb3RhdGlvbi56ICs9IDAuMDE7XG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCk7XG4gIH0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD0ncm9vdCc+XG4gICAgICAgIDxjYW52YXMgaWQ9J2JnJz48L2NhbnZhcz5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkhlYWRlciIsIk5hdmJhciIsInN0eWxlcyIsInVzZUVmZmVjdCIsIlRIUkVFIiwiSG9tZSIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRTaXplIiwiJCIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwicG9zaXRpb24iLCJzZXRaIiwicmVuZGVyIiwiZ2VvbWV0cnkiLCJUb3J1c0dlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwidG9ydXMiLCJNZXNoIiwiYWRkIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUiLCJyb3RhdGlvbiIsIngiLCJ5IiwieiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});