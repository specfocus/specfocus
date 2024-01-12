import { NumberSpecType } from "./SpecType.number";
import { NumberClass } from "./SpecType.number.class";
export declare const $Count: NumberSpecType;
export declare const $Integer: NumberSpecType;
export declare const $PositiveInteger: NumberSpecType;
export declare const $NegativeInteger: NumberSpecType;
export declare const $NonPositiveInteger: NumberSpecType;
export declare const $NonNegativeInteger: NumberSpecType;
export declare const $Timestamp: NumberSpecType;
declare const Integer_base: new () => NumberClass;
export declare class Integer extends Integer_base {
    validate(value: unknown, error: (msg: string) => void): value is number;
}
export { };
//# sourceMappingURL=Integer.d.ts.map