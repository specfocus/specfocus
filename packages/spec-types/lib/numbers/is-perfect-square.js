"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_positive_integer_1 = __importDefault(require("./is-positive-integer"));
var is_valid_number_1 = __importDefault(require("./is-valid-number"));
// A utility function that returns true if x is perfect square
var isPerfectSquare = function (val) {
    if (!(0, is_valid_number_1.default)(val) || !(0, is_positive_integer_1.default)(val)) {
        return false;
    }
    var sqrt = Math.sqrt(val);
    return sqrt * sqrt === val;
};
exports.default = isPerfectSquare;
