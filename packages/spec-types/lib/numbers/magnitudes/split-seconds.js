"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var split_magnitudes_1 = __importDefault(require("./split-magnitudes"));
var splitSeconds = function (ms) {
    return (0, split_magnitudes_1.default)(ms, [60, 60, 24]);
};
exports.default = splitSeconds;
