export type PushPull<T> = {
    pushValue: (value: T) => void;
    asyncIterableIterator: AsyncIterableIterator<T>;
};
/**
 * createPushPull
 *
 * The iterable will publish values until return or throw is called.
 * Afterwards it is in the completed state and cannot be used for publishing any further values.
 * It will handle back-pressure and keep pushed values until they are consumed by a source.
 */
declare const createPushPull: <T>() => PushPull<T>;
export default createPushPull;
//# sourceMappingURL=createPushPull.d.ts.map