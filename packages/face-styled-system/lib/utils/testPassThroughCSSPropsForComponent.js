import { createElement } from "react";
import renderWithTheme from "./renderWithTheme";
import camelToHyphen from "./camelToHyphen";
const testPassThroughCSSPropsForComponent = (Component, props, theme) => props.forEach(({ prop, cssProp = null, values }) => {
    it(`${prop} support`, () => {
        values.forEach((testValue) => {
            const tree = renderWithTheme(createElement(Component, {
                [prop]: Array.isArray(testValue) ? testValue[0] : testValue,
            }), theme).toJSON();
            expect(tree).toHaveStyleRule(cssProp || camelToHyphen(prop), Array.isArray(testValue) ? testValue[1] : testValue);
        });
    });
});
export default testPassThroughCSSPropsForComponent;
