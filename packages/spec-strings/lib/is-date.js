"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isDate = function (val) {
    return val instanceof Object && val.constructor === Date ||
        val instanceof Date;
};
exports.default = isDate;
