import { type Valuable } from "./Valuable";
/** Greater than */
export declare const $gt = "$gt";
export type GreaterThan<V extends Valuable = Valuable> = {
    [$gt]: V;
};
export type $Gt = typeof $gt;
export type TaggedGreaterThan<V extends Valuable = Valuable> = [$Gt, V];
export declare const checkGreaterThan: <V extends Valuable = Valuable>(val: V | V[], expr: GreaterThan<V> | TaggedGreaterThan<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$gt.d.ts.map