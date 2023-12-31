"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_valid_object_1 = __importDefault(require("./is-valid-object"));
describe('objects', function () {
    describe('isObject', function () {
        it('should succeed if Record', function () {
            expect((0, is_valid_object_1.default)({})).toBe(true);
        });
        it('should succeed if new Object', function () {
            expect((0, is_valid_object_1.default)(new Object)).toBe(true);
        });
        it('should fail if new Date', function () {
            expect((0, is_valid_object_1.default)(new Date)).toBe(false);
        });
        it('should fail if undefined', function () {
            expect((0, is_valid_object_1.default)(undefined)).toBe(false);
        });
        it('should fail if null', function () {
            expect((0, is_valid_object_1.default)(null)).toBe(false);
        });
        it('should fail if Array', function () {
            expect((0, is_valid_object_1.default)([])).toBe(false);
        });
        it('should fail if number', function () {
            expect((0, is_valid_object_1.default)(1)).toBe(false);
            expect((0, is_valid_object_1.default)(new Number(1))).toBe(false);
        });
        it('should fail if string', function () {
            expect((0, is_valid_object_1.default)('')).toBe(false);
        });
        it('should fail if boolean', function () {
            expect((0, is_valid_object_1.default)(true)).toBe(false);
            expect((0, is_valid_object_1.default)(false)).toBe(false);
            expect((0, is_valid_object_1.default)(new Boolean(true))).toBe(false);
            expect((0, is_valid_object_1.default)(new Boolean(false))).toBe(false);
        });
        it('should fail if function', function () {
            expect((0, is_valid_object_1.default)(function () { })).toBe(false);
        });
    });
});
