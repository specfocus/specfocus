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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetics_1 = require("./arithmetics");
var abs = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.abs(val); }) : Math.abs(val);
};
var acos = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.acos(val); }) : Math.acos(val);
};
var acosh = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.acosh(val); }) : Math.acosh(val);
};
var asin = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.asin(val); }) : Math.asin(val);
};
var asinh = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.asinh(val); }) : Math.asinh(val);
};
var atan = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.atan(val); }) : Math.atan(val);
};
var atanh = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.atanh(val); }) : Math.atanh(val);
};
var avg = function (val) {
    return Array.isArray(val) ? val.reduce(function (a, b) { return a + b; }, 0) / val.length : val;
};
var cbrt = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.cbrt(val); }) : Math.cbrt(val);
};
var ceil = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.ceil(val); }) : Math.ceil(val);
};
var clz32 = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.clz32(val); }) : Math.clz32(val);
};
var cos = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.cos(val); }) : Math.cos(val);
};
var cosh = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.cosh(val); }) : Math.cosh(val);
};
var dec = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return val - 1; }) : val - 1;
};
var exp = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.exp(val); }) : Math.exp(val);
};
var expm1 = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.expm1(val); }) : Math.expm1(val);
};
var floor = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.floor(val); }) : Math.floor(val);
};
var fround = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.fround(val); }) : Math.fround(val);
};
var hypot = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.hypot(val); }) : Math.hypot(val);
};
var inc = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return val + 1; }) : val + 1;
};
var imul = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.imul(val, $val); }) : Math.imul(val, $val);
};
var log = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.log(val); }) : Math.log(val);
};
var log10 = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.log10(val); }) : Math.log10(val);
};
var log1p = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.log1p(val); }) : Math.log1p(val);
};
var log2 = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.log2(val); }) : Math.log2(val);
};
var max = function (val) {
    return Array.isArray(val) ? Math.max.apply(Math, __spreadArray([], __read(val), false)) : val;
};
var min = function (val) {
    return Array.isArray(val) ? Math.min.apply(Math, __spreadArray([], __read(val), false)) : val;
};
var neg = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return -val; }) : -val;
};
var pow = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.pow(val, $val); }) : Math.pow(val, $val);
};
var round = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.round(val); }) : Math.round(val);
};
var sign = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.sign(val); }) : Math.sign(val);
};
var sin = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.sin(val); }) : Math.sin(val);
};
var sinh = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.sinh(val); }) : Math.sinh(val);
};
var sqrt = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.sqrt(val); }) : Math.sqrt(val);
};
var sum = function (val) {
    return Array.isArray(val) ? val.reduce(function (a, b) { return a + b; }, 0) : val;
};
var tan = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.tan(val); }) : Math.tan(val);
};
var tanh = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.tanh(val); }) : Math.tanh(val);
};
var trunc = function (val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.trunc(val); }) : Math.trunc(val);
};
var unaryFn = (_a = {},
    _a[arithmetics_1.$abs] = abs,
    _a[arithmetics_1.$acos] = acos,
    _a[arithmetics_1.$acosh] = acosh,
    _a[arithmetics_1.$asin] = asin,
    _a[arithmetics_1.$asinh] = asinh,
    _a[arithmetics_1.$atan] = atan,
    _a[arithmetics_1.$atanh] = atanh,
    _a[arithmetics_1.$avg] = avg,
    _a[arithmetics_1.$cbrt] = cbrt,
    _a[arithmetics_1.$ceil] = ceil,
    _a[arithmetics_1.$clz32] = clz32,
    _a[arithmetics_1.$cos] = cos,
    _a[arithmetics_1.$cosh] = cosh,
    _a[arithmetics_1.$dec] = dec,
    _a[arithmetics_1.$exp] = exp,
    _a[arithmetics_1.$expm1] = expm1,
    _a[arithmetics_1.$floor] = floor,
    _a[arithmetics_1.$fround] = fround,
    _a[arithmetics_1.$hypot] = hypot,
    _a[arithmetics_1.$inc] = inc,
    _a[arithmetics_1.$log] = log,
    _a[arithmetics_1.$log10] = log10,
    _a[arithmetics_1.$log1p] = log1p,
    _a[arithmetics_1.$log2] = log2,
    _a[arithmetics_1.$max] = max,
    _a[arithmetics_1.$min] = min,
    _a[arithmetics_1.$neg] = neg,
    _a[arithmetics_1.$round] = round,
    _a[arithmetics_1.$sign] = sign,
    _a[arithmetics_1.$sin] = sin,
    _a[arithmetics_1.$sinh] = sinh,
    _a[arithmetics_1.$sqrt] = sqrt,
    _a[arithmetics_1.$sum] = sum,
    _a[arithmetics_1.$tan] = tan,
    _a[arithmetics_1.$tanh] = tanh,
    _a[arithmetics_1.$trunc] = trunc,
    _a);
exports.default = unaryFn;
