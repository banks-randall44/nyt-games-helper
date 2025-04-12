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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/View/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/Text/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TextInput/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/FlatList/index.js\");\n/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ \"(app-pages-browser)/./node_modules/react-native-web/dist/exports/StyleSheet/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"(app-pages-browser)/./src/app/spelling-bee/app.js\");\n/* harmony import */ var _server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server.js */ \"(app-pages-browser)/./src/app/spelling-bee/server.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListItem = (param)=>{\n    let { text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        style: style.listItem,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            style: style.listText,\n            children: text\n        }, void 0, false, {\n            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ListItem;\nconst Page = ()=>{\n    _s();\n    const [centerText, centerOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [lettersText, lettersOnChangeText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    let [pangrams, setPangrams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let [allOthers, setAllOthers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function handleClick() {\n        pangrams = [];\n        allOthers = [];\n        let file = await _server_js__WEBPACK_IMPORTED_MODULE_3__.readWordList();\n        let matches = _app_js__WEBPACK_IMPORTED_MODULE_2__.findMatches(file.split(\"\\n\"), lettersText, centerText);\n        for(var i = 0; i < matches.pangrams.length; i++){\n            let pangram = matches.pangrams[i];\n            pangrams.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n                text: pangram\n            });\n        }\n        for(var i = 0; i < matches.allOthers.length; i++){\n            let word = matches.allOthers[i];\n            allOthers.push({\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n                text: word\n            });\n        }\n        console.log('pangrams:');\n        console.log(pangrams);\n        console.log('allOthers:');\n        console.log(allOthers);\n        setPangrams([\n            ...pangrams\n        ]);\n        setAllOthers([\n            ...allOthers\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: style.headerText,\n                children: \"Spelling Bee\"\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                style: {\n                    itemAlign: 'center'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Letters: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: lettersOnChangeText,\n                        value: lettersText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Center: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        style: style.input,\n                        onChangeText: centerOnChangeText,\n                        value: centerText\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    onPress: handleClick,\n                    style: style.button,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.buttonText,\n                        children: \"Find Words\"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"Pangrams: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: pangrams,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        style: style.labelText,\n                        children: \"All other valid words: \"\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            data: allOthers,\n                            renderItem: (param)=>{\n                                let { item } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_native_web__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    style: style.listText,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 49\n                                }, void 0);\n                            },\n                            keyExtractor: (item)=>item.id\n                        }, void 0, false, {\n                            fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/randall/projects/nyt-games-helper/src/app/spelling-bee/page.jsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Page, \"ZFonjce9BlqtGPJ7KskU0Lc+GHM=\");\n_c1 = Page;\nconst style = react_native_web__WEBPACK_IMPORTED_MODULE_10__[\"default\"].create({\n    input: {\n        backgroundColor: 'white',\n        color: 'black',\n        textAlign: 'center',\n        width: 100\n    },\n    button: {\n        backgroundColor: \"#428af5\",\n        textAlign: 'center',\n        color: 'white',\n        width: 80,\n        marginTop: 20,\n        marginBottom: 20\n    },\n    buttonText: {\n        color: 'white'\n    },\n    headerText: {\n        fontSize: 48,\n        fontFamily: 'nyt-karnakcondensed',\n        color: 'white'\n    },\n    labelText: {\n        color: 'white',\n        fontStyle: 'italic'\n    },\n    listItem: {},\n    listText: {\n        color: 'white',\n        paddingLeft: '2em'\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"ListItem\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3BlbGxpbmctYmVlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV1QztBQUN5RDtBQUN2RTtBQUNNO0FBQ007QUFFckMsTUFBTVcsV0FBVztRQUFDLEVBQUNDLElBQUksRUFBQzt5QkFDcEIsOERBQUNULHdEQUFJQTtRQUFDVSxPQUFPQSxNQUFNQyxRQUFRO2tCQUN2Qiw0RUFBQ1Qsd0RBQUlBO1lBQUNRLE9BQU9BLE1BQU1FLFFBQVE7c0JBQUdIOzs7Ozs7Ozs7Ozs7S0FGaENEO0FBTU4sTUFBTUssT0FBTzs7SUFDVCxNQUFNLENBQUNDLFlBQVlDLG1CQUFtQixHQUFHakIsK0NBQVFBLENBQUM7SUFDbEQsTUFBTSxDQUFDa0IsYUFBYUMsb0JBQW9CLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVwRCxJQUFJLENBQUNvQixVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLElBQUksQ0FBQ3NCLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsZUFBZXdCO1FBQ1hKLFdBQVcsRUFBRTtRQUNiRSxZQUFZLEVBQUU7UUFFZCxJQUFJRyxPQUFPLE1BQU1oQixvREFBbUI7UUFDcEMsSUFBSWtCLFVBQVVuQixnREFBZSxDQUFDaUIsS0FBS0ksS0FBSyxDQUFDLE9BQU9YLGFBQWFGO1FBRTdELElBQUssSUFBSWMsSUFBSSxHQUFHQSxJQUFJSCxRQUFRUCxRQUFRLENBQUNXLE1BQU0sRUFBRUQsSUFBSztZQUM5QyxJQUFJRSxVQUFVTCxRQUFRUCxRQUFRLENBQUNVLEVBQUU7WUFDakNWLFNBQVNhLElBQUksQ0FBQztnQkFDVkMsSUFBSTNCLGdEQUFFQTtnQkFDTkksTUFBTXFCO1lBQ1Y7UUFDSjtRQUNBLElBQUssSUFBSUYsSUFBSSxHQUFHQSxJQUFJSCxRQUFRTCxTQUFTLENBQUNTLE1BQU0sRUFBRUQsSUFBSztZQUMvQyxJQUFJSyxPQUFPUixR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LWdhbWVzLWhlbHBlci9zcmMvYXBwL3NwZWxsaW5nLWJlZS9wYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBSZWFjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0eWxlU2hlZXQsIFZpZXcsIFRvdWNoYWJsZU9wYWNpdHksIFRleHQsIFRleHRJbnB1dCwgRmxhdExpc3QgfSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJ1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi9hcHAuanMnXG5pbXBvcnQgKiBhcyBzZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXIuanMnXG5cbmNvbnN0IExpc3RJdGVtID0gKHt0ZXh0fSkgPT4gKFxuICAgIDxWaWV3IHN0eWxlPXtzdHlsZS5saXN0SXRlbX0+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZS5saXN0VGV4dH0+e3RleHR9PC9UZXh0PlxuICAgIDwvVmlldz5cbilcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbY2VudGVyVGV4dCwgY2VudGVyT25DaGFuZ2VUZXh0XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtsZXR0ZXJzVGV4dCwgbGV0dGVyc09uQ2hhbmdlVGV4dF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGxldCBbcGFuZ3JhbXMsIHNldFBhbmdyYW1zXSA9IHVzZVN0YXRlKFtdKVxuICAgIGxldCBbYWxsT3RoZXJzLCBzZXRBbGxPdGhlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgcGFuZ3JhbXMgPSBbXVxuICAgICAgICBhbGxPdGhlcnMgPSBbXVxuXG4gICAgICAgIGxldCBmaWxlID0gYXdhaXQgc2VydmVyLnJlYWRXb3JkTGlzdCgpXG4gICAgICAgIGxldCBtYXRjaGVzID0gYXBwLmZpbmRNYXRjaGVzKGZpbGUuc3BsaXQoXCJcXG5cIiksIGxldHRlcnNUZXh0LCBjZW50ZXJUZXh0KVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hlcy5wYW5ncmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhbmdyYW0gPSBtYXRjaGVzLnBhbmdyYW1zW2ldXG4gICAgICAgICAgICBwYW5ncmFtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogdjQoKSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBwYW5ncmFtXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hlcy5hbGxPdGhlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB3b3JkID0gbWF0Y2hlcy5hbGxPdGhlcnNbaV1cbiAgICAgICAgICAgIGFsbE90aGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogdjQoKSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB3b3JkIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYW5ncmFtczonKVxuICAgICAgICBjb25zb2xlLmxvZyhwYW5ncmFtcylcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbE90aGVyczonKVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxPdGhlcnMpXG5cbiAgICAgICAgc2V0UGFuZ3JhbXMoWy4uLnBhbmdyYW1zXSlcbiAgICAgICAgc2V0QWxsT3RoZXJzKFsuLi5hbGxPdGhlcnNdKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUuaGVhZGVyVGV4dH0+U3BlbGxpbmcgQmVlPC9UZXh0PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3tpdGVtQWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlLmxhYmVsVGV4dH0+TGV0dGVyczogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VUZXh0PXtsZXR0ZXJzT25DaGFuZ2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGV0dGVyc1RleHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5DZW50ZXI6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGUuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlVGV4dD17Y2VudGVyT25DaGFuZ2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2VudGVyVGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgICAgPFZpZXc+XG4gICAgICAgICAgICAgICAgPFRvdWNoYWJsZU9wYWNpdHkgb25QcmVzcz17aGFuZGxlQ2xpY2t9IHN0eWxlPXtzdHlsZS5idXR0b259PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUuYnV0dG9uVGV4dH0+RmluZCBXb3JkczwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1RvdWNoYWJsZU9wYWNpdHk+XG4gICAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5QYW5ncmFtczogPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgICAgICAgICA8RmxhdExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3BhbmdyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHtpdGVtfSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXtzdHlsZS5saXN0VGV4dH0+e2l0ZW0udGV4dH08L0xpc3RJdGVtPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGUubGFiZWxUZXh0fT5BbGwgb3RoZXIgdmFsaWQgd29yZHM6IDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXRMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXthbGxPdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoe2l0ZW19KSA9PiA8VGV4dCBzdHlsZT17c3R5bGUubGlzdFRleHR9PntpdGVtLnRleHR9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleUV4dHJhY3Rvcj17aXRlbSA9PiBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBpbnB1dDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogMTAwXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MjhhZjVcIixcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHdpZHRoOiA4MCxcbiAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMFxuICAgIH0sXG4gICAgYnV0dG9uVGV4dDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgIH0sXG4gICAgaGVhZGVyVGV4dDoge1xuICAgICAgICBmb250U2l6ZTogNDgsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdueXQta2FybmFrY29uZGVuc2VkJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICB9LFxuICAgIGxhYmVsVGV4dDoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJ1xuICAgIH0sXG4gICAgbGlzdEl0ZW06IHtcbiAgICB9LFxuICAgIGxpc3RUZXh0OiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBwYWRkaW5nTGVmdDogJzJlbSdcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlU2hlZXQiLCJWaWV3IiwiVG91Y2hhYmxlT3BhY2l0eSIsIlRleHQiLCJUZXh0SW5wdXQiLCJGbGF0TGlzdCIsInY0IiwiYXBwIiwic2VydmVyIiwiTGlzdEl0ZW0iLCJ0ZXh0Iiwic3R5bGUiLCJsaXN0SXRlbSIsImxpc3RUZXh0IiwiUGFnZSIsImNlbnRlclRleHQiLCJjZW50ZXJPbkNoYW5nZVRleHQiLCJsZXR0ZXJzVGV4dCIsImxldHRlcnNPbkNoYW5nZVRleHQiLCJwYW5ncmFtcyIsInNldFBhbmdyYW1zIiwiYWxsT3RoZXJzIiwic2V0QWxsT3RoZXJzIiwiaGFuZGxlQ2xpY2siLCJmaWxlIiwicmVhZFdvcmRMaXN0IiwibWF0Y2hlcyIsImZpbmRNYXRjaGVzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicGFuZ3JhbSIsInB1c2giLCJpZCIsIndvcmQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyVGV4dCIsIml0ZW1BbGlnbiIsImxhYmVsVGV4dCIsImlucHV0Iiwib25DaGFuZ2VUZXh0IiwidmFsdWUiLCJvblByZXNzIiwiYnV0dG9uIiwiYnV0dG9uVGV4dCIsImRhdGEiLCJyZW5kZXJJdGVtIiwiaXRlbSIsImtleUV4dHJhY3RvciIsImNyZWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJwYWRkaW5nTGVmdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/spelling-bee/page.jsx\n"));

/***/ })

});