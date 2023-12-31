"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The question mark is used to specify "no specific value" or "ignore" in either the day of the month or day of the week field.
 * It is an alias for "any value" in one of those fields. The question mark is only used in five-field cron expressions (without the year field).
 */
var hasUndefinedType = function (val) {
    return typeof val === 'undefined';
};
exports.default = hasUndefinedType;
