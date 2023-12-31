import { type NonNegativeInteger } from "../numbers/is-non-negative-integer";
import { RangeArray } from "../numbers/ranges/Range";
import { type Enumerator } from "./Enumerator";
export declare class RangesEnumerator<T extends NonNegativeInteger> implements Iterable<T>, Enumerator<T> {
    readonly ranges: RangeArray<T>;
    readonly initial?: T | undefined;
    [Symbol.iterator](): Generator<T, void, unknown>;
    _index: NonNegativeInteger;
    _current: T;
    constructor(ranges: RangeArray<T>, initial?: T | undefined);
    get current(): T;
    get first(): T;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): T;
    clone: () => RangesEnumerator<T>;
    end: () => T;
    next: () => T;
    prior: () => T;
    reset: () => T;
    start: () => T;
    toString(): string;
}
//# sourceMappingURL=RangesEnumerator.d.ts.map