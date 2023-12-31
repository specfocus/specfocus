"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comparisons_1 = require("../comparisons");
var _and_1 = require("./$and");
var _not_1 = require("./$not");
var _or_1 = require("./$or");
describe('Condition', function () {
    it('should work', function () {
        var _a, _b, _c, _d, _e;
        var exprEQ = [comparisons_1.$eq, 9];
        var expression = [_not_1.$not, [_or_1.$or, exprEQ, [_and_1.$and, [comparisons_1.$gt, 50], [comparisons_1.$lt, 100]]]];
        var condition = [
            _not_1.$not, [_or_1.$or, [comparisons_1.$eq, 9], [_and_1.$and, [comparisons_1.$gt, 50], [comparisons_1.$lt, 100]]]
        ];
        var and = (_a = {},
            _a[_and_1.$and] = [
                (_b = {}, _b[comparisons_1.$gt] = 50, _b[comparisons_1.$lte] = 50, _b),
                (_c = {}, _c[comparisons_1.$lt] = 100, _c[comparisons_1.$gt] = 50, _c),
            ],
            _a);
        var or = (_d = {},
            _d[_or_1.$or] = [
                (_e = {}, _e[comparisons_1.$eq] = 9, _e),
                and
            ],
            _d);
        var not = {
            $not: or
        };
        expect(not).toBeTruthy();
    });
});
