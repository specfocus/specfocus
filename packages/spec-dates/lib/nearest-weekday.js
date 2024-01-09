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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNearestWeekday = void 0;
var day_of_the_week_1 = __importStar(require("./day-of-the-week"));
var last_day_of_the_month_1 = require("./last-day-of-the-month");
var getNearestWeekday = function (date, month, year) {
    switch ((0, day_of_the_week_1.getDayOfTheWeek)(date, month, year)) {
        case 0:
            // date is a Sunday; return next Monday if it is in the same month, or else the prior Friday
            return (date < (0, last_day_of_the_month_1.getLastDayOfTheMonth)(month, year) ? date + 1 : date - 2);
        case 6:
            // date is a Saturday; return prior Friday if it is in the same month, or else the next Monday
            return (date > 1 ? date - 1 : date + 2);
        default:
            // date is already a weekday
            return date;
    }
};
exports.getNearestWeekday = getNearestWeekday;
/**
 * Finds the last occurrence of a day of the week in a month
 * @date the reference day of the month we are testing for
 * @firstDayOfTheMonth the day of the week the month starts with
 * @lastDateOfTheMonth the number days in the month (= last day)
 * @return the last occurrence for @day in the month
*/
var nearestWeekday = function (date, firstDayOfTheMonth, lastDateOfTheMonth) {
    switch ((0, day_of_the_week_1.default)(date, firstDayOfTheMonth)) {
        case 0:
            // date is a Sunday; return next Monday if it is in the same month, or else the prior Friday
            return (date < lastDateOfTheMonth ? date + 1 : date - 2);
        case 6:
            // date is a Saturday; return prior Friday if it is in the same month, or else the next Monday
            return (date > 1 ? date - 1 : date + 2);
        default:
            // date is already a weekday
            return date;
    }
};
exports.default = nearestWeekday;
