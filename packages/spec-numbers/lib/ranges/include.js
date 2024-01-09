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
/** merges a value into a range array */
var include = function (arr, value) {
    var left = 0;
    var right = arr.length - 1;
    var index = -1;
    while (left <= right) {
        index = Math.floor((left + right) / 2);
        var range_1 = arr[index];
        var _a = __read(range_1, 2), start = _a[0], end = _a[1];
        if (value > end + 1) {
            left = index + 1;
            continue;
        }
        if (start - 1 > value) {
            right = index - 1;
            continue;
        }
        if (value === end + 1) {
            // [start, end, value]
            var next = Object.freeze([start, value]);
            arr.splice(index, 1, next); // replace with union
        }
        else if (start - 1 === value) {
            // [value, start, end]
            var next = Object.freeze([value, end]);
            arr.splice(index, 1, next); // replace with union
        }
        return; // merged;
    }
    var range = Object.freeze([value, value]);
    if (index === -1) {
        // pre append
        arr.unshift(range);
    }
    else {
        // insert
        arr.splice(index + 1, 0, range);
    }
};
exports.default = include;
