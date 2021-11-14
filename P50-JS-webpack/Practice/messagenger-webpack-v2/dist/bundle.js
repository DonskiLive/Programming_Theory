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

/***/ "./src/js/comment.js":
/*!***************************!*\
  !*** ./src/js/comment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n \n\nclass Comment {\n    constructor(userId, messageId, text, data) {\n        this.id = Comment.id++\n        this.userId = userId\n        this.messageId = messageId\n        this.text = text\n        this.data = data\n    }\n\n    static id = 0\n\n    renderComment() {\n        return `\n            <div>\n                <h5>${this.text}</h5>\n                <p>${this.data}, comment by ${(0,_data__WEBPACK_IMPORTED_MODULE_0__.findUserById)(this.userId).name}</p>\n            </div>\n        `\n    }\n}\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/comment.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findUserById\": () => (/* binding */ findUserById),\n/* harmony export */   \"addNewMessage\": () => (/* binding */ addNewMessage),\n/* harmony export */   \"findMessagesByUserId\": () => (/* binding */ findMessagesByUserId),\n/* harmony export */   \"users\": () => (/* binding */ users),\n/* harmony export */   \"messages\": () => (/* binding */ messages)\n/* harmony export */ });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/js/user.js\");\n/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ \"./src/js/comment.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n\n\n\n\n//const URL = 'http//google.com'\n\nconst users = [\n    new _user__WEBPACK_IMPORTED_MODULE_0__.default('Vasya Pupkin', 'Berlin'),   // -> id \n    new _user__WEBPACK_IMPORTED_MODULE_0__.default('Maksym Kostenko', 'Mainz'),\n    new _user__WEBPACK_IMPORTED_MODULE_0__.default('Ivan Ivanov', 'Kiev')\n]\n\nconst messages = [\n    new _message__WEBPACK_IMPORTED_MODULE_2__.default(0, 'Hello', 'World', new Date().toLocaleDateString()),\n    new _message__WEBPACK_IMPORTED_MODULE_2__.default(0, 'About', 'Meeting', new Date().toLocaleDateString()),\n    new _message__WEBPACK_IMPORTED_MODULE_2__.default(1, 'Text', 'Info', new Date().toLocaleDateString())\n]\n\nfunction findUserById(id){\n    return users.find(user => user.id === id)   //{name: Vasya, city: Berlin, id:0}\n}\n\nfunction addNewMessage(message){\n    messages.push(message);\n}\n\nfunction addCommentToMessage(messageId, comment){\n    const message = messages.find(m => m.id === messageId);\n    message.comments.push(comment);\n}\n\nfunction findMessagesByUserId(userId){\n    return messages.filter(m => m.userId === userId)\n}\n\naddCommentToMessage(0, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(0,0, 'very good',new Date().toLocaleDateString()));\naddCommentToMessage(0, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(1,0, 'nice to see you', new Date().toLocaleDateString()));\naddCommentToMessage(1, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(2,1, 'hello!', new Date().toLocaleDateString()));\naddCommentToMessage(1, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(0,1, 'good bye!', new Date().toLocaleDateString()));\n\n//export default URL\n\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/data.js?");

/***/ }),

/***/ "./src/js/forms.js":
/*!*************************!*\
  !*** ./src/js/forms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAddMessageForm\": () => (/* binding */ renderAddMessageForm)\n/* harmony export */ });\nfunction renderAddMessageForm(userId){\n    return`\n    <h4>Write new message</h4>\n    <form name = 'message' action = '#'>\n    <input \n        id ='title' \n        class = 'form-control'\n        type = 'text'\n        name = 'title'\n        placeholder = 'type title'\n     />\n     <textarea \n        id ='text' \n        class = 'form-control'\n        type = 'text'\n        name = 'text'\n        placeholder = 'type text'\n     ></textarea>\n    <button class = 'add-btn' name = 'button' data-user = ${userId}>add message</button>\n    </form>\n    `\n}\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/forms.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/js/forms.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n\r\n\r\n\r\n\r\nconst usersList = document.querySelector('.users-list')\r\nconst leftBox = document.querySelector('.left');\r\nconst listMessages = document.querySelector('.message-list');\r\nconst messageForm = document.querySelector('.form')\r\nconst rightBox = document.querySelector('.right');\r\n\r\nconst renderUsersList = (array) => {\r\n    array.forEach(item => {\r\n        usersList.innerHTML += item.renderUser()\r\n    })\r\n}\r\n\r\nrenderUsersList(_data__WEBPACK_IMPORTED_MODULE_0__.users)\r\n\r\nusersList.onclick = (event) => {\r\n    rightBox.innerHTML = ''\r\n    if(event.target.tagName === 'H3'){\r\n        const userId = +event.target.dataset.id;\r\n        renderLeftPart(userId)\r\n    }\r\n}\r\n\r\nfunction renderLeftPart(userId){\r\n    const userMessages = (0,_data__WEBPACK_IMPORTED_MODULE_0__.findMessagesByUserId)(userId);\r\n        console.log(userMessages)\r\n        const messageList = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'\r\n        listMessages.innerHTML = `${messageList}`;\r\n        messageForm.innerHTML = `${(0,_forms__WEBPACK_IMPORTED_MODULE_1__.renderAddMessageForm)(userId)}`;\r\n        const form = leftBox.querySelector('form');\r\n        form.onsubmit = formClickHandler;\r\n}\r\n\r\nfunction formClickHandler(e){\r\n    e.preventDefault();\r\n    const form = e.target;\r\n    const userId = +form.button.dataset.user;\r\n    const message = new _message__WEBPACK_IMPORTED_MODULE_2__.default(\r\n        userId,\r\n        form.title.value,\r\n        form.text.value,\r\n        new Date().toLocaleDateString()\r\n    )\r\n    ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.addNewMessage)(message);\r\n    rightBox.innerHTML = '';\r\n    renderLeftPart(userId);\r\n\r\n}\r\n\r\nlistMessages.onclick = (event) => {\r\n    let target = event.target;\r\n    if(target.tagName !== 'DIV'){\r\n        target = event.target.parentNode\r\n    }\r\n    const message = _data__WEBPACK_IMPORTED_MODULE_0__.messages.find(m => m.id === +target.dataset.message);\r\n    rightBox.innerHTML = (message) ? (0,_message__WEBPACK_IMPORTED_MODULE_2__.renderFullInfo)(message) : ''\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/message.js":
/*!***************************!*\
  !*** ./src/js/message.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Message),\n/* harmony export */   \"renderFullInfo\": () => (/* binding */ renderFullInfo)\n/* harmony export */ });\n\nclass Message {\n    constructor(userId, title, text, data) {\n        this.userId = userId\n        this.title = title\n        this.text = text\n        this.data = data\n        this.comments = []\n        this.id = Message.id++\n    }\n\n    static id = 0\n\n    renderMessage() {\n        return `\n            <div data-message=\"${this.id}\">\n                <h4>${this.title}</h4>\n                <p>Published: ${this.data}</p>\n            </div>\n        `\n    }\n\n\n}\n\nfunction renderFullInfo(message) {\n    return `\n        <div>\n           <h3>${message.title}</h3>\n           <p>${message.text}</p>\n           <h4>Published: ${message.data}</h4>\n           <hr>\n           ${(message.comments.length === 0) ? \"<p>No comment</p>\" : message.comments.map(item => item.renderComment()).join('')}\n        </div>\n    `\n}\n\n//message.renderFullInfo()\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/message.js?");

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User{\n    constructor(name, city) {\n        this.name = name\n        this.city = city\n        this.id = User.id++\n    }\n\n    static id = 0\n\n    renderUser() {\n        return `<h3 data-id =\"${this.id}\">${this.name}, ${this.city}</h3>`\n    }\n}\n\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/user.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;