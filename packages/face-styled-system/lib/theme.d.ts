import { Serie } from "@specfocus/spec-types/lib/numbers/serie";
import { type Breakpoints } from "./breakpoints";
import { type Colors } from "./colors";
import { type LetterSpacings } from "./letter-spacings";
import { type LineHeights } from "./line-heights";
import { type LineSpacings } from "./line-spacings";
import { type ResponsiveASC, type ResponsiveCSSValue } from "./responsive";
import { type Space } from "./spacer";
import { type TextStyle, type TextStyles } from "./text-styles";
import { DefaultTheme } from "styled-components";
export interface BaseTheme extends DefaultTheme {
    borderWidth: string;
    breakpoints: Breakpoints;
    colors: Colors;
    copyTextStyle: ResponsiveCSSValue;
    font: string;
    fontUrl: string;
    fontSizes: {
        [K in TextStyle | Serie<0, 9>]: number;
    };
    fontWeights: {
        [K in 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | Serie<0, 5>]: number;
    };
    hrColor: string;
    letterSpacings: LetterSpacings;
    lineHeights: LineHeights;
    lineSpacings: LineSpacings;
    listMargins: Record<'ol' | 'ul', string>;
    listStyles: {
        [K in 'none' | 'ordered' | 'unordered' | 'noBullet']: {
            listStyleType?: 'decimal' | 'disc' | 'none';
            marginLeft?: string;
        };
    };
    mediaQueries: Record<keyof Breakpoints, string>;
    panelColors: {
        [K in 'standard' | 'info' | 'success' | 'error' | 'warning']: {
            iconColor: keyof Colors;
            backgroundColor: keyof Colors;
            borderColor: keyof Colors;
            borderRadius: string;
            borderStyle: 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'hidden' | 'inset' | 'outset' | 'ridge';
            borderWidth: string;
        };
    };
    panelPadding: string;
    radii: {
        0: 4;
        default: 4;
    };
    radius: string;
    responsiveASC?: ResponsiveASC;
    space: {
        [K in Space | Serie<0, 9>]: number;
    };
    textStyles: TextStyles;
}
export type PropsWithTheme<P> = P & {
    theme: BaseTheme;
};
export type StyledComponentTheme<T, K extends string> = BaseTheme & {
    [key in K]: T;
};
export type PropsWithComponentTheme<P, T, K extends string> = P & {
    theme: StyledComponentTheme<T, K>;
};
//# sourceMappingURL=theme.d.ts.map