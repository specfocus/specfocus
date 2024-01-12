"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeString = exports.TypeNumber = exports.TypeBoolean = exports.$type = exports.TYPE = exports.string = exports.object = exports.number = exports.boolean = exports.bigint = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var is_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-object"));
exports.bigint = 'bigint';
exports.boolean = 'boolean';
exports.number = 'number';
exports.object = 'object';
exports.string = 'string';
exports.TYPE = [exports.boolean, exports.number, exports.string];
/** Checks the data type */
exports.$type = '$type';
;
exports.TypeBoolean = Object.freeze({ $type: exports.boolean });
exports.TypeNumber = Object.freeze({ $type: exports.number });
exports.TypeString = Object.freeze({ $type: exports.string });
var verifyType = function (val, field, error) {
    if (!(0, is_object_1.default)(field))
        return;
    var actual = typeof val;
    var _a = field, _b = exports.$type, expected = _a[_b];
    if ((0, has_undefined_type_1.default)(expected))
        return;
    if (actual === expected)
        return true;
    error("Expected ".concat(val, " (").concat(actual, ") to be of type ").concat(expected));
    return false;
};
exports.default = verifyType;
