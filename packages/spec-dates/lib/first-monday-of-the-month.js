"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstMondayOfTheMonth = void 0;
var first_day_of_the_week_1 = require("./first-day-of-the-week");
/** Calculate the first occurrence of the monday within the month */
var getFirstMondayOfTheMonth = function (month, year) {
    return 1 + ((8 - (0, first_day_of_the_week_1.getFirstDayOfTheWeek)(month, year)) % 7);
};
exports.getFirstMondayOfTheMonth = getFirstMondayOfTheMonth;
