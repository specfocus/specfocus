"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_instanceof_date_1 = __importDefault(require("./is-instanceof-date"));
var isValidDate = function (val) {
    return (0, is_instanceof_date_1.default)(val);
};
exports.default = isValidDate;
