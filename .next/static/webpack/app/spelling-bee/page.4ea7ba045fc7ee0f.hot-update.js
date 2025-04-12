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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* harmony import */ var an_array_of_english_words__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! an-array-of-english-words */ \"(app-pages-browser)/./node_modules/an-array-of-english-words/index.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ListItem = (param)=>{\n    let { text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: style.listItem,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            style: style.listText,\n            children: text\n        }, void 0, false, {\n            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ListItem;\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        pangrams = [];\n        allOthers = [];\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        // Fetch matches from txt file on the server\n        //let matches = app.findMatches(file.split(\"\\n\"), lettersText, centerText)\n        // Fetch matches from npm library\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(an_array_of_english_words__WEBPACK_IMPORTED_MODULE_4__, lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n                text: word\n            });\n        }\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: style.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        style: [\n                            style.input,\n                            style.inputCenter\n                        ],\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    onPress: handleClick,\n                    style: style.button,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.buttonText,\n                        children: \"Find Words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: [\n                            \"Pangrams (\",\n                            pangrams.length,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.list,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: [\n                            \"All other valid words (\",\n                            allOthers.length,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: [\n                            style.list,\n                            style.listAllOthers\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c1 = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_11__[\"default\"].create({\n    container: {\n        flex: 1,\n        justifyContent: 'center',\n        alignItems: 'center'\n    },\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center',\n        width: '6em',\n        height: '1em',\n        fontSize: 30,\n        marginBottom: 10\n    },\n    inputCenter: {\n        width: '2em',\n        margin: 'auto'\n    },\n    button: {\n        backgroundColor: \"#428af5\",\n        width: '10em',\n        height: '2em',\n        marginTop: 10,\n        marginBottom: 20\n    },\n    buttonText: {\n        textAlign: 'center',\n        color: 'white',\n        fontSize: 20\n    },\n    headerText: {\n        marginBottom: 50,\n        fontSize: 80,\n        fontFamily: 'nyt-karnakcondensed',\n        textAlign: 'center',\n        color: 'white'\n    },\n    list: {\n        width: '10em',\n        height: '2em',\n        flex: 1,\n        margin: 5\n    },\n    listAllOthers: {\n        maxHeight: '60vh',\n        overflowY: 'scroll'\n    },\n    labelText: {\n        textAlign: 'center',\n        color: 'white',\n        fontStyle: 'italic',\n        fontSize: 20\n    },\n    listItem: {\n        backgroundColor: '#55c2c9',\n        margin: 2\n    },\n    listText: {\n        color: 'black',\n        textAlign: 'center'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"ListItem\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDeUQ7QUFDdkU7QUFDTTtBQUNNO0FBQ1E7QUFFN0MsTUFBTVksV0FBVztRQUFDLEVBQUNDLElBQUksRUFBQzt5QkFDcEIsOERBQUNWLHdEQUFJQTtRQUFDVyxPQUFPQSxNQUFNQyxRQUFRO2tCQUN2Qiw0RUFBQ1Ysd0RBQUlBO1lBQUNTLE9BQU9BLE1BQU1FLFFBQVE7c0JBQUdIOzs7Ozs7Ozs7Ozs7S0FGaENEO0FBTU4sTUFBTUssT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDbUIsYUFBYUMsb0JBQW9CLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNxQixVQUFVQyxZQUFZLEdBQUd0QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLElBQUksQ0FBQ3VCLFdBQVdDLGFBQWEsR0FBR3hCLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsZUFBZXlCO1FBQ1hKLFdBQVcsRUFBRTtRQUNiRSxZQUFZLEVBQUU7UUFFZCxJQUFJRyxPQUFPLE1BQU1qQixvREFBbUI7UUFFcEMsNENBQTRDO1FBQzVDLDBFQUEwRTtRQUUxRSxpQ0FBaUM7UUFDakMsSUFBSW1CLFVBQVVwQixnREFBZSxDQUFDRSxzREFBS0EsRUFBRVMsYUFBYUY7UUFFbEQsSUFBSyxJQUFJYSxJQUFJLEdBQUdBLElBQUlGLFFBQVFQLFFBQVEsQ0FBQ1UsTUFBTSxFQUFFRCxJQUFLO1lBQzlDLElBQUlFLFVBQVVKLFFBQVFQLFFBQVEsQ0FBQ1MsRUFBRTtZQUNqQ1QsU0FBU1ksSUFBSSxDQUFDO2dCQUNWQyxJQUFJM0IsZ0RBQUVBO2dCQUNOSyxNQUFNb0I7WUFDVjtRQUNKO1FBQ0EsSUFBSyxJQUFJRixJQUFJLEdBQUdBLElBQUlGLFFBQVFMLFNBQVMsQ0FBQ1Es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LGNBQWM7SUFDbEI7SUFDQWpCLFlBQVk7UUFDUmEsV0FBVztRQUNYRCxPQUFPO1FBQ1BJLFVBQVU7SUFDZDtJQUNBeEIsWUFBWTtRQUNSeUIsY0FBYztRQUNkRCxVQUFVO1FBQ1ZJLFlBQVk7UUFDWlAsV0FBVztRQUNYRCxPQUFPO0lBQ1g7SUFDQVgsTUFBTTtRQUNGYSxPQUFPO1FBQ1BDLFFBQVE7UUFDUlAsTUFBTTtRQUNOVSxRQUFRO0lBQ1o7SUFDQVosZUFBZTtRQUNYZSxXQUFXO1FBQ1hDLFdBQVc7SUFDZjtJQUNBN0IsV0FBVztRQUNQb0IsV0FBVztRQUNYRCxPQUFPO1FBQ1BXLFdBQVc7UUFDWFAsVUFBVTtJQUNkO0lBQ0EvQyxVQUFVO1FBQ04wQyxpQkFBaUI7UUFDakJPLFFBQVE7SUFDWjtJQUNBaEQsVUFBVTtRQUNOMEMsT0FBTztRQUNQQyxXQUFXO0lBQ2Y7QUFDSjtBQUVBLGlFQUFlMUMsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsiL2hvbWUvcmFuZGFsbC9wcm9qZWN0cy9ueXQtZ2FtZXMtaGVscGVyL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldywgVG91Y2hhYmxlT3BhY2l0eSwgVGV4dCwgVGV4dElucHV0LCBGbGF0TGlzdCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS13ZWInXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCJcbmltcG9ydCAqIGFzIGFwcCBmcm9tICcuL2FwcC5qcydcbmltcG9ydCAqIGFzIHNlcnZlciBmcm9tICcuL3NlcnZlci5qcydcbmltcG9ydCB3b3JkcyBmcm9tICdhbi1hcnJheS1vZi1lbmdsaXNoLXdvcmRzJ1xuXG5jb25zdCBMaXN0SXRlbSA9ICh7dGV4dH0pID0+IChcbiAgICA8VmlldyBzdHlsZT17c3R5bGUubGlzdEl0ZW19PlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGlzdFRleHR9Pnt0ZXh0fTwvVGV4dD5cbiAgICA8L1ZpZXc+XG4pXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NlbnRlclRleHQsIGNlbnRlck9uQ2hhbmdlVGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbGV0dGVyc1RleHQsIGxldHRlcnNPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG5cbiAgICBsZXQgW3BhbmdyYW1zLCBzZXRQYW5ncmFtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBsZXQgW2FsbE90aGVycywgc2V0QWxsT3RoZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHBhbmdyYW1zID0gW11cbiAgICAgICAgYWxsT3RoZXJzID0gW11cblxuICAgICAgICBsZXQgZmlsZSA9IGF3YWl0IHNlcnZlci5yZWFkV29yZExpc3QoKVxuXG4gICAgICAgIC8vIEZldGNoIG1hdGNoZXMgZnJvbSB0eHQgZmlsZSBvbiB0aGUgc2VydmVyXG4gICAgICAgIC8vbGV0IG1hdGNoZXMgPSBhcHAuZmluZE1hdGNoZXMoZmlsZS5zcGxpdChcIlxcblwiKSwgbGV0dGVyc1RleHQsIGNlbnRlclRleHQpXG5cbiAgICAgICAgLy8gRmV0Y2ggbWF0Y2hlcyBmcm9tIG5wbSBsaWJyYXJ5XG4gICAgICAgIGxldCBtYXRjaGVzID0gYXBwLmZpbmRNYXRjaGVzKHdvcmRzLCBsZXR0ZXJzVGV4dCwgY2VudGVyVGV4dClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMucGFuZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5ncmFtID0gbWF0Y2hlcy5wYW5ncmFtc1tpXVxuICAgICAgICAgICAgcGFuZ3JhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogcGFuZ3JhbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMuYWxsT3RoZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IG1hdGNoZXMuYWxsT3RoZXJzW2ldXG4gICAgICAgICAgICBhbGxPdGhlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogd29yZCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXRQYW5ncmFtcyhbLi4ucGFuZ3JhbXNdKVxuICAgICAgICBzZXRBbGxPdGhlcnMoWy4uLmFsbE90aGVyc10pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUuaGVhZGVyVGV4dH0+U3BlbGxpbmcgQmVlPC9UZXh0PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+TGV0dGVyczwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17bGV0dGVyc09uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xldHRlcnNUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+Q2VudGVyPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtbc3R5bGUuaW5wdXQsc3R5bGUuaW5wdXRDZW50ZXJdfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2NlbnRlck9uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbnRlclRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9e2hhbmRsZUNsaWNrfSBzdHlsZT17c3R5bGUuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmJ1dHRvblRleHR9PkZpbmQgV29yZHM8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+UGFuZ3JhbXMgKHtwYW5ncmFtcy5sZW5ndGh9KTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGUubGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF0TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cGFuZ3JhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoe2l0ZW19KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3N0eWxlLmxpc3RUZXh0fSB0ZXh0PXtpdGVtLnRleHR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkFsbCBvdGhlciB2YWxpZCB3b3JkcyAoe2FsbE90aGVycy5sZW5ndGh9KTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17W3N0eWxlLmxpc3Qsc3R5bGUubGlzdEFsbE90aGVyc119PlxuICAgICAgICAgICAgICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2FsbE90aGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7aXRlbX0pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17c3R5bGUubGlzdFRleHR9IHRleHQ9e2l0ZW0udGV4dH0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlFeHRyYWN0b3I9e2l0ZW0gPT4gaXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogJzZlbScsXG4gICAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMFxuICAgIH0sXG4gICAgaW5wdXRDZW50ZXI6IHtcbiAgICAgICAgd2lkdGg6ICcyZW0nLFxuICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDI4YWY1XCIsXG4gICAgICAgIHdpZHRoOiAnMTBlbScsXG4gICAgICAgIGhlaWdodDogJzJlbScsXG4gICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjBcbiAgICB9LFxuICAgIGJ1dHRvblRleHQ6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGZvbnRTaXplOiAyMFxuICAgIH0sXG4gICAgaGVhZGVyVGV4dDoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDUwLFxuICAgICAgICBmb250U2l6ZTogODAsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdueXQta2FybmFrY29uZGVuc2VkJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICAgd2lkdGg6ICcxMGVtJyxcbiAgICAgICAgaGVpZ2h0OiAnMmVtJyxcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgbWFyZ2luOiA1XG4gICAgfSxcbiAgICBsaXN0QWxsT3RoZXJzOiB7XG4gICAgICAgIG1heEhlaWdodDogJzYwdmgnLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXG4gICAgfSxcbiAgICBsYWJlbFRleHQ6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIGZvbnRTaXplOiAyMFxuICAgIH0sXG4gICAgbGlzdEl0ZW06IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1YzJjOScsXG4gICAgICAgIG1hcmdpbjogMlxuICAgIH0sXG4gICAgbGlzdFRleHQ6IHtcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlU2hlZXQiLCJWaWV3IiwiVG91Y2hhYmxlT3BhY2l0eSIsIlRleHQiLCJUZXh0SW5wdXQiLCJGbGF0TGlzdCIsInY0IiwiYXBwIiwic2VydmVyIiwid29yZHMiLCJMaXN0SXRlbSIsInRleHQiLCJzdHlsZSIsImxpc3RJdGVtIiwibGlzdFRleHQiLCJQYWdlIiwiY2VudGVyVGV4dCIsImNlbnRlck9uQ2hhbmdlVGV4dCIsImxldHRlcnNUZXh0IiwibGV0dGVyc09uQ2hhbmdlVGV4dCIsInBhbmdyYW1zIiwic2V0UGFuZ3JhbXMiLCJhbGxPdGhlcnMiLCJzZXRBbGxPdGhlcnMiLCJoYW5kbGVDbGljayIsImZpbGUiLCJyZWFkV29yZExpc3QiLCJtYXRjaGVzIiwiZmluZE1hdGNoZXMiLCJpIiwibGVuZ3RoIiwicGFuZ3JhbSIsInB1c2giLCJpZCIsIndvcmQiLCJjb250YWluZXIiLCJoZWFkZXJUZXh0IiwibGFiZWxUZXh0IiwiaW5wdXQiLCJvbkNoYW5nZVRleHQiLCJ2YWx1ZSIsImlucHV0Q2VudGVyIiwib25QcmVzcyIsImJ1dHRvbiIsImJ1dHRvblRleHQiLCJsaXN0IiwiZGF0YSIsInJlbmRlckl0ZW0iLCJpdGVtIiwia2V5RXh0cmFjdG9yIiwibGlzdEFsbE90aGVycyIsImNyZWF0ZSIsImZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJmb250RmFtaWx5IiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwiZm9udFN0eWxlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});