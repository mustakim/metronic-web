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
// Lodash
var lodash_1 = require("lodash");
var Widget1Component = /** @class */ (function () {
    function Widget1Component() {
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Widget1Component.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = lodash_1.shuffle([
                {
                    title: 'Member Profit',
                    desc: 'Awerage Weekly Profit',
                    value: '+$17,800',
                    valueClass: 'kt-font-brand'
                }, {
                    title: 'Orders',
                    desc: 'Weekly Customer Orders',
                    value: '+$1,800',
                    valueClass: 'kt-font-danger'
                }, {
                    title: 'Issue Reports',
                    desc: 'System bugs and issues',
                    value: '-27,49%',
                    valueClass: 'kt-font-success'
                }
            ]);
        }
    };
    __decorate([
        core_1.Input()
    ], Widget1Component.prototype, "data");
    Widget1Component = __decorate([
        core_1.Component({
            selector: 'kt-widget1',
            templateUrl: './widget1.component.html',
            styleUrls: ['./widget1.component.scss']
        })
    ], Widget1Component);
    return Widget1Component;
}());
exports.Widget1Component = Widget1Component;
