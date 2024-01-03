import { createMediaQuery } from "styled-system";
import mergeAll from "./mergeAll";
const mapScalesFn = (breakpoints, styleGetter, scaleProps) => {
    const styles = [];
    if (Array.isArray(scaleProps)) {
        styles.push(styleGetter(scaleProps[0]));
        for (let i = 1; i < scaleProps.slice(0, breakpoints.length + 1).length; i++) {
            if (styleGetter(scaleProps[i])) {
                styles.push({
                    [createMediaQuery(breakpoints[i - 1])]: styleGetter(scaleProps[i])
                });
            }
        }
    }
    else {
        for (let key in scaleProps) {
            const breakpoint = breakpoints[key];
            const media = createMediaQuery(breakpoint);
            const rules = styleGetter(scaleProps[key]);
            if (!breakpoint) {
                styles.unshift(rules);
            }
            else {
                styles.push({ [media]: rules });
            }
        }
        styles.sort();
    }
    return mergeAll(...styles);
};
const mapScales = (breakpoints, variantDict, scaleProps) => mapScalesFn(breakpoints, (prop) => variantDict[prop], scaleProps);
export default mapScales;
