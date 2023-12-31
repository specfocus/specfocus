import { type Valuable, type ValuableArray } from "./Valuable";
export type FlatValuableShape<S extends {} = {}, K extends keyof S = keyof S> = S[K] extends Valuable ? {
    [key in K]: S[key] | undefined;
} : S[K] extends ValuableArray ? {
    [key in K]: S[key];
} : never;
//# sourceMappingURL=FlatValuableShape.d.ts.map