"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cron_1 = __importDefault(require("../Cron"));
var __1 = require("../..");
describe('enumeration every and compare against an offset from initial', function () {
    var MAX_ITERATION = 1000; // increase as much as you like
    var MAX_FORMATTED = MAX_ITERATION.toLocaleString();
    it("should enumerate every minute for ".concat(MAX_FORMATTED, " minutes forward"), function () {
        var c = (0, Cron_1.default)('* * * * * *', (0, __1.dateTupleOf)());
        var initial = c.current;
        var enumerable = c.enumerate();
        var offset = 0;
        var current = enumerable.current;
        while (current && offset < MAX_ITERATION) {
            expect(current).toEqual(__1.add.minutes(initial, offset));
            current = enumerable.next();
            offset++;
        }
        // console.log(current, offset.toLocaleString());
    });
    it("should enumerate every hour for ".concat(MAX_FORMATTED, " hours forward"), function () {
        var c = (0, Cron_1.default)('0 * * * ? *', (0, __1.dateTupleOf)());
        var enumerable = c.enumerate();
        var initial = enumerable.next();
        var offset = 0;
        var current = enumerable.current;
        while (current && offset < MAX_ITERATION) {
            expect(current).toEqual(__1.add.hours(initial, offset));
            current = enumerable.next();
            offset++;
        }
        // console.log(current, offset.toLocaleString());
    });
    it("should enumerate every day for ".concat(MAX_FORMATTED, " days forward"), function () {
        var c = (0, Cron_1.default)('0 0 * * ? *', (0, __1.dateTupleOf)());
        var enumerable = c.enumerate();
        var initial = enumerable.next();
        var offset = 0;
        var current = enumerable.current;
        while (current && offset < MAX_ITERATION) {
            expect(current).toEqual(__1.add.days(initial, offset));
            current = enumerable.next();
            offset++;
        }
        // console.log(current, offset.toLocaleString());
    });
    it("should enumerate every first day of the month for ".concat(MAX_FORMATTED, " months forward"), function () {
        var c = (0, Cron_1.default)('0 0 1 * ?', (0, __1.dateTupleOf)());
        var enumerable = c.enumerate();
        var initial = enumerable.next();
        var offset = 0;
        var current = enumerable.current;
        while (current && offset < MAX_ITERATION) {
            expect(current).toEqual(__1.add.months(initial, offset));
            current = enumerable.next();
            offset++;
        }
        // console.log(current, offset.toLocaleString());
    });
    it("should enumerate every first day of JAN for ".concat(MAX_FORMATTED, " years forward"), function () {
        var c = (0, Cron_1.default)('0 0 1 1 ?', (0, __1.dateTupleOf)());
        var enumerable = c.enumerate();
        var initial = enumerable.next();
        var offset = 0;
        var current = enumerable.current;
        while (current && offset < MAX_ITERATION) {
            expect(current).toEqual(__1.add.years(initial, offset));
            current = enumerable.next();
            offset++;
        }
        // console.log(current, offset.toLocaleString());
    });
});
