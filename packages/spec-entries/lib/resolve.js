"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var SEPARATOR = '/';
var resolve = function (absolute, relative) {
    var e_1, _a;
    // Split the paths into components
    var absoluteParts = absolute.split(SEPARATOR).filter(function (part) { return part !== ''; });
    var relativeParts = relative.split(SEPARATOR).filter(function (part) { return part !== ''; });
    try {
        // Process relative parts
        for (var relativeParts_1 = __values(relativeParts), relativeParts_1_1 = relativeParts_1.next(); !relativeParts_1_1.done; relativeParts_1_1 = relativeParts_1.next()) {
            var part = relativeParts_1_1.value;
            if (part === '..') {
                // Go up a level
                absoluteParts.pop();
            }
            else if (part !== '.') {
                // Add part to the absolute path
                absoluteParts.push(part);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (relativeParts_1_1 && !relativeParts_1_1.done && (_a = relativeParts_1.return)) _a.call(relativeParts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    absoluteParts.unshift('');
    // Reconstruct the path
    return absoluteParts.join(SEPARATOR);
};
exports.default = resolve;
