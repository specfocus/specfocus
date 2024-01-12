"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEntries = exports.isEntries = void 0;
var entry_1 = require("./entry");
var isEntries = function (value) {
    if (!Array.isArray(value))
        return false;
    return value.every(entry_1.isEntry);
};
exports.isEntries = isEntries;
var assertEntries = function (value) {
    if (!Array.isArray(value))
        throw new Error("Value of type ".concat(typeof value, " is not an array"));
    for (var idx = 0; idx < value.length; idx++) {
        var entry = value[idx];
        if (!(0, entry_1.isEntry)(entry))
            throw new Error("Entry at index ".concat(idx, " is not an Entry"));
    }
};
exports.assertEntries = assertEntries;
