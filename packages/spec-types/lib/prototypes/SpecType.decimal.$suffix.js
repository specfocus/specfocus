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
exports.verifyDecimalSuffix = exports.$suffix = void 0;
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
exports.$suffix = '$suffix';
var validate = function (val, choices, error) {
    // TODO: Implement by parseing the uom and comparing it to the choices
    return true;
};
var verifyDecimalSuffix = function (val, spec, error) {
    if (!(0, has_object_type_1.default)(spec))
        return;
    if (Array.isArray(spec)) {
        var _a = __read(spec, 2), $tag = _a[0], choices_1 = _a[1];
        if ($tag !== exports.$suffix)
            return;
        if ((0, has_undefined_type_1.default)(choices_1))
            return;
        return validate(val, choices_1, error);
    }
    var _b = spec, _c = exports.$suffix, choices = _b[_c];
    if ((0, has_undefined_type_1.default)(choices))
        return;
    return validate(val, choices, error);
};
exports.verifyDecimalSuffix = verifyDecimalSuffix;
