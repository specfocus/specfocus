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
exports.CronConstantValue = void 0;
var IntervalEnumerator_1 = require("@specfocus/spec-types/lib/iterations/IntervalEnumerator");
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-types/lib/types/has-undefined-type"));
var CronObjectSpec_1 = require("./CronObjectSpec");
var CronConstantValue = /** @class */ (function () {
    function CronConstantValue(value, issues, original) {
        if (issues === void 0) { issues = []; }
        var _this = this;
        this.value = value;
        this.issues = issues;
        this.original = original;
        this.type = CronObjectSpec_1.CRON_VALUE;
        this.enumerate = function (initial) { return new IntervalEnumerator_1.IntervalEnumerator([_this.value, _this.value], 1, initial); };
        this.includes = function (value) { return value === _this.value; };
        this.toString = function () { return JSON.stringify(_this.spec); };
    }
    Object.defineProperty(CronConstantValue.prototype, "spec", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    return CronConstantValue;
}());
exports.CronConstantValue = CronConstantValue;
var value = function (expr, scope) {
    var issues = [];
    var match = expr.match(/^(\d+)$/);
    if (!match)
        return;
    var value = parseInt(match[1], 10);
    var _a = __read(scope, 2), min = _a[0], max = _a[1];
    if (value < min) {
        issues.push("\"".concat(value, "\" is lower than minimum (").concat(min, "). Suggeested ").concat(min, " instead."));
        value = min;
    }
    else if (!(0, has_undefined_type_1.default)(max) && value > max) {
        value = max;
        issues.push("\"".concat(value, "\" is greater than maximum (").concat(max, "). Suggeested ").concat(max, " instead."));
    }
    return new CronConstantValue(value, issues, expr);
};
exports.default = value;
