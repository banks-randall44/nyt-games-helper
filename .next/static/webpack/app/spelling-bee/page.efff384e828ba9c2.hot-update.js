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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        pangrams = [];\n        allOthers = [];\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(file.split(\"\\n\"), lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: word\n            });\n        }\n        console.log('pangrams:');\n        console.log(pangrams);\n        console.log('allOthers:');\n        console.log(allOthers);\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: {\n                    itemAlign: 'center'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    title: \"Find words\",\n                    onPress: handleClick,\n                    style: style.button\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"].create({\n    button: {\n        //backgroundColor: \"#428af5\"\n        color: \"black\"\n    },\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center',\n        width: 100\n    },\n    headerText: {\n        fontSize: 48,\n        fontFamily: 'nyt-karnakcondensed',\n        color: 'white'\n    },\n    labelText: {\n        color: 'white',\n        fontStyle: 'italic'\n    },\n    listText: {\n        color: 'white'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1QztBQUN5RDtBQUN2RTtBQUNNO0FBQ007QUFFckMsTUFBTVcsT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNsRCxNQUFNLENBQUNhLGFBQWFDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsSUFBSSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxlQUFlbUI7UUFDWEosV0FBVyxFQUFFO1FBQ2JFLFlBQVksRUFBRTtRQUVkLElBQUlHLE9BQU8sTUFBTVgsb0RBQW1CO1FBQ3BDLElBQUlhLFVBQVVkLGdEQUFlLENBQUNZLEtBQUtJLEtBQUssQ0FBQyxPQUFPWCxhQUFhRjtRQUU3RCxJQUFLLElBQUljLElBQUksR0FBR0EsSUFBSUgsUUFBUVAsUUFBUSxDQUFDVyxNQUFNLEVBQUVELElBQUs7WUFDOUMsSUFBSUUsVUFBVUwsUUFBUVAsUUFBUSxDQUFDVSxFQUFFO1lBQ2pDVixTQUFTYSxJQUFJLENBQUM7Z0JBQ1ZDLElBQUl0QixnREFBRUE7Z0JBQ051QixNQUFNSDtZQUNWO1FBQ0o7UUFDQSxJQUFLLElBQUlGLElBQUksR0FBR0EsSUFBSUgsUUFBUUwsU0FBUyxDQUFDUyxNQUFNLEVBQUVELElBQUs7WUFDL0MsSUFBSU0sT0FBT1QsUUFBUUwsU0FBUyxDQUFDUSxFQUFFO1lBQy9CUixVQUFVVyxJQUFJLENBQUM7Z0JBQ1hDLElBQUl0QixnREFBRUE7Z0JBQ051QixNQUFNQztZQUNWO1FBQ0o7UUFFQUMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQ2xCO1FBQ1ppQixRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDaEI7UUFFWkQsWUFBWTtlQUFJRDtTQUFTO1FBQ3pCRyxhQUFhO2VBQUlEO1NBQVU7SUFDL0I7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNiLHdEQUFJQTtnQkFBQzhCLE9BQU9BLE1BQU1DLFVBQVU7MEJBQUU7Ozs7OzswQkFDL0IsOERBQUNqQyx3REFBSUE7Z0JBQUNnQyxPQUFPO29CQUFDRSxXQUFXO2dCQUFROztrQ0FDN0IsOERBQUNoQyx3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDaEMsd0RBQVNBO3dCQUNONkIsT0FBT0EsTUFBTUksS0FBSzt3QkFDbEJDLGNBQWN6Qjt3QkFDZDBCLE9BQU8zQjs7Ozs7O2tDQUVYLDhEQUFDVCx3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDaEMsd0RBQVNBO3dCQUNONkIsT0FBT0EsTUFBTUksS0FBSzt3QkFDbEJDLGNBQWMzQjt3QkFDZDRCLE9BQU83Qjs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDVCx3REFBSUE7MEJBQ0QsNEVBQUNDLHdEQUFnQkE7b0JBQUNzQyxPQUFNO29CQUFhQyxTQUFTdkI7b0JBQWFlLE9BQU9BLE1BQU1TLE1BQU07Ozs7Ozs7Ozs7OzBCQUVsRiw4REFBQ3pDLHdEQUFJQTs7a0NBQ0QsOERBQUNFLHdEQUFJQTt3QkFBQzhCLE9BQU9BLE1BQU1HLFNBQVM7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNuQyx3REFBSUE7a0NBQ0QsNEVBQUNJLHdEQUFRQTs0QkFDTHNDLE1BQU03Qjs0QkFDTjhCLFlBQVk7b0NBQUMsRUFBQ0MsSUFBSSxFQUFDO3FEQUFLLDhEQUFDMUMsd0RBQUlBO29DQUFDOEIsT0FBT0EsTUFBTWEsUUFBUTs4Q0FBR0QsS0FBS2hCLElBQUk7Ozs7Ozs7NEJBQy9Ea0IsY0FBY0YsQ0FBQUEsT0FBUUEsS0FBS2pCLEVBQUU7Ozs7Ozs7Ozs7O2tDQUdyQyw4REFBQ3pCLHdEQUFJQTt3QkFBQzhCLE9BQU9BLE1BQU1HLFNBQVM7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNuQyx3REFBSUE7a0NBQ0QsNEVBQUNJLHdEQUFRQTs0QkFDTHNDLE1BQU0zQjs0QkFDTjRCLFlBQVk7b0NBQUMsRUFBQ0MsSUFBSSxFQUFDO3FEQUFLLDhEQUFDMUMsd0RBQUlBO29DQUFDOEIsT0FBT0EsTUFBTWEsUUFBUTs4Q0FBR0QsS0FBS2hCLElBQUk7Ozs7Ozs7NEJBQy9Ea0IsY0FBY0YsQ0FBQUEsT0FBUUEsS0FBS2pCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0E5RU1uQjtLQUFBQTtBQWdGTixNQUFNd0IsUUFBUWpDLHlEQUFVQSxDQUFDZ0QsTUFBTSxDQUFDO0lBQzVCTixRQUFRO1FBQ0osNEJBQTRCO1FBQzVCTyxPQUFPO0lBQ1g7SUFDQVosT0FBTztRQUNIYSxpQkFBaUI7UUFDakJELE9BQU87UUFDUEUsV0FBVztRQUNYQyxPQUFPO0lBQ1g7SUFDQWxCLFlBQVk7UUFDUm1CLFVBQVU7UUFDVkMsWUFBWTtRQUNaTCxPQUFPO0lBQ1g7SUFDQWIsV0FBVztRQUNQYSxPQUFPO1FBQ1BNLFdBQVc7SUFDZjtJQUNBVCxVQUFVO1FBQ05HLE9BQU87SUFDWDtBQUNKO0FBRUEsaUVBQWV4QyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyIvaG9tZS9yYW5kYWxsL3Byb2plY3RzL255dC1nYW1lcy1oZWxwZXIvc3JjL2FwcC9zcGVsbGluZy1iZWUvcGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3LCBUb3VjaGFibGVPcGFjaXR5LCBUZXh0LCBUZXh0SW5wdXQsIEZsYXRMaXN0IH0gZnJvbSAncmVhY3QtbmF0aXZlLXdlYidcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIlxuaW1wb3J0ICogYXMgYXBwIGZyb20gJy4vYXBwLmpzJ1xuaW1wb3J0ICogYXMgc2VydmVyIGZyb20gJy4vc2VydmVyLmpzJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjZW50ZXJUZXh0LCBjZW50ZXJPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xldHRlcnNUZXh0LCBsZXR0ZXJzT25DaGFuZ2VUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgbGV0IFtwYW5ncmFtcywgc2V0UGFuZ3JhbXNdID0gdXNlU3RhdGUoW10pXG4gICAgbGV0IFthbGxPdGhlcnMsIHNldEFsbE90aGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBwYW5ncmFtcyA9IFtdXG4gICAgICAgIGFsbE90aGVycyA9IFtdXG5cbiAgICAgICAgbGV0IGZpbGUgPSBhd2FpdCBzZXJ2ZXIucmVhZFdvcmRMaXN0KClcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBhcHAuZmluZE1hdGNoZXMoZmlsZS5zcGxpdChcIlxcblwiKSwgbGV0dGVyc1RleHQsIGNlbnRlclRleHQpXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLnBhbmdyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFuZ3JhbSA9IG1hdGNoZXMucGFuZ3JhbXNbaV1cbiAgICAgICAgICAgIHBhbmdyYW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiB2NCgpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHBhbmdyYW1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmFsbE90aGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSBtYXRjaGVzLmFsbE90aGVyc1tpXVxuICAgICAgICAgICAgYWxsT3RoZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiB2NCgpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHdvcmQgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3BhbmdyYW1zOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHBhbmdyYW1zKVxuICAgICAgICBjb25zb2xlLmxvZygnYWxsT3RoZXJzOicpXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbE90aGVycylcblxuICAgICAgICBzZXRQYW5ncmFtcyhbLi4ucGFuZ3JhbXNdKVxuICAgICAgICBzZXRBbGxPdGhlcnMoWy4uLmFsbE90aGVyc10pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5oZWFkZXJUZXh0fT5TcGVsbGluZyBCZWU8L1RleHQ+XG4gICAgICAgICAgICA8VmlldyBzdHlsZT17e2l0ZW1BbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5MZXR0ZXJzOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2xldHRlcnNPbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsZXR0ZXJzVGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkNlbnRlcjogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VUZXh0PXtjZW50ZXJPbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjZW50ZXJUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSB0aXRsZT1cIkZpbmQgd29yZHNcIiBvblByZXNzPXtoYW5kbGVDbGlja30gc3R5bGU9e3N0eWxlLmJ1dHRvbn0vPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+UGFuZ3JhbXM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwYW5ncmFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7aXRlbX0pID0+IDxUZXh0IHN0eWxlPXtzdHlsZS5saXN0VGV4dH0+e2l0ZW0udGV4dH08L1RleHQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkFsbCBvdGhlciB2YWxpZCB3b3JkczogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2FsbE90aGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7aXRlbX0pID0+IDxUZXh0IHN0eWxlPXtzdHlsZS5saXN0VGV4dH0+e2l0ZW0udGV4dH08L1RleHQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGJ1dHRvbjoge1xuICAgICAgICAvL2JhY2tncm91bmRDb2xvcjogXCIjNDI4YWY1XCJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIlxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgd2lkdGg6IDEwMFxuICAgIH0sXG4gICAgaGVhZGVyVGV4dDoge1xuICAgICAgICBmb250U2l6ZTogNDgsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdueXQta2FybmFrY29uZGVuc2VkJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9LFxuICAgIGxhYmVsVGV4dDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJ1xuICAgIH0sXG4gICAgbGlzdFRleHQ6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlU2hlZXQiLCJWaWV3IiwiVG91Y2hhYmxlT3BhY2l0eSIsIlRleHQiLCJUZXh0SW5wdXQiLCJGbGF0TGlzdCIsInY0IiwiYXBwIiwic2VydmVyIiwiUGFnZSIsImNlbnRlclRleHQiLCJjZW50ZXJPbkNoYW5nZVRleHQiLCJsZXR0ZXJzVGV4dCIsImxldHRlcnNPbkNoYW5nZVRleHQiLCJwYW5ncmFtcyIsInNldFBhbmdyYW1zIiwiYWxsT3RoZXJzIiwic2V0QWxsT3RoZXJzIiwiaGFuZGxlQ2xpY2siLCJmaWxlIiwicmVhZFdvcmRMaXN0IiwibWF0Y2hlcyIsImZpbmRNYXRjaGVzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicGFuZ3JhbSIsInB1c2giLCJpZCIsInRleHQiLCJ3b3JkIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiaGVhZGVyVGV4dCIsIml0ZW1BbGlnbiIsImxhYmVsVGV4dCIsImlucHV0Iiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJ0aXRsZSIsIm9uUHJlc3MiLCJidXR0b24iLCJkYXRhIiwicmVuZGVySXRlbSIsIml0ZW0iLCJsaXN0VGV4dCIsImtleUV4dHJhY3RvciIsImNyZWF0ZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dEFsaWduIiwid2lkdGgiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});