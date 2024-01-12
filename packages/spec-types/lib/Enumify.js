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
var Enumify = /** @class */ (function () {
    function Enumify() {
    }
    Enumify[Symbol.iterator] = function () {
        return this.items[Symbol.iterator]();
    };
    Enumify.close = function () {
        var e_1, _a;
        if (this._isEnumClosed)
            return; // Prevent multiple invocations
        try {
            for (var _b = __values(Object.entries(this)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], item = _d[1];
                if (item instanceof Enumify) {
                    item.value = key;
                    item.index = this.items.length;
                    this.values.push(key);
                    this.items.push(item);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Prevent further modification
        this._isEnumClosed = true;
        Object.freeze(this);
        Object.freeze(this.values);
        Object.freeze(this.items);
    };
    /** Retrieve enum entry by value */
    Enumify.itemOf = function (value) {
        var index = this.values.indexOf(value);
        return index >= 0 ? this.items[index] : undefined;
    };
    /** Use case: parsing an array of enum values */
    Enumify.itemsOf = function (values) {
        var _this = this;
        return values
            .map(function (value) { return _this.itemOf(value); })
            .filter(function (item) { return item !== undefined; });
    };
    Enumify.prototype.toString = function () {
        return "".concat(this.constructor.name, ".").concat(this.value);
    };
    Enumify.values = [];
    Enumify.items = [];
    Enumify.seal = function (target) { return target.close(); };
    Enumify._isEnumClosed = false;
    return Enumify;
}());
exports.Enumify = Enumify;
