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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fibonacci = exports.verifyFibonacci = exports.$StoryPoiints = exports.$Fibonaccy = void 0;
var lib_1 = require("@specfocus/spec-comparables/lib");
var SpecType_number__class_1 = require("../prototypes/SpecType.number.$class");
var SpecType_number_class_1 = require("../prototypes/SpecType.number.class");
var has_number_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-number-type"));
var is_fibonacci_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-fibonacci"));
exports.$Fibonaccy = ['number', (_a = {}, _a[SpecType_number__class_1.$class] = 'Fibonacci', _a)];
exports.$StoryPoiints = ['number', (_b = {}, _b[SpecType_number__class_1.$class] = 'Fibonacci', _b[lib_1.$lte] = 13, _b)];
var verifyFibonacci = function (value, error) {
    if (!(0, has_number_type_1.default)(value)) {
        error("Fibonacci numbers are positive integers, but got ".concat(typeof value, "."));
        return false;
    }
    if (!Number.isInteger(value)) {
        error("Fibonacci numbers are positive integers, but got ".concat(value, "."));
        return false;
    }
    if (value < 0) {
        error("Fibonacci numbers are positive integers, but got ".concat(value, "."));
        return false;
    }
    if ((0, is_fibonacci_1.default)(value))
        return true;
    error("Not a Fibonacci number (".concat(value, ")."));
    return false;
};
exports.verifyFibonacci = verifyFibonacci;
var Fibonacci = /** @class */ (function (_super) {
    __extends(Fibonacci, _super);
    function Fibonacci(verification) {
        return _super.call(this) || this;
    }
    Fibonacci.prototype.validate = function (value, error) {
        var e_1, _a;
        if (Array.isArray(value)) {
            var valid = true;
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var item = value_1_1.value;
                    if (!(0, exports.verifyFibonacci)(item, error))
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
        return (0, exports.verifyFibonacci)(value, error);
    };
    return Fibonacci;
}(SpecType_number_class_1.NumberClass.extend(SpecType_number_class_1.NumberClass)));
exports.Fibonacci = Fibonacci;
// NumberClass.seal(Fibonacci);
