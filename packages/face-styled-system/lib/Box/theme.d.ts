import { type SystemBoxProps } from "./types";
export declare const hasMtProp: ({ marginTop, mt, my, m, margin }: SystemBoxProps) => import("../responsive").ResponsiveCSSValue | undefined;
export declare const hasMbProp: ({ marginBottom, mb, my, m, margin }: SystemBoxProps) => import("../responsive").ResponsiveCSSValue | undefined;
export declare const getSpacerKeys: ({ sa, sb, spaceAbove, spaceBelow, ...props }: SystemBoxProps) => {
    spaceAbove: ("spacer0" | "spacer5" | "spacer10" | "spacer15" | "spacer20" | "spacer25" | "spacer30" | "spacer40" | "spacer70" | "tight" | "standardSmBp" | "standard" | "disassociate" | "unrelated" | "header" | "footer")[] | null | undefined;
    spaceBelow: ("spacer0" | "spacer5" | "spacer10" | "spacer15" | "spacer20" | "spacer25" | "spacer30" | "spacer40" | "spacer70" | "tight" | "standardSmBp" | "standard" | "disassociate" | "unrelated" | "header" | "footer")[] | null | undefined;
};
//# sourceMappingURL=theme.d.ts.map