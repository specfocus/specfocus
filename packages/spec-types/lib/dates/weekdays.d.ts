import { RangeArray } from "../numbers/ranges/Range";
import { DayOfTheWeek } from "./DateLike";
import { type Day, type Month, type Year } from "./time";
export declare const getWeekdays: (month: Month, year: Year) => RangeArray<Day>;
export declare const endWeekday: (firstDayOfTheWeek: DayOfTheWeek) => Day;
declare const weekdays: (firstDayOfTheWeek: DayOfTheWeek, lastDateOfTheMonth: Day) => RangeArray<Day>;
export default weekdays;
//# sourceMappingURL=weekdays.d.ts.map