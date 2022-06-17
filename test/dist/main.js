/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./test/md/test.md":
/*!*************************!*\
  !*** ./test/md/test.md ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"<table border='1' cellspacing='0'>\\n<thead>\\n<tr>\\n<th>表头</th>\\n<th>表头</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>单元格</td>\\n<td>单元格</td>\\n</tr>\\n<tr>\\n<td>单元格</td>\\n<td>单元格</td>\\n</tr>\\n</tbody>\\n</table>\\n<table border='1' cellspacing='0'>\\n<thead>\\n<tr>\\n<th>表头</th>\\n<th>表头</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>单元格</td>\\n<td>单元格</td>\\n</tr>\\n<tr>\\n<td>单元格</td>\\n<td>单元格</td>\\n</tr>\\n</tbody>\\n</table>\\n<table border='1' cellspacing='0'>\\n<thead>\\n<tr>\\n<th>表头</th>\\n<th>表头</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>单元格</td>\\n<td>单元格</td>\\n</tr>\\n<tr>\\n<td>单元格</td>\\n<td>单元格</td>\\n</tr>\\n</tbody>\\n</table>\\n\"\n\n//# sourceURL=webpack://md-loader/./test/md/test.md?");

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _md_test_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md/test.md */ \"./test/md/test.md\");\n/* harmony import */ var _md_test_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_md_test_md__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconsole.log(\"test: \", (_md_test_md__WEBPACK_IMPORTED_MODULE_0___default()));\r\nconst a = 1;\r\n// console.log(test);\n\n//# sourceURL=webpack://md-loader/./test/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./test/index.js");
/******/ 	
/******/ })()
;