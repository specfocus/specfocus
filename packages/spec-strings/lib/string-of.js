"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_string_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-string-object"));
var stringOf = function (val) {
    if ((0, is_string_object_1.default)(val)) {
        return val.valueOf();
    }
    return String(val);
};
exports.default = stringOf;
