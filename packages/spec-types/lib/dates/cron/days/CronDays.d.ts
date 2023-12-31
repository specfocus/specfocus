import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { MonthContext } from "../Cron";
import { CronField } from "../CronField";
import { type CronInterval } from "../CronInterval";
import { type CronObject, type Issue, type Scope } from "../CronObject";
export declare class CronDays extends CronField<Day> {
    readonly scope: Scope;
    constructor(scope: Scope, ...nodes: (CronObject<Day> | CronInterval<Day>)[]);
    clone: () => CronDays;
}
export declare const DAY_END: DayOfTheWeek;
export declare const DAY_START: DayOfTheWeek;
export declare const DAY_ALIASES: Record<string, DayOfTheWeek>;
export declare const replaceDaysAliases: (expr: string, issues: Issue[]) => string;
declare const days: (parts: string[], scope: MonthContext, issues?: Issue[]) => CronDays;
export default days;
//# sourceMappingURL=CronDays.d.ts.map