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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nthOccurrence = exports.CronNthOccurrenceOfDayOfTheWeek = exports.isCronNthDayOfTheWeekSpec = exports.cronNthOccurrenceOfDayOfTheWeekSpec = exports.CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK = void 0;
var IntervalEnumerator_1 = require("@specfocus/spec-types/lib/iterations/IntervalEnumerator");
var nth_occurence_of_day_of_the_week_1 = __importDefault(require("../../nth-occurence-of-day-of-the-week"));
var CronObjectSpec_1 = require("../CronObjectSpec");
exports.CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK = 'd#nth';
var cronNthOccurrenceOfDayOfTheWeekSpec = function (day, nth) {
    return (0, CronObjectSpec_1.cronBinarySpec)(exports.CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK, day, nth);
};
exports.cronNthOccurrenceOfDayOfTheWeekSpec = cronNthOccurrenceOfDayOfTheWeekSpec;
var isCronNthDayOfTheWeekSpec = function (spec) {
    return Array.isArray(spec) &&
        spec.length == 3 &&
        exports.CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK === spec[0];
};
exports.isCronNthDayOfTheWeekSpec = isCronNthDayOfTheWeekSpec;
var CronNthOccurrenceOfDayOfTheWeek = /** @class */ (function () {
    function CronNthOccurrenceOfDayOfTheWeek(day, nth, scope, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.day = day;
        this.nth = nth;
        this.scope = scope;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_VALUE;
        this.enumerate = function (initial) {
            var start = _this.value;
            return new IntervalEnumerator_1.IntervalEnumerator([start, start], 1, initial);
        };
        this.includes = function (value) { return value === _this.value; };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronNthOccurrenceOfDayOfTheWeek.prototype, "spec", {
        get: function () {
            return (0, exports.cronNthOccurrenceOfDayOfTheWeekSpec)(this.day, this.nth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronNthOccurrenceOfDayOfTheWeek.prototype, "value", {
        get: function () {
            // day is DayOfTheWeek for the first day
            var _a = __read(this.scope, 2), day = _a[0], end = _a[1];
            return (0, nth_occurence_of_day_of_the_week_1.default)(this.day, this.nth, day, end);
        },
        enumerable: false,
        configurable: true
    });
    return CronNthOccurrenceOfDayOfTheWeek;
}());
exports.CronNthOccurrenceOfDayOfTheWeek = CronNthOccurrenceOfDayOfTheWeek;
var nthOccurrence = function (expr, scope) {
    var issues = [];
    var match = expr.match(/^(\d+)#(\d+)$/);
    if (!match)
        return;
    var day = parseInt(match[1], 10);
    var nth = parseInt(match[2], 10);
    if (day === 7) {
        day = 0;
    }
    else if (day > 7) {
        day = 0;
        issues.push("\"".concat(expr, "\" (").concat(exports.CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK, ") is invalid, {day} should be between 0 and 7; \"").concat(day, "\" is suggested."));
    }
    if (nth < 1) {
        nth = 1;
        issues.push("\"".concat(expr, "\" (").concat(exports.CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK, ") is invalid, {nth} should be between 1 and 5; \"").concat(nth, "\" is suggested."));
    }
    else if (nth > 5) {
        nth = 5;
        issues.push("\"".concat(expr, "\" (").concat(exports.CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK, ") is invalid, {nth} should be between 1 and 5; \"").concat(nth, "\" is suggested."));
    }
    return new CronNthOccurrenceOfDayOfTheWeek(day, nth, scope, Object.freeze(issues), expr);
};
exports.nthOccurrence = nthOccurrence;
exports.default = exports.nthOccurrence;
