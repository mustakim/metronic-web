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
var PortletHeaderComponent = /** @class */ (function () {
    function PortletHeaderComponent(el, ktDialogService) {
        this.el = el;
        this.ktDialogService = ktDialogService;
        this.viewLoading = false;
        this.classes = 'kt-portlet__head';
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PortletHeaderComponent.prototype.ngOnInit = function () {
        // append custom class
        this.classes += this["class"] ? ' ' + this["class"] : '';
        // hide icon's parent node if no icon provided
        this.hideIcon = this.refIcon.nativeElement.children.length === 0;
        // hide tools' parent node if no tools template is provided
        this.hideTools = this.refTools.nativeElement.children.length === 0;
    };
    PortletHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // initialize loading dialog
        if (this.viewLoading$) {
            var loadingSubscription = this.viewLoading$.subscribe(function (res) { return _this.toggleLoading(res); });
            this.subscriptions.push(loadingSubscription);
        }
    };
    PortletHeaderComponent.prototype.toggleLoading = function (_incomingValue) {
        this.viewLoading = _incomingValue;
        if (_incomingValue && !this.ktDialogService.checkIsShown()) {
            this.ktDialogService.show();
        }
        if (!this.viewLoading && this.ktDialogService.checkIsShown()) {
            this.ktDialogService.hide();
        }
    };
    PortletHeaderComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "class");
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "icon");
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "noTitle");
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "sticky");
    __decorate([
        core_1.Input()
    ], PortletHeaderComponent.prototype, "viewLoading$");
    __decorate([
        core_1.HostBinding('class')
    ], PortletHeaderComponent.prototype, "classes");
    __decorate([
        core_1.ViewChild('refIcon')
    ], PortletHeaderComponent.prototype, "refIcon");
    __decorate([
        core_1.ViewChild('refTools')
    ], PortletHeaderComponent.prototype, "refTools");
    PortletHeaderComponent = __decorate([
        core_1.Component({
            selector: 'kt-portlet-header',
            styleUrls: ['portlet-header.component.scss'],
            template: "\n\t\t<div class=\"kt-portlet__head-label\" [hidden]=\"noTitle\">\n\t\t\t<span class=\"kt-portlet__head-icon\" #refIcon [hidden]=\"hideIcon\">\n\t\t\t\t<ng-content *ngIf=\"!icon\" select=\"[ktPortletIcon]\"></ng-content>\n\t\t\t\t<i *ngIf=\"icon\" [ngClass]=\"icon\"></i>\n\t\t\t</span>\n\t\t\t<ng-content *ngIf=\"!title\" select=\"[ktPortletTitle]\"></ng-content>\n\t\t\t<h3 *ngIf=\"title\" class=\"kt-portlet__head-title\" [innerHTML]=\"title\"></h3>\n\t\t</div>\n\t\t<div class=\"kt-portlet__head-toolbar\" #refTools [hidden]=\"hideTools\">\n\t\t\t<ng-content select=\"[ktPortletTools]\"></ng-content>\n\t\t</div>"
        })
    ], PortletHeaderComponent);
    return PortletHeaderComponent;
}());
exports.PortletHeaderComponent = PortletHeaderComponent;
