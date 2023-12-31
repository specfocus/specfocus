import { Fieldset } from "./Fieldset";
import { Enumify } from "./Enumify";
export declare class Namespace extends Enumify {
    static [Symbol.iterator](): IterableIterator<Namespace>;
    static readonly extend: (base: typeof Namespace) => new () => Object;
    private static readonly loadableClasses;
    private static readonly derivedClasses;
    static get defived(): typeof Namespace[];
    protected static registerDerived(derived: typeof Namespace): void;
    private static readonly documents;
    static addDocument(document: Fieldset): void;
}
//# sourceMappingURL=Namespace.d.ts.map