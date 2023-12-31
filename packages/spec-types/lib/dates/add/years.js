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
var months_1 = __importDefault(require("./months"));
var add = function (moment, amount) {
    if (amount === void 0) { amount = 1; }
    if (amount === 0) {
        return moment;
    }
    var years = Math.trunc(amount);
    if (amount != years) {
        var months = 12 * (amount - years);
        moment = (0, months_1.default)(moment, months);
    }
    var _a = __read(moment, 5), year = _a[0], month = _a[1], day = _a[2], hour = _a[3], minute = _a[4];
    var date = new Date(year + years, month - 1, day);
    return [
        date.getFullYear(),
        (date.getMonth() + 1),
        date.getDate(),
        hour,
        minute
    ];
};
exports.default = add;
