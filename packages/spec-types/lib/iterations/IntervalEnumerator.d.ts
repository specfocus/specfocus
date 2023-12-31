import { type NonNegativeInteger } from "../numbers/is-non-negative-integer";
import { type PositiveInteger } from "../numbers/is-positive-integer";
import { type Enumerator } from "./Enumerator";
export declare class IntervalEnumerator<T extends NonNegativeInteger> implements Enumerator<T> {
    readonly range: Readonly<[T, T?]>;
    readonly step: PositiveInteger;
    readonly initial?: T | undefined;
    [Symbol.iterator](): Generator<T, void, unknown>;
    _index: NonNegativeInteger;
    constructor(range: Readonly<[T, T?]>, step?: PositiveInteger, initial?: T | undefined);
    get current(): T | undefined;
    get first(): T;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): T | undefined;
    clone: () => IntervalEnumerator<T>;
    end: () => T | undefined;
    next: () => T | undefined;
    prior: () => T | undefined;
    start: () => T;
    reset: () => T | undefined;
    toString(): string;
}
//# sourceMappingURL=IntervalEnumerator.d.ts.map