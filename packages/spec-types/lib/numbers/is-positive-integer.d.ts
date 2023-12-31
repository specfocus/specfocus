import { type Integer } from "./is-integer";
export type PositiveInteger = Integer;
declare const isPositiveInteger: (val: number | Number, test?: ((val: PositiveInteger) => boolean) | undefined) => val is number;
export default isPositiveInteger;
//# sourceMappingURL=is-positive-integer.d.ts.map