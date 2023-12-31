export interface Enumerator<T> extends Iterable<T> {
    initial?: T;
    get current(): T | undefined;
    get first(): T | undefined;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): T | undefined;
    clone(): Enumerator<T>;
    /** Seek last */
    end(): T | undefined;
    next(): T | undefined;
    prior(): T | undefined;
    /** Seek first */
    start(): T | undefined;
    /** Seek initial  */
    reset(): T | undefined;
}
//# sourceMappingURL=Enumerator.d.ts.map