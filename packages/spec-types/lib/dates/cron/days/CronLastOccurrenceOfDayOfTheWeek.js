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
exports.CronLastOccurenceOfDayOfTheWeek = exports.isCronLastOccurenceOfDayOfTheWeek = exports.cronLastOccurenceOfDayOfTheWeekSpec = exports.CRON_LAST_OCCURRENCE_OF_DAY_OF_THE_WEEK = void 0;
var IntervalEnumerator_1 = require("../../../iterations/IntervalEnumerator");
var last_occurece_of_day_of_the_week_1 = __importDefault(require("../../last-occurece-of-day-of-the-week"));
var CronObjectSpec_1 = require("../CronObjectSpec");
/** In day of the month, it is the last day SUN-SAT of the month. */
exports.CRON_LAST_OCCURRENCE_OF_DAY_OF_THE_WEEK = 'dayL';
var cronLastOccurenceOfDayOfTheWeekSpec = function (day) { return (0, CronObjectSpec_1.cronUnarySpec)(exports.CRON_LAST_OCCURRENCE_OF_DAY_OF_THE_WEEK, day); };
exports.cronLastOccurenceOfDayOfTheWeekSpec = cronLastOccurenceOfDayOfTheWeekSpec;
var isCronLastOccurenceOfDayOfTheWeek = function (spec) {
    return Array.isArray(spec) &&
        spec.length == 2 &&
        exports.CRON_LAST_OCCURRENCE_OF_DAY_OF_THE_WEEK === spec[0];
};
exports.isCronLastOccurenceOfDayOfTheWeek = isCronLastOccurenceOfDayOfTheWeek;
var CronLastOccurenceOfDayOfTheWeek = /** @class */ (function () {
    function CronLastOccurenceOfDayOfTheWeek(day, scope, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.day = day;
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
    Object.defineProperty(CronLastOccurenceOfDayOfTheWeek.prototype, "spec", {
        get: function () {
            return (0, exports.cronLastOccurenceOfDayOfTheWeekSpec)(this.day);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronLastOccurenceOfDayOfTheWeek.prototype, "value", {
        get: function () {
            var _a = __read(this.scope, 2), firstDayOfTheMonth = _a[0], lastDateOfTheMonth = _a[1];
            return (0, last_occurece_of_day_of_the_week_1.default)(this.day, firstDayOfTheMonth, lastDateOfTheMonth);
        },
        enumerable: false,
        configurable: true
    });
    return CronLastOccurenceOfDayOfTheWeek;
}());
exports.CronLastOccurenceOfDayOfTheWeek = CronLastOccurenceOfDayOfTheWeek;
var parse = function (expr, scope) {
    var issues = [];
    var match = expr.match(/^(\d+)L$/);
    if (!match) {
        return;
    }
    var day = parseInt(match[1], 10);
    if (day === 7) {
        day = 0;
    }
    else if (day > 7) {
        day = 0;
        issues.push("Day of the week \"".concat(day, "\" out of range. Suggesting \"").concat(day, "\"."));
    }
    return new CronLastOccurenceOfDayOfTheWeek(day, scope, Object.freeze(issues), expr);
};
exports.default = parse;
