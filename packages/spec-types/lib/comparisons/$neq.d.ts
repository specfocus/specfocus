import { type Valuable } from "../prototypes/Valuable";
/** Not equal to */
export declare const $ne = "$ne";
export type NotEqualTo<V extends Valuable = Valuable> = {
    [$ne]: V;
};
export type $NEq = typeof $ne;
export type TaggedNotEqualTo<V extends Valuable = Valuable> = [$NEq, V];
export declare const checkNotEqualTo: <V extends Valuable = Valuable>(val: V | V[], expr: NotEqualTo<V> | TaggedNotEqualTo<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$neq.d.ts.map