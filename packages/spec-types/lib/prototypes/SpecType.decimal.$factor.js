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
exports.verifyDecimalFactor = exports.$Factors = exports.$SmallerFactors = exports.yocto = exports.zepto = exports.atto = exports.femto = exports.pico = exports.nano = exports.micro = exports.milli = exports.centi = exports.deci = exports.$LargerFactors = exports.deka = exports.hecto = exports.kilo = exports.mega = exports.giga = exports.tera = exports.peta = exports.exa = exports.zetta = exports.yotta = exports.$factor = void 0;
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
exports.$factor = '$factor';
exports.yotta = ['Y', 24];
exports.zetta = ['Z', 21];
exports.exa = ['E', 18];
exports.peta = ['P', 15];
exports.tera = ['T', 12];
exports.giga = ['G', 9];
exports.mega = ['M', 6];
exports.kilo = ['k', 3];
exports.hecto = ['h', 2];
exports.deka = ['da', 1];
exports.$LargerFactors = ['choices', exports.yotta, exports.zetta, exports.exa, exports.peta, exports.tera, exports.giga, exports.mega, exports.kilo, exports.hecto, exports.deka];
exports.deci = ['d', -1];
exports.centi = ['c', -2];
exports.milli = ['m', -3];
exports.micro = ['µ', -6];
exports.nano = ['n', -9];
exports.pico = ['p', -12];
exports.femto = ['f', -15];
exports.atto = ['a', -18];
exports.zepto = ['z', -21];
exports.yocto = ['y', -24];
exports.$SmallerFactors = ['choices', exports.deci, exports.centi, exports.milli, exports.micro, exports.nano, exports.pico, exports.femto, exports.atto, exports.zepto, exports.yocto];
exports.$Factors = [
    'choices',
    exports.yotta, exports.zetta, exports.exa, exports.peta, exports.tera, exports.giga, exports.mega, exports.kilo, exports.hecto, exports.deka,
    exports.deci, exports.centi, exports.milli, exports.micro, exports.nano, exports.pico, exports.femto, exports.atto, exports.zepto, exports.yocto
];
var validate = function (val, choices, error) {
    // TODO: Implement by parseing the factor and comparing it to the choices
    return true;
};
var verifyDecimalFactor = function (val, spec, error) {
    if (!(0, has_object_type_1.default)(spec))
        return;
    if (Array.isArray(spec)) {
        var _a = __read(spec, 2), $tag = _a[0], choices_1 = _a[1];
        if ($tag !== exports.$factor)
            return;
        if ((0, has_undefined_type_1.default)(choices_1))
            return;
        return validate(val, choices_1, error);
    }
    var _b = spec, _c = exports.$factor, choices = _b[_c];
    if ((0, has_undefined_type_1.default)(choices))
        return;
    return validate(val, choices, error);
};
exports.verifyDecimalFactor = verifyDecimalFactor;
