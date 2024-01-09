"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayOfTheWeek = void 0;
var getDayOfTheWeek = function (date, month, year) {
    return new Date(year, month - 1, date).getUTCDay();
};
exports.getDayOfTheWeek = getDayOfTheWeek;
/*
* Finds the day of the week for date (day of the month)
* @date the reference day of the month we are testing for
* @firstDayOfTheMonth the day of the week the month starts with
* @lastDateOfTheMonth the number days in the month (= last day)
* @return the last occurrence for @day in the month
*/
var dayOfTheWeek = function (date, firstDayOfTheMonth) {
    var dayOfTheWeek = (firstDayOfTheMonth + date - 1) % 7;
    return dayOfTheWeek;
};
exports.default = dayOfTheWeek;
