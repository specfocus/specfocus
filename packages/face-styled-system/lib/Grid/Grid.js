import useThemeDefaults from "@specfocus/face-styled-system/lib/useThemeDefaults";
import styled from "styled-components";
import { style } from "styled-system";
import Box from "../Box";
const gridGap = style({
    prop: 'gridGap',
    key: 'space',
});
// new version of gridGap
const gap = style({
    prop: 'gap',
    key: 'space'
});
const gridColumnGap = style({
    prop: 'gridColumnGap',
    key: 'space',
});
const gridRowGap = style({
    prop: 'gridRowGap',
    key: 'space',
});
const gridAutoFlow = style({
    prop: 'gridAutoFlow'
});
const gridAutoColumns = style({
    prop: 'gridAutoColumns'
});
const gridAutoRows = style({
    prop: 'gridAutoRows'
});
const gridTemplateColumns = style({
    prop: 'gridTemplateColumns'
});
const gridTemplateRows = style({
    prop: 'gridTemplateRows'
});
const gridTemplateAreas = style({
    prop: 'gridTemplateAreas'
});
/**
 * Grid item properties are already available on Box, so that Box can be used
 * as children of Grid
 */
const Grid = useThemeDefaults(() => ({
    display: 'grid'
}), styled(Box)(gap, gridGap, gridColumnGap, gridRowGap, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas));
export default Grid;
