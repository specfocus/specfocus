import { isObject, variant } from "styled-system";
import mapScales from "./mapScales";
/**
 * Just like styled-system's `variant` but with scaled array support, allowing
 * users to do things like `<Buttom variant={["primary", "secondary"]} />`
 * @param {string} props.key
 * @param {string} props.prop
 * @returns {function}
 */
const scaledVariant = ({ key, prop = 'variant' }) => (props) => {
    // single option selected, e.g. variant="h1Emph"
    if (!isObject(props[prop])) {
        return variant({ key, prop })(props);
    }
    // multiple options selected, e.g. variant={["h3Emph", "h1Emph"]} or variant={{ sm: "h3Emph", md: "h1Emph" }}
    return mapScales(props.theme.breakpoints, props.theme[key], props[prop]);
};
export default scaledVariant;
