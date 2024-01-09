"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CronObjectSpec_1 = require("../CronObjectSpec");
var CronLastDayOfTheMonth_1 = require("./CronLastDayOfTheMonth");
var CronLastNthDayOfTheMonth_1 = require("./CronLastNthDayOfTheMonth");
var CronLastNthToLastDayOfTheMonth_1 = __importDefault(require("./CronLastNthToLastDayOfTheMonth"));
describe('cron-range-last-nth-to-last', function () {
    it('should parse', function () {
        var _a;
        expect((_a = (0, CronLastNthToLastDayOfTheMonth_1.default)('L-5-L', [1, 30])) === null || _a === void 0 ? void 0 : _a.spec).toEqual([CronObjectSpec_1.CRON_RANGE, [CronLastNthDayOfTheMonth_1.CRON_LAST_NTH_DAY_OF_THE_MONTH, 5], CronLastDayOfTheMonth_1.CRON_LAST_DAY_OF_THE_MONTH]);
    });
});
