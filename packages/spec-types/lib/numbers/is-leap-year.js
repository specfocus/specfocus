"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_positive_integer_1 = __importDefault(require("./is-positive-integer"));
var is_valid_number_1 = __importDefault(require("./is-valid-number"));
var isLeapYear = function (val) {
    return (0, is_valid_number_1.default)(val) && (0, is_positive_integer_1.default)(val) && new Date(val, 1, 29).getMonth() === 1;
};
exports.default = isLeapYear;
