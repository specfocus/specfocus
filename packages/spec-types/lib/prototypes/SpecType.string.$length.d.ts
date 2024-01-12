import { type Vefifiable } from "@specfocus/spec-verifications/lib/verifiable";
import { type Verification } from "@specfocus/spec-verifications/lib/verification";
export declare const $length = "$length";
export type $Length = typeof $length;
export type TaggedStringLengthSpec = [$Length, number | Verification<number>];
export type StringLengthSpec = {
    [$length]: number | Verification<number>;
};
export declare const verifyStringLength: (val: string | string[], expr: StringLengthSpec | TaggedStringLengthSpec, error: (msg: string) => void) => boolean | undefined;
declare const $default: TaggedStringLengthSpec;
export default $default;
//# sourceMappingURL=SpecType.string.$length.d.ts.map