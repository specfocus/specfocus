export interface Decimal {
    value: number;
    precision: number;
    scale: number;
    prefix?: string;
    suffix?: string;
}
/**
 * Parse decimals like "1,000,000.00"
 * @param val - The string representation of the decimal
 * @returns Parsed `Decimal` object
 */
declare const parseDecimal: (val: string) => Decimal;
export default parseDecimal;
//# sourceMappingURL=SpecType.decimal.parse.d.ts.map