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
// NGRX
var store_1 = require("@ngrx/store");
var auth_1 = require("../../../../../core/auth");
var UserProfileComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     */
    function UserProfileComponent(store) {
        this.store = store;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user$ = this.store.pipe(store_1.select(auth_1.currentUser));
    };
    /**
     * Log out
     */
    UserProfileComponent.prototype.logout = function () {
        this.store.dispatch(new auth_1.Logout());
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-profile',
            templateUrl: './user-profile.component.html'
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
