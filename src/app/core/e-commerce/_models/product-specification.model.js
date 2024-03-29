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
var crud_1 = require("../../_base/crud");
var ProductSpecificationModel = /** @class */ (function (_super) {
    __extends(ProductSpecificationModel, _super);
    function ProductSpecificationModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductSpecificationModel.prototype.clear = function (carId) {
        this.id = undefined;
        this.carId = carId;
        this._specificationName = '';
        this.value = '';
        this.specId = undefined;
    };
    return ProductSpecificationModel;
}(crud_1.BaseModel));
exports.ProductSpecificationModel = ProductSpecificationModel;
