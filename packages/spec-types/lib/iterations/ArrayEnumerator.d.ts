import { type NonNegativeInteger } from "../numbers/is-non-negative-integer";
import { type Enumerator } from "./Enumerator";
export declare class ArrayEnumerator<T extends NonNegativeInteger> implements Enumerator<T> {
    readonly array: ReadonlyArray<T>;
    readonly initial?: T | undefined;
    [Symbol.iterator](): Generator<T, void, unknown>;
    _index: -1 | NonNegativeInteger;
    constructor(array: ReadonlyArray<T>, initial?: T | undefined);
    get current(): T | undefined;
    get first(): T | undefined;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): T | undefined;
    clone: () => ArrayEnumerator<T>;
    end: () => T | undefined;
    next: () => T | undefined;
    prior: () => T | undefined;
    start: () => T | undefined;
    reset: () => T | undefined;
    toString(): string;
}
//# sourceMappingURL=ArrayEnumerator.d.ts.map