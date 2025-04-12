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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Button/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(file.split(\"\\n\"), lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: word\n            });\n        }\n        console.log('pangrams:');\n        console.log(pangrams);\n        console.log('allOthers:');\n        console.log(allOthers);\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: {\n                    itemAlign: 'center'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    title: \"Find words\",\n                    onPress: handleClick,\n                    color: \"#428af5\"\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"].create({\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center'\n    },\n    headerText: {\n        fontSize: 48,\n        fontFamily: 'nyt-karnakcondensed',\n        color: 'white'\n    },\n    labelText: {\n        color: 'white',\n        fontStyle: 'italic'\n    },\n    listText: {\n        color: 'white'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1QztBQUMrQztBQUM3RDtBQUNNO0FBQ007QUFFckMsTUFBTVcsT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNsRCxNQUFNLENBQUNhLGFBQWFDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsSUFBSSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxlQUFlbUI7UUFDWCxJQUFJQyxPQUFPLE1BQU1YLG9EQUFtQjtRQUNwQyxJQUFJYSxVQUFVZCxnREFBZSxDQUFDWSxLQUFLSSxLQUFLLENBQUMsT0FBT1gsYUFBYUY7UUFFN0QsSUFBSyxJQUFJYyxJQUFJLEdBQUdBLElBQUlILFFBQVFQLFFBQVEsQ0FBQ1csTUFBTSxFQUFFRCxJQUFLO1lBQzlDLElBQUlFLFVBQVVMLFFBQVFQLFFBQVEsQ0FBQ1UsRUFBRTtZQUNqQ1YsU0FBU2EsSUFBSSxDQUFDO2dCQUNWQyxJQUFJdEIsZ0RBQUVBO2dCQUNOdUIsTUFBTUg7WUFDVjtRQUNKO1FBQ0EsSUFBSyxJQUFJRixJQUFJLEdBQUdBLElBQUlILFFBQVFMLFNBQVMsQ0FBQ1MsTUFBTSxFQUFFRCxJQUFLO1lBQy9DLElBQUlNLE9BQU9ULFFBQVFMLFNBQVMsQ0FBQ1EsRUFBRTtZQUMvQlIsVUFBVVcsSUFBSSxDQUFDO2dCQUNYQyxJQUFJdEIsZ0RBQUVBO2dCQUNOdUIsTUFBTUM7WUFDVjtRQUNKO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUNsQjtRQUNaaUIsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQ2hCO1FBRVpELFlBQVk7ZUFBSUQ7U0FBUztRQUN6QkcsYUFBYTtlQUFJRDtTQUFVO0lBQy9CO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDYix3REFBSUE7Z0JBQUM4QixPQUFPQSxNQUFNQyxVQUFVOzBCQUFFOzs7Ozs7MEJBQy9CLDhEQUFDakMsd0RBQUlBO2dCQUFDZ0MsT0FBTztvQkFBQ0UsV0FBVztnQkFBUTs7a0NBQzdCLDhEQUFDaEMsd0RBQUlBO3dCQUFDOEIsT0FBT0EsTUFBTUcsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2hDLHdEQUFTQTt3QkFDTjZCLE9BQU9BLE1BQU1JLEtBQUs7d0JBQ2xCQyxjQUFjekI7d0JBQ2QwQixPQUFPM0I7Ozs7OztrQ0FFWCw4REFBQ1Qsd0RBQUlBO3dCQUFDOEIsT0FBT0EsTUFBTUcsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2hDLHdEQUFTQTt3QkFDTjZCLE9BQU9BLE1BQU1JLEtBQUs7d0JBQ2xCQyxjQUFjM0I7d0JBQ2Q0QixPQUFPN0I7Ozs7Ozs7Ozs7OzswQkFHZiw4REFBQ1Qsd0RBQUlBOzBCQUNELDRFQUFDQyx3REFBTUE7b0JBQUNzQyxPQUFNO29CQUFhQyxTQUFTdkI7b0JBQWF3QixPQUFNOzs7Ozs7Ozs7OzswQkFFM0QsOERBQUN6Qyx3REFBSUE7O2tDQUNELDhEQUFDRSx3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDbkMsd0RBQUlBO2tDQUNELDRFQUFDSSx3REFBUUE7NEJBQ0xzQyxNQUFNN0I7NEJBQ044QixZQUFZO29DQUFDLEVBQUNDLElBQUksRUFBQztxREFBSyw4REFBQzFDLHdEQUFJQTtvQ0FBQzhCLE9BQU9BLE1BQU1hLFFBQVE7OENBQUdELEtBQUtoQixJQUFJOzs7Ozs7OzRCQUMvRGtCLGNBQWNGLENBQUFBLE9BQVFBLEtBQUtqQixFQUFFOzs7Ozs7Ozs7OztrQ0FHckMsOERBQUN6Qix3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDbkMsd0RBQUlBO2tDQUNELDRFQUFDSSx3REFBUUE7NEJBQ0xzQyxNQUFNM0I7NEJBQ040QixZQUFZO29DQUFDLEVBQUNDLElBQUksRUFBQztxREFBSyw4REFBQzFDLHdEQUFJQTtvQ0FBQzhCLE9BQU9BLE1BQU1hLFFBQVE7OENBQUdELEtBQUtoQixJQUFJOzs7Ozs7OzRCQUMvRGtCLGNBQWNGLENBQUFBLE9BQVFBLEtBQUtqQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJEO0dBM0VNbkI7S0FBQUE7QUE2RU4sTUFBTXdCLFFBQVFqQyx5REFBVUEsQ0FBQ2dELE1BQU0sQ0FBQztJQUM1QlgsT0FBTztRQUNIWSxpQkFBaUI7UUFDakJQLE9BQU87UUFDUFEsV0FBVztJQUNmO0lBQ0FoQixZQUFZO1FBQ1JpQixVQUFVO1FBQ1ZDLFlBQVk7UUFDWlYsT0FBTztJQUNYO0lBQ0FOLFdBQVc7UUFDUE0sT0FBTztRQUNQVyxXQUFXO0lBQ2Y7SUFDQVAsVUFBVTtRQUNOSixPQUFPO0lBQ1g7QUFDSjtBQUVBLGlFQUFlakMsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsiL2hvbWUvcmFuZGFsbC9wcm9qZWN0cy9ueXQtZ2FtZXMtaGVscGVyL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldywgQnV0dG9uLCBUZXh0LCBUZXh0SW5wdXQsIEZsYXRMaXN0IH0gZnJvbSAncmVhY3QtbmF0aXZlLXdlYidcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIlxuaW1wb3J0ICogYXMgYXBwIGZyb20gJy4vYXBwLmpzJ1xuaW1wb3J0ICogYXMgc2VydmVyIGZyb20gJy4vc2VydmVyLmpzJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjZW50ZXJUZXh0LCBjZW50ZXJPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xldHRlcnNUZXh0LCBsZXR0ZXJzT25DaGFuZ2VUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgbGV0IFtwYW5ncmFtcywgc2V0UGFuZ3JhbXNdID0gdXNlU3RhdGUoW10pXG4gICAgbGV0IFthbGxPdGhlcnMsIHNldEFsbE90aGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBsZXQgZmlsZSA9IGF3YWl0IHNlcnZlci5yZWFkV29yZExpc3QoKVxuICAgICAgICBsZXQgbWF0Y2hlcyA9IGFwcC5maW5kTWF0Y2hlcyhmaWxlLnNwbGl0KFwiXFxuXCIpLCBsZXR0ZXJzVGV4dCwgY2VudGVyVGV4dClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMucGFuZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5ncmFtID0gbWF0Y2hlcy5wYW5ncmFtc1tpXVxuICAgICAgICAgICAgcGFuZ3JhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogcGFuZ3JhbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMuYWxsT3RoZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IG1hdGNoZXMuYWxsT3RoZXJzW2ldXG4gICAgICAgICAgICBhbGxPdGhlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogd29yZCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygncGFuZ3JhbXM6JylcbiAgICAgICAgY29uc29sZS5sb2cocGFuZ3JhbXMpXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGxPdGhlcnM6JylcbiAgICAgICAgY29uc29sZS5sb2coYWxsT3RoZXJzKVxuXG4gICAgICAgIHNldFBhbmdyYW1zKFsuLi5wYW5ncmFtc10pXG4gICAgICAgIHNldEFsbE90aGVycyhbLi4uYWxsT3RoZXJzXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmhlYWRlclRleHR9PlNwZWxsaW5nIEJlZTwvVGV4dD5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7aXRlbUFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkxldHRlcnM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17bGV0dGVyc09uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xldHRlcnNUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+Q2VudGVyOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2NlbnRlck9uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbnRlclRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJGaW5kIHdvcmRzXCIgb25QcmVzcz17aGFuZGxlQ2xpY2t9IGNvbG9yPVwiIzQyOGFmNVwiLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PlBhbmdyYW1zOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF0TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cGFuZ3JhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoe2l0ZW19KSA9PiA8VGV4dCBzdHlsZT17c3R5bGUubGlzdFRleHR9PntpdGVtLnRleHR9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5BbGwgb3RoZXIgdmFsaWQgd29yZHM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXthbGxPdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoe2l0ZW19KSA9PiA8VGV4dCBzdHlsZT17c3R5bGUubGlzdFRleHR9PntpdGVtLnRleHR9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBpbnB1dDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0OiB7XG4gICAgICAgIGZvbnRTaXplOiA0OCxcbiAgICAgICAgZm9udEZhbWlseTogJ255dC1rYXJuYWtjb25kZW5zZWQnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgIH0sXG4gICAgbGFiZWxUZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnXG4gICAgfSxcbiAgICBsaXN0VGV4dDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3R5bGVTaGVldCIsIlZpZXciLCJCdXR0b24iLCJUZXh0IiwiVGV4dElucHV0IiwiRmxhdExpc3QiLCJ2NCIsImFwcCIsInNlcnZlciIsIlBhZ2UiLCJjZW50ZXJUZXh0IiwiY2VudGVyT25DaGFuZ2VUZXh0IiwibGV0dGVyc1RleHQiLCJsZXR0ZXJzT25DaGFuZ2VUZXh0IiwicGFuZ3JhbXMiLCJzZXRQYW5ncmFtcyIsImFsbE90aGVycyIsInNldEFsbE90aGVycyIsImhhbmRsZUNsaWNrIiwiZmlsZSIsInJlYWRXb3JkTGlzdCIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hlcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsInBhbmdyYW0iLCJwdXNoIiwiaWQiLCJ0ZXh0Iiwid29yZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImhlYWRlclRleHQiLCJpdGVtQWxpZ24iLCJsYWJlbFRleHQiLCJpbnB1dCIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwidGl0bGUiLCJvblByZXNzIiwiY29sb3IiLCJkYXRhIiwicmVuZGVySXRlbSIsIml0ZW0iLCJsaXN0VGV4dCIsImtleUV4dHJhY3RvciIsImNyZWF0ZSIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});