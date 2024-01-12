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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = exports.$Timestamp = exports.$NonNegativeInteger = exports.$NonPositiveInteger = exports.$NegativeInteger = exports.$PositiveInteger = exports.$Integer = exports.$Count = void 0;
var lib_1 = require("@specfocus/spec-comparables/lib");
var SpecType_number__class_1 = require("../prototypes/SpecType.number.$class");
var SpecType_number_class_1 = require("../prototypes/SpecType.number.class");
exports.$Count = ['number', (_a = {}, _a[SpecType_number__class_1.$class] = 'Integer', _a[lib_1.$gte] = 0, _a)];
exports.$Integer = ['number', (_b = {}, _b[SpecType_number__class_1.$class] = 'Integer', _b)];
exports.$PositiveInteger = ['number', (_c = {}, _c[SpecType_number__class_1.$class] = 'Integer', _c[lib_1.$gt] = 0, _c)];
exports.$NegativeInteger = ['number', (_d = {}, _d[SpecType_number__class_1.$class] = 'Integer', _d[lib_1.$lt] = 0, _d)];
exports.$NonPositiveInteger = ['number', (_e = {}, _e[SpecType_number__class_1.$class] = 'Integer', _e[lib_1.$lte] = 0, _e)];
exports.$NonNegativeInteger = ['number', (_f = {}, _f[SpecType_number__class_1.$class] = 'Integer', _f[lib_1.$gte] = 0, _f)];
exports.$Timestamp = ['number', (_g = {}, _g[SpecType_number__class_1.$class] = 'Integer', _g.$gt = 946684800000 /* Since Jan 1, 2000 */, _g)];
var Integer = /** @class */ (function (_super) {
    __extends(Integer, _super);
    function Integer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Integer.prototype.validate = function (value, error) {
        var e_1, _a;
        if (Array.isArray(value)) {
            var valid = true;
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var item = value_1_1.value;
                    if (!this.validate(item, error))
                        valid = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return valid;
        }
        if (!_super.prototype.validate.call(this, value, error))
            return false;
        if (Number.isInteger(value))
            return true;
        error("Expected a number, but got ".concat(typeof value, "."));
        return false;
        ;
    };
    return Integer;
}(SpecType_number_class_1.NumberClass.extend(SpecType_number_class_1.NumberClass)));
exports.Integer = Integer;
// NumberClass.seal(Integer);
