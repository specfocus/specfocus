"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronDaysOfTheMonth = void 0;
var IntervalEnumerator_1 = require("../../../iterations/IntervalEnumerator");
var CronObjectSpec_1 = require("../CronObjectSpec");
var CronRange_1 = require("../CronRange");
var CronValue_1 = require("../CronValue");
var CronDates_1 = require("./CronDates");
var CronLastDayOfTheMonth_1 = require("./CronLastDayOfTheMonth");
var CronDaysOfTheMonth = /** @class */ (function () {
    function CronDaysOfTheMonth(scope, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.scope = scope;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_RANGE;
        this.enumerate = function (initial) { return new IntervalEnumerator_1.IntervalEnumerator([_this.start.value, _this.end.value], 1, initial); };
        this.toString = function () { return JSON.stringify(_this.spec); };
        this.includes = function (value) { return value >= _this.start.value && value <= _this.end.value; };
    }
    Object.defineProperty(CronDaysOfTheMonth.prototype, "end", {
        get: function () {
            return new CronLastDayOfTheMonth_1.CronLastDayOfTheMonth(this.scope);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronDaysOfTheMonth.prototype, "range", {
        get: function () {
            return [this.start.value, this.end.value];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronDaysOfTheMonth.prototype, "spec", {
        get: function () {
            return (0, CronRange_1.cronRangeSpec)(this.start.spec, this.end.spec);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronDaysOfTheMonth.prototype, "start", {
        get: function () {
            return new CronValue_1.CronConstantValue(CronDates_1.DATE_START);
        },
        enumerable: false,
        configurable: true
    });
    return CronDaysOfTheMonth;
}());
exports.CronDaysOfTheMonth = CronDaysOfTheMonth;
