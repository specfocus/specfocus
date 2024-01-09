"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntry = void 0;
var has_string_type_1 = __importDefault(require("@specfocus/spec-strings/lib/has-string-type"));
var isEntry = function (value) {
    if (!Array.isArray(value) || value.length < 1)
        return false;
    var _a = __read(value, 1), key = _a[0];
    return value.length < 3 && (0, has_string_type_1.default)(key);
};
exports.isEntry = isEntry;
