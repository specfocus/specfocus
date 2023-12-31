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
var days_1 = __importDefault(require("./days"));
var minutes_1 = __importDefault(require("./minutes"));
var add = function (moment, amount) {
    var _a, _b, _c;
    if (amount === void 0) { amount = 1; }
    if (amount === 0)
        return moment;
    var _d = __read(moment, 5), year = _d[0], month = _d[1], day = _d[2], hour = _d[3], minute = _d[4];
    hour += amount;
    if (!Number.isInteger(hour)) {
        _a = __read((0, minutes_1.default)([year, month, day, Math.trunc(hour), minute], (60 * hour) % 60), 5), year = _a[0], month = _a[1], day = _a[2], hour = _a[3], minute = _a[4];
    }
    if (hour < 0) {
        _b = __read((0, days_1.default)([year, month, day, 24 + hour % 24, minute], Math.trunc(hour / 24) - 1), 5), year = _b[0], month = _b[1], day = _b[2], hour = _b[3], minute = _b[4];
    }
    else if (hour > 23) {
        _c = __read((0, days_1.default)([year, month, day, hour % 24, minute], Math.trunc(hour / 24)), 5), year = _c[0], month = _c[1], day = _c[2], hour = _c[3], minute = _c[4];
    }
    return [
        year,
        month,
        day,
        Math.trunc(hour),
        minute
    ];
};
exports.default = add;
