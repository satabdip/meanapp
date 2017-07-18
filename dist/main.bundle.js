webpackJsonp([1,4],{

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/meanstack/meanapp/src/main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(682),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posts_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__satabdi_satabdi_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_book_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_detail_book_detail_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loginpage_loginpage_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__registerpage_registerpage_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_toastr_ng2_toastr__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__passwordrecover_passwordrecover_component__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_13__loginpage_loginpage_component__["a" /* LoginpageComponent */] },
    {
        path: 'posts',
        component: __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */]
    },
    {
        path: 'satabdi',
        component: __WEBPACK_IMPORTED_MODULE_8__satabdi_satabdi_component__["a" /* SatabdiComponent */]
    },
    {
        path: 'passwordrecover',
        component: __WEBPACK_IMPORTED_MODULE_16__passwordrecover_passwordrecover_component__["a" /* PasswordrecoverComponent */]
    },
    { path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_9__book_book_component__["a" /* BookComponent */]
    },
    { path: 'book-create',
        component: __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__["a" /* BookCreateComponent */] },
    { path: 'book-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__book_detail_book_detail_component__["a" /* BookDetailComponent */] },
    { path: 'login/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__loginpage_loginpage_component__["a" /* LoginpageComponent */] },
    { path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_14__registerpage_registerpage_component__["a" /* RegisterpageComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__satabdi_satabdi_component__["a" /* SatabdiComponent */],
                __WEBPACK_IMPORTED_MODULE_9__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__loginpage_loginpage_component__["a" /* LoginpageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__registerpage_registerpage_component__["a" /* RegisterpageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__passwordrecover_passwordrecover_component__["a" /* PasswordrecoverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES) // Add routes to the app
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__posts_service__["a" /* PostsService */], { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["HashLocationStrategy"] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookCreateComponent = (function () {
    function BookCreateComponent(postsService, router) {
        this.postsService = postsService;
        this.router = router;
        this.book = {};
    }
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent.prototype.saveBook = function () {
        var _this = this;
        this.postsService.saveBook(this.book).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(683),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BookCreateComponent);
    return BookCreateComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/book-create.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = (function () {
    function BookDetailComponent(route, postsService) {
        this.route = route;
        this.postsService = postsService;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetail(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        this.postsService.showBook(id).then(function (res) {
            _this.book = res;
            console.log(_this.book);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(684),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _b) || Object])
    ], BookDetailComponent);
    return BookDetailComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/book-detail.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookComponent = (function () {
    function BookComponent(postsService) {
        this.postsService = postsService;
    }
    BookComponent.prototype.ngOnInit = function () {
        this.getBookList();
    };
    BookComponent.prototype.getBookList = function () {
        var _this = this;
        this.postsService.getAllBooks().then(function (res) {
            _this.books = res;
        }, function (err) {
            alert(err);
            // console.log(err);
        });
    };
    BookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(685),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], BookComponent);
    return BookComponent;
    var _a;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/book.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginpageComponent = (function () {
    function LoginpageComponent(toastr, vcr, route, router, postsService) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.postsService = postsService;
        this.user = {};
        this.login = {};
        this.passwordresponse = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    LoginpageComponent.prototype.loginuser = function () {
        this.getUserDetail();
    };
    LoginpageComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.postsService.showloginUser(this.login).then(function (res) {
            _this.user = res;
            if (_this.user === null) {
                _this.toastr.info('<span style="color: red;background: black;">Invalid username or password.</span>', null, { enableHTML: true });
            }
            else {
                _this.toastr.info('<span style="color: green;background: black;top:2%;">Login successful.</span>', null, { enableHTML: true });
                _this.router.navigate(['/books']);
            }
        }, function (err) {
            console.log(err);
            // alert(err);
        });
    };
    LoginpageComponent.prototype.registertab = function () {
        this.router.navigate(['/register']);
    };
    LoginpageComponent.prototype.forgotpassword = function () {
        var _this = this;
        this.postsService.showmailresponse(this.forgotmail).then(function (res) {
            _this.passwordresponse = res;
            console.log(_this.passwordresponse);
        }, function (err) {
            console.log(err);
            // alert(err);
        });
    };
    LoginpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(686),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _e) || Object])
    ], LoginpageComponent);
    return LoginpageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/loginpage.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordrecoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordrecoverComponent = (function () {
    function PasswordrecoverComponent() {
    }
    PasswordrecoverComponent.prototype.ngOnInit = function () {
    };
    PasswordrecoverComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-passwordrecover',
            template: __webpack_require__(687),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], PasswordrecoverComponent);
    return PasswordrecoverComponent;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/passwordrecover.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        // instantiate posts to an empty array
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.allpost = function () {
        var _this = this;
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(688),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/posts.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterpageComponent = (function () {
    function RegisterpageComponent(postsService, router) {
        this.postsService = postsService;
        this.router = router;
        this.user = {};
    }
    RegisterpageComponent.prototype.ngOnInit = function () {
    };
    RegisterpageComponent.prototype.register = function () {
        var _this = this;
        this.postsService.registeruser(this.user).then(function (result) {
            var id = result['_id'];
            console.log(result);
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterpageComponent.prototype.logintab = function () {
        this.router.navigate(['/login']);
    };
    RegisterpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registerpage',
            template: __webpack_require__(689),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterpageComponent);
    return RegisterpageComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/registerpage.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SatabdiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SatabdiComponent = (function () {
    function SatabdiComponent(postsService) {
        this.postsService = postsService;
        this.names = [];
    }
    SatabdiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getName().subscribe(function (name) {
            _this.names = name;
        });
    };
    SatabdiComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-satabdi',
            template: __webpack_require__(690),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], SatabdiComponent);
    return SatabdiComponent;
    var _a;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/satabdi.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/meanstack/meanapp/src/environment.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    // Get all posts from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('/api/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getName = function () {
        return this.http.get('/api/satabdi')
            .map(function (res) { return "welcome satabdi"; });
    };
    PostsService.prototype.getAllBooks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/book')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostsService.prototype.saveBook = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/booksave', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostsService.prototype.registeruser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/userregister', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostsService.prototype.showBook = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/book/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostsService.prototype.showUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/userdetails/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostsService.prototype.showloginUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/api/loginuserdetails/', user)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostsService.prototype.showmailresponse = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/api/showmailresponse/' + email)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=D:/meanstack/meanapp/src/posts.service.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ".btn-success\r\n{\r\n  transition: 0.5s;\r\n}\r\n\r\n.btn-success:hover, .btn-success:focus\r\n{\r\n  background: white;\r\n  border-color: #5cb85c;\r\n  color: black;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.btn-warning\r\n{\r\n  transition: 0.5s;\r\n}\r\n\r\n.btn-warning:hover, .btn-warning:focus\r\n{\r\n  background: white;\r\n  color: black;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.panel.with-nav-tabs .nav-tabs\r\n{\r\n  border-bottom: none;\r\n}\r\n.panel.with-nav-tabs .nav-justified\r\n{\r\n  margin-bottom: -4px;\r\n}\r\n\r\n.panel\r\n{\r\n  margin: 7%;\r\n}\r\n\r\n.modal-header\r\n{\r\n  background: #FF3838;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.input-group-addon\r\n{\r\n  background-color: #5cb85c;\r\n  color: white;\r\n}\r\n\r\n.iga1\r\n{\r\n  background-color: #f0ad4e;\r\n  color: white;\r\n}\r\n\r\n.iga2\r\n{\r\n  background-color: #FF3838;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add New Book</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"saveBook()\" #bookForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Title</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Author</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Publisher</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Price</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.price\" name=\"price\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ book.title }}</h1>\n  <dl class=\"list\">\n    <dt>ISBN</dt>\n    <dd>{{ book.isbn }}</dd>\n    <dt>Author</dt>\n    <dd>{{ book.author }}</dd>\n    <dt>Publisher</dt>\n    <dd>{{ book.publisher }}</dd>\n    <dt>Price</dt>\n    <dd>{{ book.price }}</dd>\n    <dt>Update Date</dt>\n    <dd>{{ book.updated_at }}</dd>\n  </dl>\n</div>"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Book Catalogue</h1>\n  <table class=\"table\">\n    <thead>\n\n    <tr>\n    <strong>store book details\n  <a [routerLink]=\"['/book-create']\" class=\"btn btn-default btn-lg\">\n    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n  </a>\n</strong>\n    </tr>\n      <tr>\n        <th>Title</th>\n        <th>Author</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of books\">\n        <td>{{ book.title }}</td>\n        <td>{{ book.author }}</td>\n        <td>Show Detail</td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n  <h1>User Login</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"loginuser()\" #loginForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">User Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"login.username\" name=\"username\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"name\">Enter Password</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"login.password\" name=\"password\" required>\n        </div>\n\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel with-nav-tabs panel-info\">\n        <div class=\"panel-heading\">\n          <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#login\" data-toggle=\"tab\" routerLinkActive=\"true\"> Login </a></li>\n            <li><a href=\"#\" (click)=\"registertab();\" data-toggle=\"tab\" > Signup </a></li>\n          </ul>\n        </div>\n\n        <div class=\"panel-body\">\n          <div class=\"tab-content\">\n            <div id=\"login\" class=\"tab-pane fade in active register\">\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <h2 class=\"text-center\" style=\"color: #5cb85c;\"> <strong> Login  </strong></h2><hr />\n                  <form (ngSubmit)=\"loginuser()\" #loginForm=\"ngForm\">\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-addon\">\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <input type=\"text\" placeholder=\"User Name\" [(ngModel)]=\"login.username\"  name=\"username\" class=\"form-control\" required>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-addon\">\n                            <span class=\"glyphicon glyphicon-lock\"></span>\n                          </div>\n\n                          <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"login.password\" name=\"password\" class=\"form-control\" required>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n                  <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                      <div class=\"form-group\">\n                        <input type=\"checkbox\" name=\"check\" checked> Remember Me\n                      </div>\n                    </div>\n\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                      <div class=\"form-group\">\n                        <a href=\"#forgot\" data-toggle=\"modal\"> Forgot Password? </a>\n                      </div>\n                    </div>\n                  </div>\n                  <hr />\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <button  type=\"submit\" class=\"btn btn-success btn-block btn-lg\"> Login </button>\n                    </div>\n                  </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n\n            <div id=\"signup\" class=\"tab-pane fade\">\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <h2 class=\"text-center\" style=\"color: #f0ad4e;\"> <Strong> Register </Strong></h2> <hr />\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-addon iga1\">\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\" name=\"name\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-addon iga1\">\n                            <span class=\"glyphicon glyphicon-envelope\"></span>\n                          </div>\n                          <input type=\"email\" class=\"form-control\" placeholder=\"Enter E-Mail\" name=\"mail\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                  <hr>\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-lg btn-block btn-warning\"> Register</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"forgot\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss='modal' aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n        <h4 class=\"modal-title\" style=\"font-size: 32px; padding: 12px;\"> Recover Your Password </h4>\n      </div>\n<form (ngSubmit)=\"forgotpassword()\" #forgotForm=\"ngForm\">\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-addon iga2\">\n                    <span class=\"glyphicon glyphicon-envelope\"></span>\n                  </div>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Enter Your E-Mail ID\"  [(ngModel)]=\"forgotmail\" name=\"forgotmail\" required >\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-lg btn-info\"> Submit</button>\n\n          <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-lg btn-default\"> Cancel </button>\n        </div>\n      </div>\n\n</form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<p>\n  passwordrecover works!\n</p>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let post of posts\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ post.title }}</h4>\n      <p class=\"card-text\">{{post.body}}</p>\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n  <h1>User Registration</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">User Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Enter Email</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Enter Password</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Confirm Password</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.confirmpassword\" name=\"confirmpassword\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>-->\n<!--\n<div class=\"container\">\n  <h1>User Login</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"loginuser()\" #loginForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">User Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"login.username\" name=\"username\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"name\">Enter Password</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"login.password\" name=\"password\" required>\n        </div>\n\n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel with-nav-tabs panel-info\">\n        <div class=\"panel-heading\">\n          <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\" (click)=\"logintab();\" data-toggle=\"tab\"> Login </a></li>\n            <li><a href=\"#signup\" data-toggle=\"tab\" routerLinkActive=\"true\"> Signup </a></li>\n          </ul>\n        </div>\n\n        <div class=\"panel-body\">\n          <div class=\"tab-content\">\n\n            <div id=\"signup\" class=\"tab-pane fade in active login\">\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <h2 class=\"text-center\" style=\"color: #f0ad4e;\"> <Strong> Register </Strong></h2> <hr />\n                  <form (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-addon iga1\">\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                          </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\"  [(ngModel)]=\"user.username\"  name=\"username\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-addon iga1\">\n                            <span class=\"glyphicon glyphicon-envelope\"></span>\n                          </div>\n                          <input type=\"email\" class=\"form-control\" placeholder=\"Enter E-Mail\" [(ngModel)]=\"user.email\" name=\"email\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-addon iga1\">\n                            <span class=\"glyphicon glyphicon-lock\"></span>\n                          </div>\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" [(ngModel)]=\"user.password\" name=\"password\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                    <div class=\"row\">\n                      <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                        <div class=\"form-group\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-addon iga1\">\n                              <span class=\"glyphicon glyphicon-lock\"></span>\n                            </div>\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Your Password\" [(ngModel)]=\"user.confirmpassword\" name=\"confirmpassword\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  <hr>\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n                      <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!registerForm.form.valid\"  class=\"btn btn-lg btn-block btn-warning\"> Register</button>\n                      </div>\n                    </div>\n                  </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<p>\n  satabdi works!{{names}}\n</p>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[710]);
//# sourceMappingURL=main.bundle.map