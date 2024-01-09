import { type Enumerator } from "../../iterations/Enumerator";
import { type NonNegativeInteger } from "@specfocus/spec-numbers/lib/is-non-negative-integer";
import { type CronObject, type Issue, type Scope } from "./CronObject";
import { CronValueType, type CronConstantSpec, type CronValueSpec } from "./CronObjectSpec";
export interface CronValue<V extends (NonNegativeInteger) = NonNegativeInteger, S extends CronValueSpec<V> = CronValueSpec<V>> extends CronObject<V, S, CronValueType> {
    get value(): V;
}
export declare class CronConstantValue<V extends NonNegativeInteger = NonNegativeInteger> implements CronValue<V, CronConstantSpec<V>> {
    readonly value: V;
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "v";
    constructor(value: V, issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get spec(): CronConstantSpec<V>;
    enumerate: (initial?: V) => Enumerator<V>;
    includes: (value: V) => boolean;
    toString: () => string;
}
declare const value: <V extends number = number>(expr: string, scope: Scope<V>) => CronConstantValue<V> | undefined;
export default value;
//# sourceMappingURL=CronValue.d.ts.map