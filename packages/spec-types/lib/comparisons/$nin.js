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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNotIn = exports.$nin = void 0;
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
var has_undefined_type_1 = __importDefault(require("../types/has-undefined-type"));
/**  Not present in a collection */
exports.$nin = '$nin';
var checkNotIn = function (val, expr, error) {
    var _a, _b;
    if (!(0, has_object_type_1.default)(expr))
        return;
    if (Array.isArray(expr)) {
        var _c = __read(expr, 1), $tag = _c[0];
        if (expr.length < 2 || $tag !== exports.$nin)
            return;
        var test_1;
        if (expr.length === 2) {
            _a = __read(expr, 2), test_1 = _a[1];
        }
        else {
            _b = __read(expr), test_1 = _b.slice(1);
        }
        if (Array.isArray(val))
            return val.every(function (v) { return !test_1.includes(v); });
        if (!test_1.includes(val))
            return true;
        error("Expected ".concat(val, " to be not in ").concat(test_1));
    }
    else {
        var _d = expr, _e = exports.$nin, test_2 = _d[_e];
        if ((0, has_undefined_type_1.default)(test_2))
            return;
        if (Array.isArray(val))
            return val.every(function (v) { return !test_2.includes(v); });
        if (!test_2.includes(val))
            return true;
        error("Expected ".concat(val, " to be not in ").concat(test_2));
    }
    return false;
};
exports.checkNotIn = checkNotIn;
