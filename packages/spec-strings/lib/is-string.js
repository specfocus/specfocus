"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_string_type_1 = __importDefault(require("./has-string-type"));
var is_instanceof_string_1 = __importDefault(require("./is-instanceof-string"));
var isString = function (val, test) {
    if ((0, is_instanceof_string_1.default)(val))
        val = val.valueOf();
    if (!(0, has_string_type_1.default)(val))
        return false;
    return test ? test(val) : true;
};
exports.default = isString;
