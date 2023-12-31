"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _in_1 = require("./$in");
describe('$in', function () {
    var errors = [];
    var error = function (e) { return errors.push(e); };
    it('returns true when the value is in the collection', function () {
        var _a;
        var errors = [];
        expect((0, _in_1.checkIn)(1, (_a = {}, _a[_in_1.$in] = [1, 2, 3], _a), error)).toBe(true);
    });
    it('returns true when the value is in the collection (tagged)', function () {
        var errors = [];
        expect((0, _in_1.checkIn)(1, [_in_1.$in, [1, 2, 3]], error)).toBe(true);
    });
});
