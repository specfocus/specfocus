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
var CronLastNthDayOfTheMonth_1 = __importStar(require("./CronLastNthDayOfTheMonth"));
describe('CronLastNthDayOfTheMonth', function () {
    it('should parse', function () {
        var _a;
        expect((_a = (0, CronLastNthDayOfTheMonth_1.default)('L-5', [1, 31])) === null || _a === void 0 ? void 0 : _a.spec).toEqual([CronLastNthDayOfTheMonth_1.CRON_LAST_NTH_DAY_OF_THE_MONTH, 5]);
    });
    it('should fix to numeric value', function () {
        var range = [1, 30];
        var obj = (0, CronLastNthDayOfTheMonth_1.default)('L-5', range);
        expect(obj === null || obj === void 0 ? void 0 : obj.value).toEqual(25);
    });
    it('should recognize', function () {
        expect((0, CronLastNthDayOfTheMonth_1.isCronLastNthDayOfTheMonthSpec)([CronLastNthDayOfTheMonth_1.CRON_LAST_NTH_DAY_OF_THE_MONTH, 5])).toBe(true);
    });
});
