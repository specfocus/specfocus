"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstWeekdayOfTheMonth = void 0;
var DateLike_1 = require("./DateLike");
var first_day_of_the_week_1 = require("./first-day-of-the-week");
/** Calculate the first occurrence of the monday within the month */
var getFirstWeekdayOfTheMonth = function (month, year) {
    return firstWeekdayOfTheMonth((0, first_day_of_the_week_1.getFirstDayOfTheWeek)(month, year));
};
exports.getFirstWeekdayOfTheMonth = getFirstWeekdayOfTheMonth;
var firstWeekdayOfTheMonth = function (firstDayOfTheMonth) {
    switch (firstDayOfTheMonth) {
        case DateLike_1.DayOfTheWeek.Sunday:
            return 2;
        case DateLike_1.DayOfTheWeek.Saturday:
            return 3;
        default:
            return 1;
    }
};
exports.default = firstWeekdayOfTheMonth;
