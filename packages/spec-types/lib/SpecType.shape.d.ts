import { type BooleanSpecType } from "./SpecType.boolean";
import { type ChoicesSpecType } from "./SpecType.choices";
import { type DecimalSpecType } from "./SpecType.decimal";
import { type MatchedSpecType } from "./SpecType.matched";
import { type NumberSpecType } from "./SpecType.number";
import { type Scalar } from "./SpecType.scalar";
import { type StringSpecType } from "./SpecType.string";
export interface Shape {
    [K: string]: Scalar | Scalar[] | Shape | Shape[];
}
export type ShapeType<T extends Shape = Shape> = {
    [K in keyof T]: T[K] extends boolean ? BooleanSpecType : T[K] extends number ? (NumberSpecType) : T[K] extends string ? (StringSpecType) : T[K] extends Shape ? ShapeType<T[K]> : (StringSpecType | ChoicesSpecType | DecimalSpecType | MatchedSpecType);
};
//# sourceMappingURL=SpecType.shape.d.ts.map