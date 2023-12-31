import { $add, $mul } from "../numbers/calculus/arithmetics";
export type Operator = typeof $add | typeof $mul;
export type Choice<Op extends Operator | undefined = undefined> = Op extends typeof $add ? Readonly<[string, number, typeof $add]> : Op extends typeof $mul ? Readonly<[string, number, typeof $mul?]> : string;
export type ChoicesSpecType<Op extends Operator | undefined = undefined> = Readonly<['choices', ...Readonly<Choice<Op>>[]]>;
//# sourceMappingURL=SpecType.choices.d.ts.map