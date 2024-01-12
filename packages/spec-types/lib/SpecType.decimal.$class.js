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
exports.verifyDecimalClass = exports.$class = void 0;
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var SpecType_decimal_class_1 = require("./SpecType.decimal.class");
exports.$class = '$class';
var validate = function (val, className, error) {
    var Validator = SpecType_decimal_class_1.DecimalClass.find(className);
    if ((0, has_undefined_type_1.default)(Validator)) {
        error("Unknown class: ".concat(className));
        return;
    }
    var validator = new Validator();
    return validator.validate(val, error);
};
var verifyDecimalClass = function (val, spec, error) {
    if (!(0, has_object_type_1.default)(spec))
        return;
    if (Array.isArray(spec)) {
        var _a = __read(spec, 2), $tag = _a[0], name_1 = _a[1];
        if ($tag !== exports.$class || spec.length !== 2)
            return;
        if ((0, has_undefined_type_1.default)(name_1))
            return;
        return validate(val, name_1, error);
    }
    var _b = spec, _c = exports.$class, name = _b[_c];
    if ((0, has_undefined_type_1.default)(name))
        return;
    return validate(val, name, error);
};
exports.verifyDecimalClass = verifyDecimalClass;
