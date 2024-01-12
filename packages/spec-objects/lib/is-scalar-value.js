"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isScalarValue = function (val) {
    return typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean' ||
        typeof val === 'bigint';
};
exports.default = isScalarValue;
