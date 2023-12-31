"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpecType_decimal_parse_1 = __importDefault(require("./SpecType.decimal.parse"));
describe('parseDecimal', function () {
    it('should correctly parse a string with commas and decimals', function () {
        var input = "1,000,000.00";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(1000000.00);
        expect(result.precision).toBe(9);
        expect(result.scale).toBe(2);
    });
    it('should correctly parse a string without commas and decimals', function () {
        var input = "1000";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(1000);
        expect(result.precision).toBe(4);
        expect(result.scale).toBe(0);
    });
    it('should correctly parse a string with only commas', function () {
        var input = "1,000,000";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(1000000);
        expect(result.precision).toBe(7);
        expect(result.scale).toBe(0);
        expect(result.prefix).toBeUndefined();
        expect(result.suffix).toBeUndefined();
    });
    it('should correctly parse a string with only decimals', function () {
        var input = "0.001";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(0.001);
        expect(result.precision).toBe(4);
        expect(result.scale).toBe(3);
        expect(result.prefix).toBeUndefined();
        expect(result.suffix).toBeUndefined();
    });
});
describe('parseDecimal with prefixes and suffixes', function () {
    it('should correctly parse a string with a prefix', function () {
        var input = "$1,000.00";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(1000.00);
        expect(result.precision).toBe(6);
        expect(result.scale).toBe(2);
        expect(result.prefix).toBe('$');
        expect(result.suffix).toBeUndefined();
    });
    it('should correctly parse a string with a suffix', function () {
        var input = "1,000.00%";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(1000.00);
        expect(result.precision).toBe(6);
        expect(result.scale).toBe(2);
        expect(result.prefix).toBeUndefined();
        expect(result.suffix).toBe('%');
    });
    it('should correctly parse a string with both prefix and suffix', function () {
        var input = "€1,000.00km";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(1000.00);
        expect(result.precision).toBe(6);
        expect(result.scale).toBe(2);
        expect(result.prefix).toBe('€');
        expect(result.suffix).toBe('km');
    });
    it('should correctly parse a string with both prefix and suffix spaced', function () {
        var input = " candela per square meter   1,000.00   cd / m2   ";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(1000.00);
        expect(result.precision).toBe(6);
        expect(result.scale).toBe(2);
        expect(result.prefix).toBe('candela per square meter');
        expect(result.suffix).toBe('cd / m2');
    });
    it('should correctly parse a string with misplaced commas', function () {
        var input = " L   -100,0000.00   m2   ";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(-1000000.00);
        expect(result.precision).toBe(9);
        expect(result.scale).toBe(2);
        expect(result.prefix).toBe('L');
        expect(result.suffix).toBe('m2');
    });
    it('should correctly parse a negative decimals', function () {
        var input = "$-100K";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(-100);
        expect(result.precision).toBe(3);
        expect(result.scale).toBe(0);
        expect(result.prefix).toBe('$');
        expect(result.suffix).toBe('K');
    });
    it('should correctly parse a negative decimals with sign before prefix', function () {
        var input = "-$100K";
        var result = (0, SpecType_decimal_parse_1.default)(input);
        expect(result.value).toBe(-100);
        expect(result.precision).toBe(3);
        expect(result.scale).toBe(0);
        expect(result.prefix).toBe('$');
        expect(result.suffix).toBe('K');
    });
});
