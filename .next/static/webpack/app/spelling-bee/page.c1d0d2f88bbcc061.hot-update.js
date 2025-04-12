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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        pangrams = [];\n        allOthers = [];\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(file.split(\"\\n\"), lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n                text: word\n            });\n        }\n        console.log('pangrams:');\n        console.log(pangrams);\n        console.log('allOthers:');\n        console.log(allOthers);\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: {\n                    itemAlign: 'center'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onPress: handleClick,\n                    style: style.button,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.buttonText,\n                        children: \"Find Words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"].create({\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center',\n        width: 100\n    },\n    button: {\n        backgroundColor: \"#428af5\",\n        textAlign: 'center',\n        color: 'white',\n        width: 80,\n        marginTop: 20,\n        marginBottom: 20\n    },\n    buttonText: {\n        color: 'white'\n    },\n    headerText: {\n        fontSize: 48,\n        fontFamily: 'nyt-karnakcondensed',\n        color: 'white'\n    },\n    labelText: {\n        color: 'white',\n        fontStyle: 'italic'\n    },\n    listText: {\n        color: 'white',\n        paddingLeft: '2em'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1QztBQUN5RDtBQUN2RTtBQUNNO0FBQ007QUFFckMsTUFBTVcsT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNsRCxNQUFNLENBQUNhLGFBQWFDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsSUFBSSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxlQUFlbUI7UUFDWEosV0FBVyxFQUFFO1FBQ2JFLFlBQVksRUFBRTtRQUVkLElBQUlHLE9BQU8sTUFBTVgsb0RBQW1CO1FBQ3BDLElBQUlhLFVBQVVkLGdEQUFlLENBQUNZLEtBQUtJLEtBQUssQ0FBQyxPQUFPWCxhQUFhRjtRQUU3RCxJQUFLLElBQUljLElBQUksR0FBR0EsSUFBSUgsUUFBUVAsUUFBUSxDQUFDVyxNQUFNLEVBQUVELElBQUs7WUFDOUMsSUFBSUUsVUFBVUwsUUFBUVAsUUFBUSxDQUFDVSxFQUFFO1lBQ2pDVixTQUFTYSxJQUFJLENBQUM7Z0JBQ1ZDLElBQUl0QixnREFBRUE7Z0JBQ051QixNQUFNSDtZQUNWO1FBQ0o7UUFDQSxJQUFLLElBQUlGLElBQUksR0FBR0EsSUFBSUgsUUFBUUwsU0FBUyxDQUFDUyxNQUFNLEVBQUVELElBQUs7WUFDL0MsSUFBSU0sT0FBT1QsUUFBUUwsU0FBUyxDQUFDUSxFQUFFO1lBQy9CUixVQUFVVyxJQUFJLENBQUM7Z0JBQ1hDLElBQUl0QixnREFBRUE7Z0JBQ051QixNQUFNQztZQUNWO1FBQ0o7UUFFQUMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQ2xCO1FBQ1ppQixRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDaEI7UUFFWkQsWUFBWTtlQUFJRDtTQUFTO1FBQ3pCRyxhQUFhO2VBQUlEO1NBQVU7SUFDL0I7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNiLHdEQUFJQTtnQkFBQzhCLE9BQU9BLE1BQU1DLFVBQVU7MEJBQUU7Ozs7OzswQkFDL0IsOERBQUNqQyx3REFBSUE7Z0JBQUNnQyxPQUFPO29CQUFDRSxXQUFXO2dCQUFROztrQ0FDN0IsOERBQUNoQyx3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDaEMsd0RBQVNBO3dCQUNONkIsT0FBT0EsTUFBTUksS0FBSzt3QkFDbEJDLGNBQWN6Qjt3QkFDZDBCLE9BQU8zQjs7Ozs7O2tDQUVYLDhEQUFDVCx3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDaEMsd0RBQVNBO3dCQUNONkIsT0FBT0EsTUFBTUksS0FBSzt3QkFDbEJDLGNBQWMzQjt3QkFDZDRCLE9BQU83Qjs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDVCx3REFBSUE7MEJBQ0QsNEVBQUNDLHdEQUFnQkE7b0JBQUNzQyxTQUFTdEI7b0JBQWFlLE9BQU9BLE1BQU1RLE1BQU07OEJBQ3ZELDRFQUFDdEMsd0RBQUlBO3dCQUFDOEIsT0FBT0EsTUFBTVMsVUFBVTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkMsOERBQUN6Qyx3REFBSUE7O2tDQUNELDhEQUFDRSx3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDbkMsd0RBQUlBO2tDQUNELDRFQUFDSSx3REFBUUE7NEJBQ0xzQyxNQUFNN0I7NEJBQ044QixZQUFZO29DQUFDLEVBQUNDLElBQUksRUFBQztxREFBSyw4REFBQzFDLHdEQUFJQTtvQ0FBQzhCLE9BQU9BLE1BQU1hLFFBQVE7OENBQUdELEtBQUtoQixJQUFJOzs7Ozs7OzRCQUMvRGtCLGNBQWNGLENBQUFBLE9BQVFBLEtBQUtqQixFQUFFOzs7Ozs7Ozs7OztrQ0FHckMsOERBQUN6Qix3REFBSUE7d0JBQUM4QixPQUFPQSxNQUFNRyxTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDbkMsd0RBQUlBO2tDQUNELDRFQUFDSSx3REFBUUE7NEJBQ0xzQyxNQUFNM0I7NEJBQ040QixZQUFZO29DQUFDLEVBQUNDLElBQUksRUFBQztxREFBSyw4REFBQzFDLHdEQUFJQTtvQ0FBQzhCLE9BQU9BLE1BQU1hLFFBQVE7OENBQUdELEtBQUtoQixJQUFJOzs7Ozs7OzRCQUMvRGtCLGNBQWNGLENBQUFBLE9BQVFBLEtBQUtqQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJEO0dBaEZNbkI7S0FBQUE7QUFrRk4sTUFBTXdCLFFBQVFqQyx5REFBVUEsQ0FBQ2dELE1BQU0sQ0FBQztJQUM1QlgsT0FBTztRQUNIWSxpQkFBaUI7UUFDakJDLE9BQU87UUFDUEMsV0FBVztRQUNYQyxPQUFPO0lBQ1g7SUFDQVgsUUFBUTtRQUNKUSxpQkFBaUI7UUFDakJFLFdBQVc7UUFDWEQsT0FBTztRQUNQRSxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsY0FBYztJQUNsQjtJQUNBWixZQUFZO1FBQ1JRLE9BQU87SUFDWDtJQUNBaEIsWUFBWTtRQUNScUIsVUFBVTtRQUNWQyxZQUFZO1FBQ1pOLE9BQU87SUFDWDtJQUNBZCxXQUFXO1FBQ1BjLE9BQU87UUFDUE8sV0FBVztJQUNmO0lBQ0FYLFVBQVU7UUFDTkksT0FBTztRQUNQUSxhQUFhO0lBQ2pCO0FBQ0o7QUFFQSxpRUFBZWpELElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIi9ob21lL3JhbmRhbGwvcHJvamVjdHMvbnl0LWdhbWVzLWhlbHBlci9zcmMvYXBwL3NwZWxsaW5nLWJlZS9wYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFZpZXcsIFRvdWNoYWJsZU9wYWNpdHksIFRleHQsIFRleHRJbnB1dCwgRmxhdExpc3QgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJ1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi9hcHAuanMnXG5pbXBvcnQgKiBhcyBzZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXIuanMnXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NlbnRlclRleHQsIGNlbnRlck9uQ2hhbmdlVGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbGV0dGVyc1RleHQsIGxldHRlcnNPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG5cbiAgICBsZXQgW3BhbmdyYW1zLCBzZXRQYW5ncmFtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBsZXQgW2FsbE90aGVycywgc2V0QWxsT3RoZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHBhbmdyYW1zID0gW11cbiAgICAgICAgYWxsT3RoZXJzID0gW11cblxuICAgICAgICBsZXQgZmlsZSA9IGF3YWl0IHNlcnZlci5yZWFkV29yZExpc3QoKVxuICAgICAgICBsZXQgbWF0Y2hlcyA9IGFwcC5maW5kTWF0Y2hlcyhmaWxlLnNwbGl0KFwiXFxuXCIpLCBsZXR0ZXJzVGV4dCwgY2VudGVyVGV4dClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMucGFuZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5ncmFtID0gbWF0Y2hlcy5wYW5ncmFtc1tpXVxuICAgICAgICAgICAgcGFuZ3JhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogcGFuZ3JhbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMuYWxsT3RoZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IG1hdGNoZXMuYWxsT3RoZXJzW2ldXG4gICAgICAgICAgICBhbGxPdGhlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogd29yZCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygncGFuZ3JhbXM6JylcbiAgICAgICAgY29uc29sZS5sb2cocGFuZ3JhbXMpXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGxPdGhlcnM6JylcbiAgICAgICAgY29uc29sZS5sb2coYWxsT3RoZXJzKVxuXG4gICAgICAgIHNldFBhbmdyYW1zKFsuLi5wYW5ncmFtc10pXG4gICAgICAgIHNldEFsbE90aGVycyhbLi4uYWxsT3RoZXJzXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmhlYWRlclRleHR9PlNwZWxsaW5nIEJlZTwvVGV4dD5cbiAgICAgICAgICAgIDxWaWV3IHN0eWxlPXt7aXRlbUFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkxldHRlcnM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17bGV0dGVyc09uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xldHRlcnNUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+Q2VudGVyOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2NlbnRlck9uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbnRlclRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9e2hhbmRsZUNsaWNrfSBzdHlsZT17c3R5bGUuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmJ1dHRvblRleHR9PkZpbmQgV29yZHM8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+UGFuZ3JhbXM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwYW5ncmFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7aXRlbX0pID0+IDxUZXh0IHN0eWxlPXtzdHlsZS5saXN0VGV4dH0+e2l0ZW0udGV4dH08L1RleHQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkFsbCBvdGhlciB2YWxpZCB3b3JkczogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2FsbE90aGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7aXRlbX0pID0+IDxUZXh0IHN0eWxlPXtzdHlsZS5saXN0VGV4dH0+e2l0ZW0udGV4dH08L1RleHQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGlucHV0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHdpZHRoOiAxMDBcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQyOGFmNVwiLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgd2lkdGg6IDgwLFxuICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwXG4gICAgfSxcbiAgICBidXR0b25UZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0OiB7XG4gICAgICAgIGZvbnRTaXplOiA0OCxcbiAgICAgICAgZm9udEZhbWlseTogJ255dC1rYXJuYWtjb25kZW5zZWQnLFxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgIH0sXG4gICAgbGFiZWxUZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnXG4gICAgfSxcbiAgICBsaXN0VGV4dDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcyZW0nXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTdHlsZVNoZWV0IiwiVmlldyIsIlRvdWNoYWJsZU9wYWNpdHkiLCJUZXh0IiwiVGV4dElucHV0IiwiRmxhdExpc3QiLCJ2NCIsImFwcCIsInNlcnZlciIsIlBhZ2UiLCJjZW50ZXJUZXh0IiwiY2VudGVyT25DaGFuZ2VUZXh0IiwibGV0dGVyc1RleHQiLCJsZXR0ZXJzT25DaGFuZ2VUZXh0IiwicGFuZ3JhbXMiLCJzZXRQYW5ncmFtcyIsImFsbE90aGVycyIsInNldEFsbE90aGVycyIsImhhbmRsZUNsaWNrIiwiZmlsZSIsInJlYWRXb3JkTGlzdCIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hlcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsInBhbmdyYW0iLCJwdXNoIiwiaWQiLCJ0ZXh0Iiwid29yZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImhlYWRlclRleHQiLCJpdGVtQWxpZ24iLCJsYWJlbFRleHQiLCJpbnB1dCIsIm9uQ2hhbmdlVGV4dCIsInZhbHVlIiwib25QcmVzcyIsImJ1dHRvbiIsImJ1dHRvblRleHQiLCJkYXRhIiwicmVuZGVySXRlbSIsIml0ZW0iLCJsaXN0VGV4dCIsImtleUV4dHJhY3RvciIsImNyZWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJwYWRkaW5nTGVmdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});