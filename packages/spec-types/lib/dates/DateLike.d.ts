import { type IDateTime, type DateTimeTuple } from "./time";
export declare enum DayOfTheWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    _ = 7
}
export declare const isFriday: (day: DayOfTheWeek) => boolean;
export declare const isMonday: (day: DayOfTheWeek) => boolean;
export declare const isSaturday: (day: DayOfTheWeek) => boolean;
export declare const isSunday: (day: DayOfTheWeek) => boolean;
export declare const isThursday: (day: DayOfTheWeek) => boolean;
export declare const isTuesday: (day: DayOfTheWeek) => boolean;
export declare const isWednesday: (day: DayOfTheWeek) => boolean;
export declare const isWeekday: (day: DayOfTheWeek) => boolean;
export declare const fromDateShape: ({ year, month, day, hour, minute }: IDateTime) => Date;
export declare const fromDateTuple: ([year, month, day, hour, minute]: DateTimeTuple) => Date;
export declare const dateShapeOf: (date?: Date) => IDateTime;
export declare const dateTupleOf: (date?: Date) => DateTimeTuple;
//# sourceMappingURL=DateLike.d.ts.map