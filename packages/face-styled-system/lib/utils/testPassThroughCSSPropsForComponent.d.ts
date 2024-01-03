import { type BaseTheme } from "../theme";
export interface CSSPropTest {
    prop: string;
    cssProp?: string | null;
    values: Array<string | [string, string]>;
}
declare const testPassThroughCSSPropsForComponent: (Component: React.ComponentType<any>, props: CSSPropTest[], theme: BaseTheme) => void;
export default testPassThroughCSSPropsForComponent;
//# sourceMappingURL=testPassThroughCSSPropsForComponent.d.ts.map