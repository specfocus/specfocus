import { type Day } from "../../time";
import { type MonthContext } from "../Cron";
import { CronField } from "../CronField";
import { type CronInterval } from "../CronInterval";
import { type CronObject } from "../CronObject";
export declare class CronDates extends CronField<Day> {
    readonly scope: MonthContext;
    constructor(scope: MonthContext, ...nodes: (CronObject<Day> | CronInterval<Day>)[]);
    clone: () => CronDates;
}
export declare const DATE_END: 2 | 1 | 4 | 8 | 3 | 5 | 6 | 7 | 9 | 10 | 24 | 21 | 18 | 15 | 12 | 11 | 22 | 13 | 14 | 16 | 17 | 19 | 20 | 30 | 23 | 25 | 26 | 27 | 28 | 29 | 31;
export declare const DATE_START: 2 | 1 | 4 | 8 | 3 | 5 | 6 | 7 | 9 | 10 | 24 | 21 | 18 | 15 | 12 | 11 | 22 | 13 | 14 | 16 | 17 | 19 | 20 | 30 | 23 | 25 | 26 | 27 | 28 | 29 | 31;
declare const dates: (parts: string[], scope: MonthContext) => CronDates;
export default dates;
//# sourceMappingURL=CronDates.d.ts.map