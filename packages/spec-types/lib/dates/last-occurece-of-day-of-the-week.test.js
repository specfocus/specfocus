"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var last_occurece_of_day_of_the_week_1 = __importDefault(require("./last-occurece-of-day-of-the-week"));
describe('lastOccureceOfDayOfTheWeek', function () {
    it('should return 28 for last Friday July 2023', function () {
        expect((0, last_occurece_of_day_of_the_week_1.default)(5, 6, 31)).toEqual(28);
    });
});
var _loop_1 = function (i) {
    var year = 2023 + Math.floor(2 * Math.random());
    var month = 1 + Math.floor(12 * Math.random());
    var firstDayOfTheWeek = new Date(year, month - 1, 1).getUTCDay();
    var lastDayOfTheMonth = new Date(year, month, 0).getUTCDate();
    describe("lastOccureceOfDayOfTheWeek for random day of ".concat(year, "-").concat(month, " (firstDayOfTheWeek: ").concat(firstDayOfTheWeek, ", lastDayOfTheMonth: ").concat(lastDayOfTheMonth, ")"), function () {
        var _loop_2 = function (i_1) {
            var day = Math.floor(7 * Math.random());
            var lastOccurece = (0, last_occurece_of_day_of_the_week_1.default)(day, firstDayOfTheWeek, lastDayOfTheMonth);
            var actual = new Date(year, month - 1, lastOccurece).getUTCDay();
            it("should ".concat(lastOccurece, " be the last occurence of ").concat(day, ", actually it is a ").concat(actual), function () {
                expect(day).toBe(actual);
            });
        };
        for (var i_1 = 0; i_1 < 4; i_1++) {
            _loop_2(i_1);
        }
        ;
    });
};
for (var i = 0; i < 4; i++) {
    _loop_1(i);
}
