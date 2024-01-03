import { Children, Fragment, isValidElement } from "react";
/**
 * Flatten nested fragments, e.g. in cases where a parent expects a flat array of children
 * rather than an array of fragments
 * @param {*} children
 */
const flattenChildren = (children) => Children.toArray(children).reduce((acc, child) => {
    // Checking if the child is a ReactElement and its type is React.Fragment
    if (isValidElement(child) && child.type === Fragment) {
        return acc.concat(flattenChildren(child.props.children));
    }
    acc.push(child);
    return acc;
}, []);
export default flattenChildren;
