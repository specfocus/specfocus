"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("@specfocus/spec-comparables/lib");
var _and_1 = require("./$and");
var _not_1 = require("./$not");
var _or_1 = require("./$or");
describe('Condition', function () {
    it('should work', function () {
        var _a, _b, _c, _d, _e;
        var exprEQ = [lib_1.$eq, 9];
        // @ts-expect-error
        var expression = [_not_1.$not, [_or_1.$or, exprEQ, [_and_1.$and, [lib_1.$gt, 50], [lib_1.$lt, 100]]]];
        var condition = [
            // @ts-expect-error
            _not_1.$not, [_or_1.$or, [lib_1.$eq, 9], [_and_1.$and, [lib_1.$gt, 50], [lib_1.$lt, 100]]]
        ];
        var and = (_a = {},
            _a[_and_1.$and] = [
                (_b = {}, _b[lib_1.$gt] = 50, _b[lib_1.$lte] = 50, _b),
                (_c = {}, _c[lib_1.$lt] = 100, _c[lib_1.$gt] = 50, _c),
            ],
            _a);
        var or = (_d = {},
            _d[_or_1.$or] = [
                (_e = {}, _e[lib_1.$eq] = 9, _e),
                and
            ],
            _d);
        var not = {
            $not: or
        };
        expect(not).toBeTruthy();
    });
});
