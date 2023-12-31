"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _nin_1 = require("./$nin");
describe('$nin', function () {
    var errors = [];
    var error = function (e) { return errors.push(e); };
    it('returns true when the value is not in the collection', function () {
        var _a;
        var errors = [];
        expect((0, _nin_1.checkNotIn)(1, (_a = {}, _a[_nin_1.$nin] = [2, 3], _a), error)).toBe(true);
    });
    it('returns true when the value is not in the collection (tagged)', function () {
        var errors = [];
        expect((0, _nin_1.checkNotIn)(1, [_nin_1.$nin, [2, 3]], error)).toBe(true);
    });
});
