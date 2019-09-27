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
var MenuConfigService = /** @class */ (function () {
    /**
     * Service Constructor
     */
    function MenuConfigService() {
        // register on config changed event and set default config
        this.onConfigUpdated$ = new rxjs_1.Subject();
    }
    /**
     * Returns the menuConfig
     */
    MenuConfigService.prototype.getMenus = function () {
        return this.menuConfig;
    };
    /**
     * Load config
     *
     * @param config: any
     */
    MenuConfigService.prototype.loadConfigs = function (config) {
        this.menuConfig = config;
        this.onConfigUpdated$.next(this.menuConfig);
    };
    MenuConfigService = __decorate([
        core_1.Injectable()
    ], MenuConfigService);
    return MenuConfigService;
}());
exports.MenuConfigService = MenuConfigService;
