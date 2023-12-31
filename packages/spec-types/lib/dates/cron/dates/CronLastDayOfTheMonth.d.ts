import { type Enumerator } from "../../../iterations/Enumerator";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type Issue, type Scope } from "../CronObject";
import { type CronVariableSpec, type CronVariableType } from "../CronObjectSpec";
import { type CronValue } from "../CronValue";
/** In day of the month, it is the last day of the month. */
export declare const CRON_LAST_DAY_OF_THE_MONTH: CronVariableType;
export type CronLastDayOfTheMonthSpec = typeof CRON_LAST_DAY_OF_THE_MONTH;
export declare const cronLastDayOfTheMonthSpec: () => CronLastDayOfTheMonthSpec;
export declare const isCronLastDayOfTheMonthSpec: (spec: unknown) => spec is CronVariableType;
export declare class CronLastDayOfTheMonth implements CronValue<Day, CronVariableSpec> {
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly type = "v";
    constructor(scope: [DayOfTheWeek, Day], issues?: ReadonlyArray<Issue>);
    get spec(): CronVariableSpec;
    get value(): Day;
    enumerate: (initial?: Day) => Enumerator<Day>;
    includes: (value: Day) => boolean;
    toString: () => string;
}
declare const parse: (expr: string, scope: Scope) => CronLastDayOfTheMonth | undefined;
export default parse;
//# sourceMappingURL=CronLastDayOfTheMonth.d.ts.map