import { type TextStyle } from "./text-styles";
declare const LINE_HEIGHTS: readonly [13, 16, 18, 19, 20, 22, 24, 25, 30, 41, 45, 68];
export type LineHeight = typeof LINE_HEIGHTS[number];
export type LineHeights = Record<TextStyle | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11, LineHeight>;
declare const lineHeights: LineHeights;
export default lineHeights;
//# sourceMappingURL=line-heights.d.ts.map