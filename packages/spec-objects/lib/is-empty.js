"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
var is_valid_object_1 = __importDefault(require("./is-valid-object"));
var isEmpty = function (val) {
    return val !== null && (0, is_valid_object_1.default)(val) && Object.keys(val).length === 0;
};
exports.isEmpty = isEmpty;
