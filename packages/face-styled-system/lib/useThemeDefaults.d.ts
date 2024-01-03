import { ComponentType, ExoticComponent } from "react";
import { type PropsWithComponentTheme } from "./theme";
export type GetDefaultPropsFunction<P, T, K extends string> = (props: PropsWithComponentTheme<P, T, K>) => P;
declare const useThemeDefaults: <P, T, K extends string>(getDefaultProps: GetDefaultPropsFunction<P, T, K>, Component: ExoticComponent<P>) => ComponentType<P>;
export default useThemeDefaults;
//# sourceMappingURL=useThemeDefaults.d.ts.map