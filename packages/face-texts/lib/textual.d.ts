import { type ElementType } from "react";
import { type UseTextProps } from "./use-text";
export type TextualProps<T extends ElementType = ElementType> = UseTextProps & {
    as?: ElementType;
} & (T extends 'a' ? Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> : {});
declare const Textual: ({ as, textual, size, replace, ...props }: TextualProps) => import("react/jsx-runtime").JSX.Element;
export default Textual;
//# sourceMappingURL=textual.d.ts.map