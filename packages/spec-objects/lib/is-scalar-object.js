"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_string_object_1 = __importDefault(require("./is-string-object"));
var is_number_object_1 = __importDefault(require("./is-number-object"));
var is_boolean_object_1 = __importDefault(require("./is-boolean-object"));
var is_date_object_1 = __importDefault(require("./is-date-object"));
var isScalarObject = function (val) {
    return (0, is_string_object_1.default)(val) ||
        (0, is_number_object_1.default)(val) ||
        (0, is_boolean_object_1.default)(val) ||
        (0, is_date_object_1.default)(val);
};
exports.default = isScalarObject;
