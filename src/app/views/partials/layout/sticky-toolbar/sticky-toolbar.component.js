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
var StickyToolbarComponent = /** @class */ (function () {
    function StickyToolbarComponent() {
        // Public properties
        this.demoPanelOptions = {
            overlay: true,
            baseClass: 'kt-demo-panel',
            closeBy: 'kt_demo_panel_close',
            toggleBy: 'kt_demo_panel_toggle'
        };
    }
    StickyToolbarComponent = __decorate([
        core_1.Component({
            selector: 'kt-sticky-toolbar',
            templateUrl: './sticky-toolbar.component.html',
            styleUrls: ['./sticky-toolbar.component.scss']
        })
    ], StickyToolbarComponent);
    return StickyToolbarComponent;
}());
exports.StickyToolbarComponent = StickyToolbarComponent;
