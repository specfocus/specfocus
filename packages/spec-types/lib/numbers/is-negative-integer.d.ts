import { type Integer } from "./is-integer";
export type NegativeInteger = Integer;
declare const isNegativeInteger: (val: number | Number, test?: ((val: NegativeInteger) => boolean) | undefined) => val is number;
export default isNegativeInteger;
//# sourceMappingURL=is-negative-integer.d.ts.map