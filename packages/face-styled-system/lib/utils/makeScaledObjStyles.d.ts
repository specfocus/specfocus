import { type StyledObject } from "styled-components";
import { type BaseTheme } from "../theme";
export type StyleObjectMap = Record<string, StyledObject>;
declare const makeScaledObjStyles: ({ theme, styleObjMap }: {
    theme: BaseTheme;
    styleObjMap: StyleObjectMap;
}) => StyledObject[];
export default makeScaledObjStyles;
//# sourceMappingURL=makeScaledObjStyles.d.ts.map