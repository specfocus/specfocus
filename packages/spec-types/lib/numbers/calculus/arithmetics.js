"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ARITHMETIC = exports.$UNARY = exports.$BINARY = exports.$trunc = exports.$tanh = exports.$tan = exports.$sign = exports.$sum = exports.$sub = exports.$sqrt = exports.$sinh = exports.$sin = exports.$round = exports.$pow = exports.$neg = exports.$mul = exports.$mod = exports.$min = exports.$max = exports.$log1p = exports.$log2 = exports.$log10 = exports.$log = exports.$inc = exports.$imul = exports.$hypot = exports.$fround = exports.$floor = exports.$expm1 = exports.$exp = exports.$div = exports.$dec = exports.$cosh = exports.$cos = exports.$clz32 = exports.$ceil = exports.$cbrt = exports.$avg = exports.$atan2 = exports.$atanh = exports.$atan = exports.$asinh = exports.$asin = exports.$add = exports.$acosh = exports.$acos = exports.$abs = void 0;
/** Absolute: e.g: abs(-5) = 5 */
exports.$abs = '$abs';
/** The arc cosine (or inverse cosine) of a number. */
exports.$acos = '$acos';
/** The inverse hyperbolic cosine of a number. */
exports.$acosh = '$acosh';
/** Addition: +, e.g: 5 + 3 = 8 */
exports.$add = '$add';
/** The arcsine of a number. */
exports.$asin = '$asin';
/** The inverse hyperbolic sine of a number. */
exports.$asinh = '$asinh';
/** The arctangent of a number. */
exports.$atan = '$atan';
/** The inverse hyperbolic tangent of a number. */
exports.$atanh = '$atanh';
/** The angle (in radians) from the X axis to a point. */
exports.$atan2 = '$atan2';
/** The average */
exports.$avg = '$avg';
/** An implementation-dependent approximation to the cube root of number. */
exports.$cbrt = '$cbrt';
/** The smallest integer greater than or equal to its numeric argument. */
exports.$ceil = '$ceil';
/** The number of leading zero bits in the 32-bit binary representation of a number. */
exports.$clz32 = '$clz32';
/* The cosine of a number. */
exports.$cos = '$cos';
/** The hyperbolic cosine of a number. */
exports.$cosh = '$cosh';
/** The result of decrementing by one */
exports.$dec = '$dec'; // --
/** Division: /. Example: 5 / 3 = 1.6667 (depending on precision)*/
exports.$div = '$div';
/** Exponential e (the base of natural logarithms): raised to a power e^x. e.g: e^2 = 7.389 */
exports.$exp = '$exp';
/**
 * The result of (e^x - 1), which is an implementation-dependent approximation to
 * subtracting 1 from the exponential function of x (e raised to the power of x, where e
 * is the base of the natural logarithms).
 */
exports.$expm1 = '$expm1';
/** The greatest integer less than or equal to its numeric argument. */
exports.$floor = '$floor';
/** The nearest single precision float representation of a number. */
exports.$fround = '$fround';
/**
 * The square root of the sum of squares of its arguments.
 * @param values Values to compute the square root for.
 *     If no arguments are passed, the result is +0.
 *     If there is only one argument, the result is the absolute value.
 *     If any argument is +Infinity or -Infinity, the result is +Infinity.
 *     If any argument is NaN, the result is NaN.
 *     If all arguments are either +0 or −0, the result is +0.
 */
exports.$hypot = '$hypot';
/** The result of multiplication of two numbers. */
exports.$imul = '$imul';
/** The result of incrementing by one */
exports.$inc = '$inc'; // --
/** The natural logarithm (base e) of a number. */
exports.$log = '$log';
/** The base 10 logarithm of a number. */
exports.$log10 = '$log10';
/** The base 2 logarithm of a number. */
exports.$log2 = '$log2';
/** The natural logarithm of 1 + x. */
exports.$log1p = '$log1p';
/** Maximum: the maximum is if it an array or the unit if not */
exports.$max = '$max';
/** Minimum: the miniimum is if it an array or the unit if not */
exports.$min = '$min';
/** Modulus (the remainder after division): %. Example: 5 % 3 = 2*/
exports.$mod = '$mod';
/** Multiplication: *. Example: 5 * 3 = 15 */
exports.$mul = '$mul';
/** Unary Minus (negation): -. Used to indicate the negative value of a number. Example: -3 */
exports.$neg = '$neg';
/** Exponentiation: ^. Example: 5^2 = 25 or 5**2 = 25 */
exports.$pow = '$pow';
/** The nearest integer */
exports.$round = '$round';
/* the sine of a number. */
exports.$sin = '$sin';
/** The hyperbolic sine of a number. */
exports.$sinh = '$sinh';
/* The square root of a number. */
exports.$sqrt = '$sqrt';
/** Subtraction: -. Example: 5 - 3 = 2 */
exports.$sub = '$sub';
/** The summatory */
exports.$sum = '$sum';
/** Sign: e.g. sign(-5) = -1 */
exports.$sign = '$sign';
/* The tangent of a number. */
exports.$tan = '$tan';
/** The hyperbolic tangent of a number. */
exports.$tanh = '$tanh';
/** The integral part of the a numeric expression, x, removing any fractional digits. */
exports.$trunc = '$trunc';
exports.$BINARY = [exports.$add, exports.$atan2, exports.$div, exports.$imul, exports.$mod, exports.$mul, exports.$pow, exports.$sub];
exports.$UNARY = [
    exports.$abs,
    exports.$acos,
    exports.$acosh,
    exports.$asin,
    exports.$asinh,
    exports.$atan,
    exports.$atanh,
    exports.$avg,
    exports.$cbrt,
    exports.$clz32,
    exports.$ceil,
    exports.$cos,
    exports.$cosh,
    exports.$dec,
    exports.$exp,
    exports.$expm1,
    exports.$floor,
    exports.$fround,
    exports.$hypot,
    exports.$inc,
    exports.$log,
    exports.$log10,
    exports.$log1p,
    exports.$log2,
    exports.$max,
    exports.$min,
    exports.$neg,
    exports.$round,
    exports.$sign,
    exports.$sin,
    exports.$sinh,
    exports.$sqrt,
    exports.$sum,
    exports.$tan,
    exports.$tanh,
    exports.$trunc
];
exports.$ARITHMETIC = __spreadArray(__spreadArray([], __read(exports.$UNARY), false), __read(exports.$BINARY), false);
