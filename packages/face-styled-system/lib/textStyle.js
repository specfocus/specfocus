import PropTypes from "prop-types";
import scaledVariant from "./utils/scaledVariant";
// styled-system already exports a textStyle variant, but this allows us to
// include explicit propTypes
const textStyle = scaledVariant({
    prop: 'textStyle',
    key: 'textStyles'
});
textStyle.propTypes = {
    textStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
};
export default textStyle;
