import { type Comparison, type TaggedComparison } from "../comparisons/Comparison";
import { type Verification } from "../verifications";
import { type StringClassSpec, type TaggedStringClassSpec } from "./SpecType.string.$class";
import { type StringLengthSpec, type TaggedStringLengthSpec } from "./SpecType.string.$length";
type TaggedStringSpec = TaggedComparison<string> | TaggedStringClassSpec | TaggedStringLengthSpec;
type ExtendedStringSpec = Comparison<string> | StringClassSpec | StringLengthSpec | (Comparison<string> & StringClassSpec & StringLengthSpec) | (Comparison<string> & StringClassSpec) | (Comparison<string> & StringLengthSpec) | (StringClassSpec & StringLengthSpec);
export type StringSpec = Verification<string, ExtendedStringSpec | TaggedStringSpec>;
export type StringSpecType = Readonly<['string', StringSpec?, string?]>;
declare const $String: StringSpecType;
export default $String;
//# sourceMappingURL=SpecType.string.d.ts.map