export type Deferred<T> = {
    resolve: (value: T) => void;
    reject: (value: unknown) => void;
    promise: Promise<T>;
};
declare const createDeferred: <T>() => Deferred<T>;
export default createDeferred;
//# sourceMappingURL=createDeferred.d.ts.map