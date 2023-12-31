"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInstanceOfString = function (val) {
    return val instanceof Object && val.constructor === String ||
        val instanceof String;
};
exports.default = isInstanceOfString;
