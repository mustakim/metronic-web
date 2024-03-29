"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// NGRX
var store_1 = require("@ngrx/store");
// CRUD
var crud_1 = require("../../_base/crud");
var user_selectors_1 = require("../_selectors/user.selectors");
var UsersDataSource = /** @class */ (function (_super) {
    __extends(UsersDataSource, _super);
    function UsersDataSource(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.loading$ = _this.store.pipe(store_1.select(user_selectors_1.selectUsersPageLoading));
        _this.isPreloadTextViewed$ = _this.store.pipe(store_1.select(user_selectors_1.selectUsersShowInitWaitingMessage));
        _this.store.pipe(store_1.select(user_selectors_1.selectUsersInStore)).subscribe(function (response) {
            _this.paginatorTotalSubject.next(response.totalCount);
            _this.entitySubject.next(response.items);
        });
        return _this;
    }
    return UsersDataSource;
}(crud_1.BaseDataSource));
exports.UsersDataSource = UsersDataSource;
