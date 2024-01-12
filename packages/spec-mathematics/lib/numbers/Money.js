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
exports.Money = void 0;
var SpecType_decimal_class_1 = require("@specfocus/spec-types/lib/SpecType.decimal.class");
/** Money is a medium of exchange, a unit of account, and a store of value, but it's not typically considered a fundamental physical quantity that is measured like other quantities. */
var Money = /** @class */ (function (_super) {
    __extends(Money, _super);
    function Money(verification) {
        return _super.call(this) || this;
    }
    /** Australian Dollar (AUD) */
    Money.AUD = new Money();
    /** Canadian Dollar (CAD) */
    Money.CAD = new Money();
    /** Swiss Franc (CHF) */
    Money.CHF = new Money();
    /** Chinese Yuan (CNY) */
    Money.CNY = new Money();
    Money.CRC = new Money();
    Money.EUR = new Money();
    /** British Pound Sterling (GBP) */
    Money.GBP = new Money();
    /** Indian Rupee (INR) */
    Money.INR = new Money();
    /** Japanese Yen (JPY) */
    Money.JPY = new Money();
    /** Russian Ruble (RUB) */
    Money.RUB = new Money();
    /** Singapore Dollar (SGD) */
    Money.SGD = new Money();
    /** United States Dollar (USD) */
    Money.USD = new Money();
    return Money;
}(SpecType_decimal_class_1.DecimalClass.extend(SpecType_decimal_class_1.DecimalClass)));
exports.Money = Money;
