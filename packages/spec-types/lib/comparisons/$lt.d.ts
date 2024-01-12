import { type Valuable } from "./Valuable";
/** Less than */
export declare const $lt = "$lt";
export type LessThan<V extends Valuable = Valuable> = {
    [$lt]: V;
};
export type $Lt = typeof $lt;
export type TaggedLessThan<V extends Valuable = Valuable> = [$Lt, V];
export declare const checkLessThan: <V extends Valuable = Valuable>(val: V | V[], expr: LessThan<V> | TaggedLessThan<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$lt.d.ts.map