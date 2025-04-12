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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Button/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log('pangrams:');\n    console.log(pangrams);\n    console.log('allOthers:');\n    console.log(allOthers);\n    async function handleClick() {\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(file.split(\"\\n\"), lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: word\n            });\n        }\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: {\n                    itemAlign: 'center'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    title: \"Find words\",\n                    onPress: handleClick,\n                    color: \"#428af5\"\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"].create({\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center'\n    },\n    headerText: {\n        fontSize: 48,\n        fontFamily: 'nyt-karnakcondensed',\n        color: 'white'\n    },\n    labelText: {\n        color: 'white',\n        fontStyle: 'italic'\n    },\n    listText: {\n        color: 'white'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1QztBQUMrQztBQUM3RDtBQUNNO0FBQ007QUFFckMsTUFBTVcsT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNsRCxNQUFNLENBQUNhLGFBQWFDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsSUFBSSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ21CLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNMO0lBQ1pJLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNIO0lBRVosZUFBZUk7UUFDWCxJQUFJQyxPQUFPLE1BQU1iLG9EQUFtQjtRQUNwQyxJQUFJZSxVQUFVaEIsZ0RBQWUsQ0FBQ2MsS0FBS0ksS0FBSyxDQUFDLE9BQU9iLGFBQWFGO1FBRTdELElBQUssSUFBSWdCLElBQUksR0FBR0EsSUFBSUgsUUFBUVQsUUFBUSxDQUFDYSxNQUFNLEVBQUVELElBQUs7WUFDOUMsSUFBSUUsVUFBVUwsUUFBUVQsUUFBUSxDQUFDWSxFQUFFO1lBQ2pDWixTQUFTZSxJQUFJLENBQUM7Z0JBQ1ZDLElBQUl4QixnREFBRUE7Z0JBQ055QixNQUFNSDtZQUNWO1FBQ0o7UUFDQSxJQUFLLElBQUlGLElBQUksR0FBR0EsSUFBSUgsUUFBUVAsU0FBUyxDQUFDVyxNQUFNLEVBQUVELElBQUs7WUFDL0MsSUFBSU0sT0FBT1QsUUFBUVAsU0FBUyxDQUFDVSxFQUFFO1lBQy9CVixVQUFVYSxJQUFJLENBQUM7Z0JBQ1hDLElBQUl4QixnREFBRUE7Z0JBQ055QixNQUFNQztZQUNWO1FBQ0o7UUFFQWpCLFlBQVk7ZUFBSUQ7U0FBUztRQUN6QkcsYUFBYTtlQUFJRDtTQUFVO0lBQy9CO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDYix3REFBSUE7Z0JBQUM4QixPQUFPQSxNQUFNQyxVQUFVOzBCQUFFOzs7Ozs7MEJBQy9CLDhEQUFDakMsd0RBQUlBO2dCQUFDZ0MsT0FBTztvQkFBQ0UsV0FBVztnQkFBUTs7a0NBQzdCLDhEQUFDaEMsd0RBQUlBO3dCQUFDOEIsT0FBT0EsTUFBTUcsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2hDLHdEQUFTQTt3QkFDTjZCLE9BQU9BLE1BQU1JLEtBQUs7d0JBQ2xCQyxjQUFjekI7d0JBQ2QwQixPQUFPM0I7Ozs7OztrQ0FFWCw4REFBQ1Qsd0RBQUlBO3dCQUFDOEIsT0FBT0EsTUFBTUcsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2hDLHdEQUFTQTt3QkFDTjZCLE9BQU9BLE1BQU1JLEtBQUs7d0JBQ2xCQyxjQUFjM0I7d0JBQ2Q0QixPQUFPN0I7Ozs7Ozs7Ozs7OzswQkFHZiw4REFBQ1Qsd0RBQUlBOzBCQUNELDRFQUFDQyx3REFBTUE7b0JBQUNzQyxPQUFNO29CQUFhQyxTQUFTckI7b0JBQWFzQixPQUFNOzs7Ozs7Ozs7OzswQkFFM0QsOERBQUN6Qyx3REFBSUE7O2tDQUNELDhEQUFDRSx3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDbkMsd0RBQUlBO2tDQUNELDRFQUFDSSx3REFBUUE7NEJBQ0xzQyxNQUFNN0I7NEJBQ044QixZQUFZO29DQUFDLEVBQUNDLElBQUksRUFBQztxREFBSyw4REFBQzFDLHdEQUFJQTtvQ0FBQzhCLE9BQU9BLE1BQU1hLFFBQVE7OENBQUdELEtBQUtkLElBQUk7Ozs7Ozs7NEJBQy9EZ0IsY0FBY0YsQ0FBQUEsT0FBUUEsS0FBS2YsRUFBRTs7Ozs7Ozs7Ozs7a0NBR3JDLDhEQUFDM0Isd0RBQUlBO3dCQUFDOEIsT0FBT0EsTUFBTUcsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ25DLHdEQUFJQTtrQ0FDRCw0RUFBQ0ksd0RBQVFBOzRCQUNMc0MsTUFBTTNCOzRCQUNONEIsWUFBWTtvQ0FBQyxFQUFDQyxJQUFJLEVBQUM7cURBQUssOERBQUMxQyx3REFBSUE7b0NBQUM4QixPQUFPQSxNQUFNYSxRQUFROzhDQUFHRCxLQUFLZCxJQUFJOzs7Ozs7OzRCQUMvRGdCLGNBQWNGLENBQUFBLE9BQVFBLEtBQUtmLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0EzRU1yQjtLQUFBQTtBQTZFTixNQUFNd0IsUUFBUWpDLHlEQUFVQSxDQUFDZ0QsTUFBTSxDQUFDO0lBQzVCWCxPQUFPO1FBQ0hZLGlCQUFpQjtRQUNqQlAsT0FBTztRQUNQUSxXQUFXO0lBQ2Y7SUFDQWhCLFlBQVk7UUFDUmlCLFVBQVU7UUFDVkMsWUFBWTtRQUNaVixPQUFPO0lBQ1g7SUFDQU4sV0FBVztRQUNQTSxPQUFPO1FBQ1BXLFdBQVc7SUFDZjtJQUNBUCxVQUFVO1FBQ05KLE9BQU87SUFDWDtBQUNKO0FBRUEsaUVBQWVqQyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyIvaG9tZS9yYW5kYWxsL3Byb2plY3RzL255dC1nYW1lcy1oZWxwZXIvc3JjL2FwcC9zcGVsbGluZy1iZWUvcGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3LCBCdXR0b24sIFRleHQsIFRleHRJbnB1dCwgRmxhdExpc3QgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJ1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi9hcHAuanMnXG5pbXBvcnQgKiBhcyBzZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXIuanMnXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NlbnRlclRleHQsIGNlbnRlck9uQ2hhbmdlVGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbGV0dGVyc1RleHQsIGxldHRlcnNPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG5cbiAgICBsZXQgW3BhbmdyYW1zLCBzZXRQYW5ncmFtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBsZXQgW2FsbE90aGVycywgc2V0QWxsT3RoZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc29sZS5sb2coJ3BhbmdyYW1zOicpXG4gICAgY29uc29sZS5sb2cocGFuZ3JhbXMpXG4gICAgY29uc29sZS5sb2coJ2FsbE90aGVyczonKVxuICAgIGNvbnNvbGUubG9nKGFsbE90aGVycylcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBsZXQgZmlsZSA9IGF3YWl0IHNlcnZlci5yZWFkV29yZExpc3QoKVxuICAgICAgICBsZXQgbWF0Y2hlcyA9IGFwcC5maW5kTWF0Y2hlcyhmaWxlLnNwbGl0KFwiXFxuXCIpLCBsZXR0ZXJzVGV4dCwgY2VudGVyVGV4dClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMucGFuZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5ncmFtID0gbWF0Y2hlcy5wYW5ncmFtc1tpXVxuICAgICAgICAgICAgcGFuZ3JhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogcGFuZ3JhbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMuYWxsT3RoZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IG1hdGNoZXMuYWxsT3RoZXJzW2ldXG4gICAgICAgICAgICBhbGxPdGhlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogd29yZCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXRQYW5ncmFtcyhbLi4ucGFuZ3JhbXNdKVxuICAgICAgICBzZXRBbGxPdGhlcnMoWy4uLmFsbE90aGVyc10pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5oZWFkZXJUZXh0fT5TcGVsbGluZyBCZWU8L1RleHQ+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17e2l0ZW1BbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5MZXR0ZXJzOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2xldHRlcnNPbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsZXR0ZXJzVGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkNlbnRlcjogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VUZXh0PXtjZW50ZXJPbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjZW50ZXJUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiRmluZCB3b3Jkc1wiIG9uUHJlc3M9e2hhbmRsZUNsaWNrfSBjb2xvcj1cIiM0MjhhZjVcIi8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5QYW5ncmFtczogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3BhbmdyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHtpdGVtfSkgPT4gPFRleHQgc3R5bGU9e3N0eWxlLmxpc3RUZXh0fT57aXRlbS50ZXh0fTwvVGV4dD59XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlFeHRyYWN0b3I9e2l0ZW0gPT4gaXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+QWxsIG90aGVyIHZhbGlkIHdvcmRzOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF0TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17YWxsT3RoZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHtpdGVtfSkgPT4gPFRleHQgc3R5bGU9e3N0eWxlLmxpc3RUZXh0fT57aXRlbS50ZXh0fTwvVGV4dD59XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlFeHRyYWN0b3I9e2l0ZW0gPT4gaXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGUgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgaW5wdXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgaGVhZGVyVGV4dDoge1xuICAgICAgICBmb250U2l6ZTogNDgsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdueXQta2FybmFrY29uZGVuc2VkJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9LFxuICAgIGxhYmVsVGV4dDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJ1xuICAgIH0sXG4gICAgbGlzdFRleHQ6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlU2hlZXQiLCJWaWV3IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRJbnB1dCIsIkZsYXRMaXN0IiwidjQiLCJhcHAiLCJzZXJ2ZXIiLCJQYWdlIiwiY2VudGVyVGV4dCIsImNlbnRlck9uQ2hhbmdlVGV4dCIsImxldHRlcnNUZXh0IiwibGV0dGVyc09uQ2hhbmdlVGV4dCIsInBhbmdyYW1zIiwic2V0UGFuZ3JhbXMiLCJhbGxPdGhlcnMiLCJzZXRBbGxPdGhlcnMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJmaWxlIiwicmVhZFdvcmRMaXN0IiwibWF0Y2hlcyIsImZpbmRNYXRjaGVzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicGFuZ3JhbSIsInB1c2giLCJpZCIsInRleHQiLCJ3b3JkIiwic3R5bGUiLCJoZWFkZXJUZXh0IiwiaXRlbUFsaWduIiwibGFiZWxUZXh0IiwiaW5wdXQiLCJvbkNoYW5nZVRleHQiLCJ2YWx1ZSIsInRpdGxlIiwib25QcmVzcyIsImNvbG9yIiwiZGF0YSIsInJlbmRlckl0ZW0iLCJpdGVtIiwibGlzdFRleHQiLCJrZXlFeHRyYWN0b3IiLCJjcmVhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});