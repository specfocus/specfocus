"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var first_monday_of_the_month_1 = require("./first-monday-of-the-month");
describe('first-monday', function () {
    it('should get the right first monday of each month the year 2023', function () {
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(1, 2023)).toBe(2);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(2, 2023)).toBe(6);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(3, 2023)).toBe(6);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(4, 2023)).toBe(3);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(5, 2023)).toBe(1);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(6, 2023)).toBe(5);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(7, 2023)).toBe(3);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(8, 2023)).toBe(7);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(9, 2023)).toBe(4);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(10, 2023)).toBe(2);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(11, 2023)).toBe(6);
        expect((0, first_monday_of_the_month_1.getFirstMondayOfTheMonth)(12, 2023)).toBe(4);
    });
});
