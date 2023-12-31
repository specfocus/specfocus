"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_valid_object_1 = __importDefault(require("./is-valid-object"));
var is_primitive_1 = __importDefault(require("./is-primitive"));
var is_shallow_object_1 = __importDefault(require("./is-shallow-object"));
var isComplexObject = function (val) {
    return (0, is_valid_object_1.default)(val) && !Object.values(val).some(function (value) { return !(0, is_primitive_1.default)(val) && !(0, is_shallow_object_1.default)(value); });
};
exports.default = isComplexObject;
