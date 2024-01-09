"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var to_upper_case_first_letter_1 = __importDefault(require("./to-upper-case-first-letter"));
var to_words_1 = __importDefault(require("./to-words"));
var toSentenceCase = function (str) { return (0, to_upper_case_first_letter_1.default)((0, to_words_1.default)(str).join(' ')); };
exports.default = toSentenceCase;
