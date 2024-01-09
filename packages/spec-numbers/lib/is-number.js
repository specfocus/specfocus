"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_number_type_1 = __importDefault(require("./has-number-type"));
var is_instanceof_number_1 = __importDefault(require("./is-instanceof-number"));
var isNumber = function (val) {
    return (0, has_number_type_1.default)(val) || (0, is_instanceof_number_1.default)(val);
};
exports.default = isNumber;
