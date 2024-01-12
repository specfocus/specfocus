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
exports.isTaskEntry = void 0;
var has_boolean_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-boolean-type"));
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var entry_1 = require("./entry");
var isTaskEntry = function (value) {
    if (!(0, entry_1.isEntry)(value))
        return false;
    var _a = __read(value, 2), done = _a[1];
    return (0, has_boolean_type_1.default)(done) || (0, has_undefined_type_1.default)(done);
};
exports.isTaskEntry = isTaskEntry;
