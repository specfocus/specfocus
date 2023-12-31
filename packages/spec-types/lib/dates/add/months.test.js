"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var months_1 = __importDefault(require("./months"));
describe('add months', function () {
    it('should shift months correctly', function () {
        expect((0, months_1.default)([2024, 1, 1, 12, 0], 1)).toEqual([2024, 2, 1, 12, 0]);
        expect((0, months_1.default)([2024, 1, 1, 12, 0], 5)).toEqual([2024, 6, 1, 12, 0]);
    });
    it('should unshift months correctly', function () {
        expect((0, months_1.default)([2024, 1, 1, 12, 0], -1)).toEqual([2023, 12, 1, 12, 0]);
        expect((0, months_1.default)([2024, 1, 1, 12, 0], -5)).toEqual([2023, 8, 1, 12, 0]);
    });
});
