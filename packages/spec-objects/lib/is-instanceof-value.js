"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isScalarObject = void 0;
var is_bigint_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-bigint"));
var is_boolean_object_1 = __importDefault(require("./is-boolean-object"));
var is_date_object_1 = __importDefault(require("./is-date-object"));
var is_number_object_1 = __importDefault(require("./is-number-object"));
var is_string_object_1 = __importDefault(require("./is-string-object"));
var isScalarObject = function (val) {
    return (0, is_bigint_1.default)(val) ||
        (0, is_boolean_object_1.default)(val) ||
        (0, is_date_object_1.default)(val) ||
        (0, is_number_object_1.default)(val) ||
        (0, is_string_object_1.default)(val);
};
exports.isScalarObject = isScalarObject;
exports.default = exports.isScalarObject;
