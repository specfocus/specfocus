"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_instanceof_date_1 = __importDefault(require("../types/is-instanceof-date"));
var isDate = function (val) {
    return (0, is_instanceof_date_1.default)(val);
};
exports.default = isDate;
