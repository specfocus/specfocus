declare class AsyncIteration<T> {
    constructor(asyncIterable: AsyncIterable<T> | AsyncIterator<T>);
    asyncIterator: AsyncIterator<T>;
    first(): Promise<T | undefined>;
    last(): Promise<T | undefined>;
    next(): Promise<T | undefined>;
    skip(count: number): Promise<AsyncIteration<T>>;
}
export default AsyncIteration;
//# sourceMappingURL=AsyncIteration.d.ts.map