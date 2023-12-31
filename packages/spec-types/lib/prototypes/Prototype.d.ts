import { type StringSpec } from "./SpecType.string";
import { type Verification } from "../verifications/Verification";
import { type Valuable } from "./Valuable";
export type VerificationOf<V extends Valuable> = V extends (bigint | BigInt) ? Verification<V> : V extends (boolean | Boolean) ? Verification<V> : V extends (number | Number) ? Verification<V> : V extends (string | String) ? StringSpec : never;
export type IndexType<T, K extends keyof T> = T[K] | T[K][];
//# sourceMappingURL=Prototype.d.ts.map