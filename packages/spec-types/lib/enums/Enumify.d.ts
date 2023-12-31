export declare class Enumify {
    static values: string[];
    static items: Enumify[];
    static end(): void;
    /** Use case: parsing enum values */
    static itemOf(value: string): Enumify | undefined;
    static [Symbol.iterator](): IterableIterator<Enumify>;
    value: string;
    index: number;
    toString(): string;
}
//# sourceMappingURL=Enumify.d.ts.map