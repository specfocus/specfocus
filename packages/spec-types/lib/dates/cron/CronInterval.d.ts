import { type Enumerator } from "../../iterations/Enumerator";
import { type NonNegativeInteger } from "@specfocus/spec-numbers/lib/is-non-negative-integer";
import { type PositiveInteger } from "@specfocus/spec-numbers/lib/is-positive-integer";
import { type CronObject, type Issue, type Scope } from "./CronObject";
import { CronIntervalSpec, CronIntervalType } from "./CronObjectSpec";
import { type CronRange } from "./CronRange";
import { type CronValue } from "./CronValue";
export declare const cronIntervalSpec: <V extends number = number>(offset: CronValue<V> | CronRange<V>, step: PositiveInteger) => readonly ["i", import("./CronObjectSpec").CronValueSpec<V> | readonly ["r", import("./CronObjectSpec").CronValueSpec<V>, import("./CronObjectSpec").CronValueSpec<V>], number];
export declare class CronInterval<V extends NonNegativeInteger = NonNegativeInteger> implements CronObject<V, CronIntervalSpec<V>, CronIntervalType> {
    readonly offset: CronValue<V> | CronRange<V>;
    readonly step: NonNegativeInteger;
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "i";
    constructor(offset: CronValue<V> | CronRange<V>, step: NonNegativeInteger, issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get spec(): CronIntervalSpec<V>;
    enumerate: (initial?: V) => Enumerator<V>;
    includes(value: V): boolean;
    toString: () => string;
}
/***
 * The step value should be a divisor of the range. For example, in the case of minutes,
 * 15 is a divisor of 60 (the valid minute range), so it's a valid step. However, using
 * a step of 7 for minutes would not be valid since 7 is not a divisor of 60.
 */
declare const interval: <V extends number = number>(expr: string, scope: Scope<V>, offset: (expr: string, scope: Scope<V>) => CronValue<V> | CronRange<V> | undefined) => CronInterval<V> | undefined;
export default interval;
//# sourceMappingURL=CronInterval.d.ts.map