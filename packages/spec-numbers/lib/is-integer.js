"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_valid_number_1 = __importDefault(require("./is-valid-number"));
var isInteger = function (val, test) {
    return (0, is_valid_number_1.default)(val, function (val) { return Number.isInteger(val) && (test ? test(val) : true); });
};
exports.default = isInteger;
