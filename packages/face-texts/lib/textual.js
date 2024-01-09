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
import supplant from "@specfocus/spec-strings/lib/supplant";
import { Fragment, createContext, useContext, useMemo } from 'react';
import textualize from "@specfocus/spec-texts/lib/textualize";
const Contextual = createContext({ xs: 300, sm: 600, md: 900 });
export const TextualProvider = Contextual.Provider;
const Textual = (_a) => {
    var { as = Fragment, text, ref, replace, variant } = _a, props = __rest(_a, ["as", "text", "ref", "replace", "variant"]);
    const Component = as;
    const contextual = useContext(Contextual);
    const t = useMemo(() => {
        if (contextual && (ref === null || ref === void 0 ? void 0 : ref.current)) {
            const width = ref.current.offsetWidth;
            if (width < contextual.xs)
                return 'xs';
            else if (width < contextual.sm)
                variant = 'sm';
            else if (width < contextual.md)
                variant = 'md';
            else
                variant = 'lg';
        }
        let t = textualize(text, variant);
        if (replace)
            t = supplant(t, replace);
        // TODO: Add support for i18n and the use supplant again
    }, [contextual, ref, replace, text, variant]);
    return _jsx(Component, Object.assign({}, props, { children: t }));
};
export default Textual;
