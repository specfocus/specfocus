import { type Enumerator } from "../../iterations/Enumerator";
import { type NonNegativeInteger } from "../../numbers/is-non-negative-integer";
import { type Range } from "../../numbers/ranges";
import { type CronObject, type Issue, type Scope } from "./CronObject";
import { CronValueSpec, type CronRangeSpec, type CronRangeType } from "./CronObjectSpec";
import { type CronValue } from "./CronValue";
export declare const cronRangeSpec: <V extends number = number>(start: CronValueSpec<V>, end: CronValueSpec<V>) => readonly ["r", CronValueSpec<V>, CronValueSpec<V>];
export interface CronRange<V extends NonNegativeInteger = NonNegativeInteger> extends CronObject<V, CronRangeSpec<V>, CronRangeType> {
    get range(): Readonly<Range<V>>;
}
export declare class CronConstantRange<V extends NonNegativeInteger = NonNegativeInteger> implements CronRange<V> {
    readonly start: CronValue<V>;
    readonly end: CronValue<V>;
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "r";
    constructor(start: CronValue<V>, end: CronValue<V>, issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get range(): Readonly<Range<V>>;
    get spec(): CronRangeSpec<V>;
    enumerate: (initial?: V) => Enumerator<V>;
    includes: (value: V) => boolean;
    toString: () => string;
}
declare const range: <V extends number = number>(expr: string, scope: Scope<V>) => CronRange<V> | undefined;
export default range;
//# sourceMappingURL=CronRange.d.ts.map