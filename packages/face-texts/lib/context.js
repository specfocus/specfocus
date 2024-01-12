import resolve from "@specfocus/spec-entries/lib/resolve";
import { TextualContainer } from "@specfocus/spec-texts/lib/container";
import contextualize, { TextBreakpoints } from "@specfocus/spec-texts/lib/contextualize";
import { createContext } from "react";
const __dirname = new URL('.', import.meta.url).pathname;
const root = resolve(__dirname, '../locales');
export const makeVariant = (size, breakpoints = {
    xs: 40,
    sm: 80,
    md: 120
}) => {
    var _a, _b;
    if (typeof size === 'object') {
        const width = (_b = (_a = size.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
        if (width <= breakpoints.xs)
            return TextBreakpoints.xs;
        if (width <= breakpoints.sm)
            return TextBreakpoints.sm;
        if (width <= breakpoints.md)
            return TextBreakpoints.md;
        return TextBreakpoints.lg;
    }
    return size;
};
const Contextual = createContext({
    container: new TextualContainer(root, '.', 'en'),
    format: (textual, size, ...replace) => Promise.resolve(contextualize(textual, makeVariant(size), ...replace))
});
export default Contextual;
