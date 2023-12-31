import { type NonNegativeInteger } from "../numbers/is-non-negative-integer";
import { type Enumerator } from "./Enumerator";
export declare class ParallelEnumerator<T extends NonNegativeInteger> implements Enumerator<T> {
    readonly children: Enumerator<T>[];
    [Symbol.iterator](): Generator<T, void, unknown>;
    _current: T | undefined;
    constructor(children: Enumerator<T>[]);
    get current(): T | undefined;
    get first(): T | undefined;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): T | undefined;
    clone: () => ParallelEnumerator<T>;
    end: () => T | undefined;
    next: () => T | undefined;
    prior: () => T | undefined;
    private refresh;
    reset: () => T | undefined;
    start: () => T | undefined;
    toString(): string;
}
//# sourceMappingURL=ParallelEnumerator.d.ts.map