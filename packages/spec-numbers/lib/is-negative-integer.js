"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_integer_1 = __importDefault(require("./is-integer"));
var isNegativeInteger = function (val, test) {
    return (0, is_integer_1.default)(val, function (val) { return val < 0 && (test ? test(val) : true); });
};
exports.default = isNegativeInteger;
