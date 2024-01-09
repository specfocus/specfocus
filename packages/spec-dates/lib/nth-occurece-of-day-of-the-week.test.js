"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nth_occurence_of_day_of_the_week_1 = __importDefault(require("./nth-occurence-of-day-of-the-week"));
describe('nthOccureceOfDayOfTheWeek', function () {
    it('should return 28 for 4th occurence of Friday in July 2023', function () {
        expect((0, nth_occurence_of_day_of_the_week_1.default)(5, 4, 6, 31)).toEqual(28);
    });
});
var _loop_1 = function (i) {
    var year = 2023 + Math.floor(2 * Math.random());
    var month = 1 + Math.floor(12 * Math.random());
    var firstDayOfTheWeek = new Date(year, month - 1, 1).getUTCDay();
    var lastDayOfTheMonth = new Date(year, month, 0).getUTCDate();
    describe("nthOccureceOfDayOfTheWeek for random day and nth occurrence of ".concat(year, "-").concat(month, " (firstDayOfTheWeek: ").concat(firstDayOfTheWeek, ", lastDayOfTheMonth: ").concat(lastDayOfTheMonth, ")"), function () {
        var _loop_2 = function (i_1) {
            var day = Math.floor(7 * Math.random());
            var nth = Math.floor(5 * Math.random());
            var nthOccurrence = (0, nth_occurence_of_day_of_the_week_1.default)(day, nth, firstDayOfTheWeek, lastDayOfTheMonth);
            if (typeof nthOccurrence === 'undefined') {
                expect(nth).toBeGreaterThan(4);
            }
            else {
                var actual_1 = new Date(year, month - 1, nthOccurrence).getUTCDay();
                it("should ".concat(day, "#").concat(nth, " be ").concat(nthOccurrence, ", and actually it is ").concat(actual_1), function () {
                    expect(day).toBe(actual_1);
                });
            }
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
