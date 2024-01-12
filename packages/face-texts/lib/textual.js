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
import { Fragment } from "react";
import useText from "./use-text";
const Textual = (_a) => {
    var { as = Fragment, textual, size, replace } = _a, props = __rest(_a, ["as", "textual", "size", "replace"]);
    const Component = as;
    const text = useText({ textual, size, replace });
    return _jsx(Component, Object.assign({}, props, { children: text }));
};
export default Textual;
