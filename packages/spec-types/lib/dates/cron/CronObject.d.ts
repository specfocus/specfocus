import { type Enumerator } from "../../iterations/Enumerator";
import { type NonNegativeInteger } from "@specfocus/spec-numbers/lib/is-non-negative-integer";
import { type CronObjectSpec, type CronObjectType } from "./CronObjectSpec";
export type Scope<V extends NonNegativeInteger = NonNegativeInteger> = [V, V | undefined];
export type Issue = string;
export interface CronObject<V extends NonNegativeInteger = NonNegativeInteger, S extends CronObjectSpec<V> = CronObjectSpec<V>, T extends CronObjectType = CronObjectType> {
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string;
    readonly type: T;
    get spec(): S;
    enumerate(initial?: V): Enumerator<V>;
    includes(value: V): boolean;
    toString(): string;
}
//# sourceMappingURL=CronObject.d.ts.map