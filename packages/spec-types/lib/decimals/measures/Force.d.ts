import { DecimalClass } from "../../prototypes/SpecType.decimal.class";
declare const Force_base: new () => DecimalClass;
/** Unit of force (newton N) */
export declare class Force extends Force_base {
    readonly symbol: string;
    readonly multiplier: number;
    static readonly $newton$ = "$newton$";
    static readonly $pound$force$ = "$pound$force$";
    constructor(symbol: string, multiplier: number);
}
export {};
//# sourceMappingURL=Force.d.ts.map