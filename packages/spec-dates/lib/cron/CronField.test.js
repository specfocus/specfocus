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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DateLike_1 = require("../DateLike");
var CronObjectSpec_1 = require("./CronObjectSpec");
var CronDates_1 = __importStar(require("./dates/CronDates"));
var CronLastDayOfTheMonth_1 = require("./dates/CronLastDayOfTheMonth");
var CronDays_1 = __importDefault(require("./days/CronDays"));
describe('CronField parse day', function () {
    it('should parse days', function () {
        var issues = [];
        var scope = [1, 31];
        var field = (0, CronDays_1.default)(['SUN', 'SAT'], scope);
        var specs = field.specs(issues);
        expect(issues).toEqual([]);
        expect(specs).toEqual([DateLike_1.DayOfTheWeek.Sunday, DateLike_1.DayOfTheWeek.Saturday]);
    });
    it('should parse every date as interval to last day of the month L)', function () {
        var issues = [];
        var scope = [1, 31];
        var field = (0, CronDates_1.default)([], scope);
        var specs = field.specs(issues);
        expect(specs).toEqual([[CronObjectSpec_1.CRON_RANGE, CronDates_1.DATE_START, CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]]);
    });
});
