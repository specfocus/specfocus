import { DecimalClass } from "../prototypes/SpecType.decimal.class";
declare const Measure_base: new () => DecimalClass;
export declare class Measure extends Measure_base {
    readonly symbol: string;
    readonly multiplier: number;
    constructor(symbol: string, multiplier: number);
}
export {};
//# sourceMappingURL=Measure.d.ts.map