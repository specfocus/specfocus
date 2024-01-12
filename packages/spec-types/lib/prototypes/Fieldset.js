"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAtom = exports.$elem = void 0;
var has_string_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-string-type"));
var is_array_1 = __importDefault(require("@specfocus/spec-objects/lib/is-array"));
var Field__spec_1 = require("./Field.$spec");
var Field__type_1 = require("./Field.$type");
exports.$elem = '$elem';
var isAtom = function (field) {
    return (0, has_string_type_1.default)(field.$type) || (0, is_array_1.default)(field.$type);
};
exports.isAtom = isAtom;
