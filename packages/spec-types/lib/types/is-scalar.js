"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isScalar = function (val) {
    return typeof val === 'boolean' ||
        typeof val === 'number' ||
        typeof val === 'string';
};
exports.default = isScalar;
