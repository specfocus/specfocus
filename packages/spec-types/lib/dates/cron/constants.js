"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_M_LW = exports.C_MDL2 = exports.C_MDL = exports.C_MX31 = exports.C_MX1 = exports.C_MX2 = exports.C_M2 = exports.CRON_MONTHLY_NOON = exports.CRON_MONTHLY = exports.CRON_EVERY_SEVEN_DAYS_AT_NOON = exports.CRON_EVERY_WEEKEND_AT_NOON = exports.CRON_EVERY_WEEKDAY_AT_NOON = exports.CRON_EVERY_SATURDAY_AT_MIDNIGHT = exports.CRON_EVERY_FRIDAY_AT_MIDNIGHT = exports.CRON_EVERY_THURSDAY_AT_MIDNIGHT = exports.CRON_EVERY_WEDNESDAY_AT_MIDNIGHT = exports.CRON_EVERY_TUESDAY_AT_MIDNIGHT = exports.CRON_EVERY_MONDAY_AT_MIDNIGHT = exports.CRON_EVERY_SUNDAY_AT_MIDNIGHT = exports.CRON_EVERY_SATURDAY_AT_NOON = exports.CRON_EVERY_FRIDAY_AT_NOON = exports.CRON_EVERY_THUSDAY_AT_NOON = exports.CRON_EVERY_WEDNESDAY_AT_NOON = exports.CRON_EVERY_TUESDAY_AT_NOON = exports.CRON_EVERY_MONDAY_AT_NOON = exports.CRON_EVERY_SUNDAY_AT_NOON = exports.CRON_EVERY_DAY_AT_NOON = exports.CRON_EVERY_DAY_AT_SIX_AM = exports.CRON_EVERY_DAY_AT_ONE_AM = exports.CRON_EVERY_DAY_MIDNIGHT = exports.CRON_EVERY_TWELVE_HOURS = exports.CRON_EVERY_EIGHT_HOURS = exports.CRON_EVERY_SIX_HOURS = exports.CRON_EVERY_FOUR_HOURS = exports.CRON_EVERY_THREE_HOURS = exports.CRON_EVERY_TWO_HOURS = exports.CRON_EVERY_UNEVEN_HOUR = exports.CRON_EVERY_EVEN_HOUR = exports.CRON_EVERY_HOUR = exports.CRON_FIVETEEN_MINUTES = exports.CRON_EVERY_HALF_HOUR = exports.CRON_EVERY_QUARTER_HOUR = exports.CRON_EVERY_TEN_MINUTES = exports.CRON_EVERY_FIVE_MINUTES = exports.CRON_EVERY_FOUR_MINUTES = exports.CRON_EVERY_THREE_MUNUTES = exports.CRON_EVERY_TWO_MINUTES = exports.CRON_EVERY_UNEVEN_MINUTE = exports.CRON_EVERY_EVEN_MINUTE = exports.CRON_EVERY_MINUTE = void 0;
exports.C_SEPT_DEC = exports.C_JAN_FEB_MAR_APR = exports.C_DEC = exports.C_JAN_JUN = exports.C_JUN = exports.C_JAN = exports.C_M_THU3 = exports.C_M_MON2 = exports.C_M_FRI1 = exports.C_M_MON1 = exports.C_M_15W = exports.C_M_1W = void 0;
/** Every minute */
exports.CRON_EVERY_MINUTE = '* * ? * *';
/** Every even minute */
exports.CRON_EVERY_EVEN_MINUTE = '0/2 * ? * *';
/** Every uneven minute */
exports.CRON_EVERY_UNEVEN_MINUTE = '1/2 * ? * *';
/** Every 2 minutes */
exports.CRON_EVERY_TWO_MINUTES = '*/2 * ? * *';
/** Every 3 minutes */
exports.CRON_EVERY_THREE_MUNUTES = '*/3 * ? * *';
/** Every 4 minutes */
exports.CRON_EVERY_FOUR_MINUTES = '*/4 * ? * *';
/** Every 5 minutes */
exports.CRON_EVERY_FIVE_MINUTES = '*/5 * ? * *';
/** Every 10 minutes */
exports.CRON_EVERY_TEN_MINUTES = '*/10 * ? * *';
/** Every 15 minutes */
exports.CRON_EVERY_QUARTER_HOUR = '*/15 * ? * *';
/** Every 30 minutes */
exports.CRON_EVERY_HALF_HOUR = '*/30 * ? * *';
/** Every hour at minutes 15, 30 and 45 */
exports.CRON_FIVETEEN_MINUTES = '15,30,45 * ? * *';
/** Every hour */
exports.CRON_EVERY_HOUR = '0 * ? * *';
/** Every even hour */
exports.CRON_EVERY_EVEN_HOUR = '0 0/2 ? * *';
/** Every uneven hour */
exports.CRON_EVERY_UNEVEN_HOUR = '0 1/2 ? * *';
/** Every even hour */
exports.CRON_EVERY_TWO_HOURS = '0 */2 ? * *';
/** Every three hours */
exports.CRON_EVERY_THREE_HOURS = '0 */3 ? * *';
/** Every four hours */
exports.CRON_EVERY_FOUR_HOURS = '0 */4 ? * *';
/** Every six hours */
exports.CRON_EVERY_SIX_HOURS = '0 */6 ? * *';
/** Every eight hours */
exports.CRON_EVERY_EIGHT_HOURS = '0 */8 ? * *';
/** Every twelve hours */
exports.CRON_EVERY_TWELVE_HOURS = '0 */12 ? * *';
/** Every day at midnight - 12am */
exports.CRON_EVERY_DAY_MIDNIGHT = '0 0 * * *';
/** Every day at 1am */
exports.CRON_EVERY_DAY_AT_ONE_AM = '0 1 * * *';
/** Every day at 6am */
exports.CRON_EVERY_DAY_AT_SIX_AM = '0 6 * * *';
/** Every day at noon - 12pm */
exports.CRON_EVERY_DAY_AT_NOON = '0 12 * * *';
/** Every Sunday at noon */
exports.CRON_EVERY_SUNDAY_AT_NOON = '0 12 ? * SUN';
/** Every Monday at noon */
exports.CRON_EVERY_MONDAY_AT_NOON = '0 12 ? * MON';
/** Every Tuesday at noon */
exports.CRON_EVERY_TUESDAY_AT_NOON = '0 12 ? * TUE';
/** Every Wednesday at noon */
exports.CRON_EVERY_WEDNESDAY_AT_NOON = '0 12 ? * WED';
/** Every Thursday at noon */
exports.CRON_EVERY_THUSDAY_AT_NOON = '0 12 ? * THU';
/** Every Friday at noon */
exports.CRON_EVERY_FRIDAY_AT_NOON = '0 12 ? * FRI';
/** Every Saturday at noon */
exports.CRON_EVERY_SATURDAY_AT_NOON = '0 12 ? * SAT';
/** Every Sunday at midnight */
exports.CRON_EVERY_SUNDAY_AT_MIDNIGHT = '0 0 ? * SUN';
/** Every Monday at midnight */
exports.CRON_EVERY_MONDAY_AT_MIDNIGHT = '0 0 ? * MON';
/** Every Tuesday at midnight */
exports.CRON_EVERY_TUESDAY_AT_MIDNIGHT = '0 0 ? * TUE';
/** Every Wednesday at midnight */
exports.CRON_EVERY_WEDNESDAY_AT_MIDNIGHT = '0 0 ? * WED';
/** Every Thursday at midnight */
exports.CRON_EVERY_THURSDAY_AT_MIDNIGHT = '0 0 ? * THU';
/** Every Friday at midnight */
exports.CRON_EVERY_FRIDAY_AT_MIDNIGHT = '0 0 ? * FRI';
/** Every Saturday at nmidnight */
exports.CRON_EVERY_SATURDAY_AT_MIDNIGHT = '0 0 ? * SAT';
/** Every Weekday at noon */
exports.CRON_EVERY_WEEKDAY_AT_NOON = '0 12 ? * MON-FRI';
/** Every Saturday and Sunday at noon */
exports.CRON_EVERY_WEEKEND_AT_NOON = '0 12 ? * SUN,SAT';
/** Every 7 days at noon */
exports.CRON_EVERY_SEVEN_DAYS_AT_NOON = '0 12 */7 * ?';
/** Every month on the 1st */
exports.CRON_MONTHLY = '0 0 1 * ?';
/** Every month on the 1st, at noon */
exports.CRON_MONTHLY_NOON = '0 12 1 * ?';
exports.C_M2 = '0 12 2 * ?'; // Every month on the 2nd, at noon
exports.C_MX2 = '0 12 15 * ?'; // Every month on the 15th, at noon
exports.C_MX1 = '0 12 1/2 * ?'; // Every 2 days starting on the 1st of the month, at noon
exports.C_MX31 = '0 12 1/4 * ?'; // Every 4 days staring on the 1st of the month, at noon
exports.C_MDL = '0 12 L * ?'; // Every month on the last day of the month, at noon
exports.C_MDL2 = '0 12 L-2 * ?'; // Every month on the second to last day of the month, at noon
exports.C_M_LW = '0 12 LW * ?'; // Every month on the last weekday, at noon
// export const C_M_1L = '0 12 1L * ?';                 // Every month on the last Sunday, at noon
// export const C_M_2L = '0 12 2L * ?';                 // Every month on the last Monday, at noon
// export const C_M_6L = '0 12 6L * ?';                 // Every month on the last Friday, at noon
exports.C_M_1W = '0 12 1W * ?'; // Every month on the nearest Weekday to the 1st of the month, at noon
exports.C_M_15W = '0 12 15W * ?'; // Every month on the nearest Weekday to the 15th of the month, at noon
exports.C_M_MON1 = '0 12 ? * 2#1'; // Every month on the first Monday of the Month, at noon
exports.C_M_FRI1 = '0 12 ? * 6#1'; // Every month on the first Friday of the Month, at noon
exports.C_M_MON2 = '0 12 ? * 2#2'; // Every month on the second Monday of the Month, at noon
exports.C_M_THU3 = '0 12 ? * 5#3'; // Every month on the third Thursday of the Month, at noon - 12pm
exports.C_JAN = '0 12 ? JAN *'; // Every day at noon in January only
exports.C_JUN = '0 12 ? JUN *'; // Every day at noon in June only
exports.C_JAN_JUN = '0 12 ? JAN,JUN *'; // Every day at noon in January and June
exports.C_DEC = '0 12 ? DEC *'; // Every day at noon in December only
exports.C_JAN_FEB_MAR_APR = '0 12 ? JAN,FEB,MAR,APR *'; // Every day at noon in January, February, March and April
exports.C_SEPT_DEC = '0 12 ? 9-12 *'; // Every day at noon between September and December
