"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleEntries = void 0;
var ModuleEntries = /** @class */ (function () {
    function ModuleEntries() {
        this.entries = [];
    }
    ModuleEntries.prototype.add = function (entry) {
        this.entries.push(entry);
    };
    ModuleEntries.prototype.get = function () {
        return this.entries;
    };
    ModuleEntries.prototype.clear = function () {
        this.entries = [];
    };
    return ModuleEntries;
}());
exports.ModuleEntries = ModuleEntries;
