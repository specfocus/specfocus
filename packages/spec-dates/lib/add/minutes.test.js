"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var minutes_1 = __importDefault(require("./minutes"));
describe('add minutes', function () {
    it('should shift minutes correctly', function () {
        expect((0, minutes_1.default)([2024, 1, 1, 12, 0], 5)).toEqual([2024, 1, 1, 12, 5]);
    });
    it('should unshift minutes correctly', function () {
        expect((0, minutes_1.default)([2024, 1, 1, 12, 0], -5)).toEqual([2024, 1, 1, 11, 55]);
        expect((0, minutes_1.default)([2024, 1, 1, 12, 0], -(12 * 60 + 5))).toEqual([2023, 12, 31, 23, 55]);
    });
});
