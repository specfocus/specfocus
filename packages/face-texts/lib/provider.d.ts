import { PropsWithChildren } from "react";
export type Breakpoints = {
    xs: number;
    sm: number;
    md: number;
};
export type ContextualProviderProps = {
    lang: string;
    root: string;
    separator?: string;
    breakpoints?: Breakpoints;
};
declare const ContextualProvider: ({ breakpoints, children, lang, root, separator }: PropsWithChildren<ContextualProviderProps>) => import("react/jsx-runtime").JSX.Element;
export default ContextualProvider;
//# sourceMappingURL=provider.d.ts.map