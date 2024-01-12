"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_string_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-string-type"));
var is_string_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-string-object"));
var isString = function (val, test) {
    if ((0, is_string_object_1.default)(val))
        val = val.valueOf();
    if (!(0, has_string_type_1.default)(val))
        return false;
    return test ? test(val) : true;
};
exports.default = isString;
