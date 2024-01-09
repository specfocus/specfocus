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
import mergeAll from "@specfocus/styledstyled-system/lib/utils/mergeAll";
import PropTypes from "prop-types";
import { getSpacerKeys } from "./Box/theme";
import makeSpaceStyle from "./utils/makeSpaceStyle";
const boxSpacer = (_a) => {
    var { theme } = _a, props = __rest(_a, ["theme"]);
    const { spaceAbove, spaceBelow } = getSpacerKeys(props);
    const above = spaceAbove
        ? makeSpaceStyle({
            theme,
            spaceVals: spaceAbove,
            cssProp: 'marginTop'
        })
        : [];
    const below = spaceBelow
        ? makeSpaceStyle({
            theme,
            spaceVals: spaceBelow,
            cssProp: 'marginBottom'
        })
        : [];
    return mergeAll(...[...above, ...below]);
};
boxSpacer.propTypes = {
    sa: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    sb: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    spaceAbove: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    spaceBelow: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};
export default boxSpacer;
