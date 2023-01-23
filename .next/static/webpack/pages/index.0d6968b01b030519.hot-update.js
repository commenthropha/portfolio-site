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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        var originalAspect = window.innerWidth / window.innerHeight;\n        var viewSize = 20;\n        const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();\n        const camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(75, originalAspect, 0.1, 1000);\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n            canvas: document.querySelector(\"#bg\")\n        });\n        renderer.setPixelRatio(window.devicePixelRatio);\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        camera.position.setZ(30);\n        renderer.render(scene, camera);\n        window.addEventListener(\"resize\", onWindowResize, false);\n        function onWindowResize() {\n            var aspect = window.innerWidth / window.innerHeight;\n            var change = originalAspect / aspect;\n            var newSize = viewSize * change;\n            camera.left = -aspect * newSize / 2;\n            camera.right = aspect * newSize / 2;\n            camera.top = newSize / 2;\n            camera.bottom = -newSize / 2;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        }\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_4__.TorusGeometry(10, 3, 16, 100);\n        const material = new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({\n            color: 0xff6347,\n            wireframe: true\n        });\n        const torus = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, material);\n        scene.add(torus);\n        function animate() {\n            requestAnimationFrame(animate);\n            torus.rotation.x += 0.01;\n            torus.rotation.y += 0.005;\n            torus.rotation.z += 0.01;\n            renderer.render(scene, camera);\n        }\n        animate();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"root\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        id: \"bg\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Navbar, {}, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                        fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anees/repos/portfolio-site/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU9NQTtBQVBzQjtBQUVtQjtBQUNGO0FBQ1g7QUFDSDtBQUtoQixTQUFTTyxPQUFPOztJQUU3QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUVkLElBQUlHLGlCQUFpQkMsT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXO1FBQzNELElBQUlDLFdBQVc7UUFHZixNQUFNQyxRQUFRLElBQUlQLHdDQUFXO1FBQzdCLE1BQU1TLFNBQVMsSUFBSVQsb0RBQXVCLENBQUMsSUFBSUUsZ0JBQWdCLEtBQUs7UUFDcEUsTUFBTVMsV0FBVyxJQUFJWCxnREFBbUIsQ0FBQztZQUN2Q2EsUUFBUUMsU0FBU0MsYUFBYSxDQUFDO1FBQ2pDO1FBRUFKLFNBQVNLLGFBQWEsQ0FBQ2IsT0FBT2MsZ0JBQWdCO1FBQzlDTixTQUFTTyxPQUFPLENBQUNmLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztRQUN0REksT0FBT1UsUUFBUSxDQUFDQyxJQUFJLENBQUM7UUFFckJULFNBQVNVLE1BQU0sQ0FBQ2QsT0FBT0U7UUFFdkJOLE9BQU9tQixnQkFBZ0IsQ0FBQyxVQUFVQyxnQkFBZ0IsS0FBSztRQUV2RCxTQUFTQSxpQkFBaUI7WUFDeEIsSUFBSUMsU0FBU3JCLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVztZQUNuRCxJQUFJb0IsU0FBU3ZCLGlCQUFpQnNCO1lBQzlCLElBQUlFLFVBQVVwQixXQUFXbUI7WUFDekJoQixPQUFPa0IsSUFBSSxHQUFHLENBQUNILFNBQVNFLFVBQVU7WUFDbENqQixPQUFPbUIsS0FBSyxHQUFHSixTQUFTRSxVQUFVO1lBQ2xDakIsT0FBT29CLEdBQUcsR0FBR0gsVUFBVTtZQUN2QmpCLE9BQU9xQixNQUFNLEdBQUcsQ0FBQ0osVUFBVTtZQUMzQmpCLE9BQU9zQixzQkFBc0I7WUFDN0JwQixTQUFTTyxPQUFPLENBQUNmLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztRQUN4RDtRQUVBLE1BQU0yQixXQUFXLElBQUloQyxnREFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNwRCxNQUFNa0MsV0FBVyxJQUFJbEMsb0RBQXVCLENBQUM7WUFBRW9DLE9BQU87WUFBVUMsV0FBVyxJQUFJO1FBQUM7UUFDaEYsTUFBTUMsUUFBUSxJQUFJdEMsdUNBQVUsQ0FBQ2dDLFVBQVVFO1FBRXZDM0IsTUFBTWlDLEdBQUcsQ0FBQ0Y7UUFFVixTQUFTRyxVQUFVO1lBQ2pCQyxzQkFBc0JEO1lBRXRCSCxNQUFNSyxRQUFRLENBQUNDLENBQUMsSUFBSTtZQUNwQk4sTUFBTUssUUFBUSxDQUFDRSxDQUFDLElBQUk7WUFDcEJQLE1BQU1LLFFBQVEsQ0FBQ0csQ0FBQyxJQUFJO1lBRXBCbkMsU0FBU1UsTUFBTSxDQUFDZCxPQUFPRTtRQUN6QjtRQUVBZ0M7SUFDRjtJQUlBLHFCQUNFOzswQkFDRSw4REFBQzlDLGtEQUFJQTs7a0NBQ0gsOERBQUNvRDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBSUMsSUFBRzs7a0NBQ04sOERBQUMxQzt3QkFBTzBDLElBQUc7Ozs7OztrQ0FDWCw4REFBQzFELCtDQUFNQTs7Ozs7a0NBQ1AsOERBQUNELCtDQUFNQTs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7R0F0RXVCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgeyBIZWFkZXIsIE5hdmJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICB2YXIgb3JpZ2luYWxBc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgdmlld1NpemUgPSAyMDtcblxuXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIG9yaWdpbmFsQXNwZWN0LCAwLjEsIDEwMDApO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcnKVxuICAgIH0pO1xuXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0WigzMCk7XG5cbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgdmFyIGFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgdmFyIGNoYW5nZSA9IG9yaWdpbmFsQXNwZWN0IC8gYXNwZWN0O1xuICAgICAgdmFyIG5ld1NpemUgPSB2aWV3U2l6ZSAqIGNoYW5nZTtcbiAgICAgIGNhbWVyYS5sZWZ0ID0gLWFzcGVjdCAqIG5ld1NpemUgLyAyO1xuICAgICAgY2FtZXJhLnJpZ2h0ID0gYXNwZWN0ICogbmV3U2l6ZSAvIDI7XG4gICAgICBjYW1lcmEudG9wID0gbmV3U2l6ZSAvIDI7XG4gICAgICBjYW1lcmEuYm90dG9tID0gLW5ld1NpemUgLyAyO1xuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSgxMCwgMywgMTYsIDEwMCk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjYzNDcsIHdpcmVmcmFtZTogdHJ1ZSB9KTtcbiAgICBjb25zdCB0b3J1cyA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICBzY2VuZS5hZGQodG9ydXMpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgICAgdG9ydXMucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgdG9ydXMucm90YXRpb24ueSArPSAwLjAwNTtcbiAgICAgIHRvcnVzLnJvdGF0aW9uLnogKz0gMC4wMTtcblxuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKTtcbiAgfSk7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPSdyb290Jz5cbiAgICAgICAgPGNhbnZhcyBpZD0nYmcnPjwvY2FudmFzPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiSGVhZGVyIiwiTmF2YmFyIiwic3R5bGVzIiwidXNlRWZmZWN0IiwiVEhSRUUiLCJIb21lIiwib3JpZ2luYWxBc3BlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ2aWV3U2l6ZSIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsInBvc2l0aW9uIiwic2V0WiIsInJlbmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsImNoYW5nZSIsIm5ld1NpemUiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiZ2VvbWV0cnkiLCJUb3J1c0dlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwidG9ydXMiLCJNZXNoIiwiYWRkIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvdGF0aW9uIiwieCIsInkiLCJ6IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});