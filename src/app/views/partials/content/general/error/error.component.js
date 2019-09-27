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
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        // Public properties
        // type of error template to be used, accepted values; error-v1 | error-v2 | error-v3 | error-v4 | error-v5 | error-v6
        this.type = 'error-v1';
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        // return back button title
        this["return"] = 'Return back';
        this.classes = 'kt-grid kt-grid--ver kt-grid--root';
    }
    __decorate([
        core_1.Input()
    ], ErrorComponent.prototype, "type");
    __decorate([
        core_1.Input()
    ], ErrorComponent.prototype, "image");
    __decorate([
        core_1.Input()
    ], ErrorComponent.prototype, "code");
    __decorate([
        core_1.Input()
    ], ErrorComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], ErrorComponent.prototype, "subtitle");
    __decorate([
        core_1.Input()
    ], ErrorComponent.prototype, "desc");
    __decorate([
        core_1.Input()
    ], ErrorComponent.prototype, "return");
    __decorate([
        core_1.HostBinding('class')
    ], ErrorComponent.prototype, "classes");
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'kt-error',
            templateUrl: './error.component.html',
            styleUrls: ['./error.component.scss']
        })
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;
