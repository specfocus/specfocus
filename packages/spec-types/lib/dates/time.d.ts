import { type Integer } from "../numbers/is-integer";
import { type Serie } from "../numbers/serie";
import { type Fieldset } from "../prototypes/Fieldset";
import { NumberSpecType } from "../prototypes/SpecType.number";
export type Minute = (Serie<0, 30> | Serie<30, 60>);
export type Hour = Serie<0, 24>;
export type Day = Serie<1, 32>;
export type Month = Serie<1, 13>;
export type Year = Integer;
export type DateTimeTuple = [Year, Month, Day, Hour, Minute];
export declare const $Day: NumberSpecType;
export declare const $Days: NumberSpecType;
export declare const $Hour: NumberSpecType;
export declare const $Hours: NumberSpecType;
export declare const $Minute: NumberSpecType;
export declare const $Minutes: NumberSpecType;
export declare const $Month: NumberSpecType;
export declare const $Months: NumberSpecType;
export declare const $Year: NumberSpecType;
export declare const $Years: NumberSpecType;
export declare const $Second: NumberSpecType;
export interface IDate {
    day: Day;
    month: Month;
    year: Year;
}
export interface IDateTime extends IDate {
    hour: Hour;
    minute: Minute;
}
export declare const date: (date?: Date) => IDate;
export declare const datetime: (date?: Date) => IDateTime;
export declare const $Date: Fieldset;
export declare const $DateTime: Fieldset;
//# sourceMappingURL=time.d.ts.map