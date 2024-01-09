"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEntries = void 0;
var entry_1 = require("./entry");
var isEntries = function (value) {
    if (!Array.isArray(value))
        return false;
    return value.every(entry_1.isEntry);
};
exports.isEntries = isEntries;
