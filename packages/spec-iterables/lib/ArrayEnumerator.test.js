"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayEnumerator_1 = require("./ArrayEnumerator");
describe('ArrayEnumerator', function () {
    var enumerator = new ArrayEnumerator_1.ArrayEnumerator([1]);
    it('should initialize with undefined current', function () {
        expect(enumerator.current).toBeUndefined();
    });
    it('should have next', function () {
        expect(enumerator.hasNext).toBeTruthy();
    });
    it('should return 1 in the next iteration', function () {
        expect(enumerator.next()).toBe(1);
    });
    it('should not have next', function () {
        expect(enumerator.hasNext).toBeFalsy();
    });
    it('should a next should be undefined', function () {
        expect(enumerator.next()).toBeUndefined();
    });
    it('should return 1 the for prior after reaching beyond last', function () {
        expect(enumerator.prior()).toBe(1);
    });
    it('should reset to undefined', function () {
        expect(enumerator.reset()).toBeUndefined();
    });
    it('should return 1 the next after a reset', function () {
        expect(enumerator.next()).toBe(1);
    });
    it('should not have prior', function () {
        expect(enumerator.hasPrior).toBeFalsy();
    });
    it('should return undefined for prior when we are in the first', function () {
        expect(enumerator.prior()).toBeUndefined();
    });
    it('should first be 1', function () {
        expect(enumerator.first).toBe(1);
    });
    it('should last be 1', function () {
        expect(enumerator.last).toBe(1);
    });
    it('should start be 1', function () {
        expect(enumerator.start()).toBe(1);
    });
    it('should last be 1', function () {
        expect(enumerator.end()).toBe(1);
    });
});
