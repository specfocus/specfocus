import { type DayOfTheWeek } from "../DateLike";
import { type DateTimeTuple, type Day, type Hour, type Minute, type Month, type Year } from "../time";
import { CronEnumerator } from "./CronEnumerator";
import { CronField } from "./CronField";
import { type Issue } from "./CronObject";
import { type CronDates } from "./dates";
import { type CronDays } from "./days";
export { DATE_END, DATE_START } from "./dates";
export { DAY_END, DAY_START } from "./days";
export type MonthContext = [DayOfTheWeek, Day];
export declare class Cron implements Iterable<DateTimeTuple> {
    readonly minutes: CronField<Minute>;
    readonly hours: CronField<Hour>;
    readonly dates: CronDates;
    readonly months: CronField<Month>;
    readonly days: CronDays;
    readonly years: CronField<Year>;
    readonly scope: MonthContext;
    readonly issues: ReadonlyArray<Issue>;
    readonly initial: DateTimeTuple;
    [Symbol.iterator](): Generator<DateTimeTuple, void, unknown>;
    private _current;
    /**
     * 1. Minute (0-59)
     * 2. Hour (0-23)
     * 3. Day of the month (1-31)
     * 4. Month (1-12 or JAN-DEC)
     * 5. Day of the week (0-6 or SUN-SAT)
     * 6. (Optional) Year (e.g., 2021)
     * @param expr
     */
    constructor(minutes: CronField<Minute>, hours: CronField<Hour>, dates: CronDates, months: CronField<Month>, days: CronDays, years: CronField<Year>, scope: MonthContext, issues: ReadonlyArray<Issue>, initial?: DateTimeTuple);
    get current(): DateTimeTuple;
    set current(current: DateTimeTuple);
    get day(): Day;
    set day(day: Day);
    get hour(): Hour;
    set hour(hour: Hour);
    get minute(): Minute;
    set minute(value: Minute);
    get month(): Month;
    set month(month: Month);
    get year(): Year;
    set year(year: Year);
    clone: (initial?: DateTimeTuple) => Cron;
    enumerate: () => CronEnumerator;
    includes: (moment?: DateTimeTuple) => boolean;
    private refresh;
}
export declare const ASTERISK = "*";
export declare const QUESTION = "?";
export declare const DAYS_IN_MONTH: Day[];
export declare const HOUR_END = 23;
export declare const HOUR_START = 0;
export declare const MINUTE_END = 59;
export declare const MINUTE_START = 0;
export declare const MONTH_END = 12;
export declare const MONTH_START = 1;
export declare const MONTH_ALIASES: Record<string, Month>;
export declare const replaceMonthAliases: (expr: string, issues: Issue[]) => string;
export declare const hours: (parts: string[], issues: Issue[]) => CronField<Hour>;
export declare const minutes: (parts: string[], issues: Issue[]) => CronField<Minute>;
export declare const months: (parts: string[], issues: Issue[]) => CronField<Month>;
export declare const years: (parts: string[], issues: Issue[]) => CronField<Year>;
declare const cron: (expr: string, initial?: DateTimeTuple) => Cron;
export default cron;
//# sourceMappingURL=Cron.d.ts.map