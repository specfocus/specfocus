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
exports.deepFreeze = exports.freeze = void 0;
var freeze = function (val) {
    if (typeof val !== 'object') {
        return val;
    }
    if (val === null) {
        return null;
    }
    if (Array.isArray(val)) {
        return Object.freeze(val.map(exports.freeze));
    }
    return (0, exports.deepFreeze)(val);
};
exports.freeze = freeze;
var deepFreeze = function (obj) {
    return Object.freeze(Object.entries(obj).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], val = _c[1];
        return Object.assign(acc, (_b = {}, _b[key] = (0, exports.freeze)(val), _b));
    }, {}));
};
exports.deepFreeze = deepFreeze;
