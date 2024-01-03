import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
import SvgIcon from ".";
const createSvgIcon = (content, displayName) => {
    const Component = memo(forwardRef((props, ref) => (_jsx(SvgIcon, Object.assign({}, props, { ref: ref, children: content })))));
    Component.displayName = `${displayName}Icon`;
    return Component;
};
export default createSvgIcon;
