import { type Verifiable } from "@specfocus/spec-verifications/lib/verifiable";
export type Value = bigint | boolean | number | string;
export type ValueWrapper = BigInt | Boolean | Date | Number | String;
export type Valuable = Verifiable;
export type ValuableArray<V extends Valuable = Value> = V[];
//# sourceMappingURL=Valuable.d.ts.map