import { Enumify } from "./Enumify";
import { TypeClass } from "./SpecType.class";
export declare class BooleanClass extends Enumify implements TypeClass<boolean> {
    static [Symbol.iterator](): IterableIterator<BooleanClass>;
    static readonly extend: (base: typeof BooleanClass) => new () => BooleanClass;
    private static derivedClasses;
    static get defived(): typeof BooleanClass[];
    protected static registerDerived(derived: typeof BooleanClass): void;
    valueOf(val: unknown): boolean | undefined;
    validate(value: unknown, error: (msg: string) => void): value is boolean | boolean[];
}
//# sourceMappingURL=SpecType.boolean.class.d.ts.map