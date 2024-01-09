"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInstanceOfNumber = function (val) {
    return val instanceof Object && val.constructor === Number ||
        val instanceof Number;
};
exports.default = isInstanceOfNumber;
