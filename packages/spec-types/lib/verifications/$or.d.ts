import { type Comparison } from "../comparisons";
import { type Valuable } from "../prototypes/Valuable";
import { type Logical } from "./Logical";
import { type Verification, type Verify } from "./Verification";
/** Logical OR */
export declare const $or = "$or";
export interface Or<V extends Valuable, E = Comparison<V>> {
    [$or]: (E | Logical<V, E>)[];
}
export type $Or = typeof $or;
export type TaggedOr<V extends Valuable, E = Comparison<V>> = [$Or, (E | Logical<V, E>)[]] | [$Or, ...(E | Logical<V, E>)[]];
export declare const xor: (acc: boolean | undefined, value: boolean | undefined) => boolean | undefined;
export declare const verifyOr: <V extends Valuable, E = Verification<V>>(val: V | V[], expr: unknown, error: (msg: string) => void, fallback: Verify<V, E>) => Promise<boolean | undefined>;
//# sourceMappingURL=$or.d.ts.map