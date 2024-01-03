import { type ReactNode } from "react";
/**
 * Flatten nested fragments, e.g. in cases where a parent expects a flat array of children
 * rather than an array of fragments
 * @param {*} children
 */
declare const flattenChildren: (children: ReactNode | ReactNode[]) => ReactNode[];
export default flattenChildren;
//# sourceMappingURL=flattenChildren.d.ts.map