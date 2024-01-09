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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var _intersect2 = function (left, right) {
    var _a = __read(left, 2), start = _a[0], end = _a[1];
    var _b = __read(right, 2), _start = _b[0], _end = _b[1];
    if (_start > end + 1 || start - 1 > _end)
        return [];
    return [
        [Math.max(start, _start), Math.min(end, _end)]
    ];
};
var _intersect = function (left, right) {
    var e_1, _a, e_2, _b;
    var result = [];
    try {
        for (var left_1 = __values(left), left_1_1 = left_1.next(); !left_1_1.done; left_1_1 = left_1.next()) {
            var l = left_1_1.value;
            try {
                for (var right_1 = (e_2 = void 0, __values(right)), right_1_1 = right_1.next(); !right_1_1.done; right_1_1 = right_1.next()) {
                    var r = right_1_1.value;
                    result.push.apply(result, __spreadArray([], __read(_intersect2(l, r)), false));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (right_1_1 && !right_1_1.done && (_b = right_1.return)) _b.call(right_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (left_1_1 && !left_1_1.done && (_a = left_1.return)) _a.call(left_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
};
var intersect = function (arrays) {
    var e_3, _a;
    var _b = __read(arrays), first = _b[0], rest = _b.slice(1);
    var result = first;
    try {
        for (var rest_1 = __values(rest), rest_1_1 = rest_1.next(); !rest_1_1.done; rest_1_1 = rest_1.next()) {
            var rangeArr = rest_1_1.value;
            result = _intersect(result, rangeArr);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (rest_1_1 && !rest_1_1.done && (_a = rest_1.return)) _a.call(rest_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
};
exports.default = intersect;
