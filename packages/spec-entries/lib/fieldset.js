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
exports.isFieldset = void 0;
var is_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-object"));
var entry_1 = require("./entry");
var isFieldset = function (value) {
    if (!(0, entry_1.isEntry)(value))
        return false;
    var _a = __read(value, 2), val = _a[1];
    return (0, is_object_1.default)(val);
};
exports.isFieldset = isFieldset;
