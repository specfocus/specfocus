"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DateLike_1 = require("./DateLike");
var utc_1 = __importDefault(require("./utc"));
var before = function (m, other) { return (0, utc_1.default)(m) < (0, utc_1.default)(other !== null && other !== void 0 ? other : (0, DateLike_1.dateTupleOf)()); };
exports.default = before;
