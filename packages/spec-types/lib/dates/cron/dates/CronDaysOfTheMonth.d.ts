import { type Enumerator } from "../../../iterations/Enumerator";
import { type Range } from "@specfocus/spec-numbers/lib/ranges";
import { type DayOfTheWeek } from "../../DateLike";
import { type Day } from "../../time";
import { type Issue } from "../CronObject";
import { CronRangeSpec } from "../CronObjectSpec";
import { type CronRange } from "../CronRange";
import { CronConstantValue } from "../CronValue";
import { CronLastDayOfTheMonth } from "./CronLastDayOfTheMonth";
export declare class CronDaysOfTheMonth implements CronRange<Day> {
    readonly scope: [DayOfTheWeek, Day];
    readonly issues: ReadonlyArray<Issue>;
    readonly original?: string | undefined;
    readonly type = "r";
    constructor(scope: [DayOfTheWeek, Day], issues?: ReadonlyArray<Issue>, original?: string | undefined);
    get end(): CronLastDayOfTheMonth;
    get range(): Readonly<Range<Day>>;
    get spec(): CronRangeSpec<Day>;
    get start(): CronConstantValue<Day>;
    enumerate: (initial?: Day) => Enumerator<Day>;
    toString: () => string;
    includes: (value: Day) => boolean;
}
//# sourceMappingURL=CronDaysOfTheMonth.d.ts.map