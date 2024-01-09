"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var to_lower_case_1 = __importDefault(require("./to-lower-case"));
var to_words_1 = __importDefault(require("./to-words"));
var toKebabCase = function (str) { return (0, to_lower_case_1.default)((0, to_words_1.default)(str).join('-')); };
exports.default = toKebabCase;
