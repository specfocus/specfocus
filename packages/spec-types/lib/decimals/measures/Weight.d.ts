import { $mul } from "../../numbers/calculus/arithmetics";
import { type Choice, type ChoicesSpecType } from "../../prototypes/SpecType.choices";
/** Gram (g): The gram is a smaller unit of mass, where 1 kilogram is equal to 1000 grams. It's often used for smaller measurements of mass, especially in laboratory settings. */
export declare const gram: Choice<typeof $mul>;
export declare const pound: Choice<typeof $mul>;
export declare const ounce: Choice<typeof $mul>;
/** Tonne (t): The tonne is a larger unit of mass, where 1 tonne is equal to 1000 kilograms. It's often used to measure large quantities of mass, such as in industrial or freight contexts. */
export declare const tonne: Choice<typeof $mul>;
export declare const Weight: ChoicesSpecType<typeof $mul>;
//# sourceMappingURL=Weight.d.ts.map