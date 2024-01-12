import { type Valuable } from "./Valuable";
/** Less than or equal to */
export declare const $lte = "$lte";
export type LessThanOrEqualTo<V extends Valuable = Valuable> = {
    [$lte]: V;
};
export type $LtE = typeof $lte;
export type TaggedLessThanOrEqualTo<V extends Valuable = Valuable> = [$LtE, V];
export declare const checkLessThanOrEqualTo: <V extends Valuable = Valuable>(val: V | V[], expr: LessThanOrEqualTo<V> | TaggedLessThanOrEqualTo<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$lte.d.ts.map