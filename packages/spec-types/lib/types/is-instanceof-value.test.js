"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_instanceof_value_1 = require("./is-instanceof-value");
describe('values', function () {
    describe('isValue', function () {
        it('should fail if Record', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)({})).toBe(false);
        });
        it('should fail if new Object', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)(new Object)).toBe(false);
        });
        it.skip('should fail if new Date', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)(new Date)).toBe(false);
        });
        it('should fail if Array', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)([])).toBe(false);
        });
        it('should fail if undefined', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)(undefined)).toBe(false);
        });
        it('should fail if null', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)(null)).toBe(false);
        });
        it('should succeed if number', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)(1)).toBe(false);
            expect((0, is_instanceof_value_1.isInstanceOfValue)(new Number(1))).toBe(true);
        });
        it('should succees if string', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)('')).toBe(false);
            expect((0, is_instanceof_value_1.isInstanceOfValue)(new String(''))).toBe(true);
        });
        it('should succeed if boolean', function () {
            expect((0, is_instanceof_value_1.isInstanceOfValue)(true)).toBe(false);
            expect((0, is_instanceof_value_1.isInstanceOfValue)(false)).toBe(false);
            expect((0, is_instanceof_value_1.isInstanceOfValue)(new Boolean(true))).toBe(true);
            expect((0, is_instanceof_value_1.isInstanceOfValue)(new Boolean(false))).toBe(true);
        });
    });
});
