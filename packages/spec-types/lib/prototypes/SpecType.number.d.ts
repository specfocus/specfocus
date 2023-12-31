import { type Comparison, type TaggedComparison } from "../comparisons/Comparison";
import { type Verification } from "../verifications";
import { type NumberClassSpec, type TaggedNumberClassSpec } from "./SpecType.number.$class";
type TaggedNumberSpec = TaggedComparison<number> | TaggedNumberClassSpec;
type ExtendedNumberSpec = Comparison<number> | NumberClassSpec | (Comparison<number> & NumberClassSpec);
export type NumberSpec = Verification<number, ExtendedNumberSpec | TaggedNumberSpec>;
export type NumberSpecType = Readonly<['number', NumberSpec?]>;
export declare const $Number: NumberSpecType;
export {};
//# sourceMappingURL=SpecType.number.d.ts.map