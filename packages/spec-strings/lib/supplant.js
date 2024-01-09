"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VARIABLE = /{([^{}]*)}/g;
/**
 * http://crockford.com/javascript/
 * @param template
 * @param lookup
 * @example supplant("I'm {age} years old!", { age: 29 })
 * @example supplant("The {a} says {n}, {n}, {n}!", { a: 'cow', n: 'moo' })
 * @returns
 */
var supplant = function (template, lookup) {
    return template.replace(VARIABLE, function (substring, key) {
        var _a = lookup, _b = key, val = _a[_b];
        switch (typeof val) {
            case 'string':
                return val;
            case 'number':
                return String(val);
            case 'bigint':
                return String(val);
            case 'boolean':
                return String(val);
            case 'function':
                return String(val(lookup)());
            case 'object':
                return val === null ? '' : JSON.stringify(val);
            default:
                return substring;
        }
    });
};
exports.default = supplant;
