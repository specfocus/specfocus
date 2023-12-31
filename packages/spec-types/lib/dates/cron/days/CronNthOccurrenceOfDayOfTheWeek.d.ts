import type { Enumerator } from "../../../iterations/Enumerator";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type NthOcurrence } from "../../nth-occurence-of-day-of-the-week";
import { type Issue, type Scope } from "../CronObject";
import { type CronBinarySpec, type CronVariableType } from "../CronObjectSpec";
import { type CronValue } from "../CronValue";
export declare const CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK: CronVariableType;
export type CronNthOccurrenceOfDayOfTheWeekType = typeof CRON_NTH_OCCURRENCE_OF_DAY_OF_THE_WEEK;
export type CronNthOccurrenceOfDayOfTheWeekSpec = CronBinarySpec<CronNthOccurrenceOfDayOfTheWeekType, DayOfTheWeek, NthOcurrence>;
export declare const cronNthOccurrenceOfDayOfTheWeekSpec: (day: DayOfTheWeek, nth: NthOcurrence) => readonly [CronVariableType, DayOfTheWeek, 2 | 1 | 4 | 3 | 5];
export declare const isCronNthDayOfTheWeekSpec: (spec: unknown) => spec is readonly [CronVariableType, DayOfTheWeek, 2 | 1 | 4 | 3 | 5];
export declare class CronNthOccurrenceOfDayOfTheWeek implements CronValue<Day, CronNthOccurrenceOfDayOfTheWeekSpec> {
    readonly day: DayOfTheWeek;
    readonly nth: NthOcurrence;
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "v";
    constructor(day: DayOfTheWeek, nth: NthOcurrence, scope: [DayOfTheWeek, Day], issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get spec(): CronNthOccurrenceOfDayOfTheWeekSpec;
    get value(): Day;
    enumerate: (initial?: Day) => Enumerator<Day>;
    includes: (value: Day) => boolean;
    toString: () => string;
}
export declare const nthOccurrence: (expr: string, scope: Scope) => CronNthOccurrenceOfDayOfTheWeek | undefined;
export default nthOccurrence;
//# sourceMappingURL=CronNthOccurrenceOfDayOfTheWeek.d.ts.map