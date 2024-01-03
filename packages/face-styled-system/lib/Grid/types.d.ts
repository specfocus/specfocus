import { type StyledComponent } from "styled-components/macro";
import { type BaseTheme } from "styled-system";
import { type SystemBoxProps } from "../Box/types";
import { type ResponsiveCSSValue } from "../responsive";
import { PropsWithChildren } from "react";
export interface SystemGridProps {
    gap?: ResponsiveCSSValue;
    gridGap?: ResponsiveCSSValue;
    gridColumnGap?: ResponsiveCSSValue;
    gridRowGap?: ResponsiveCSSValue;
    gridAutoFlow?: ResponsiveCSSValue;
    gridAutoColumns?: ResponsiveCSSValue;
    gridAutoRows?: ResponsiveCSSValue;
    gridTemplateColumns?: ResponsiveCSSValue;
    gridTemplateRows?: ResponsiveCSSValue;
    gridTemplateAreas?: ResponsiveCSSValue;
}
export type Grid = StyledComponent<'div', BaseTheme, SystemBoxProps & SystemGridProps>;
export type GridProps = PropsWithChildren<SystemBoxProps & SystemGridProps>;
//# sourceMappingURL=types.d.ts.map