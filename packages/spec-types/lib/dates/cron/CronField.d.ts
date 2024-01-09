import { type Enumerator } from "../../iterations/Enumerator";
import { type NonNegativeInteger } from "@specfocus/spec-numbers/lib/is-non-negative-integer";
import { CronInterval } from "./CronInterval";
import { type CronObject, type Issue, type Scope } from "./CronObject";
import { type CronObjectSpec } from "./CronObjectSpec";
export declare class CronField<V extends NonNegativeInteger = NonNegativeInteger> {
    readonly nodes: (CronObject<V> | CronInterval<V>)[];
    private _values;
    constructor(nodes: (CronObject<V> | CronInterval<V>)[]);
    get issues(): ReadonlyArray<Issue>;
    get length(): number;
    clone: () => CronField<V>;
    includes: (value: V) => boolean;
    enumerate: (initial?: V) => Enumerator<V>;
    specs: (errors?: Issue[]) => CronObjectSpec[];
    toString: () => string;
}
export declare const offset: <V extends number = number>(start: V, end?: V) => CronField<V>;
declare const field: <V extends number = number>(scope: Scope<V>, parts: string[]) => CronField<V>;
export default field;
//# sourceMappingURL=CronField.d.ts.map