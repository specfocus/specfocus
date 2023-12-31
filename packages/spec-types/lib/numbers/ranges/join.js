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
/** Joins into one or two ranges */
var join = function (left, right) {
    var _a = __read(left, 2), start = _a[0], end = _a[1];
    var _b = __read(right, 2), _start = _b[0], _end = _b[1];
    if (start < _start) {
        if (end < _end) {
            // [start, _start, end, _end]
            return [Object.freeze([start, _end])]; // collision
        }
        else /* if (_end <= end) */ {
            // [start, _start, _end, end]
            return [left]; // right is included in left
        }
    }
    else /* if (_start <= start)*/ {
        if (_end < end) {
            // [_start, start, _end, end]
            return [Object.freeze([_start, end])]; // collision
        }
        else /* if (end <= _end) */ {
            // [_start, start, end, _end]
            return [right]; // left is included in right
        }
    }
};
exports.default = join;
