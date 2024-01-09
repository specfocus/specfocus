"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetics_1 = require("./arithmetics");
var parse_1 = __importDefault(require("./parse"));
describe('evaluate', function () {
    it('should work', function () {
        expect((0, parse_1.default)('2 + 4*(30-5) - 34 + 45/2')).toEqual([arithmetics_1.$add, [arithmetics_1.$sub, [arithmetics_1.$add, 2, [arithmetics_1.$mul, 4, [arithmetics_1.$sub, 30, 5]]], 34], [arithmetics_1.$div, 45, 2]]);
    });
    it('should extract constants', function () {
        expect((0, parse_1.default)('2 * pi + 3 * e')).toEqual([arithmetics_1.$add, [arithmetics_1.$mul, 2, 'pi'], [arithmetics_1.$mul, 3, 'e']]);
    });
});
