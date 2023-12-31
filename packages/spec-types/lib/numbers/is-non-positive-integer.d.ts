import { type Integer } from "./is-integer";
export type NonPositiveInteger = Integer;
declare const isNonPositiveInteger: (val: number | Number, test?: ((val: NonPositiveInteger) => boolean) | undefined) => val is number;
export default isNonPositiveInteger;
//# sourceMappingURL=is-non-positive-integer.d.ts.map