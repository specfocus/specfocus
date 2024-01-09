"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var first_day_of_the_week_1 = require("./first-day-of-the-week");
var last_day_of_the_month_1 = require("./last-day-of-the-month");
var monthContext = function (month, year) { return [
    (0, first_day_of_the_week_1.getFirstDayOfTheWeek)(month, year),
    (0, last_day_of_the_month_1.getLastDayOfTheMonth)(month, year)
]; };
exports.default = monthContext;
