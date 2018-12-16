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

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getConfiguration, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfiguration", function() { return getConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _component_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/app.component */ "./src/app/component/app.component.ts");
/* harmony import */ var _component_shop_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/shop/product/product.component */ "./src/app/component/shop/product/product.component.ts");
/* harmony import */ var _component_shop_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/shop/products/products.component */ "./src/app/component/shop/products/products.component.ts");
/* harmony import */ var _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/safe.pipe */ "./src/app/pipe/safe.pipe.ts");
/* harmony import */ var _component_management_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/management/new-product/new-product.component */ "./src/app/component/management/new-product/new-product.component.ts");
/* harmony import */ var _component_shop_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/shop/shopping-cart/shopping-cart.component */ "./src/app/component/shop/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _pipe_categories_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/categories.pipe */ "./src/app/pipe/categories.pipe.ts");
/* harmony import */ var _component_shop_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/shop/filters/filters.component */ "./src/app/component/shop/filters/filters.component.ts");
/* harmony import */ var _pipe_price_range_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipe/price-range.pipe */ "./src/app/pipe/price-range.pipe.ts");
/* harmony import */ var _component_shop_order_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/shop/order/order.component */ "./src/app/component/shop/order/order.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _component_shop_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/shop/dashboard/dashboard.component */ "./src/app/component/shop/dashboard/dashboard.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guard/auth-guard */ "./src/app/guard/auth-guard.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _component_management_management_panel_management_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/management/management-panel/management-panel.component */ "./src/app/component/management/management-panel/management-panel.component.ts");
/* harmony import */ var _guard_employee_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guard/employee-guard */ "./src/app/guard/employee-guard.ts");
/* harmony import */ var _component_management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/management/management-products/management-products.component */ "./src/app/component/management/management-products/management-products.component.ts");
/* harmony import */ var _component_management_management_orders_management_orders_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/management/management-orders/management-orders.component */ "./src/app/component/management/management-orders/management-orders.component.ts");
/* harmony import */ var _guard_admin_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./guard/admin-guard */ "./src/app/guard/admin-guard.ts");
/* harmony import */ var _component_management_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/management/edit-product/edit-product.component */ "./src/app/component/management/edit-product/edit-product.component.ts");
/* harmony import */ var _service_backend_type_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./service/backend-type.service */ "./src/app/service/backend-type.service.ts");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../environments/config */ "./src/environments/config.ts");
/* harmony import */ var _component_management_backend_type_backend_type_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/management/backend-type/backend-type.component */ "./src/app/component/management/backend-type/backend-type.component.ts");
/* harmony import */ var _component_management_new_time_discount_new_time_discount_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/management/new-time-discount/new-time-discount.component */ "./src/app/component/management/new-time-discount/new-time-discount.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
    { path: 'register', component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"] },
    {
        path: '', component: _component_shop_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], children: [
            { path: '', component: _component_shop_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"] },
            { path: 'shopping-cart', component: _component_shop_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartComponent"] },
            { path: 'order', component: _component_shop_order_order_component__WEBPACK_IMPORTED_MODULE_17__["OrderComponent"] }
        ]
    },
    {
        path: 'admin', component: _component_management_management_panel_management_panel_component__WEBPACK_IMPORTED_MODULE_24__["ManagementPanelComponent"], canActivate: [_guard_employee_guard__WEBPACK_IMPORTED_MODULE_25__["EmployeeGuard"]], children: [
            { path: '', component: _component_management_management_orders_management_orders_component__WEBPACK_IMPORTED_MODULE_27__["ManagementOrdersComponent"] },
            { path: 'products', component: _component_management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_26__["ManagementProductsComponent"], canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_28__["AdminGuard"]] },
            { path: 'new-product', component: _component_management_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_11__["NewProductComponent"], canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_28__["AdminGuard"]] },
            { path: 'edit-product', component: _component_management_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_29__["EditProductComponent"], canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_28__["AdminGuard"]] },
            { path: 'configuration', component: _component_management_backend_type_backend_type_component__WEBPACK_IMPORTED_MODULE_32__["BackendTypeComponent"], canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_28__["AdminGuard"]] },
            { path: 'time-discount', component: _component_management_new_time_discount_new_time_discount_component__WEBPACK_IMPORTED_MODULE_33__["NewTimeDiscountComponent"], canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_28__["AdminGuard"]] }
        ]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
function getConfiguration(backendTypeService) {
    return function () { return backendTypeService.getConfig()
        .toPromise()
        .then(function (config) { return _environments_config__WEBPACK_IMPORTED_MODULE_31__["configuration"].backend = config.backend; }); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _component_shop_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _component_shop_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                _component_management_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_11__["NewProductComponent"],
                _component_shop_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartComponent"],
                _component_shop_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"],
                _component_shop_order_order_component__WEBPACK_IMPORTED_MODULE_17__["OrderComponent"],
                _pipe_safe_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"],
                _pipe_categories_pipe__WEBPACK_IMPORTED_MODULE_14__["CategoriesPipe"],
                _pipe_price_range_pipe__WEBPACK_IMPORTED_MODULE_16__["PriceRangePipe"],
                _component_shop_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _component_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _component_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _component_management_management_panel_management_panel_component__WEBPACK_IMPORTED_MODULE_24__["ManagementPanelComponent"],
                _component_management_management_products_management_products_component__WEBPACK_IMPORTED_MODULE_26__["ManagementProductsComponent"],
                _component_management_management_orders_management_orders_component__WEBPACK_IMPORTED_MODULE_27__["ManagementOrdersComponent"],
                _component_management_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_29__["EditProductComponent"],
                _component_management_backend_type_backend_type_component__WEBPACK_IMPORTED_MODULE_32__["BackendTypeComponent"],
                _component_management_new_time_discount_new_time_discount_component__WEBPACK_IMPORTED_MODULE_33__["NewTimeDiscountComponent"]
            ],
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"]
            ],
            providers: [
                _service_backend_type_service__WEBPACK_IMPORTED_MODULE_30__["BackendTypeService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: getConfiguration,
                    deps: [_service_backend_type_service__WEBPACK_IMPORTED_MODULE_30__["BackendTypeService"]],
                    multi: true
                }
            ],
            bootstrap: [_component_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/app.component.css":
/*!*********************************************!*\
  !*** ./src/app/component/app.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/app.component.html":
/*!**********************************************!*\
  !*** ./src/app/component/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/component/app.component.ts":
/*!********************************************!*\
  !*** ./src/app/component/app.component.ts ***!
  \********************************************/
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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/component/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/component/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\n  height: 100%;\n}\n\nbody.my-login-page {\n  background-color: #f7f9fb;\n  font-size: 14px;\n}\n\n.my-login-page .brand {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin: 40px auto;\n  box-shadow: 0 4px 8px rgba(0,0,0,.05);\n  position: relative;\n  z-index: 1;\n}\n\n.my-login-page .brand img {\n  width: 100%;\n}\n\n.my-login-page .card-wrapper {\n  width: 400px;\n}\n\n.my-login-page .card {\n  border-color: transparent;\n  box-shadow: 0 4px 8px rgba(0,0,0,.05);\n}\n\n.my-login-page .card.fat {\n  padding: 10px;\n}\n\n.my-login-page .card .card-title {\n  margin-bottom: 30px;\n}\n\n.my-login-page .form-control {\n  border-width: 2.3px;\n}\n\n.my-login-page .form-group label {\n  width: 100%;\n}\n\n.my-login-page .btn.btn-block {\n  padding: 12px 10px;\n}\n\n.my-login-page .footer {\n  margin: 40px 0;\n  color: #888;\n  text-align: center;\n}\n\n@media screen and (max-width: 425px) {\n  .my-login-page .card-wrapper {\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .my-login-page .card.fat {\n    padding: 0;\n  }\n\n  .my-login-page .card.fat .card-body {\n    padding: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsc0NBQXNDO0NBQ3ZDOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxlQUFlO0dBQ2hCO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkubXktbG9naW4tcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXktbG9naW4tcGFnZSAuY2FyZC13cmFwcGVyIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubXktbG9naW4tcGFnZSAuY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNSk7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci13aWR0aDogMi4zcHg7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5idG4uYnRuLWJsb2NrIHtcbiAgcGFkZGluZzogMTJweCAxMHB4O1xufVxuXG4ubXktbG9naW4tcGFnZSAuZm9vdGVyIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5teS1sb2dpbi1wYWdlIC5jYXJkLXdyYXBwZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-login-page\">\n  <section class=\"h-100\">\n    <div class=\"container h-100\">\n      <div class=\"row justify-content-md-center h-100\">\n        <div class=\"card-wrapper\">\n          <div class=\"card fat\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title text-center\">Sign in</h4>\n              <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" class=\"my-login-validation\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"text\" class=\"form-control\" id=\"email\"\n                         required\n                         [(ngModel)]=\"email\" name=\"email\"\n                         #emailTxt=\"ngModel\">\n                  <div [hidden]=\"emailTxt.valid || emailTxt.pristine\"\n                       class=\"alert alert-danger\">\n                    Email is required\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"password\"\n                         required\n                         [(ngModel)]=\"password\" name=\"password\"\n                         #passwordTxt=\"ngModel\">\n                  <div [hidden]=\"passwordTxt.valid || passwordTxt.pristine\"\n                       class=\"alert alert-danger\">\n                    Password is required\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!loginForm.form.valid\"\n                          (click)=\"onSubmit()\">\n                    Login\n                  </button>\n                </div>\n                <div class=\"mt-4 text-center\">\n                  Don't have an account? <a routerLink=\"/register\" routerLinkActive=\"active\">Create One</a>\n                </div>\n                <div [hidden]=\"!loginFailed\" class=\"alert alert-warning\">\n                  Incorrect email or password\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"footer\">\n            Copyright &copy; 2018 &mdash; ZPW\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(new _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["Credentials"](this.email, this.password))
            .then(function () { return _this.router.navigate(['']); })
            .catch(function () { return _this.loginFailed = true; });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/login/login.component.css")],
            providers: [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/management/backend-type/backend-type.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/component/management/backend-type/backend-type.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW5hZ2VtZW50L2JhY2tlbmQtdHlwZS9iYWNrZW5kLXR5cGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/management/backend-type/backend-type.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/component/management/backend-type/backend-type.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <div class=\"container\">\n      <h1>Configuration</h1>\n      <form (ngSubmit)=\"updateConfig()\" #configurationForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label><input type=\"radio\" class=\"form-control\" id=\"firebase\"\n                        required\n                        value=\"firebase\"\n                        [(ngModel)]=\"config.backend\" name=\"firebase\"\n                        #backend=\"ngModel\">\n            Firebase\n          </label><br>\n\n          <label>\n            <input type=\"radio\" class=\"form-control\" id=\"rest\"\n                   required\n                   value=\"rest\"\n                   [(ngModel)]=\"config.backend\" name=\"rest\"\n                   #backend=\"ngModel\">\n            Rest\n          </label>\n          <div [hidden]=\"backend.valid || backend.pristine\"\n               class=\"alert alert-danger\">\n            Backend type is required\n          </div>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!configurationForm.form.valid\"\n                (click)=\"updateConfig()\"\n                routerLink=\"/admin\" routerLinkActive=\"active\">\n          Update configuration\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/management/backend-type/backend-type.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/management/backend-type/backend-type.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BackendTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendTypeComponent", function() { return BackendTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_backend_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/backend-type.service */ "./src/app/service/backend-type.service.ts");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/config */ "./src/environments/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackendTypeComponent = /** @class */ (function () {
    function BackendTypeComponent(backendTypeService) {
        this.backendTypeService = backendTypeService;
        this.config = _environments_config__WEBPACK_IMPORTED_MODULE_2__["configuration"];
    }
    BackendTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendTypeService.getConfig().subscribe(function (config) { return _this.config = config; });
    };
    BackendTypeComponent.prototype.updateConfig = function () {
        this.backendTypeService.updateConfig(this.config).then(function () { return location.reload(true); });
    };
    BackendTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-backend-type',
            template: __webpack_require__(/*! ./backend-type.component.html */ "./src/app/component/management/backend-type/backend-type.component.html"),
            styles: [__webpack_require__(/*! ./backend-type.component.css */ "./src/app/component/management/backend-type/backend-type.component.css")],
            providers: [_service_backend_type_service__WEBPACK_IMPORTED_MODULE_1__["BackendTypeService"]]
        }),
        __metadata("design:paramtypes", [_service_backend_type_service__WEBPACK_IMPORTED_MODULE_1__["BackendTypeService"]])
    ], BackendTypeComponent);
    return BackendTypeComponent;
}());



/***/ }),

/***/ "./src/app/component/management/edit-product/edit-product.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/component/management/edit-product/edit-product.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW5hZ2VtZW50L2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/management/edit-product/edit-product.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/component/management/edit-product/edit-product.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <div class=\"container\">\n      <h1>Edit Product</h1>\n      <form (ngSubmit)=\"onSubmit()\" #editProductForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\"\n                 required\n                 [(ngModel)]=\"product.name\" name=\"name\"\n                 #name=\"ngModel\">\n          <div [hidden]=\"name.valid || name.pristine\"\n               class=\"alert alert-danger\">\n            Name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"price\">Price</label>\n          <input type=\"number\" min=\"0\" class=\"form-control\" id=\"price\"\n                 required\n                 [(ngModel)]=\"product.price\" name=\"price\"\n                 #price=\"ngModel\">\n          <div [hidden]=\"price.valid || price.pristine\"\n               class=\"alert alert-danger\">\n            Price is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"quantity\">Quantity</label>\n          <input type=\"number\" min=\"0\" class=\"form-control\" id=\"quantity\"\n                 required\n                 [(ngModel)]=\"product.products_quantity\" name=\"quantity\"\n                 #quantity=\"ngModel\">\n          <div [hidden]=\"quantity.valid || quantity.pristine\"\n               class=\"alert alert-danger\">\n            Quantity is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"desc\">Description</label>\n          <input type=\"text\" class=\"form-control\" id=\"desc\"\n                 [(ngModel)]=\"product.description\" name=\"desc\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"photo_url\">Picture url</label>\n          <input type=\"text\" class=\"form-control\" id=\"photo_url\"\n                 [(ngModel)]=\"product.photo_url\" name=\"photo_url\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"category\">Category</label>\n          <select class=\"form-control\" id=\"category\" required>\n            <option *ngFor=\"let c of categories\" [selected]=\"c.id === product.category\" [value]=\"c.id\">{{c.label}}</option>\n          </select>\n\n        </div>\n\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!editProductForm.form.valid\" (click)=\"onSubmit()\"\n                routerLink=\"/admin\" routerLinkActive=\"active\">\n          Edit product\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/management/edit-product/edit-product.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/management/edit-product/edit-product.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/product */ "./src/app/model/product.ts");
/* harmony import */ var _service_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/categories-service */ "./src/app/service/categories-service.ts");
/* harmony import */ var _service_categories_service_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/categories-service-factory */ "./src/app/service/categories-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/products-service */ "./src/app/service/products-service.ts");
/* harmony import */ var _service_products_service_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/products-service-factory */ "./src/app/service/products-service-factory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(productsService, categoriesService, route) {
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.route = route;
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_2__["Product"]('', '', 0, 0, '', '', 'other');
        this.categories = [];
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var productId = params['product_id'];
            if (productId) {
                _this.productsService.getProduct(productId).subscribe(function (product) { return _this.product = product; });
            }
        });
        this.categoriesService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    EditProductComponent.prototype.onSubmit = function () {
        this.productsService.updateProduct(this.product);
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/component/management/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/component/management/edit-product/edit-product.component.css")],
            providers: [
                {
                    provide: _service_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"],
                    useFactory: _service_products_service_factory__WEBPACK_IMPORTED_MODULE_8__["ProductsServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                },
                {
                    provide: _service_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
                    useFactory: _service_categories_service_factory__WEBPACK_IMPORTED_MODULE_4__["CategoriesServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                }
            ]
        }),
        __metadata("design:paramtypes", [_service_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"], _service_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/component/management/management-orders/management-orders.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/component/management/management-orders/management-orders.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtb3JkZXJzL21hbmFnZW1lbnQtb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/management/management-orders/management-orders.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/management/management-orders/management-orders.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <h1>Orders</h1>\n    <table class=\"table table-hover\">\n      <thead>\n      <tr>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">State</th>\n        <th scope=\"col\">Value</th>\n        <th scope=\"col\"></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let order of orders\">\n        <td>{{order.email}}</td>\n        <td>{{order.state}}</td>\n        <td>{{order.totalValue | currency:'USD':'symbol':'.2'}}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-labeled btn-secondary float-right btn-sm\" data-toggle=\"modal\"\n                  [attr.data-target]=\"'#editDetails-' + order.id\">\n            Details <i class=\"fa fa-edit\"></i>\n          </button>\n          <button *ngIf=\"order.state === orderState.WAITING\" type=\"button\"\n                  class=\"btn btn-labeled btn-success float-right btn-sm\"\n                  (click)=\"toRealization(order)\">\n            To realization <i class=\"fa fa-arrow-circle-o-up\"></i>\n          </button>\n          <button *ngIf=\"order.state === orderState.IN_REALIZATION\" type=\"button\"\n                  class=\"btn btn-labeled btn-success float-right btn-sm\" [disabled]=\"!isReadyToShip(order)\"\n                  (click)=\"shipped(order)\">\n            Shipped <i class=\"fa fa-arrow-circle-o-up\"></i>\n          </button>\n        </td>\n\n        <div class=\"modal fade\" [attr.id]=\"'editDetails-' + order.id\" tabindex=\"-1\" role=\"dialog\"\n             aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Order details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"container-fluid\">\n                  <div class=\"row\">\n                    <h6>Order state</h6>\n                  </div>\n                  <div class=\"row\">\n                    {{order.state}}\n                  </div>\n                  <div *ngIf=\"order.state == orderState.SHIPPED\" class=\"row\">\n                    Shipping time: {{order.shippingTime | date: 'short'}}\n                  </div>\n                  <div class=\"row\">\n                    <p></p>\n                  </div>\n                  <div class=\"row\">\n                    <h6>Address</h6>\n                  </div>\n                  <div class=\"row\">\n                    {{order.firstName}} {{order.lastName}}\n                  </div>\n                  <div class=\"row\">\n                    {{order.street}}\n                  </div>\n                  <div class=\"row\">\n                    {{order.postalCode}}, {{order.city}}\n                  </div>\n                  <div class=\"row\">\n                    <a href=\"mailto:#\">{{order.email}}</a>\n                  </div>\n                  <div class=\"row\">\n                    <p></p>\n                  </div>\n                  <div class=\"row\">\n                    <h6>Products</h6>\n                  </div>\n                  <table class=\"table table-hover\">\n                    <thead>\n                    <tr>\n                      <th scope=\"col\">Quantity</th>\n                      <th scope=\"col\">Product</th>\n                      <th scope=\"col\">Unit Price</th>\n                      <th scope=\"col\">Value</th>\n                      <th scope=\"col\">Is ready</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let product of order.products\">\n                      <td>{{product.products_quantity}}</td>\n                      <td>{{product.name}}</td>\n                      <td>{{product.price | currency:'USD':'symbol':'.2'}}</td>\n                      <td>{{product.products_quantity * product.price | currency:'USD':'symbol':'.2'}}</td>\n                      <td>\n                        <input type=\"checkbox\" [checked]=\"product.is_ready\" [(ngModel)]=\"product.is_ready\"/>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-4  ml-auto\">\n                      <h6>Total value:</h6>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-4 ml-auto\">\n                      <h6>{{order.totalValue | currency:'USD':'symbol':'.2'}}</h6>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateOrder(order)\" data-dismiss=\"modal\">Save\n                  changes\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/management/management-orders/management-orders.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/management/management-orders/management-orders.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ManagementOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementOrdersComponent", function() { return ManagementOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/order */ "./src/app/model/order.ts");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/orders-service */ "./src/app/service/orders-service.ts");
/* harmony import */ var _service_orders_service_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/orders-service-factory */ "./src/app/service/orders-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagementOrdersComponent = /** @class */ (function () {
    function ManagementOrdersComponent(orderService) {
        this.orderService = orderService;
        this.orders = [];
        this.orderState = _model_order__WEBPACK_IMPORTED_MODULE_1__["OrderState"];
    }
    ManagementOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getAllOrders().subscribe(function (data) { return _this.orders = data; });
    };
    ManagementOrdersComponent.prototype.toRealization = function (order) {
        this.updateOrder(__assign({}, order, { state: _model_order__WEBPACK_IMPORTED_MODULE_1__["OrderState"].IN_REALIZATION }));
    };
    ManagementOrdersComponent.prototype.shipped = function (order) {
        this.updateOrder(__assign({}, order, { state: _model_order__WEBPACK_IMPORTED_MODULE_1__["OrderState"].SHIPPED, shippingTime: new Date().getTime() }));
    };
    ManagementOrdersComponent.prototype.updateOrder = function (order) {
        var _this = this;
        this.orderService.updateOrder(order).then(function () {
            return _this.orderService.getAllOrders().subscribe(function (data) { return _this.orders = data; });
        });
    };
    ManagementOrdersComponent.prototype.isReadyToShip = function (order) {
        return order.products.every(function (product) { return product.is_ready; });
    };
    ManagementOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management-orders',
            template: __webpack_require__(/*! ./management-orders.component.html */ "./src/app/component/management/management-orders/management-orders.component.html"),
            styles: [__webpack_require__(/*! ./management-orders.component.css */ "./src/app/component/management/management-orders/management-orders.component.css")],
            providers: [{
                    provide: _service_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
                    useFactory: _service_orders_service_factory__WEBPACK_IMPORTED_MODULE_3__["OrdersServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }]
        }),
        __metadata("design:paramtypes", [_service_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], ManagementOrdersComponent);
    return ManagementOrdersComponent;
}());



/***/ }),

/***/ "./src/app/component/management/management-panel/management-panel.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/component/management/management-panel/management-panel.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtcGFuZWwvbWFuYWdlbWVudC1wYW5lbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/management/management-panel/management-panel.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/component/management/management-panel/management-panel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">ZPW 2018</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarLeftResponsive\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\">Orders</a>\n        </li>\n        <li *ngIf=\"isAdmin\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/admin/products\" routerLinkActive=\"active\">Products</a>\n        </li>\n        <li *ngIf=\"isAdmin\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/admin/new-product\" routerLinkActive=\"active\">New Product</a>\n        </li>\n        <li *ngIf=\"isAdmin\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/admin/configuration\" routerLinkActive=\"active\">Configuration</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarRightResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-sm\" (click)=\"logoutUser()\">\n            <span class=\"fa fa-sign-out\"></span> Logout\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- Page Content -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- Footer -->\n<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy; ZPW 2018</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/component/management/management-panel/management-panel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/component/management/management-panel/management-panel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ManagementPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementPanelComponent", function() { return ManagementPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagementPanelComponent = /** @class */ (function () {
    function ManagementPanelComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ManagementPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAdmin().subscribe(function (isAdmin) { return _this.isAdmin = isAdmin; });
    };
    ManagementPanelComponent.prototype.logoutUser = function () {
        var _this = this;
        this.authService.logout()
            .then(function () { return _this.router.navigate(['/login']); })
            .catch(function (err) { return console.log(err); });
    };
    ManagementPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management-panel',
            template: __webpack_require__(/*! ./management-panel.component.html */ "./src/app/component/management/management-panel/management-panel.component.html"),
            styles: [__webpack_require__(/*! ./management-panel.component.css */ "./src/app/component/management/management-panel/management-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ManagementPanelComponent);
    return ManagementPanelComponent;
}());



/***/ }),

/***/ "./src/app/component/management/management-products/management-products.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/component/management/management-products/management-products.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW5hZ2VtZW50L21hbmFnZW1lbnQtcHJvZHVjdHMvbWFuYWdlbWVudC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/management/management-products/management-products.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/component/management/management-products/management-products.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <h1>Products</h1>\n    <table class=\"table table-hover\">\n      <thead>\n      <tr>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Product</th>\n        <th scope=\"col\">Category</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\"></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let product of products\">\n        <td>{{product.products_quantity}}</td>\n        <td>{{product.name}}</td>\n        <td>{{product.category}}</td>\n        <td>{{product.price | currency:'USD':'symbol':'.2'}}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-labeled btn-secondary float-right btn-sm\" (click)=\"editProductRedirect(product.id)\">\n            <i class=\"fa fa-edit\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-labeled btn-primary float-right btn-sm\" (click)=\"timeDiscountRedirect(product.id)\">\n            <i class=\"fa fa-percent\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-labeled btn-danger float-right btn-sm\"\n                  (click)=\"deleteProduct(product)\">\n            <i class=\"fa fa-trash-o\"></i>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/management/management-products/management-products.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/component/management/management-products/management-products.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManagementProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementProductsComponent", function() { return ManagementProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/products-service */ "./src/app/service/products-service.ts");
/* harmony import */ var _service_products_service_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/products-service-factory */ "./src/app/service/products-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManagementProductsComponent = /** @class */ (function () {
    function ManagementProductsComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.products = [];
    }
    ManagementProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
    };
    ManagementProductsComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.productsService.deleteProduct(product).then(function () { return _this.productsService.getProducts()
            .subscribe(function (data) { return _this.products = data; }); });
    };
    ManagementProductsComponent.prototype.editProductRedirect = function (productId) {
        var navigationExtras = {
            queryParams: { 'product_id': productId }
        };
        this.router.navigate(['/admin/edit-product'], navigationExtras);
    };
    ManagementProductsComponent.prototype.timeDiscountRedirect = function (productId) {
        var navigationExtras = {
            queryParams: { 'product_id': productId }
        };
        this.router.navigate(['/admin/time-discount'], navigationExtras);
    };
    ManagementProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management-products',
            template: __webpack_require__(/*! ./management-products.component.html */ "./src/app/component/management/management-products/management-products.component.html"),
            styles: [__webpack_require__(/*! ./management-products.component.css */ "./src/app/component/management/management-products/management-products.component.css")],
            providers: [{
                    provide: _service_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
                    useFactory: _service_products_service_factory__WEBPACK_IMPORTED_MODULE_3__["ProductsServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }]
        }),
        __metadata("design:paramtypes", [_service_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManagementProductsComponent);
    return ManagementProductsComponent;
}());



/***/ }),

/***/ "./src/app/component/management/new-product/new-product.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/component/management/new-product/new-product.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW5hZ2VtZW50L25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/management/new-product/new-product.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/component/management/new-product/new-product.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <div class=\"container\">\n      <h1>New Product</h1>\n      <form (ngSubmit)=\"onSubmit()\" #newProductForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\"\n                 required\n                 [(ngModel)]=\"model.name\" name=\"name\"\n                 #name=\"ngModel\">\n          <div [hidden]=\"name.valid || name.pristine\"\n               class=\"alert alert-danger\">\n            Name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"price\">Price</label>\n          <input type=\"number\" min=\"0\" class=\"form-control\" id=\"price\"\n                 required\n                 [(ngModel)]=\"model.price\" name=\"price\"\n                 #price=\"ngModel\">\n          <div [hidden]=\"price.valid || price.pristine\"\n               class=\"alert alert-danger\">\n            Price is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"quantity\">Quantity</label>\n          <input type=\"number\" min=\"0\" class=\"form-control\" id=\"quantity\"\n                 required\n                 [(ngModel)]=\"model.products_quantity\" name=\"quantity\"\n                 #quantity=\"ngModel\">\n          <div [hidden]=\"quantity.valid || quantity.pristine\"\n               class=\"alert alert-danger\">\n            Quantity is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"desc\">Description</label>\n          <input type=\"text\" class=\"form-control\" id=\"desc\"\n                 [(ngModel)]=\"model.description\" name=\"desc\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"photo_url\">Picture url</label>\n          <input type=\"text\" class=\"form-control\" id=\"photo_url\"\n                 [(ngModel)]=\"model.photo_url\" name=\"photo_url\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"category\">Category</label>\n          <select class=\"form-control\" id=\"category\" [(ngModel)]=\"model.category\" name=\"category\" required>\n            <option *ngFor=\"let c of categories\" [selected]=\"c.id === 'other'\"\n                    [ngValue]=\"c.id\">{{c.label}}</option>\n          </select>\n\n        </div>\n\n        <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!newProductForm.form.valid\" (click)=\"onSubmit()\"\n                routerLink=\"/admin\" routerLinkActive=\"active\">\n          Add product\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/management/new-product/new-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/management/new-product/new-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/product */ "./src/app/model/product.ts");
/* harmony import */ var _service_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/categories-service */ "./src/app/service/categories-service.ts");
/* harmony import */ var _service_categories_service_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/categories-service-factory */ "./src/app/service/categories-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/products-service */ "./src/app/service/products-service.ts");
/* harmony import */ var _service_products_service_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/products-service-factory */ "./src/app/service/products-service-factory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(productsService, categoriesService) {
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.model = new _model_product__WEBPACK_IMPORTED_MODULE_1__["Product"]('', '', 0, 0, '', '', 'other');
        this.categories = [];
    }
    NewProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    NewProductComponent.prototype.onSubmit = function () {
        this.productsService.addProduct(this.model);
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/component/management/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.css */ "./src/app/component/management/new-product/new-product.component.css")],
            providers: [
                {
                    provide: _service_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
                    useFactory: _service_products_service_factory__WEBPACK_IMPORTED_MODULE_7__["ProductsServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                },
                {
                    provide: _service_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
                    useFactory: _service_categories_service_factory__WEBPACK_IMPORTED_MODULE_3__["CategoriesServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }
            ]
        }),
        __metadata("design:paramtypes", [_service_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"], _service_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/component/management/new-time-discount/new-time-discount.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/component/management/new-time-discount/new-time-discount.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tYW5hZ2VtZW50L25ldy10aW1lLWRpc2NvdW50L25ldy10aW1lLWRpc2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/management/new-time-discount/new-time-discount.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/management/new-time-discount/new-time-discount.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <div class=\"container\">\n      <h1>New Time Discount for: {{product.name}}</h1>\n      <form (ngSubmit)=\"onSubmit()\" #newTimeDiscountForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"discountPercent\">Discount percent %</label>\n          <input type=\"number\" min=\"0\" max=\"100\" class=\"form-control\" id=\"discountPercent\"\n                 required\n                 [(ngModel)]=\"timeDiscount.discountPercent\" name=\"discountPercent\"\n                 #discountPercent=\"ngModel\">\n          <div [hidden]=\"discountPercent.valid || discountPercent.pristine\"\n               class=\"alert alert-danger\">\n            Discount percentage is required\n          </div>\n\n          <label for=\"duration\">Duration in minutes</label>\n          <input type=\"number\" min=\"0\" class=\"form-control\" id=\"duration\"\n                 required\n                 [(ngModel)]=\"timeDiscount.endTime\" name=\"duration\"\n                 #duration=\"ngModel\">\n          <div [hidden]=\"duration.valid || duration.pristine\"\n               class=\"alert alert-danger\">\n            Duration is required\n          </div>\n        </div>\n        <div>\n          Price before discount: {{product.price | currency:'USD':'symbol':'.2'}}\n        </div>\n        <div>\n          Price after\n          discount: {{product.price * (100 - timeDiscount.discountPercent) / 100 | currency:'USD':'symbol':'.2'}}\n        </div>\n\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!newTimeDiscountForm.form.valid\" (click)=\"onSubmit()\"\n                routerLink=\"/admin\" routerLinkActive=\"active\">\n          Add discount\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/management/new-time-discount/new-time-discount.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/management/new-time-discount/new-time-discount.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NewTimeDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTimeDiscountComponent", function() { return NewTimeDiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/socket.service */ "./src/app/service/socket.service.ts");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/products-service */ "./src/app/service/products-service.ts");
/* harmony import */ var _service_products_service_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/products-service-factory */ "./src/app/service/products-service-factory.ts");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/product */ "./src/app/model/product.ts");
/* harmony import */ var _model_time_discount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../model/time-discount */ "./src/app/model/time-discount.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewTimeDiscountComponent = /** @class */ (function () {
    function NewTimeDiscountComponent(productsService, socketService, route) {
        this.productsService = productsService;
        this.socketService = socketService;
        this.route = route;
        this.product = new _model_product__WEBPACK_IMPORTED_MODULE_7__["Product"]('', '', 0, 0, '', '', 'other');
        this.timeDiscount = new _model_time_discount__WEBPACK_IMPORTED_MODULE_8__["TimeDiscount"]('', '', 0, 0);
    }
    NewTimeDiscountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var productId = params['product_id'];
            if (productId) {
                _this.productsService.getProduct(productId).subscribe(function (product) {
                    _this.product = product;
                    _this.timeDiscount.productName = product.name;
                    _this.timeDiscount.productId = product.id;
                });
            }
        });
    };
    NewTimeDiscountComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.timeDiscount.discountPercent > 0 && this.timeDiscount.endTime > 0) {
            var endTimeInMillis_1 = this.timeDiscount.endTime * 60 * 1000;
            var discountEndTime = Date.now() + endTimeInMillis_1;
            this.productsService.updateProduct(__assign({}, this.product, { discount_percent: this.timeDiscount.discountPercent, discount_end_time: discountEndTime })).then(function () { return _this.socketService.send(__assign({}, _this.timeDiscount, { endTime: endTimeInMillis_1 })); });
        }
    };
    NewTimeDiscountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-time-discount',
            template: __webpack_require__(/*! ./new-time-discount.component.html */ "./src/app/component/management/new-time-discount/new-time-discount.component.html"),
            styles: [__webpack_require__(/*! ./new-time-discount.component.css */ "./src/app/component/management/new-time-discount/new-time-discount.component.css")],
            providers: [_service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
                {
                    provide: _service_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
                    useFactory: _service_products_service_factory__WEBPACK_IMPORTED_MODULE_6__["ProductsServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            ]
        }),
        __metadata("design:paramtypes", [_service_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"], _service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NewTimeDiscountComponent);
    return NewTimeDiscountComponent;
}());



/***/ }),

/***/ "./src/app/component/register/must-match.ts":
/*!**************************************************!*\
  !*** ./src/app/component/register/must-match.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/component/register/register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/register/register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\n  height: 100%;\n}\n\nbody.my-login-page {\n  background-color: #f7f9fb;\n  font-size: 14px;\n}\n\n.my-login-page .brand {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin: 40px auto;\n  box-shadow: 0 4px 8px rgba(0,0,0,.05);\n  position: relative;\n  z-index: 1;\n}\n\n.my-login-page .brand img {\n  width: 100%;\n}\n\n.my-login-page .card-wrapper {\n  width: 400px;\n}\n\n.my-login-page .card {\n  border-color: transparent;\n  box-shadow: 0 4px 8px rgba(0,0,0,.05);\n}\n\n.my-login-page .card.fat {\n  padding: 10px;\n}\n\n.my-login-page .card .card-title {\n  margin-bottom: 30px;\n}\n\n.my-login-page .form-control {\n  border-width: 2.3px;\n}\n\n.my-login-page .form-group label {\n  width: 100%;\n}\n\n.my-login-page .btn.btn-block {\n  padding: 12px 10px;\n}\n\n.my-login-page .footer {\n  margin: 40px 0;\n  color: #888;\n  text-align: center;\n}\n\n@media screen and (max-width: 425px) {\n  .my-login-page .card-wrapper {\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .my-login-page .card.fat {\n    padding: 0;\n  }\n\n  .my-login-page .card.fat .card-body {\n    padding: 15px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsc0NBQXNDO0NBQ3ZDOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7SUFDWCxlQUFlO0dBQ2hCO0NBQ0Y7O0FBRUQ7RUFDRTtJQUNFLFdBQVc7R0FDWjs7RUFFRDtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkubXktbG9naW4tcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmJyYW5kIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXktbG9naW4tcGFnZSAuY2FyZC13cmFwcGVyIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubXktbG9naW4tcGFnZSAuY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNSk7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci13aWR0aDogMi4zcHg7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5idG4uYnRuLWJsb2NrIHtcbiAgcGFkZGluZzogMTJweCAxMHB4O1xufVxuXG4ubXktbG9naW4tcGFnZSAuZm9vdGVyIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5teS1sb2dpbi1wYWdlIC5jYXJkLXdyYXBwZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLm15LWxvZ2luLXBhZ2UgLmNhcmQuZmF0IC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/register/register.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/register/register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-login-page\">\n  <section class=\"h-100\">\n    <div class=\"container h-100\">\n      <div class=\"row justify-content-md-center h-100\">\n        <div class=\"card-wrapper\">\n          <div class=\"card fat\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title text-center\">Register</h4>\n              <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\" class=\"my-login-validation\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"text\" formControlName=\"email\" id=\"email\" class=\"form-control\"\n                         [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"/>\n                  <div *ngIf=\"f.email.touched && f.email.errors\" class=\"alert alert-warning\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\"\n                         [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"/>\n                  <div *ngIf=\"f.password.touched && f.password.errors\" class=\"alert alert-warning\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"confirmPassword\">Confirm Password</label>\n                  <input type=\"password\" formControlName=\"confirmPassword\" id=\"confirmPassword\" class=\"form-control\"\n                         [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"/>\n                  <div *ngIf=\"f.confirmPassword.touched && f.confirmPassword.errors\" class=\"alert alert-warning\">\n                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"registerForm.invalid\"\n                          (click)=\"onSubmit()\">\n                    Register\n                  </button>\n                </div>\n                <div *ngIf=\"registrationFailed\" class=\"alert alert-warning\">\n                  Registration failed. Try different email\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"footer\">\n            Copyright &copy; 2018 &mdash; ZPW\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/component/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _must_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./must-match */ "./src/app/component/register/must-match.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
        this.registrationFailed = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: Object(_must_match__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.authService.register(new _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["Credentials"](this.f.email.value, this.f.password.value))
            .then(function () { return _this.router.navigate(['']); })
            .catch(function () { return _this.registrationFailed = true; });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/component/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/shop/dashboard/dashboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/component/shop/dashboard/dashboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaG9wL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/shop/dashboard/dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/component/shop/dashboard/dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">ZPW 2018</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarLeftResponsive\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"isEmployee\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\">Administrator Panel</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarRightResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-info btn-sm\" routerLink=\"/shopping-cart\" routerLinkActive=\"active\">\n            <span class=\"fa fa-shopping-cart\"></span> Shopping Cart\n          </button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-sm\" (click)=\"logoutUser()\">\n            <span class=\"fa fa-sign-out\"></span> Logout\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div *ngIf=\"orderId\" class=\"alert alert-success\" role=\"alert\">\n  <button type=\"button\" class=\"close\" (click)=\"removeAlert()\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span>\n  </button>\n  Order successfully submitted!\n</div>\n<!-- Page Content -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- Footer -->\n<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">Copyright &copy; ZPW 2018</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/component/shop/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/shop/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/orders-service */ "./src/app/service/orders-service.ts");
/* harmony import */ var _service_orders_service_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/orders-service-factory */ "./src/app/service/orders-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(orderService, authService, route, router) {
        this.orderService = orderService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var orderId = params['order_id'];
            if (orderId) {
                _this.addAutoCloseableAlert(orderId);
            }
        });
        this.authService.isEmployee().subscribe(function (isEmployee) { return _this.isEmployee = isEmployee; });
    };
    DashboardComponent.prototype.addAutoCloseableAlert = function (orderId) {
        var _this = this;
        this.orderId = orderId;
        setTimeout(function () { return _this.removeAlert(); }, 3000);
    };
    DashboardComponent.prototype.removeAlert = function () {
        this.orderId = null;
    };
    DashboardComponent.prototype.logoutUser = function () {
        var _this = this;
        this.authService.logout()
            .then(function () { return _this.router.navigate(['/login']); })
            .catch(function (err) { return console.log(err); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/component/shop/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/component/shop/dashboard/dashboard.component.css")],
            providers: [
                {
                    provide: _service_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"],
                    useFactory: _service_orders_service_factory__WEBPACK_IMPORTED_MODULE_4__["OrdersServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                },
                _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
            ]
        }),
        __metadata("design:paramtypes", [_service_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/component/shop/filters/filters.component.css":
/*!**************************************************************!*\
  !*** ./src/app/component/shop/filters/filters.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaG9wL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/shop/filters/filters.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/shop/filters/filters.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <article class=\"card-group-item\">\n    <header class=\"card-header\">\n      <h6 class=\"title\">Price range</h6>\n    </header>\n    <div class=\"filter-content\">\n      <div class=\"card-body\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Min</label>\n            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"minPrice\" placeholder=\"$0\"\n                   [(ngModel)]=\"minPrice\"\n                   (change)=\"priceRangeChanged(minPrice, maxPrice)\">\n          </div>\n          <div class=\"form-group col-md-6 text-right\">\n            <label>Max</label>\n            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"maxPrice\" placeholder=\"$100\"\n                   [(ngModel)]=\"maxPrice\"\n                   (change)=\"priceRangeChanged(minPrice, maxPrice)\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article class=\"card-group-item\">\n    <header class=\"card-header\">\n      <h6 class=\"title\">Categories</h6>\n    </header>\n    <div class=\"filter-content\">\n      <div class=\"card-body\">\n        <div class=\"custom-control custom-checkbox\" *ngFor=\"let category of categories\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{category.id}}\" (change)=\"toggleCategory(category)\">\n          <label class=\"custom-control-label\" for=\"{{category.id}}\">{{category.label}}</label>\n        </div>\n      </div>\n    </div>\n  </article>\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/shop/filters/filters.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/shop/filters/filters.component.ts ***!
  \*************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_price_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/price-range */ "./src/app/model/price-range.ts");
/* harmony import */ var _service_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/categories-service */ "./src/app/service/categories-service.ts");
/* harmony import */ var _service_categories_service_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/categories-service-factory */ "./src/app/service/categories-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.checkedCategoriesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.priceRangeChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categories = [];
        this.checkedCategories = [];
    }
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    FiltersComponent.prototype.toggleCategory = function (category) {
        var idx = this.checkedCategories.findIndex(function (c) { return c.id === category.id; });
        if (idx > -1) {
            this.checkedCategories.splice(idx, 1);
        }
        else {
            this.checkedCategories.push(category);
        }
        this.checkedCategoriesEvent.emit(this.checkedCategories.slice(0));
    };
    FiltersComponent.prototype.priceRangeChanged = function (minPrice, maxPrice) {
        this.priceRangeChangedEvent.emit(new _model_price_range__WEBPACK_IMPORTED_MODULE_1__["PriceRange"](minPrice, maxPrice));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "checkedCategoriesEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "priceRangeChangedEvent", void 0);
    FiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/component/shop/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.css */ "./src/app/component/shop/filters/filters.component.css")],
            providers: [{
                    provide: _service_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
                    useFactory: _service_categories_service_factory__WEBPACK_IMPORTED_MODULE_3__["CategoriesServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                }]
        }),
        __metadata("design:paramtypes", [_service_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/component/shop/order/order.component.css":
/*!**********************************************************!*\
  !*** ./src/app/component/shop/order/order.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaG9wL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/shop/order/order.component.html":
/*!***********************************************************!*\
  !*** ./src/app/component/shop/order/order.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <div class=\"container\">\n      <h1>Order</h1>\n      <form (ngSubmit)=\"onSubmit()\" #orderForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\"\n                 required\n                 [(ngModel)]=\"firstName\" name=\"firstName\"\n                 #firstNameText=\"ngModel\">\n          <div [hidden]=\"firstNameText.valid || firstNameText.pristine\"\n               class=\"alert alert-danger\">\n            First Name is required\n          </div>\n        </div>\n\n        <label for=\"lastName\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\"\n               required\n               [(ngModel)]=\"lastName\" name=\"lastName\"\n               #lastNameText=\"ngModel\">\n        <div [hidden]=\"lastNameText.valid || lastNameText.pristine\"\n             class=\"alert alert-danger\">\n          Last Name is required\n        </div>\n\n        <label for=\"city\">City</label>\n        <input type=\"text\" class=\"form-control\" id=\"city\"\n               required\n               [(ngModel)]=\"city\" name=\"city\"\n               #cityText=\"ngModel\">\n        <div [hidden]=\"cityText.valid || cityText.pristine\"\n             class=\"alert alert-danger\">\n          City is required\n        </div>\n\n        <label for=\"street\">Street</label>\n        <input type=\"text\" class=\"form-control\" id=\"street\"\n               required\n               [(ngModel)]=\"street\" name=\"street\"\n               #streetText=\"ngModel\">\n        <div [hidden]=\"streetText.valid || streetText.pristine\"\n             class=\"alert alert-danger\">\n          Street is required\n        </div>\n\n        <label for=\"postalCode\">Postal Code</label>\n        <input type=\"text\" class=\"form-control\" id=\"postalCode\"\n               required\n               [(ngModel)]=\"postalCode\" name=\"postalCode\"\n               #postalCodeText=\"ngModel\">\n        <div [hidden]=\"postalCodeText.valid || postalCodeText.pristine\"\n             class=\"alert alert-danger\">\n          Postal Code is required\n        </div>\n\n\n        <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!orderForm.form.valid\" (click)=\"onSubmit()\">\n          Submit your order\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/shop/order/order.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/shop/order/order.component.ts ***!
  \*********************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/order */ "./src/app/model/order.ts");
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../guid */ "./src/app/guid.ts");
/* harmony import */ var _service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/shopping-cart-service.service */ "./src/app/service/shopping-cart-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/orders-service */ "./src/app/service/orders-service.ts");
/* harmony import */ var _service_orders_service_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/orders-service-factory */ "./src/app/service/orders-service-factory.ts");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../service/products-service */ "./src/app/service/products-service.ts");
/* harmony import */ var _service_products_service_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../service/products-service-factory */ "./src/app/service/products-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, shoppingCartService, productsService, router, authService) {
        this.orderService = orderService;
        this.shoppingCartService = shoppingCartService;
        this.productsService = productsService;
        this.router = router;
        this.authService = authService;
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.onSubmit = function () {
        var guid = _guid__WEBPACK_IMPORTED_MODULE_2__["Guid"].random();
        var orderedProducts = new Map(this.shoppingCartService.getItems());
        var order = new _model_order__WEBPACK_IMPORTED_MODULE_1__["Order"](guid, this.authService.user.email, this.firstName, this.lastName, this.city, this.street, this.postalCode, Array.from(orderedProducts.values()), this.calcTotalValue(Array.from(orderedProducts.values())));
        this.orderService.addOrder(order);
        this.shoppingCartService.clear();
        this.productsService.updateProductsQuantity(orderedProducts);
        var navigationExtras = {
            queryParams: { 'order_id': guid }
        };
        this.router.navigate(['/'], navigationExtras);
    };
    OrderComponent.prototype.calcTotalValue = function (products) {
        var totalValue = 0;
        products.forEach(function (product) { return totalValue += product.products_quantity * product.price; });
        return totalValue;
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/component/shop/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/component/shop/order/order.component.css")],
            providers: [
                _service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartServiceService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                {
                    provide: _service_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductsService"],
                    useFactory: _service_products_service_factory__WEBPACK_IMPORTED_MODULE_9__["ProductsServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                },
                {
                    provide: _service_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"],
                    useFactory: _service_orders_service_factory__WEBPACK_IMPORTED_MODULE_7__["OrdersServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                }
            ]
        }),
        __metadata("design:paramtypes", [_service_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"], _service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartServiceService"],
            _service_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/component/shop/product/product.component.css":
/*!**************************************************************!*\
  !*** ./src/app/component/shop/product/product.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaG9wL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/shop/product/product.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/shop/product/product.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"card h-100\" [style.border]=\"isDiscounted ? '3px solid #e0d755c4': ''\">\n    <a href=\"#\"><img class=\"card-img-top\"\n                     [src]=\"(product.photo_url || 'http://home4cooperation.info/sites/all/themes/home_of_cooperation_bootstrap_subtheme/images/default.jpg') | safe\"\n                     alt=\"Product picture\"></a>\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">\n        <a href=\"#\">{{product.name}}</a>\n      </h4>\n      <h5>\n        {{(isDiscounted ? discountedPrice : product.price) | currency:'USD':'symbol':'.2'}}\n        <u style=\"color: rgba(250,0,1,0.7);\">{{isDiscounted ? '-' + product.discount_percent + '%' : ''}}</u>\n      </h5>\n      <p class=\"card-text\">{{product.description}}</p>\n    </div>\n    <div class=\"card-footer\" [style.background-color]=\"isDiscounted ? '#e0d755c4': ''\">\n      <div class=\"row\">\n        <small class=\"text-muted\"># {{product.products_quantity}}</small>\n        <div class=\"col float-right\">\n          <button type=\"button\" class=\"btn btn-labeled btn-success float-right btn-sm\"\n                  (click)=\"addProductToShoppingCart(product)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-labeled btn-danger float-right btn-sm \"\n                  (click)=\"deleteProductFromShoppingCart(product)\">\n            <i class=\"fa fa-minus\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/shop/product/product.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/shop/product/product.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/product */ "./src/app/model/product.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.deleteProductFromShoppingCartEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addProductToShoppingCartEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDiscounted = false;
        this.discountedPrice = 0;
    }
    ProductComponent.prototype.ngOnInit = function () {
        if (this.product.discount_end_time > Date.now() && this.product.discount_percent > 0) {
            this.discountedPrice = this.product.price * (100 - this.product.discount_percent) / 100;
            this.isDiscounted = true;
        }
        else {
            this.isDiscounted = false;
        }
    };
    ProductComponent.prototype.deleteProductFromShoppingCart = function (product) {
        product.products_quantity++;
        this.deleteProductFromShoppingCartEvent.emit(product);
    };
    ProductComponent.prototype.addProductToShoppingCart = function (product) {
        product.products_quantity--;
        if (!this.isDiscounted) {
            this.addProductToShoppingCartEvent.emit(product);
        }
        else {
            var value = __assign({}, product, { price: this.discountedPrice });
            console.log(value);
            this.addProductToShoppingCartEvent.emit(value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "deleteProductFromShoppingCartEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "addProductToShoppingCartEvent", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/component/shop/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/component/shop/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/component/shop/products/products.component.css":
/*!****************************************************************!*\
  !*** ./src/app/component/shop/products/products.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaG9wL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/component/shop/products/products.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/shop/products/products.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3\">\n    <h1 class=\"my-4\">Products</h1>\n    <app-filters (checkedCategoriesEvent)=\"onCheckedCategories($event)\"\n                 (priceRangeChangedEvent)=\"onPriceRangeChange($event)\">\n    </app-filters>\n  </div>\n\n  <div class=\"col-lg-9\">\n    <div class=\"row\">\n      <app-product class=\"col-lg-4 col-md-6 mb-4\" [product]=\"p\"\n                   *ngFor=\"let p of products | categories: checkedCategories | price_range: priceRange | paginate: { itemsPerPage: 6, currentPage: currentPageNumber }\"\n                   (deleteProductFromShoppingCartEvent)=\"onDeleteFromShoppingCart($event)\"\n                   (addProductToShoppingCartEvent)=\"onAddToShoppingCart($event)\">\n      </app-product>\n    </div>\n    <div class=\"row \">\n      <div class=\"mx-auto\">\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/shop/products/products.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/shop/products/products.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/shopping-cart-service.service */ "./src/app/service/shopping-cart-service.service.ts");
/* harmony import */ var _model_price_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/price-range */ "./src/app/model/price-range.ts");
/* harmony import */ var _service_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/products-service */ "./src/app/service/products-service.ts");
/* harmony import */ var _service_products_service_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/products-service-factory */ "./src/app/service/products-service-factory.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/socket.service */ "./src/app/service/socket.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, shoppingCartService, socketService) {
        this.productsService = productsService;
        this.shoppingCartService = shoppingCartService;
        this.socketService = socketService;
        this.products = [];
        this.checkedCategories = [];
        this.priceRange = new _model_price_range__WEBPACK_IMPORTED_MODULE_3__["PriceRange"](0, Number.MAX_SAFE_INTEGER);
        this.currentPageNumber = 0;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getProducts()
            .subscribe(function (data) { return _this.products = data; });
        this.socketService.onTimeDiscount().subscribe(function () {
            _this.productsService.getProducts()
                .subscribe(function (data) { return _this.products = data; });
        });
        this.socketService.onEndDiscount().subscribe(function (productId) {
            _this.productsService.getProduct(productId)
                .subscribe(function (product) {
                _this.productsService.updateProduct(__assign({}, product, { discount_percent: 0, discount_end_time: 0 })).then(function () {
                    return _this.productsService.getProducts()
                        .subscribe(function (data) {
                        _this.products = data;
                    });
                });
            });
        });
    };
    ProductsComponent.prototype.onAddToShoppingCart = function (product) {
        this.shoppingCartService.addProduct(product);
    };
    ProductsComponent.prototype.onDeleteFromShoppingCart = function (product) {
        this.shoppingCartService.deleteProduct(product);
    };
    ProductsComponent.prototype.onCheckedCategories = function (categories) {
        this.checkedCategories = categories;
    };
    ProductsComponent.prototype.onPriceRangeChange = function (priceRange) {
        this.priceRange = priceRange;
    };
    ProductsComponent.prototype.pageChanged = function ($event) {
        this.currentPageNumber = $event;
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/component/shop/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/component/shop/products/products.component.css")],
            providers: [
                {
                    provide: _service_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
                    useFactory: _service_products_service_factory__WEBPACK_IMPORTED_MODULE_5__["ProductsServiceFactory"],
                    deps: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                },
                _service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartServiceService"],
                _service_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]
            ]
        }),
        __metadata("design:paramtypes", [_service_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartServiceService"],
            _service_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/component/shop/shopping-cart/shopping-cart.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/component/shop/shopping-cart/shopping-cart.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaG9wL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/shop/shopping-cart/shopping-cart.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/component/shop/shopping-cart/shopping-cart.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"offset-lg-3 col-lg-9\">\n    <h1>Your shopping cart</h1>\n    <table class=\"table table-hover\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Product</th>\n        <th scope=\"col\">Unit Price</th>\n        <th scope=\"col\">Value</th>\n        <th scope=\"col\"></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let item of cartItems | keyvalue\">\n        <td>{{item.value.products_quantity}}</td>\n        <td>{{item.value.name}}</td>\n        <td>{{item.value.price | currency:'USD':'symbol':'.2'}}</td>\n        <td>{{item.value.products_quantity * item.value.price | currency:'USD':'symbol':'.2'}}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-labeled btn-success float-right btn-sm\"\n                  (click)=\"addProductToShoppingCart(item.value)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-labeled btn-danger float-right btn-sm \"\n                  (click)=\"deleteProductFromShoppingCart(item.value)\">\n            <i class=\"fa fa-minus\"></i>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n      <tfoot>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td>Total value: {{getTotalValue() | currency:'USD':'symbol':'.2'}}</td>\n      </tr>\n      </tfoot>\n    </table>\n    <div class=\"row\">\n      <div class=\"mx-auto\">\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/\" routerLinkActive=\"active\">Back to shopping</button>\n        <button type=\"button\" class=\"btn btn-success\" routerLink=\"/order\" routerLinkActive=\"active\">Proceed order</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/shop/shopping-cart/shopping-cart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/shop/shopping-cart/shopping-cart.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/shopping-cart-service.service */ "./src/app/service/shopping-cart-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.cartItems = new Map();
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.cartItems = this.shoppingCartService.getItems();
    };
    ShoppingCartComponent.prototype.addProductToShoppingCart = function (product) {
        this.shoppingCartService.addProduct(product);
    };
    ShoppingCartComponent.prototype.deleteProductFromShoppingCart = function (product) {
        this.shoppingCartService.deleteProduct(product);
    };
    ShoppingCartComponent.prototype.getTotalValue = function () {
        return this.shoppingCartService.getTotalValue();
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/component/shop/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/component/shop/shopping-cart/shopping-cart.component.css")],
            providers: [_service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartServiceService"]]
        }),
        __metadata("design:paramtypes", [_service_shopping_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartServiceService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/guard/admin-guard.ts":
/*!**************************************!*\
  !*** ./src/app/guard/admin-guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isAdmin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isAdmin) {
            if (!isAdmin) {
                _this.router.navigate(['']);
            }
        }));
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guard/auth-guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth-guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (project) {
            if (project !== null) {
                return true;
            }
            _this.router.navigate(['/login']);
            return false;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guard/employee-guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/employee-guard.ts ***!
  \*****************************************/
/*! exports provided: EmployeeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeGuard", function() { return EmployeeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeGuard = /** @class */ (function () {
    function EmployeeGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    EmployeeGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isEmployee().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isEmployee) {
            if (!isEmployee) {
                _this.router.navigate(['']);
            }
        }));
    };
    EmployeeGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmployeeGuard);
    return EmployeeGuard;
}());



/***/ }),

/***/ "./src/app/guid.ts":
/*!*************************!*\
  !*** ./src/app/guid.ts ***!
  \*************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.random = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    return Guid;
}());



/***/ }),

/***/ "./src/app/model/order.ts":
/*!********************************!*\
  !*** ./src/app/model/order.ts ***!
  \********************************/
/*! exports provided: Order, OrderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
var Order = /** @class */ (function () {
    function Order(id, email, firstName, lastName, city, street, postalCode, products, totalValue, state, shippingTime) {
        if (totalValue === void 0) { totalValue = 0; }
        if (state === void 0) { state = OrderState.WAITING; }
        if (shippingTime === void 0) { shippingTime = null; }
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
        this.products = products;
        this.totalValue = totalValue;
        this.state = state;
        this.shippingTime = shippingTime;
    }
    return Order;
}());

var OrderState;
(function (OrderState) {
    OrderState["WAITING"] = "Waiting";
    OrderState["IN_REALIZATION"] = "In realization";
    OrderState["SHIPPED"] = "Shipped";
})(OrderState || (OrderState = {}));


/***/ }),

/***/ "./src/app/model/price-range.ts":
/*!**************************************!*\
  !*** ./src/app/model/price-range.ts ***!
  \**************************************/
/*! exports provided: PriceRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceRange", function() { return PriceRange; });
var PriceRange = /** @class */ (function () {
    function PriceRange(minPrice, maxPrice) {
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }
    return PriceRange;
}());



/***/ }),

/***/ "./src/app/model/product.ts":
/*!**********************************!*\
  !*** ./src/app/model/product.ts ***!
  \**********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, products_quantity, price, description, photo_url, category, is_ready, discount_percent, discount_end_time) {
        if (is_ready === void 0) { is_ready = false; }
        if (discount_percent === void 0) { discount_percent = 0; }
        if (discount_end_time === void 0) { discount_end_time = 0; }
        this.id = id;
        this.name = name;
        this.products_quantity = products_quantity;
        this.price = price;
        this.description = description;
        this.photo_url = photo_url;
        this.category = category;
        this.is_ready = is_ready;
        this.discount_percent = discount_percent;
        this.discount_end_time = discount_end_time;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/model/time-discount.ts":
/*!****************************************!*\
  !*** ./src/app/model/time-discount.ts ***!
  \****************************************/
/*! exports provided: TimeDiscount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDiscount", function() { return TimeDiscount; });
var TimeDiscount = /** @class */ (function () {
    function TimeDiscount(productName, productId, discountPercent, endTime) {
        this.productName = productName;
        this.productId = productId;
        this.discountPercent = discountPercent;
        this.endTime = endTime;
    }
    return TimeDiscount;
}());



/***/ }),

/***/ "./src/app/pipe/categories.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipe/categories.pipe.ts ***!
  \*****************************************/
/*! exports provided: CategoriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPipe", function() { return CategoriesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriesPipe = /** @class */ (function () {
    function CategoriesPipe() {
    }
    CategoriesPipe.prototype.transform = function (products, categories) {
        if (!products) {
            return [];
        }
        if (!categories || categories.length === 0) {
            return products;
        }
        return products.filter(function (product) { return categories.find(function (category) { return category.id === product.category; }); });
    };
    CategoriesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'categories'
        })
    ], CategoriesPipe);
    return CategoriesPipe;
}());



/***/ }),

/***/ "./src/app/pipe/price-range.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipe/price-range.pipe.ts ***!
  \******************************************/
/*! exports provided: PriceRangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceRangePipe", function() { return PriceRangePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PriceRangePipe = /** @class */ (function () {
    function PriceRangePipe() {
    }
    PriceRangePipe.prototype.transform = function (products, priceRange) {
        if (!products) {
            return [];
        }
        if (!priceRange.minPrice) {
            priceRange.minPrice = 0;
        }
        if (!priceRange.maxPrice) {
            priceRange.maxPrice = Number.MAX_SAFE_INTEGER;
        }
        return products.filter(function (product) { return product.price >= priceRange.minPrice && product.price <= priceRange.maxPrice; });
    };
    PriceRangePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'price_range'
        })
    ], PriceRangePipe);
    return PriceRangePipe;
}());



/***/ }),

/***/ "./src/app/pipe/safe.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/safe.pipe.ts ***!
  \***********************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: Credentials, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Credentials = /** @class */ (function () {
    function Credentials(email, password) {
        this.email = email;
        this.password = password;
    }
    return Credentials;
}());

var AuthService = /** @class */ (function () {
    function AuthService(fireAuth, firestore) {
        this.fireAuth = fireAuth;
        this.firestore = firestore;
        this.authState = this.fireAuth.authState;
    }
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.fireAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.register = function (_a) {
        var email = _a.email, password = _a.password;
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        return this.fireAuth.auth.signOut();
    };
    AuthService.prototype.isAdmin = function () {
        var _this = this;
        return this.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (user !== null) {
                return _this.firestore.doc("users/" + user.uid).valueChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userRole) {
                    if (!userRole) {
                        return false;
                    }
                    var isAdmin = userRole.role === 'admin';
                    if (!isAdmin) {
                    }
                    return isAdmin;
                }));
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(false);
        }));
    };
    AuthService.prototype.isEmployee = function () {
        var _this = this;
        return this.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (user !== null) {
                return _this.firestore.doc("users/" + user.uid).valueChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userRole) {
                    if (!userRole) {
                        return false;
                    }
                    var isEmployee = userRole.role === 'admin' || userRole.role === 'employee';
                    if (!isEmployee) {
                    }
                    return isEmployee;
                }));
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(false);
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/backend-type.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/backend-type.service.ts ***!
  \*************************************************/
/*! exports provided: BackendTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendTypeService", function() { return BackendTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackendTypeService = /** @class */ (function () {
    function BackendTypeService(firestore) {
        this.firestore = firestore;
        this.configCollection = firestore.collection('/config');
    }
    BackendTypeService.prototype.getConfig = function () {
        return this.configCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data
                .map(function (c) {
                var config = c.payload.doc.data();
                config.id = c.payload.doc.id;
                return config;
            })[0];
        }));
    };
    BackendTypeService.prototype.updateConfig = function (config) {
        return this.configCollection.doc(config.id).update(__assign({}, config));
    };
    BackendTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], BackendTypeService);
    return BackendTypeService;
}());



/***/ }),

/***/ "./src/app/service/categories-service-factory.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/categories-service-factory.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesServiceFactory", function() { return CategoriesServiceFactory; });
/* harmony import */ var _firebase_categories_firebase_impl_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase/categories-firebase-impl.service */ "./src/app/service/firebase/categories-firebase-impl.service.ts");
/* harmony import */ var _rest_categories_rest_impl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest/categories-rest-impl.service */ "./src/app/service/rest/categories-rest-impl.service.ts");
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/config */ "./src/environments/config.ts");



function CategoriesServiceFactory(firestore, http) {
    if (_environments_config__WEBPACK_IMPORTED_MODULE_2__["configuration"].backend === 'rest') {
        return new _rest_categories_rest_impl_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesRestImplService"](http);
    }
    else {
        return new _firebase_categories_firebase_impl_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesFirebaseImplService"](firestore);
    }
}


/***/ }),

/***/ "./src/app/service/categories-service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/categories-service.ts ***!
  \***********************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriesService = /** @class */ (function () {
    function CategoriesService() {
    }
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/service/firebase/categories-firebase-impl.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/service/firebase/categories-firebase-impl.service.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriesFirebaseImplService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesFirebaseImplService", function() { return CategoriesFirebaseImplService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesFirebaseImplService = /** @class */ (function () {
    function CategoriesFirebaseImplService(firestore) {
        this.firestore = firestore;
        this.categoriesCollection = firestore.collection('/categories');
    }
    CategoriesFirebaseImplService.prototype.getCategories = function () {
        return this.categoriesCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data
                .map(function (c) {
                var category = c.payload.doc.data();
                category.id = c.payload.doc.id;
                return category;
            });
        }));
    };
    CategoriesFirebaseImplService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], CategoriesFirebaseImplService);
    return CategoriesFirebaseImplService;
}());



/***/ }),

/***/ "./src/app/service/firebase/orders-firebase-impl.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/service/firebase/orders-firebase-impl.service.ts ***!
  \******************************************************************/
/*! exports provided: OrdersFirebaseImplService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersFirebaseImplService", function() { return OrdersFirebaseImplService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersFirebaseImplService = /** @class */ (function () {
    function OrdersFirebaseImplService(firestore) {
        this.firestore = firestore;
        this.ordersCollection = firestore.collection('/orders');
    }
    OrdersFirebaseImplService.prototype.getAllOrders = function () {
        return this.ordersCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data
                .map(function (o) {
                var order = o.payload.doc.data();
                order.id = o.payload.doc.id;
                return order;
            });
        }));
    };
    // getOrders(email: string): Observable<Order[]> {
    //   return this.ordersCollection.snapshotChanges()
    //     .pipe(map(data => {
    //       return data
    //         .filter(o => o.payload.doc.data().email === email)
    //         .map(o => {
    //           const order = o.payload.doc.data() as Order;
    //           order.id = o.payload.doc.id;
    //           return order;
    //         });
    //     }));
    // }
    OrdersFirebaseImplService.prototype.addOrder = function (order) {
        return this.ordersCollection.add(__assign({}, order));
    };
    OrdersFirebaseImplService.prototype.updateOrder = function (order) {
        return this.ordersCollection.doc(order.id).update(__assign({}, order));
    };
    OrdersFirebaseImplService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], OrdersFirebaseImplService);
    return OrdersFirebaseImplService;
}());



/***/ }),

/***/ "./src/app/service/firebase/products-firebase-impl.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/service/firebase/products-firebase-impl.service.ts ***!
  \********************************************************************/
/*! exports provided: ProductsFirebaseImplService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsFirebaseImplService", function() { return ProductsFirebaseImplService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products-service */ "./src/app/service/products-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsFirebaseImplService = /** @class */ (function (_super) {
    __extends(ProductsFirebaseImplService, _super);
    function ProductsFirebaseImplService(firestore) {
        var _this = _super.call(this) || this;
        _this.firestore = firestore;
        _this.productsCollection = firestore.collection('/products');
        return _this;
    }
    ProductsFirebaseImplService.prototype.getProducts = function () {
        return this.productsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data.map(function (p) {
                var product = p.payload.doc.data();
                product.id = p.payload.doc.id;
                return product;
            });
        }));
    };
    ProductsFirebaseImplService.prototype.getProduct = function (productId) {
        return this.firestore.doc("/products/" + productId).valueChanges();
    };
    ProductsFirebaseImplService.prototype.addProduct = function (product) {
        return this.productsCollection.add(__assign({}, product));
    };
    ProductsFirebaseImplService.prototype.deleteProduct = function (product) {
        return this.productsCollection.doc(product.id).delete();
    };
    ProductsFirebaseImplService.prototype.updateProduct = function (product) {
        return this.productsCollection.doc(product.id).update(__assign({}, product));
    };
    ProductsFirebaseImplService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ProductsFirebaseImplService);
    return ProductsFirebaseImplService;
}(_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]));



/***/ }),

/***/ "./src/app/service/orders-service-factory.ts":
/*!***************************************************!*\
  !*** ./src/app/service/orders-service-factory.ts ***!
  \***************************************************/
/*! exports provided: OrdersServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersServiceFactory", function() { return OrdersServiceFactory; });
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/config */ "./src/environments/config.ts");
/* harmony import */ var _firebase_orders_firebase_impl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase/orders-firebase-impl.service */ "./src/app/service/firebase/orders-firebase-impl.service.ts");
/* harmony import */ var _rest_orders_rest_impl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest/orders-rest-impl.service */ "./src/app/service/rest/orders-rest-impl.service.ts");



function OrdersServiceFactory(firestore, http) {
    if (_environments_config__WEBPACK_IMPORTED_MODULE_0__["configuration"].backend === 'rest') {
        return new _rest_orders_rest_impl_service__WEBPACK_IMPORTED_MODULE_2__["OrdersRestImplService"](http);
    }
    else {
        return new _firebase_orders_firebase_impl_service__WEBPACK_IMPORTED_MODULE_1__["OrdersFirebaseImplService"](firestore);
    }
}


/***/ }),

/***/ "./src/app/service/orders-service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/orders-service.ts ***!
  \*******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrdersService = /** @class */ (function () {
    function OrdersService() {
    }
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/service/products-service-factory.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/products-service-factory.ts ***!
  \*****************************************************/
/*! exports provided: ProductsServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsServiceFactory", function() { return ProductsServiceFactory; });
/* harmony import */ var _environments_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/config */ "./src/environments/config.ts");
/* harmony import */ var _firebase_products_firebase_impl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase/products-firebase-impl.service */ "./src/app/service/firebase/products-firebase-impl.service.ts");
/* harmony import */ var _rest_products_rest_impl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest/products-rest-impl.service */ "./src/app/service/rest/products-rest-impl.service.ts");



function ProductsServiceFactory(firestore, http) {
    if (_environments_config__WEBPACK_IMPORTED_MODULE_0__["configuration"].backend === 'rest') {
        return new _rest_products_rest_impl_service__WEBPACK_IMPORTED_MODULE_2__["ProductsRestImplService"](http);
    }
    else {
        return new _firebase_products_firebase_impl_service__WEBPACK_IMPORTED_MODULE_1__["ProductsFirebaseImplService"](firestore);
    }
}


/***/ }),

/***/ "./src/app/service/products-service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/products-service.ts ***!
  \*********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProductsService = /** @class */ (function () {
    function ProductsService() {
    }
    ProductsService.prototype.updateProductsQuantity = function (orderedProducts) {
        var _this = this;
        this.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (products) {
            products.forEach(function (product) {
                var orderedProduct = orderedProducts.get(product.id);
                if (orderedProducts.has(product.id)) {
                    product.products_quantity = product.products_quantity - orderedProduct.products_quantity;
                    _this.updateProduct(product);
                }
            });
        });
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/service/rest/categories-rest-impl.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/rest/categories-rest-impl.service.ts ***!
  \**************************************************************/
/*! exports provided: CategoriesRestImplService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRestImplService", function() { return CategoriesRestImplService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesRestImplService = /** @class */ (function () {
    function CategoriesRestImplService(http) {
        this.http = http;
    }
    CategoriesRestImplService.prototype.getCategories = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/categories");
    };
    CategoriesRestImplService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesRestImplService);
    return CategoriesRestImplService;
}());



/***/ }),

/***/ "./src/app/service/rest/orders-rest-impl.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/rest/orders-rest-impl.service.ts ***!
  \**********************************************************/
/*! exports provided: OrdersRestImplService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRestImplService", function() { return OrdersRestImplService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersRestImplService = /** @class */ (function () {
    function OrdersRestImplService(http) {
        this.http = http;
    }
    OrdersRestImplService.prototype.addOrder = function (order) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/orders", order).toPromise();
    };
    OrdersRestImplService.prototype.getAllOrders = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/orders");
    };
    OrdersRestImplService.prototype.updateOrder = function (order) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/orders/" + order.id, order).toPromise();
    };
    OrdersRestImplService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrdersRestImplService);
    return OrdersRestImplService;
}());



/***/ }),

/***/ "./src/app/service/rest/products-rest-impl.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/rest/products-rest-impl.service.ts ***!
  \************************************************************/
/*! exports provided: ProductsRestImplService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRestImplService", function() { return ProductsRestImplService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products-service */ "./src/app/service/products-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsRestImplService = /** @class */ (function (_super) {
    __extends(ProductsRestImplService, _super);
    function ProductsRestImplService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ProductsRestImplService.prototype.addProduct = function (product) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/products", product).toPromise();
    };
    ProductsRestImplService.prototype.deleteProduct = function (product) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/products/" + product.id).toPromise();
    };
    ProductsRestImplService.prototype.getProduct = function (productId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/products/" + productId);
    };
    ProductsRestImplService.prototype.getProducts = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/products");
    };
    ProductsRestImplService.prototype.updateProduct = function (product) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + "/products/" + product.id, product).toPromise();
    };
    ProductsRestImplService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsRestImplService);
    return ProductsRestImplService;
}(_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));



/***/ }),

/***/ "./src/app/service/shopping-cart-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/shopping-cart-service.service.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartServiceService", function() { return ShoppingCartServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingCartServiceService = /** @class */ (function () {
    function ShoppingCartServiceService() {
        this.shoppingCartKey = 'shopping-cart';
        this.shoppingCartItems = new Map();
        var products = localStorage.getItem(this.shoppingCartKey);
        if (products) {
            this.shoppingCartItems = new Map(JSON.parse(products));
        }
    }
    ShoppingCartServiceService.prototype.getItems = function () {
        return this.shoppingCartItems;
    };
    ShoppingCartServiceService.prototype.addProduct = function (product) {
        if (this.shoppingCartItems.has(product.id)) {
            var oldProduct = this.shoppingCartItems.get(product.id);
            console.log(oldProduct);
            this.shoppingCartItems.set(product.id, __assign({}, oldProduct, { products_quantity: oldProduct.products_quantity + 1 }));
        }
        else {
            this.shoppingCartItems.set(product.id, __assign({}, product, { products_quantity: 1 }));
        }
        this.saveInLocalStorage();
    };
    ShoppingCartServiceService.prototype.deleteProduct = function (product) {
        var productOpt = this.shoppingCartItems.get(product.id);
        if (productOpt && productOpt.products_quantity > 1) {
            var oldProduct = this.shoppingCartItems.get(product.id);
            this.shoppingCartItems.set(product.id, __assign({}, oldProduct, { products_quantity: oldProduct.products_quantity - 1 }));
        }
        else if (productOpt && productOpt.products_quantity === 1) {
            this.shoppingCartItems.delete(product.id);
        }
        this.saveInLocalStorage();
    };
    ShoppingCartServiceService.prototype.getTotalValue = function () {
        var totalValue = 0;
        this.shoppingCartItems.forEach(function (v) { return totalValue += v.products_quantity * v.price; });
        return totalValue;
    };
    ShoppingCartServiceService.prototype.clear = function () {
        this.shoppingCartItems.clear();
        this.saveInLocalStorage();
    };
    ShoppingCartServiceService.prototype.saveInLocalStorage = function () {
        localStorage.setItem(this.shoppingCartKey, JSON.stringify(Array.from(this.shoppingCartItems.entries())));
    };
    ShoppingCartServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartServiceService);
    return ShoppingCartServiceService;
}());



/***/ }),

/***/ "./src/app/service/socket.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/socket.service.ts ***!
  \*******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL);
    }
    SocketService.prototype.send = function (timeDiscount) {
        this.socket.emit('newDiscount', timeDiscount);
    };
    SocketService.prototype.onTimeDiscount = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('newDiscount', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEndDiscount = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('endDiscount', function (data) { return observer.next(data); });
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/environments/config.ts":
/*!************************************!*\
  !*** ./src/environments/config.ts ***!
  \************************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var serverURL = 'https://hidden-meadow-13855.herokuapp.com';
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: 'AIzaSyAo6s5MzR7MTHPg9CLYcLwqV6me0ExR5dY',
        authDomain: 'angularshopzpw.firebaseapp.com',
        databaseURL: 'https://angularshopzpw.firebaseio.com',
        projectId: 'angularshopzpw',
        storageBucket: 'angularshopzpw.appspot.com',
        messagingSenderId: '1051710357965'
    },
    apiRoot: serverURL + "/api",
    serverURL: serverURL
};


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/klusm/Documents/agh/ZPW/lab4/shop-zpw-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map