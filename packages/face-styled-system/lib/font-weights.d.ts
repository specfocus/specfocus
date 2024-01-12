import { Serie } from "@specfocus/spec-numbers/lib/serie";
export declare const light = "light";
export declare const regular = "regular";
export declare const medium = "medium";
export declare const semibold = "semibold";
export declare const bold = "bold";
declare const FONT_WEIGHTS: readonly ["light", "regular", "medium", "semibold", "bold"];
export type FontWeight = typeof FONT_WEIGHTS[number];
export type FontWeights = Record<'light' | 'regular' | 'medium' | 'semibold' | 'bold' | Serie<0, 5>, number>;
export default FONT_WEIGHTS;
//# sourceMappingURL=font-weights.d.ts.map