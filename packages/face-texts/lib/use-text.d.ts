import { TextBreakpoints, type TextualVariation } from "@specfocus/spec-texts/lib/contextualize";
import { type RefObject } from "react";
export interface UseTextProps {
    textual: TextualVariation;
    size?: TextBreakpoints | RefObject<HTMLElement>;
    replace?: Array<({
        [k: string]: any;
    } | string)>;
}
declare const useTextual: ({ replace, textual, size }: UseTextProps) => string;
export default useTextual;
//# sourceMappingURL=use-text.d.ts.map