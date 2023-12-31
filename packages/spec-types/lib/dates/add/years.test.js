"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var years_1 = __importDefault(require("./years"));
describe('add years', function () {
    it('should shift months correctly', function () {
        expect((0, years_1.default)([2024, 1, 1, 12, 0], 1)).toEqual([2025, 1, 1, 12, 0]);
        expect((0, years_1.default)([2024, 1, 1, 12, 0], 5)).toEqual([2029, 1, 1, 12, 0]);
    });
    it('should unshift years correctly', function () {
        expect((0, years_1.default)([2024, 1, 1, 12, 0], -1)).toEqual([2023, 1, 1, 12, 0]);
        expect((0, years_1.default)([2024, 1, 1, 12, 0], -5)).toEqual([2019, 1, 1, 12, 0]);
    });
});
