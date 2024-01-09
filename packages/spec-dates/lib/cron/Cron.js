"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.years = exports.months = exports.minutes = exports.hours = exports.replaceMonthAliases = exports.MONTH_ALIASES = exports.MONTH_START = exports.MONTH_END = exports.MINUTE_START = exports.MINUTE_END = exports.HOUR_START = exports.HOUR_END = exports.DAYS_IN_MONTH = exports.QUESTION = exports.ASTERISK = exports.Cron = exports.DAY_START = exports.DAY_END = exports.DATE_START = exports.DATE_END = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-types/lib/types/has-undefined-type"));
var before_1 = __importDefault(require("../before"));
var DateLike_1 = require("../DateLike");
var first_weekday_of_the_month_1 = require("../first-weekday-of-the-month");
var last_day_of_the_month_1 = require("../last-day-of-the-month");
var CronEnumerator_1 = require("./CronEnumerator");
var CronField_1 = __importStar(require("./CronField"));
var dates_1 = __importStar(require("./dates"));
var days_1 = __importStar(require("./days"));
var dates_2 = require("./dates");
Object.defineProperty(exports, "DATE_END", { enumerable: true, get: function () { return dates_2.DATE_END; } });
Object.defineProperty(exports, "DATE_START", { enumerable: true, get: function () { return dates_2.DATE_START; } });
var days_2 = require("./days");
Object.defineProperty(exports, "DAY_END", { enumerable: true, get: function () { return days_2.DAY_END; } });
Object.defineProperty(exports, "DAY_START", { enumerable: true, get: function () { return days_2.DAY_START; } });
var Cron = /** @class */ (function () {
    /**
     * 1. Minute (0-59)
     * 2. Hour (0-23)
     * 3. Day of the month (1-31)
     * 4. Month (1-12 or JAN-DEC)
     * 5. Day of the week (0-6 or SUN-SAT)
     * 6. (Optional) Year (e.g., 2021)
     * @param expr
     */
    function Cron(minutes, hours, dates, months, days, years, scope, issues, initial) {
        if (initial === void 0) { initial = (0, DateLike_1.dateTupleOf)(); }
        var _this = this;
        this.minutes = minutes;
        this.hours = hours;
        this.dates = dates;
        this.months = months;
        this.days = days;
        this.years = years;
        this.scope = scope;
        this.issues = issues;
        this.initial = initial;
        this.clone = function (initial) {
            var _a = __read(_this.scope, 2), firstDayOfTheMonth = _a[0], lastDateOfTheMonth = _a[1];
            return new Cron(_this.minutes, _this.hours, _this.dates, _this.months, _this.days, _this.years, [firstDayOfTheMonth, lastDateOfTheMonth], _this.issues, initial !== null && initial !== void 0 ? initial : _this.current);
        };
        this.enumerate = function () { return new CronEnumerator_1.CronEnumerator(_this); };
        this.includes = function (moment) {
            if (!(0, has_undefined_type_1.default)(moment)) {
                _this._current = moment;
                _this.refresh();
            }
            var _a = __read(_this._current, 5), year = _a[0], month = _a[1], day = _a[2], hour = _a[3], minute = _a[4];
            return _this.minutes.includes(minute)
                && _this.hours.includes(hour)
                && _this.days.includes(day)
                && _this.months.includes(month)
                && _this.years.includes(year);
        };
        this.refresh = function () {
            var _a = __read(_this._current, 2), year = _a[0], month = _a[1];
            _this.scope.splice(0, 2, (0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(month, year), (0, last_day_of_the_month_1.getLastDayOfTheMonth)(month, year));
        };
        this._current = initial !== null && initial !== void 0 ? initial : (0, DateLike_1.dateTupleOf)();
        this.refresh();
    }
    Cron.prototype[Symbol.iterator] = function () {
        var enumerator, current;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    enumerator = new CronEnumerator_1.CronEnumerator(this.clone());
                    current = enumerator.next();
                    _a.label = 1;
                case 1:
                    if (!!(0, has_undefined_type_1.default)(current)) return [3 /*break*/, 4];
                    return [4 /*yield*/, current];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    current = enumerator.next();
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(Cron.prototype, "current", {
        get: function () {
            var _a;
            if ((0, has_undefined_type_1.default)(this._current)) {
                this._current = (_a = this.initial) !== null && _a !== void 0 ? _a : (0, DateLike_1.dateTupleOf)();
            }
            if (!(0, before_1.default)(this._current)) {
                return this._current;
            }
            return this.enumerate().next();
        },
        set: function (current) {
            this._current = current;
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cron.prototype, "day", {
        get: function () {
            var _a = __read(this._current, 3), day = _a[2];
            return day;
        },
        set: function (day) {
            var _a = __read(this._current, 5), year = _a[0], month = _a[1], hour = _a[3], minute = _a[4];
            this._current = [year, month, day, hour, minute];
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cron.prototype, "hour", {
        get: function () {
            var _a = __read(this._current, 4), hour = _a[3];
            return hour;
        },
        set: function (hour) {
            var _a = __read(this._current, 5), year = _a[0], month = _a[1], day = _a[2], minute = _a[4];
            this._current = [year, month, day, hour, minute];
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cron.prototype, "minute", {
        get: function () {
            var _a = __read(this._current, 5), minute = _a[4];
            return minute;
        },
        set: function (value) {
            var _a = __read(this._current, 4), year = _a[0], month = _a[1], day = _a[2], hour = _a[3];
            this._current = [year, month, day, hour, value];
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cron.prototype, "month", {
        get: function () {
            var _a = __read(this._current, 2), month = _a[1];
            return month;
        },
        set: function (month) {
            var _a = __read(this._current, 5), year = _a[0], day = _a[2], hour = _a[3], minute = _a[4];
            this._current = [year, month, day, hour, minute];
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cron.prototype, "year", {
        get: function () {
            var _a = __read(this._current, 1), year = _a[0];
            return year;
        },
        set: function (year) {
            var _a = __read(this._current, 5), month = _a[1], day = _a[2], hour = _a[3], minute = _a[4];
            this._current = [year, month, day, hour, minute];
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    return Cron;
}());
exports.Cron = Cron;
exports.ASTERISK = '*';
exports.QUESTION = '?';
exports.DAYS_IN_MONTH = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
exports.HOUR_END = 23;
exports.HOUR_START = 0;
exports.MINUTE_END = 59;
exports.MINUTE_START = 0;
exports.MONTH_END = 12;
exports.MONTH_START = 1;
exports.MONTH_ALIASES = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12
};
var replaceMonthAliases = function (expr, issues) {
    return expr.replace(/[a-z]{3}/gi, function (match) {
        match = match.toLowerCase();
        if (typeof exports.MONTH_ALIASES[match] !== 'undefined') {
            return String(exports.MONTH_ALIASES[match]);
        }
        else {
            issues.push("cannot resolve alias \"".concat(match, "; resolving to JAN\""));
            return String(1);
        }
    });
};
exports.replaceMonthAliases = replaceMonthAliases;
var hours = function (parts, issues) {
    if (parts.length === 0) {
        return (0, CronField_1.offset)(exports.HOUR_START, exports.HOUR_END);
    }
    return (0, CronField_1.default)([exports.HOUR_START, exports.HOUR_END], parts);
};
exports.hours = hours;
var minutes = function (parts, issues) {
    if (parts.length === 0) {
        return (0, CronField_1.offset)(exports.MINUTE_START, exports.MINUTE_END);
    }
    return (0, CronField_1.default)([exports.MINUTE_START, exports.MINUTE_END], parts);
};
exports.minutes = minutes;
var months = function (parts, issues) {
    if (parts.length === 0) {
        return (0, CronField_1.offset)(exports.MONTH_START, exports.MONTH_END);
    }
    return (0, CronField_1.default)([exports.MONTH_START, exports.MONTH_END], parts.map(function (expr) { return (0, exports.replaceMonthAliases)(expr, issues); }));
};
exports.months = months;
var years = function (parts, issues) {
    if (parts.length === 0) {
        return (0, CronField_1.offset)(new Date().getUTCFullYear());
    }
    return (0, CronField_1.default)([new Date().getUTCFullYear(), undefined], parts);
};
exports.years = years;
var cron = function (expr, initial) {
    var scope = [days_1.DAY_START, dates_1.DATE_END];
    var issues = [];
    // sanitize spaces and split by white spaces
    var _a = __read(expr.replace(/\s{2,}/g, ' ').trim().split(/\s+/), 6), minute = _a[0], hour = _a[1], date = _a[2], month = _a[3], day = _a[4], year = _a[5];
    var strict = function (expr) { return ![exports.ASTERISK, exports.QUESTION].includes(expr); };
    return new Cron((0, exports.minutes)(minute.split(',').filter(strict), issues), (0, exports.hours)(hour.split(',').filter(strict), issues), (0, dates_1.default)(date.split(',').filter(strict), scope), (0, exports.months)(month.split(',').filter(strict), issues), (0, days_1.default)(day.split(',').filter(strict), scope), (0, exports.years)((year !== null && year !== void 0 ? year : exports.ASTERISK).split(',').filter(strict), issues), scope, Object.freeze(issues), initial);
};
exports.default = cron;
