"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResolution = void 0;
var has_boolean_type_1 = __importDefault(require("@specfocus/spec-types/lib/types/has-boolean-type"));
var reference_1 = require("./reference");
var isResolution = function (value) {
    if (!(0, reference_1.isReference)(value))
        return false;
    if (!('done' in value))
        return false;
    var done = value.done;
    return (0, has_boolean_type_1.default)(done);
};
exports.isResolution = isResolution;
