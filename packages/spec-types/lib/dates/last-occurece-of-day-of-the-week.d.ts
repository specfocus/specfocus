import { DayOfTheWeek } from "./DateLike";
import { type Day } from "./time";
/**
 * Finds the last occurrence of a day of the week in a month
 * @day the day of the week we are testing for
 * @firstDayOfTheMonth the day of the week the month starts with
 * @lastDateOfTheMonth the number days in the month (= last day)
 * @return the last occurrence for @day in the month
*/
declare const lastOccureceOfDayOfTheWeek: (day: DayOfTheWeek, firstDayOfTheMonth: DayOfTheWeek, lastDateOfTheMonth: Day) => Day;
export default lastOccureceOfDayOfTheWeek;
//# sourceMappingURL=last-occurece-of-day-of-the-week.d.ts.map