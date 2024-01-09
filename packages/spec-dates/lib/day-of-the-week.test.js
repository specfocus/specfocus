"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var day_of_the_week_1 = __importStar(require("./day-of-the-week"));
var first_day_of_the_week_1 = require("./first-day-of-the-week");
describe('dayOfTheWeek', function () {
    it('should provide the day for July 29, 2023 with was Monday', function () {
        expect((0, day_of_the_week_1.default)(29, (0, first_day_of_the_week_1.getFirstDayOfTheWeek)(7, 2023))).toBe((0, day_of_the_week_1.getDayOfTheWeek)(29, 7, 2023));
    });
    it('should provide the day for July 30, 2023 with was Tuesday', function () {
        expect((0, day_of_the_week_1.default)(30, (0, first_day_of_the_week_1.getFirstDayOfTheWeek)(7, 2023))).toBe((0, day_of_the_week_1.getDayOfTheWeek)(30, 7, 2023));
    });
});
describe('getDayOfTheWeek', function () {
    it('should provide the day for July 29, 2023 with was Monday', function () {
        expect((0, day_of_the_week_1.getDayOfTheWeek)(29, 7, 2023)).toBe(6);
    });
    it('should provide the day for July 30, 2023 with was Tuesday', function () {
        expect((0, day_of_the_week_1.getDayOfTheWeek)(30, 7, 2023)).toBe(0);
    });
});
