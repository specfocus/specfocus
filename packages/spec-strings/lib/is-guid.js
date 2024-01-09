"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_string_1 = __importDefault(require("./is-string"));
var GUID_EX = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/;
var isGuid = function (val) {
    return (0, is_string_1.default)(val, function (val) { return GUID_EX.test(val); });
};
exports.default = isGuid;
