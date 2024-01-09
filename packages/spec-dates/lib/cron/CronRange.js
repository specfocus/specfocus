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
exports.CronConstantRange = exports.cronRangeSpec = void 0;
var IntervalEnumerator_1 = require("@specfocus/spec-types/lib/iterations/IntervalEnumerator");
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-types/lib/types/has-undefined-type"));
var CronObjectSpec_1 = require("./CronObjectSpec");
var CronValue_1 = require("./CronValue");
var cronRangeSpec = function (start, end) { return [CronObjectSpec_1.CRON_RANGE, start, end]; };
exports.cronRangeSpec = cronRangeSpec;
var CronConstantRange = /** @class */ (function () {
    function CronConstantRange(start, end, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.start = start;
        this.end = end;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_RANGE;
        this.enumerate = function (initial) { return new IntervalEnumerator_1.IntervalEnumerator([_this.start.value, _this.end.value], 1, initial); };
        this.includes = function (value) { return value >= _this.start.value && value <= _this.end.value; };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronConstantRange.prototype, "range", {
        get: function () {
            return [this.start.value, this.end.value];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronConstantRange.prototype, "spec", {
        get: function () {
            return (0, exports.cronRangeSpec)(this.start.spec, this.end.spec);
        },
        enumerable: false,
        configurable: true
    });
    return CronConstantRange;
}());
exports.CronConstantRange = CronConstantRange;
var range = function (expr, scope) {
    var issues = [];
    var match = expr.match(/^(\d+)-(\d+)$/);
    if (!match) {
        return;
    }
    var start = parseInt(match[1], 10);
    var end = parseInt(match[2], 10);
    var _a = __read(scope, 2), min = _a[0], max = _a[1];
    if (start < min) {
        issues.push("\"".concat(start, "\" is lower than minimum (").concat(min, "). Suggested ").concat(min, " instead."));
        start = min;
    }
    else if (!(0, has_undefined_type_1.default)(max) && start > max) {
        start = max;
        issues.push("\"".concat(start, "\" is greater than maximum (").concat(max, "). Sugeested ").concat(max, " instead."));
    }
    if (end < min) {
        issues.push("\"".concat(end, "\" is lower than minimum (").concat(min, "). Suggested ").concat(min, " instead."));
        end = min;
    }
    else if (!(0, has_undefined_type_1.default)(max) && end > max) {
        end = max;
        issues.push("\"".concat(end, "\" is greater than maximum (").concat(max, "). Suggested ").concat(max, " instead."));
    }
    if (start > end) {
        issues.push("Range (\"".concat(expr, "\") is invalid, \"").concat(end, "-").concat(start, "\" is suggested."));
        var swap = start;
        start = end;
        end = swap;
    }
    return new CronConstantRange(new CronValue_1.CronConstantValue(start), new CronValue_1.CronConstantValue(end), Object.freeze(issues), expr);
};
exports.default = range;
