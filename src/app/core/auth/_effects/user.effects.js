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
// RxJS
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// NGRX
var effects_1 = require("@ngrx/effects");
var user_actions_1 = require("../_actions/user.actions");
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, auth, store) {
        var _this = this;
        this.actions$ = actions$;
        this.auth = auth;
        this.store = store;
        this.showPageLoadingDistpatcher = new user_actions_1.UsersPageToggleLoading({ isLoading: true });
        this.hidePageLoadingDistpatcher = new user_actions_1.UsersPageToggleLoading({ isLoading: false });
        this.showActionLoadingDistpatcher = new user_actions_1.UsersActionToggleLoading({ isLoading: true });
        this.hideActionLoadingDistpatcher = new user_actions_1.UsersActionToggleLoading({ isLoading: false });
        this.loadUsersPage$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UsersPageRequested), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showPageLoadingDistpatcher);
            var requestToServer = _this.auth.findUsers(payload.page);
            var lastQuery = rxjs_1.of(payload.page);
            return rxjs_1.forkJoin(requestToServer, lastQuery);
        }), operators_1.map(function (response) {
            var result = response[0];
            var lastQuery = response[1];
            return new user_actions_1.UsersPageLoaded({
                users: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
        }));
        this.deleteUser$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UserDeleted), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.deleteUser(payload.id);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.updateUser$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UserUpdated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.updateUser(payload.user);
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
        this.createUser$ = this.actions$
            .pipe(effects_1.ofType(user_actions_1.UserActionTypes.UserOnServerCreated), operators_1.mergeMap(function (_a) {
            var payload = _a.payload;
            _this.store.dispatch(_this.showActionLoadingDistpatcher);
            return _this.auth.createUser(payload.user).pipe(operators_1.tap(function (res) {
                _this.store.dispatch(new user_actions_1.UserCreated({ user: res }));
            }));
        }), operators_1.map(function () {
            return _this.hideActionLoadingDistpatcher;
        }));
    }
    __decorate([
        effects_1.Effect()
    ], UserEffects.prototype, "loadUsersPage$");
    __decorate([
        effects_1.Effect()
    ], UserEffects.prototype, "deleteUser$");
    __decorate([
        effects_1.Effect()
    ], UserEffects.prototype, "updateUser$");
    __decorate([
        effects_1.Effect()
    ], UserEffects.prototype, "createUser$");
    UserEffects = __decorate([
        core_1.Injectable()
    ], UserEffects);
    return UserEffects;
}());
exports.UserEffects = UserEffects;
