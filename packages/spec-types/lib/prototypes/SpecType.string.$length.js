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
exports.verifyStringLength = exports.$length = void 0;
var comparisons_1 = require("../comparisons");
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
exports.$length = '$length';
var verifyStringLength = function (val, expr, error) {
    if (!(0, has_object_type_1.default)(expr))
        return;
    if (Array.isArray(expr)) {
        var _a = __read(expr, 2), $tag = _a[0], test_1 = _a[1];
        if ($tag !== exports.$length || expr.length !== 2)
            return;
        if ((0, has_undefined_type_1.default)(test_1))
            return;
        if ((0, comparisons_1.checkComparison)(val.length, test_1, error))
            return true;
    }
    else {
        var _b = expr, _c = exports.$length, test_2 = _b[_c];
        if ((0, has_undefined_type_1.default)(test_2))
            return;
        if ((0, comparisons_1.checkComparison)(val.length, test_2, error))
            return true;
    }
    return false;
};
exports.verifyStringLength = verifyStringLength;
var $default = [exports.$length, [comparisons_1.$gte, 0]];
exports.default = $default;
