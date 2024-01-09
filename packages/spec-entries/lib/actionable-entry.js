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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isActionableEntry = void 0;
var entry_1 = require("./entry");
var resolution_1 = require("./resolution");
var isActionableEntry = function (value) {
    if (!(0, entry_1.isEntry)(value))
        return false;
    var _a = __read(value, 2), val = _a[1];
    return (0, resolution_1.isResolution)(val);
};
exports.isActionableEntry = isActionableEntry;
