import { type Enumerator } from "../../../iterations/Enumerator";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type Issue, type Scope } from "../CronObject";
import { type CronUnarySpec, type CronVariableType } from "../CronObjectSpec";
import { CronValue } from "../CronValue";
/** The weekday (MON to FRI) closest to a given day of the month. */
export declare const CRON_NEAREST_WEEKDAY: CronVariableType;
export type CronNearestWeekdayType = typeof CRON_NEAREST_WEEKDAY;
export type CronNearestWeekdaySpec = CronUnarySpec<CronNearestWeekdayType, Day>;
export declare const cronNearestWeekdaySpec: (date: Day) => readonly [CronVariableType, 2 | 1 | 4 | 8 | 3 | 5 | 6 | 7 | 9 | 10 | 11 | 24 | 21 | 18 | 15 | 12 | 22 | 13 | 14 | 16 | 17 | 19 | 20 | 30 | 23 | 25 | 26 | 27 | 28 | 29 | 31];
export declare const isCronNearestWeekdaySpec: (spec: unknown) => spec is readonly [CronVariableType, 2 | 1 | 4 | 8 | 3 | 5 | 6 | 7 | 9 | 10 | 11 | 24 | 21 | 18 | 15 | 12 | 22 | 13 | 14 | 16 | 17 | 19 | 20 | 30 | 23 | 25 | 26 | 27 | 28 | 29 | 31];
export declare class CronNearestWeekday implements CronValue<Day, CronNearestWeekdaySpec> {
    readonly date: Day;
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "v";
    constructor(date: Day, scope: [DayOfTheWeek, Day], issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get spec(): CronNearestWeekdaySpec;
    get value(): Day;
    enumerate: (initial?: Day) => Enumerator<Day>;
    includes: (value: Day) => boolean;
    toString: () => string;
}
export declare const parse: (expr: string, scope: Scope) => CronNearestWeekday | undefined;
export default parse;
//# sourceMappingURL=CronNearestWeekday.d.ts.map