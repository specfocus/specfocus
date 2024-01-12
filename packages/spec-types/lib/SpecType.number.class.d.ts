import { Enumify } from "./Enumify";
import { TypeClass } from "./SpecType.class";
import { NumberSpec } from "./SpecType.number";
export declare class NumberClass extends Enumify implements TypeClass<number> {
    static [Symbol.iterator](): IterableIterator<NumberClass>;
    static readonly extend: (base: typeof NumberClass) => new () => NumberClass;
    private static derivedClasses;
    static get defived(): typeof NumberClass[];
    static find(className: string): typeof NumberClass | undefined;
    protected static registerDerived(derived: typeof NumberClass): void;
    valueOf(val: unknown): number | undefined;
    validate(value: unknown, error: (msg: string) => void): value is number | number[];
}
export type NumberType = [typeof NumberClass.name, NumberSpec?];
//# sourceMappingURL=SpecType.number.class.d.ts.map