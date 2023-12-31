import { Nil } from "./is-nil";
export declare const $array = "$array";
export type $array = typeof $array;
export declare const isArray: <T = unknown>(val: unknown) => val is T[];
export declare const isArrayLike: (val: any) => val is IterableIterator<[number, unknown]>;
export declare const isEmpty: (val: unknown) => val is Nil;
export declare const isSet: (val: unknown) => val is Set<unknown>;
/**
 * Creates an array excluding all provided values using SameValueZero for equality comparisons.
 *
 * @param array The array to filter.
 * @param values The values to exclude.
 * @return Returns the new array of filtered values.
 */
export declare const without: <T, R extends T = T>(array: ArrayLike<T> | null | undefined, ...values: unknown[]) => T[];
export declare const startsWith: (left: unknown, right: unknown) => boolean;
export declare const areEqual: (left: unknown, right: unknown) => boolean;
//# sourceMappingURL=array.d.ts.map