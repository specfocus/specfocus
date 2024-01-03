var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import { alignSelf, borders, bottom, color, display, flexBasis, height, justifySelf, left, maxHeight, maxWidth, minHeight, minWidth, opacity, order, position, right, space, top, verticalAlign, width } from "styled-system";
import boxSpacer from "../boxSpacer";
import { transform } from "../Box/Box";
// intermediate component to strip width/height/transform props
const I = React.forwardRef((_a, ref) => {
    var { width, height, transform } = _a, props = __rest(_a, ["width", "height", "transform"]);
    return _jsx("svg", Object.assign({ viewBox: "0 0 290 290" }, props, { ref: ref }));
});
const SvgIcon = styled(I)({ fill: 'currentColor' }, boxSpacer, space, display, position, minWidth, maxWidth, width, color, borders, order, alignSelf, height, minHeight, maxHeight, flexBasis, justifySelf, top, left, right, bottom, opacity, verticalAlign, transform);
Object.assign(SvgIcon, {
    propTypes: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, boxSpacer.propTypes), space.propTypes), display.propTypes), position.propTypes), minWidth.propTypes), maxWidth.propTypes), width.propTypes), color.propTypes), borders.propTypes), order.propTypes), alignSelf.propTypes), height.propTypes), minHeight.propTypes), maxHeight.propTypes), flexBasis.propTypes), justifySelf.propTypes), top.propTypes), left.propTypes), right.propTypes), bottom.propTypes), opacity.propTypes), verticalAlign.propTypes)
});
export default SvgIcon;
