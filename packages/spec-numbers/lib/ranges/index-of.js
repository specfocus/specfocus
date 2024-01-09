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
exports.indexOf = void 0;
var indexOf = function (arr, value) {
    var left = 0;
    var right = arr.length - 1;
    var index = -1;
    var range = arr[index];
    var _a = __read(range, 2), start = _a[0], end = _a[1];
    while (left <= right) {
        index = Math.floor((left + right) / 2);
        if (value > end + 1) {
            left = index + 1;
        }
        else if (start - 1 > value) {
            right = index - 1;
        }
        else {
            return index;
        }
    }
    return -(index + 1); // the target is not found in the array
};
exports.indexOf = indexOf;
exports.default = exports.indexOf;
