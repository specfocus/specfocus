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
exports.parse = exports.CronNearestWeekday = exports.isCronNearestWeekdaySpec = exports.cronNearestWeekdaySpec = exports.CRON_NEAREST_WEEKDAY = void 0;
var IntervalEnumerator_1 = require("@specfocus/spec-types/lib/iterations/IntervalEnumerator");
var nearest_weekday_1 = __importDefault(require("../../nearest-weekday"));
var CronObjectSpec_1 = require("../CronObjectSpec");
var CronDates_1 = require("./CronDates");
/** The weekday (MON to FRI) closest to a given day of the month. */
exports.CRON_NEAREST_WEEKDAY = '{date}W';
var cronNearestWeekdaySpec = function (date) { return (0, CronObjectSpec_1.cronUnarySpec)(exports.CRON_NEAREST_WEEKDAY, date); };
exports.cronNearestWeekdaySpec = cronNearestWeekdaySpec;
var isCronNearestWeekdaySpec = function (spec) {
    return Array.isArray(spec) &&
        spec.length == 2 &&
        exports.CRON_NEAREST_WEEKDAY === spec[0];
};
exports.isCronNearestWeekdaySpec = isCronNearestWeekdaySpec;
var CronNearestWeekday = /** @class */ (function () {
    function CronNearestWeekday(date, scope, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.date = date;
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
    Object.defineProperty(CronNearestWeekday.prototype, "spec", {
        get: function () {
            return (0, exports.cronNearestWeekdaySpec)(this.date);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronNearestWeekday.prototype, "value", {
        get: function () {
            // day is DayOfTheWeek for the first day
            var _a = __read(this.scope, 2), firstDayOfTheMonth = _a[0], lastDateOfTheMonth = _a[1];
            return (0, nearest_weekday_1.default)(this.date, firstDayOfTheMonth, lastDateOfTheMonth);
        },
        enumerable: false,
        configurable: true
    });
    return CronNearestWeekday;
}());
exports.CronNearestWeekday = CronNearestWeekday;
var parse = function (expr, scope) {
    var issues = [];
    var match = expr.match(/^(\d+)W$/);
    if (!match)
        return;
    var date = parseInt(match[1], 10);
    if (date < CronDates_1.DATE_START) {
        issues.push("\"".concat(expr, "\" (").concat(exports.CRON_NEAREST_WEEKDAY, ") is invalid, {date} is lower than ").concat(CronDates_1.DATE_START, ". Suggesting ").concat(CronDates_1.DATE_START, "."));
        date = 1;
    }
    else if (date > CronDates_1.DATE_END) {
        issues.push("\"".concat(expr, "\" (").concat(exports.CRON_NEAREST_WEEKDAY, ") is invalid, {date} is geater than ").concat(CronDates_1.DATE_END, ". Suggesting ").concat(CronDates_1.DATE_END, "."));
        date = CronDates_1.DATE_END;
    }
    return new CronNearestWeekday(date, scope, Object.freeze(issues), expr);
};
exports.parse = parse;
exports.default = exports.parse;
