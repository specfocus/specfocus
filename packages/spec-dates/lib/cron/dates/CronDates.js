"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE_START = exports.DATE_END = exports.CronDates = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-types/lib/types/has-undefined-type"));
var Cron_1 = require("../Cron");
var CronField_1 = require("../CronField");
var CronInterval_1 = __importDefault(require("../CronInterval"));
var CronRange_1 = __importDefault(require("../CronRange"));
var CronValue_1 = __importDefault(require("../CronValue"));
var CronDaysOfTheMonth_1 = require("./CronDaysOfTheMonth");
var CronLastDayOfTheMonth_1 = __importDefault(require("./CronLastDayOfTheMonth"));
var CronLastNthDayOfTheMonth_1 = __importDefault(require("./CronLastNthDayOfTheMonth"));
var CronLastNthToLastDayOfTheMonth_1 = __importDefault(require("./CronLastNthToLastDayOfTheMonth"));
var CronNearestWeekday_1 = __importDefault(require("./CronNearestWeekday"));
var CronDates = /** @class */ (function (_super) {
    __extends(CronDates, _super);
    function CronDates(scope) {
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, nodes) || this;
        _this.scope = scope;
        _this.clone = function () {
            var _a = __read(_this.scope, 2), firstDayOfTheMonth = _a[0], lastDateOfTheMonth = _a[1];
            var scope = [firstDayOfTheMonth, lastDateOfTheMonth];
            return new (CronDates.bind.apply(CronDates, __spreadArray([void 0, [firstDayOfTheMonth, lastDateOfTheMonth]], __read(_this.nodes), false)))();
        };
        return _this;
    }
    return CronDates;
}(CronField_1.CronField));
exports.CronDates = CronDates;
exports.DATE_END = 31;
exports.DATE_START = 1;
var every = function (expr, scope) {
    if (expr === Cron_1.ASTERISK)
        return new CronDaysOfTheMonth_1.CronDaysOfTheMonth(scope);
};
var base = function (expr, scope) {
    var _a, _b, _c, _d, _e, _f;
    return (_f = (_e = (_d = (_c = (_b = (_a = every(expr, scope)) !== null && _a !== void 0 ? _a : (0, CronValue_1.default)(expr, scope)) !== null && _b !== void 0 ? _b : (0, CronRange_1.default)(expr, scope)) !== null && _c !== void 0 ? _c : (0, CronLastDayOfTheMonth_1.default)(expr, scope)) !== null && _d !== void 0 ? _d : (0, CronLastNthDayOfTheMonth_1.default)(expr, scope)) !== null && _e !== void 0 ? _e : (0, CronNearestWeekday_1.default)(expr, scope)) !== null && _f !== void 0 ? _f : (0, CronLastNthToLastDayOfTheMonth_1.default)(expr, scope);
};
var parse = function (expr, scope) { var _a; return (_a = base(expr, scope)) !== null && _a !== void 0 ? _a : (0, CronInterval_1.default)(expr, scope, base); };
var dates = function (parts, scope) {
    var e_1, _a;
    var _b = __read(scope, 2), firstWeekdayOfTheMonth = _b[0], lastDateOfTheMonth = _b[1];
    scope.splice(0, 2, exports.DATE_START, exports.DATE_END);
    if (parts.length === 0) {
        return new CronDates(scope, new CronDaysOfTheMonth_1.CronDaysOfTheMonth(scope));
    }
    var nodes = [];
    try {
        for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
            var expr = parts_1_1.value;
            var obj = parse(expr, scope);
            if (!(0, has_undefined_type_1.default)(obj)) {
                nodes.push(obj);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    scope.splice(0, 2, firstWeekdayOfTheMonth, lastDateOfTheMonth);
    return new (CronDates.bind.apply(CronDates, __spreadArray([void 0, scope], __read(nodes), false)))();
};
exports.default = dates;
