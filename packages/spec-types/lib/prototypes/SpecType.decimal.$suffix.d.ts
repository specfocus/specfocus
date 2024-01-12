import { $add, $mul } from "./$SpecType.choices";
import { type ChoicesSpecType } from "./SpecType.choices";
export declare const $suffix = "$suffix";
export type $Suffix = typeof $suffix;
export type SuffixType = ChoicesSpecType<typeof $add | typeof $mul | undefined>;
export type TaggedDecimalSuffixSpec = [$Suffix, SuffixType];
export type DecimalSuffixSpec = {
    [$suffix]: SuffixType;
};
export declare const verifyDecimalSuffix: (val: string | string[], spec: unknown, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=SpecType.decimal.$suffix.d.ts.map