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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListItem = (param)=>{\n    let { text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: style.listItem,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            style: style.listText,\n            children: text\n        }, void 0, false, {\n            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ListItem;\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        pangrams = [];\n        allOthers = [];\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(file.split(\"\\n\"), lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n                text: word\n            });\n        }\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: style.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: [\n                            style.input,\n                            style.inputCenter\n                        ],\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onPress: handleClick,\n                    style: style.button,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.buttonText,\n                        children: \"Find Words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: style.list,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: [\n                            style.list,\n                            style.listAllOthers\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c1 = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"].create({\n    container: {\n        flex: 1,\n        justifyContent: 'center',\n        alignItems: 'center'\n    },\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center',\n        width: '10em',\n        height: '3em',\n        marginBottom: 10\n    },\n    inputCenter: {\n        width: '3em',\n        margin: 'auto'\n    },\n    button: {\n        backgroundColor: \"#428af5\",\n        width: '10em',\n        height: '2em',\n        marginTop: 10,\n        marginBottom: 20\n    },\n    buttonText: {\n        textAlign: 'center',\n        color: 'white',\n        fontSize: 20\n    },\n    headerText: {\n        fontSize: 80,\n        fontFamily: 'nyt-karnakcondensed',\n        textAlign: 'center',\n        color: 'white'\n    },\n    list: {\n        width: '10em',\n        height: '2em',\n        flex: 1,\n        margin: 5\n    },\n    listAllOthers: {\n        maxHeight: '60vh',\n        overflowY: 'scroll'\n    },\n    labelText: {\n        textAlign: 'center',\n        color: 'white',\n        fontStyle: 'italic',\n        fontSize: 20\n    },\n    listItem: {\n        backgroundColor: '#55c2c9',\n        margin: 2\n    },\n    listText: {\n        color: 'black',\n        textAlign: 'center'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"ListItem\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1QztBQUN5RDtBQUN2RTtBQUNNO0FBQ007QUFFckMsTUFBTVcsV0FBVztRQUFDLEVBQUNDLElBQUksRUFBQzt5QkFDcEIsOERBQUNULHdEQUFJQTtRQUFDVSxPQUFPQSxNQUFNQyxRQUFRO2tCQUN2Qiw0RUFBQ1Qsd0RBQUlBO1lBQUNRLE9BQU9BLE1BQU1FLFFBQVE7c0JBQUdIOzs7Ozs7Ozs7Ozs7S0FGaENEO0FBTU4sTUFBTUssT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHakIsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDa0IsYUFBYUMsb0JBQW9CLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNvQixVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLElBQUksQ0FBQ3NCLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsZUFBZXdCO1FBQ1hKLFdBQVcsRUFBRTtRQUNiRSxZQUFZLEVBQUU7UUFFZCxJQUFJRyxPQUFPLE1BQU1oQixvREFBbUI7UUFDcEMsSUFBSWtCLFVBQVVuQixnREFBZSxDQUFDaUIsS0FBS0ksS0FBSyxDQUFDLE9BQU9YLGFBQWFGO1FBRTdELElBQUssSUFBSWMsSUFBSSxHQUFHQSxJQUFJSCxRQUFRUCxRQUFRLENBQUNXLE1BQU0sRUFBRUQsSUFBSztZQUM5QyxJQUFJRSxVQUFVTCxRQUFRUCxRQUFRLENBQUNVLEVBQUU7WUFDakNWLFNBQVNhLElBQUksQ0FBQztnQkFDVkMsSUFBSTNCLGdEQUFFQTtnQkFDTkksTUFBTXFCO1lBQ1Y7UUFDSjtRQUNBLElBQUssSUFBSUYsSUFBSSxHQUFHQSxJQUFJSCxRQUFRTCxTQUFTLENBQUNTLE1BQU0sRUFBRUQsSUFBSztZQUMvQyxJQUFJSyxPQUFPUixR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WlAsV0FBVztRQUNYRCxPQUFPO0lBQ1g7SUFDQVgsTUFBTTtRQUNGYSxPQUFPO1FBQ1BDLFFBQVE7UUFDUlAsTUFBTTtRQUNOUyxRQUFRO0lBQ1o7SUFDQVgsZUFBZTtRQUNYZSxXQUFXO1FBQ1hDLFdBQVc7SUFDZjtJQUNBN0IsV0FBVztRQUNQb0IsV0FBVztRQUNYRCxPQUFPO1FBQ1BXLFdBQVc7UUFDWEosVUFBVTtJQUNkO0lBQ0FuRCxVQUFVO1FBQ04yQyxpQkFBaUI7UUFDakJNLFFBQVE7SUFDWjtJQUNBaEQsVUFBVTtRQUNOMkMsT0FBTztRQUNQQyxXQUFXO0lBQ2Y7QUFDSjtBQUVBLGlFQUFlM0MsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsiL2hvbWUvcmFuZGFsbC9wcm9qZWN0cy9ueXQtZ2FtZXMtaGVscGVyL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3R5bGVTaGVldCwgVmlldywgVG91Y2hhYmxlT3BhY2l0eSwgVGV4dCwgVGV4dElucHV0LCBGbGF0TGlzdCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS13ZWInXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCJcbmltcG9ydCAqIGFzIGFwcCBmcm9tICcuL2FwcC5qcydcbmltcG9ydCAqIGFzIHNlcnZlciBmcm9tICcuL3NlcnZlci5qcydcblxuY29uc3QgTGlzdEl0ZW0gPSAoe3RleHR9KSA9PiAoXG4gICAgPFZpZXcgc3R5bGU9e3N0eWxlLmxpc3RJdGVtfT5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxpc3RUZXh0fT57dGV4dH08L1RleHQ+XG4gICAgPC9WaWV3PlxuKVxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjZW50ZXJUZXh0LCBjZW50ZXJPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2xldHRlcnNUZXh0LCBsZXR0ZXJzT25DaGFuZ2VUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgbGV0IFtwYW5ncmFtcywgc2V0UGFuZ3JhbXNdID0gdXNlU3RhdGUoW10pXG4gICAgbGV0IFthbGxPdGhlcnMsIHNldEFsbE90aGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBwYW5ncmFtcyA9IFtdXG4gICAgICAgIGFsbE90aGVycyA9IFtdXG5cbiAgICAgICAgbGV0IGZpbGUgPSBhd2FpdCBzZXJ2ZXIucmVhZFdvcmRMaXN0KClcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBhcHAuZmluZE1hdGNoZXMoZmlsZS5zcGxpdChcIlxcblwiKSwgbGV0dGVyc1RleHQsIGNlbnRlclRleHQpXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLnBhbmdyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFuZ3JhbSA9IG1hdGNoZXMucGFuZ3JhbXNbaV1cbiAgICAgICAgICAgIHBhbmdyYW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiB2NCgpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHBhbmdyYW1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmFsbE90aGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHdvcmQgPSBtYXRjaGVzLmFsbE90aGVyc1tpXVxuICAgICAgICAgICAgYWxsT3RoZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkOiB2NCgpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHdvcmQgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UGFuZ3JhbXMoWy4uLnBhbmdyYW1zXSlcbiAgICAgICAgc2V0QWxsT3RoZXJzKFsuLi5hbGxPdGhlcnNdKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmhlYWRlclRleHR9PlNwZWxsaW5nIEJlZTwvVGV4dD5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkxldHRlcnM8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2xldHRlcnNPbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsZXR0ZXJzVGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkNlbnRlcjwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17W3N0eWxlLmlucHV0LHN0eWxlLmlucHV0Q2VudGVyXX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VUZXh0PXtjZW50ZXJPbkNoYW5nZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjZW50ZXJUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8VG91Y2hhYmxlT3BhY2l0eSBvblByZXNzPXtoYW5kbGVDbGlja30gc3R5bGU9e3N0eWxlLmJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5idXR0b25UZXh0fT5GaW5kIFdvcmRzPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PlBhbmdyYW1zPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZS5saXN0fT5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwYW5ncmFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7aXRlbX0pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17c3R5bGUubGlzdFRleHR9IHRleHQ9e2l0ZW0udGV4dH0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlFeHRyYWN0b3I9e2l0ZW0gPT4gaXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+QWxsIG90aGVyIHZhbGlkIHdvcmRzPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtbc3R5bGUubGlzdCxzdHlsZS5saXN0QWxsT3RoZXJzXX0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF0TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17YWxsT3RoZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHtpdGVtfSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXtzdHlsZS5saXN0VGV4dH0gdGV4dD17aXRlbS50ZXh0fSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGUgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHdpZHRoOiAnMTBlbScsXG4gICAgICAgIGhlaWdodDogJzNlbScsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTBcbiAgICB9LFxuICAgIGlucHV0Q2VudGVyOiB7XG4gICAgICAgIHdpZHRoOiAnM2VtJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQyOGFmNVwiLFxuICAgICAgICB3aWR0aDogJzEwZW0nLFxuICAgICAgICBoZWlnaHQ6ICcyZW0nLFxuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwXG4gICAgfSxcbiAgICBidXR0b25UZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250U2l6ZTogMjBcbiAgICB9LFxuICAgIGhlYWRlclRleHQ6IHtcbiAgICAgICAgZm9udFNpemU6IDgwLFxuICAgICAgICBmb250RmFtaWx5OiAnbnl0LWthcm5ha2NvbmRlbnNlZCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAgIHdpZHRoOiAnMTBlbScsXG4gICAgICAgIGhlaWdodDogJzJlbScsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIG1hcmdpbjogNVxuICAgIH0sXG4gICAgbGlzdEFsbE90aGVyczoge1xuICAgICAgICBtYXhIZWlnaHQ6ICc2MHZoJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJ1xuICAgIH0sXG4gICAgbGFiZWxUZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxuICAgICAgICBmb250U2l6ZTogMjBcbiAgICB9LFxuICAgIGxpc3RJdGVtOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NWMyYzknLFxuICAgICAgICBtYXJnaW46IDJcbiAgICB9LFxuICAgIGxpc3RUZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTdHlsZVNoZWV0IiwiVmlldyIsIlRvdWNoYWJsZU9wYWNpdHkiLCJUZXh0IiwiVGV4dElucHV0IiwiRmxhdExpc3QiLCJ2NCIsImFwcCIsInNlcnZlciIsIkxpc3RJdGVtIiwidGV4dCIsInN0eWxlIiwibGlzdEl0ZW0iLCJsaXN0VGV4dCIsIlBhZ2UiLCJjZW50ZXJUZXh0IiwiY2VudGVyT25DaGFuZ2VUZXh0IiwibGV0dGVyc1RleHQiLCJsZXR0ZXJzT25DaGFuZ2VUZXh0IiwicGFuZ3JhbXMiLCJzZXRQYW5ncmFtcyIsImFsbE90aGVycyIsInNldEFsbE90aGVycyIsImhhbmRsZUNsaWNrIiwiZmlsZSIsInJlYWRXb3JkTGlzdCIsIm1hdGNoZXMiLCJmaW5kTWF0Y2hlcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsInBhbmdyYW0iLCJwdXNoIiwiaWQiLCJ3b3JkIiwiY29udGFpbmVyIiwiaGVhZGVyVGV4dCIsImxhYmVsVGV4dCIsImlucHV0Iiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJpbnB1dENlbnRlciIsIm9uUHJlc3MiLCJidXR0b24iLCJidXR0b25UZXh0IiwibGlzdCIsImRhdGEiLCJyZW5kZXJJdGVtIiwiaXRlbSIsImtleUV4dHJhY3RvciIsImxpc3RBbGxPdGhlcnMiLCJjcmVhdGUiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsImZvbnRTdHlsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});