"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isStringObject = function (val) {
    return val instanceof Object && val.constructor === String ||
        val instanceof String;
};
exports.default = isStringObject;
