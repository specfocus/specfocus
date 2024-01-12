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
function clone(src, seen) {
    var e_1, _a, e_2, _b, e_3, _c;
    // Immutable things - null, undefined, functions, symbols, etc.
    if (!src || typeof src !== 'object')
        return src;
    // Things we've seen already (circular refs)
    if (seen.has(src)) {
        return seen.get(src);
    }
    // Basic pattern for cloning something below here is:
    // 1. Create copy
    // 2. Add it to `seen` immediately, so we recognize it if we see it in
    //    subordinate members
    // 3. clone subordinate members
    var copy;
    if (src.nodeType && 'cloneNode' in src) {
        // DOM Node
        copy = src.cloneNode(true);
        seen.set(src, copy);
    }
    else if (src instanceof Date) {
        // Date
        copy = new Date(src.getTime());
        seen.set(src, copy);
    }
    else if (src instanceof RegExp) {
        // RegExp
        copy = new RegExp(src);
        seen.set(src, copy);
    }
    else if (Array.isArray(src)) {
        // Array
        copy = new Array(src.length);
        seen.set(src, copy);
        for (var i = 0; i < src.length; i++)
            copy[i] = clone(src[i], seen);
    }
    else if (src instanceof Map) {
        // Map
        copy = new Map();
        seen.set(src, copy);
        try {
            for (var _d = __values(Array.from(src.entries())), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 2), k = _f[0], v = _f[1];
                copy.set(k, clone(v, seen));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else if (src instanceof Set) {
        // Set
        copy = new Set();
        seen.set(src, copy);
        try {
            for (var _g = __values(Array.from(src)), _h = _g.next(); !_h.done; _h = _g.next()) {
                var v = _h.value;
                copy.add(clone(v, seen));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    else if (src instanceof Object) {
        // Object
        copy = {};
        seen.set(src, copy);
        try {
            for (var _j = __values(Object.entries(src)), _k = _j.next(); !_k.done; _k = _j.next()) {
                var _l = __read(_k.value, 2), k = _l[0], v = _l[1];
                copy[k] = clone(v, seen);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    else {
        // Unrecognized thing.  It's better to throw here than to return `src`, as
        // we don't know whether src needs to be deep-copied here.
        throw Error("Unable to clone ".concat(src));
    }
    return copy;
}
function default_1(src) {
    return clone(src, new Map());
}
exports.default = default_1;
