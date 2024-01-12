"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singular = exports.$size = void 0;
var comparisons_1 = require("../comparisons");
var is_valid_number_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-valid-number"));
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var is_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-object"));
exports.$size = '$size';
;
exports.Singular = Object.freeze((_a = {}, _a[exports.$size] = 1, _a));
var verifySize = function (val, specs, error) {
    if (exports.$size === val)
        return true;
    if (!(0, is_object_1.default)(specs))
        return;
    var size = (0, has_undefined_type_1.default)(val) || val === null ? 0 : Array.isArray(val) ? val.length : 1;
    var _a = specs, _b = exports.$size, test = _a[_b];
    if ((0, has_undefined_type_1.default)(test))
        return;
    if ((0, is_valid_number_1.default)(test))
        return size === test;
    return (0, comparisons_1.checkComparison)(size, test, error);
};
exports.default = verifySize;
