/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/Repository.js":
/*!**********************************!*\
  !*** ./components/Repository.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Repository\": () => (/* binding */ Repository)\n/* harmony export */ });\nfunction Repository(data) {\n  let repository = document.createElement('div');\n  repository.className = 'repository';\n  repository.innerHTML = toHTML(data);\n  console.log(data);\n  return repository;\n}\nfunction toHTML(data) {\n  let [user, nameRepository] = data.full_name.split('/');\n  return `\n        <div class=\"repository__header\">\n            <a class=\"repository__nameRepository\" href=\"${data.clone_url}\">${nameRepository}</a>\n\n            <span class=\"repository__user\">${user}</span>\n        </div>\n\n        <span class=\"repository__language\">Language: ${data.language || 'none'}</span>\n\n        <span class=\"repository__description\"><pre>Description: ${data.description || 'none'}</pre></span>\n    `;\n}\n\n//# sourceURL=webpack:///./components/Repository.js?");

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": () => (/* binding */ Search)\n/* harmony export */ });\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ \"./service.js\");\n/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Repository */ \"./components/Repository.js\");\n\n\nfunction Search(parentNode) {\n  let search = document.createElement('form');\n  search.className = 'search';\n  search.innerHTML = toHTML();\n  search.addEventListener('submit', submitForm);\n  document.addEventListener('keydown', submitFormKeydown);\n  addEventListenerButton(search);\n  return search;\n}\nfunction toHTML() {\n  return `\n        <div>\n            <label class=\"search__label\" for=\"repos\">Repository</label>\n            <input class=\"search__data\" name=\"repos\"></input>\n        </div>\n\n        <button class=\"search__send\">Find</button>\n    `;\n}\nfunction addEventListenerButton(search) {\n  let button = search.querySelector('.search__send');\n  button.addEventListener('click', event => {\n    submitForm(event);\n  });\n}\nasync function submitForm(event) {\n  event.preventDefault();\n  let input = document.querySelector('.search__data');\n  if (input.value.length < 3) {\n    alert('Few characters');\n  } else {\n    let repositories = await (0,_service__WEBPACK_IMPORTED_MODULE_0__.getRepositories)(input.value);\n    let parentNode = document.querySelector('.main');\n    let elements = document.querySelectorAll('.repository, .result');\n    console.log(elements);\n    for (let elem of elements) {\n      parentNode.removeChild(elem);\n    }\n    if (repositories.items.length === 0) {\n      let result = document.createElement('div');\n      result.className = 'result';\n      result.textContent = 'Nothing found';\n      parentNode.append(result);\n    }\n    for (let infoRepository of repositories.items) {\n      let repos = new _Repository__WEBPACK_IMPORTED_MODULE_1__.Repository(infoRepository);\n      parentNode.append(repos);\n    }\n  }\n}\nfunction submitFormKeydown(event) {\n  if (event.key === 'Enter') {\n    submitForm(event);\n  }\n}\n\n//# sourceURL=webpack:///./components/Search.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main */ \"./pages/main.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./scss/index.scss\");\n\n\nlet main = new _pages_main__WEBPACK_IMPORTED_MODULE_0__.Main();\ndocument.body.append(main);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Search */ \"./components/Search.js\");\n\nfunction Main() {\n  let main = document.createElement('div');\n  main.className = 'main';\n  appendElements(main);\n  return main;\n}\nfunction appendElements(parentNode) {\n  let search = new _components_Search__WEBPACK_IMPORTED_MODULE_0__.Search(parentNode);\n  parentNode.append(search);\n  let separator = document.createElement('div');\n  separator.className = 'separator';\n  parentNode.append(separator);\n}\n\n//# sourceURL=webpack:///./pages/main.js?");

/***/ }),

/***/ "./service.js":
/*!********************!*\
  !*** ./service.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRepositories\": () => (/* binding */ getRepositories)\n/* harmony export */ });\nasync function getRepositories(repos) {\n  let data = await fetch(`https://api.github.com/search/repositories?q=${repos}+in:name&per_page=10`).then(response => response.json());\n  return data;\n}\n\n//# sourceURL=webpack:///./service.js?");

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/index.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;