(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <app-tree></app-tree>\n      </div>\n      <div class=\"col\">\n        <app-form></app-form>\n      </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _pipes_chmod_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/chmod.pipe */ "./src/app/pipes/chmod.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_3__["TreeComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"],
                _pipes_chmod_pipe__WEBPACK_IMPORTED_MODULE_7__["ChmodPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeModule"].forRoot()
            ],
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/files.json":
/*!*********************************!*\
  !*** ./src/app/data/files.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = [{"id":1,"name":"css","parentFileId":null,"fileTypeId":1,"chmod":777,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":7,"name":"layout.css","parentFileId":1,"fileTypeId":2,"chmod":755,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":8,"name":"layout.min.css","parentFileId":1,"fileTypeId":2,"chmod":645,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":2,"name":"js","parentFileId":null,"fileTypeId":1,"chmod":755,"createdAt":"2018-11-02T10:00:00.000Z","deletedAt":null},{"id":9,"name":"main.min.js","parentFileId":2,"fileTypeId":2,"chmod":755,"createdAt":"2018-11-02T11:00:00.000Z","deletedAt":null},{"id":10,"name":"main.js","parentFileId":2,"fileTypeId":2,"chmod":777,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":3,"name":"assets","parentFileId":null,"fileTypeId":1,"chmod":755,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":4,"name":"images","parentFileId":3,"fileTypeId":1,"chmod":755,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":11,"name":"background.jpg","parentFileId":4,"fileTypeId":2,"chmod":744,"createdAt":"2018-11-02T10:00:00.000Z","deletedAt":null},{"id":12,"name":"edit-icon.jpg","parentFileId":4,"fileTypeId":2,"chmod":744,"createdAt":"2018-11-02T11:00:00.000Z","deletedAt":null},{"id":11,"name":"delete-icon.jpg","parentFileId":4,"fileTypeId":2,"chmod":744,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":5,"name":"fonts","parentFileId":3,"fileTypeId":1,"chmod":755,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":12,"name":"poalim.ttf","parentFileId":5,"fileTypeId":2,"chmod":744,"createdAt":"2018-11-02T10:00:00.000Z","deletedAt":null},{"id":13,"name":"poalim.eot","parentFileId":5,"fileTypeId":2,"chmod":744,"createdAt":"2018-11-02T11:00:00.000Z","deletedAt":null},{"id":14,"name":"poalim.svg","parentFileId":5,"fileTypeId":2,"chmod":744,"createdAt":"2018-11-02T11:30:00.000Z","deletedAt":null},{"id":6,"name":"videos","parentFileId":3,"fileTypeId":1,"chmod":755,"createdAt":"2018-11-02T09:00:00.000Z","deletedAt":null},{"id":15,"name":"loan.webm","parentFileId":6,"fileTypeId":2,"chmod":644,"createdAt":"2018-11-02T10:00:00.000Z","deletedAt":null},{"id":16,"name":"loan.mp4","parentFileId":6,"fileTypeId":2,"chmod":644,"createdAt":"2018-11-02T09:30:00.000Z","deletedAt":null},{"id":15,"name":"loan.mkv","parentFileId":6,"fileTypeId":2,"chmod":644,"createdAt":"2018-11-02T10:00:00.000Z","deletedAt":null},{"id":16,"name":"loan.avi","parentFileId":6,"fileTypeId":2,"chmod":644,"createdAt":"2018-11-02T11:00:00.000Z","deletedAt":null}];

/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg-file{\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 60 60%22 style%3D%22enable-background%3Anew 0 0 60 60%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M42.5%2C22h-25c-0.552%2C0-1%2C0.447-1%2C1s0.448%2C1%2C1%2C1h25c0.552%2C0%2C1-0.447%2C1-1S43.052%2C22%2C42.5%2C22z%22%2F%3E%0D%09%3Cpath d%3D%22M17.5%2C16h10c0.552%2C0%2C1-0.447%2C1-1s-0.448-1-1-1h-10c-0.552%2C0-1%2C0.447-1%2C1S16.948%2C16%2C17.5%2C16z%22%2F%3E%0D%09%3Cpath d%3D%22M42.5%2C30h-25c-0.552%2C0-1%2C0.447-1%2C1s0.448%2C1%2C1%2C1h25c0.552%2C0%2C1-0.447%2C1-1S43.052%2C30%2C42.5%2C30z%22%2F%3E%0D%09%3Cpath d%3D%22M42.5%2C38h-25c-0.552%2C0-1%2C0.447-1%2C1s0.448%2C1%2C1%2C1h25c0.552%2C0%2C1-0.447%2C1-1S43.052%2C38%2C42.5%2C38z%22%2F%3E%0D%09%3Cpath d%3D%22M42.5%2C46h-25c-0.552%2C0-1%2C0.447-1%2C1s0.448%2C1%2C1%2C1h25c0.552%2C0%2C1-0.447%2C1-1S43.052%2C46%2C42.5%2C46z%22%2F%3E%0D%09%3Cpath d%3D%22M38.914%2C0H6.5v60h47V14.586L38.914%2C0z M39.5%2C3.414L50.086%2C14H39.5V3.414z M8.5%2C58V2h29v14h14v42H8.5z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") !important;\n  height:20px;\n  width:20px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  margin-right:5px;\n}\n.svg-folder{\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 58 58%22 style%3D%22enable-background%3Anew 0 0 58 58%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cpath style%3D%22fill%3A%23EFCE4A%3B%22 d%3D%22M55.981%2C54.5H2.019C0.904%2C54.5%2C0%2C53.596%2C0%2C52.481V20.5h58v31.981C58%2C53.596%2C57.096%2C54.5%2C55.981%2C54.5z%0D%09%22%2F%3E%0D%3Cpath style%3D%22fill%3A%23EBBA16%3B%22 d%3D%22M26.019%2C11.5V5.519C26.019%2C4.404%2C25.115%2C3.5%2C24%2C3.5H2.019C0.904%2C3.5%2C0%2C4.404%2C0%2C5.519V10.5v10h58%0D%09v-6.981c0-1.115-0.904-2.019-2.019-2.019H26.019z%22%2F%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") !important;\n  height:20px;\n  width:20px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  margin-right:5px;\n}\n"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group row\">\n    <label class=\"col-4\">File Type</label>\n    <div class=\"col-8\">\n      <label class=\"custom-control custom-radio\">\n        <input name=\"radio\" type=\"radio\" class=\"custom-control-input\" value=\"1\">\n        <span class=\"svg-folder\"></span>\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">Folder</span>\n      </label>\n      <label class=\"custom-control custom-radio\">\n        <input name=\"radio\" type=\"radio\" class=\"custom-control-input\" value=\"2\">\n        <span class=\"svg-file\"></span>\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">File</span>\n\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"name\" class=\"col-4 col-form-label\">Name</label>\n    <div class=\"col-8\">\n      <input id=\"name\" name=\"name\" type=\"text\" class=\"form-control here\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"user\" class=\"col-4 col-form-label\">User</label>\n    <div class=\"col-8\">\n      <select id=\"user\" name=\"user\" class=\"custom-select\">\n        <option value=\"7\">7</option>\n        <option value=\"6\">6</option>\n        <option value=\"5\">5</option>\n        <option value=\"4\">4</option>\n        <option value=\"3\">3</option>\n        <option value=\"2\">2</option>\n        <option value=\"1\">1</option>\n        <option value=\"0\">0</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"group\" class=\"col-4 col-form-label\">Group</label>\n    <div class=\"col-8\">\n      <select id=\"group\" name=\"group\" class=\"custom-select\">\n        <option value=\"7\">7</option>\n        <option value=\"6\">6</option>\n        <option value=\"5\">5</option>\n        <option value=\"4\">4</option>\n        <option value=\"3\">3</option>\n        <option value=\"2\">2</option>\n        <option value=\"1\">1</option>\n        <option value=\"0\">0</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"other\" class=\"col-4 col-form-label\">other</label>\n    <div class=\"col-8\">\n      <select id=\"other\" name=\"other\" class=\"custom-select\">\n        <option value=\"7\">7</option>\n        <option value=\"6\">6</option>\n        <option value=\"5\">5</option>\n        <option value=\"4\">4</option>\n        <option value=\"3\">3</option>\n        <option value=\"2\">2</option>\n        <option value=\"1\">1</option>\n        <option value=\"0\">0</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"offset-4 col-8\">\n      <button name=\"submit\" type=\"submit\" class=\"btn btn-primary\" onclick=\"submitData()\">Add</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/pipes/chmod.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/chmod.pipe.ts ***!
  \*************************************/
/*! exports provided: ChmodPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChmodPipe", function() { return ChmodPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChmodPipe = /** @class */ (function () {
    function ChmodPipe() {
    }
    ChmodPipe.prototype.transform = function (value, args) {
        if (value === '7')
            return 'Read,Write,Execute';
        if (value === '6')
            return 'Read,Write';
        if (value === '5')
            return 'Read,Execute';
        if (value === '4')
            return 'Read';
        if (value === '3')
            return 'Write,Execute';
        if (value === '2')
            return 'Write';
        if (value === '1')
            return 'Execute';
        if (value === '1')
            return 'No Permission';
    };
    ChmodPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'chmodPipe'
        })
    ], ChmodPipe);
    return ChmodPipe;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_files_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/files.json */ "./src/app/data/files.json");
var _data_files_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/Object.assign({}, _data_files_json__WEBPACK_IMPORTED_MODULE_1__, {"default": _data_files_json__WEBPACK_IMPORTED_MODULE_1__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.fileTree = [];
    }
    StorageService.prototype.getDataTree = function () {
        return _data_files_json__WEBPACK_IMPORTED_MODULE_1__;
    };
    StorageService.prototype.initLocalStorage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.sortData()) {
                resolve(_this.fileTree);
            }
            reject(null);
        });
    };
    StorageService.prototype.sortData = function () {
        for (var i = 0; i < _data_files_json__WEBPACK_IMPORTED_MODULE_1__.length; i++) {
            // if you are folder...
            if (_data_files_json__WEBPACK_IMPORTED_MODULE_1__[i]['fileTypeId'] === 1 && _data_files_json__WEBPACK_IMPORTED_MODULE_1__[i]['parentFileId'] === null) {
                // seek for files to create object
                this.attachFilesToFolder(_data_files_json__WEBPACK_IMPORTED_MODULE_1__[i]['id'], _data_files_json__WEBPACK_IMPORTED_MODULE_1__[i]['name']);
            }
        }
        // now go trough all folders and check weather it has a parent
        // naive soultion ----> it was a long night
        // filter only folders with parents id
        // let folders = data.filter(f => f['parentFileId'] !== null && f['fileTypeId'] === 1);
        // console.log(folders);
        // console.log(this.fileTree);
        // for (let k = 0 ; k < folders.length ; k++ ){
        //   for (let j = 0 ; j < this.fileTree.length ; j++ ){
        //       if(folders[k]['parentFileId'] === this.fileTree[])
        //   }
        // }
        return true;
    };
    StorageService.prototype.attachFilesToFolder = function (folderId, folderName) {
        // init obj for folder with array for his files
        var folderObj = {
            id: folderId,
            name: folderName,
            children: []
        };
        // loop again.. yeah i know .. not the best practice
        for (var j = 0; j < _data_files_json__WEBPACK_IMPORTED_MODULE_1__.length; j++) {
            // if you are my childrens .. attach me to a new file object
            if (_data_files_json__WEBPACK_IMPORTED_MODULE_1__[j]['parentFileId'] === folderId) {
                var file = {
                    id: _data_files_json__WEBPACK_IMPORTED_MODULE_1__[j]['id'],
                    name: _data_files_json__WEBPACK_IMPORTED_MODULE_1__[j]['name'],
                    children: []
                };
                // push me to children array
                folderObj.children.push(file);
            }
        }
        // add me to a clean tree
        this.fileTree.push(folderObj);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/tree/tree.component.css":
/*!*****************************************!*\
  !*** ./src/app/tree/tree.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tree/tree.component.html":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tree-root [nodes]=\"node\"\n           [options]=\"options\">\n</tree-root>\n<p><strong>File Name: </strong> {{filename}}</p>\n<p>\n  <strong>User : </strong>{{chmod[0] | chmodPipe}}\n  <br>\n  <strong>Group: </strong>{{chmod[1] | chmodPipe}}\n  <br>\n  <strong>Other: </strong>{{chmod[2] | chmodPipe }}\n</p>\n<p><strong>Date Created: </strong>{{dateObj | date:'medium'}}</p>\n\n"

/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/*!****************************************!*\
  !*** ./src/app/tree/tree.component.ts ***!
  \****************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = /** @class */ (function () {
    function TreeComponent(storage) {
        var _this = this;
        this.storage = storage;
        this.chmod = [
            0, 0, 0
        ];
        this.isClicked = false;
        this.node = [];
        this.options = {
            actionMapping: {
                mouse: {
                    click: function (tree, node) {
                        var data = _this.storage.getDataTree();
                        var f = data.filter(function (f) { return f['id'] === node.data['id']; });
                        _this.filename = f[0]['name'];
                        _this.dateObj = f[0]['createdAt'];
                        _this.chmod = f[0]['chmod'].toString().match(/\d{1,1}/g);
                    }
                }
            }
        };
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init local storage
        this.storage.initLocalStorage().then(function (response) { return _this.node = response; });
    };
    TreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.css */ "./src/app/tree/tree.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/AdamShwartz/WebstormProjects/angular-exam/angular-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map