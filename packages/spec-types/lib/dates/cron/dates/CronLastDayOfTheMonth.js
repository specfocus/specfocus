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
exports.CronLastDayOfTheMonth = exports.isCronLastDayOfTheMonthSpec = exports.cronLastDayOfTheMonthSpec = exports.CRON_LAST_DAY_OF_THE_MONTH = void 0;
var IntervalEnumerator_1 = require("../../../iterations/IntervalEnumerator");
var CronObjectSpec_1 = require("../CronObjectSpec");
/** In day of the month, it is the last day of the month. */
exports.CRON_LAST_DAY_OF_THE_MONTH = 'L';
var cronLastDayOfTheMonthSpec = function () { return exports.CRON_LAST_DAY_OF_THE_MONTH; };
exports.cronLastDayOfTheMonthSpec = cronLastDayOfTheMonthSpec;
var isCronLastDayOfTheMonthSpec = function (spec) {
    return spec === exports.CRON_LAST_DAY_OF_THE_MONTH;
};
exports.isCronLastDayOfTheMonthSpec = isCronLastDayOfTheMonthSpec;
var CronLastDayOfTheMonth = /** @class */ (function () {
    function CronLastDayOfTheMonth(scope, issues) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.scope = scope;
        this.issues = issues;
        this.type = CronObjectSpec_1.CRON_VALUE;
        this.enumerate = function (initial) { return new IntervalEnumerator_1.IntervalEnumerator([_this.value, _this.value], 1, initial); };
        this.includes = function (value) { return value === _this.value; };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronLastDayOfTheMonth.prototype, "spec", {
        get: function () {
            return exports.CRON_LAST_DAY_OF_THE_MONTH;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronLastDayOfTheMonth.prototype, "value", {
        get: function () {
            var _a = __read(this.scope, 2), lastDateOfTheMonth = _a[1];
            return lastDateOfTheMonth;
        },
        enumerable: false,
        configurable: true
    });
    return CronLastDayOfTheMonth;
}());
exports.CronLastDayOfTheMonth = CronLastDayOfTheMonth;
var parse = function (expr, scope) {
    if (expr === exports.CRON_LAST_DAY_OF_THE_MONTH) {
        return new CronLastDayOfTheMonth(scope);
    }
};
exports.default = parse;
