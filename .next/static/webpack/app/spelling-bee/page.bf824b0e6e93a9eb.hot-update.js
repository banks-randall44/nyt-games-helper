"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/spelling-bee/page",{

/***/ "(app-pages-browser)/./src/app/spelling-bee/page.jsx":
/*!***************************************!*\
  !*** ./src/app/spelling-bee/page.jsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Button/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    function handleClick() {\n        //let file = server.readWordList()\n        let ret = _server_js__WEBPACK_IMPORTED_MODULE_3__.testServerFunc();\n        console.log(ret);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: {\n                    itemAlign: 'center'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.input,\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    title: \"Find words\",\n                    onPress: handleClick,\n                    color: \"#428af5\"\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"AR3g/HwPBBFLQPmIGZGbWyN/qVk=\");\n_c = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"].create({\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center'\n    },\n    headerText: {\n        fontSize: 48,\n        fontFamily: 'nyt-karnakcondensed',\n        color: 'white'\n    },\n    labelText: {\n        color: 'white'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDNEM7QUFDcEQ7QUFDTTtBQUVyQyxNQUFNVSxPQUFPOztJQUNULE1BQU0sQ0FBQ0MsWUFBWUMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2xELE1BQU0sQ0FBQ1ksYUFBYUMsb0JBQW9CLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXBELFNBQVNjO1FBQ0wsa0NBQWtDO1FBQ2xDLElBQUlDLE1BQU1QLHNEQUFxQjtRQUMvQlMsUUFBUUMsR0FBRyxDQUFDSDtJQUNoQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ1gsd0RBQUlBO2dCQUFDZSxPQUFPQSxNQUFNQyxVQUFVOzBCQUFFOzs7Ozs7MEJBQy9CLDhEQUFDbEIsd0RBQUlBO2dCQUFDaUIsT0FBTztvQkFBQ0UsV0FBVztnQkFBUTs7a0NBQzdCLDhEQUFDakIsd0RBQUlBO3dCQUFDZSxPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDakIsd0RBQVNBO3dCQUNOYyxPQUFPQSxNQUFNSSxLQUFLO3dCQUNsQkMsY0FBY1g7d0JBQ2RZLE9BQU9iOzs7Ozs7a0NBRVgsOERBQUNSLHdEQUFJQTt3QkFBQ2UsT0FBT0EsTUFBTUcsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2pCLHdEQUFTQTt3QkFDTmMsT0FBT0EsTUFBTUksS0FBSzt3QkFDbEJDLGNBQWNiO3dCQUNkYyxPQUFPZjs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDUix3REFBSUE7MEJBQ0QsNEVBQUNDLHdEQUFNQTtvQkFBQ3VCLE9BQU07b0JBQWFDLFNBQVNiO29CQUFhYyxPQUFNOzs7Ozs7Ozs7OzswQkFFM0QsOERBQUMxQix3REFBSUE7O2tDQUNELDhEQUFDRSx3REFBSUE7d0JBQUNlLE9BQU9BLE1BQU1HLFNBQVM7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNwQix3REFBSUE7Ozs7O2tDQUNMLDhEQUFDRSx3REFBSUE7d0JBQUNlLE9BQU9BLE1BQU1HLFNBQVM7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNwQix3REFBSUE7Ozs7Ozs7Ozs7Ozs7QUFJckI7R0F0Q01PO0tBQUFBO0FBd0NOLE1BQU1VLFFBQVFsQix3REFBVUEsQ0FBQzRCLE1BQU0sQ0FBQztJQUM1Qk4sT0FBTztRQUNITyxpQkFBaUI7UUFDakJGLE9BQU87UUFDUEcsV0FBVztJQUNmO0lBQ0FYLFlBQVk7UUFDUlksVUFBVTtRQUNWQyxZQUFZO1FBQ1pMLE9BQU87SUFDWDtJQUNBTixXQUFXO1FBQ1BNLE9BQU87SUFDWDtBQUNKO0FBRUEsaUVBQWVuQixJQUFJQSxFQUFBIiwic291cmNlcyI6WyIvaG9tZS9yYW5kYWxsL3Byb2plY3RzL255dC1nYW1lcy1oZWxwZXIvc3JjL2FwcC9zcGVsbGluZy1iZWUvcGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3LCBCdXR0b24sIFRleHQsIFRleHRJbnB1dCwgQWxlcnQgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJ1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJy4vYXBwLmpzJ1xuaW1wb3J0ICogYXMgc2VydmVyIGZyb20gJy4vc2VydmVyLmpzJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjZW50ZXJUZXh0LCBjZW50ZXJPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xldHRlcnNUZXh0LCBsZXR0ZXJzT25DaGFuZ2VUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIC8vbGV0IGZpbGUgPSBzZXJ2ZXIucmVhZFdvcmRMaXN0KClcbiAgICAgICAgbGV0IHJldCA9IHNlcnZlci50ZXN0U2VydmVyRnVuYygpXG4gICAgICAgIGNvbnNvbGUubG9nKHJldClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmhlYWRlclRleHR9PlNwZWxsaW5nIEJlZTwvVGV4dD5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7aXRlbUFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkxldHRlcnM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17bGV0dGVyc09uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xldHRlcnNUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+Q2VudGVyOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2NlbnRlck9uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbnRlclRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJGaW5kIHdvcmRzXCIgb25QcmVzcz17aGFuZGxlQ2xpY2t9IGNvbG9yPVwiIzQyOGFmNVwiLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PlBhbmdyYW1zOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFZpZXc+PC9WaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkFsbCBvdGhlciB2YWxpZCB3b3JkczogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3PjwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBpbnB1dDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0OiB7XG4gICAgICAgIGZvbnRTaXplOiA0OCxcbiAgICAgICAgZm9udEZhbWlseTogJ255dC1rYXJuYWtjb25kZW5zZWQnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgIH0sXG4gICAgbGFiZWxUZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTdHlsZVNoZWV0IiwiVmlldyIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0SW5wdXQiLCJBbGVydCIsImFwcCIsInNlcnZlciIsIlBhZ2UiLCJjZW50ZXJUZXh0IiwiY2VudGVyT25DaGFuZ2VUZXh0IiwibGV0dGVyc1RleHQiLCJsZXR0ZXJzT25DaGFuZ2VUZXh0IiwiaGFuZGxlQ2xpY2siLCJyZXQiLCJ0ZXN0U2VydmVyRnVuYyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImhlYWRlclRleHQiLCJpdGVtQWxpZ24iLCJsYWJlbFRleHQiLCJpbnB1dCIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwidGl0bGUiLCJvblByZXNzIiwiY29sb3IiLCJjcmVhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});