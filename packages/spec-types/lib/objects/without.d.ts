/**
 * Get the keys of T without any keys of U.
 */
export type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
//# sourceMappingURL=without.d.ts.map