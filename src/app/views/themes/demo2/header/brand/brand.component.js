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
var BrandComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param htmlClassService: HtmlClassService
     */
    function BrandComponent(layoutConfigService, htmlClassService) {
        this.layoutConfigService = layoutConfigService;
        this.htmlClassService = htmlClassService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-aside--minimize',
            togglerState: 'kt-aside__brand-aside-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BrandComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
    };
    /**
     * On destroy
     */
    BrandComponent.prototype.ngAfterViewInit = function () {
    };
    BrandComponent = __decorate([
        core_1.Component({
            selector: 'kt-brand',
            templateUrl: './brand.component.html'
        })
    ], BrandComponent);
    return BrandComponent;
}());
exports.BrandComponent = BrandComponent;
