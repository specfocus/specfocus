"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_object_type_1 = __importDefault(require("./has-object-type"));
var isTuple = function (val) {
    return (0, has_object_type_1.default)(val) && val !== null && Array.isArray(val);
};
exports.default = isTuple;
