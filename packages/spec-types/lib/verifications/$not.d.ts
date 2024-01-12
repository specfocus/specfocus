import { type Comparison } from "@specfocus/spec-comparables/lib";
import { type Valuable } from "./Valuable";
import { type Logical } from "./Logical";
import { type Verification, type Verify } from "./Verification";
/** Logical NOT */
export declare const $not = "$not";
export interface Not<V extends Valuable, E = Comparison<V>> {
    [$not]: (E | Logical<V, E>);
}
export type $Not = typeof $not;
export type TaggedNot<V extends Valuable, E = Comparison<V>> = [$Not, (E | Logical<V, E>)];
export declare const verifyNot: <V extends Valuable, E = Verification<V>>(val: V | V[], expr: unknown, error: (msg: string) => void, fallback: Verify<V, E>) => Promise<boolean | undefined>;
//# sourceMappingURL=$not.d.ts.map