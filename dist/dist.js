/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controllers/ImcController.js":
/*!******************************************!*\
  !*** ./src/controllers/ImcController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImcController)
/* harmony export */ });
/* harmony import */ var _drivers_ImcDriver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drivers/ImcDriver.js */ "./src/drivers/ImcDriver.js");


class ImcController {
    constructor() {
        this.imcDriver = new _drivers_ImcDriver_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    
    loadTable(callback) {
        this.imcDriver
            .getTableData()
            .then(callback);
    }

    calculate(person, callback) {
        this.imcDriver
            .calculate(person)
            .then(callback);
    }
}

/***/ }),

/***/ "./src/drivers/ImcDriver.js":
/*!**********************************!*\
  !*** ./src/drivers/ImcDriver.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImcDriver)
/* harmony export */ });
/* harmony import */ var _http_HttpUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/HttpUtil.js */ "./src/http/HttpUtil.js");


class ImcDriver {
    constructor() {
        this.xhr = new _http_HttpUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    handleRestResponse(rawResponse) {
        return rawResponse.json();
    }

    getTableData() {
        return this
            .xhr
            .get('http://localhost:8080', '/imc/table')
            .then(this.handleRestResponse);
    }

    calculate(person) {
        return this
            .xhr
            .post('http://localhost:8080', '/imc/calculate', person.toObject())
            .then(this.handleRestResponse);
    }
}

/***/ }),

/***/ "./src/framework/ViewComponent.js":
/*!****************************************!*\
  !*** ./src/framework/ViewComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewComponent)
/* harmony export */ });
class ViewComponent {
    constructor(lookupName) {
        this.componentName = lookupName;
        console.log(`Inicializando um novo componente ${this.componentName}...`);
        this.element = document.querySelector(this.componentName);
        this.state = {};
    }

    onLoad() {
        console.log('no implementation for onLoad...');
        this.paint();
    }

    observe(obj) {
        console.log(`observing obj [${obj}]`);
        const self = this;
        if (!obj) return obj;
        return new Proxy(obj, {
            set (target, prop, value, receiver) {
                const updated = Reflect.set(target, prop, value);
                console.log(`updated ... ${updated}`);
                if (target.isValid()) {
                    console.log('target is valid, sync state...');
                    console.log(self);
                    console.log(target);
                    self.setObserveReady(target);
                    return true;
                }
                
                console.log('target still invalid, skipping state update...');
                return true;
            }
        });
    }

    setObserveReady(obj) {
        throw new Error(`No observeReady implementation provided for ${this.componentName}`);
    }

    render() {
        throw new Error(`No implementation provided to view component ${this.componentName}`);
    }

    paint() {
        this.element.innerHTML = this.render();
    }

    setState(state) {
        this.state = state;
        this.paint();
    }
}

/***/ }),

/***/ "./src/http/HttpUtil.js":
/*!******************************!*\
  !*** ./src/http/HttpUtil.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HttpUtil)
/* harmony export */ });
class HttpUtil {
    get(hostname, url) {
        return fetch(`${hostname}${url}`)
    }

    post(hostname, url, body) {
        const options = {
            method: 'post',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
        };
        return fetch(`${hostname}${url}`, options);
    }
}

/***/ }),

/***/ "./src/models/Person.js":
/*!******************************!*\
  !*** ./src/models/Person.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Person)
/* harmony export */ });
class Person {
    constructor(theHeight, theWeight) {
        this._height = theHeight;
        this._weight = theWeight;
        this.imc = 0;
        this.imcDescription = "";
    };

    get height() {
        return this._height;
    }

    set height(theHeight) {
        console.log('setting height value...');
        this._height = theHeight;
    }

    get weight() {
        return this._weight;
    }

    set weight(theWeight) {
        console.log('setting weight value...');
        this._weight = theWeight;
    }

    isValid() {
        return this._height && this._weight;
    }

    toObject() {
        return {
            height: this._height,
            weight: this._weight,
            imc: this.imc,
            imcDescription: this.imcDescription
        }
    }
}

/***/ }),

/***/ "./src/views/ImcTableView.js":
/*!***********************************!*\
  !*** ./src/views/ImcTableView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImcTableView)
/* harmony export */ });
/* harmony import */ var _framework_ViewComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/ViewComponent.js */ "./src/framework/ViewComponent.js");
/* harmony import */ var _controllers_ImcController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ImcController.js */ "./src/controllers/ImcController.js");



class ImcTableView extends _framework_ViewComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
      super("ImcTableView");
      this.imcController = new _controllers_ImcController_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }

    onLoad() {
      this.imcController.loadTable(imcRangeObj => 
        this.setState({range: imcRangeObj})
      );
    }

    render() {
      if (!this.state.range) return '<table></table>';

      return `<table>
        ${
          Object.keys(this.state.range)
            .sort()
            .map(k => 
              `<tr>
                  <td>${k}</td>
                  <td>${this.state.range[k]}</td>
              </tr>`
            ).join('')
        }
      </table>`
    }
}

/***/ }),

/***/ "./src/views/ImcView.js":
/*!******************************!*\
  !*** ./src/views/ImcView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImcView)
/* harmony export */ });
/* harmony import */ var _framework_ViewComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/ViewComponent.js */ "./src/framework/ViewComponent.js");
/* harmony import */ var _controllers_ImcController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/ImcController.js */ "./src/controllers/ImcController.js");
/* harmony import */ var _models_Person_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Person.js */ "./src/models/Person.js");




class ImcView extends _framework_ViewComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super("ImcView");
        this.imcController = new _controllers_ImcController_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.state = new _models_Person_js__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0);
    };

    render() {
        const person = this.state;

        return `Seu IMC está <span>${person.imc}</span> : <strong>${person.imcDescription}</strong>`;
    }

    setObserveReady(person) {
        console.log('setObserverReady called...');
        this.imcController.calculate(person, response => 
            this.setState(response)
          );
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _views_ImcTableView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ImcTableView.js */ "./src/views/ImcTableView.js");
/* harmony import */ var _views_ImcView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ImcView.js */ "./src/views/ImcView.js");





const imcTableView = new _views_ImcTableView_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const imcView = new _views_ImcView_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

function calculateImcBuilder() {
  const heightElem = document.querySelector("#altura");
  const weightElem = document.querySelector("#peso");

  if(!heightElem) throw Error("height is required field!");
  if(!weightElem) throw Error("weight is required field!");
  
  const proxy = imcView.observe(imcView.state);

  return function() {
    console.log('calculando...')
    proxy.height = heightElem.value;
    proxy.weight = weightElem.value;
  }
}

window.onload = function() {
  const btn = document.querySelector(".data .form button");
  btn.addEventListener('click', calculateImcBuilder());

  // inicializando tabela na tela inicial
  imcTableView.onLoad();
  imcView.onLoad();
};

})();

/******/ })()
;
//# sourceMappingURL=dist.js.map