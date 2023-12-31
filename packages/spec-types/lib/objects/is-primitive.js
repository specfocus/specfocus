"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_primitive_object_1 = __importDefault(require("./is-primitive-object"));
var is_primitive_value_1 = __importDefault(require("./is-primitive-value"));
var isPrimitive = function (val) {
    return (0, is_primitive_value_1.default)(val) || (0, is_primitive_object_1.default)(val);
};
exports.default = isPrimitive;
