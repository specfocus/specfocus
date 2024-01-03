import mapObj from "@specfocus/face-styled-system/lib/utils/mapObj";
import makeScaledArrayStyles from "./makeScaledArrayStyles";
import makeScaledObjStyles from "./makeScaledObjStyles";
/**
 * Space logic, providing the spaceAbove (sa) and spaceBelow (sb) props
 */
const makeSpaceStyle = ({ theme, spaceVals, cssProp }) => Array.isArray(spaceVals)
    ? makeScaledArrayStyles({
        theme,
        styleObjArr: spaceVals.map((val) => ({
            [cssProp]: theme.space[val] || 0
        }))
    })
    : makeScaledObjStyles({
        theme,
        styleObjMap: mapObj(val => ({
            [cssProp]: theme.space[val] || 0
        }), spaceVals)
    });
export default makeSpaceStyle;
