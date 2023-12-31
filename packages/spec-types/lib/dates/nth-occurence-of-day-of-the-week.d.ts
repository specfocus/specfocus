import { type Serie } from "../numbers/serie";
import { type DayOfTheWeek } from "./DateLike";
import { type Day } from "./time";
export type NthOcurrence = Serie<1, 6>;
/**
 * Finds the nth occurrence of a day of the week in a month
 * @day the day of the week we are testing for
 * @nth the ordinal of the occurrence we are testing for, 1 is the first
 * @firstDayOfTheMonth the day of the week the month starts with
 * @lastDateOfTheMonth the number days in the month (= last day)
 * @return the last occurrence for @day in the month
 **/
declare const nthOccureceOfDayOfTheWeek: (day: DayOfTheWeek, nth: NthOcurrence, firstDayOfTheMonth: DayOfTheWeek, lastDateOfTheMonth: Day) => Day | undefined;
export default nthOccureceOfDayOfTheWeek;
//# sourceMappingURL=nth-occurence-of-day-of-the-week.d.ts.map