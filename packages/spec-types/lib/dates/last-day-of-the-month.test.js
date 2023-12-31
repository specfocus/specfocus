"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var last_day_of_the_month_1 = require("./last-day-of-the-month");
describe('getLastDayOfTheMonth', function () {
    it('should calculate last day of each month, year 2024', function () {
        // January, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(1, 2024)).toBe(31);
        // February, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(2, 2024)).toBe(29);
        // March, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(3, 2024)).toBe(31);
        // April, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(4, 2024)).toBe(30);
        // May, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(5, 2024)).toBe(31);
        // June, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(6, 2024)).toBe(30);
        // July, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(7, 2024)).toBe(31);
        // August, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(8, 2024)).toBe(31);
        // September, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(9, 2024)).toBe(30);
        // October, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(10, 2024)).toBe(31);
        // November, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(11, 2024)).toBe(30);
        // December, 2024
        expect((0, last_day_of_the_month_1.getLastDayOfTheMonth)(12, 2024)).toBe(31);
    });
});
