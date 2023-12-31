"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds the last occurrence of a day of the week in a month
 * @day the day of the week we are testing for
 * @firstDayOfTheMonth the day of the week the month starts with
 * @lastDateOfTheMonth the number days in the month (= last day)
 * @return the last occurrence for @day in the month
*/
var lastOccureceOfDayOfTheWeek = function (day, firstDayOfTheMonth, lastDateOfTheMonth) {
    var daysBetween = (firstDayOfTheMonth + lastDateOfTheMonth - 1 - day) % 7;
    return lastDateOfTheMonth - daysBetween;
};
exports.default = lastOccureceOfDayOfTheWeek;
