"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_object_1 = __importDefault(require("./is-object"));
var isValidObject = function (val) {
    return (0, is_object_1.default)(val);
};
exports.default = isValidObject;
