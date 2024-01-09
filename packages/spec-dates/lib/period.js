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
exports.Period = exports.PERIODS = exports.PERIOD_WEEKLY = exports.PERIOD_MONTHLY = exports.PERIOD_DAILY = void 0;
exports.PERIOD_DAILY = "daily";
exports.PERIOD_MONTHLY = "monthly";
exports.PERIOD_WEEKLY = "weekly";
exports.PERIODS = [exports.PERIOD_DAILY, exports.PERIOD_WEEKLY, exports.PERIOD_MONTHLY];
var Period = /** @class */ (function () {
    function Period(d) {
        this.d = d;
        var _a = __read(Period.UTC(d), 4), year = _a[0], month = _a[1], date = _a[2], day = _a[3];
        this.date = new Date(year, month, date);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        this.date.setUTCDate(date + 4 - day || 7);
        this.day = 1 + (this.date.getTime() - Date.UTC(year, 0, 1)) / 86400000;
        this.week = Math.ceil(this.day / 7);
        this.month = month + 1;
        this.year = year;
    }
    Period.UTC = function (d) {
        return [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCDay()];
    };
    Object.defineProperty(Period.prototype, "daily", {
        get: function () {
            return "".concat(this.year, "-").concat(String(this.day).padStart(3, "0"));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Period.prototype, "monthly", {
        get: function () {
            return "".concat(this.year, "-").concat(String(this.month).padStart(2, "0"));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Period.prototype, "weekly", {
        get: function () {
            return "".concat(this.year, "-").concat(String(this.week).padStart(2, "0"));
        },
        enumerable: false,
        configurable: true
    });
    Period.prototype.toString = function (type) {
        return this[type];
    };
    ;
    return Period;
}());
exports.Period = Period;
