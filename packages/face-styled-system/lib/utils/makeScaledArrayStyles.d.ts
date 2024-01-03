import { type StyledObject } from "styled-components";
import { type BaseTheme } from '../theme';
export type StyleObjectArray = StyledObject[];
declare const makeScaledArrayStyles: ({ theme, styleObjArr }: {
    theme: BaseTheme;
    styleObjArr: StyleObjectArray;
}) => StyledObject[];
export default makeScaledArrayStyles;
//# sourceMappingURL=makeScaledArrayStyles.d.ts.map