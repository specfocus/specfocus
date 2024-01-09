"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endWeekday = exports.getWeekdays = void 0;
var DateLike_1 = require("./DateLike");
var first_day_of_the_week_1 = require("./first-day-of-the-week");
var first_weekday_of_the_month_1 = __importDefault(require("./first-weekday-of-the-month"));
var last_day_of_the_month_1 = require("./last-day-of-the-month");
var getWeekdays = function (month, year) { return weekdays((0, first_day_of_the_week_1.getFirstDayOfTheWeek)(month, year), (0, last_day_of_the_month_1.getLastDayOfTheMonth)(month, year)); };
exports.getWeekdays = getWeekdays;
var endWeekday = function (firstDayOfTheWeek) {
    return firstDayOfTheWeek === DateLike_1.DayOfTheWeek.Saturday ? 7 : 6 - firstDayOfTheWeek;
};
exports.endWeekday = endWeekday;
var weekdays = function (firstDayOfTheWeek, lastDateOfTheMonth) {
    var weekdays = [];
    for (var start = (0, first_weekday_of_the_month_1.default)(firstDayOfTheWeek), end = (0, exports.endWeekday)(firstDayOfTheWeek); start <= lastDateOfTheMonth; start = end + 3,
        end = Math.min(start + 4, lastDateOfTheMonth))
        weekdays.push([start, end]);
    return weekdays;
};
exports.default = weekdays;
