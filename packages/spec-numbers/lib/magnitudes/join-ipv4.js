"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var join_magnitudes_1 = __importDefault(require("./join-magnitudes"));
var joinIPv4 = function (segments) {
    return (0, join_magnitudes_1.default)(segments.reverse(), [256, 256, 256]);
};
exports.default = joinIPv4;
