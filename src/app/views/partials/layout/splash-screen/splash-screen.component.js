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
var SplashScreenComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el: ElementRef
     * @param layoutConfigService: LayoutConfigService
     * @param splashScreenService: SplachScreenService
     */
    function SplashScreenComponent(el, layoutConfigService, splashScreenService) {
        this.el = el;
        this.layoutConfigService = layoutConfigService;
        this.splashScreenService = splashScreenService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SplashScreenComponent.prototype.ngOnInit = function () {
        // init splash screen, see loader option in layout.config.ts
        var loaderConfig = this.layoutConfigService.getConfig('loader');
        this.loaderLogo = objectPath.get(loaderConfig, 'logo');
        this.loaderType = objectPath.get(loaderConfig, 'type');
        this.loaderMessage = objectPath.get(loaderConfig, 'message');
        this.splashScreenService.init(this.splashScreen);
    };
    __decorate([
        core_1.ViewChild('splashScreen')
    ], SplashScreenComponent.prototype, "splashScreen");
    SplashScreenComponent = __decorate([
        core_1.Component({
            selector: 'kt-splash-screen',
            templateUrl: './splash-screen.component.html',
            styleUrls: ['./splash-screen.component.scss']
        })
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());
exports.SplashScreenComponent = SplashScreenComponent;
