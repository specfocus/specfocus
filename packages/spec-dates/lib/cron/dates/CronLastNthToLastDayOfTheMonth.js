"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronLastNthToLastDayOfTheMonth = void 0;
var IntervalEnumerator_1 = require("@specfocus/spec-types/lib/iterations/IntervalEnumerator");
var Cron_1 = require("../Cron");
var CronObjectSpec_1 = require("../CronObjectSpec");
var CronRange_1 = require("../CronRange");
var CronLastDayOfTheMonth_1 = require("./CronLastDayOfTheMonth");
var CronLastNthDayOfTheMonth_1 = require("./CronLastNthDayOfTheMonth");
var CRON_LAST_NTH_TO_LAST_DAY_OF_THE_MONTH = 'L-{nth}-L';
var CronLastNthToLastDayOfTheMonth = /** @class */ (function () {
    function CronLastNthToLastDayOfTheMonth(nth, scope, issues, original) {
        var _this = this;
        this.nth = nth;
        this.scope = scope;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_RANGE;
        this.enumerate = function (initial) { return new IntervalEnumerator_1.IntervalEnumerator([_this.start.value, _this.end.value], 1, initial); };
        this.includes = function (value) { return value >= _this.start.value && value <= _this.end.value; };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronLastNthToLastDayOfTheMonth.prototype, "end", {
        get: function () {
            return new CronLastDayOfTheMonth_1.CronLastDayOfTheMonth(this.scope);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronLastNthToLastDayOfTheMonth.prototype, "range", {
        get: function () {
            return [this.start.value, this.end.value];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronLastNthToLastDayOfTheMonth.prototype, "spec", {
        get: function () {
            return (0, CronRange_1.cronRangeSpec)(this.start.spec, this.end.spec);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronLastNthToLastDayOfTheMonth.prototype, "start", {
        get: function () {
            return new CronLastNthDayOfTheMonth_1.CronLastNthDayOfTheMonth(this.nth, this.scope);
        },
        enumerable: false,
        configurable: true
    });
    return CronLastNthToLastDayOfTheMonth;
}());
exports.CronLastNthToLastDayOfTheMonth = CronLastNthToLastDayOfTheMonth;
var parse = function (expr, scope) {
    var issues = [];
    var match = expr.match(/^L-(\d+)-L$/);
    if (!match) {
        return;
    }
    var nth = parseInt(match[1], 10);
    if (nth < Cron_1.MONTH_START) {
        issues.push("This range \"".concat(CRON_LAST_NTH_TO_LAST_DAY_OF_THE_MONTH, "\" is invalid, {nth} is lower than ").concat(Cron_1.MONTH_START, "; \"").concat(Cron_1.MONTH_START, "\" is suggested."));
        nth = Cron_1.MONTH_START;
    }
    if (nth > Cron_1.MONTH_END) {
        issues.push("This range \"".concat(CRON_LAST_NTH_TO_LAST_DAY_OF_THE_MONTH, "\" is invalid, {nth} is greather than ").concat(Cron_1.MONTH_END, "; \"").concat(CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH, "\" is suggested."));
        nth = Cron_1.MONTH_END;
    }
    return new CronLastNthToLastDayOfTheMonth(nth, scope, Object.freeze(issues), expr);
};
exports.default = parse;
