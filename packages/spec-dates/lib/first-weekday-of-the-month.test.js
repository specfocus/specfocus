"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var first_weekday_of_the_month_1 = require("./first-weekday-of-the-month");
describe('first-weekday', function () {
    it('should get the right first weekday of each month the year 2023', function () {
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(1, 2023)).toBe(2);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(2, 2023)).toBe(1);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(3, 2023)).toBe(1);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(4, 2023)).toBe(3);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(5, 2023)).toBe(1);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(6, 2023)).toBe(1);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(7, 2023)).toBe(3);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(8, 2023)).toBe(1);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(9, 2023)).toBe(1);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(10, 2023)).toBe(2);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(11, 2023)).toBe(1);
        expect((0, first_weekday_of_the_month_1.getFirstWeekdayOfTheMonth)(12, 2023)).toBe(1);
    });
});
