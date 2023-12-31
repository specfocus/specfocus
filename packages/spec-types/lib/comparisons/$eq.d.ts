import { type Valuable } from "../prototypes/Valuable";
/** Equal to */
export declare const $eq = "$eq";
export type EqualTo<V extends Valuable = Valuable> = {
    [$eq]: V;
};
export type $Eq = typeof $eq;
export type TaggedEqualTo<V extends Valuable = Valuable> = [$Eq, V];
export declare const checkEqualTo: <V extends Valuable = Valuable>(val: V | V[], expr: EqualTo<V> | TaggedEqualTo<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$eq.d.ts.map