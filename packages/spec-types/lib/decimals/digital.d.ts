import { $mul } from "../numbers/calculus/arithmetics";
import { type Choice, type ChoicesSpecType } from "../prototypes/SpecType.choices";
import { type DecimalSpecType } from "../prototypes/SpecType.decimal";
/** Digital information */
/** The smallest unit of digital information. A bit can represent either a 0 or a 1. */
export declare const bits: Choice<typeof $mul>;
/** Composed of 8 bits. It is the basic unit for representing characters and data in computer systems. */
export declare const bytes: Choice<typeof $mul>;
export declare const DigitalUnit: ChoicesSpecType<typeof $mul>;
export declare const Digital: DecimalSpecType;
//# sourceMappingURL=digital.d.ts.map