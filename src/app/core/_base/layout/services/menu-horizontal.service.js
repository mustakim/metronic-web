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
// RxJS
var rxjs_1 = require("rxjs");
// Object-Path
var objectPath = require("object-path");
var MenuHorizontalService = /** @class */ (function () {
    /**
     * Service constructor
     *
     * @param menuConfigService: MenuConfigServcie
     */
    function MenuHorizontalService(menuConfigService) {
        this.menuConfigService = menuConfigService;
        // Public properties
        this.menuList$ = new rxjs_1.BehaviorSubject({});
        this.loadMenu();
    }
    /**
     * Load menu list
     */
    MenuHorizontalService.prototype.loadMenu = function () {
        // get menu list
        var menuItems = objectPath.get(this.menuConfigService.getMenus(), 'header.items');
        this.menuList$.next(menuItems);
    };
    MenuHorizontalService = __decorate([
        core_1.Injectable()
    ], MenuHorizontalService);
    return MenuHorizontalService;
}());
exports.MenuHorizontalService = MenuHorizontalService;
