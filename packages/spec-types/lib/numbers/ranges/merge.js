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
exports.merge = void 0;
/** merges a range into a range array */
var merge = function (arr, source) {
    var left = 0;
    var right = arr.length - 1;
    var index = -1;
    var _a = __read(source, 2), _start = _a[0], _end = _a[1];
    while (left <= right) {
        index = Math.floor((left + right) / 2);
        var range = arr[index];
        var _b = __read(range, 2), start = _b[0], end = _b[1];
        if (_start > end + 1) {
            left = index + 1;
            continue;
        }
        if (start - 1 > _end) {
            right = index - 1;
            continue;
        }
        if (start < _start) {
            if (end < _end) {
                // [start, _start, end, _end]
                var next = Object.freeze([start, _end]);
                arr.splice(index, 1, next); // replace with union
            }
            else /* if (_end <= end) */ {
                // [start, _start, _end, end]
                // target is included in range
            }
        }
        else /* if (_start <= start)*/ {
            if (_end < end) {
                // [_start, start, _end, end]
                var next = Object.freeze([_start, end]);
                arr.splice(index, 1, next); // replace with union
            }
            else /* if (end <= _end) */ {
                // [_start, start, end, _end]
                arr.splice(index, 1, source); // range is included in target
            }
        }
        return; // merged;
    }
    if (index === -1) {
        // pre append
        arr.unshift(source);
    }
    else {
        // insert
        arr.splice(index + 1, 0, source);
    }
};
exports.merge = merge;
exports.default = exports.merge;
