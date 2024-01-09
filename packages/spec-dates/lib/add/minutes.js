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
var hours_1 = __importDefault(require("./hours"));
var add = function (moment, amount) {
    var _a, _b;
    if (amount === void 0) { amount = 1; }
    if (amount === 0)
        return moment;
    var _c = __read(moment, 5), year = _c[0], month = _c[1], day = _c[2], hour = _c[3], minute = _c[4];
    minute += Math.round(amount);
    if (minute < 0) {
        _a = __read((0, hours_1.default)([year, month, day, hour, 60 + minute % 60], Math.trunc(minute / 60) - 1), 5), year = _a[0], month = _a[1], day = _a[2], hour = _a[3], minute = _a[4];
    }
    else if (minute > 59) {
        _b = __read((0, hours_1.default)([year, month, day, hour, minute % 60], Math.trunc(minute / 60)), 5), year = _b[0], month = _b[1], day = _b[2], hour = _b[3], minute = _b[4];
    }
    return [
        year,
        month,
        day,
        hour,
        Math.trunc(minute)
    ];
};
exports.default = add;
