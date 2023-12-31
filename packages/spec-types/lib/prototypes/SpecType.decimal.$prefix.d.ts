import { $add, $mul } from "../numbers/calculus/arithmetics";
import { type ChoicesSpecType } from "./SpecType.choices";
export declare const $prefix = "$prefix";
export type $Prefix = typeof $prefix;
export type PrefixType = ChoicesSpecType<typeof $add | typeof $mul | undefined>;
export type TaggedDecimalPrefixSpec = [$Prefix, PrefixType];
export type DecimalPrefixSpec = {
    [$prefix]: PrefixType;
};
export declare const verifyDecimalPrefix: (val: string | string[], spec: unknown, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=SpecType.decimal.$prefix.d.ts.map