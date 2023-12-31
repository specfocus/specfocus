import { type Enumerator } from "../../iterations/Enumerator";
import { ExtendedEnumerator, ExtendedEnumeratorResult } from "../../iterations/ExtendedEnumerator";
import { RecordEnumeratorResult } from "../../iterations/RecordEnumerator";
import { type DateTimeTuple, type Day, type Hour, type Minute, type Month, type Year } from "../time";
import { type Cron } from "./Cron";
type YearRecordEnumeratorResult = RecordEnumeratorResult<'year', Year>;
type MonthEnumeratorResult = ExtendedEnumeratorResult<YearRecordEnumeratorResult, 'month', Month>;
type DayEnumeratorResult = ExtendedEnumeratorResult<MonthEnumeratorResult, 'day', Day>;
type HourEnumeratorResult = ExtendedEnumeratorResult<DayEnumeratorResult, 'hour', Hour>;
export type MinuteEnumeratorResult = ExtendedEnumeratorResult<HourEnumeratorResult, 'minute', Minute>;
export declare class CronEnumerator implements Enumerator<DateTimeTuple> {
    readonly cron: Cron;
    [Symbol.iterator](): Generator<DateTimeTuple, void, unknown>;
    readonly root: ExtendedEnumerator<HourEnumeratorResult, 'minute', Minute>;
    constructor(cron: Cron);
    get current(): DateTimeTuple | undefined;
    get first(): DateTimeTuple | undefined;
    get hasNext(): boolean;
    get hasPrior(): boolean;
    get last(): DateTimeTuple | undefined;
    clone: () => CronEnumerator;
    end: () => DateTimeTuple | undefined;
    next: () => DateTimeTuple | undefined;
    prior: () => DateTimeTuple | undefined;
    reset: () => DateTimeTuple | undefined;
    start: () => DateTimeTuple | undefined;
    toString(): string;
}
export {};
//# sourceMappingURL=CronEnumerator.d.ts.map