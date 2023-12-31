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
var add = function (moment, amount) {
    if (amount === void 0) { amount = 1; }
    if (amount === 0) {
        return moment;
    }
    var months = Math.trunc(amount);
    if (amount != months) {
        var _a = __read(moment, 2), year_1 = _a[0], month_1 = _a[1];
        var total = new Date(year_1, month_1 + Math.sign(amount), 0).getDate();
        var days = total * (amount - months);
        moment = (0, days_1.default)(moment, days);
    }
    var _b = __read(moment, 5), year = _b[0], month = _b[1], day = _b[2], hour = _b[3], minute = _b[4];
    var date = new Date(year, month - 1 + months, day);
    return [
        date.getFullYear(),
        (date.getMonth() + 1),
        date.getDate(),
        hour,
        minute
    ];
};
exports.default = add;
