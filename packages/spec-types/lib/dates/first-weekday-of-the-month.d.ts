import { DayOfTheWeek } from "./DateLike";
import { type Day, type Month, type Year } from "./time";
/** Calculate the first occurrence of the monday within the month */
export declare const getFirstWeekdayOfTheMonth: (month: Month, year: Year) => Day;
declare const firstWeekdayOfTheMonth: (firstDayOfTheMonth: DayOfTheWeek) => Day;
export default firstWeekdayOfTheMonth;
//# sourceMappingURL=first-weekday-of-the-month.d.ts.map