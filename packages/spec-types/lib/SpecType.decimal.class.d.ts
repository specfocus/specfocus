import { Enumify } from "./Enumify";
import { TypeClass } from "./SpecType.class";
import { type NumberSpec } from "./SpecType.number";
export declare class DecimalClass extends Enumify implements TypeClass<number> {
    static [Symbol.iterator](): IterableIterator<DecimalClass>;
    static readonly extend: (base: typeof DecimalClass) => new () => DecimalClass;
    private static derivedClasses;
    static get defived(): typeof DecimalClass[];
    static find(className: string): typeof DecimalClass | undefined;
    protected static registerDerived(derived: typeof DecimalClass): void;
    validate(value: unknown, error: (msg: string) => void): value is number;
    valueOf(val: unknown): number | undefined;
}
export type DecimalType = [typeof DecimalClass.name, NumberSpec?];
//# sourceMappingURL=SpecType.decimal.class.d.ts.map