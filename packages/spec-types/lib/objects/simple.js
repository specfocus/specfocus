"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSimpleValue = exports.isSimpleType = exports.isSimpleString = exports.isSimpleObject = exports.isSimpleNumber = exports.isSimpleBoolean = void 0;
var is_valid_object_1 = __importDefault(require("./is-valid-object"));
var isSimpleBoolean = function (val) {
    return typeof val === 'boolean';
};
exports.isSimpleBoolean = isSimpleBoolean;
var isSimpleNumber = function (val) {
    return typeof val === 'number';
};
exports.isSimpleNumber = isSimpleNumber;
var isSimpleObject = function (val) {
    if (!(0, is_valid_object_1.default)(val)) {
        return false;
    }
    return !Object.values(val).some(function (val) { return !(0, exports.isSimpleType)(val); });
};
exports.isSimpleObject = isSimpleObject;
var isSimpleString = function (val) {
    return typeof val === 'string';
};
exports.isSimpleString = isSimpleString;
var isSimpleType = function (val) {
    switch (val) {
        case NaN:
            return true;
        case null:
            return true;
    }
    switch (typeof val) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return true;
        case 'function':
        case 'symbol':
            return false;
        case 'object':
            if (val === null) {
                return true;
            }
            if (Array.isArray(val)) {
                return !val.some(function (item) { return !(0, exports.isSimpleType)(item); });
            }
            switch (val.constructor) {
                case Boolean:
                case Date:
                case Number:
                case String:
                    return true;
                default:
                    return !Object.values(val).some(function (val) { return !(0, exports.isSimpleType)(val); });
            }
        default:
            throw 'not implemented';
    }
};
exports.isSimpleType = isSimpleType;
var isSimpleValue = function (val) {
    return typeof val === 'boolean' || typeof val === 'number' || typeof val === 'string';
};
exports.isSimpleValue = isSimpleValue;
