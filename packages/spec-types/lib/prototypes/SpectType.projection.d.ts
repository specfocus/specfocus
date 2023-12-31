import { Shape } from "./SpecType.shape";
/**
 * [K in keyof T]?: This part creates a mapped type iterating over all keys of T (which extends Shape). The optional ? allows for partial projections.
 * T[K] extends (infer U)[]: Checks if the type of the property T[K] is an array. The infer U is used to infer the type of elements within the array.
 * U extends Shape ? Projection<U> | 0 | 1 : 0 | 1: For array types, this checks if the elements (U) are of type Shape. If so, it allows either a recursive Projection or 0/1. If U is a scalar, only 0/1 is allowed.
 * T[K] extends Shape ? Projection<T[K]> | 0 | 1 : 0 | 1: For non-array types, this checks if the property T[K] is a Shape. If it is, it allows a recursive Projection or 0/1. If it's a scalar, only 0/1 is allowed.
 */
export type Projection<T extends Shape> = {
    [K in keyof T]?: T[K] extends (infer U)[] ? U extends Shape ? Projection<U> | 0 | 1 : 0 | 1 : T[K] extends Shape ? Projection<T[K]> | 0 | 1 : 0 | 1;
};
//# sourceMappingURL=SpectType.projection.d.ts.map