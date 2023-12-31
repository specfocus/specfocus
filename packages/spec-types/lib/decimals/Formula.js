"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formula = void 0;
var SpecType_decimal_class_1 = require("../prototypes/SpecType.decimal.class");
var Formula = /** @class */ (function (_super) {
    __extends(Formula, _super);
    function Formula(symbol, multiplier) {
        var _this = _super.call(this) || this;
        _this.symbol = symbol;
        _this.multiplier = multiplier;
        return _this;
    }
    return Formula;
}(SpecType_decimal_class_1.DecimalClass.extend(SpecType_decimal_class_1.DecimalClass)));
exports.Formula = Formula;
