"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$DateTime = exports.$Date = exports.datetime = exports.date = exports.$Second = exports.$Years = exports.$Year = exports.$Months = exports.$Month = exports.$Minutes = exports.$Minute = exports.$Hours = exports.$Hour = exports.$Days = exports.$Day = void 0;
var comparisons_1 = require(@specfocus / spec - comparables / lib /);
var SpecType_number__class_1 = require("../prototypes/SpecType.number.$class");
var verifications_1 = require("@specfocus/spec-verifications/lib");
exports.$Day = ['number', [verifications_1.$and, [SpecType_number__class_1.$class, 'Integer'], [comparisons_1.$gte, 0], [comparisons_1.$lte, 31]]];
exports.$Days = ['number'];
exports.$Hour = ['number', [verifications_1.$and, [SpecType_number__class_1.$class, 'Integer'], [comparisons_1.$gte, 0], [comparisons_1.$lt, 24]]];
exports.$Hours = ['number'];
exports.$Minute = ['number', [verifications_1.$and, [SpecType_number__class_1.$class, 'Integer'], [comparisons_1.$gte, 0], [comparisons_1.$lt, 60]]];
exports.$Minutes = ['number'];
exports.$Month = ['number', [verifications_1.$and, [SpecType_number__class_1.$class, 'Integer'], [comparisons_1.$gte, 1], [comparisons_1.$lte, 12]]];
exports.$Months = ['number'];
exports.$Year = ['number', [verifications_1.$and, [SpecType_number__class_1.$class, 'Integer'], [comparisons_1.$gte, 0], [comparisons_1.$lt, 10000]]];
exports.$Years = ['number'];
exports.$Second = ['number', [verifications_1.$and, [SpecType_number__class_1.$class, 'Integer'], [comparisons_1.$gte, 0], [comparisons_1.$lt, 60]]];
var date = function (date) {
    var d = date !== null && date !== void 0 ? date : new Date();
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate()
    };
};
exports.date = date;
var datetime = function (date) {
    var d = date !== null && date !== void 0 ? date : new Date();
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes()
    };
};
exports.datetime = datetime;
exports.$Date = {
    day: { $type: 'number', $spec: exports.$Day },
    month: { $type: 'number', $spec: exports.$Month },
    year: { $type: 'number', $spec: exports.$Year },
};
exports.$DateTime = {
    minute: { $type: 'number', $spec: exports.$Minute },
    hour: { $type: 'number', $spec: exports.$Hour },
    day: { $type: 'number', $spec: exports.$Day },
    month: { $type: 'number', $spec: exports.$Month },
    year: { $type: 'number', $spec: exports.$Year }
};
