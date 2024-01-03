import { type TextStyle } from "./text-styles";
declare const LETTER_SPACINGS: readonly [-0.032, -0.025, -0.024, -0.016, -0.011, -0.006, 0, 0.002, 0.006, 0.01, 0.011, 0.015, 0.019];
export type LetterSpacing = typeof LETTER_SPACINGS[number];
export type LetterSpacings = Record<TextStyle | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, LetterSpacing>;
declare const letterSpacings: LetterSpacings;
export default letterSpacings;
//# sourceMappingURL=letter-spacings.d.ts.map