webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav></app-nav>\r\n<app-idea-list></app-idea-list>\r\n<app-echosystem></app-echosystem>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ideas_ideas_component__ = __webpack_require__("../../../../../src/app/components/ideas/ideas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_echosystem_echosystem_component__ = __webpack_require__("../../../../../src/app/components/echosystem/echosystem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_idea_list_idea_list_component__ = __webpack_require__("../../../../../src/app/components/idea-list/idea-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_idea_idea_component__ = __webpack_require__("../../../../../src/app/components/idea/idea.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_ideas_ideas_component__["a" /* IdeasComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_echosystem_echosystem_component__["a" /* EchosystemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_idea_list_idea_list_component__["a" /* IdeaListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_idea_idea_component__["a" /* IdeaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/echosystem/echosystem.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Begin EchoSystem -->\r\n<section id=\"echosystem\" class=\"wrapper style3 special\">\r\n  <div class=\"inner\">\r\n    <header class=\"major\">\r\n      <h2>Smart Gigabit Community Echosystem</h2>\r\n      <p>\r\n        Some key features separate communities ready to take the lead<br />\r\n        in the emerging gigabit economy.  Proviging services, attracting<br />\r\n        buisnesses, and enabling growth have these things in common.\r\n      </p>\r\n    </header>\r\n    <ul class=\"features\">\r\n      <li class=\"icon fa-forward\">\r\n        <h3>Gigabit Speeds</h3>\r\n        <p>Fast networks that execeed the limits of current broadband enable sharing more information than ever before, at faster speeds, in all directions.</p>\r\n      </li>\r\n      <li class=\"icon fa-clock-o\">\r\n        <h3>Real-Time Responses</h3>\r\n        <p>Using regional compute resources enable users and services to recieve a reply from the edge of thier community with no noticeable delay.</p>\r\n      </li>\r\n      <li class=\"icon fa-code\">\r\n        <h3>Intelligent Networks</h3>\r\n        <p>Software Defined Networks can adapt to changing conditions in realtime and intelligently route traffic to isolate critical infrastructure to the right members.</p>\r\n      </li>\r\n      <li class=\"icon fa-exchange\">\r\n        <h3>Local Traffic Exchanges</h3>\r\n        <p>Gigabit network traffic never leaves the region and providers exchange local traffic freely for the shortest routes and response times possible.</p>\r\n      </li>\r\n      <li class=\"icon fa-heart-o\">\r\n        <h3>Innovation Incubator</h3>\r\n        <p>Local developers connect and communicate freely with one another, they understand how to accesss local infrastructure to develop new ideas and have a way to incubate their applicaitons locally in edge-compute hosts.</p>\r\n      </li>\r\n      <li class=\"icon fa-server\">\r\n        <h3>Edge Computing</h3>\r\n        <p>Compute resourses are integrated into the community infrastructure and available to innovators.  Local datacenters, community academic or government clusters, and compute capable embedded devices all allow smart applications to run at or near the point of interaction for ultra-fast response times.</p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n\r\n<!-- CTA -->\r\n<section id=\"cta\" class=\"wrapper style4\">\r\n  <div class=\"inner\">\r\n    <header>\r\n      <h2>Be Smart, make the leap to Gigabit</h2>\r\n      <p>Bring your community forward, learn how to get involved and transform your community by becoming a member of our Smart Gigabit Communities network.</p>\r\n    </header>\r\n    <ul class=\"actions vertical\">\r\n      <li><a href=\"https://www.us-ignite.org/programs/smart-gigabit-communities/\" class=\"button fit special\" target=\"_blank\">JOIN</a></li>\r\n      <li><a href=\"https://www.us-ignite.org/\" class=\"button fit\" target=\"_blank\">Contact</a></li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n<!-- End Echosystem -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/echosystem/echosystem.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/echosystem/echosystem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchosystemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchosystemComponent = (function () {
    function EchosystemComponent() {
    }
    EchosystemComponent.prototype.ngOnInit = function () {
    };
    return EchosystemComponent;
}());
EchosystemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-echosystem',
        template: __webpack_require__("../../../../../src/app/components/echosystem/echosystem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/echosystem/echosystem.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EchosystemComponent);

//# sourceMappingURL=echosystem.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Begin Footer -->\r\n<footer id=\"footer\">\r\n  <ul class=\"icons\">\r\n    <li *ngFor=\"let s of socialLinks\">\r\n      <a target=\"_blank\" href=\"{{ s.url }}\" class=\"icon fa-{{ s.faclass }}\">\r\n        <span class=\"label\">{{ s.name }}</span></a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"copyright\">\r\n    <li>&copy; {{ copyText }} US Ignite</li>\r\n    <li>Design: <a href=\"http://html5up.net\" target=\"_blank\">HTML5 UP</a></li>\r\n  </ul>\r\n</footer>\r\n<!-- End Footer -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.copyStart = 2017;
        this.socialLinks = [
            {
                name: 'Twitter',
                url: 'https://twitter.com/US_Ignite',
                faclass: 'twitter'
            },
            {
                name: 'Linked-In',
                url: 'https://www.linkedin.com/company/us-ignite',
                faclass: 'linkedin-square'
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/USIgnite',
                faclass: 'facebook-official'
            },
            {
                name: 'Google Plus',
                url: 'https://plus.google.com/115026873083967953743',
                faclass: 'google-plus-square'
            },
            {
                name: 'YouTube',
                url: 'https://www.youtube.com/user/USIgnite1',
                faclass: 'youtube-square'
            },
            {
                name: 'info@us-ignite.org',
                url: 'mailto:info@us-ignite.org',
                faclass: 'envelope'
            }
        ];
        this.copyText = this.copyYear();
    };
    FooterComponent.prototype.copyYear = function () {
        var copyText = String(this.copyStart);
        var today = new Date();
        var currentYear = today.getFullYear();
        if (currentYear > this.copyStart) {
            copyText += '-' + String(currentYear);
        }
        return copyText;
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/idea-list/idea-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"idea\" class=\"wrapper alt style2\">\r\n  <app-idea *ngFor=\"let scenario of scenarios; let odd=odd\" [scenario]=\"scenario\" [odd]=\"odd\"></app-idea>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/idea-list/idea-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/idea-list/idea-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeaListComponent = (function () {
    function IdeaListComponent(dataService) {
        this.dataService = dataService;
    }
    IdeaListComponent.prototype.ngOnInit = function () {
        this.scenarios = this.dataService.getData();
    };
    return IdeaListComponent;
}());
IdeaListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-idea-list',
        template: __webpack_require__("../../../../../src/app/components/idea-list/idea-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/idea-list/idea-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], IdeaListComponent);

var _a;
//# sourceMappingURL=idea-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/idea/idea.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"spotlight\" [ngClass]=\"{'wrapper alt style1': odd}\">\r\n  <div class=\"image\">\r\n    <img src=\"{{ scenario.image }}\" alt=\"{{ scenario.img_alt_text }}\">\r\n  </div>\r\n  <div class=\"content\">\r\n    <p>{{ scenario.problem }}\r\n      {{ solution }}<span [hidden]=\"!solution\">.</span>\r\n      <span [hidden]=\"solution\">...</span>\r\n    </p>\r\n    <input type=\"text\" placeholder=\"Type your idea or click on ideas below\"\r\n           [(ngModel)]=\"solution\" (input)=\"resetExample()\">\r\n    <div class=\"row\">\r\n        <div class=\"half-column align-left\">\r\n          <a (click)=\"toggleShowIdeas()\" class=\"icon\"><i class=\"icon fa-lightbulb-o small\"></i> ideas</a>\r\n        </div>\r\n        <div class=\"half-column align-right\" [hidden]=\"!solution\">\r\n          <a (click)=\"setMailTo()\" href=\"{{ mailTo }}\" class=\"icon\">email this <i class=\"icon fa-envelope small\"></i></a>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- based on example at https://css-tricks.com/snippets/jquery/styled-popup-menu/ -->\r\n    <div class=\"size\" (click)=\"toggleShowIdeas()\" (mouseleave)=\"toggleShowIdeas()\" [hidden]=\"showIdeas\">\r\n      <ul class=\"list\">\r\n        <li *ngFor=\"let idea of scenario.ideas\" (click)=\"addSolution(idea.text, idea.examples)\">\r\n          <a>{{ idea.text }}</a>\r\n          <!-- template?  send idea.examples each as link? -->\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"align-left\" [hidden]=\"!showExamples\">\r\n      <strong>Similar:</strong>\r\n      <span *ngFor=\"let ex of examples; let isLast=last\">\r\n      <a href=\"ex.url\" target=\"_blank\" >\r\n        {{ ex.name }}\r\n      </a>{{isLast? '' : ', '}}</span>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/idea/idea.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/idea/idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_scenario__ = __webpack_require__("../../../../../src/app/models/scenario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_scenario___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_scenario__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeaComponent = (function () {
    function IdeaComponent() {
    }
    IdeaComponent.prototype.ngOnInit = function () {
        this.showIdeas = true;
        this.showExamples = false;
        this.examples = [];
    };
    IdeaComponent.prototype.toggleShowIdeas = function () {
        this.showIdeas = !this.showIdeas;
    };
    IdeaComponent.prototype.resetExample = function () {
        if (this.showExamples) {
            this.examples = [];
        }
        this.showExamples = false;
    };
    IdeaComponent.prototype.addSolution = function (solution, examples) {
        this.solution = solution;
        this.showExamples = false;
        if (examples.length > 0) {
            this.showExamples = true;
        }
        this.examples = examples;
    };
    IdeaComponent.prototype.setMailTo = function () {
        var linkText = ['mailto:?'];
        linkText.push('subject=' + encodeURI('Gigabit App Idea from US Ignite'));
        linkText.push('cc=' + encodeURI('scott.turnbull@us-ignite.org'));
        linkText.push('body=' + encodeURI('You created the following at the US Ignite Gig App Generator\n\n' + this.scenario.problem + ' ' + this.solution + '.'));
        this.mailTo = linkText.join('&');
    };
    return IdeaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scenario'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_scenario__["Scenario"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_scenario__["Scenario"]) === "function" && _a || Object)
], IdeaComponent.prototype, "scenario", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('odd'),
    __metadata("design:type", Boolean)
], IdeaComponent.prototype, "odd", void 0);
IdeaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-idea',
        template: __webpack_require__("../../../../../src/app/components/idea/idea.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/idea/idea.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IdeaComponent);

var _a;
//# sourceMappingURL=idea.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/ideas/ideas.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Begin Idea -->\r\n<!-- Two -->\r\n<section id=\"idea\" class=\"wrapper alt style2\">\r\n  <section *ngFor=\"let s of scenarios\" class=\"spotlight\">\r\n    <div class=\"image\">\r\n      <img src=\"{{ s.image }}\" alt=\"{{ s.alt_text }}\"/></div>\r\n    <div class=\"content\">\r\n      <p>{{ s.problem }} {{ s.solution }}</p>\r\n      <div class=\"dropdown\">\r\n        <input type=\"text\" id=\"collab_idea\" placeholder=\"Select or type your own\">\r\n        <ul class=\"dropdown-menu\">\r\n          <li *ngFor=\"let idea of s.ideas\">{{ idea.body }}</li>\r\n        </ul>\r\n      </div>\r\n      <p>\r\n        <strong>Example:</strong>  <a href=\"\" target=\"_blank\"></a>\r\n      </p>\r\n    </div>\r\n  </section>\r\n</section>\r\n<!-- End Idea -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/ideas/ideas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ideas/ideas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeasComponent = (function () {
    function IdeasComponent(dataService) {
        this.dataService = dataService;
    }
    IdeasComponent.prototype.ngOnInit = function () {
        this.scenarios = this.dataService.getData();
    };
    return IdeasComponent;
}());
IdeasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ideas',
        template: __webpack_require__("../../../../../src/app/components/ideas/ideas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/ideas/ideas.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], IdeasComponent);

var _a;
//# sourceMappingURL=ideas.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Begin Nav -->\r\n<!-- Begin Header -->\r\n<header id=\"header\" class=\"alt\">\r\n  <h1>US Ignite Gig Reactor</h1>\r\n  <nav id=\"nav\">\r\n    <ul>\r\n      <li class=\"special\">\r\n        <a href=\"#menu\" class=\"menuToggle\"><span>Menu</span></a>\r\n        <div id=\"menu\">\r\n          <ul>\r\n            <li><a href=\"#page-wrapper\" class=\"scrolly\">Top</a></li>\r\n            <li><a href=\"#idea\" class=\"icon fa-lightbulb-o scrolly\"> Generate</a></li>\r\n            <li><a href=\"#echosystem\" class=\"icon fa-graduation-cap scrolly\"> Learn More</a></li>\r\n            <li><a href=\"#footer\" class=\"icon fa-users scrolly\"> Social Media</a></li>\r\n            <li><a href=\"https://us-ignite.org\" target=\"_blank\" class=\"icon fa-home\"> US Ignite Home</a></li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</header>\r\n<!-- End Header -->\r\n\r\n<!-- BEGIN CONTENT -->\r\n<!-- Banner -->\r\n<section id=\"banner\">\r\n  <div class=\"inner\">\r\n    <h2>US Ignite Gig Reactor</h2>\r\n    <p>Sparking thought for Smart Gigabit Communities solving challenging problems today's networks can't address by <a href=\"https://us-ignite.org\" target=\"_blank\">US Ignite</a></p>\r\n    <ul class=\"actions\">\r\n      <li><a href=\"#one\" class=\"button special scrolly\">Generate Ideas</a></li>\r\n    </ul>\r\n  </div>\r\n  <a href=\"#echosystem\" class=\"more scrolly\">Learn More</a>\r\n</section>\r\n\r\n<!-- One -->\r\n<section id=\"one\" class=\"wrapper style1 special\">\r\n  <div class=\"inner\">\r\n    <header>\r\n      <h2>Gigabit Application Generator</h2>\r\n      <p>\r\n        Try your hand at generating just a few ideas for applications using advanced gigabit networks.\r\n      </p>\r\n    </header>\r\n    <ul class=\"icons major\">\r\n      <li><span class=\"icon fa-forward major style1\"><span class=\"label\">High Bandwidth</span></span></li>\r\n      <li><span class=\"icon fa-refresh major style2\"><span class=\"label\">Real-Time</span></span></li>\r\n      <li><span class=\"icon fa-code major style3\"><span class=\"label\">Secure</span></span></li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n<!-- End Nav -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/scenario.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=scenario.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getData = function () {
        if (!this.data) {
            this.setData();
        }
        return this.data;
    };
    DataService.prototype.setData = function () {
        this.data = [
            {
                problem: 'Two or more people in different places need to simultaneously and collaboratively',
                image: '/assets/images/BP2_2887.jpg',
                img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
                ideas: [
                    {
                        text: 'perform music',
                        examples: [
                            {
                                name: 'LOLA',
                                url: 'https://www.internet2.edu/vision-initiatives/initiatives/innovation-platform/'
                            }
                        ]
                    },
                    {
                        text: 'exercise with coordinated movements',
                        examples: [
                            {
                                name: 'FitNet',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'examine and manipulate 3D objects',
                        examples: [
                            {
                                name: 'PlanIT Impact',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'interactively view the similar sections of a big data set (or larger)',
                        examples: [
                            {
                                name: 'Pollution Viewer',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'have a natural conversation or distributed meeting as if you were in the same space ',
                        examples: [
                            {
                                name: 'UltraGrid',
                                url: ''
                            },
                            {
                                name: 'SightDeck',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'teach or learn in a virtual environment',
                        examples: [
                            {
                                name: 'SolarVR Education',
                                url: ''
                            },
                            {
                                name: 'VR Medical Campus',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'annotate 360 degree video',
                        examples: [
                            {
                                name: 'PanoVR',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'adjust city budget or planning documents interactively and visualize the results of their changes',
                        examples: [
                            {
                                name: 'Austin Budget Party',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'pair program manufacturing or educational robots and have them act in real-time',
                        examples: [
                            {
                                name: 'Gigabots',
                                url: ''
                            }
                        ]
                    }
                ]
            },
            {
                problem: 'Expand the capabilities of low-end devices by using off-site resources over high speed networks and edge-compute to connect',
                image: '/assets/images/IoTArray.jpg',
                img_alt_text: 'A controller manages an array of sensors',
                ideas: [
                    {
                        text: 'VR headsets for experiential education',
                        examples: [
                            {
                                name: 'SolarVR',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'domestic robots swarms',
                        examples: []
                    },
                    {
                        text: 'senior citizens to health and safety monitoring systems',
                        examples: [
                            {
                                name: 'Elder-Care as a Service',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: '3D modeling systems and fabrication labs',
                        examples: [
                            {
                                name: 'Virtual Fab-Lab',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'shoppers to recommendation engines provide feedback in real-time at point of purchase',
                        examples: [
                            {
                                name: 'Electronic Double Up Foodbucks',
                                url: ''
                            }
                        ]
                    }
                ]
            },
            {
                problem: 'Use big-data from hubs, archives or field devices for better decision making or education by',
                image: '/assets/images/BP2_3761.jpg',
                img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
                ideas: [
                    {
                        text: 'merging and visualizing civic and engineering data to plan for increased energy efficiency',
                        examples: [
                            {
                                name: 'PlanIT Impact',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'visualizing meteorological data with real time pollution sensors',
                        examples: [
                            {
                                name: 'LEaRN',
                                url: ''
                            },
                            {
                                name: 'Pollution Vizualizer',
                                url: ''
                            },
                            {
                                name: 'GASP',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'modeling city data in a collaborative AR or VR environment',
                        examples: []
                    },
                    {
                        text: 'retraining machine learning algorithms training sets to form real-time recommendations',
                        examples: []
                    },
                    {
                        text: 'overlaying layers from multi-spectrum surveys for better land use or monitoring of infrastructure',
                        examples: []
                    },
                    {
                        text: 'detecting floods in real-time and advise area residents to seek safety or of unsafe travel routes',
                        examples: []
                    },
                    {
                        text: 'analyze drone footage to help find a missing person or monitor infrastructure',
                        examples: []
                    }
                ]
            },
            {
                problem: 'Provide unprecedented levels of detail through the use of streaming 4k Video to',
                image: '/assets/images/BP2_3741.jpg',
                img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
                ideas: [
                    {
                        text: 'provide high quality real-time microscopy to classrooms',
                        examples: [
                            {
                                name: '4K Microscope',
                                url: ''
                            }
                        ]
                    },
                    {
                        text: 'provide real time control over telescopes for sky observations to classrooms',
                        examples: []
                    },
                    {
                        text: 'stream interactive 360 degree video for collaborative analysis',
                        examples: []
                    },
                    {
                        text: 'connect mental health professionals with patience remotely at high frame rate',
                        examples: []
                    },
                    {
                        text: 'teach lip-reading or body language analysis',
                        examples: []
                    }
                ]
            },
            {
                problem: 'Enable real-time interactive control of',
                image: '/assets/images/BP1_0943.jpg',
                img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
                ideas: [
                    {
                        text: 'robots that enable seamless interaction with the environment',
                        examples: []
                    },
                    {
                        text: 'manufacturing arrays to enable high percision professional crafting remotely',
                        examples: []
                    },
                    {
                        text: 'surgical robots so doctors can assist in critical procedures remotely',
                        examples: []
                    },
                    {
                        text: 'simulated environments to enable experiential education in high skill fields',
                        examples: []
                    },
                    {
                        text: 'implanted medical devices to tailor therapy to patients schedule and reduce the need for expensive travel to medical centers',
                        examples: []
                    }
                ]
            },
            {
                problem: 'Enable unprecedented levels of security or enable direct interaction by',
                image: '/assets/images/BP1_0723.jpg',
                img_alt_text: 'Two users wearing hololens to examine a brain diagram together in real time',
                ideas: [
                    {
                        text: 'perform music',
                        examples: [
                            {
                                name: 'building a Software Defined Network that isolates IoT arrays from the public internet',
                                url: ''
                            },
                            {
                                name: 'provide direct connections between area compute clusters to build a distributed super-computer',
                                url: ''
                            },
                            {
                                name: 'isolating critical infrastructure like public safety networks or power grids to allow systems to only interact internally',
                                url: ''
                            },
                        ]
                    }
                ]
            }
        ];
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map