import { type Comparison, type TaggedComparison } from "@specfocus/spec-comparables/lib/Comparison";
import { type Verification } from "@specfocus/spec-verifications/lib";
import { type NumberClassSpec, type TaggedNumberClassSpec } from "./SpecType.number.$class";
type TaggedNumberSpec = TaggedComparison<number> | TaggedNumberClassSpec;
type ExtendedNumberSpec = Comparison<number> | NumberClassSpec | (Comparison<number> & NumberClassSpec);
export type NumberSpec = Verification<number, ExtendedNumberSpec | TaggedNumberSpec>;
export type NumberSpecType = Readonly<['number', NumberSpec?]>;
export declare const $Number: NumberSpecType;
export {};
//# sourceMappingURL=SpecType.number.d.ts.map