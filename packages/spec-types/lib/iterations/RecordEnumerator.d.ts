import { type Enumerator } from "./Enumerator";
export type RecordEnumeratorResult<K extends string, V> = {
    [k in K]: V;
};
export declare class RecordEnumerator<K extends string, V> implements Enumerator<RecordEnumeratorResult<K, V>> {
    readonly key: K;
    readonly root: Enumerator<V>;
    [Symbol.iterator](): Generator<RecordEnumeratorResult<K, V>, void, unknown>;
    constructor(key: K, root: Enumerator<V>);
    get current(): RecordEnumeratorResult<K, V> | undefined;
    get first(): RecordEnumeratorResult<K, V>;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): RecordEnumeratorResult<K, V> | undefined;
    clone: () => RecordEnumerator<K, V>;
    end: () => RecordEnumeratorResult<K, V> | undefined;
    next: () => RecordEnumeratorResult<K, V> | undefined;
    prior: () => RecordEnumeratorResult<K, V> | undefined;
    private record;
    reset: () => RecordEnumeratorResult<K, V> | undefined;
    start: () => RecordEnumeratorResult<K, V> | undefined;
    toString(): string;
}
//# sourceMappingURL=RecordEnumerator.d.ts.map