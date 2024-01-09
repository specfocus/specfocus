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
var Cron_1 = __importStar(require("./Cron"));
var CronObjectSpec_1 = require("./CronObjectSpec");
var constants_1 = require("./constants");
var CronDates_1 = require("./dates/CronDates");
var CronLastDayOfTheMonth_1 = require("./dates/CronLastDayOfTheMonth");
var DateLike_1 = require("../DateLike");
var YEAR_THIS = new Date().getUTCFullYear();
var parse = function (expr, issues) {
    var _cron = (0, Cron_1.default)(expr);
    return {
        minites: _cron.minutes.specs(issues),
        hours: _cron.hours.specs(issues),
        dates: _cron.dates.specs(issues),
        months: _cron.months.specs(issues),
        days: _cron.days.specs(issues),
        years: _cron.years.specs(issues)
    };
};
describe('expression parse', function () {
    it('should handle excess of spaces', function () {
        expect(parse('  *  *    *       *      ?      *  ')).toEqual({
            minites: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should return true', function () {
        expect(parse('* * * * ? *')).toBeTruthy();
        expect(parse('* * ? * * *')).toBeTruthy();
        expect(parse('0 * * ? * *')).toBeTruthy();
        expect(parse('0 */2 * ? * *')).toBeTruthy();
        expect(parse('0 1/2 * ? * *')).toBeTruthy();
        expect(parse('0 15,30,45 * ? * *')).toBeTruthy();
        expect(parse('0 0 */2 ? * *')).toBeTruthy();
        expect(parse('0 0 1/2 ? * *')).toBeTruthy();
        expect(parse('0 0 12 */7 * ?')).toBeTruthy();
        expect(parse('0 0 12 2/7 * ?')).toBeTruthy();
        expect(parse('0 0 12 2 * ?')).toBeTruthy();
        expect(parse('0 0 12 L * ?')).toBeTruthy();
        expect(parse('0 0 12 LW * ?')).toBeTruthy();
        expect(parse('0 0 12 L-5 * ?')).toBeTruthy();
        expect(parse('0 * * 10,30 * ? *')).toBeTruthy();
        expect(parse('0 0 12 ? * 2#1')).toBeTruthy();
        expect(parse('0 0 12 ? * 5#3')).toBeTruthy();
        expect(parse('0 0 12 ? JAN *')).toBeTruthy();
        expect(parse('0 0 12 ? JAN,JUN *')).toBeTruthy();
        expect(parse('0 0 12 ? 9-12 *')).toBeTruthy();
        expect(parse('0 0 12 ? * L')).toBeTruthy();
        expect(parse('0/5 14,18,3-39,52 * ? JAN,MAR,SEP MON-FRI 2002-2010')).toBeTruthy();
    });
    it('should return false', function () {
        expect(parse('* * * * * *')).toBeTruthy();
        expect(parse('* * ? * ? *')).toBeTruthy();
        expect(parse('? * * * ? *')).toBeTruthy();
        expect(parse('0 12 2L * ?')).toBeTruthy();
        expect(parse('0 12 * * WED')).toBeTruthy();
        expect(parse('* * ? * JAN *')).toBeTruthy();
        expect(parse('* * * WED ? *')).toBeTruthy();
    });
    it('should parse every minute', function () {
        expect(parse(constants_1.CRON_EVERY_MINUTE)).toEqual({
            minites: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every even minute', function () {
        expect(parse(constants_1.CRON_EVERY_EVEN_MINUTE)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, 0, 2]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every uneven minute', function () {
        expect(parse(constants_1.CRON_EVERY_UNEVEN_MINUTE)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, 1, 2]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every 2 minutes', function () {
        expect(parse(constants_1.CRON_EVERY_TWO_MINUTES)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END], 2]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every 3 minutes', function () {
        expect(parse(constants_1.CRON_EVERY_THREE_MUNUTES)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END], 3]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every 4 minutes', function () {
        expect(parse(constants_1.CRON_EVERY_FOUR_MINUTES)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END], 4]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every 5 minutes', function () {
        expect(parse(constants_1.CRON_EVERY_FIVE_MINUTES)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END], 5]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every 10 minutes', function () {
        expect(parse(constants_1.CRON_EVERY_TEN_MINUTES)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END], 10]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every 15 minutes', function () {
        expect(parse(constants_1.CRON_EVERY_QUARTER_HOUR)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END], 15]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every 30 minutes', function () {
        expect(parse(constants_1.CRON_EVERY_HALF_HOUR)).toEqual({
            minites: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.MINUTE_START, Cron_1.MINUTE_END], 30]],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every hour at minutes 15, 30 and 45', function () {
        expect(parse(constants_1.CRON_FIVETEEN_MINUTES)).toEqual({
            minites: [15, 30, 45],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every hour', function () {
        expect(parse(constants_1.CRON_EVERY_HOUR)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every even hour', function () {
        expect(parse(constants_1.CRON_EVERY_EVEN_HOUR)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, 0, 2]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every uneven hour', function () {
        expect(parse(constants_1.CRON_EVERY_UNEVEN_HOUR)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, 1, 2]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every two hours', function () {
        expect(parse(constants_1.CRON_EVERY_TWO_HOURS)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END], 2]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every three hours', function () {
        expect(parse(constants_1.CRON_EVERY_THREE_HOURS)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END], 3]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every four hours ', function () {
        expect(parse(constants_1.CRON_EVERY_FOUR_HOURS)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END], 4]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every six hours', function () {
        expect(parse(constants_1.CRON_EVERY_SIX_HOURS)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END], 6]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every eight hours', function () {
        expect(parse(constants_1.CRON_EVERY_EIGHT_HOURS)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END], 8]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every twelve hours', function () {
        expect(parse(constants_1.CRON_EVERY_TWELVE_HOURS)).toEqual({
            minites: [0],
            hours: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, Cron_1.HOUR_START, Cron_1.HOUR_END], 12]],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse correctly day of the month specs', function () {
        // every day at midnight - 12am 
        expect(parse(constants_1.CRON_EVERY_DAY_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
        // every day at 1am
        expect(parse(constants_1.CRON_EVERY_DAY_AT_ONE_AM)).toEqual({
            minites: [0],
            hours: [1],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
        // every day at 6am
        expect(parse(constants_1.CRON_EVERY_DAY_AT_SIX_AM)).toEqual({
            minites: [0],
            hours: [6],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
        // every day at noon - 12pm  
        expect(parse(constants_1.CRON_EVERY_DAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
        // every seven days at noon
        expect(parse(constants_1.CRON_EVERY_SEVEN_DAYS_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_INTERVAL, [CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH], 7]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every month on the 1st', function () {
        expect(parse(constants_1.CRON_MONTHLY)).toEqual({
            minites: [0],
            hours: [0],
            dates: [1],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every month on the 1st, at noon', function () {
        expect(parse(constants_1.CRON_MONTHLY_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [1],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
        // every day at noon in January only
        expect(parse(constants_1.C_JAN)).toBeTruthy();
        // every day at noon in June only
        expect(parse(constants_1.C_JUN)).toBeTruthy();
        // every day at noon in January and June
        expect(parse(constants_1.C_JAN_JUN)).toBeTruthy();
        // every day at noon in December only
        expect(parse(constants_1.C_DEC)).toBeTruthy();
        // every day at noon in January, February, March and April
        expect(parse(constants_1.C_JAN_FEB_MAR_APR)).toBeTruthy();
        // every day at noon between September and December
        expect(parse(constants_1.C_SEPT_DEC)).toBeTruthy();
    });
    it('should parse correctly day of the week specs', function () {
        // every Sunday at midnight
        expect(parse(constants_1.CRON_EVERY_SUNDAY_AT_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Sunday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Monday at midnight', function () {
        expect(parse(constants_1.CRON_EVERY_MONDAY_AT_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Monday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Tuesday at midnight', function () {
        expect(parse(constants_1.CRON_EVERY_TUESDAY_AT_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Tuesday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should every Wednesday at midnight', function () {
        expect(parse(constants_1.CRON_EVERY_WEDNESDAY_AT_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Wednesday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should every Thursday at midnight ', function () {
        expect(parse(constants_1.CRON_EVERY_THURSDAY_AT_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Thursday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Friday at midnight  ', function () {
        expect(parse(constants_1.CRON_EVERY_FRIDAY_AT_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Friday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Saturday at midnight', function () {
        expect(parse(constants_1.CRON_EVERY_SATURDAY_AT_MIDNIGHT)).toEqual({
            minites: [0],
            hours: [0],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Saturday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Sunday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_SUNDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Sunday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Monday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_MONDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Monday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Tuesday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_TUESDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Tuesday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Wednesday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_WEDNESDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Wednesday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Thursday at noon  ', function () {
        expect(parse(constants_1.CRON_EVERY_THUSDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Thursday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Friday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_FRIDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Friday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Saturday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_SATURDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Saturday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Weekday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_WEEKDAY_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [[CronObjectSpec_1.CRON_RANGE, DateLike_1.DayOfTheWeek.Monday, DateLike_1.DayOfTheWeek.Friday]],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse every Saturday and Sunday at noon', function () {
        expect(parse(constants_1.CRON_EVERY_WEEKEND_AT_NOON)).toEqual({
            minites: [0],
            hours: [12],
            dates: [[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]],
            months: [[CronObjectSpec_1.CRON_RANGE, Cron_1.MONTH_START, Cron_1.MONTH_END]],
            days: [DateLike_1.DayOfTheWeek.Sunday, DateLike_1.DayOfTheWeek.Saturday],
            years: [[CronObjectSpec_1.CRON_INTERVAL, YEAR_THIS, 1]]
        });
    });
    it('should parse correctly day of the week specs', function () {
        // every month on the nearest Weekday to the 1st of the month, at noon
        expect(parse(constants_1.C_M_1W)).toBeTruthy();
        // every month on the nearest Weekday to the 15th of the month, at noon
        expect(parse(constants_1.C_M_15W)).toBeTruthy();
        // every month on the first Monday of the Month, at noon
        expect(parse(constants_1.C_M_MON1)).toBeTruthy();
        // every month on the first Friday of the Month, at noon
        expect(parse(constants_1.C_M_FRI1)).toBeTruthy();
        // every month on the second Monday of the Month, at noon
        expect(parse(constants_1.C_M_MON2)).toBeTruthy();
        // every month on the third Thursday of the Month, at noon - 12pm
        expect(parse(constants_1.C_M_THU3)).toBeTruthy();
    });
    it('should parse correctly other specs', function () {
        expect(parse(constants_1.C_M2)).toBeTruthy(); // every month on the 2nd, at noon
        expect(parse(constants_1.C_MX2)).toBeTruthy(); // every month on the 15th, at noon
        expect(parse(constants_1.C_MX1)).toBeTruthy(); // every 2 days starting on the 1st of the month, at noon
        expect(parse(constants_1.C_MX31)).toBeTruthy(); // every 4 days staring on the 1st of the month, at noon
        expect(parse(constants_1.C_MDL)).toBeTruthy(); // every month on the last day of the month, at noon
        expect(parse(constants_1.C_MDL2)).toBeTruthy(); // every month on the second to last day of the month, at noon
        expect(parse(constants_1.C_M_LW)).toBeTruthy(); // every month on the last weekday, at noon
        // expect(parseExpression(C_M_1L)).toBeTruthy();                 // every month on the last Sunday, at noon
        // expect(parseExpression(C_M_2L)).toBeTruthy();                 // every month on the last Monday, at noon
        // expect(parseExpression(C_M_6L)).toBeTruthy();                 // every month on the last Friday, at noon
    });
});
