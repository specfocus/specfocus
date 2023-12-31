"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstDayOfTheWeek = void 0;
var getFirstDayOfTheWeek = function (month, year) {
    return new Date(year, month - 1, 1).getDay();
};
exports.getFirstDayOfTheWeek = getFirstDayOfTheWeek;
