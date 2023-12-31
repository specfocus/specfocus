/** Absolute: e.g: abs(-5) = 5 */
export declare const $abs = "$abs";
/** The arc cosine (or inverse cosine) of a number. */
export declare const $acos = "$acos";
/** The inverse hyperbolic cosine of a number. */
export declare const $acosh = "$acosh";
/** Addition: +, e.g: 5 + 3 = 8 */
export declare const $add = "$add";
/** The arcsine of a number. */
export declare const $asin = "$asin";
/** The inverse hyperbolic sine of a number. */
export declare const $asinh = "$asinh";
/** The arctangent of a number. */
export declare const $atan = "$atan";
/** The inverse hyperbolic tangent of a number. */
export declare const $atanh = "$atanh";
/** The angle (in radians) from the X axis to a point. */
export declare const $atan2 = "$atan2";
/** The average */
export declare const $avg = "$avg";
/** An implementation-dependent approximation to the cube root of number. */
export declare const $cbrt = "$cbrt";
/** The smallest integer greater than or equal to its numeric argument. */
export declare const $ceil = "$ceil";
/** The number of leading zero bits in the 32-bit binary representation of a number. */
export declare const $clz32 = "$clz32";
export declare const $cos = "$cos";
/** The hyperbolic cosine of a number. */
export declare const $cosh = "$cosh";
/** The result of decrementing by one */
export declare const $dec = "$dec";
/** Division: /. Example: 5 / 3 = 1.6667 (depending on precision)*/
export declare const $div = "$div";
/** Exponential e (the base of natural logarithms): raised to a power e^x. e.g: e^2 = 7.389 */
export declare const $exp = "$exp";
/**
 * The result of (e^x - 1), which is an implementation-dependent approximation to
 * subtracting 1 from the exponential function of x (e raised to the power of x, where e
 * is the base of the natural logarithms).
 */
export declare const $expm1 = "$expm1";
/** The greatest integer less than or equal to its numeric argument. */
export declare const $floor = "$floor";
/** The nearest single precision float representation of a number. */
export declare const $fround = "$fround";
/**
 * The square root of the sum of squares of its arguments.
 * @param values Values to compute the square root for.
 *     If no arguments are passed, the result is +0.
 *     If there is only one argument, the result is the absolute value.
 *     If any argument is +Infinity or -Infinity, the result is +Infinity.
 *     If any argument is NaN, the result is NaN.
 *     If all arguments are either +0 or −0, the result is +0.
 */
export declare const $hypot = "$hypot";
/** The result of multiplication of two numbers. */
export declare const $imul = "$imul";
/** The result of incrementing by one */
export declare const $inc = "$inc";
/** The natural logarithm (base e) of a number. */
export declare const $log = "$log";
/** The base 10 logarithm of a number. */
export declare const $log10 = "$log10";
/** The base 2 logarithm of a number. */
export declare const $log2 = "$log2";
/** The natural logarithm of 1 + x. */
export declare const $log1p = "$log1p";
/** Maximum: the maximum is if it an array or the unit if not */
export declare const $max = "$max";
/** Minimum: the miniimum is if it an array or the unit if not */
export declare const $min = "$min";
/** Modulus (the remainder after division): %. Example: 5 % 3 = 2*/
export declare const $mod = "$mod";
/** Multiplication: *. Example: 5 * 3 = 15 */
export declare const $mul = "$mul";
/** Unary Minus (negation): -. Used to indicate the negative value of a number. Example: -3 */
export declare const $neg = "$neg";
/** Exponentiation: ^. Example: 5^2 = 25 or 5**2 = 25 */
export declare const $pow = "$pow";
/** The nearest integer */
export declare const $round = "$round";
export declare const $sin = "$sin";
/** The hyperbolic sine of a number. */
export declare const $sinh = "$sinh";
export declare const $sqrt = "$sqrt";
/** Subtraction: -. Example: 5 - 3 = 2 */
export declare const $sub = "$sub";
/** The summatory */
export declare const $sum = "$sum";
/** Sign: e.g. sign(-5) = -1 */
export declare const $sign = "$sign";
export declare const $tan = "$tan";
/** The hyperbolic tangent of a number. */
export declare const $tanh = "$tanh";
/** The integral part of the a numeric expression, x, removing any fractional digits. */
export declare const $trunc = "$trunc";
export declare const $BINARY: readonly ["$add", "$atan2", "$div", "$imul", "$mod", "$mul", "$pow", "$sub"];
export type $Binary = typeof $BINARY[number];
export declare const $UNARY: readonly ["$abs", "$acos", "$acosh", "$asin", "$asinh", "$atan", "$atanh", "$avg", "$cbrt", "$clz32", "$ceil", "$cos", "$cosh", "$dec", "$exp", "$expm1", "$floor", "$fround", "$hypot", "$inc", "$log", "$log10", "$log1p", "$log2", "$max", "$min", "$neg", "$round", "$sign", "$sin", "$sinh", "$sqrt", "$sum", "$tan", "$tanh", "$trunc"];
export type $Unary = typeof $UNARY[number];
export declare const $ARITHMETIC: readonly ["$abs", "$acos", "$acosh", "$asin", "$asinh", "$atan", "$atanh", "$avg", "$cbrt", "$clz32", "$ceil", "$cos", "$cosh", "$dec", "$exp", "$expm1", "$floor", "$fround", "$hypot", "$inc", "$log", "$log10", "$log1p", "$log2", "$max", "$min", "$neg", "$round", "$sign", "$sin", "$sinh", "$sqrt", "$sum", "$tan", "$tanh", "$trunc", "$add", "$atan2", "$div", "$imul", "$mod", "$mul", "$pow", "$sub"];
export type $Arithmetic = $Unary | $Binary;
export type EvaluatableValue = number | string | Arithmetic;
export type Evaluatable = EvaluatableValue | EvaluatableValue[];
export type TaggedUnaryArithmetic = [$Unary, Evaluatable];
export type TaggedBinaryArithmetic = [$Binary, Evaluatable, Evaluatable];
export type TaggedArithmetic = TaggedUnaryArithmetic | TaggedBinaryArithmetic;
export type Arithmetic = TaggedArithmetic | {
    [P in $Unary]: Evaluatable;
} | {
    [P in $Binary]: [Evaluatable, Evaluatable];
};
//# sourceMappingURL=arithmetics.d.ts.map