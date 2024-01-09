"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastDayOfTheMonth = void 0;
var getLastDayOfTheMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};
exports.getLastDayOfTheMonth = getLastDayOfTheMonth;
