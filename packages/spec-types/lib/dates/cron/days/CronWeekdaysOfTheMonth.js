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
exports.CronWeekdaysOfTheMonth = exports.isWeekdaysOfTheMonth = exports.cronWeekdaysOfTheMonthSpec = exports.CRON_WEEKDAYS_OF_THE_MONTH = void 0;
var RangesEnumerator_1 = require("../../../iterations/RangesEnumerator");
var includes_1 = __importDefault(require("../../../numbers/ranges/includes"));
var weekdays_1 = __importDefault(require("../../weekdays"));
var CronObjectSpec_1 = require("../CronObjectSpec");
exports.CRON_WEEKDAYS_OF_THE_MONTH = 'W';
var cronWeekdaysOfTheMonthSpec = function () { return exports.CRON_WEEKDAYS_OF_THE_MONTH; };
exports.cronWeekdaysOfTheMonthSpec = cronWeekdaysOfTheMonthSpec;
var isWeekdaysOfTheMonth = function (spec) {
    return Array.isArray(spec) &&
        spec.length === 1 &&
        exports.CRON_WEEKDAYS_OF_THE_MONTH === spec[0];
};
exports.isWeekdaysOfTheMonth = isWeekdaysOfTheMonth;
var CronWeekdaysOfTheMonth = /** @class */ (function () {
    function CronWeekdaysOfTheMonth(scope, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.scope = scope;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_INTERVAL;
        this.enumerate = function (initial) { return new RangesEnumerator_1.RangesEnumerator(_this.ranges, initial); };
        this.includes = function (value) { return (0, includes_1.default)(_this.ranges, value); };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronWeekdaysOfTheMonth.prototype, "ranges", {
        get: function () {
            var _a = __read(this.scope, 2), firstDayOfTheMonth = _a[0], lastDateOfTheMonth = _a[1];
            return (0, weekdays_1.default)(firstDayOfTheMonth, lastDateOfTheMonth);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CronWeekdaysOfTheMonth.prototype, "spec", {
        get: function () {
            return (0, exports.cronWeekdaysOfTheMonthSpec)();
        },
        enumerable: false,
        configurable: true
    });
    ;
    return CronWeekdaysOfTheMonth;
}());
exports.CronWeekdaysOfTheMonth = CronWeekdaysOfTheMonth;
var weekdays = function (expr, scope) {
    if (expr === exports.CRON_WEEKDAYS_OF_THE_MONTH) {
        return new CronWeekdaysOfTheMonth(scope, [], expr);
    }
};
exports.default = weekdays;
