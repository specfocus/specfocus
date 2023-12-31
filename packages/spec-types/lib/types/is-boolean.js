"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_boolean_type_1 = __importDefault(require("./has-boolean-type"));
var value_of_1 = __importDefault(require("./value-of"));
var isBoolean = function (val, test) {
    val = (0, value_of_1.default)(val);
    return (0, has_boolean_type_1.default)(val) && (test ? test(val) : true);
};
exports.default = isBoolean;
