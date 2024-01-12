"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simple_1 = require("./simple");
describe('objects', function () {
    describe('isSimpleObject', function () {
        it('should succeed if Record', function () {
            expect((0, simple_1.isSimpleObject)({})).toBe(true);
        });
        it('should succeed if new Object', function () {
            expect((0, simple_1.isSimpleObject)(new Object)).toBe(true);
        });
        it('should fail if contains Function', function () {
            expect((0, simple_1.isSimpleObject)({ fn: function () { } })).toBe(false);
        });
        it('should succeed if contains undefined', function () {
            expect((0, simple_1.isSimpleObject)({ is: undefined })).toBe(true);
        });
        it('should succeed if contains null', function () {
            expect((0, simple_1.isSimpleObject)({ nill: null })).toBe(true);
        });
        it('should succeed if contains NaN', function () {
            expect((0, simple_1.isSimpleObject)({ nill: 1 / 0 })).toBe(true);
        });
        it('should succeed if contains simple array', function () {
            expect((0, simple_1.isSimpleObject)({ arr: [] })).toBe(true);
        });
        it('should succeed if contains date', function () {
            expect((0, simple_1.isSimpleObject)({ date: new Date })).toBe(true);
        });
        it('should succeed if contains number', function () {
            expect((0, simple_1.isSimpleObject)({ num: 1 })).toBe(true);
            expect((0, simple_1.isSimpleObject)({ num: new Number(1) })).toBe(true);
        });
        it('should succeed if contains string', function () {
            expect((0, simple_1.isSimpleObject)({ s: '' })).toBe(true);
            expect((0, simple_1.isSimpleObject)({ s: new String('') })).toBe(true);
        });
        it('should succeed if contains boolean', function () {
            expect((0, simple_1.isSimpleObject)({ true: true })).toBe(true);
            expect((0, simple_1.isSimpleObject)({ false: false })).toBe(true);
            expect((0, simple_1.isSimpleObject)({ true: new Boolean(true) })).toBe(true);
            expect((0, simple_1.isSimpleObject)({ false: new Boolean(false) })).toBe(true);
        });
    });
});
