"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Length = exports.NauticalMile = exports.Mile = exports.Yard = exports.Foot = exports.Inch = exports.Meter = void 0;
/** Meter (m): The meter is the fundamental SI unit of length. It's defined as the distance that light travels in a vacuum in 1/299,792,458 seconds. */
exports.Meter = ['m', 1];
/** Inch (in): An inch is a unit of length commonly used in some countries (e.g., the United States) that's approximately equal to 2.54 centimeters. */
exports.Inch = ['in', 2.54 / 100];
/** Foot (ft): A foot is another unit of length used in some countries, equal to 12 inches or approximately 0.3048 meters. */
exports.Foot = ['ft', 0.3048];
/** Yard (yd): A yard is commonly used in some countries, equal to 3 feet or approximately 0.9144 meters. */
exports.Yard = ['yd', 0.9144];
/** Mile (mi): A mile is used for longer distances, especially in the United States. It's equal to 5280 feet or approximately 1.60934 kilometers. */
exports.Mile = ['mi', 1.60934 / 1000];
/** Nautical Mile (nmi): The nautical mile is commonly used in navigation and aviation. It's defined as one minute of latitude and is approximately equal to 1852 meters. */
exports.NauticalMile = ['nmi', 1852];
exports.Length = ['choices', exports.Meter, exports.Inch, exports.Foot, exports.Yard, exports.Mile, exports.NauticalMile];
