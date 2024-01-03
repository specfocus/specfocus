import { type PropsWithTheme } from "../theme";
type ScaledVariantArgs = {
    key: string;
    prop: string | undefined;
};
/**
 * Just like styled-system's `variant` but with scaled array support, allowing
 * users to do things like `<Buttom variant={["primary", "secondary"]} />`
 * @param {string} props.key
 * @param {string} props.prop
 * @returns {function}
 */
declare const scaledVariant: <P extends {
    [key: string]: string | number | string[] | Record<"sm" | "md" | "lg" | "xl", string>;
    variant: string;
}>({ key, prop }: ScaledVariantArgs) => (props: PropsWithTheme<P>) => any;
export default scaledVariant;
//# sourceMappingURL=scaledVariant.d.ts.map