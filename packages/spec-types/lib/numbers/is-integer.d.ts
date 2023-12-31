export type Integer = number;
declare const isInteger: (val: unknown, test?: ((val: Integer) => boolean) | undefined) => val is number;
export default isInteger;
//# sourceMappingURL=is-integer.d.ts.map