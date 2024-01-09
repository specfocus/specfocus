import styled from "styled-components";
import { alignContent, alignItems, alignSelf, backgroundColor, backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize, borders, bottom, boxShadow, color, display, flex, flexBasis, flexDirection, flexWrap, fontFamily, fontSize, height, justifyContent, justifyItems, justifySelf, left, maxHeight, maxWidth, minHeight, minWidth, opacity, order, overflow, position, right, space, style, textAlign, top, verticalAlign, width, zIndex, } from "styled-system";
import columnCount from "../columnCount";
import cursor from "../cursor";
import boxSpacer from "@specfocus/styledstyled-system/lib/BoxSpacer";
import textStyle from "../textStyle";
export const truncate = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};
const gap = style({
    prop: 'gap'
});
const visibility = style({
    prop: 'visibility'
});
const whiteSpace = style({
    prop: 'whiteSpace'
});
const wordBreak = style({
    prop: 'wordBreak'
});
const textOverflow = style({
    prop: 'textOverflow'
});
const textTransform = style({
    prop: 'textTransform'
});
const gridColumn = style({
    prop: 'gridColumn'
});
const gridColumnStart = style({
    prop: 'gridColumnStart'
});
const gridColumnEnd = style({
    prop: 'gridColumnEnd'
});
const gridRow = style({
    prop: 'gridRow'
});
const gridRowStart = style({
    prop: 'gridRowStart'
});
const gridRowEnd = style({
    prop: 'gridRowEnd'
});
const gridArea = style({
    prop: 'gridArea'
});
const placeSelf = style({
    prop: 'placeSelf'
});
const placeItems = style({
    prop: 'placeItems'
});
const placeContent = style({
    prop: 'placeContent'
});
const flexFlow = style({
    prop: 'flexFlow'
});
const flexShrink = style({
    prop: 'flexShrink'
});
const flexGrow = style({
    prop: 'flexGrow'
});
export const transform = style({
    prop: 'transform'
});
const transition = style({
    prop: 'transition'
});
const textDecoration = style({
    prop: 'textDecoration'
});
const WebkitTextFillColor = style({
    prop: 'WebkitTextFillColor'
});
const WebkitLineClamp = style({
    prop: 'WebkitLineClamp'
});
const WebkitBoxOrient = style({
    prop: 'WebkitBoxOrient'
});
const Box = styled('div')({
    boxSizing: 'border-box',
    // kill margin-collapse to allow us to couple negative margins
    overflow: 'visible',
    '-webkit-overflow-scrolling': 'touch'
}, cursor, boxSpacer, columnCount, space, display, position, top, bottom, left, right, minWidth, maxWidth, width, fontSize, fontFamily, textAlign, color, borders, flex, order, placeSelf, alignSelf, height, minHeight, maxHeight, alignItems, alignContent, justifyItems, justifyContent, placeItems, placeContent, flexWrap, flexBasis, flexGrow, flexShrink, flexFlow, flexDirection, justifySelf, verticalAlign, zIndex, overflow, visibility, whiteSpace, wordBreak, opacity, textTransform, textOverflow, textDecoration, textStyle, gridColumn, gridColumnStart, gridColumnEnd, gridRow, gridRowStart, gridRowEnd, gridArea, transform, boxShadow, backgroundColor, backgroundImage, backgroundRepeat, backgroundPosition, backgroundSize, transition, WebkitTextFillColor, WebkitLineClamp, WebkitBoxOrient, gap);
Box.displayName = 'Box';
Box.propTypes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, columnCount.propTypes), cursor.propTypes), textStyle.propTypes), space.propTypes), display.propTypes), position.propTypes), top.propTypes), bottom.propTypes), left.propTypes), right.propTypes), minWidth.propTypes), maxWidth.propTypes), width.propTypes), fontSize.propTypes), fontFamily.propTypes), textAlign.propTypes), color.propTypes), borders.propTypes), flex.propTypes), order.propTypes), alignSelf.propTypes), height.propTypes), minHeight.propTypes), maxHeight.propTypes), alignItems.propTypes), alignContent.propTypes), justifyItems.propTypes), justifyContent.propTypes), flexWrap.propTypes), flexBasis.propTypes), flexDirection.propTypes), justifySelf.propTypes), boxSpacer.propTypes), verticalAlign.propTypes), zIndex.propTypes), overflow.propTypes), opacity.propTypes), boxShadow.propTypes), backgroundColor.propTypes), backgroundImage.propTypes), backgroundRepeat.propTypes), backgroundPosition.propTypes), backgroundSize.propTypes);
export default Box;
