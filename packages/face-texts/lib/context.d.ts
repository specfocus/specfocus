import { TextualContainer } from "@specfocus/spec-texts/lib/container";
import { TextBreakpoints, type TextualVariation } from "@specfocus/spec-texts/lib/contextualize";
import { type RefObject } from "react";
export type FomrmatFn = (text: TextualVariation, size: TextBreakpoints | RefObject<HTMLElement>, ...replace: Array<({
    [k: string]: any;
} | string)>) => Promise<string>;
export type ContextualValue = {
    container: TextualContainer;
    format: FomrmatFn;
};
export declare const makeVariant: (size: TextBreakpoints | RefObject<HTMLElement>, breakpoints?: {
    xs: number;
    sm: number;
    md: number;
}) => TextBreakpoints;
declare const Contextual: import("react").Context<ContextualValue>;
export default Contextual;
//# sourceMappingURL=context.d.ts.map