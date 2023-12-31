import { type Comparison } from "../comparisons";
export declare const $size = "$size";
export interface Size<V extends number = number> {
    [$size]: V | Comparison<V>;
}
export declare const Singular: Size<1>;
declare const verifySize: <T>(val: T, specs: Partial<Size>, error: (msg: string) => void) => boolean | undefined;
export default verifySize;
//# sourceMappingURL=Field.$size.d.ts.map