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
var NotificationComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param sanitizer: DomSanitizer
     */
    function NotificationComponent(sanitizer) {
        this.sanitizer = sanitizer;
        // Set icon class name
        this.icon = 'flaticon2-bell-alarm-symbol';
        // Set skin color, default to light
        this.skin = 'light';
    }
    __decorate([
        core_1.Input()
    ], NotificationComponent.prototype, "dot");
    __decorate([
        core_1.Input()
    ], NotificationComponent.prototype, "pulse");
    __decorate([
        core_1.Input()
    ], NotificationComponent.prototype, "icon");
    __decorate([
        core_1.Input()
    ], NotificationComponent.prototype, "useSVG");
    __decorate([
        core_1.Input()
    ], NotificationComponent.prototype, "bgImage");
    __decorate([
        core_1.Input()
    ], NotificationComponent.prototype, "skin");
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'kt-notification',
            templateUrl: './notification.component.html',
            styleUrls: ['notification.component.scss']
        })
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
