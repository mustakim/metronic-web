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
var BuilderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function BuilderComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BuilderComponent.prototype.ngOnInit = function () {
        this.model = this.layoutConfigService.getConfig();
    };
    /**
     * Reset preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.resetPreview = function (e) {
        e.preventDefault();
        this.layoutConfigService.resetConfig();
        location.reload();
    };
    /**
     * Submit preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.submitPreview = function (e) {
        this.layoutConfigService.setConfig(this.model, true);
        location.reload();
    };
    __decorate([
        core_1.ViewChild('form')
    ], BuilderComponent.prototype, "form");
    BuilderComponent = __decorate([
        core_1.Component({
            selector: 'kt-builder',
            templateUrl: './builder.component.html',
            styleUrls: ['./builder.component.scss']
        })
    ], BuilderComponent);
    return BuilderComponent;
}());
exports.BuilderComponent = BuilderComponent;
