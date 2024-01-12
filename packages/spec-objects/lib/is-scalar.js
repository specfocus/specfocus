"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_scalar_object_1 = __importDefault(require("./is-scalar-object"));
var is_scalar_value_1 = __importDefault(require("./is-scalar-value"));
var isScalar = function (val) { return (0, is_scalar_value_1.default)(val) || (0, is_scalar_object_1.default)(val); };
exports.default = isScalar;
