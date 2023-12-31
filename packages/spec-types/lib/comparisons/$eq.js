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
exports.checkEqualTo = exports.$eq = void 0;
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
var has_undefined_type_1 = __importDefault(require("../types/has-undefined-type"));
/** Equal to */
exports.$eq = '$eq';
var checkEqualTo = function (val, expr, error) {
    if (!(0, has_object_type_1.default)(expr))
        return;
    if (Array.isArray(expr)) {
        var _a = __read(expr, 2), $tag = _a[0], test_1 = _a[1];
        if ($tag !== exports.$eq || expr.length !== 2)
            return;
        if ((0, has_undefined_type_1.default)(test_1))
            return;
        if (Array.isArray(val))
            return val.every(function (v) { return v === test_1; });
        if (val === test_1)
            return true;
        error("Expected ".concat(val, " to be equal to ").concat(test_1));
    }
    else {
        var _b = expr, _c = exports.$eq, other_1 = _b[_c];
        if ((0, has_undefined_type_1.default)(other_1))
            return;
        if (Array.isArray(val))
            return val.every(function (v) { return v === other_1; });
        if (val === other_1)
            return true;
        error("Expected ".concat(val, " to be equal to ").concat(other_1));
    }
    return false;
};
exports.checkEqualTo = checkEqualTo;
