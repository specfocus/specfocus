"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var evaluate_1 = __importDefault(require("./evaluate"));
describe('evaluate', function () {
    it('should work', function () {
        expect((0, evaluate_1.default)('2 + 4*(30/5) - 34 + 45/2')).toBe(-30.5);
    });
});
