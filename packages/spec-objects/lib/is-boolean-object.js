"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isBooleanObject = function (val) {
    return val instanceof Object && val.constructor === Boolean ||
        val instanceof Boolean;
};
exports.default = isBooleanObject;
