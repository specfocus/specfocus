"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInstanceOfBigInt = function (val) {
    return val instanceof Object && val.constructor === BigInt ||
        val instanceof BigInt;
};
exports.default = isInstanceOfBigInt;
