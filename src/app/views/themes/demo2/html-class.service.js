"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Angular
var core_1 = require("@angular/core");
// Object-Path
var objectPath = require("object-path");
// RxJS
var rxjs_1 = require("rxjs");
var HtmlClassService = /** @class */ (function () {
    /**
     * Component constructor
     */
    function HtmlClassService() {
        // Private properties
        this.loaded = [];
        this.onClassesUpdated$ = new rxjs_1.BehaviorSubject(this.classes);
    }
    /**
     * Build html element classes from layout config
     * @param layoutConfig
     */
    HtmlClassService.prototype.setConfig = function (layoutConfig) {
        this.config = layoutConfig;
        // scope list of classes
        this.classes = {
            header: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: []
        };
        // init base layout
        this.initLayout();
        this.initLoader();
        // init header and subheader menu
        this.initHeader();
        this.initSubheader();
        // init aside and aside menu
        this.initAside();
        this.initContent();
        // init footer
        this.initFooter();
        this.onClassesUpdated$.next(this.classes);
    };
    /**
     * Returns Classes
     *
     * @param path: string
     * @param toStringL boolean
     */
    HtmlClassService.prototype.getClasses = function (path, toString) {
        if (path) {
            var classes = objectPath.get(this.classes, path) || '';
            if (toString && Array.isArray(classes)) {
                return classes.join(' ');
            }
            return classes.toString();
        }
        return this.classes;
    };
    /**
     * Init Layout
     */
    HtmlClassService.prototype.initLayout = function () {
        if (objectPath.has(this.config, 'self.body.class')) {
            document.body.classList.add(objectPath.get(this.config, 'self.body.class'));
        }
        if (objectPath.get(this.config, 'self.layout') === 'boxed' && objectPath.has(this.config, 'self.body.background-image')) {
            document.body.style.backgroundImage = 'url("' + objectPath.get(this.config, 'self.body.background-image') + '")';
        }
        if (objectPath.get(this.config, 'width')) {
            document.body.classList.add('kt-page--' + objectPath.get(this.config, 'width'));
        }
    };
    /**
     * Init Loader
     */
    HtmlClassService.prototype.initLoader = function () {
    };
    /**
     * Init Header
     */
    HtmlClassService.prototype.initHeader = function () {
        // Fixed header
        if (objectPath.get(this.config, 'header.self.fixed.desktop.enabled')) {
            document.body.classList.add('kt-header--fixed');
            objectPath.push(this.classes, 'header', 'kt-header--fixed');
            document.body.classList.add('kt-header--minimize-' + objectPath.get(this.config, 'header.self.fixed.desktop.mode'));
        }
        else {
            document.body.classList.add('kt-header--static');
        }
        if (objectPath.get(this.config, 'header.self.fixed.mobile')) {
            document.body.classList.add('kt-header-mobile--fixed');
            objectPath.push(this.classes, 'header_mobile', 'kt-header-mobile--fixed');
        }
    };
    /**
     * Inin Subheader
     */
    HtmlClassService.prototype.initSubheader = function () {
        // Fixed content head
        if (objectPath.get(this.config, 'subheader.fixed')) {
            document.body.classList.add('kt-subheader--fixed');
        }
        if (objectPath.get(this.config, 'subheader.display')) {
            document.body.classList.add('kt-subheader--enabled');
        }
        if (objectPath.has(this.config, 'subheader.style')) {
            document.body.classList.add('kt-subheader--' + objectPath.get(this.config, 'subheader.style'));
        }
    };
    /**
     * Init Aside
     */
    HtmlClassService.prototype.initAside = function () {
        if (objectPath.get(this.config, 'aside.self.display') !== true) {
            return;
        }
        document.body.classList.add('kt-aside--enabled');
        if (objectPath.get(this.config, 'aside.self.skin')) {
            objectPath.push(this.classes, 'aside', 'kt-aside--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            document.body.classList.add('kt-aside--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            objectPath.push(this.classes, 'aside_menu', 'kt-aside-menu--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            document.body.classList.add('kt-aside__brand--skin-' + objectPath.get(this.config, 'aside.self.skin'));
            objectPath.push(this.classes, 'brand', 'kt-aside__brand--skin-' + objectPath.get(this.config, 'aside.self.skin'));
        }
        // Fixed Aside
        if (objectPath.get(this.config, 'aside.self.fixed')) {
            document.body.classList.add('kt-aside--fixed');
            objectPath.push(this.classes, 'aside', 'kt-aside--fixed');
        }
        else {
            document.body.classList.add('kt-aside--static');
        }
        // Default fixed
        if (objectPath.get(this.config, 'aside.self.minimize.default')) {
            document.body.classList.add('kt-aside--minimize');
        }
        // Menu
        // Dropdown Submenu
        if (objectPath.get(this.config, 'aside.self.fixed') !== true && objectPath.get(this.config, 'aside.menu.dropdown')) {
            objectPath.push(this.classes, 'aside_menu', 'kt-aside-menu--dropdown');
            // enable menu dropdown
        }
    };
    /**
     * Init Aside Secondary
     */
    HtmlClassService.prototype.initAsideSecondary = function () {
        if (objectPath.get(this.config, 'aside-secondary.self.display')) {
            document.body.classList.add('kt-aside-secondary--enabled');
        }
        if (objectPath.get(this.config, 'aside-secondary.self.expanded') === true && objectPath.get(this.config, 'aside-secondary.self.layout') !== 'layout-2') {
            document.body.classList.add('kt-aside-secondary--expanded');
        }
        if (objectPath.get(this.config, 'aside-secondary.self.layout') === 'layout-3') {
            document.body.classList.add('kt-aside-secondary--static');
        }
    };
    /**
     * Init Content
     */
    HtmlClassService.prototype.initContent = function () {
        // Fixed content head
        if (objectPath.get(this.config, 'content.head.fixed.desktop')) {
            document.body.classList.add('kt-content-head--fixed');
        }
        if (objectPath.get(this.config, 'content.head.fixed.mobile')) {
            document.body.classList.add('kt-content-head-mobile--fixed');
        }
    };
    /**
     * Init Footer
     */
    HtmlClassService.prototype.initFooter = function () {
        // Fixed header
        if (objectPath.get(this.config, 'footer.self.fixed')) {
            document.body.classList.add('kt-footer--fixed');
        }
    };
    HtmlClassService = __decorate([
        core_1.Injectable()
    ], HtmlClassService);
    return HtmlClassService;
}());
exports.HtmlClassService = HtmlClassService;
