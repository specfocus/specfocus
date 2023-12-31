"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_string_type_1 = __importDefault(require("../../types/has-string-type"));
var split_magnitudes_1 = __importDefault(require("./split-magnitudes"));
var splitIPv4 = function (ip) { return (0, has_string_type_1.default)(ip)
    ? ip.split('.').map(Number)
    : (0, split_magnitudes_1.default)(ip, [256, 256, 256]).reverse(); };
exports.default = splitIPv4;
