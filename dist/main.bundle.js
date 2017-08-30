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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav></app-nav>\r\n<app-idea-list></app-idea-list>\r\n<app-ecosystem></app-ecosystem>\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ecosystem_ecosystem_component__ = __webpack_require__("../../../../../src/app/components/ecosystem/ecosystem.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_7__components_ecosystem_ecosystem_component__["a" /* EcosystemComponent */],
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

/***/ "../../../../../src/app/components/ecosystem/ecosystem.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Begin EchoSystem -->\r\n<section id=\"ecosystem\" class=\"wrapper style3 special\">\r\n  <div class=\"inner\">\r\n    <header class=\"major\">\r\n      <h2>Smart Gigabit Community Ecosystem</h2>\r\n      <p>\r\n        Key features separate communities ready to take the lead<br />\r\n        in the emerging gigabit economy.  Ecosystems that provide services, attract<br />\r\n        businesses, and enable growth have these features in common.\r\n      </p>\r\n    </header>\r\n    <ul class=\"features\">\r\n      <li class=\"icon fa-forward\">\r\n        <h3>Gigabit Speeds</h3>\r\n        <p>Ultra-Fast networks that exceed the limits of current broadband technologies enable sharing more information than ever before, at faster speeds, in all directions.</p>\r\n      </li>\r\n      <li class=\"icon fa-clock-o\">\r\n        <h3>Real-Time Responses</h3>\r\n        <p>Services can recieve replies from systems on the edge of the community network with no perceptable delay, providing the same interactive as being there in person.</p>\r\n      </li>\r\n      <li class=\"icon fa-code\">\r\n        <h3>Intelligent Networks</h3>\r\n        <p>Software Defined Networks can adapt to changing conditions in real-time and intelligently route traffic to isolate critical infrastructure to the right members.</p>\r\n      </li>\r\n      <li class=\"icon fa-exchange\">\r\n        <h3>Local Traffic Exchanges</h3>\r\n        <p>Gigabit network traffic never leaves the region and local network providers exchange local traffic freely for the shortest routes and response times possible.</p>\r\n      </li>\r\n      <li class=\"icon fa-heart-o\">\r\n        <h3>Innovation Incubator</h3>\r\n        <p>Local developers connect and communicate freely with one another, they understand how to access local infrastructure to develop new ideas and have a way to incubate their applicaitons locally in edge-compute hosts.</p>\r\n      </li>\r\n      <li class=\"icon fa-server\">\r\n        <h3>Edge Computing</h3>\r\n        <p>Compute resources are integrated into the community infrastructure and available to innovators.  Local data-centers, community academic or government clusters, and compute capable embedded devices all allow smart applications to run at or near the point of interaction for ultra-fast response times.</p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n\r\n<!-- CTA -->\r\n<section id=\"cta\" class=\"wrapper style4\">\r\n  <div class=\"inner\">\r\n    <header>\r\n      <h2>Be Smart, make the leap to Gigabit</h2>\r\n      <p>Bring your community forward, learn how to get involved and transform your community by becoming a member of our Smart Gigabit Communities network.</p>\r\n    </header>\r\n    <ul class=\"actions vertical\">\r\n      <li><a href=\"https://www.us-ignite.org/programs/smart-gigabit-communities/\" class=\"button fit special\" target=\"_blank\">JOIN</a></li>\r\n      <li><a href=\"https://www.us-ignite.org/\" class=\"button fit\" target=\"_blank\">Contact</a></li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n<!-- End Echosystem -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/ecosystem/ecosystem.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ecosystem/ecosystem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcosystemComponent; });
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

var EcosystemComponent = (function () {
    function EcosystemComponent() {
    }
    EcosystemComponent.prototype.ngOnInit = function () {
    };
    return EcosystemComponent;
}());
EcosystemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ecosystem',
        template: __webpack_require__("../../../../../src/app/components/ecosystem/ecosystem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/ecosystem/ecosystem.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EcosystemComponent);

//# sourceMappingURL=ecosystem.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Begin Footer -->\r\n<footer id=\"footer\">\r\n  <ul class=\"icons\">\r\n    <li *ngFor=\"let s of socialLinks\">\r\n      <a target=\"_blank\" href=\"{{ s.url }}\" class=\"icon fa-{{ s.faclass }}\">\r\n        <span class=\"label\">{{ s.name }}</span></a>\r\n    </li>\r\n  </ul>\r\n  <ul>\r\n    <li>&copy; {{ copyText }} US Ignite</li>\r\n    <li class=\"small\">Design: Adaptaion of the Spectral Theme by <a href=\"http://html5up.net\" target=\"_blank\" class=\"small\">HTML5 UP</a></li>\r\n  </ul>\r\n</footer>\r\n<!-- End Footer -->\r\n"

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

module.exports = "<section class=\"spotlight\" [ngClass]=\"{'wrapper alt style1': odd}\">\r\n  <div class=\"image\">\r\n    <img src=\"{{ scenario.image }}\" alt=\"{{ scenario.img_alt_text }}\">\r\n  </div>\r\n  <div class=\"content\">\r\n    <p>{{ scenario.problem }}\r\n      {{ solution }}<span [hidden]=\"!solution\">.</span>\r\n      <span [hidden]=\"solution\">...</span>\r\n    </p>\r\n    <input type=\"text\" placeholder=\"Type your idea or click on ideas below\"\r\n           [(ngModel)]=\"solution\" (input)=\"resetExample()\">\r\n    <div class=\"row\">\r\n        <div class=\"half-column align-left\">\r\n          <a (click)=\"toggleShowIdeas()\" class=\"icon\"><i class=\"icon fa-lightbulb-o small\"></i> ideas</a>\r\n        </div>\r\n        <div class=\"half-column align-right\" [hidden]=\"!solution\">\r\n          <a (click)=\"setMailTo()\" href=\"{{ mailTo }}\" class=\"icon\">email this <i class=\"icon fa-envelope small\"></i></a>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- based on example at https://css-tricks.com/snippets/jquery/styled-popup-menu/ -->\r\n    <div class=\"size\" (click)=\"toggleShowIdeas()\" (mouseleave)=\"toggleShowIdeas()\" *ngIf=\"showIdeas\">\r\n      <ul class=\"list\">\r\n        <li *ngFor=\"let idea of scenario.ideas\" (click)=\"addSolution(idea.text, idea.examples)\">\r\n          <a>{{ idea.text }}</a>\r\n          <!-- template?  send idea.examples each as link? -->\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"align-left\" [hidden]=\"!showExamples\">\r\n      <strong>Similar:</strong>\r\n      <span *ngFor=\"let example of examples; let isLast=last\">\r\n      <a href=\"{{ example.url }}\" target=\"_blank\" >\r\n        {{ example.name }}\r\n      </a>{{isLast? '' : ', '}}</span>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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
        this.showIdeas = false;
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

module.exports = "<!-- Begin Nav -->\r\n<!-- Begin Header -->\r\n<header id=\"header\" class=\"alt\">\r\n  <h1>US Ignite Gig Reactor</h1>\r\n  <nav id=\"nav\">\r\n    <ul>\r\n      <li class=\"special\">\r\n        <a href=\"#menu\" class=\"menuToggle\"><span>Menu</span></a>\r\n        <div id=\"menu\">\r\n          <ul>\r\n            <li><a href=\"#page-wrapper\" class=\"scrolly\">Top</a></li>\r\n            <li><a href=\"#idea\" class=\"icon fa-lightbulb-o scrolly\"> Generate</a></li>\r\n            <li><a href=\"#echosystem\" class=\"icon fa-graduation-cap scrolly\"> Learn More</a></li>\r\n            <li><a href=\"#footer\" class=\"icon fa-users scrolly\"> Social Media</a></li>\r\n            <li><a href=\"assets/files/USIgniteGigabitAppGenerator.pdf\" target=\"_blank\" class=\"icon fa-file-text\"> Paper Version</a></li>\r\n            <li><a href=\"https://us-ignite.org\" target=\"_blank\" class=\"icon fa-home\"> US Ignite Home</a></li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</header>\r\n<!-- End Header -->\r\n\r\n<!-- BEGIN CONTENT -->\r\n<!-- Banner -->\r\n<section id=\"banner\">\r\n  <div class=\"inner\">\r\n    <h2>US Ignite Gig Reactor</h2>\r\n    <p>Sparking thought for Smart Gigabit Communities solving challenging problems today's networks can't address by <a href=\"https://us-ignite.org\" target=\"_blank\">US Ignite</a></p>\r\n    <ul class=\"actions\">\r\n      <li><a href=\"#one\" class=\"button special scrolly\">Generate Ideas</a></li>\r\n    </ul>\r\n  </div>\r\n  <a href=\"#ecosystem\" class=\"more scrolly\">Learn More</a>\r\n</section>\r\n\r\n<!-- One -->\r\n<section id=\"one\" class=\"wrapper style1 special\">\r\n  <div class=\"inner\">\r\n    <header>\r\n      <h2>Gigabit Application Generator</h2>\r\n      <p>Use the generator below to help spark a gigabit application ideas!   Some sample ideas include an application listed in the <a href=\"https://www.us-ignite.org/apps/\" target=\"_blank\">US Ignite Application Registry</a> that represents <strong>just one way</strong> to address just part of that need, but <strong>more solutions are needed</strong> in almost every area.\r\n      </p>\r\n      <h6>Advanced networks powering next generation applications are...</h6>\r\n    </header>\r\n    <ul class=\"icons major\">\r\n      <li><i class=\"icon fa-forward major style1\"></i><br><br><h6>High Bandwidth</h6></li>\r\n      <li><i class=\"icon fa-refresh major style2\"></i><br><br><h6>Real-Time</h6></li>\r\n      <li><i class=\"icon fa-code major style3\"></i><br><br><h6>Programmable</h6></li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n<!-- End Nav -->\r\n"

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
                image: 'assets/images/BP2_2887.jpg',
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
                                url: 'https://www.us-ignite.org/apps/fitnet/'
                            }
                        ]
                    },
                    {
                        text: 'examine and manipulate 3D objects',
                        examples: [
                            {
                                name: 'PlanIT Impact',
                                url: 'https://www.us-ignite.org/apps/PlanIT-Impact/'
                            }
                        ]
                    },
                    {
                        text: 'interactively view the similar sections of a big data set (or larger)',
                        examples: []
                    },
                    {
                        text: 'have a natural conversation or distributed meeting as if you were together',
                        examples: [
                            {
                                name: 'UltraGrid',
                                url: 'http://www.ultragrid.cz/'
                            },
                            {
                                name: 'SightDeck',
                                url: 'https://www.us-ignite.org/apps/cmh-sightdeck/'
                            }
                        ]
                    },
                    {
                        text: 'teach and learn in a virtual environment',
                        examples: []
                    },
                    {
                        text: 'annotate 360 degree video',
                        examples: [
                            {
                                name: 'PanoVR',
                                url: 'https://www.us-ignite.org/apps/panovr/'
                            }
                        ]
                    },
                    {
                        text: 'adjust city planning data interactively and visualize the results of their changes',
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
                                url: 'https://www.us-ignite.org/apps/gigabots/'
                            }
                        ]
                    }
                ]
            },
            {
                problem: 'Expand the capabilities of low-end devices by using off-site resources over high speed networks and edge-compute to connect',
                image: 'assets/images/IoTArray.jpg',
                img_alt_text: 'A controller manages an array of sensors',
                ideas: [
                    {
                        text: 'VR headsets for experiential education',
                        examples: []
                    },
                    {
                        text: 'domestic robot swarms for interactive education or home monitoring',
                        examples: []
                    },
                    {
                        text: 'senior citizens to health and safety monitoring systems',
                        examples: [
                            {
                                name: 'Elder-Care as a Service',
                                url: 'https://www.us-ignite.org/apps/in-home-health-alert/'
                            }
                        ]
                    },
                    {
                        text: '3D modeling systems to fabrication facilities',
                        examples: []
                    },
                    {
                        text: 'shoppers to recommendation engines provide feedback in real-time at point of purchase',
                        examples: []
                    }
                ]
            },
            {
                problem: 'Use big-data from hubs, archives or field devices for better decision making or education by',
                image: 'assets/images/BP2_3761.jpg',
                img_alt_text: 'Presentation by the Compute for Cancer team',
                ideas: [
                    {
                        text: 'merging and visualizing civic and engineering data to plan for increased energy efficiency',
                        examples: [
                            {
                                name: 'PlanIT Impact',
                                url: 'https://www.us-ignite.org/apps/PlanIT-Impact/'
                            }
                        ]
                    },
                    {
                        text: 'merging and visualizing meteorological data with real time pollution sensors',
                        examples: [
                            {
                                name: 'LEaRN',
                                url: 'https://www.us-ignite.org/apps/lafayette-engagement-and-research-network-learn/'
                            },
                            {
                                name: 'GASP',
                                url: 'https://www.us-ignite.org/apps/GeusuJhSDth9GSXeZN7sM8/'
                            }
                        ]
                    },
                    {
                        text: 'modeling city data in a collaborative augmented reality environment.',
                        examples: []
                    },
                    {
                        text: 'retraining machine learning algorithms to form dynamic AI systems',
                        examples: []
                    },
                    {
                        text: 'overlaying layers from multi-spectrum surveys for better land use or monitoring of infrastructure',
                        examples: []
                    },
                    {
                        text: 'detecting floods in real-time and advise area residents to seek safety or of unsafe travel routes',
                        examples: [
                            {
                                name: 'Resilient Warning Systems',
                                url: 'https://www.us-ignite.org/apps/zJiQHYzzoXrZJthAHwcN5F/'
                            }
                        ]
                    },
                    {
                        text: 'analyze drone footage to help find a missing person or monitor infrastructure',
                        examples: []
                    }
                ]
            },
            {
                problem: 'Provide unprecedented levels of detail through the use of low-latency streaming 4k Video to',
                image: 'assets/images/BP2_3741.jpg',
                img_alt_text: 'Demonstration of real-time remote solar VR education',
                ideas: [
                    {
                        text: 'provide high quality real-time microscopy to classrooms',
                        examples: [
                            {
                                name: '4K Microscope',
                                url: 'https://www.us-ignite.org/apps/yfkBqZSHjDYJmE35hSzgDg/'
                            }
                        ]
                    },
                    {
                        text: 'provide real time control over telescopes for sky observations to classrooms',
                        examples: []
                    },
                    {
                        text: 'stream interactive 360 degree video for collaborative analysis',
                        examples: [
                            {
                                name: 'PanoVR',
                                url: 'https://www.us-ignite.org/apps/panovr/'
                            }
                        ]
                    },
                    {
                        text: 'connect mental health professionals with patient remotely at high frame rate',
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
                image: 'assets/images/BP1_0943.jpg',
                img_alt_text: 'A small programmable robot',
                ideas: [
                    {
                        text: 'robots that enable seamless interaction with the environment',
                        examples: []
                    },
                    {
                        text: 'connect mental health professionals with patient remotely at high frame rate',
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
                image: 'assets/images/BP1_0723.jpg',
                img_alt_text: 'An array of inter-connected IoT devices',
                ideas: [
                    {
                        text: 'building a Software Defined Network that isolates IoT arrays from the public internet',
                        examples: []
                    },
                    {
                        text: 'provide direct connections between area compute clusters to build a distributed super-computer',
                        examples: []
                    },
                    {
                        text: 'isolating critical infrastructure like public safety networks or power grids to allow systems to only interact internally',
                        examples: [
                            {
                                name: 'Secure-WAMS',
                                url: 'https://www.us-ignite.org/apps/secure-wams/'
                            }
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