export type LazyModule<T> = {
    default: T;
};
export type ImportPromise<T> = () => Promise<LazyModule<T>>;
declare const lazy: <T>(importPromise: ImportPromise<T>) => Promise<T>;
export default lazy;
//# sourceMappingURL=lazy.d.ts.map