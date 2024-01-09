"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var nearest_weekday_1 = require("../../nearest-weekday");
var CronNearestWeekday_1 = __importStar(require("./CronNearestWeekday"));
describe('CronNearestWeekday', function () {
    it('should parse', function () {
        var _a;
        expect((_a = (0, CronNearestWeekday_1.default)('5W', [1, 31])) === null || _a === void 0 ? void 0 : _a.spec).toEqual([CronNearestWeekday_1.CRON_NEAREST_WEEKDAY, 5]);
    });
    it('should recognize', function () {
        expect((0, CronNearestWeekday_1.isCronNearestWeekdaySpec)([CronNearestWeekday_1.CRON_NEAREST_WEEKDAY, 5])).toBe(true);
    });
});
var _loop_1 = function (i) {
    var year = 2023 + Math.floor(2 * Math.random());
    var month = 1 + Math.floor(12 * Math.random());
    var firstDayOfTheWeek = new Date(year, month - 1, 1).getUTCDay();
    var lastDateOfTheMonth = new Date(year, month, 0).getUTCDate();
    describe("CronNearestWeekday randomizing ".concat(year, "-").concat(month, " (firstDayOfTheWeek: ").concat(firstDayOfTheWeek, ", lastDayOfTheMonth: ").concat(lastDateOfTheMonth, ")"), function () {
        var _loop_2 = function (i_1) {
            var date = 1 + Math.floor(lastDateOfTheMonth * Math.random());
            var scope = [1, lastDateOfTheMonth];
            var obj = (0, CronNearestWeekday_1.default)("".concat(date, "W"), scope);
            // replace start with firstDayOfTheWeek before get valuye
            scope.splice(0, 2, firstDayOfTheWeek, lastDateOfTheMonth);
            var actual = (0, nearest_weekday_1.getNearestWeekday)(date, month, year);
            it("should ".concat(date, " be ").concat(obj === null || obj === void 0 ? void 0 : obj.value, ", and actually it is ").concat(actual), function () {
                expect(obj === null || obj === void 0 ? void 0 : obj.value).toBe(actual);
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
