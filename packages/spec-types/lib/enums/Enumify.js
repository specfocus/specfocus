"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
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
exports.Enumify = void 0;
// https://2ality.com/2020/01/enum-pattern.html
var Enumify = /** @class */ (function () {
    function Enumify() {
    }
    Enumify.end = function () {
        var e_1, _a;
        var values = [];
        var items = [];
        try {
            // Traverse the enum entries
            for (var _b = __values(Object.entries(this)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], item = _d[1];
                values.push(key);
                item.value = key;
                item.index = items.length;
                items.push(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Important: only add more static properties *after* processing the enum entries
        this.values = values;
        this.items = items;
        // TODO: prevent instantiation now. Freeze `this`?
        // Object.freeze(this);
    };
    /** Use case: parsing enum values */
    Enumify.itemOf = function (value) {
        var index = this.values.indexOf(value);
        if (index >= 0) {
            return this.items[index];
        }
        return undefined;
    };
    Enumify[Symbol.iterator] = function () {
        return this.items[Symbol.iterator]();
    };
    Enumify.prototype.toString = function () {
        return this.constructor.name + '.' + this.value;
    };
    return Enumify;
}());
exports.Enumify = Enumify;
