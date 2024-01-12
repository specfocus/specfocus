import { Valuable } from "@specfocus/spec-comparables/lib";
import { ValuableArray } from "../../prototypes/Valuable";
import { type Arithmetic, type Evaluatable } from "./arithmetics";
export declare const evaluate: (expr: Evaluatable | Valuable | ValuableArray | Arithmetic, context: Record<string, number>, errors: string[]) => number | number[] | undefined;
declare const compute: (expr: Arithmetic, context: Record<string, number>, errors: string[]) => number | number[] | undefined;
export default compute;
//# sourceMappingURL=compute.d.ts.map