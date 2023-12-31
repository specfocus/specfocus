export declare class Enumify {
    static [Symbol.iterator](): IterableIterator<Enumify>;
    static values: string[];
    static items: Enumify[];
    static readonly seal: (target: typeof Enumify) => void;
    protected static _isEnumClosed: boolean;
    protected static close(): void;
    /** Retrieve enum entry by value */
    static itemOf(value: string): Enumify | undefined;
    /** Use case: parsing an array of enum values */
    static itemsOf(values: string[]): Enumify[];
    value: string;
    index: number;
    toString(): string;
}
//# sourceMappingURL=Enumify.d.ts.map