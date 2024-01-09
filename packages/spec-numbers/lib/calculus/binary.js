"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetics_1 = require("./arithmetics");
var add = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return val + $val; }) : val + $val;
};
var atan2 = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.atan2(val, $val); }) : Math.atan2(val, $val);
};
var div = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return val / $val; }) : val / $val;
};
var imul = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.imul(val, $val); }) : Math.imul(val, $val);
};
var mod = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return val % $val; }) : val % $val;
};
var mul = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return val * $val; }) : val * $val;
};
var pow = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return Math.pow(val, $val); }) : Math.pow(val, $val);
};
var sub = function (val, $val) {
    return Array.isArray(val) ? val.map(function (val) { return val - $val; }) : val - $val;
};
var binaryFn = (_a = {},
    _a[arithmetics_1.$add] = add,
    _a[arithmetics_1.$atan2] = atan2,
    _a[arithmetics_1.$div] = div,
    _a[arithmetics_1.$imul] = imul,
    _a[arithmetics_1.$mod] = mod,
    _a[arithmetics_1.$mul] = mul,
    _a[arithmetics_1.$pow] = pow,
    _a[arithmetics_1.$sub] = sub,
    _a);
exports.default = binaryFn;
