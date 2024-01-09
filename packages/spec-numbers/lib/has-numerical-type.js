"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TYPES = ['bigint', 'number', 'string'];
var hasNumericalType = function (val) {
    return TYPES.includes(typeof val);
};
exports.default = hasNumericalType;
