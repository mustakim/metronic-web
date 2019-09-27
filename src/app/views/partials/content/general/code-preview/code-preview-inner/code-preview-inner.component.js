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
var CodePreviewInnerComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param sanitizer sanitizer
     */
    function CodePreviewInnerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    CodePreviewInnerComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], CodePreviewInnerComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], CodePreviewInnerComponent.prototype, "htmlCode");
    __decorate([
        core_1.Input()
    ], CodePreviewInnerComponent.prototype, "tsCode");
    __decorate([
        core_1.Input()
    ], CodePreviewInnerComponent.prototype, "scssCode");
    CodePreviewInnerComponent = __decorate([
        core_1.Component({
            selector: 'kt-code-preview-inner',
            templateUrl: './code-preview-inner.component.html'
        })
    ], CodePreviewInnerComponent);
    return CodePreviewInnerComponent;
}());
exports.CodePreviewInnerComponent = CodePreviewInnerComponent;
