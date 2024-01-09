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
exports.CronLastNthDayOfTheMonth = exports.isCronLastNthDayOfTheMonthSpec = exports.cronLastNthDayOfTheMonthSpec = exports.CRON_LAST_NTH_DAY_OF_THE_MONTH = void 0;
var IntervalEnumerator_1 = require("@specfocus/spec-types/lib/iterations/IntervalEnumerator");
var CronObjectSpec_1 = require("../CronObjectSpec");
var CronLastDayOfTheMonth_1 = require("./CronLastDayOfTheMonth");
/** In day of the month, it is the nth day before the last day of the month. */
exports.CRON_LAST_NTH_DAY_OF_THE_MONTH = 'L-nth';
var cronLastNthDayOfTheMonthSpec = function (nth) { return (0, CronObjectSpec_1.cronUnarySpec)(exports.CRON_LAST_NTH_DAY_OF_THE_MONTH, nth); };
exports.cronLastNthDayOfTheMonthSpec = cronLastNthDayOfTheMonthSpec;
var isCronLastNthDayOfTheMonthSpec = function (spec) {
    return Array.isArray(spec) &&
        spec.length == 2 &&
        exports.CRON_LAST_NTH_DAY_OF_THE_MONTH === spec[0];
};
exports.isCronLastNthDayOfTheMonthSpec = isCronLastNthDayOfTheMonthSpec;
var CronLastNthDayOfTheMonth = /** @class */ (function () {
    function CronLastNthDayOfTheMonth(nth, scope, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.nth = nth;
        this.scope = scope;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_VALUE;
        this.enumerate = function (initial) { return new IntervalEnumerator_1.IntervalEnumerator([_this.value, _this.value], 1, initial); };
        this.includes = function (value) { return value === _this.value; };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronLastNthDayOfTheMonth.prototype, "spec", {
        get: function () {
            return (0, exports.cronLastNthDayOfTheMonthSpec)(this.nth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronLastNthDayOfTheMonth.prototype, "value", {
        get: function () {
            var _a = __read(this.scope, 2), end = _a[1];
            return Math.max(1, end - this.nth);
        },
        enumerable: false,
        configurable: true
    });
    return CronLastNthDayOfTheMonth;
}());
exports.CronLastNthDayOfTheMonth = CronLastNthDayOfTheMonth;
var parse = function (expr, scope) {
    var issues = [];
    var match = expr.match(/^L-(\d+)$/);
    if (!match) {
        return;
    }
    var nth = parseInt(match[1], 10);
    if (nth < 1) {
        issues.push("Replace \"".concat(expr, "\" with \"").concat(CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH, "\"."));
        return new CronLastDayOfTheMonth_1.CronLastDayOfTheMonth(scope, issues);
    }
    return new CronLastNthDayOfTheMonth(nth, scope, issues, expr);
};
exports.default = parse;
