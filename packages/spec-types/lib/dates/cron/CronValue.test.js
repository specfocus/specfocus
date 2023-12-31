"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CronObjectSpec_1 = require("./CronObjectSpec");
var CronValue_1 = __importDefault(require("./CronValue"));
describe('cron-value', function () {
    it('should parse', function () {
        var _a;
        expect((_a = (0, CronValue_1.default)('5', [1, 10])) === null || _a === void 0 ? void 0 : _a.spec).toEqual(5);
    });
    it('should recognize', function () {
        expect((0, CronObjectSpec_1.isCronValueSpec)(5)).toBe(true);
    });
});
