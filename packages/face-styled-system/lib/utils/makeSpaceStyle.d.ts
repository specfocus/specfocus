import { type BaseTheme } from "@specfocus/face-styled-system/lib/theme";
import { type Space } from "../spacer";
import { StyledObject } from "styled-components";
type MakeSpaceStyleArgs = {
    theme: BaseTheme;
    spaceVals: Space[] | Record<string, Space>;
    cssProp: string;
};
/**
 * Space logic, providing the spaceAbove (sa) and spaceBelow (sb) props
 */
declare const makeSpaceStyle: ({ theme, spaceVals, cssProp }: MakeSpaceStyleArgs) => StyledObject[];
export default makeSpaceStyle;
//# sourceMappingURL=makeSpaceStyle.d.ts.map