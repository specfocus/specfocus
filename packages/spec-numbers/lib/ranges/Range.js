"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositiveeRange = exports.isNonPositiveRange = exports.isNonNevativeRange = exports.isNevativeRange = exports.isIntegerRange = exports.isRange = exports.tuple = void 0;
var is_integer_1 = __importDefault(require("../is-integer"));
var is_negative_integer_1 = __importDefault(require("../is-negative-integer"));
var is_non_negative_integer_1 = __importDefault(require("../is-non-negative-integer"));
var is_non_positive_integer_1 = __importDefault(require("../is-non-positive-integer"));
var is_positive_integer_1 = __importDefault(require("../is-positive-integer"));
var is_valid_number_1 = __importDefault(require("../is-valid-number"));
var tuple = function (value) { return [value, value]; };
exports.tuple = tuple;
var isRange = function (arr) {
    return Array.isArray(arr) && arr.length === 2 &&
        (0, is_valid_number_1.default)(arr[0]) && (0, is_valid_number_1.default)(arr[1]) && arr[0] <= arr[1];
};
exports.isRange = isRange;
var isIntegerRange = function (arr) {
    return (0, exports.isRange)(arr) && (0, is_integer_1.default)(arr[0]) && (0, is_integer_1.default)(arr[1]);
};
exports.isIntegerRange = isIntegerRange;
var isNevativeRange = function (arr) {
    return (0, exports.isRange)(arr) && (0, is_negative_integer_1.default)(arr[0]) && (0, is_negative_integer_1.default)(arr[1]);
};
exports.isNevativeRange = isNevativeRange;
var isNonNevativeRange = function (arr) {
    return (0, exports.isRange)(arr) && (0, is_non_negative_integer_1.default)(arr[0]) && (0, is_non_negative_integer_1.default)(arr[1]);
};
exports.isNonNevativeRange = isNonNevativeRange;
var isNonPositiveRange = function (arr) {
    return (0, exports.isRange)(arr) && (0, is_non_positive_integer_1.default)(arr[0]) && (0, is_non_positive_integer_1.default)(arr[1]);
};
exports.isNonPositiveRange = isNonPositiveRange;
var isPositiveeRange = function (arr) {
    return (0, exports.isRange)(arr) && (0, is_positive_integer_1.default)(arr[0]) && (0, is_positive_integer_1.default)(arr[1]);
};
exports.isPositiveeRange = isPositiveeRange;
