import { type Comparison } from "../comparisons";
import { type Valuable } from "../prototypes/Valuable";
import { type Logical } from "./Logical";
import { type Verification, type Verify } from "./Verification";
/** Logical AND */
export declare const $and = "$and";
export interface And<V extends Valuable, E = Comparison<V>> {
    [$and]: (E | Logical<V, E>)[];
}
export type $And = typeof $and;
export type TaggedAnd<V extends Valuable, E = Comparison<V>> = [$And, (E | Logical<V, E>)[]] | [$And, ...(E | Logical<V, E>)[]];
export declare const xand: (...args: (boolean | undefined)[]) => boolean | undefined;
export declare const verifyAnd: <V extends Valuable, E = Verification<V>>(val: V | V[], expr: unknown, error: (msg: string) => void, fallback: Verify<V, E>) => Promise<boolean | undefined>;
//# sourceMappingURL=$and.d.ts.map