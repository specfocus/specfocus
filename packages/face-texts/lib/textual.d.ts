import { type ElementType, type RefObject } from 'react';
import { type Textual as Textual, type TextVariant } from "@specfocus/spec-texts/lib/textualize";
export type TextualProps<T extends ElementType = ElementType> = {
    as?: ElementType;
    text: Textual;
    ref?: RefObject<HTMLElement>;
    replace?: {
        [key: string]: number | string;
    };
    variant?: TextVariant;
} & (T extends 'a' ? Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> : {});
export declare const TextualProvider: import("react").Provider<{
    xs: number;
    sm: number;
    md: number;
}>;
declare const Textual: ({ as, text, ref, replace, variant, ...props }: TextualProps) => import("react/jsx-runtime").JSX.Element;
export default Textual;
//# sourceMappingURL=textual.d.ts.map