import { createMediaQuery } from "styled-system";
const makeScaledObjStyles = ({ theme, styleObjMap }) => {
    let styles = [];
    for (let bpName in styleObjMap) {
        if (Object.prototype.hasOwnProperty.call(styleObjMap, bpName)) {
            const bp = theme.breakpoints[bpName];
            const mediaQuery = createMediaQuery(bp);
            if (!bp) {
                styles.unshift(styleObjMap[bpName]);
            }
            else {
                styles.push({ [mediaQuery]: styleObjMap[bpName] });
            }
        }
    }
    // Assuming the sorting logic here is based on specific criteria
    // This sort might need to be adjusted based on how you want to order the styles
    styles.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
    return styles;
};
export default makeScaledObjStyles;
