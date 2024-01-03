import { jsx as _jsx } from "react/jsx-runtime";
import "../../types/jest-styled-components";
import testPassThroughCSSPropsForComponent from "../utils/testPassThroughCSSPropsForComponent";
import renderWithTheme from "../utils/renderWithTheme";
import Box from "./Box";
import fontSizes from "../font-sizes";
import lineHeights from "../line-heights";
import letterSpacings from "../letter-spacings";
import TEXT_STYLES from "../text-styles";
const theme = {};
const supportedBoxProps = [
    { prop: "alignContent", values: ["space-between"] },
    { prop: "alignItems", values: ["baseline"] },
    { prop: "alignSelf", values: ["baseline"] },
    {
        prop: "bg",
        cssProp: "background-color",
        values: ["red", ["clrRed", theme.colors.clrRed]],
    },
    { prop: "border", values: ["1px solid black"] },
    { prop: "borderLeft", values: ["1px solid black"] },
    { prop: "borderRight", values: ["1px solid black"] },
    { prop: "borderTop", values: ["1px solid black"] },
    { prop: "borderBottom", values: ["1px solid black"] },
    { prop: "borderColor", values: ["red", ["clrRed", theme.colors.clrRed]] },
    { prop: "borderRadius", values: ["4px"] },
    { prop: "borderStyle", values: ["dotted"] },
    { prop: "bottom", values: ["0px"] },
    { prop: "color", values: ["red", ["clrRed", theme.colors.clrRed]] },
    { prop: "cursor", values: ["crosshair"] },
    { prop: "display", values: ["none"] },
    { prop: "flex", values: ["0 1 auto"] },
    { prop: "flexBasis", values: ["200px"] },
    { prop: "flexDirection", values: ["column"] },
    { prop: "flexGrow", values: ["1"] },
    { prop: "flexFlow", values: ["row wrap"] },
    { prop: "flexShrink", values: ["1"] },
    { prop: "flexWrap", values: ["wrap-reverse"] },
    { prop: "fontFamily", values: ["serif"] },
    { prop: "fontSize", values: ["14pt"] },
    { prop: "gridColumn", values: ["span 2"] },
    { prop: "gridColumnStart", values: ["span 2"] },
    { prop: "gridColumnEnd", values: ["span 2"] },
    { prop: "gridRow", values: ["span 2"] },
    { prop: "gridRowStart", values: ["span 2"] },
    { prop: "gridRowEnd", values: ["span 2"] },
    { prop: "gridArea", values: ["2 / 1 / 2 / 4"] },
    { prop: "height", values: ["200px"] },
    { prop: "justifyContent", values: ["space-between"] },
    { prop: "justifyItems", values: ["end"] },
    { prop: "justifySelf", values: ["baseline"] },
    { prop: "left", values: ["0px"] },
    { prop: "marginTop", values: ["10px"] },
    { prop: "marginRight", values: ["10px"] },
    { prop: "marginBottom", values: ["10px"] },
    { prop: "marginLeft", values: ["10px"] },
    { prop: "margin", values: ["10px"] },
    { prop: "mx", cssProp: "margin-left", values: ["10px"] },
    { prop: "my", cssProp: "margin-top", values: ["10px"] },
    { prop: "paddingTop", values: ["10px"] },
    { prop: "paddingRight", values: ["10px"] },
    { prop: "paddingBottom", values: ["10px"] },
    { prop: "paddingLeft", values: ["10px"] },
    { prop: "padding", values: ["10px"] },
    { prop: "placeContent", values: ["start space-evenly"] },
    { prop: "placeSelf", values: ["center stretch"] },
    { prop: "placeItems", values: ["center stretch"] },
    { prop: "px", cssProp: "padding-left", values: ["10px"] },
    { prop: "py", cssProp: "padding-top", values: ["10px"] },
    { prop: "maxHeight", values: ["200px"] },
    { prop: "maxWidth", values: ["200px"] },
    { prop: "minHeight", values: ["200px"] },
    { prop: "minWidth", values: ["200px"] },
    { prop: "order", values: ["4"] },
    { prop: "overflow", values: ["hidden"] },
    { prop: "position", values: ["sticky"] },
    { prop: "right", values: ["0px"] },
    { prop: "textAlign", values: ["center"] },
    { prop: "textDecoration", values: ["green wavy underline"] },
    { prop: "textTransform", values: ["uppercase"] },
    { prop: "textOverflow", values: ["ellipsis"] },
    { prop: "transition", values: ["all 0.2s ease-in-out"] },
    { prop: "top", values: ["0px"] },
    { prop: "transform", values: ["0.5turn"] },
    { prop: "verticalAlign", values: ["middle"] },
    { prop: "visibility", values: ["hidden"] },
    { prop: "whiteSpace", values: ["pre"] },
    { prop: "width", values: ["200px"] },
    { prop: "wordBreak", values: ["break-all"] },
    { prop: "zIndex", values: ["1000"] },
];
describe("test supported props for Box", () => {
    testPassThroughCSSPropsForComponent(Box, supportedBoxProps, theme);
});
describe("test textStyle prop on Box", () => {
    it("textStyle support", () => {
        const tree = renderWithTheme(_jsx(Box, { textStyle: "bodySmallRegular" }), theme).toJSON();
        expect(tree).toHaveStyleRule("font-size", `${fontSizes[TEXT_STYLES.BODY_SMALL]}px`);
        expect(tree).toHaveStyleRule("line-height", `${lineHeights[TEXT_STYLES.BODY_SMALL]}px`);
        expect(tree).toHaveStyleRule("letter-spacing", `${letterSpacings[TEXT_STYLES.BODY_SMALL]}em`);
    });
});
