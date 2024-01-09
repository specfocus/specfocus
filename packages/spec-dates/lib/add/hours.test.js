"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hours_1 = __importDefault(require("./hours"));
describe('add hours', function () {
    it('should shift hours correctly', function () {
        expect((0, hours_1.default)([2024, 1, 1, 12, 0], 5)).toEqual([2024, 1, 1, 17, 0]);
    });
    it('should unshift hours correctly', function () {
        expect((0, hours_1.default)([2024, 1, 1, 12, 0], -5)).toEqual([2024, 1, 1, 7, 0]);
        expect((0, hours_1.default)([2024, 1, 1, 12, 0], -17)).toEqual([2023, 12, 31, 19, 0]);
    });
});
