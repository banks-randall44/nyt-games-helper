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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* harmony import */ var an_array_of_english_words__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! an-array-of-english-words */ \"(app-pages-browser)/./node_modules/an-array-of-english-words/index.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ListItem = (param)=>{\n    let { text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: style.listItem,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            style: style.listText,\n            children: text\n        }, void 0, false, {\n            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ListItem;\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        pangrams = [];\n        allOthers = [];\n        //console.log(words)\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        // Fetch matches from txt file on the server\n        //let matches = app.findMatches(file.split(\"\\n\"), lettersText, centerText)\n        // Fetch matches from npm library\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(an_array_of_english_words__WEBPACK_IMPORTED_MODULE_4__, lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(),\n                text: word\n            });\n        }\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        style: style.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        style: [\n                            style.input,\n                            style.inputCenter\n                        ],\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    onPress: handleClick,\n                    style: style.button,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.buttonText,\n                        children: \"Find Words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.list,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: [\n                            style.list,\n                            style.listAllOthers\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c1 = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_11__[\"default\"].create({\n    container: {\n        flex: 1,\n        justifyContent: 'center',\n        alignItems: 'center'\n    },\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center',\n        width: '6em',\n        height: '1em',\n        fontSize: 30,\n        marginBottom: 10\n    },\n    inputCenter: {\n        width: '2em',\n        margin: 'auto'\n    },\n    button: {\n        backgroundColor: \"#428af5\",\n        width: '10em',\n        height: '2em',\n        marginTop: 10,\n        marginBottom: 20\n    },\n    buttonText: {\n        textAlign: 'center',\n        color: 'white',\n        fontSize: 20\n    },\n    headerText: {\n        marginBottom: 50,\n        fontSize: 80,\n        fontFamily: 'nyt-karnakcondensed',\n        textAlign: 'center',\n        color: 'white'\n    },\n    list: {\n        width: '10em',\n        height: '2em',\n        flex: 1,\n        margin: 5\n    },\n    listAllOthers: {\n        maxHeight: '60vh',\n        overflowY: 'scroll'\n    },\n    labelText: {\n        textAlign: 'center',\n        color: 'white',\n        fontStyle: 'italic',\n        fontSize: 20\n    },\n    listItem: {\n        backgroundColor: '#55c2c9',\n        margin: 2\n    },\n    listText: {\n        color: 'black',\n        textAlign: 'center'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"ListItem\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdUM7QUFDeUQ7QUFDdkU7QUFDTTtBQUNNO0FBQ1E7QUFFN0MsTUFBTVksV0FBVztRQUFDLEVBQUNDLElBQUksRUFBQzt5QkFDcEIsOERBQUNWLHdEQUFJQTtRQUFDVyxPQUFPQSxNQUFNQyxRQUFRO2tCQUN2Qiw0RUFBQ1Ysd0RBQUlBO1lBQUNTLE9BQU9BLE1BQU1FLFFBQVE7c0JBQUdIOzs7Ozs7Ozs7Ozs7S0FGaENEO0FBTU4sTUFBTUssT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHbEIsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDbUIsYUFBYUMsb0JBQW9CLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNxQixVQUFVQyxZQUFZLEdBQUd0QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLElBQUksQ0FBQ3VCLFdBQVdDLGFBQWEsR0FBR3hCLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsZUFBZXlCO1FBQ1hKLFdBQVcsRUFBRTtRQUNiRSxZQUFZLEVBQUU7UUFFZCxvQkFBb0I7UUFFcEIsSUFBSUcsT0FBTyxNQUFNakIsb0RBQW1CO1FBRXBDLDRDQUE0QztRQUM1QywwRUFBMEU7UUFFMUUsaUNBQWlDO1FBQ2pDLElBQUltQixVQUFVcEIsZ0RBQWUsQ0FBQ0Usc0RBQUtBLEVBQUVTLGFBQWFGO1FBRWxELElBQUssSUFBSWEsSUFBSSxHQUFHQSxJQUFJRixRQUFRUCxRQUFRLENBQUNVLE1BQU0sRUFBRUQsSUFBSztZQUM5QyxJQUFJRSxVQUFVSixRQUFRUCxRQUFRLENBQUNTLEVBQUU7WUFDakNULFNBQVNZLElBQUksQ0FBQztnQkFDVkMsSUFBSTNCLGdEQUFFQTtnQkFDTkssTUFBTW9CO1lBQ1Y7UUFDSjtRQUNBLElBQUssSUFBSUYsSUFBSSxHQUFHQSxJQUFJRixRQUFRTCxTQUFTLENBQUNRLE1BQU0sRUFBRUQsSUFBSztZQUMvQyxJQUFJSyxPQUFPUCxRQUFRTCxTQUFTLENBQUNPLEVBQUU7WUFDL0JQLFVBQVVVLElBQUksQ0FBQztnQkFDWEMsSUFBSTNCLGdEQUFFQTtnQkFDTkssTUFBTXVCO1lBQ1Y7UUFDSjtRQUVBYixZQUFZO2VBQUlEO1NBQVM7UUFDekJHLGFBQWE7ZUFBSUQ7U0FBVTtJQUMvQjtJQUVBLHFCQUNJLDhEQUFDckIsd0RBQUlBO1FBQUNXLE9BQU9BLE1BQU11QixTQUFTOzswQkFDeEIsOERBQUNoQyx3REFBSUE7Z0JBQUNTLE9BQU9BLE1BQU13QixVQUFVOzBCQUFFOzs7Ozs7MEJBQy9CLDhEQUFDbkMsd0RBQUlBOztrQ0FDRCw4REFBQ0Usd0RBQUlBO3dCQUFDUyxPQUFPQSxNQUFNeUIsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2pDLHdEQUFTQTt3QkFDTlEsT0FBT0EsTUFBTTBCLEtBQUs7d0JBQ2xCQyxjQUFjcEI7d0JBQ2RxQixPQUFPdEI7Ozs7OztrQ0FFWCw4REFBQ2Ysd0RBQUlBO3dCQUFDUyxPQUFPQSxNQUFNeUIsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ2pDLHdEQUFTQTt3QkFDTlEsT0FBTzs0QkFBQ0EsTUFBTTBCLEtBQUs7NEJBQUMxQixNQUFNNkIsV0FBVzt5QkFBQzt3QkFDdENGLGNBQWN0Qjt3QkFDZHVCLE9BQU94Qjs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDZix3REFBSUE7MEJBQ0QsNEVBQUNDLHdEQUFnQkE7b0JBQUN3QyxTQUFTbEI7b0JBQWFaLE9BQU9BLE1BQU0rQixNQUFNOzhCQUN2RCw0RUFBQ3hDLHdEQUFJQTt3QkFBQ1MsT0FBT0EsTUFBTWdDLFVBQVU7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3ZDLDhEQUFDM0Msd0RBQUlBOztrQ0FDRCw4REFBQ0Usd0RBQUlBO3dCQUFDUyxPQUFPQSxNQUFNeUIsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ3BDLHdEQUFJQTt3QkFBQ1csT0FBT0EsTUFBTWlDLElBQUk7a0NBQ25CLDRFQUFDeEMseURBQVFBOzRCQUNMeUMsTUFBTTFCOzRCQUNOMkIsWUFBWTtvQ0FBQyxFQUFDQyxJQUFJLEVBQUM7cURBQ2YsOERBQUN0QztvQ0FBU0UsT0FBT0EsTUFBTUUsUUFBUTtvQ0FBRUgsTUFBTXFDLEtBQUtyQyxJQUFJOzs7Ozs7OzRCQUNwRHNDLGNBQWNELENBQUFBLE9BQVFBLEtBQUtmLEVBQUU7Ozs7Ozs7Ozs7O2tDQUdyQyw4REFBQzlCLHdEQUFJQTt3QkFBQ1MsT0FBT0EsTUFBTXlCLFNBQVM7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNwQyx3REFBSUE7d0JBQUNXLE9BQU87NEJBQUNBLE1BQU1pQyxJQUFJOzRCQUFDakMsTUFBTXNDLGFBQWE7eUJBQUM7a0NBQ3pDLDRFQUFDN0MseURBQVFBOzRCQUNMeUMsTUFBTXhCOzRCQUNOeUIsWUFBWTtvQ0FBQyxFQUFDQyxJQUFJLEVBQUM7cURBQ2YsOERBQUN0QztvQ0FBU0UsT0FBT0EsTUFBTUUsUUFBUTtvQ0FBRUgsTUFBTXFDLEtBQUtyQyxJQUFJOzs7Ozs7OzRCQUNwRHNDLGNBQWNELENBQUFBLE9BQVFBLEtBQUtmLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJEO0dBcEZNbEI7TUFBQUE7QUFzRk4sTUFBTUgsUUFBUVoseURBQVVBLENBQUNtRCxNQUFNLENBQUM7SUFDNUJoQixXQUFXO1FBQ1BpQixNQUFNO1FBQ05DLGdCQUFnQjtRQUNoQkMsWUFBWTtJQUNoQjtJQUNBaEIsT0FBTztRQUNIaUIsaUJBQWlCO1FBQ2pCQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsY0FBYztJQUNsQjtJQUNBcEIsYUFBYTtRQUNUaUIsT0FBTztRQUNQSSxRQUFRO0lBQ1o7SUFDQW5CLFFBQVE7UUFDSlksaUJBQWlCO1FBQ2pCRyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkksV0FBVztRQUNYRixjQUFjO0lBQ2xCO0lBQ0FqQixZQUFZO1FBQ1JhLFdBQVc7UUFDWEQsT0FBTztRQUNQSSxVQUFVO0lBQ2Q7SUFDQXhCLFlBQVk7UUFDUnlCLGNBQWM7UUFDZEQsVUFBVTtRQUNWSSxZQUFZO1FBQ1pQLFdBQVc7UUFDWEQsT0FBTztJQUNYO0lBQ0FYLE1BQU07UUFDRmEsT0FBTztRQUNQQyxRQUFRO1FBQ1JQLE1BQU07UUFDTlUsUUFBUTtJQUNaO0lBQ0FaLGVBQWU7UUFDWGUsV0FBVztRQUNYQyxXQUFXO0lBQ2Y7SUFDQTdCLFdBQVc7UUFDUG9CLFdBQVc7UUFDWEQsT0FBTztRQUNQVyxXQUFXO1FBQ1hQLFVBQVU7SUFDZDtJQUNBL0MsVUFBVTtRQUNOMEMsaUJBQWlCO1FBQ2pCTyxRQUFRO0lBQ1o7SUFDQWhELFVBQVU7UUFDTjBDLE9BQU87UUFDUEMsV0FBVztJQUNmO0FBQ0o7QUFFQSxpRUFBZTFDLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIi9ob21lL3JhbmRhbGwvcHJvamVjdHMvbnl0LWdhbWVzLWhlbHBlci9zcmMvYXBwL3NwZWxsaW5nLWJlZS9wYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFZpZXcsIFRvdWNoYWJsZU9wYWNpdHksIFRleHQsIFRleHRJbnB1dCwgRmxhdExpc3QgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJ1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi9hcHAuanMnXG5pbXBvcnQgKiBhcyBzZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXIuanMnXG5pbXBvcnQgd29yZHMgZnJvbSAnYW4tYXJyYXktb2YtZW5nbGlzaC13b3JkcydcblxuY29uc3QgTGlzdEl0ZW0gPSAoe3RleHR9KSA9PiAoXG4gICAgPFZpZXcgc3R5bGU9e3N0eWxlLmxpc3RJdGVtfT5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxpc3RUZXh0fT57dGV4dH08L1RleHQ+XG4gICAgPC9WaWV3PlxuKVxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjZW50ZXJUZXh0LCBjZW50ZXJPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xldHRlcnNUZXh0LCBsZXR0ZXJzT25DaGFuZ2VUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgbGV0IFtwYW5ncmFtcywgc2V0UGFuZ3JhbXNdID0gdXNlU3RhdGUoW10pXG4gICAgbGV0IFthbGxPdGhlcnMsIHNldEFsbE90aGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBwYW5ncmFtcyA9IFtdXG4gICAgICAgIGFsbE90aGVycyA9IFtdXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh3b3JkcylcblxuICAgICAgICBsZXQgZmlsZSA9IGF3YWl0IHNlcnZlci5yZWFkV29yZExpc3QoKVxuXG4gICAgICAgIC8vIEZldGNoIG1hdGNoZXMgZnJvbSB0eHQgZmlsZSBvbiB0aGUgc2VydmVyXG4gICAgICAgIC8vbGV0IG1hdGNoZXMgPSBhcHAuZmluZE1hdGNoZXMoZmlsZS5zcGxpdChcIlxcblwiKSwgbGV0dGVyc1RleHQsIGNlbnRlclRleHQpXG5cbiAgICAgICAgLy8gRmV0Y2ggbWF0Y2hlcyBmcm9tIG5wbSBsaWJyYXJ5XG4gICAgICAgIGxldCBtYXRjaGVzID0gYXBwLmZpbmRNYXRjaGVzKHdvcmRzLCBsZXR0ZXJzVGV4dCwgY2VudGVyVGV4dClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMucGFuZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5ncmFtID0gbWF0Y2hlcy5wYW5ncmFtc1tpXVxuICAgICAgICAgICAgcGFuZ3JhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogcGFuZ3JhbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMuYWxsT3RoZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IG1hdGNoZXMuYWxsT3RoZXJzW2ldXG4gICAgICAgICAgICBhbGxPdGhlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogd29yZCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXRQYW5ncmFtcyhbLi4ucGFuZ3JhbXNdKVxuICAgICAgICBzZXRBbGxPdGhlcnMoWy4uLmFsbE90aGVyc10pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUuaGVhZGVyVGV4dH0+U3BlbGxpbmcgQmVlPC9UZXh0PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+TGV0dGVyczwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17bGV0dGVyc09uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xldHRlcnNUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+Q2VudGVyPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtbc3R5bGUuaW5wdXQsc3R5bGUuaW5wdXRDZW50ZXJdfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2NlbnRlck9uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbnRlclRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9e2hhbmRsZUNsaWNrfSBzdHlsZT17c3R5bGUuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmJ1dHRvblRleHR9PkZpbmQgV29yZHM8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+UGFuZ3JhbXM8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlLmxpc3R9PlxuICAgICAgICAgICAgICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3BhbmdyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHtpdGVtfSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXtzdHlsZS5saXN0VGV4dH0gdGV4dD17aXRlbS50ZXh0fSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5BbGwgb3RoZXIgdmFsaWQgd29yZHM8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFZpZXcgc3R5bGU9e1tzdHlsZS5saXN0LHN0eWxlLmxpc3RBbGxPdGhlcnNdfT5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXthbGxPdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoe2l0ZW19KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3N0eWxlLmxpc3RUZXh0fSB0ZXh0PXtpdGVtLnRleHR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgd2lkdGg6ICc2ZW0nLFxuICAgICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgICBmb250U2l6ZTogMzAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTBcbiAgICB9LFxuICAgIGlucHV0Q2VudGVyOiB7XG4gICAgICAgIHdpZHRoOiAnMmVtJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQyOGFmNVwiLFxuICAgICAgICB3aWR0aDogJzEwZW0nLFxuICAgICAgICBoZWlnaHQ6ICcyZW0nLFxuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwXG4gICAgfSxcbiAgICBidXR0b25UZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250U2l6ZTogMjBcbiAgICB9LFxuICAgIGhlYWRlclRleHQ6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiA1MCxcbiAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICBmb250RmFtaWx5OiAnbnl0LWthcm5ha2NvbmRlbnNlZCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAgIHdpZHRoOiAnMTBlbScsXG4gICAgICAgIGhlaWdodDogJzJlbScsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIG1hcmdpbjogNVxuICAgIH0sXG4gICAgbGlzdEFsbE90aGVyczoge1xuICAgICAgICBtYXhIZWlnaHQ6ICc2MHZoJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJ1xuICAgIH0sXG4gICAgbGFiZWxUZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICBmb250U2l6ZTogMjBcbiAgICB9LFxuICAgIGxpc3RJdGVtOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NWMyYzknLFxuICAgICAgICBtYXJnaW46IDJcbiAgICB9LFxuICAgIGxpc3RUZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTdHlsZVNoZWV0IiwiVmlldyIsIlRvdWNoYWJsZU9wYWNpdHkiLCJUZXh0IiwiVGV4dElucHV0IiwiRmxhdExpc3QiLCJ2NCIsImFwcCIsInNlcnZlciIsIndvcmRzIiwiTGlzdEl0ZW0iLCJ0ZXh0Iiwic3R5bGUiLCJsaXN0SXRlbSIsImxpc3RUZXh0IiwiUGFnZSIsImNlbnRlclRleHQiLCJjZW50ZXJPbkNoYW5nZVRleHQiLCJsZXR0ZXJzVGV4dCIsImxldHRlcnNPbkNoYW5nZVRleHQiLCJwYW5ncmFtcyIsInNldFBhbmdyYW1zIiwiYWxsT3RoZXJzIiwic2V0QWxsT3RoZXJzIiwiaGFuZGxlQ2xpY2siLCJmaWxlIiwicmVhZFdvcmRMaXN0IiwibWF0Y2hlcyIsImZpbmRNYXRjaGVzIiwiaSIsImxlbmd0aCIsInBhbmdyYW0iLCJwdXNoIiwiaWQiLCJ3b3JkIiwiY29udGFpbmVyIiwiaGVhZGVyVGV4dCIsImxhYmVsVGV4dCIsImlucHV0Iiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJpbnB1dENlbnRlciIsIm9uUHJlc3MiLCJidXR0b24iLCJidXR0b25UZXh0IiwibGlzdCIsImRhdGEiLCJyZW5kZXJJdGVtIiwiaXRlbSIsImtleUV4dHJhY3RvciIsImxpc3RBbGxPdGhlcnMiLCJjcmVhdGUiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiZm9udEZhbWlseSIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsImZvbnRTdHlsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});