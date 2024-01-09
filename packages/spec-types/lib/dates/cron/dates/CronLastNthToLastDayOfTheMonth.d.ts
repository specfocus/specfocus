import { type Enumerator } from "../../../iterations/Enumerator";
import { type Range } from "@specfocus/spec-numbers/lib/ranges";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type Issue, type Scope } from "../CronObject";
import { CronRangeSpec } from "../CronObjectSpec";
import { type CronRange } from "../CronRange";
import { CronLastDayOfTheMonth } from "./CronLastDayOfTheMonth";
import { CronLastNthDayOfTheMonth, NthDayOfTheMonth } from "./CronLastNthDayOfTheMonth";
export declare class CronLastNthToLastDayOfTheMonth implements CronRange<Day> {
    readonly nth: NthDayOfTheMonth;
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "r";
    constructor(nth: NthDayOfTheMonth, scope: [DayOfTheWeek, Day], issues: ReadonlyArray<Issue>, original?: string | undefined);
    get end(): CronLastDayOfTheMonth;
    get range(): Readonly<Range<Day>>;
    get spec(): CronRangeSpec<Day>;
    get start(): CronLastNthDayOfTheMonth;
    enumerate: (initial?: Day) => Enumerator<Day>;
    includes: (value: Day) => boolean;
    toString: () => string;
}
declare const parse: (expr: string, scope: Scope) => CronLastNthToLastDayOfTheMonth | undefined;
export default parse;
//# sourceMappingURL=CronLastNthToLastDayOfTheMonth.d.ts.map