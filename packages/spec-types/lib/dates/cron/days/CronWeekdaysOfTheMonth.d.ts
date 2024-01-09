import { type Enumerator } from "../../../iterations/Enumerator";
import { type RangeArray } from "@specfocus/spec-numbers/lib/ranges";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type CronObject, type Issue, type Scope } from "../CronObject";
import { type CronVariableSpec, type CronVariableType } from "../CronObjectSpec";
export declare const CRON_WEEKDAYS_OF_THE_MONTH: CronVariableType;
export type CronWeekdaysOfTheMonthType = typeof CRON_WEEKDAYS_OF_THE_MONTH;
export type CronWeekdaysOfTheMonthSpec = CronVariableSpec<CronWeekdaysOfTheMonthType>;
export declare const cronWeekdaysOfTheMonthSpec: () => CronWeekdaysOfTheMonthSpec;
export declare const isWeekdaysOfTheMonth: (spec: unknown) => spec is CronVariableType;
export declare class CronWeekdaysOfTheMonth implements CronObject<Day, CronWeekdaysOfTheMonthSpec> {
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "i";
    constructor(scope: [DayOfTheWeek, Day], issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get ranges(): RangeArray<Day>;
    get spec(): CronWeekdaysOfTheMonthSpec;
    enumerate: (initial?: Day) => Enumerator<Day>;
    includes: (value: Day) => boolean;
    toString: () => string;
}
declare const weekdays: (expr: string, scope: Scope) => CronWeekdaysOfTheMonth | undefined;
export default weekdays;
//# sourceMappingURL=CronWeekdaysOfTheMonth.d.ts.map