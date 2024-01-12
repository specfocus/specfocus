import { type Comparison, type TaggedComparison } from "@specfocus/spec-comparables/lib/Comparison";
import { $And, type Verification } from "@specfocus/spec-verifications/lib";
import { type DecimalClassSpec, type TaggedDecimalClassSpec } from "./SpecType.decimal.$class";
import { type DecimalFactorSpec, type TaggedDecimalFactorSpec } from "./SpecType.decimal.$factor";
import { type DecimalPrefixSpec, type TaggedDecimalPrefixSpec } from "./SpecType.decimal.$prefix";
import { type DecimalSuffixSpec, type TaggedDecimalSuffixSpec } from "./SpecType.decimal.$suffix";
type TaggedSpec = TaggedComparison<string> | TaggedDecimalClassSpec | TaggedDecimalFactorSpec | TaggedDecimalPrefixSpec | TaggedDecimalSuffixSpec;
export type TaggedDecimalSpec = TaggedSpec | [
    $And,
    ...TaggedSpec[]
];
export type ExtendedDecimalSpec = Partial<Comparison<number>> & Partial<DecimalClassSpec> & Partial<DecimalFactorSpec> & Partial<DecimalPrefixSpec> & Partial<DecimalSuffixSpec>;
export type DecimalSpec = Verification<number, ExtendedDecimalSpec | TaggedDecimalSpec>;
export type DecimalSpecType = Readonly<['decimal', DecimalSpec?]>;
export { };
//# sourceMappingURL=SpecType.decimal.d.ts.map