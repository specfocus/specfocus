"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_positive_integer_1 = __importDefault(require("./is-positive-integer"));
var is_valid_number_1 = __importDefault(require("./is-valid-number"));
var isPrime = function (val) {
    if (!(0, is_valid_number_1.default)(val) || !(0, is_positive_integer_1.default)(val)) {
        return false;
    }
    if (val === 2 || val === 3) {
        return true;
    }
    else if (val <= 1 || val % 2 === 0 || val % 3 === 0) {
        return false;
    }
    var i = 5;
    while (Math.pow(i, 2) <= val) {
        if (val % i === 0 || val % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
};
exports.default = isPrime;
