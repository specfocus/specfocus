var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import hasStringType from "@specfocus/spec-objects/lib/has-string-type";
import { TextualContainer } from "@specfocus/spec-texts/lib/container";
import contextualize from "@specfocus/spec-texts/lib/contextualize";
import { useContext, useMemo } from "react";
import Contextual, { makeVariant } from "./context";
const ContextualProvider = ({ breakpoints = {
    xs: 40,
    sm: 80,
    md: 120
}, children, lang, root, separator = '.' }) => {
    const parent = useContext(Contextual);
    const container = useMemo(() => new TextualContainer(root, separator, lang, parent === null || parent === void 0 ? void 0 : parent.container), [root, separator, lang, parent === null || parent === void 0 ? void 0 : parent.container]);
    const value = useMemo(() => ({
        container,
        format: (textual, size, ...replace) => __awaiter(void 0, void 0, void 0, function* () {
            if (hasStringType(textual)) {
                const key = textual;
                textual = yield container.get(key).catch(() => { var _a; return (_a = key.split(separator).pop()) !== null && _a !== void 0 ? _a : key; });
            }
            let variant = makeVariant(size, breakpoints);
            let result = contextualize(textual, variant, ...replace);
            return result;
        })
    }), [container, contextualize]);
    return (_jsx(Contextual.Provider, { value: value, children: children }));
};
export default ContextualProvider;
