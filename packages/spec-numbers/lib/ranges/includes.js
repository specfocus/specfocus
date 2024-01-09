"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_of_1 = __importDefault(require("./index-of"));
var includes = function (arr, value) { return (0, index_of_1.default)(arr, value) >= 0; };
exports.default = includes;
