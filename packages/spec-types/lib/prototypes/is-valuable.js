"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValuable = void 0;
var value_of_1 = __importDefault(require("../types/value-of"));
var VALUE_TYPES = ['bigint', 'boolean', 'number', 'string'];
var isValuable = function (val) {
    val = (0, value_of_1.default)(val);
    return VALUE_TYPES.includes(typeof val);
};
exports.isValuable = isValuable;
exports.default = exports.isValuable;
