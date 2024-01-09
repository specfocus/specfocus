"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supplant_1 = __importDefault(require("./supplant"));
describe('supplant template', function () {
    it('should work', function () {
        expect((0, supplant_1.default)("I'm {age} years old!", { age: 29 })).toBe("I'm 29 years old!");
    });
});
