"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Anglar
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Layout Directives
var layout_1 = require("./_base/layout");
// Metronic Pipes
// Metornic Services
var metronic_1 = require("./_base/metronic");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                // directives
                metronic_1.ScrollTopDirective,
                layout_1.HeaderDirective,
                metronic_1.OffcanvasDirective,
                metronic_1.ToggleDirective,
                layout_1.MenuDirective,
                metronic_1.TabClickEventDirective,
                metronic_1.SparklineChartDirective,
                layout_1.ContentAnimateDirective,
                layout_1.StickyDirective,
                // pipes
                metronic_1.TimeElapsedPipe,
                metronic_1.JoinPipe,
                metronic_1.GetObjectPipe,
                metronic_1.SafePipe,
                metronic_1.FirstLetterPipe,
            ],
            exports: [
                // directives
                metronic_1.ScrollTopDirective,
                layout_1.HeaderDirective,
                metronic_1.OffcanvasDirective,
                metronic_1.ToggleDirective,
                layout_1.MenuDirective,
                metronic_1.TabClickEventDirective,
                metronic_1.SparklineChartDirective,
                layout_1.ContentAnimateDirective,
                layout_1.StickyDirective,
                // pipes
                metronic_1.TimeElapsedPipe,
                metronic_1.JoinPipe,
                metronic_1.GetObjectPipe,
                metronic_1.SafePipe,
                metronic_1.FirstLetterPipe,
            ],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
