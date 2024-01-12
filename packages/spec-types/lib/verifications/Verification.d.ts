import { type Comparison, TaggedComparison } from "@specfocus/spec-comparables/lib/Comparison";
import { type Valuable } from "./Valuable";
import { type Logical, TaggedLogical } from "./Logical";
export type Verification<V extends Valuable, E = Comparison<V> | TaggedComparison<V>> = E | Logical<V, E> | TaggedLogical<V, E>;
export type Verify<V extends Valuable, E = Verification<V>> = (value: V | V[], expr: E | Logical<V, E>, error: (msg: string) => void) => Promise<boolean | undefined>;
export declare const verify: <V extends Valuable, E = Verification<V, Comparison<V> | TaggedComparison<V>>>(val: V | V[], expr: E, error: (msg: string) => void, fallback?: Verify<V, E>) => Promise<boolean | undefined>;
//# sourceMappingURL=Verification.d.ts.map