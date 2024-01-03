import { type Breakpoint } from "./breakpoints";
export type ResponsiveCSSValue = number | number[] | string | string[];
export interface ResponsiveASCBreakpoint {
    minWidth: number;
    maxWidth: number;
    contentWidth: number | string;
    paddingX: number | string;
}
export type ResponsiveASC = Record<Breakpoint, ResponsiveASCBreakpoint>;
//# sourceMappingURL=responsive.d.ts.map