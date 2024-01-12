import { type Serie } from "@specfocus/spec-numbers/lib/serie";
import { type TextStyle } from "./text-styles";
export declare const FONT_SIZES: readonly [11, 12, 13, 14, 15, 16, 17, 18, 20, 24, 34, 41, 64];
export type FontSize = typeof FONT_SIZES[number];
export type FontSizes = Record<TextStyle | Serie<0, 13>, FontSize>;
declare const fontSizes: FontSizes;
export default fontSizes;
//# sourceMappingURL=font-sizes.d.ts.map