"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var isValidObject = function (val) {
    return (0, types_1.isObject)(val);
};
exports.default = isValidObject;
