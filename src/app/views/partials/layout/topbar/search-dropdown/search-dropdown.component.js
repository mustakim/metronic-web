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
var SearchDropdownComponent = /** @class */ (function () {
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    function SearchDropdownComponent(cdr) {
        this.cdr = cdr;
        // Public properties
        // Set icon class name
        this.icon = 'flaticon2-search-1';
    }
    /**
     * On init
     */
    SearchDropdownComponent.prototype.ngOnInit = function () {
        // simulate result from API
        // type 0|1 as separator or item
        this.result = [
            {
                icon: '',
                text: 'Documents',
                type: 0
            }, {
                icon: '<i class="flaticon-interface-3 kt-font-warning">',
                text: 'Annual finance report',
                type: 1
            }, {
                icon: '<i class="flaticon-share kt-font-success"></i>',
                text: 'Company meeting schedule',
                type: 1
            }, {
                icon: '<i class="flaticon-paper-plane kt-font-info"></i>',
                text: 'Project quotations',
                type: 1
            }, {
                icon: '',
                text: 'Customers',
                type: 0
            }, {
                icon: '<img src="assets/media/users/user1.jpg" alt="">',
                text: 'Amanda Anderson',
                type: 1
            }, {
                icon: '<img src="assets/media/users/user2.jpg" alt="">',
                text: 'Kennedy Lloyd',
                type: 1
            }, {
                icon: '<img src="assets/media/users/user3.jpg" alt="">',
                text: 'Megan Weldon',
                type: 1
            }, {
                icon: '<img src="assets/media/users/user4.jpg" alt="">',
                text: 'Marc-André ter Stegen',
                type: 1
            }, {
                icon: '',
                text: 'Files',
                type: 0
            }, {
                icon: '<i class="flaticon-lifebuoy kt-font-warning"></i>',
                text: 'Revenue report',
                type: 1
            }, {
                icon: '<i class="flaticon-coins kt-font-primary"></i>',
                text: 'Anual finance report',
                type: 1
            }, {
                icon: '<i class="flaticon-calendar kt-font-danger"></i>',
                text: 'Tax calculations',
                type: 1
            }
        ];
    };
    /**
     * Search
     * @param e: Event
     */
    SearchDropdownComponent.prototype.search = function (e) {
        var _this = this;
        this.data = null;
        if (e.target.value.length > 2) {
            this.loading = true;
            // simulate getting search result
            setTimeout(function () {
                _this.data = _this.result;
                _this.loading = false;
                _this.cdr.detectChanges();
            }, 500);
        }
    };
    /**
     * Clear search
     *
     * @param e: Event
     */
    SearchDropdownComponent.prototype.clear = function (e) {
        this.data = null;
        this.searchInput.nativeElement.value = '';
    };
    SearchDropdownComponent.prototype.openChange = function () {
        var _this = this;
        setTimeout(function () { return _this.searchInput.nativeElement.focus(); });
    };
    __decorate([
        core_1.Input()
    ], SearchDropdownComponent.prototype, "icon");
    __decorate([
        core_1.Input()
    ], SearchDropdownComponent.prototype, "useSVG");
    __decorate([
        core_1.ViewChild('searchInput')
    ], SearchDropdownComponent.prototype, "searchInput");
    SearchDropdownComponent = __decorate([
        core_1.Component({
            selector: 'kt-search-dropdown',
            templateUrl: './search-dropdown.component.html'
        })
    ], SearchDropdownComponent);
    return SearchDropdownComponent;
}());
exports.SearchDropdownComponent = SearchDropdownComponent;
