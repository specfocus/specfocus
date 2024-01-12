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
exports.replaceDaysAliases = exports.DAY_ALIASES = exports.DAY_START = exports.DAY_END = exports.CronDays = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var CronField_1 = require("../CronField");
var CronInterval_1 = __importDefault(require("../CronInterval"));
var CronRange_1 = __importDefault(require("../CronRange"));
var CronValue_1 = __importDefault(require("../CronValue"));
var CronLastOccurrenceOfDayOfTheWeek_1 = __importDefault(require("./CronLastOccurrenceOfDayOfTheWeek"));
var CronNthOccurrenceOfDayOfTheWeek_1 = __importDefault(require("./CronNthOccurrenceOfDayOfTheWeek"));
var CronWeekdaysOfTheMonth_1 = __importDefault(require("./CronWeekdaysOfTheMonth"));
var CronDays = /** @class */ (function (_super) {
    __extends(CronDays, _super);
    function CronDays(scope) {
        var nodes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            nodes[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, nodes) || this;
        _this.scope = scope;
        _this.clone = function () {
            var scope = __spreadArray([], __read(_this.scope), false);
            return new (CronDays.bind.apply(CronDays, __spreadArray([void 0, scope], __read(_this.nodes), false)))();
        };
        return _this;
    }
    return CronDays;
}(CronField_1.CronField));
exports.CronDays = CronDays;
exports.DAY_END = 7;
exports.DAY_START = 0;
exports.DAY_ALIASES = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
};
var replaceDaysAliases = function (expr, issues) {
    return expr.replace(/[a-z]{3}/gi, function (match) {
        match = match.toLowerCase();
        if (typeof exports.DAY_ALIASES[match] !== 'undefined') {
            return String(exports.DAY_ALIASES[match]);
        }
        else {
            issues.push("cannot resolve alias \"".concat(match, "; resolving to MON\""));
            return String(1);
        }
    });
};
exports.replaceDaysAliases = replaceDaysAliases;
var offset = function (expr, scope) {
    var _a, _b, _c;
    return (_c = (_b = (_a = (0, CronValue_1.default)(expr, scope)) !== null && _a !== void 0 ? _a : (0, CronRange_1.default)(expr, scope)) !== null && _b !== void 0 ? _b : (0, CronLastOccurrenceOfDayOfTheWeek_1.default)(expr, scope)) !== null && _c !== void 0 ? _c : (0, CronNthOccurrenceOfDayOfTheWeek_1.default)(expr, scope);
};
var parse = function (expr, scope) { var _a, _b; return (_b = (_a = offset(expr, scope)) !== null && _a !== void 0 ? _a : (0, CronInterval_1.default)(expr, scope, offset)) !== null && _b !== void 0 ? _b : (0, CronWeekdaysOfTheMonth_1.default)(expr, scope); };
var days = function (parts, scope, issues) {
    var e_1, _a;
    if (issues === void 0) { issues = []; }
    var _b = __read(scope, 2), firstWeekdayOfTheMonth = _b[0], lastDateOfTheMonth = _b[1];
    scope.splice(0, 2, exports.DAY_START, exports.DAY_END);
    if (parts.length === 0) {
        return new CronDays(scope);
    }
    var nodes = [];
    try {
        for (var _c = __values(parts.map(function (expr) { return (0, exports.replaceDaysAliases)(expr, issues); })), _d = _c.next(); !_d.done; _d = _c.next()) {
            var expr = _d.value;
            var obj = parse(expr, scope);
            if (!(0, has_undefined_type_1.default)(obj)) {
                nodes.push(obj);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    scope.splice(0, 2, firstWeekdayOfTheMonth, lastDateOfTheMonth);
    return new (CronDays.bind.apply(CronDays, __spreadArray([void 0, scope], __read(nodes), false)))();
};
exports.default = days;
