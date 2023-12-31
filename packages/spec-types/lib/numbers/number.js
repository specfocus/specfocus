"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositiveNumber = exports.isNonPositiveNumber = exports.isNonNegativeNumber = exports.isNegativeNumber = exports.isNaN = exports.ZERO = exports.TIMESTAMP = exports.NUMBER = exports.ONE = exports.INTEGER = exports.DOUBLE = exports.DECIMAL = void 0;
var is_valid_number_1 = __importDefault(require("./is-valid-number"));
exports.DECIMAL = "decimal";
exports.DOUBLE = "double";
exports.INTEGER = "integer";
exports.ONE = 1;
exports.NUMBER = "number";
exports.TIMESTAMP = "timestamp";
exports.ZERO = 0;
var isNaN = function (val) { return Number.isNaN(val); };
exports.isNaN = isNaN;
var isNegativeNumber = function (val) {
    return (0, is_valid_number_1.default)(val, function (val) { return val < exports.ZERO; });
};
exports.isNegativeNumber = isNegativeNumber;
var isNonNegativeNumber = function (val) {
    return (0, is_valid_number_1.default)(val, function (val) { return val <= exports.ZERO; });
};
exports.isNonNegativeNumber = isNonNegativeNumber;
var isNonPositiveNumber = function (val) {
    return (0, is_valid_number_1.default)(val, function (val) { return val <= exports.ZERO; });
};
exports.isNonPositiveNumber = isNonPositiveNumber;
var isPositiveNumber = function (val) {
    return (0, is_valid_number_1.default)(val, function (val) { return val > exports.ZERO; });
};
exports.isPositiveNumber = isPositiveNumber;
