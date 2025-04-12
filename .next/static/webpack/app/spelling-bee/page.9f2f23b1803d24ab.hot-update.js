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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListItem = (param)=>{\n    let { text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: style.listItem,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            style: style.listText,\n            children: text\n        }, void 0, false, {\n            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ListItem;\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        pangrams = [];\n        allOthers = [];\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(file.split(\"\\n\"), lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n                text: word\n            });\n        }\n        console.log('pangrams:');\n        console.log(pangrams);\n        console.log('allOthers:');\n        console.log(allOthers);\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onPress: handleClick,\n                    style: style.button,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.buttonText,\n                        children: \"Find Words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: style.list,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        style: style.list,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    text: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c1 = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"].create({\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center',\n        width: 100\n    },\n    button: {\n        backgroundColor: \"#428af5\",\n        textAlign: 'center',\n        color: 'white',\n        width: 80,\n        marginTop: 20,\n        marginBottom: 20\n    },\n    buttonText: {\n        color: 'white'\n    },\n    headerText: {\n        fontSize: 48,\n        fontFamily: 'nyt-karnakcondensed',\n        textAlign: 'center',\n        color: 'white'\n    },\n    list: {\n        width: '10em',\n        height: '2em',\n        flex: 1,\n        margin: 5\n    },\n    labelText: {\n        color: 'white',\n        fontStyle: 'italic'\n    },\n    listItem: {\n        backgroundColor: '#55c2c9',\n        margin: 2\n    },\n    listText: {\n        color: 'black',\n        textAlign: 'center'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"ListItem\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1QztBQUN5RDtBQUN2RTtBQUNNO0FBQ007QUFFckMsTUFBTVcsV0FBVztRQUFDLEVBQUNDLElBQUksRUFBQzt5QkFDcEIsOERBQUNULHdEQUFJQTtRQUFDVSxPQUFPQSxNQUFNQyxRQUFRO2tCQUN2Qiw0RUFBQ1Qsd0RBQUlBO1lBQUNRLE9BQU9BLE1BQU1FLFFBQVE7c0JBQUdIOzs7Ozs7Ozs7Ozs7S0FGaENEO0FBTU4sTUFBTUssT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHakIsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDa0IsYUFBYUMsb0JBQW9CLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNvQixVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLElBQUksQ0FBQ3NCLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsZUFBZXdCO1FBQ1hKLFdBQVcsRUFBRTtRQUNiRSxZQUFZLEVBQUU7UUFFZCxJQUFJRyxPQUFPLE1BQU1oQixvREFBbUI7UUFDcEMsSUFBSWtCLFVBQVVuQixnREFBZSxDQUFDaUIsS0FBS0ksS0FBSyxDQUFDLE9BQU9YLGFBQWFGO1FBRTdELElBQUssSUFBSWMsSUFBSSxHQUFHQSxJQUFJSCxRQUFRUCxRQUFRLENBQUNXLE1BQU0sRUFBRUQsSUFBSztZQUM5QyxJQUFJRSxVQUFVTCxRQUFRUCxRQUFRLENBQUNVLEVBQUU7WUFDakNWLFNBQVNhLElBQUksQ0FBQztnQkFDVkMsSUFBSTNCLGdEQUFFQTtnQkFDTkksTUFBTXFCO1lBQ1Y7UUFDSjtRQUNBLElBQUssSUFBSUYsSUFBSSxHQUFHQSxJQUFJSCxRQUFRTCxTQUFTLENBQUNTLE1BQU0sRUFBRUQsSUFBSztZQUMvQyxJQUFJSyxPQUFPUixRQUFRTCxTQUFTLENBQUNRLEVBQUU7WUFDL0JSLFVBQVVXLElBQUksQ0FBQztnQkFDWEMsSUFBSTNCLGdEQUFFQTtnQkFDTkksTUFBTXdCO1lBQ1Y7UUFDSjtRQUVBQyxRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDakI7UUFDWmdCLFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUNmO1FBRVpELFlBQVk7ZUFBSUQ7U0FBUztRQUN6QkcsYUFBYTtlQUFJRDtTQUFVO0lBQy9CO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDbEIsd0RBQUlBO2dCQUFDUSxPQUFPQSxNQUFNMEIsVUFBVTswQkFBRTs7Ozs7OzBCQUMvQiw4REFBQ3BDLHdEQUFJQTs7a0NBQ0QsOERBQUNFLHdEQUFJQTt3QkFBQ1EsT0FBT0EsTUFBTTJCLFNBQVM7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNsQyx3REFBU0E7d0JBQ05PLE9BQU9BLE1BQU00QixLQUFLO3dCQUNsQkMsY0FBY3RCO3dCQUNkdUIsT0FBT3hCOzs7Ozs7a0NBRVgsOERBQUNkLHdEQUFJQTt3QkFBQ1EsT0FBT0EsTUFBTTJCLFNBQVM7a0NBQUU7Ozs7OztrQ0FDOUIsOERBQUNsQyx3REFBU0E7d0JBQ05PLE9BQU9BLE1BQU00QixLQUFLO3dCQUNsQkMsY0FBY3hCO3dCQUNkeUIsT0FBTzFCOzs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNkLHdEQUFJQTswQkFDRCw0RUFBQ0Msd0RBQWdCQTtvQkFBQ3dDLFNBQVNuQjtvQkFBYVosT0FBT0EsTUFBTWdDLE1BQU07OEJBQ3ZELDRFQUFDeEMsd0RBQUlBO3dCQUFDUSxPQUFPQSxNQUFNaUMsVUFBVTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkMsOERBQUMzQyx3REFBSUE7O2tDQUNELDhEQUFDRSx3REFBSUE7d0JBQUNRLE9BQU9BLE1BQU0yQixTQUFTO2tDQUFFOzs7Ozs7a0NBQzlCLDhEQUFDckMsd0RBQUlBO3dCQUFDVSxPQUFPQSxNQUFNa0MsSUFBSTtrQ0FDbkIsNEVBQUN4Qyx3REFBUUE7NEJBQ0x5QyxNQUFNM0I7NEJBQ040QixZQUFZO29DQUFDLEVBQUNDLElBQUksRUFBQztxREFDZiw4REFBQ3ZDO29DQUFTRSxPQUFPQSxNQUFNRSxRQUFRO29DQUFFSCxNQUFNc0MsS0FBS3RDLElBQUk7Ozs7Ozs7NEJBQ3BEdUMsY0FBY0QsQ0FBQUEsT0FBUUEsS0FBS2YsRUFBRTs7Ozs7Ozs7Ozs7a0NBR3JDLDhEQUFDOUIsd0RBQUlBO3dCQUFDUSxPQUFPQSxNQUFNMkIsU0FBUztrQ0FBRTs7Ozs7O2tDQUM5Qiw4REFBQ3JDLHdEQUFJQTt3QkFBQ1UsT0FBT0EsTUFBTWtDLElBQUk7a0NBQ25CLDRFQUFDeEMsd0RBQVFBOzRCQUNMeUMsTUFBTXpCOzRCQUNOMEIsWUFBWTtvQ0FBQyxFQUFDQyxJQUFJLEVBQUM7cURBQ2YsOERBQUN2QztvQ0FBU0UsT0FBT0EsTUFBTUUsUUFBUTtvQ0FBRUgsTUFBTXNDLEtBQUt0QyxJQUFJOzs7Ozs7OzRCQUNwRHVDLGNBQWNELENBQUFBLE9BQVFBLEtBQUtmLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7R0FsRk1uQjtNQUFBQTtBQW9GTixNQUFNSCxRQUFRWCx5REFBVUEsQ0FBQ2tELE1BQU0sQ0FBQztJQUM1QlgsT0FBTztRQUNIWSxpQkFBaUI7UUFDakJDLE9BQU87UUFDUEMsV0FBVztRQUNYQyxPQUFPO0lBQ1g7SUFDQVgsUUFBUTtRQUNKUSxpQkFBaUI7UUFDakJFLFdBQVc7UUFDWEQsT0FBTztRQUNQRSxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsY0FBYztJQUNsQjtJQUNBWixZQUFZO1FBQ1JRLE9BQU87SUFDWDtJQUNBZixZQUFZO1FBQ1JvQixVQUFVO1FBQ1ZDLFlBQVk7UUFDWkwsV0FBVztRQUNYRCxPQUFPO0lBQ1g7SUFDQVAsTUFBTTtRQUNGUyxPQUFPO1FBQ1BLLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxRQUFRO0lBQ1o7SUFDQXZCLFdBQVc7UUFDUGMsT0FBTztRQUNQVSxXQUFXO0lBQ2Y7SUFDQWxELFVBQVU7UUFDTnVDLGlCQUFpQjtRQUNqQlUsUUFBUTtJQUNaO0lBQ0FoRCxVQUFVO1FBQ051QyxPQUFPO1FBQ1BDLFdBQVc7SUFDZjtBQUNKO0FBRUEsaUVBQWV2QyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyIvaG9tZS9yYW5kYWxsL3Byb2plY3RzL255dC1nYW1lcy1oZWxwZXIvc3JjL2FwcC9zcGVsbGluZy1iZWUvcGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTdHlsZVNoZWV0LCBWaWV3LCBUb3VjaGFibGVPcGFjaXR5LCBUZXh0LCBUZXh0SW5wdXQsIEZsYXRMaXN0IH0gZnJvbSAncmVhY3QtbmF0aXZlLXdlYidcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIlxuaW1wb3J0ICogYXMgYXBwIGZyb20gJy4vYXBwLmpzJ1xuaW1wb3J0ICogYXMgc2VydmVyIGZyb20gJy4vc2VydmVyLmpzJ1xuXG5jb25zdCBMaXN0SXRlbSA9ICh7dGV4dH0pID0+IChcbiAgICA8VmlldyBzdHlsZT17c3R5bGUubGlzdEl0ZW19PlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGlzdFRleHR9Pnt0ZXh0fTwvVGV4dD5cbiAgICA8L1ZpZXc+XG4pXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NlbnRlclRleHQsIGNlbnRlck9uQ2hhbmdlVGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbbGV0dGVyc1RleHQsIGxldHRlcnNPbkNoYW5nZVRleHRdID0gdXNlU3RhdGUoJycpXG5cbiAgICBsZXQgW3BhbmdyYW1zLCBzZXRQYW5ncmFtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBsZXQgW2FsbE90aGVycywgc2V0QWxsT3RoZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHBhbmdyYW1zID0gW11cbiAgICAgICAgYWxsT3RoZXJzID0gW11cblxuICAgICAgICBsZXQgZmlsZSA9IGF3YWl0IHNlcnZlci5yZWFkV29yZExpc3QoKVxuICAgICAgICBsZXQgbWF0Y2hlcyA9IGFwcC5maW5kTWF0Y2hlcyhmaWxlLnNwbGl0KFwiXFxuXCIpLCBsZXR0ZXJzVGV4dCwgY2VudGVyVGV4dClcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMucGFuZ3JhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5ncmFtID0gbWF0Y2hlcy5wYW5ncmFtc1tpXVxuICAgICAgICAgICAgcGFuZ3JhbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogcGFuZ3JhbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMuYWxsT3RoZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd29yZCA9IG1hdGNoZXMuYWxsT3RoZXJzW2ldXG4gICAgICAgICAgICBhbGxPdGhlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgICAgICAgdGV4dDogd29yZCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygncGFuZ3JhbXM6JylcbiAgICAgICAgY29uc29sZS5sb2cocGFuZ3JhbXMpXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGxPdGhlcnM6JylcbiAgICAgICAgY29uc29sZS5sb2coYWxsT3RoZXJzKVxuXG4gICAgICAgIHNldFBhbmdyYW1zKFsuLi5wYW5ncmFtc10pXG4gICAgICAgIHNldEFsbE90aGVycyhbLi4uYWxsT3RoZXJzXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmhlYWRlclRleHR9PlNwZWxsaW5nIEJlZTwvVGV4dD5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkxldHRlcnM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17bGV0dGVyc09uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xldHRlcnNUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+Q2VudGVyOiA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRleHQ9e2NlbnRlck9uQ2hhbmdlVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlbnRlclRleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgIDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9e2hhbmRsZUNsaWNrfSBzdHlsZT17c3R5bGUuYnV0dG9ufT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmJ1dHRvblRleHR9PkZpbmQgV29yZHM8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9Ub3VjaGFibGVPcGFjaXR5PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+UGFuZ3JhbXM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGUubGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF0TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cGFuZ3JhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoe2l0ZW19KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3N0eWxlLmxpc3RUZXh0fSB0ZXh0PXtpdGVtLnRleHR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5sYWJlbFRleHR9PkFsbCBvdGhlciB2YWxpZCB3b3JkczogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZS5saXN0fT5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXthbGxPdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoe2l0ZW19KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3N0eWxlLmxpc3RUZXh0fSB0ZXh0PXtpdGVtLnRleHR9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RXh0cmFjdG9yPXtpdGVtID0+IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlID0gU3R5bGVTaGVldC5jcmVhdGUoe1xuICAgIGlucHV0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHdpZHRoOiAxMDBcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQyOGFmNVwiLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgd2lkdGg6IDgwLFxuICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwXG4gICAgfSxcbiAgICBidXR0b25UZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgfSxcbiAgICBoZWFkZXJUZXh0OiB7XG4gICAgICAgIGZvbnRTaXplOiA0OCxcbiAgICAgICAgZm9udEZhbWlseTogJ255dC1rYXJuYWtjb25kZW5zZWQnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgICB3aWR0aDogJzEwZW0nLFxuICAgICAgICBoZWlnaHQ6ICcyZW0nLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBtYXJnaW46IDVcbiAgICB9LFxuICAgIGxhYmVsVGV4dDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJ1xuICAgIH0sXG4gICAgbGlzdEl0ZW06IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1YzJjOScsXG4gICAgICAgIG1hcmdpbjogMlxuICAgIH0sXG4gICAgbGlzdFRleHQ6IHtcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlU2hlZXQiLCJWaWV3IiwiVG91Y2hhYmxlT3BhY2l0eSIsIlRleHQiLCJUZXh0SW5wdXQiLCJGbGF0TGlzdCIsInY0IiwiYXBwIiwic2VydmVyIiwiTGlzdEl0ZW0iLCJ0ZXh0Iiwic3R5bGUiLCJsaXN0SXRlbSIsImxpc3RUZXh0IiwiUGFnZSIsImNlbnRlclRleHQiLCJjZW50ZXJPbkNoYW5nZVRleHQiLCJsZXR0ZXJzVGV4dCIsImxldHRlcnNPbkNoYW5nZVRleHQiLCJwYW5ncmFtcyIsInNldFBhbmdyYW1zIiwiYWxsT3RoZXJzIiwic2V0QWxsT3RoZXJzIiwiaGFuZGxlQ2xpY2siLCJmaWxlIiwicmVhZFdvcmRMaXN0IiwibWF0Y2hlcyIsImZpbmRNYXRjaGVzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicGFuZ3JhbSIsInB1c2giLCJpZCIsIndvcmQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyVGV4dCIsImxhYmVsVGV4dCIsImlucHV0Iiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJvblByZXNzIiwiYnV0dG9uIiwiYnV0dG9uVGV4dCIsImxpc3QiLCJkYXRhIiwicmVuZGVySXRlbSIsIml0ZW0iLCJrZXlFeHRyYWN0b3IiLCJjcmVhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsIndpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwiZmxleCIsIm1hcmdpbiIsImZvbnRTdHlsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});