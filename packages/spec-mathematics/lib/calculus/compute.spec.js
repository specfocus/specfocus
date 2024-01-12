"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetics_1 = require("./arithmetics");
var compute_1 = __importDefault(require("./compute"));
var constants_1 = __importDefault(require("./constants"));
describe('binary arithmetics', function () {
    it('$add', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$add, 2, 3], {}, errors)).toBe(2 + 3);
        expect(errors.length).toBe(0);
    });
    it('$atan2', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$atan2, 2, 3], {}, errors)).toBe(Math.atan2(2, 3));
        expect(errors.length).toBe(0);
    });
    it('$div', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$div, 2, 3], {}, errors)).toBe(2 / 3);
        expect(errors.length).toBe(0);
    });
    it('$imul', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$imul, 2, 3], {}, errors)).toBe(2 * 3);
        expect(errors.length).toBe(0);
    });
    it('$mod', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$mod, 2, 3], {}, errors)).toBe(2);
        expect(errors.length).toBe(0);
    });
    it('$mul', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$mul, 2, 3], {}, errors)).toBe(2 * 3);
        expect(errors.length).toBe(0);
    });
    it('$pow', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$pow, 2, 3], {}, errors)).toBe(8);
        expect(errors.length).toBe(0);
    });
    it('$sub', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$sub, 2, 3], {}, errors)).toBe(-1);
        expect(errors.length).toBe(0);
    });
});
describe('unary arithmetics', function () {
    it('$abs', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$abs, -2], {}, errors)).toBe(Math.abs(-2));
        expect(errors.length).toBe(0);
    });
    it('$acos', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$acos, 2], {}, errors)).toBe(Math.acos(2));
        expect(errors.length).toBe(0);
    });
    it('$acosh', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$acosh, 2], {}, errors)).toBe(Math.acosh(2));
        expect(errors.length).toBe(0);
    });
    it('$asin', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$asin, 2], {}, errors)).toBe(Math.asin(2));
        expect(errors.length).toBe(0);
    });
    it('$asinh', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$asinh, 2], {}, errors)).toBe(Math.asinh(2));
        expect(errors.length).toBe(0);
    });
    it('$atan', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$atan, 2], {}, errors)).toBe(Math.atan(2));
        expect(errors.length).toBe(0);
    });
    it('$atanh', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$atanh, 2], {}, errors)).toBe(Math.atanh(2));
        expect(errors.length).toBe(0);
    });
    it('$avg', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$avg, [2, 3, 4]], {}, errors)).toBe(3);
        expect(errors.length).toBe(0);
    });
    it('$cbrt', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$cbrt, 2], {}, errors)).toBe(Math.cbrt(2));
        expect(errors.length).toBe(0);
    });
    it('$clz32', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$clz32, 2], {}, errors)).toBe(Math.clz32(2));
        expect(errors.length).toBe(0);
    });
    it('$ceil', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$ceil, 2.2], {}, errors)).toBe(3);
        expect(errors.length).toBe(0);
    });
    it('$cos', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$cos, 2], {}, errors)).toBe(Math.cos(2));
        expect(errors.length).toBe(0);
    });
    it('$cosh', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$cosh, 2], {}, errors)).toBe(Math.cosh(2));
        expect(errors.length).toBe(0);
    });
    it('$dec', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$dec, 2], {}, errors)).toBe(1);
        expect(errors.length).toBe(0);
    });
    it('$exp', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$exp, 2], {}, errors)).toBe(Math.exp(2));
        expect(errors.length).toBe(0);
    });
    it('$expm1', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$expm1, 2], {}, errors)).toBe(Math.expm1(2));
        expect(errors.length).toBe(0);
    });
    it('$floor', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$floor, 2.9], {}, errors)).toBe(2);
        expect(errors.length).toBe(0);
    });
    it('$fround', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$fround, -2], {}, errors)).toBe(Math.fround(-2));
        expect(errors.length).toBe(0);
    });
    it('$hypot', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$hypot, 2], {}, errors)).toBe(Math.hypot(2));
        expect(errors.length).toBe(0);
    });
    it('$inc', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$inc, 2], {}, errors)).toBe(2 + 1);
        expect(errors.length).toBe(0);
    });
    it('$log', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$log, 2], {}, errors)).toBe(Math.log(2));
        expect(errors.length).toBe(0);
    });
    it('$log10', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$log10, 2], {}, errors)).toBe(Math.log10(2));
        expect(errors.length).toBe(0);
    });
    it('$log1p', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$log1p, 2], {}, errors)).toBe(Math.log1p(2));
        expect(errors.length).toBe(0);
    });
    it('$log2', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$log2, 2], {}, errors)).toBe(Math.log2(2));
        expect(errors.length).toBe(0);
    });
    it('$max', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$max, [2, 3, 4]], {}, errors)).toBe(Math.max(2, 3, 4));
        expect(errors.length).toBe(0);
    });
    it('$min', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$min, [2, 3, 4]], {}, errors)).toBe(Math.min(2, 3, 4));
        expect(errors.length).toBe(0);
    });
    it('$neg', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$neg, 2], {}, errors)).toBe(-2);
        expect(errors.length).toBe(0);
    });
    it('$round', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$round, 2.2], {}, errors)).toBe(Math.round(2.2));
        expect(errors.length).toBe(0);
    });
    it('$sign', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$sign, -2], {}, errors)).toBe(Math.sign(-2));
        expect(errors.length).toBe(0);
    });
    it('$sin', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$sin, 2], {}, errors)).toBe(Math.sin(2));
        expect(errors.length).toBe(0);
    });
    it('$sinh', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$sinh, 2], {}, errors)).toBe(Math.sinh(2));
        expect(errors.length).toBe(0);
    });
    it('$sqrt', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$sqrt, 2], {}, errors)).toBe(Math.sqrt(2));
        expect(errors.length).toBe(0);
    });
    it('$sum', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$sum, [2, 3, 4]], {}, errors)).toBe(9);
        expect(errors.length).toBe(0);
    });
    it('$tan', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$tan, 2], {}, errors)).toBe(Math.tan(2));
        expect(errors.length).toBe(0);
    });
    it('$tanh', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$tanh, 2], {}, errors)).toBe(Math.tanh(2));
        expect(errors.length).toBe(0);
    });
    it('$trunc', function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$trunc, 2.9], {}, errors)).toBe(Math.trunc(2.9));
        expect(errors.length).toBe(0);
    });
});
describe('compute with constants', function () {
    it("[$mul, 2, pi]", function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$mul, 2, 'pi'], constants_1.default, errors)).toBe(2 * Math.PI);
        expect(errors.length).toBe(0);
    });
    it("[$add, [$mul, 2, 'pi'], [$mul, 3, 'e']]", function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$add, [arithmetics_1.$mul, 2, 'pi'], [arithmetics_1.$mul, 3, 'e']], constants_1.default, errors)).toBe(2 * Math.PI + 3 * Math.E);
        expect(errors.length).toBe(0);
    });
});
describe('compute with expressions', function () {
    it("[$div, '2 * pi', 2]", function () {
        var errors = [];
        expect((0, compute_1.default)([arithmetics_1.$div, '2 * pi', 2], constants_1.default, errors)).toBe(Math.PI);
        expect(errors.length).toBe(0);
    });
});
