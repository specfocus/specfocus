"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var join_magnitudes_1 = __importDefault(require("./join-magnitudes"));
var joinSeconds = function (seconds) {
    return (0, join_magnitudes_1.default)(seconds, [60, 60, 24]);
};
exports.default = joinSeconds;
