"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_object_type_1 = __importDefault(require("./has-object-type"));
var is_array_1 = __importDefault(require("./is-array"));
var is_scalar_object_1 = __importDefault(require("./is-scalar-object"));
var is_null_1 = __importDefault(require("./is-null"));
var isObject = function (val) {
    return (0, has_object_type_1.default)(val) && !((0, is_null_1.default)(val) ||
        (0, is_array_1.default)(val) ||
        (0, is_scalar_object_1.default)(val));
};
exports.default = isObject;
