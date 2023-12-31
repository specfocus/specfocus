"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNumber = exports.isPositiveInteger = exports.isNonPositiveInteger = exports.isNonNegativeInteger = exports.isNegativeInteger = exports.isInteger = void 0;
var is_integer_1 = require("./is-integer");
Object.defineProperty(exports, "isInteger", { enumerable: true, get: function () { return __importDefault(is_integer_1).default; } });
var is_negative_integer_1 = require("./is-negative-integer");
Object.defineProperty(exports, "isNegativeInteger", { enumerable: true, get: function () { return __importDefault(is_negative_integer_1).default; } });
var is_non_negative_integer_1 = require("./is-non-negative-integer");
Object.defineProperty(exports, "isNonNegativeInteger", { enumerable: true, get: function () { return __importDefault(is_non_negative_integer_1).default; } });
var is_non_positive_integer_1 = require("./is-non-positive-integer");
Object.defineProperty(exports, "isNonPositiveInteger", { enumerable: true, get: function () { return __importDefault(is_non_positive_integer_1).default; } });
var is_positive_integer_1 = require("./is-positive-integer");
Object.defineProperty(exports, "isPositiveInteger", { enumerable: true, get: function () { return __importDefault(is_positive_integer_1).default; } });
var is_valid_number_1 = require("./is-valid-number");
Object.defineProperty(exports, "isValidNumber", { enumerable: true, get: function () { return __importDefault(is_valid_number_1).default; } });
