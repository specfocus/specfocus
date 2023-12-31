import { type Valuable } from "../prototypes/Valuable";
/** Greater than or equal to */
export declare const $gte = "$gte";
export type GreaterThanOrEqualTo<V extends Valuable = Valuable> = {
    [$gte]: V;
};
export type $GtE = typeof $gte;
export type TaggedGreaterThanOrEqualTo<V extends Valuable = Valuable> = [$GtE, V];
export declare const checkGreaterThanOrEqualTo: <V extends Valuable = Valuable>(val: V | V[], expr: GreaterThanOrEqualTo<V> | TaggedGreaterThanOrEqualTo<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$gte.d.ts.map