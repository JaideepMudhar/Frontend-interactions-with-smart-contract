"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assesment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assesment.sol/Assessment.json */ \"./artifacts/contracts/Assesment.sol/Assessment.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n    const atmABI = _artifacts_contracts_Assesment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const account = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(account);\n        }\n    };\n    const handleAccount = (account)=>{\n        if (account) {\n            console.log(\"Account connected: \", account);\n            setAccount(account);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getResult = async ()=>{\n        if (atm) {\n            setResult((await atm.getResult()).toNumber());\n        }\n    };\n    const addition = async ()=>{\n        if (atm) {\n            let tx = await atm.addition(4, 4);\n            await tx.wait();\n            getResult();\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm) {\n            let tx = await atm.minus(10, 5);\n            await tx.wait();\n            getResult();\n        }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 14\n            }, this);\n        }\n        if (result == undefined) {\n            getResult();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your Result: \",\n                        result\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: addition,\n                    children: \"Add 2 numbers\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    children: \"Subtract 2 numbers\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-15247bb64c99e1bc\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-15247bb64c99e1bc\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-15247bb64c99e1bc\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                    lineNumber: 107,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"15247bb64c99e1bc\",\n                children: \".container.jsx-15247bb64c99e1bc{text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jaide\\\\hardhat-tutorial\\\\pages\\\\index.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"IfVG7VKbmxL4wOg3JkV/40CRGfk=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVsQyxxQkFDRSw4REFBQytCO2tEQUFlOzswQkFDZCw4REFBQ0M7OzBCQUFPLDRFQUFDQzs7OEJBQUc7Ozs7Ozs7Ozs7O1lBQ1hQOzs7Ozs7Ozs7OztBQVNQLENBQUM7R0FoSHVCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2V0aGVyc30gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXRtX2FiaSBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Bc3Nlc21lbnQuc29sL0Fzc2Vzc21lbnQuanNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2V0aFdhbGxldCwgc2V0RXRoV2FsbGV0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYXRtLCBzZXRBVE1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcclxuICBjb25zdCBhdG1BQkkgPSBhdG1fYWJpLmFiaTtcclxuXHJcbiAgY29uc3QgZ2V0V2FsbGV0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHNldEV0aFdhbGxldCh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldGhXYWxsZXQpIHtcclxuICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHttZXRob2Q6IFwiZXRoX2FjY291bnRzXCJ9KTtcclxuICAgICAgaGFuZGxlQWNjb3VudChhY2NvdW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgY29uc29sZS5sb2cgKFwiQWNjb3VudCBjb25uZWN0ZWQ6IFwiLCBhY2NvdW50KTtcclxuICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgYWxlcnQoJ01ldGFNYXNrIHdhbGxldCBpcyByZXF1aXJlZCB0byBjb25uZWN0Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xyXG4gICAgXHJcbiAgICAvLyBvbmNlIHdhbGxldCBpcyBzZXQgd2UgY2FuIGdldCBhIHJlZmVyZW5jZSB0byBvdXIgZGVwbG95ZWQgY29udHJhY3RcclxuICAgIGdldEFUTUNvbnRyYWN0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QVRNQ29udHJhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhXYWxsZXQpO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBhdG1Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhdG1BQkksIHNpZ25lcik7XHJcbiBcclxuICAgIHNldEFUTShhdG1Db250cmFjdCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRSZXN1bHQgPSBhc3luYygpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgc2V0UmVzdWx0KChhd2FpdCBhdG0uZ2V0UmVzdWx0KCkpLnRvTnVtYmVyKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkaXRpb24gPSBhc3luYygpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLmFkZGl0aW9uKDQsNCk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKVxyXG4gICAgICBnZXRSZXN1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHdpdGhkcmF3ID0gYXN5bmMoKSA9PiB7XHJcbiAgICBpZiAoYXRtKSB7XHJcbiAgICAgIGxldCB0eCA9IGF3YWl0IGF0bS5taW51cygxMCw1KTtcclxuICAgICAgYXdhaXQgdHgud2FpdCgpXHJcbiAgICAgIGdldFJlc3VsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5pdFVzZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdXNlciBoYXMgTWV0YW1hc2tcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIHJldHVybiA8cD5QbGVhc2UgaW5zdGFsbCBNZXRhbWFzayBpbiBvcmRlciB0byB1c2UgdGhpcyBBVE0uPC9wPlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGlzIGNvbm5lY3RlZC4gSWYgbm90LCBjb25uZWN0IHRvIHRoZWlyIGFjY291bnRcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH0+UGxlYXNlIGNvbm5lY3QgeW91ciBNZXRhbWFzayB3YWxsZXQ8L2J1dHRvbj5cclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBnZXRSZXN1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPllvdXIgQWNjb3VudDoge2FjY291bnR9PC9wPlxyXG4gICAgICAgIDxwPllvdXIgUmVzdWx0OiB7cmVzdWx0fTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZGl0aW9ufT5BZGQgMiBudW1iZXJzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt3aXRoZHJhd30+U3VidHJhY3QgMiBudW1iZXJzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtnZXRXYWxsZXQoKTt9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGhlYWRlcj48aDE+V2VsY29tZSB0byB0aGUgTWV0YWNyYWZ0ZXJzIEFUTSE8L2gxPjwvaGVhZGVyPlxyXG4gICAgICB7aW5pdFVzZXIoKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF0bV9hYmkiLCJIb21lUGFnZSIsImV0aFdhbGxldCIsInNldEV0aFdhbGxldCIsInVuZGVmaW5lZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYXRtIiwic2V0QVRNIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY29udHJhY3RBZGRyZXNzIiwiYXRtQUJJIiwiYWJpIiwiZ2V0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwiYWNjb3VudHMiLCJnZXRBVE1Db250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiYXRtQ29udHJhY3QiLCJDb250cmFjdCIsImdldFJlc3VsdCIsInRvTnVtYmVyIiwiYWRkaXRpb24iLCJ0eCIsIndhaXQiLCJ3aXRoZHJhdyIsIm1pbnVzIiwiaW5pdFVzZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsIm1haW4iLCJoZWFkZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});