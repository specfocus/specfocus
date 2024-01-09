"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var has_object_type_1 = __importDefault(require("./has-object-type"));
var is_instanceof_bigint_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-instanceof-bigint"));
var is_instanceof_boolean_1 = __importDefault(require("./is-instanceof-boolean"));
var is_instanceof_date_1 = __importDefault(require("./is-instanceof-date"));
var is_instanceof_number_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-instanceof-number"));
var is_instanceof_string_1 = __importDefault(require("@specfocus/spec-strings/lib/is-instanceof-string"));
var is_null_1 = __importDefault(require("./is-null"));
var valueOf = function (val) {
    if (!(0, has_object_type_1.default)(val) || (0, is_null_1.default)(val))
        return val;
    if ((0, is_instanceof_bigint_1.default)(val)) {
        return val.valueOf();
    }
    if ((0, is_instanceof_boolean_1.default)(val)) {
        return val.valueOf();
    }
    if ((0, is_instanceof_date_1.default)(val)) {
        return val.valueOf();
    }
    if ((0, is_instanceof_number_1.default)(val)) {
        return val.valueOf();
    }
    if ((0, is_instanceof_string_1.default)(val)) {
        return val.valueOf();
    }
    return val;
};
exports.default = valueOf;
