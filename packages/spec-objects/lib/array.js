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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areEqual = exports.startsWith = exports.without = exports.isSet = exports.isEmpty = exports.isArrayLike = exports.isArray = exports.$array = void 0;
var has_function_type_1 = __importDefault(require("./has-function-type"));
exports.$array = '$array';
var isArray = function (val) {
    return Array.isArray(val);
};
exports.isArray = isArray;
var isArrayLike = function (val) {
    return (0, has_function_type_1.default)(val[Symbol.iterator]);
};
exports.isArrayLike = isArrayLike;
var isEmpty = function (val) {
    return !(0, exports.isArray)(val) || val.length === 0;
};
exports.isEmpty = isEmpty;
var isSet = function (val) {
    return (0, exports.isArrayLike)(val) && !(0, exports.isArray)(val);
};
exports.isSet = isSet;
/*
export const isSorted = (arr: Array<number>): false | 1 | -1 => {
let direction = -(arr[0] - arr[1]);
for (let [i, val] of arr.entries()) {
direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
if (i === arr.length - 1) {
  return !direction ? false : <1 | -1>(direction / Math.abs(direction));
} else if ((val - arr[i + 1]) * direction > 0) {
  return false;
}
}
throw 'never';
};
*/
/**
 * Creates an array excluding all provided values using SameValueZero for equality comparisons.
 *
 * @param array The array to filter.
 * @param values The values to exclude.
 * @return Returns the new array of filtered values.
 */
var without = function (array) {
    var e_1, _a;
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    if ((0, exports.isArray)(array)) {
        var result = [];
        try {
            for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                var val = array_1_1.value;
                if (!values.includes(val)) {
                    result.push(val);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    }
    return [];
};
exports.without = without;
var startsWith = function (left, right) {
    if (!(0, exports.isArray)(left) || !(0, exports.isArray)(right)) {
        return false;
    }
    // compare lengths - can save a lot of time
    var l = right.length;
    if (left.length < l) {
        return false;
    }
    for (var i = 0; i < l; i++) {
        // Check if we have nested arrays
        if ((0, exports.isArray)(left[i]) && (0, exports.isArray)(right[i])) {
            // recurse into the nested arrays
            if (!(0, exports.areEqual)(left[i], right[i])) {
                return false;
            }
        }
        else if (left[i] !== right[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
exports.startsWith = startsWith;
var areEqual = function (left, right) {
    if (!(0, exports.isArray)(left) || !(0, exports.isArray)(right)) {
        return false;
    }
    // compare lengths - can save a lot of time
    if (left.length !== right.length) {
        return false;
    }
    return (0, exports.startsWith)(left, right);
};
exports.areEqual = areEqual;
