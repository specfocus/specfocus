import { DecimalClass } from "../prototypes/SpecType.decimal.class";
import { type NumberSpec } from "../prototypes/SpecType.number";
declare const Money_base: new () => DecimalClass;
/** Money is a medium of exchange, a unit of account, and a store of value, but it's not typically considered a fundamental physical quantity that is measured like other quantities. */
export declare class Money extends Money_base {
    /** Australian Dollar (AUD) */
    static readonly AUD: Money;
    /** Canadian Dollar (CAD) */
    static readonly CAD: Money;
    /** Swiss Franc (CHF) */
    static readonly CHF: Money;
    /** Chinese Yuan (CNY) */
    static readonly CNY: Money;
    static readonly CRC: Money;
    static readonly EUR: Money;
    /** British Pound Sterling (GBP) */
    static readonly GBP: Money;
    /** Indian Rupee (INR) */
    static readonly INR: Money;
    /** Japanese Yen (JPY) */
    static readonly JPY: Money;
    /** Russian Ruble (RUB) */
    static readonly RUB: Money;
    /** Singapore Dollar (SGD) */
    static readonly SGD: Money;
    /** United States Dollar (USD) */
    static readonly USD: Money;
    constructor(verification?: NumberSpec);
}
export {};
//# sourceMappingURL=Money.d.ts.map