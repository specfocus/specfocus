"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isInstanceOfDate = function (val) {
    return val instanceof Object && val.constructor === Date ||
        val instanceof Date;
};
exports.default = isInstanceOfDate;
