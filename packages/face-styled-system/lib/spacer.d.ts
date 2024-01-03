import { type Serie } from "@specfocus/spec-types/lib/numbers/serie";
export declare const SPACES: readonly ["spacer0", "spacer5", "spacer10", "spacer15", "spacer20", "spacer25", "spacer30", "spacer40", "spacer70", "tight", "standardSmBp", "standard", "disassociate", "unrelated", "header", "footer"];
export type Space = typeof SPACES[number];
export type Spacer = Space | Space[];
export type Spaces = Record<Space | Serie<0, 9>, number>;
//# sourceMappingURL=spacer.d.ts.map