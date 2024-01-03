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
import { jsx as _jsx } from "react/jsx-runtime";
import { Children, cloneElement, isValidElement } from "react";
/**
 * Pass a prop from the parent to all children, but only when the child doesn't
 * have that prop set on itself
 */
const passPropToChildren = (prop, Component) => {
    const ComponentWithPassedProp = (props) => {
        const _a = props, { children } = _a, restProps = __rest(_a, ["children"]);
        return (_jsx(Component, Object.assign({}, restProps, { children: Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return child.props[prop] !== undefined
                        ? child
                        : cloneElement(child, Object.assign({ [prop]: props[prop] }, child.props));
                }
                return child;
            }) })));
    };
    return ComponentWithPassedProp;
};
export default passPropToChildren;
