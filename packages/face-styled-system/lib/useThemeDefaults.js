import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { withTheme } from "styled-components";
import getDisplayName from "./getDisplayName";
import hoist from "./utils/hoist";
const useThemeDefaults = (getDefaultProps, Component) => {
    const hoc = withTheme(React.forwardRef((props, ref) => (_jsx(Component, Object.assign({}, getDefaultProps(props), props, { ref: ref })))));
    // https://github.com/styled-components/styled-components/issues/2531
    hoist(hoc, Component);
    return Object.assign(hoc, { displayName: `useThemeDefaults(${getDisplayName(Component)})` });
};
export default useThemeDefaults;
