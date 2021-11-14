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

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact{\n    constructor (name, phone, email, address, description){\n        this.name = name,\n        this.phone = phone,\n        this.email = email,\n        this.address = address,\n        this.description = description\n    }\n}\n\n//# sourceURL=webpack://phone-book-v2/./src/Contact.js?");

/***/ }),

/***/ "./src/contactForm.js":
/*!****************************!*\
  !*** ./src/contactForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderAddContact)\n/* harmony export */ });\nfunction renderAddContact(){\n    return `\n    <form name = \"addContactForm\" action=\"#\">  \n     <input\n      id=\"inputName\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"name\"\n      placeholder=\"Type name\"\n     />\n     <input\n      id=\"inputPhone\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"phone\"\n      placeholder=\"Type phone\"\n     />\n     <input\n      id=\"inputEmail\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"email\"\n      placeholder=\"Type email\"\n     />\n     <input\n      id=\"inputAddress\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"address\"\n      placeholder=\"Type address\"\n     />\n     <textarea\n     id=\"inputDesc\"\n      class=\"form-control\"\n      type=\"text\"\n      name=\"description\"\n      placeholder=\"Type description\"\n     ></textarea>\n     <div class=\"buttons\"><button class=\"add-btn\">Add</button></div>\n    </form>`\n\n}\n\n//# sourceURL=webpack://phone-book-v2/./src/contactForm.js?");

/***/ }),

/***/ "./src/contactsList.js":
/*!*****************************!*\
  !*** ./src/contactsList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderContacts)\n/* harmony export */ });\nfunction renderContacts(array) {\n    return `\n        <ul class = 'list'>\n         ${array.map(mapToContactRow).join('')}\n         </ul>\n         <div class = 'contact-view'>No selected contact</div>\n    `\n}\n\n\nfunction mapToContactRow(contact, index) {\n    return `\n    <li class = 'list-item' data-index = ${index}>\n        <h2 class = 'title'>${contact.name}</h2>\n        <h3 class = 'sub-title'>${contact.phone}</h3>\n        <div class = 'delete'></div>\n    </li>\n    `\n}\n\n\n//# sourceURL=webpack://phone-book-v2/./src/contactsList.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHome)\n/* harmony export */ });\nfunction renderHome(){\n    return `\n    <img src=\"./img/contact_us.jpg\" alt =\"homeview\">\n    `\n}\n\n//# sourceURL=webpack://phone-book-v2/./src/home.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderLogin)\n/* harmony export */ });\nfunction renderLogin(){\n    return`\n    <form name = \"loginForm\" action=\"#\">\n       <input\n         id=\"login\"\n         class=\"form-control\"\n         type=\"text\"\n         name=\"login\"\n         placeholder=\"Type login\"\n       />\n       <input\n         id=\"password\"\n         class=\"form-control\"\n         type=\"text\" \n         name=\"password\"\n         placeholder=\"Type password\"\n       />\n       <div class=\"buttons\">\n       <button id =\"login-btn\" class=\"add-btn\">login</button>\n       <button id = \"registration-btn\"class=\"add-btn\">registration</button>\n       </div>\n     </form>\n    `\n}\n\n//# sourceURL=webpack://phone-book-v2/./src/login.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navigationView)\n/* harmony export */ });\nfunction navigationView(isAuth, active, navClickHandler) {\n    const div = document.createElement('div');\n    div.className = 'nav';\n    div.innerHTML = `\n    <ul>\n    ${isAuth ? `\n        <li><a href=\"contacts\" ${active === 'contacts' ? 'class = \"active\"' : \"\"}>Contacts</a></li>\n          <li><a  href=\"add\" ${active === 'add' ? 'class = \"active\"' : \"\"}>Add new contact</a></li>\n          <li><a href=\"logout\" ${active === 'logout' ? 'class = \"active\"' : \"\"}>logout</a></li>\n        `: `<li><a href=\"login\">Login</a></li>`\n        }\n    </ul>\n    `;\n    div.onclick = navClickHandler;\n    return div\n}\n\n\n\n//# sourceURL=webpack://phone-book-v2/./src/navigation.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactForm */ \"./src/contactForm.js\");\n/* harmony import */ var _contactsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactsList */ \"./src/contactsList.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validation */ \"./src/validation.js\");\n/* harmony import */ var _viewContact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewContact */ \"./src/viewContact.js\");\n\n\n\n\n\n\n\n\n\n\nfunction main(){\nconst root = document.querySelector('#root');\n\nconst state = {\n    currentUser: null,\n    location: null,\n    contacts: []\n}\n\nsetUp();\n\nfunction setUp(){\n    const currentUser = _store__WEBPACK_IMPORTED_MODULE_6__.default.getCurrentUser();\n    if(!currentUser){\n        navigation('home');\n        return\n    }\n    state.currentUser = currentUser;\n    state.contacts = _store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(currentUser);\n    navigation('contacts');\n}\n\nfunction navigation(path) {\n   if( path !== state.location){\n       if(path === 'logout'){\n           _store__WEBPACK_IMPORTED_MODULE_6__.default.logout();\n           state.currentUser = null;\n           state.contacts = [];\n           state.location = 'home'\n       }else{\n           state.location = path\n       }\n   }\n   app(state.location, state.contacts);\n}\n\nfunction app(location, contacts){\n    root.innerHTML = '';\n    root.append(\n        (0,_navigation__WEBPACK_IMPORTED_MODULE_5__.default)(state.currentUser, location, navClickHandler )\n    );\n    root.append(document.createElement('hr'));\n    const content = contentRender(location, contacts);\n    root.append(content);\n}\n\nfunction navClickHandler(event){\n    event.preventDefault();\n    if (event.target.tagName === 'A') {\n        navigation(event.target.getAttribute('href'))\n    }\n}\n\nfunction contentRender(location, contacts){\n    const div = document.createElement('div');\n    switch(location){\n        case 'logout':\n        case 'home' :{\n            div.className = 'home';\n            div.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_3__.default)();\n            break\n        }\n       case 'login':{\n           div.className = 'add-contact';\n           div.innerHTML = (0,_login__WEBPACK_IMPORTED_MODULE_4__.default)();\n           div.querySelector('form').onsubmit = loginSubmitHandler;\n           break\n       }\n       case 'contacts':{\n           div.className = 'contacts';\n           div.innerHTML = (0,_contactsList__WEBPACK_IMPORTED_MODULE_2__.default)(contacts);\n           div.querySelector('.list').onclick = contactClickHandler;\n           break\n       }\n       case 'add':{\n           div.className = 'add-contact';\n           div.innerHTML = (0,_contactForm__WEBPACK_IMPORTED_MODULE_1__.default)();\n           div.querySelector('form').onsubmit = addContactHandler\n           break\n       }\n\n    }\n    return div;\n}\n\n\nfunction loginSubmitHandler(e){\n    e.preventDefault();\n    console.log(e.submitter)\n    const form = e.target;\n    const email = form.login.value;\n    const password = form.password.value;\n    let regSuccess = true;\n    if(email ==='' || password ===''){\n        regSuccess = false;\n        showMessage(regSuccess, 'The data is uncomplete')\n    }else{\n        if(e.submitter.id === 'login-btn'){\n            try{\n                _store__WEBPACK_IMPORTED_MODULE_6__.default.login(email, password)\n            }catch(error){\n                regSuccess = false\n                showMessage(regSuccess, error.message)\n            }finally{\n                form.reset()\n            }\n        }if(e.submitter.id === 'registration-btn'){\n            try{\n                _store__WEBPACK_IMPORTED_MODULE_6__.default.registration(email, password)\n            }catch(error){\n                regSuccess = false;\n                showMessage(regSuccess, error.message)\n            }\n            finally{\n                form.reset()\n            }\n        }\n    }\n    if(regSuccess){\n        state.currentUser = email;\n        state.location = 'contacts';\n        state.contacts = _store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(email);\n        app(state.location, state.contacts)\n    }\n\n}\n\nfunction addContactHandler(event){\n    event.preventDefault();\n    const form = event.target\n    console.log(form.elements)\n    if(!(0,_validation__WEBPACK_IMPORTED_MODULE_7__.default)(form, showMessage)){\n        const result = _store__WEBPACK_IMPORTED_MODULE_6__.default.addContact(state.currentUser, new _Contact__WEBPACK_IMPORTED_MODULE_0__.default(\n            form.name.value,\n            form.phone.value,\n            form.email.value,\n            form.address.value,\n            form.description.value\n        ));\n        \n        if(result){\n            showMessage(result, form.name.value);\n            state.contacts = _store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(state.currentUser)\n        }\n    \n    }\n    form.reset();\n}\n\nfunction contactClickHandler(event) {\n    let li = event.target;\n    if (li.classList.contains('delete')) {\n        _store__WEBPACK_IMPORTED_MODULE_6__.default.deleteContact(state.currentUser, li.dataset.index);\n        state.contacts = _store__WEBPACK_IMPORTED_MODULE_6__.default.getAllContacts(state.currentUser);\n        if(state.contacts.length === 0){\n            localStorage.removeItem(state.currentUser)\n        }\n        app(state.location, state.contacts)\n    } else {\n        if (li.tagName !== 'LI') {\n            li = event.target.parentNode\n        }\n        root.querySelectorAll('li').forEach((item) => item.classList.remove('item-active'));\n        li.classList.add('item-active');\n        const contact  = state.contacts[li.dataset.index]\n        document.querySelector('.contact-view').innerHTML = (0,_viewContact__WEBPACK_IMPORTED_MODULE_8__.default)(contact)  \n    }\n}\nconsole.log('hello!')\n\n}\nfunction showMessage(formIsComplit, text){\n    let div = root.querySelector('.alert');\n    if(!div){\n        div = document.createElement('div');\n        root.querySelector('.add-contact').prepend(div)\n    }\n    div.className = `alert ${formIsComplit ? 'alert-success' : 'alert-danger'}`;\n    div.innerHTML = formIsComplit ? `Contact ${text} was added`: text\n}\n\n\n\nmain();\n\n//# sourceURL=webpack://phone-book-v2/./src/script.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\n    static login(email, password) {\n        let users = localStorage.getItem('users');\n        if (users !== null) {\n            users = JSON.parse(users);\n            if (users[email] === password) {\n                localStorage.setItem('currentUser', email);\n                return true\n            }\n        }\n        throw new Error('Wrong email or password')\n    }\n\n    static registration(email, password) {\n        console.log('hello!')\n        const json = localStorage.getItem('users')\n        let users = {}\n        if (json !== null) {\n            users = JSON.parse(json)\n            for (let key in users) {\n                if (email === key) {\n                    throw new Error(`User with ${email} already exist`)\n                }\n            }\n        }\n        users[email] = password\n        localStorage.setItem('users', JSON.stringify(users))\n        localStorage.setItem('currentUser', email)\n        return true\n    }\n\n\n    static getCurrentUser() {\n        return localStorage.getItem('currentUser')\n    }\n\n    static logout() {\n        localStorage.removeItem('currentUser')\n    }\n\n    static addContact(email, contact) {\n        const json = localStorage.getItem(email);\n        /* let contacts = []\n        if(json !== null){\n            contacts = JSON.parse(json)\n        } */\n        const contacts = (json !== null) ? JSON.parse(json) : []\n        contacts.push(contact);\n        localStorage.setItem(email, JSON.stringify(contacts));\n        return true\n    }\n\n    static deleteContact(email, index) {\n        const contacts = JSON.parse(localStorage.getItem(email));\n        contacts.splice(index, 1);\n        localStorage.setItem(email, JSON.stringify(contacts))\n    }\n\n    static getAllContacts(email) {\n        const contacts = localStorage.getItem(email);\n        return contacts ? JSON.parse(contacts) : []\n    }\n\n    /* static getContactByIndex(email, index) {\n        const contacts = this.getAllContacts(email);\n        return contacts[index]\n    } */\n}\n\n//# sourceURL=webpack://phone-book-v2/./src/store.js?");

/***/ }),

/***/ "./src/validation.js":
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formValidation)\n/* harmony export */ });\nfunction formValidation(form, showMessage){\n    let hasError = false;\n    console.log('validation')\n     for(let element of form){\n         if(element.localName !== 'button'){           \n             if(element.value.trim() === ''){\n                 element.classList.add('is-invalid');\n                 hasError = true;\n             }else{\n                element.classList.remove('is-invalid');\n             }\n         }\n     }\n     if(hasError){\n         showMessage(false, 'All fields schould be fill!!!')\n     }\n     return hasError;\n}\n\n\n\n\n\n//# sourceURL=webpack://phone-book-v2/./src/validation.js?");

/***/ }),

/***/ "./src/viewContact.js":
/*!****************************!*\
  !*** ./src/viewContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactView)\n/* harmony export */ });\nfunction contactView(contact){\n    return `\n    <h2>${contact.name}</h2>\n    <div class=\"contact-view-row\">\n    <img src=\"./img/technology.png\" alt=\"\" />\n    <h3>${contact.phone}</h3>\n    </div>\n    <div class=\"contact-view-row\">\n    <img src=\"./img/multimedia.png\" alt=\"\" />\n    <h3>${contact.email}</h3>\n    </div>\n    <div class=\"contact-view-row\">\n    <img src=\"./img/buildings.png\" alt=\"\" />\n    <h3 \">${contact.address}</h3>\n    </div>\n    <p>${contact.description}</p>\n    `\n}\n\n\n\n//# sourceURL=webpack://phone-book-v2/./src/viewContact.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;