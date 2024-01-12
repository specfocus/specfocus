import { type Decimal } from "./SpecType.decimal.parse";
import { type Verification } from "@specfocus/spec-verifications/lib/Verification";
export interface DecimalOptions extends Partial<Omit<Decimal, 'value'>> {
}
export declare class DecimalFactory implements Iterable<string> {
    readonly condition: Verification<number>;
    readonly options: DecimalOptions;
    [Symbol.iterator](): Generator<string, void, unknown>;
    private readonly _factory;
    constructor(condition: Verification<number>, options: DecimalOptions);
    faux(): string;
}
declare const generator: (condition: Verification<number>, options: DecimalOptions) => Iterable<string>;
export default generator;
//# sourceMappingURL=SpecType.decimal.faux.d.ts.map