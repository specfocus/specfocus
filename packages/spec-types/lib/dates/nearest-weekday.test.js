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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var first_day_of_the_week_1 = require("./first-day-of-the-week");
var last_day_of_the_month_1 = require("./last-day-of-the-month");
var month_context_1 = __importDefault(require("./month-context"));
var nearest_weekday_1 = __importStar(require("./nearest-weekday"));
describe('nearestWeekday', function () {
    var firstDayOfTheMonth = (0, first_day_of_the_week_1.getFirstDayOfTheWeek)(7, 2023);
    var lastDateOfTheMonth = (0, last_day_of_the_month_1.getLastDayOfTheMonth)(7, 2023);
    it('should provide the previous day for Saturdays', function () {
        expect((0, nearest_weekday_1.default)(29, firstDayOfTheMonth, lastDateOfTheMonth)).toBe((0, nearest_weekday_1.getNearestWeekday)(29, 7, 2023));
    });
    it('should provide the following day for Sundays', function () {
        expect(nearest_weekday_1.default.apply(void 0, __spreadArray([30], __read((0, month_context_1.default)(7, 2023)), false))).toBe((0, nearest_weekday_1.getNearestWeekday)(30, 7, 2023));
    });
});
describe('getNearestWeekday', function () {
    it('should provide the previous day for Saturdays', function () {
        expect((0, nearest_weekday_1.getNearestWeekday)(29, 7, 2023)).toBe(28);
    });
    it('should provide the following day for Sundays', function () {
        expect((0, nearest_weekday_1.getNearestWeekday)(30, 7, 2023)).toBe(31);
    });
});
