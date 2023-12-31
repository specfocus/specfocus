"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_number_type_1 = __importDefault(require("../types/has-number-type"));
var value_of_1 = __importDefault(require("../types/value-of"));
var isValidNumber = function (val, test) {
    val = (0, value_of_1.default)(val);
    return (0, has_number_type_1.default)(val) && !isNaN(val) && (test ? test(val) : true);
};
exports.default = isValidNumber;
