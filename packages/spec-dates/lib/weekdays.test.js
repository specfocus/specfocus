"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateLike_1 = require("./DateLike");
var weekdays_1 = require("./weekdays");
describe('endWeekday', function () {
    it('should match 5 for Sunday', function () {
        expect((0, weekdays_1.endWeekday)(DateLike_1.DayOfTheWeek.Sunday)).toBe(6);
    });
    it('should match 5 for Monday', function () {
        expect((0, weekdays_1.endWeekday)(DateLike_1.DayOfTheWeek.Monday)).toBe(5);
    });
    it('should match 4 for Tuesday', function () {
        expect((0, weekdays_1.endWeekday)(DateLike_1.DayOfTheWeek.Tuesday)).toBe(4);
    });
    it('should match 3 for Wednesday', function () {
        expect((0, weekdays_1.endWeekday)(DateLike_1.DayOfTheWeek.Wednesday)).toBe(3);
    });
    it('should match 2 for Thursday', function () {
        expect((0, weekdays_1.endWeekday)(DateLike_1.DayOfTheWeek.Thursday)).toBe(2);
    });
    it('should match 1 for Friday', function () {
        expect((0, weekdays_1.endWeekday)(DateLike_1.DayOfTheWeek.Friday)).toBe(1);
    });
    it('should match 7 for Saturday', function () {
        expect((0, weekdays_1.endWeekday)(DateLike_1.DayOfTheWeek.Saturday)).toBe(7);
    });
});
describe('weekdays', function () {
    it('should get the right weekdays for January 2023', function () {
        expect((0, weekdays_1.getWeekdays)(1, 2023)).toEqual([
            [2, 6],
            [9, 13],
            [16, 20],
            [23, 27],
            [30, 31]
        ]);
    });
    it('should get the right weekdays for February 2023', function () {
        expect((0, weekdays_1.getWeekdays)(2, 2023)).toEqual([
            [1, 3],
            [6, 10],
            [13, 17],
            [20, 24],
            [27, 28]
        ]);
    });
    it('should get the right weekdays for March 2023', function () {
        expect((0, weekdays_1.getWeekdays)(3, 2023)).toEqual([
            [1, 3],
            [6, 10],
            [13, 17],
            [20, 24],
            [27, 31]
        ]);
    });
    it('should get the right weekdays for April 2023', function () {
        expect((0, weekdays_1.getWeekdays)(4, 2023)).toEqual([
            [3, 7],
            [10, 14],
            [17, 21],
            [24, 28]
        ]);
    });
    it('should get the right weekdays for May 2023', function () {
        expect((0, weekdays_1.getWeekdays)(5, 2023)).toEqual([
            [1, 5],
            [8, 12],
            [15, 19],
            [22, 26],
            [29, 31]
        ]);
    });
    it('should get the right weekdays for June 2023', function () {
        expect((0, weekdays_1.getWeekdays)(6, 2023)).toEqual([
            [1, 2],
            [5, 9],
            [12, 16],
            [19, 23],
            [26, 30]
        ]);
    });
    it('should get the right weekdays for July 2023', function () {
        expect((0, weekdays_1.getWeekdays)(7, 2023)).toEqual([
            [3, 7],
            [10, 14],
            [17, 21],
            [24, 28],
            [31, 31]
        ]);
    });
    it('should get the right weekdays for August 2023', function () {
        expect((0, weekdays_1.getWeekdays)(8, 2023)).toEqual([
            [1, 4],
            [7, 11],
            [14, 18],
            [21, 25],
            [28, 31]
        ]);
    });
    it('should get the right weekdays for September 2023', function () {
        expect((0, weekdays_1.getWeekdays)(9, 2023)).toEqual([
            [1, 1],
            [4, 8],
            [11, 15],
            [18, 22],
            [25, 29]
        ]);
    });
    it('should get the right weekdays for October 2023', function () {
        expect((0, weekdays_1.getWeekdays)(10, 2023)).toEqual([
            [2, 6],
            [9, 13],
            [16, 20],
            [23, 27],
            [30, 31]
        ]);
    });
    it('should get the right weekdays for November 2023', function () {
        expect((0, weekdays_1.getWeekdays)(11, 2023)).toEqual([
            [1, 3],
            [6, 10],
            [13, 17],
            [20, 24],
            [27, 30]
        ]);
    });
    it('should get the right weekdays for December 2023', function () {
        expect((0, weekdays_1.getWeekdays)(12, 2023)).toEqual([
            [1, 1],
            [4, 8],
            [11, 15],
            [18, 22],
            [25, 29]
        ]);
    });
});
