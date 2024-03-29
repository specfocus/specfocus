"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpecType_decimal__factor_1 = require("@specfocus/spec-types/lib/SpecType.decimal.$factor");
var _a = __read(SpecType_decimal__factor_1.$Factors), factors = _a.slice(1);
var isFactorSymbol = function (sym) { return factors.some(function (_a) {
    var _b = __read(_a, 1), key = _b[0];
    return key === sym;
}); };
exports.default = isFactorSymbol;
