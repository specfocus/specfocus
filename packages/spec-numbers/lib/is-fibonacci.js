"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_perfect_square_1 = __importDefault(require("./is-perfect-square"));
var is_positive_integer_1 = __importDefault(require("./is-positive-integer"));
var is_valid_number_1 = __importDefault(require("./is-valid-number"));
// Returns true if n is a Fibinacci Number, else false
var isFibonacci = function (val) {
    if (!(0, is_valid_number_1.default)(val) || !(0, is_positive_integer_1.default)(val)) {
        return false;
    }
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return ((0, is_perfect_square_1.default)(5 * val * val + 4) || (0, is_perfect_square_1.default)(5 * val * val - 4));
};
exports.default = isFibonacci;
