"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_string_1 = __importDefault(require("./is-string"));
var to_camel_case_1 = __importDefault(require("./to-camel-case"));
var isCamelCase = function (val) {
    return (0, is_string_1.default)(val, function (val) { return val === (0, to_camel_case_1.default)(val); });
};
exports.default = isCamelCase;
