"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isPrimitiveValue = function (val) {
    return ['boolean', 'number', 'string'].includes(typeof val);
};
exports.default = isPrimitiveValue;
