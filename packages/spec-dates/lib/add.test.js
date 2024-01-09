"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('Date automatic operations', function () {
    it('should shift minutes correctly', function () {
        expect(new Date(2024, 0, 1, 1, 70)).toEqual(new Date(2024, 0, 1, 2, 10));
        expect(new Date(2024, 0, 1, 1, 13 * 31 * 24 * 60 + 4)).toEqual(new Date(2025, 1, 7, 1, 4));
        expect(new Date(2024, 0, 1, 1, -(13 * 31 * 24 * 60 + 4))).toEqual(new Date(2022, 10, 24, 0, 56));
    });
});
