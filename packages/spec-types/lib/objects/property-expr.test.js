"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var expr = __importStar(require("./property-expr"));
var compiler = __importStar(require("./compiler"));
var root = {};
function runSetterGetterTests(_a) {
    var setter = _a.setter, getter = _a.getter;
    var obj = {
        foo: {
            bar: ['baz', 'bux'],
            fux: 5,
            '00N40000002S5U0': 1,
            N40000002S5U0: 2,
            'FE43-D880-21AE': 3,
        },
    };
    // -- Getters --
    expect(getter('foo.fux')(obj)).toBe(5);
    expect(getter('foo.bar')(obj)).toEqual(['baz', 'bux']);
    expect(getter('foo.bar[1]')(obj)).toBe('bux');
    expect(getter('["foo"]["bar"][1]')(obj)).toBe('bux');
    expect(getter('[1]')([1, 'bux'])).toBe('bux');
    // safe access
    expect(getter('foo.fux', true)(obj)).toBe(5);
    expect(getter('foo.bar', true)(obj)).toEqual(['baz', 'bux']);
    expect(getter('foo.bar[1]', true)(obj)).toBe('bux');
    expect(getter('["foo"]["bar"][1]', true)(obj)).toBe('bux');
    expect(getter('[1]', true)([1, 'bux'])).toBe('bux');
    expect(getter('foo.gih.df[0]', true)(obj)).toBe(undefined);
    expect(getter('["fr"]["bzr"][1]', true)(obj)).toBe(undefined);
    expect(getter('foo["00N40000002S5U0"]', true)(obj)).toBe(1);
    expect(getter('foo.00N40000002S5U0', true)(obj)).toBe(1);
    expect(getter('foo["N40000002S5U0"]', true)(obj)).toBe(2);
    expect(getter('foo.N40000002S5U0', true)(obj)).toBe(2);
    expect(getter('foo["FE43-D880-21AE"]', true)(obj)).toBe(3);
    expect(getter('foo.FE43-D880-21AE', true)(obj)).toBe(3);
    // -- Setters --
    setter('foo.fux')(obj, 10);
    expect(obj.foo.fux).toBe(10);
    setter('foo.bar[1]')(obj, 'bot');
    expect(obj.foo.bar[1]).toBe('bot');
    setter('[\'foo\']["bar"][1]')(obj, 'baz');
    expect(obj.foo.bar[1]).toBe('baz');
    ['__proto__', 'constructor', 'prototype'].forEach(function (keyToTest) {
        setter("".concat(keyToTest, ".a"))({}, 'newValue');
        expect(root.a).not.toBe('newValue');
        var b = 'oldValue';
        expect(b).toBe('oldValue');
        expect(root.b).not.toBe('newValue');
        setter("".concat(keyToTest, ".b"))({}, 'newValue');
        expect(b).toBe('oldValue');
        expect(root.b).not.toBe('newValue');
        expect(root.b).toBe(undefined);
    });
}
describe('property-expr', function () {
    describe('Cache', function () {
        var cache = new expr.Cache(3);
        it('should succeed', function () {
            expect(cache._size).toBe(0);
            expect(cache.set('a', expect)).toBe(expect);
            expect(cache.get('a')).toBe(expect);
            expect(cache._size).toBe(1);
            expect(cache.set('b', 123)).toBe(123);
            expect(cache.get('b')).toBe(123);
            expect(cache.set('b', 321)).toBe(321);
            expect(cache.get('b')).toBe(321);
            expect(cache.set('c', null)).toBe(null);
            expect(cache.get('c')).toBe(null);
            expect(cache._size).toBe(3);
            expect(cache.set('d', 444)).toBe(444);
            expect(cache._size).toBe(1);
            cache.clear();
            expect(cache._size).toBe(0);
            expect(cache.get('a')).toBe(undefined);
        });
    });
    describe('split', function () {
        var parts = expr.split('foo.baz["bar"][1]');
        it('should succeed', function () {
            expect(parts.length).toBe(4);
        });
    });
    describe('join', function () {
        var parts = expr.split('foo.baz["bar"][1]');
        it('should succeed', function () {
            expect(expr.join(['0', 'baz', '"bar"', '1'])).toBe('[0].baz["bar"][1]');
            expect(expr.join(parts)).toBe('foo.baz["bar"][1]');
        });
    });
    describe('forEach', function () {
        var count = 0;
        it('should succeed', function () {
            expr.forEach('foo.baz["bar"][1]', function (part, isBracket, isArray, idx) {
                count = idx;
                switch (idx) {
                    case 0:
                        expect(part).toBe('foo');
                        expect(isBracket).toBe(false);
                        expect(isArray).toBe(false);
                        break;
                    case 1:
                        expect(part).toBe('baz');
                        expect(isBracket).toBe(false);
                        expect(isArray).toBe(false);
                        break;
                    case 2:
                        expect(part).toBe('"bar"');
                        expect(isBracket).toBe(true);
                        expect(isArray).toBe(false);
                        break;
                    case 3:
                        expect(part).toBe('1');
                        expect(isBracket).toBe(false);
                        expect(isArray).toBe(true);
                        break;
                }
            });
            expect(count).toEqual(3);
        });
    });
    describe('normalizePath', function () {
        it('should succeed', function () {
            expect(expr.normalizePath('foo[ " bux\'s " ].bar["baz"][ 9 ][ \' s \' ]')).toEqual(['foo', " bux's ", 'bar', 'baz', '9', ' s ']);
        });
    });
    describe('expr setter/getter', function () {
        it('should succeed', function () { return runSetterGetterTests(expr); });
    });
    describe('compiler setter/getter', function () {
        it('should succeed', function () { return runSetterGetterTests(compiler); });
    });
});
