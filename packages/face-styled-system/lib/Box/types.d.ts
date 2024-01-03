import { type PropsWithChildren } from "react";
import { type StyledComponent } from "styled-components/macro";
import { type ResponsiveCSSValue } from "../responsive";
import { type Spacer } from "../spacer";
import { type TextStyle } from "../text-styles";
import { type BaseTheme } from "../theme";
export interface SystemPaddingProps {
    p?: ResponsiveCSSValue;
    padding?: ResponsiveCSSValue;
    px?: ResponsiveCSSValue;
    paddingX?: ResponsiveCSSValue;
    py?: ResponsiveCSSValue;
    paddingY?: ResponsiveCSSValue;
    pt?: ResponsiveCSSValue;
    paddingTop?: ResponsiveCSSValue;
    pb?: ResponsiveCSSValue;
    paddingBottom?: ResponsiveCSSValue;
    pl?: ResponsiveCSSValue;
    paddingLeft?: ResponsiveCSSValue;
    pr?: ResponsiveCSSValue;
    paddingRight?: ResponsiveCSSValue;
}
export interface SystemMarginProps {
    m?: ResponsiveCSSValue;
    margin?: ResponsiveCSSValue;
    mb?: ResponsiveCSSValue;
    marginBottom?: ResponsiveCSSValue;
    mt?: ResponsiveCSSValue;
    marginTop?: ResponsiveCSSValue;
    ml?: ResponsiveCSSValue;
    marginLeft?: ResponsiveCSSValue;
    mr?: ResponsiveCSSValue;
    marginRight?: ResponsiveCSSValue;
    mx?: ResponsiveCSSValue;
    marginX?: ResponsiveCSSValue;
    my?: ResponsiveCSSValue;
    marginY?: ResponsiveCSSValue;
}
export interface SpaceProps extends SystemPaddingProps, SystemMarginProps {
}
export interface SystemColorProps {
    bg?: ResponsiveCSSValue;
    backgroundColor?: ResponsiveCSSValue;
    color?: ResponsiveCSSValue;
}
export interface SystemBackgroundImageProps {
    backgroundImage?: ResponsiveCSSValue;
    backgroundSize?: ResponsiveCSSValue;
    backgroundRepeat?: ResponsiveCSSValue;
}
export interface SystemSpaceProps {
    sa?: Spacer;
    spaceAbove?: Spacer;
    sb?: Spacer;
    spaceBelow?: Spacer;
}
export interface SystemBordersProps {
    border?: ResponsiveCSSValue;
    borderLeft?: ResponsiveCSSValue;
    borderRight?: ResponsiveCSSValue;
    borderTop?: ResponsiveCSSValue;
    borderBottom?: ResponsiveCSSValue;
    borderColor?: ResponsiveCSSValue;
    borderRadius?: ResponsiveCSSValue;
    borderStyle?: ResponsiveCSSValue;
}
export interface SystemBoxProps extends SpaceProps, SystemColorProps, SystemBackgroundImageProps, SystemSpaceProps, SystemBordersProps {
    alignContent?: ResponsiveCSSValue;
    alignItems?: ResponsiveCSSValue;
    alignSelf?: ResponsiveCSSValue;
    gridColumn?: ResponsiveCSSValue;
    gridColumnStart?: ResponsiveCSSValue;
    gridColumnEnd?: ResponsiveCSSValue;
    gridRow?: ResponsiveCSSValue;
    gridRowStart?: ResponsiveCSSValue;
    gridRowEnd?: ResponsiveCSSValue;
    gridArea?: ResponsiveCSSValue;
    bottom?: ResponsiveCSSValue;
    cursor?: ResponsiveCSSValue;
    display?: ResponsiveCSSValue;
    flex?: ResponsiveCSSValue;
    flexBasis?: ResponsiveCSSValue;
    flexDirection?: ResponsiveCSSValue;
    flexGrow?: ResponsiveCSSValue;
    flexShrink?: ResponsiveCSSValue;
    flexFlow?: ResponsiveCSSValue;
    flexWrap?: ResponsiveCSSValue;
    fontFamily?: ResponsiveCSSValue;
    fontSize?: ResponsiveCSSValue;
    width?: ResponsiveCSSValue;
    height?: ResponsiveCSSValue;
    justifyContent?: ResponsiveCSSValue;
    justifySelf?: ResponsiveCSSValue;
    justifyItems?: ResponsiveCSSValue;
    placeContent?: ResponsiveCSSValue;
    placeSelf?: ResponsiveCSSValue;
    placeItems?: ResponsiveCSSValue;
    left?: ResponsiveCSSValue;
    minWidth?: ResponsiveCSSValue;
    maxWidth?: ResponsiveCSSValue;
    maxHeight?: ResponsiveCSSValue;
    minHeight?: ResponsiveCSSValue;
    order?: ResponsiveCSSValue;
    overflow?: ResponsiveCSSValue;
    position?: ResponsiveCSSValue;
    right?: ResponsiveCSSValue;
    transition?: ResponsiveCSSValue;
    textAlign?: ResponsiveCSSValue;
    textStyle?: TextStyle;
    textTransform?: ResponsiveCSSValue;
    textOverflow?: ResponsiveCSSValue;
    top?: ResponsiveCSSValue;
    transform?: ResponsiveCSSValue;
    verticalAlign?: ResponsiveCSSValue;
    visibility?: ResponsiveCSSValue;
    whiteSpace?: ResponsiveCSSValue;
    wordBreak?: ResponsiveCSSValue;
    zIndex?: ResponsiveCSSValue;
    opacity?: ResponsiveCSSValue;
}
export type Box = StyledComponent<'div', BaseTheme, SystemBoxProps>;
export type BoxProps = PropsWithChildren<SystemBoxProps>;
//# sourceMappingURL=types.d.ts.map