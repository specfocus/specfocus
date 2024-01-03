import { createMediaQuery } from 'styled-system';
const makeScaledArrayStyles = ({ theme, styleObjArr }) => styleObjArr.reduce((acc, styleObj, i) => [
    ...acc,
    i === 0
        ? styleObj
        : { [createMediaQuery(theme.breakpoints[i - 1])]: styleObj }
], []);
export default makeScaledArrayStyles;
