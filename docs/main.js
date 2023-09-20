"use strict";
(self["webpackChunkportifolio"] = self["webpackChunkportifolio"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu/menu.component */ 6658);
/* harmony import */ var _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/sobre/sobre.component */ 1880);
/* harmony import */ var _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contato/contato.component */ 5205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'menu',
  component: _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent
}, {
  path: 'sobre',
  component: _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_2__.SobreComponent
}, {
  path: 'contato',
  component: _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_3__.ContatoComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharepage/navbar/navbar.component */ 8822);
/* harmony import */ var _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sharepage/footer/footer.component */ 9392);




class AppComponent {
  constructor() {
    this.title = 'Portifolio Vitor Vidotto';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharepage/navbar/navbar.component */ 8822);
/* harmony import */ var _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharepage/footer/footer.component */ 9392);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu/menu.component */ 6658);
/* harmony import */ var _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/sobre/sobre.component */ 1880);
/* harmony import */ var _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contato/contato.component */ 5205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);










class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _pages_sobre_sobre_component__WEBPACK_IMPORTED_MODULE_6__.SobreComponent, _pages_contato_contato_component__WEBPACK_IMPORTED_MODULE_7__.ContatoComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 5205:
/*!****************************************************!*\
  !*** ./src/app/pages/contato/contato.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContatoComponent: () => (/* binding */ ContatoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ContatoComponent {}
ContatoComponent.ɵfac = function ContatoComponent_Factory(t) {
  return new (t || ContatoComponent)();
};
ContatoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContatoComponent,
  selectors: [["app-contato"]],
  decls: 17,
  vars: 0,
  consts: [[1, "banner"], [1, "text-center"], [1, "text-center", "socialmidia"], ["href", "https://github.com/Vitor-Vidotto", "target", "_blank"], [1, "bi", "bi-github"], ["href", "https://www.linkedin.com/in/vitor-vidotto-334912253/", "target", "_blank"], [1, "bi", "bi-linkedin"], ["href", "https://www.instagram.com/soy.vidotto/", "target", "_blank"], [1, "bi", "bi-instagram"], ["href", "https://forms.gle/9eMeo2jCBrT7FDEm6", "target", "_blank"], [1, "bi", "bi-clipboard2-check"]],
  template: function ContatoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aqui abaixo est\u00E3o meus meios de contato:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Github");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Linkedin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Formul\u00E1rio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["h1[_ngcontent-%COMP%]{\n    color: aliceblue;\n}\nh2[_ngcontent-%COMP%]{\n    color: aliceblue;\n}\n.banner[_ngcontent-%COMP%]{\n    width: 100%;\n    height:auto;\n    min-height: 90%;\n    min-width: 10vh;\n    background: linear-gradient(-45deg,#303030, black, #303030);\n    background-size: 400% 400%;\n    position: relative;\n    animation: _ngcontent-%COMP%_change 10s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_change {\n    0%{\n        background-position: 0 50%;\n    }\n    50%{\n        background-position: 100% 50%;\n    }\n    100%{\n        background-position: 0 50%;\n    }\n}\n.wrapper[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100%;\n    left: 15%;\n}\nspan[_ngcontent-%COMP%]{\n    color: aliceblue;\n    font-size: 7.5vw;\n    font-weight: 500;\n    letter-spacing: 1px;\n}\n.multiText[_ngcontent-%COMP%]{\n    color: blueviolet;\n    text-transform: capitalize;\n    font-weight: 800;\n}\na[_ngcontent-%COMP%]{\n    font-size: 40px;\n    margin: 40px;\n    color: rgba(0, 255, 255, 0.473);\n}\ni[_ngcontent-%COMP%]{\n    margin: 10px;\n}\n.socialmidia[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGF0by9jb250YXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLDJEQUEyRDtJQUMzRCwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLmJhbm5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgICBtaW4td2lkdGg6IDEwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCMzMDMwMzAsIGJsYWNrLCAjMzAzMDMwKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uOiBjaGFuZ2UgMTBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgY2hhbmdlIHtcclxuICAgIDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcclxuICAgIH1cclxufVxyXG4ud3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMTUlO1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1zaXplOiA3LjV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5tdWx0aVRleHR7XHJcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5he1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNDczKTtcclxufVxyXG5pe1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5zb2NpYWxtaWRpYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 424:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class HomeComponent {
  constructor() {}
  ngOnInit() {
    const options = {
      strings: ['Programador', 'Desenvolvedor'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    const typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__["default"]('.typed-element', options);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 21,
  vars: 0,
  consts: [[1, "banner"], [1, "text-center"], [1, "typed-element"], ["href", "https://drive.google.com/file/d/1u842oyv6SZcfq9A0XyTVq1uCGzDBo-gj/view?usp=sharing", "target", "_blank", "tabindex", "-1", "role", "button", "aria-disabled", "true", 1, "btn", "btn-primary", "btn-lg"], ["routerLink", "menu", "routerLinkActive", "active-link", "tabindex", "-1", "role", "button", "aria-disabled", "true", 1, "btn", "btn-primary", "btn-lg"], ["routerLink", "contato", "routerLinkActive", "active-link", "tabindex", "-1", "role", "button", "aria-disabled", "true", 1, "btn", "btn-secondary", "btn-lg"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bem Vindo!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Meu Nome \u00E9 Vitor Vidotto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Eu sou ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Veja meus projetos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1)(13, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Baixar Curr\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ver Projetos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Contato");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: ["h1[_ngcontent-%COMP%]{\n    color: aliceblue;\n    font-size: 80px;\n}\nh2[_ngcontent-%COMP%]{\n    color: aliceblue;\n}\nh3[_ngcontent-%COMP%]{\n    color: aliceblue;\n}\n.banner[_ngcontent-%COMP%]{\n    width: 100%;\n    height:auto;\n    min-height: 90%;\n    min-width: 10vh;\n    background: linear-gradient(-45deg,#303030, black, #303030);\n    background-size: 400% 400%;\n    position: relative;\n    animation: _ngcontent-%COMP%_change 10s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_change {\n    0%{\n        background-position: 0 50%;\n    }\n    50%{\n        background-position: 100% 50%;\n    }\n    100%{\n        background-position: 0 50%;\n    }\n}\n.wrapper[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100%;\n    left: 15%;\n}\nspan[_ngcontent-%COMP%]{\n    color: aqua;\n    letter-spacing: 1px;\n}\n.multiText[_ngcontent-%COMP%]{\n    color: blueviolet;\n    text-transform: capitalize;\n    font-weight: 800;\n}\na[_ngcontent-%COMP%]{\n    margin : 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZiwyREFBMkQ7SUFDM0QsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbmgze1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4uYmFubmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDkwJTtcclxuICAgIG1pbi13aWR0aDogMTB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIzMwMzAzMCwgYmxhY2ssICMzMDMwMzApO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246IGNoYW5nZSAxMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBjaGFuZ2Uge1xyXG4gICAgMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG59XHJcbi53cmFwcGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiBhcXVhO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ubXVsdGlUZXh0e1xyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuYXtcclxuICAgIG1hcmdpbiA6IDEwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6658:
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MenuComponent {}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)();
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 59,
  vars: 0,
  consts: [[1, "banner"], [1, "text-center"], [1, "container"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "card"], ["src", "https://i.ibb.co/j6xsMGr/download-1.png", "alt", "Projeto FullStack", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "https://i.ibb.co/0rrb5jV/Screenshot-3.png", "alt", "Projeto FullStack", 1, "card-img-top"], ["src", "https://i.ibb.co/yRj5w0c/Screenshot-2.png", "alt", "Projeto FullStack", 1, "card-img-top"], ["src", "https://i.ibb.co/smbyxfD/Calculadora.png", "alt", "Uma Calculadora", 1, "card-img-top"], ["src", "https://i.ibb.co/JCv36yv/Site-jogos.png", "alt", "Primeiro Site", 1, "card-img-top"], ["src", "https://i.ibb.co/zrvvTn2/jogo.png", "alt", "Ambiente Virtual", 1, "card-img-top"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aqui abaixo est\u00E3o meus alguns de meus projetos: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Saiba que todos est\u00E3o disponiveis no meu Github, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ent\u00E3o caso queira ver mais, te espero l\u00E1! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "App React Native");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Desenvolvi um projeto fullstack em react native com o firebase para autentica\u00E7\u00E3o e utilizando uma API externa onde a mesma \u00E9 um banco de dados de filmes e afins, desse modo podendo criar um app de cat\u00E1logo de filmes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4)(20, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7)(23, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "App de Controle C#");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Desenvolvi um projeto em c# onde o mesmo serve para monitorar e enviar arquivos via FTP, fazendo que os mesmos sirvam de backup para a maquina e que sirva tamb\u00E9m para controle e gera\u00E7\u00E3o de logs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4)(28, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7)(31, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lista de Tarefas React");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Desenvolvi um projeto em react com Firebase, para uma lista de tarefas que funciona com um banco de dados externo onde pode ser atualizada editada manualmente, isso foi Desenvolvido antes de eu ter meus conhecimentos sobre backend e firebase. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4)(36, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7)(39, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Meu Primeiro Projeto em C");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Desenvolvemos nossa primeira calculadora em C, onde ela realizava todas as opera\u00E7\u00F5es de uma calculadora normal, tinha mudan\u00E7a de tema claro para escuro e quando desejava sair, tocava uma musica de despedida. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4)(44, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7)(47, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Meu Primeiro Site");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Desenvolvemos um site onde era possivel se ver os jogos mais classicos criados e colocamos um \"easter egg\" no mesmo, sinta-se a vontade de tentar achar, n\u00E3o \u00E9 nada muito complexo, mas foi muito interessante sua cria\u00E7\u00E3o. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4)(52, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7)(55, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Primeiro Jogo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Desenvolvido como parte de meu volunt\u00E1riado, o don't stay away \u00E9 um jogo onde o foco \u00E9 capturar as moedas que s\u00E3o geradas aleat\u00F3riamente no mapa antes que o tempo acabe e voc\u00EA perca, uma mec\u00E2nica simples desenvolvida em pouco tempo. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["h1[_ngcontent-%COMP%]{\n    color: aliceblue;\n}\nh2[_ngcontent-%COMP%]{\n    color: aliceblue;\n}\n.banner[_ngcontent-%COMP%]{\n    width: 100%;\n    height:auto;\n    min-width: 10vh;\n    min-height: 100%;\n    background: linear-gradient(-45deg,#303030, black, #303030);\n    background-size: 400% 400%;\n    position: relative;\n    animation: _ngcontent-%COMP%_change 10s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_change {\n    0%{\n        background-position: 0 50%;\n    }\n    50%{\n        background-position: 100% 50%;\n    }\n    100%{\n        background-position: 0 50%;\n    }\n}\n.container[_ngcontent-%COMP%]{\n    padding: 10px;\n}\n\n.wrapper[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100%;\n    left: 15%;\n}\nspan[_ngcontent-%COMP%]{\n    color: aliceblue;\n    font-size: 7.5vw;\n    font-weight: 500;\n    letter-spacing: 1px;\n}\n.multiText[_ngcontent-%COMP%]{\n    color: blueviolet;\n    text-transform: capitalize;\n    font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJEQUEyRDtJQUMzRCwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLmJhbm5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywjMzAzMDMwLCBibGFjaywgIzMwMzAzMCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbjogY2hhbmdlIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGNoYW5nZSB7XHJcbiAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDcuNXZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLm11bHRpVGV4dHtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1880:
/*!************************************************!*\
  !*** ./src/app/pages/sobre/sobre.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SobreComponent: () => (/* binding */ SobreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SobreComponent {}
SobreComponent.ɵfac = function SobreComponent_Factory(t) {
  return new (t || SobreComponent)();
};
SobreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SobreComponent,
  selectors: [["app-sobre"]],
  decls: 74,
  vars: 0,
  consts: [[1, "banner"], [1, "nome"], [1, "text-center"], [1, "texto", "container", "square-box", "d-flex", "justify-content-center", "align-items-center"]],
  template: function SobreComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sou o Vitor Vidotto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estou cursando Engenharia da Computa\u00E7\u00E3o na Facens ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " onde meu foco \u00E9 me tornar um desenvolvedor pleno ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " sou fluente em portugu\u00EAs e em ingl\u00EAs para conversa\u00E7\u00E3o ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tenho mantido meus estudos voltado as \u00E1reas de: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u2022 Desenvolvimento Web ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u2022 Front-End e Back-End ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u2022 Desenvolvimento Unity ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u2022 Banco de Dados ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br")(24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Possuo conhecimentos nas seguintes aplica\u00E7\u00F5es: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u2022 Edi\u00E7\u00E3o de V\u00EDdeo Vegas 18 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u2022 Visual Studio Community ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u2022 Visual Studio Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u2022 Pacote Office Completo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u2022 Photoshop ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u2022 Insomnia ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u2022 Autocad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u2022 Docker ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u2022 Revit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br")(45, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Programa\u00E7\u00E3o nas linguagens: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u2022 Typescript ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u2022 JavaScript ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u2022 Phyton ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \u2022 HTML ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u2022 CSS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u2022 C+ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u2022 C ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br")(62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Frameworks: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u2022 React Native ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u2022 Cypress ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u2022 Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u2022 React ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u2022 Vue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["h1[_ngcontent-%COMP%]{\n    color: aliceblue;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    padding: 10px;\n}\nh2[_ngcontent-%COMP%]{\n    color: aliceblue;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\np[_ngcontent-%COMP%]{\n    color: aliceblue;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.banner[_ngcontent-%COMP%]{\n    width: 100%;\n    height: auto;\n    min-width: 10vh;\n    background: linear-gradient(-45deg,#303030, black, #303030);\n    background-size: 500% 500%;\n    position: relative;\n    animation: _ngcontent-%COMP%_change 10s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_change {\n    0%{\n        background-position: 0 50%;\n    }\n    50%{\n        background-position: 100% 50%;\n    }\n    100%{\n        background-position: 0 50%;\n    }\n}\n.wrapper[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100%;\n    left: 15%;\n}\nspan[_ngcontent-%COMP%]{\n    color: aliceblue;\n    font-size: 7.5vw;\n    font-weight: 500;\n    letter-spacing: 1px;\n}\n.multiText[_ngcontent-%COMP%]{\n    color: blueviolet;\n    text-transform: capitalize;\n    font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc29icmUvc29icmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixzSEFBc0g7SUFDdEgsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxREFBcUQ7QUFDekQ7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLDJEQUEyRDtJQUMzRCwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmJhbm5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAxMHZoO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywjMzAzMDMwLCBibGFjaywgIzMwMzAzMCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMCUgNTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbjogY2hhbmdlIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGNoYW5nZSB7XHJcbiAgICAwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDE1JTtcclxufVxyXG5zcGFue1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogNy41dnc7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4ubXVsdGlUZXh0e1xyXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9392:
/*!******************************************************!*\
  !*** ./src/app/sharepage/footer/footer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 26,
  vars: 0,
  consts: [[1, "container-fluid", "footer"], [1, "row"], [1, "col-lg-6"], [1, "col-lg-4"], ["routerLink", ""], ["routerLink", "sobre"], ["routerLink", "menu"], ["routerLink", "contato"], [1, "col-lg-2"], ["href", "https://github.com/Vitor-Vidotto", "target", "_blank"], [1, "bi", "bi-github"], ["href", "https://www.linkedin.com/in/vitor-vidotto-334912253/", "target", "_blank"], [1, "bi", "bi-linkedin"], ["href", "https://www.instagram.com/soy.vidotto/", "target", "_blank"], [1, "bi", "bi-instagram"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vitor Vidotto");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Meu Portif\u00F3lio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vitor.v.m.tozi@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sobre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projetos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contato");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".footer[_ngcontent-%COMP%]{\n    overflow: hidden;\n    position: sticky;\n    top: 100%;\n    background-color: rgb(0, 0, 0);\n    padding: 20px 10px;\n}\nh1[_ngcontent-%COMP%]{\n    color: #fff;\n    font-size: 20px;\n}\n.col-lg-6[_ngcontent-%COMP%]{\n    width: 41%;\n}\np[_ngcontent-%COMP%]{\n    color: rgba(0, 255, 255, 0.726);\n}\na[_ngcontent-%COMP%]{\n    color: #fff;\n    text-decoration: none;\n    padding: 0px 10px;\n    font-size: 17px;\n}\na[_ngcontent-%COMP%]:hover{\n    color: var(--primary-color);\n}\ni[_ngcontent-%COMP%]{\n    color: var(--primary-color);\n    padding: 0px 10px;\n}\ni[_ngcontent-%COMP%]:hover{\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVwYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uY29sLWxnLTZ7XHJcbiAgICB3aWR0aDogNDElO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC43MjYpO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuaXtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcbmk6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8822:
/*!******************************************************!*\
  !*** ./src/app/sharepage/navbar/navbar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


const _c0 = function () {
  return {
    exact: true
  };
};
class NavbarComponent {}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 20,
  vars: 2,
  consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-dark", "p-2", 2, "background-color", "rgb(0, 0, 0)"], [1, "container-fluid"], [1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "", "routerLinkActive", "active-link", 1, "nav-link", "active", 3, "routerLinkActiveOptions"], ["routerLink", "sobre", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "menu", "routerLinkActive", "active-link", 1, "nav-link"], ["routerLink", "contato", "routerLinkActive", "active-link", 1, "nav-link"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Folio.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sobre");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Projetos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7)(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contato");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
  styles: [".navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n    color: var(--secundary-color);\n    font-weight: bold;\n}\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active-link[_ngcontent-%COMP%]{\n    color: var(--primary-color);\n    font-weight: bold;\n    text-decoration: underline;\n}\n.navbar-brand[_ngcontent-%COMP%]{\n    color:aqua;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVwYWdlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogdmFyKC0tc2VjdW5kYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUtbGlua3tcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICAgIGNvbG9yOmFxdWE7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map