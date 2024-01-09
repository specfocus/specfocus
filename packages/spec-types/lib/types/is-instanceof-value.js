"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstanceOfValue = void 0;
var is_instanceof_bigint_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-instanceof-bigint"));
var is_instanceof_boolean_1 = __importDefault(require("./is-instanceof-boolean"));
var is_instanceof_date_1 = __importDefault(require("./is-instanceof-date"));
var is_instanceof_number_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-instanceof-number"));
var is_instanceof_string_1 = __importDefault(require("@specfocus/spec-strings/lib//is-instanceof-string"));
var isInstanceOfValue = function (val) {
    return (0, is_instanceof_bigint_1.default)(val) ||
        (0, is_instanceof_boolean_1.default)(val) ||
        (0, is_instanceof_date_1.default)(val) ||
        (0, is_instanceof_number_1.default)(val) ||
        (0, is_instanceof_string_1.default)(val);
};
exports.isInstanceOfValue = isInstanceOfValue;
exports.default = exports.isInstanceOfValue;
