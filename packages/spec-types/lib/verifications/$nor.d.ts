import { type Comparison } from "../comparisons";
import { type Valuable } from "../prototypes/Valuable";
import { type Logical } from "./Logical";
import { type Verification, type Verify } from "./Verification";
/** Logical NOR */
export declare const $nor = "$nor";
export interface Nor<V extends Valuable, E = Comparison<V>> {
    [$nor]: (E | Logical<V, E>)[];
}
export type $Nor = typeof $nor;
export type TaggedNor<V extends Valuable, E = Comparison<V>> = [$Nor, (E | Logical<V, E>)[]] | [$Nor, ...(E | Logical<V, E>)[]];
export declare const xnor: (acc: boolean | undefined, value: boolean | undefined) => boolean;
export declare const verifyNor: <V extends Valuable, E = Verification<V>>(val: V | V[], expr: unknown, error: (msg: string) => void, fallback: Verify<V, E>) => Promise<boolean | undefined>;
//# sourceMappingURL=$nor.d.ts.map