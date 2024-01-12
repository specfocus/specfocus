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
exports.simplifyObject = void 0;
// TODO: reuse clone with simplify argument
var simplify = function (val) {
    switch (typeof val) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
            return val;
        case 'undefined':
        case 'function':
        case 'symbol':
            return;
        case 'object':
            if (val === null)
                return null;
            if (val instanceof Boolean)
                return val.valueOf();
            if (val instanceof Date)
                return val.valueOf();
            if (val instanceof Number)
                return val.valueOf();
            if (val instanceof String)
                return val.valueOf();
            if (Array.isArray(val))
                return val.map(simplify);
            return (0, exports.simplifyObject)(val);
    }
    ;
};
var simplifyObject = function (src) {
    return Object.entries(src).reduce(function (acc, _a) {
        var _b, _c, _d, _e, _f;
        var _g = __read(_a, 2), key = _g[0], val = _g[1];
        switch (val) {
            case NaN:
                return true;
            case null:
                return true;
        }
        switch (typeof val) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
                return Object.assign(acc, (_b = {}, _b[key] = val, _b));
            case 'undefined':
            case 'function':
            case 'symbol':
                return acc;
            case 'object':
                if (val === null) {
                    return Object.assign(acc, (_c = {}, _c[key] = val, _c));
                }
                if (Array.isArray(val)) {
                    return Object.assign(acc, (_d = {}, _d[key] = val.map(simplify), _d));
                }
                switch (val.constructor) {
                    case Boolean:
                    case Date:
                    case Number:
                    case String:
                        return Object.assign(acc, (_e = {}, _e[key] = val.valueOf(), _e));
                    default:
                        return Object.assign(acc, (_f = {}, _f[key] = simplify(val), _f));
                }
            default:
                throw 'not implemented';
        }
    }, {});
};
exports.simplifyObject = simplifyObject;
exports.default = simplify;
