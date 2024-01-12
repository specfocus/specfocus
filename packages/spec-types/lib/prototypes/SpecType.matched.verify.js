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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var is_array_1 = __importDefault(require("@specfocus/spec-objects/lib/is-array"));
var _and_1 = require("@specfocus/spec-verifications/lib/$and");
var verifyMatched = function (val, spec, error) {
    if (!(0, has_object_type_1.default)(spec) || !(0, is_array_1.default)(spec) || spec.length !== 2 || spec[0] !== 'matched')
        return;
    var _a = __read(spec, 2), expr = _a[1];
    var re = new RegExp(expr);
    if ((0, is_array_1.default)(val)) {
        return _and_1.xand.apply(void 0, __spreadArray([], __read(val.map(function (v) {
            if (re.test(v))
                return true;
            error("Value '".concat(v, "' does not match expression"));
            return false;
        })), false));
    }
    if (re.test(val))
        return true;
    error("Value '".concat(val, "' does not match expression"));
    return false;
};
exports.default = verifyMatched;
