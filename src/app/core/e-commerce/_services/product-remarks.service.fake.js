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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var API_PRODUCTREMARKS_URL = 'api/productRemarks';
// Fake REST API (Mock)
// This code emulates server calls
var ProductRemarksService = /** @class */ (function () {
    function ProductRemarksService(http, httpUtils) {
        this.http = http;
        this.httpUtils = httpUtils;
    }
    // CREATE =>  POST: add a new product remark to the server
    ProductRemarksService.prototype.createProductRemark = function (productRemark) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.post(API_PRODUCTREMARKS_URL, productRemark, { headers: httpHeaders });
    };
    // READ
    ProductRemarksService.prototype.getAllProductRemarksByProductId = function (productId) {
        return this.http
            .get(API_PRODUCTREMARKS_URL)
            .pipe(operators_1.map(function (productRemarks) {
            return productRemarks.filter(function (rem) { return rem.carId === productId; });
        }));
    };
    ProductRemarksService.prototype.getProductRemarkById = function (productRemarkId) {
        return this.http.get(API_PRODUCTREMARKS_URL + ("/" + productRemarkId));
    };
    ProductRemarksService.prototype.findProductRemarks = function (queryParams, productId) {
        var _this = this;
        return this.getAllProductRemarksByProductId(productId).pipe(operators_1.mergeMap(function (res) {
            var result = _this.httpUtils.baseFilter(res, queryParams, []);
            return rxjs_1.of(result);
        }));
    };
    // UPDATE => PUT: update the product remark
    ProductRemarksService.prototype.updateProductRemark = function (productRemark) {
        // Note: Add headers if needed (tokens/bearer)
        var httpHeaders = this.httpUtils.getHTTPHeaders();
        return this.http.put(API_PRODUCTREMARKS_URL, productRemark, {
            headers: httpHeaders
        });
    };
    // DELETE => delete the product remark
    ProductRemarksService.prototype.deleteProductRemark = function (productRemarkId) {
        var url = API_PRODUCTREMARKS_URL + "/" + productRemarkId;
        return this.http["delete"](url);
    };
    ProductRemarksService.prototype.deleteProductRemarks = function (ids) {
        if (ids === void 0) { ids = []; }
        var tasks$ = [];
        var length = ids.length;
        // tslint:disable-next-line:prefer-const
        for (var i = 0; i < length; i++) {
            tasks$.push(this.deleteProductRemark(ids[i]));
        }
        return rxjs_1.forkJoin(tasks$);
    };
    ProductRemarksService = __decorate([
        core_1.Injectable()
    ], ProductRemarksService);
    return ProductRemarksService;
}());
exports.ProductRemarksService = ProductRemarksService;
