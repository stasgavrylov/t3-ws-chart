"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\n\n\n\nconst Home = ()=>{\n    const { mutateAsync: sendDataMutation  } = _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useMutation([\n        \"data.send-data\", \n    ]);\n    _utils_trpc__WEBPACK_IMPORTED_MODULE_2__.trpc.useSubscription([\n        \"data.onSendData\"\n    ], {\n        onNext: (value)=>{\n            console.log({\n                value\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Performant Graph Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stasgavrylov/WebDev/MyProjects/t3-ws-graph/src/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Demo app built on t3 stack w/ websockets\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stasgavrylov/WebDev/MyProjects/t3-ws-graph/src/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stasgavrylov/WebDev/MyProjects/t3-ws-graph/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stasgavrylov/WebDev/MyProjects/t3-ws-graph/src/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto flex flex-col items-center justify-center min-h-screen p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700\",\n                        children: \"Check this out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stasgavrylov/WebDev/MyProjects/t3-ws-graph/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            sendDataMutation({\n                                sendData: true\n                            });\n                        },\n                        children: \"Set WS connection\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stasgavrylov/WebDev/MyProjects/t3-ws-graph/src/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stasgavrylov/WebDev/MyProjects/t3-ws-graph/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQzZCO0FBQ1E7QUFRckMsTUFBTUUsSUFBSSxHQUFhLElBQU07SUFDM0IsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixHQUFFLEdBQUdILHlEQUFnQixDQUFDO1FBQ3pELGdCQUFnQjtLQUNqQixDQUFDO0lBRUZBLDZEQUFvQixDQUFDO1FBQUMsaUJBQWlCO0tBQUMsRUFBRTtRQUN4Q00sTUFBTSxFQUFFLENBQUNDLEtBQUssR0FBSztZQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0JBQUVGLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDeEI7S0FDRixDQUFDLENBQUM7SUFFSCxxQkFDRTs7MEJBQ0UsOERBQUNSLGtEQUFJOztrQ0FDSCw4REFBQ1csT0FBSztrQ0FBQywwQkFBd0I7Ozs7O2lDQUFRO2tDQUN2Qyw4REFBQ0MsTUFBSTt3QkFDSEMsSUFBSSxFQUFDLGFBQWE7d0JBQ2xCQyxPQUFPLEVBQUMsMENBQTBDOzs7OztpQ0FDbEQ7a0NBQ0YsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbEM7MEJBRVAsOERBQUNDLE1BQUk7Z0JBQUNDLFNBQVMsRUFBQyw4RUFBOEU7O2tDQUM1Riw4REFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLHFFQUFxRTtrQ0FBQyxnQkFFcEY7Ozs7O2lDQUFLO2tDQUNMLDhEQUFDRSxRQUFNO3dCQUNMQyxPQUFPLEVBQUUsSUFBTTs0QkFDYmxCLGdCQUFnQixDQUFDO2dDQUFFbUIsUUFBUSxFQUFFLElBQUk7NkJBQUUsQ0FBQyxDQUFDO3lCQUN0QztrQ0FDRixtQkFFRDs7Ozs7aUNBQVM7Ozs7Ozt5QkFDSjs7b0JBQ04sQ0FDSDtDQUNIO0FBRUQsaUVBQWVyQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90My13cy1ncmFwaC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHRycGMgfSBmcm9tIFwiLi4vdXRpbHMvdHJwY1wiO1xuXG50eXBlIFRlY2hub2xvZ3lDYXJkUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZG9jdW1lbnRhdGlvbjogc3RyaW5nO1xufTtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbXV0YXRlQXN5bmM6IHNlbmREYXRhTXV0YXRpb24gfSA9IHRycGMudXNlTXV0YXRpb24oW1xuICAgIFwiZGF0YS5zZW5kLWRhdGFcIixcbiAgXSk7XG5cbiAgdHJwYy51c2VTdWJzY3JpcHRpb24oW1wiZGF0YS5vblNlbmREYXRhXCJdLCB7XG4gICAgb25OZXh0OiAodmFsdWUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHsgdmFsdWUgfSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5QZXJmb3JtYW50IEdyYXBoIFByb2plY3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkRlbW8gYXBwIGJ1aWx0IG9uIHQzIHN0YWNrIHcvIHdlYnNvY2tldHNcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtWzVyZW1dIGxlYWRpbmctbm9ybWFsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICBDaGVjayB0aGlzIG91dFxuICAgICAgICA8L2gxPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2VuZERhdGFNdXRhdGlvbih7IHNlbmREYXRhOiB0cnVlIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTZXQgV1MgY29ubmVjdGlvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsInRycGMiLCJIb21lIiwibXV0YXRlQXN5bmMiLCJzZW5kRGF0YU11dGF0aW9uIiwidXNlTXV0YXRpb24iLCJ1c2VTdWJzY3JpcHRpb24iLCJvbk5leHQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInNlbmREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"trpc\": () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/react */ \"@trpc/react\");\n/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_react__WEBPACK_IMPORTED_MODULE_0__);\n// src/utils/trpc.ts\n\nconst trpc = (0,_trpc_react__WEBPACK_IMPORTED_MODULE_0__.createReactQueryHooks)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQkFBb0I7QUFFZ0M7QUFHN0MsTUFBTUMsSUFBSSxHQUFHRCxrRUFBcUIsRUFBYSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdDMtd3MtZ3JhcGgvLi9zcmMvdXRpbHMvdHJwYy50cz8xMWM4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy91dGlscy90cnBjLnRzXG5pbXBvcnQgdHlwZSB7IEFwcFJvdXRlciB9IGZyb20gXCIuLi9zZXJ2ZXIvcm91dGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVSZWFjdFF1ZXJ5SG9va3MgfSBmcm9tIFwiQHRycGMvcmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgaW5mZXJQcm9jZWR1cmVPdXRwdXQsIGluZmVyUHJvY2VkdXJlSW5wdXQgfSBmcm9tIFwiQHRycGMvc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCB0cnBjID0gY3JlYXRlUmVhY3RRdWVyeUhvb2tzPEFwcFJvdXRlcj4oKTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgaGVscGVyIG1ldGhvZCB0byBpbmZlciB0aGUgb3V0cHV0IG9mIGEgcXVlcnkgcmVzb2x2ZXJcbiAqIEBleGFtcGxlIHR5cGUgSGVsbG9PdXRwdXQgPSBpbmZlclF1ZXJ5T3V0cHV0PCdoZWxsbyc+XG4gKi9cbmV4cG9ydCB0eXBlIGluZmVyUXVlcnlPdXRwdXQ8XG4gIFRSb3V0ZUtleSBleHRlbmRzIGtleW9mIEFwcFJvdXRlcltcIl9kZWZcIl1bXCJxdWVyaWVzXCJdLFxuPiA9IGluZmVyUHJvY2VkdXJlT3V0cHV0PEFwcFJvdXRlcltcIl9kZWZcIl1bXCJxdWVyaWVzXCJdW1RSb3V0ZUtleV0+O1xuXG5leHBvcnQgdHlwZSBpbmZlclF1ZXJ5SW5wdXQ8XG4gIFRSb3V0ZUtleSBleHRlbmRzIGtleW9mIEFwcFJvdXRlcltcIl9kZWZcIl1bXCJxdWVyaWVzXCJdLFxuPiA9IGluZmVyUHJvY2VkdXJlSW5wdXQ8QXBwUm91dGVyW1wiX2RlZlwiXVtcInF1ZXJpZXNcIl1bVFJvdXRlS2V5XT47XG5cbmV4cG9ydCB0eXBlIGluZmVyTXV0YXRpb25PdXRwdXQ8XG4gIFRSb3V0ZUtleSBleHRlbmRzIGtleW9mIEFwcFJvdXRlcltcIl9kZWZcIl1bXCJtdXRhdGlvbnNcIl0sXG4+ID0gaW5mZXJQcm9jZWR1cmVPdXRwdXQ8QXBwUm91dGVyW1wiX2RlZlwiXVtcIm11dGF0aW9uc1wiXVtUUm91dGVLZXldPjtcblxuZXhwb3J0IHR5cGUgaW5mZXJNdXRhdGlvbklucHV0PFxuICBUUm91dGVLZXkgZXh0ZW5kcyBrZXlvZiBBcHBSb3V0ZXJbXCJfZGVmXCJdW1wibXV0YXRpb25zXCJdLFxuPiA9IGluZmVyUHJvY2VkdXJlSW5wdXQ8QXBwUm91dGVyW1wiX2RlZlwiXVtcIm11dGF0aW9uc1wiXVtUUm91dGVLZXldPjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWFjdFF1ZXJ5SG9va3MiLCJ0cnBjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "@trpc/react":
/*!******************************!*\
  !*** external "@trpc/react" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();