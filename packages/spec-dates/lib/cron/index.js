"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cron = exports.PREDEFINED = exports.CRON_MACROS = void 0;
var constants_1 = require("./constants");
exports.CRON_MACROS = {
    '@hourly': constants_1.CRON_EVERY_HOUR,
    '@daily': constants_1.CRON_EVERY_DAY_MIDNIGHT,
    '@weekly': constants_1.CRON_EVERY_MONDAY_AT_MIDNIGHT,
    '@monthly': constants_1.CRON_MONTHLY
};
exports.PREDEFINED = {
    '@yearly': '0 0 1 1 *',
    '@monthly': '0 0 1 * *',
    '@weekly': '0 0 * * 0',
    '@daily': '0 0 * * *',
    '@hourly': '0 * * * *'
};
var Cron_1 = require("./Cron");
Object.defineProperty(exports, "Cron", { enumerable: true, get: function () { return Cron_1.Cron; } });
