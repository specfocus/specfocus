"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpecType_decimal_faux_1 = __importStar(require("./SpecType.decimal.faux")); // Update with the correct path
var SpecType_decimal_parse_1 = __importDefault(require("./SpecType.decimal.parse"));
describe('DecimalFactory', function () {
    it('should create a DecimalFactory instance with the given condition and scale', function () {
        var condition = { $gt: 5 };
        var factory = new SpecType_decimal_faux_1.DecimalFactory(condition, { precision: 6, scale: 2 });
        expect(factory).toBeInstanceOf(SpecType_decimal_faux_1.DecimalFactory);
    });
    it('should generate a number within the specified range', function () {
        var condition = { $gte: 50, $lte: 1000 };
        var factory = new SpecType_decimal_faux_1.DecimalFactory(condition, { prefix: '$', precision: 6, scale: 2 });
        for (var i = 0; i < 100; i++) {
            var price = factory.faux();
            var _a = (0, SpecType_decimal_parse_1.default)(price), prefix = _a.prefix, precision = _a.precision, scale = _a.scale, suffix = _a.suffix, value = _a.value;
            // console.log({ price, prefix, precision, scale, suffix, value });
            expect(value).toBeGreaterThanOrEqual(50);
            expect(value).toBeLessThanOrEqual(1000);
            expect(prefix).toBe('$');
            expect(precision).toBeLessThanOrEqual(6);
            expect(scale).toBe(2);
            expect(suffix).toBeUndefined();
        }
    });
    it('should return NaN when there are no valid ranges', function () {
        var condition = { $lt: 0, $gt: 10 }; // No valid range
        var factory = new SpecType_decimal_faux_1.DecimalFactory(condition, { precision: 6, scale: 2 });
        var dec = factory.faux();
        var _a = (0, SpecType_decimal_parse_1.default)(dec), prefix = _a.prefix, precision = _a.precision, scale = _a.scale, suffix = _a.suffix, value = _a.value;
        expect(value).toBeNaN();
    });
    // Additional tests for private methods if needed
    // Note: Testing private methods directly is often discouraged, 
    // as it can lead to brittle tests. Instead, test the public interface.
    // Test for the generator function
    it('should create an iterable generator', function () {
        var e_1, _a;
        var i = 0;
        try {
            for (var _b = __values((0, SpecType_decimal_faux_1.default)({ $gte: 1, $lte: 3 }, { prefix: '$', precision: 6, scale: 2 })), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dec = _c.value;
                var _d = (0, SpecType_decimal_parse_1.default)(dec), prefix = _d.prefix, precision = _d.precision, scale = _d.scale, suffix = _d.suffix, value = _d.value;
                expect(value).toBeGreaterThanOrEqual(1);
                expect(value).toBeLessThanOrEqual(3);
                i++;
                if (i === 100)
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
    });
    it('should handle nested $and conditions correctly', function () {
        // Example: number should be greater than 5 and (less than 10 and not equal to 7)
        var condition = {
            $and: [
                { $gt: 5 },
                { $and: [{ $lt: 10 }, { $ne: 7 }] }
            ]
        };
        var factory = new SpecType_decimal_faux_1.DecimalFactory(condition, { prefix: '$', precision: 6, scale: 2 });
        for (var i = 0; i < 100; i++) {
            var dec = factory.faux();
            var _a = (0, SpecType_decimal_parse_1.default)(dec), prefix = _a.prefix, precision = _a.precision, scale = _a.scale, suffix = _a.suffix, value = _a.value;
            expect(value).toBeGreaterThan(5);
            expect(value).toBeLessThan(10);
            expect(value).not.toBe(7);
        }
    });
    it('should handle nested $or conditions correctly', function () {
        // Example: number should be less than 3 or (greater than 5 and less than 8)
        var condition = {
            $or: [
                { $lt: 3 },
                { $and: [{ $gt: 5 }, { $lt: 8 }] }
            ]
        };
        var factory = new SpecType_decimal_faux_1.DecimalFactory(condition, { prefix: '$', precision: 6, scale: 2 });
        for (var i = 0; i < 100; i++) {
            var dec = factory.faux();
            var _a = (0, SpecType_decimal_parse_1.default)(dec), prefix = _a.prefix, precision = _a.precision, scale = _a.scale, suffix = _a.suffix, value = _a.value;
            expect(value < 3 || (value > 5 && value < 8)).toBeTruthy();
        }
    });
    it('should handle combination of $and and $or conditions correctly', function () {
        // Example: number should be (less than 2 or greater than 8) and not equal to 10
        var condition = {
            $and: [
                { $or: [{ $lt: 2 }, { $gt: 8 }] },
                { $ne: 10 }
            ]
        };
        var factory = new SpecType_decimal_faux_1.DecimalFactory(condition, { prefix: '$', precision: 6, scale: 2 });
        for (var i = 0; i < 100; i++) {
            var dec = factory.faux();
            var _a = (0, SpecType_decimal_parse_1.default)(dec), prefix = _a.prefix, precision = _a.precision, scale = _a.scale, suffix = _a.suffix, value = _a.value;
            expect(value < 2 || value > 8).toBeTruthy();
            expect(value).not.toBe(10);
        }
    });
});
// Additional tests can be written for more complex conditions and edge cases.
