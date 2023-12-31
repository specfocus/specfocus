import { type DayOfTheWeek } from "./DateLike";
import { type Day, type Month, type Year } from "./time";
export declare const getNearestWeekday: (date: Day, month: Month, year: Year) => Day;
/**
 * Finds the last occurrence of a day of the week in a month
 * @date the reference day of the month we are testing for
 * @firstDayOfTheMonth the day of the week the month starts with
 * @lastDateOfTheMonth the number days in the month (= last day)
 * @return the last occurrence for @day in the month
*/
declare const nearestWeekday: (date: Day, firstDayOfTheMonth: DayOfTheWeek, lastDateOfTheMonth: Day) => Day;
export default nearestWeekday;
//# sourceMappingURL=nearest-weekday.d.ts.map