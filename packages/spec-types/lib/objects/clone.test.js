"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clone_1 = __importDefault(require("./clone"));
it('Returns equal data for Null/undefined/functions/etc', function () {
    // Null
    expect((0, clone_1.default)(null)).toBeNull();
    // Undefined
    expect((0, clone_1.default)()).toBeUndefined();
    // Function
    var func = function () { };
    expect((0, clone_1.default)(func)).toBe(func);
    // Etc: numbers and string
    expect((0, clone_1.default)(5)).toBe(5);
    expect((0, clone_1.default)('string')).toBe('string');
    expect((0, clone_1.default)(false)).toBe(false);
    expect((0, clone_1.default)(true)).toBe(true);
});
it('Returns equal data for Date', function () {
    var date = '2012-01-26T13:51:50.417Z';
    expect((0, clone_1.default)(new Date(date))).toEqual(new Date(date));
});
it('Returns equal data for RegExp', function () {
    var regexp = /^$/;
    expect((0, clone_1.default)(regexp)).toEqual(regexp);
});
it('Returns equal data for Arrays', function () {
    var tests = [
        [5, 5, 8, 'string'],
        [5, 5, 8, { a: 'string' }, [7, 9]] // Attached
    ];
    tests.forEach(function (src) {
        var copy = (0, clone_1.default)(src);
        expect(src).toEqual(copy);
    });
});
it('Returns equal data for Object', function () {
    var src = {
        a: 5,
        b: 6
    };
    var copy = (0, clone_1.default)(src);
    expect(src).toEqual(copy);
});
it('Returns equal data for Map', function () {
    var src = new Map([['foo', 'bar']]);
    var copy = (0, clone_1.default)(src);
    expect(src).toEqual(copy);
});
it('Returns equal data for Set', function () {
    var src = new Set(['foo', 'bar']);
    var copy = (0, clone_1.default)(src);
    expect(src).toEqual(copy);
});
test("Doesn't clone function", function () {
    var src = function b() { };
    var copy = (0, clone_1.default)(src);
    expect(copy).toBe(src);
});
test('Clones Date object', function () {
    var src = new Date();
    var copy = (0, clone_1.default)(src);
    copy.setHours(src.getHours() + 1); // +1 hour
    expect(copy.getHours()).not.toBe(src.getHours());
});
test('Clones RegExp', function () {
    var src = new RegExp('');
    var copy = (0, clone_1.default)(src);
    expect(copy).not.toBe(src);
});
test('Clones Array with nested data', function () {
    var src = [1, 'hello', [null, 'lalka']];
    var copy = (0, clone_1.default)(src);
    copy[2][0] = 'mutated';
    expect(src[2][0]).toBeNull();
    copy = copy.map(function () { return 'mutated'; });
    expect(src.every(function (i) { return i !== 'mutated'; })).toBeTruthy();
});
test('Clones nested Arrays', function () {
    var src = [];
    src.push(src, 2, src, 3);
    var copy = (0, clone_1.default)(src);
    expect(copy[0]).toEqual(copy);
    expect(src[0]).toEqual(src);
    expect(copy[0]).not.toBe(src[0]);
});
test('Clones nested Objects', function () {
    var src = { a: 1, b: { c: 1, d: [1, 2, 3] } };
    var srcValues = { a: 1, b: { c: 1, d: [1, 2, 3] } };
    var copy = (0, clone_1.default)(src);
    copy.a = 2;
    copy.b.c = 'asdf';
    copy.b.d[1] = 4;
    expect(src).toEqual(srcValues);
});
it('clones circular data', function () {
    var a = { foo: 'bar' };
    a.baz = a;
    var b = { foo: 'bar' };
    b.baz = b;
    expect((0, clone_1.default)(a)).toEqual(b);
});
it('Clones Map', function () {
    var src = new Map([['foo', 'bar']]);
    var copy = (0, clone_1.default)(src);
    copy.set('foo', 'baz');
    expect(src.get('foo')).toEqual('bar');
});
it('Clones Set', function () {
    var src = new Set(['foo', 'bar']);
    var copy = (0, clone_1.default)(src);
    copy.add('baz');
    expect(src.has('baz')).toBeFalsy();
});
