import { Enumerator } from "./Enumerator";
export type ExtendedEnumeratorResult<Base extends {}, K extends string, V> = Base & {
    [k in K]: V;
};
export declare class ExtendedEnumerator<Base extends {}, K extends string, V> implements Enumerator<ExtendedEnumeratorResult<Base, K, V>> {
    readonly key: K;
    readonly root: Enumerator<V>;
    readonly base: Enumerator<Base>;
    [Symbol.iterator](): Generator<ExtendedEnumeratorResult<Base, K, V>, void, unknown>;
    constructor(key: K, root: Enumerator<V>, base: Enumerator<Base>);
    get current(): ExtendedEnumeratorResult<Base, K, V>;
    get first(): ExtendedEnumeratorResult<Base, K, V>;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): ExtendedEnumeratorResult<Base, K, V> | undefined;
    clone: () => ExtendedEnumerator<Base, K, V>;
    end: () => ExtendedEnumeratorResult<Base, K, V>;
    private extend;
    next: () => ExtendedEnumeratorResult<Base, K, V> | undefined;
    prior: () => ExtendedEnumeratorResult<Base, K, V> | undefined;
    reset: () => ExtendedEnumeratorResult<Base, K, V>;
    start: () => ExtendedEnumeratorResult<Base, K, V>;
    toString(): string;
}
//# sourceMappingURL=ExtendedEnumerator.d.ts.map