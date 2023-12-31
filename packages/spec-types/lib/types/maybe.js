"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSome = exports.isNull = exports.isEmpty = void 0;
var is_valid_object_1 = __importDefault(require("../objects/is-valid-object"));
var array_1 = require("./array");
var has_string_type_1 = __importDefault(require("./has-string-type"));
var is_nil_1 = __importDefault(require("./is-nil"));
var isEmpty = function (val) {
    return (0, is_nil_1.default)(val) ||
        ((0, has_string_type_1.default)(val) && val.length === 0) ||
        ((0, array_1.isArray)(val) && val.length === 0) ||
        ((0, is_valid_object_1.default)(val) && !(Object.keys(val) || val).length);
};
exports.isEmpty = isEmpty;
var isNull = function (val) { return val === null; };
exports.isNull = isNull;
var isSome = function (input) { return input != null; };
exports.isSome = isSome;
