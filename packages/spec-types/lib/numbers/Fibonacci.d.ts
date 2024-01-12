import { NumberSpecType, type NumberSpec } from "./SpecType.number";
import { NumberClass } from "./SpecType.number.class";
export declare const $Fibonaccy: NumberSpecType;
export declare const $StoryPoiints: NumberSpecType;
export declare const verifyFibonacci: (value: unknown, error: (msg: string) => void) => boolean;
declare const Fibonacci_base: new () => NumberClass;
export declare class Fibonacci extends Fibonacci_base {
    constructor(verification?: NumberSpec);
    validate(value: unknown, error: (msg: string) => void): value is number;
}
export { };
//# sourceMappingURL=Fibonacci.d.ts.map