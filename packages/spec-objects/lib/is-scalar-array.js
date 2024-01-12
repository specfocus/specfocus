"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_scalar_1 = __importDefault(require("./is-scalar"));
var isScalarArray = function (array) {
    return array.every(is_scalar_1.default);
};
exports.default = isScalarArray;
