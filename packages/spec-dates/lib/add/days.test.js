"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var days_1 = __importDefault(require("./days"));
describe('add days', function () {
    it('should shift days correctly', function () {
        expect((0, days_1.default)([2024, 1, 1, 12, 0], 1)).toEqual([2024, 1, 2, 12, 0]);
        expect((0, days_1.default)([2024, 1, 1, 12, 0], 5)).toEqual([2024, 1, 6, 12, 0]);
    });
    it('should unshift days correctly', function () {
        expect((0, days_1.default)([2024, 1, 1, 12, 0], -1)).toEqual([2023, 12, 31, 12, 0]);
        expect((0, days_1.default)([2024, 1, 1, 12, 0], -5)).toEqual([2023, 12, 27, 12, 0]);
    });
});
