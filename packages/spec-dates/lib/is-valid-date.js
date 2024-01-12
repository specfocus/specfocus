"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_date_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-date-object"));
var isValidDate = function (val) {
    return (0, is_date_object_1.default)(val);
};
exports.default = isValidDate;
