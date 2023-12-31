import { type Integer } from "./is-integer";
export type NonNegativeInteger = Integer;
declare const isNonNegativeInteger: (val: number | Number, test?: ((val: NonNegativeInteger) => boolean) | undefined) => val is number;
export default isNonNegativeInteger;
//# sourceMappingURL=is-non-negative-integer.d.ts.map