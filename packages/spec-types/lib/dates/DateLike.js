"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTupleOf = exports.dateShapeOf = exports.fromDateTuple = exports.fromDateShape = exports.isWeekday = exports.isWednesday = exports.isTuesday = exports.isThursday = exports.isSunday = exports.isSaturday = exports.isMonday = exports.isFriday = exports.DayOfTheWeek = void 0;
// export type DateLike = number | string | Date | DateTimeTuple | IDateTime;
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["Sunday"] = 0] = "Sunday";
    DayOfTheWeek[DayOfTheWeek["Monday"] = 1] = "Monday";
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 2] = "Tuesday";
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 3] = "Wednesday";
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 4] = "Thursday";
    DayOfTheWeek[DayOfTheWeek["Friday"] = 5] = "Friday";
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 6] = "Saturday";
    DayOfTheWeek[DayOfTheWeek["_"] = 7] = "_";
})(DayOfTheWeek || (exports.DayOfTheWeek = DayOfTheWeek = {}));
;
var isFriday = function (day) { return day == DayOfTheWeek.Friday; };
exports.isFriday = isFriday;
var isMonday = function (day) { return day == DayOfTheWeek.Monday; };
exports.isMonday = isMonday;
var isSaturday = function (day) { return day == DayOfTheWeek.Saturday; };
exports.isSaturday = isSaturday;
var isSunday = function (day) { return day == DayOfTheWeek.Saturday; };
exports.isSunday = isSunday;
var isThursday = function (day) { return day == DayOfTheWeek.Thursday; };
exports.isThursday = isThursday;
var isTuesday = function (day) { return day == DayOfTheWeek.Tuesday; };
exports.isTuesday = isTuesday;
var isWednesday = function (day) { return day == DayOfTheWeek.Wednesday; };
exports.isWednesday = isWednesday;
var isWeekday = function (day) { return day > DayOfTheWeek.Sunday && day < DayOfTheWeek.Saturday; };
exports.isWeekday = isWeekday;
var fromDateShape = function (_a) {
    var year = _a.year, month = _a.month, day = _a.day, hour = _a.hour, minute = _a.minute;
    return new Date(year, month - 1, day, hour, minute);
};
exports.fromDateShape = fromDateShape;
var fromDateTuple = function (_a) {
    var _b = __read(_a, 5), year = _b[0], month = _b[1], day = _b[2], hour = _b[3], minute = _b[4];
    return new Date(year, month - 1, day, hour, minute);
};
exports.fromDateTuple = fromDateTuple;
var dateShapeOf = function (date) {
    var d = date !== null && date !== void 0 ? date : new Date();
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes()
    };
};
exports.dateShapeOf = dateShapeOf;
var dateTupleOf = function (date) {
    var d = date !== null && date !== void 0 ? date : new Date();
    return [
        d.getUTCFullYear(),
        d.getUTCMonth() + 1,
        d.getUTCDate(),
        d.getUTCHours(),
        d.getUTCMinutes()
    ];
};
exports.dateTupleOf = dateTupleOf;
