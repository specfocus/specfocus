import { type DayOfTheWeek } from "./DateLike";
import { type Day, type Month, type Year } from "./time";
export declare const getDayOfTheWeek: (date: Day, month: Month, year: Year) => DayOfTheWeek;
declare const dayOfTheWeek: (date: Day, firstDayOfTheMonth: DayOfTheWeek) => DayOfTheWeek;
export default dayOfTheWeek;
//# sourceMappingURL=day-of-the-week.d.ts.map