import { type Nil } from "./is-nil";
export type Defined<T> = T extends undefined ? never : T;
export type Maybe<T> = T | Nil;
export type MaybePromise<T> = Promise<T> | T;
export type NotNull<T> = T extends null ? never : T;
export type Optionals<T> = Extract<T, null | undefined>;
export type Preserve<T, U> = T extends U ? U : never;
export declare const isEmpty: (val: unknown) => val is Nil;
export declare const isNull: (val: unknown) => val is null;
export declare const isSome: <T>(input: T) => input is Exclude<T, Nil>;
export type If<T, Y, N> = Exclude<T, undefined> extends never ? Y : N;
export type _<T> = T extends {} ? {
    [k in keyof T]: T[k];
} : T;
//# sourceMappingURL=maybe.d.ts.map