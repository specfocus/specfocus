"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var unique_1 = __importDefault(require("./unique"));
var distinct = function (arr) { return arr.filter(unique_1.default); };
exports.default = distinct;
