import { type Valuable } from "../comparisons";
import { type And, type TaggedAnd } from "./$and";
import { type Nor, type TaggedNor } from "./$nor";
import { type Not, type TaggedNot } from "./$not";
import { type Or, type TaggedOr } from "./$or";
import { type Verification, type Verify } from "./Verification";
export declare const LOGICAL: readonly ["$and", "$not", "$nor", "$or"];
export type $Logical = typeof LOGICAL[number];
export type TaggedLogical<V extends Valuable, E = Verification<V>> = TaggedAnd<V, E> | TaggedOr<V, E> | TaggedNot<V, E> | TaggedNor<V, E>;
export type Logical<V extends Valuable, E = Verification<V>> = And<V, E> | Or<V, E> | Not<V, E> | Nor<V, E>;
export declare const verifyLogical: <V extends Valuable = Valuable, E = Verification<V>, L = Logical<V, E> | TaggedLogical<V, E>>(val: V | V[], expr: L, error: (msg: string) => void, fallback: Verify<V, E>) => Promise<boolean | undefined>;
//# sourceMappingURL=Logical.d.ts.map