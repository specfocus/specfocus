"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds the nth occurrence of a day of the week in a month
 * @day the day of the week we are testing for
 * @nth the ordinal of the occurrence we are testing for, 1 is the first
 * @firstDayOfTheMonth the day of the week the month starts with
 * @lastDateOfTheMonth the number days in the month (= last day)
 * @return the last occurrence for @day in the month
 **/
var nthOccureceOfDayOfTheWeek = function (day, nth, firstDayOfTheMonth, lastDateOfTheMonth) {
    var daysBetween = (7 + day - firstDayOfTheMonth) % 7;
    var nthOccurrence = 1 + daysBetween + 7 * (nth - 1);
    return nthOccurrence <= lastDateOfTheMonth ? nthOccurrence : undefined;
};
exports.default = nthOccureceOfDayOfTheWeek;
