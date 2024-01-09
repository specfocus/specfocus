"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_instanceof_string_1 = __importDefault(require("./is-instanceof-string"));
var stringOf = function (val) {
    if ((0, is_instanceof_string_1.default)(val)) {
        return val.valueOf();
    }
    return String(val);
};
exports.default = stringOf;
