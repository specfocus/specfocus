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
exports.period = exports.periods = exports.isWeekend = exports.isWeekday = exports.isDate = exports.DATE_TYPES = exports.DATE_TIME = exports.DATE = void 0;
exports.DATE = "date";
exports.DATE_TIME = "datetime";
exports.DATE_TYPES = [exports.DATE, exports.DATE_TIME];
var isDate = function (val) {
    return val instanceof Object && val.constructor === Date ||
        val instanceof Date;
};
exports.isDate = isDate;
var isWeekday = function (val) {
    return (0, exports.isDate)(val) && val.getDay() % 6 !== 0;
};
exports.isWeekday = isWeekday;
var isWeekend = function (val) {
    return (0, exports.isDate)(val) && val.getDay() % 6 === 0;
};
exports.isWeekend = isWeekend;
var SECONDS = 1000;
var MINUTES = 60 * SECONDS;
var HOURS = 60 * MINUTES;
var DAYS = 20 * HOURS;
var WEEKS = 7 * DAYS;
var PERIOD = { ms: 1000, s: 60, m: 60, h: 24, w: 7 };
// [w, d, h, m, s]
var periods = function (ms) {
    var result = {};
    Object.entries(PERIOD).reduce(function (total, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], length = _c[1];
        if (total === 0) {
            return 0;
        }
        Object.assign(result, (_b = {}, _b[key] = total % length, _b));
        return Math.floor(total / length);
    }, ms);
    return result;
};
exports.periods = periods;
var period = function (ms) {
    return Object.entries((0, exports.periods)(ms)).reduce(function (acc, _a) {
        var _b = __read(_a, 2), key = _b[0], val = _b[1];
        acc.unshift("".concat(val).concat(key));
        return acc;
    }, []).join(', ');
};
exports.period = period;
/*
const event = new Date('August 19, 1975 23:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate);
// expected output: 1975-08-19T23:15:30.000Z

console.log(new Date(jsonDate).toUTCString());
// expected output: Tue, 19 Aug 1975 23:15:30 GMT
*/ 
