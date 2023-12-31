import { type Enumerator } from "../../../iterations/Enumerator";
import { type Serie } from "../../../numbers/serie";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type Issue, type Scope } from "../CronObject";
import { type CronUnarySpec, type CronVariableType } from "../CronObjectSpec";
import { type CronValue } from "../CronValue";
import { CronLastDayOfTheMonth } from "./CronLastDayOfTheMonth";
export type NthDayOfTheMonth = Serie<1, 31>;
/** In day of the month, it is the nth day before the last day of the month. */
export declare const CRON_LAST_NTH_DAY_OF_THE_MONTH: CronVariableType;
export type CronLastNthDayOfTheMonthType = typeof CRON_LAST_NTH_DAY_OF_THE_MONTH;
export type CronLastNthDayOfTheMonthSpec = CronUnarySpec<CronLastNthDayOfTheMonthType, NthDayOfTheMonth>;
export declare const cronLastNthDayOfTheMonthSpec: (nth: NthDayOfTheMonth) => readonly [CronVariableType, 2 | 1 | 4 | 8 | 3 | 5 | 6 | 7 | 9 | 10 | 11 | 24 | 21 | 18 | 15 | 12 | 22 | 13 | 14 | 16 | 17 | 19 | 20 | 30 | 23 | 25 | 26 | 27 | 28 | 29];
export declare const isCronLastNthDayOfTheMonthSpec: (spec: unknown) => spec is readonly [CronVariableType, 2 | 1 | 4 | 8 | 3 | 5 | 6 | 7 | 9 | 10 | 11 | 24 | 21 | 18 | 15 | 12 | 22 | 13 | 14 | 16 | 17 | 19 | 20 | 30 | 23 | 25 | 26 | 27 | 28 | 29];
export declare class CronLastNthDayOfTheMonth implements CronValue<Day, CronLastNthDayOfTheMonthSpec> {
    readonly nth: NthDayOfTheMonth;
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "v";
    constructor(nth: NthDayOfTheMonth, scope: [DayOfTheWeek, Day], issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get spec(): CronLastNthDayOfTheMonthSpec;
    get value(): Day;
    enumerate: (initial?: Day) => Enumerator<Day>;
    includes: (value: Day) => boolean;
    toString: () => string;
}
declare const parse: (expr: string, scope: Scope) => CronLastNthDayOfTheMonth | CronLastDayOfTheMonth | undefined;
export default parse;
//# sourceMappingURL=CronLastNthDayOfTheMonth.d.ts.map