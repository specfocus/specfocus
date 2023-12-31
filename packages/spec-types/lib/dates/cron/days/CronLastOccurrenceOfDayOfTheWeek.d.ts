import { type Enumerator } from "../../../iterations/Enumerator";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type Issue, type Scope } from "../CronObject";
import { type CronUnarySpec, type CronVariableType } from "../CronObjectSpec";
import { type CronValue } from "../CronValue";
/** In day of the month, it is the last day SUN-SAT of the month. */
export declare const CRON_LAST_OCCURRENCE_OF_DAY_OF_THE_WEEK: CronVariableType;
export type CronLastOccurenceOfDayOfTheWeekType = typeof CRON_LAST_OCCURRENCE_OF_DAY_OF_THE_WEEK;
export type CronLastOccurenceOfDayOfTheWeekSpec = CronUnarySpec<CronLastOccurenceOfDayOfTheWeekType, DayOfTheWeek>;
export declare const cronLastOccurenceOfDayOfTheWeekSpec: (day: DayOfTheWeek) => readonly [CronVariableType, DayOfTheWeek];
export declare const isCronLastOccurenceOfDayOfTheWeek: (spec: unknown) => spec is readonly [CronVariableType, DayOfTheWeek];
export declare class CronLastOccurenceOfDayOfTheWeek implements CronValue<Day, CronLastOccurenceOfDayOfTheWeekSpec> {
    readonly day: DayOfTheWeek;
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "v";
    constructor(day: DayOfTheWeek, scope: [DayOfTheWeek, Day], issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get spec(): CronLastOccurenceOfDayOfTheWeekSpec;
    get value(): Day;
    enumerate: (initial?: Day) => Enumerator<Day>;
    includes: (value: Day) => boolean;
    toString: () => string;
}
declare const parse: (expr: string, scope: Scope) => CronLastOccurenceOfDayOfTheWeek | undefined;
export default parse;
//# sourceMappingURL=CronLastOccurrenceOfDayOfTheWeek.d.ts.map