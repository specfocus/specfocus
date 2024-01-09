"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReference = void 0;
var has_string_type_1 = __importDefault(require("@specfocus/spec-strings/lib/has-string-type"));
var is_object_1 = __importDefault(require("@specfocus/spec-types/lib/types/is-object"));
var isReference = function (value) {
    if (!(0, is_object_1.default)(value))
        return false;
    if (!('_id' in value))
        return false;
    var _id = value._id;
    return (0, has_string_type_1.default)(_id);
};
exports.isReference = isReference;
