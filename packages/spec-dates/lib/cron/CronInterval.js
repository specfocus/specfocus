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
exports.CronInterval = exports.cronIntervalSpec = void 0;
var IntervalEnumerator_1 = require("@specfocus/spec-types/lib/iterations/IntervalEnumerator");
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var CronObjectSpec_1 = require("./CronObjectSpec");
var cronIntervalSpec = function (offset, step) { return [CronObjectSpec_1.CRON_INTERVAL, offset.spec, step]; };
exports.cronIntervalSpec = cronIntervalSpec;
var CronInterval = /** @class */ (function () {
    function CronInterval(offset, step, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.offset = offset;
        this.step = step;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_INTERVAL;
        this.enumerate = function (initial) {
            if (_this.offset.type === CronObjectSpec_1.CRON_VALUE) {
                return new IntervalEnumerator_1.IntervalEnumerator([_this.offset.value, undefined], _this.step, initial);
            }
            return new IntervalEnumerator_1.IntervalEnumerator(_this.offset.range, _this.step, initial);
        };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronInterval.prototype, "spec", {
        get: function () {
            return (0, exports.cronIntervalSpec)(this.offset, this.step);
        },
        enumerable: false,
        configurable: true
    });
    CronInterval.prototype.includes = function (value) {
        if (this.offset.type === CronObjectSpec_1.CRON_VALUE) {
            return value >= this.offset.value && (value - this.offset.value) % this.step === 0;
        }
        if (!this.offset.includes(value)) {
            return false;
        }
        var _a = __read(this.offset.range, 1), start = _a[0];
        return (value - start) % this.step === 0;
        ;
    };
    return CronInterval;
}());
exports.CronInterval = CronInterval;
/***
 * The step value should be a divisor of the range. For example, in the case of minutes,
 * 15 is a divisor of 60 (the valid minute range), so it's a valid step. However, using
 * a step of 7 for minutes would not be valid since 7 is not a divisor of 60.
 */
var interval = function (expr, scope, offset) {
    var issues = [];
    var match = expr.match(/^([\*]|[0-9LW#\-]+)\/(\d+)$/);
    if (!match) {
        return;
    }
    var step = parseInt(match[2], 10);
    if (step === 0) {
        issues.push("Invalid interval step in \"".concat(expr, "\". A possitive value is suggested."));
        step = 1;
    }
    var starting = offset(match[1], scope);
    if ((0, has_undefined_type_1.default)(starting)) {
        return;
    }
    return new CronInterval(starting, step, Object.freeze(issues), expr);
};
exports.default = interval;
