import { ComponentType, ReactNode } from "react";
/**
 * Pass a prop from the parent to all children, but only when the child doesn't
 * have that prop set on itself
 */
declare const passPropToChildren: <P extends {}>(prop: keyof P, Component: ComponentType<P>) => import("react").FunctionComponent<P & {
    children?: ReactNode;
}>;
export default passPropToChildren;
//# sourceMappingURL=passPropToChildren.d.ts.map