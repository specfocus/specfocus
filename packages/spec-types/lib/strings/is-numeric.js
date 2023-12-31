"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_string_1 = __importDefault(require("./is-string"));
var NUMERIC_EXP = /^[0-9]+$/;
var isAlphaNumeric = function (val) {
    return (0, is_string_1.default)(val, function (val) { return !!val.match(NUMERIC_EXP); });
};
exports.default = isAlphaNumeric;
