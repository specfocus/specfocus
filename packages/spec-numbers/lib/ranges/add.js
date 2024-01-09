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
/** Adds into one or two ranges */
var add = function (arr, value) {
    var _a = __read(arr, 2), start = _a[0], end = _a[1];
    if (value > end + 1) {
        // [start, end], value
        return [arr, Object.freeze([value, value])]; // item and arr have no collision
    }
    if (start - 1 > value) {
        // item, [start, end]
        return [Object.freeze([value, value]), arr]; // item and arr have no collision
    }
    if (value === end + 1) {
        // [start, end, item]
        return [Object.freeze([start, value])]; // collision
    }
    else if (start - 1 === value) {
        // [item, start, end]
        return [Object.freeze([value, end])]; // collision
    }
    else /* if (start <= item && item <= end) */ {
        // [start, item, end]
        return [arr]; // item is included in arr
    }
};
exports.default = add;
