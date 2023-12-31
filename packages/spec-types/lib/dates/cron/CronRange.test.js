"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CronObjectSpec_1 = require("./CronObjectSpec");
var CronRange_1 = __importDefault(require("./CronRange"));
describe('CronRange', function () {
    it('should parse', function () {
        var _a;
        expect((_a = (0, CronRange_1.default)('4-6', [1, 10])) === null || _a === void 0 ? void 0 : _a.spec).toEqual([CronObjectSpec_1.CRON_RANGE, 4, 6]);
    });
    it('should recognize', function () {
        expect((0, CronObjectSpec_1.isCronRangeSpec)([CronObjectSpec_1.CRON_RANGE, 4, 6])).toBe(true);
    });
});
