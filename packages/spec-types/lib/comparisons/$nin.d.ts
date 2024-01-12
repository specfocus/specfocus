import { type Valuable } from "./Valuable";
/**  Not present in a collection */
export declare const $nin = "$nin";
export type NotIn<V extends Valuable = Valuable> = {
    [$nin]: V[];
};
export type $NIn = typeof $nin;
export type TaggedNotIn<V extends Valuable = Valuable> = [$NIn, V[]] | [$NIn, ...V[]];
export declare const checkNotIn: <V extends Valuable = Valuable>(val: V | V[], expr: NotIn<V> | TaggedNotIn<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$nin.d.ts.map