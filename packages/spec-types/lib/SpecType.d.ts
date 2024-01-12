import { type BooleanSpecType } from "./SpecType.boolean";
import { type ChoicesSpecType } from "./SpecType.choices";
import { type DecimalSpecType } from "./SpecType.decimal";
import { type MatchedSpecType } from "./SpecType.matched";
import { type NumberSpecType } from "./SpecType.number";
import { type Scalar } from "./SpecType.scalar";
import { type Shape } from "./SpecType.shape";
import { type StringSpecType } from "./SpecType.string";
export type SpecType = BooleanSpecType | ChoicesSpecType | DecimalSpecType | MatchedSpecType | NumberSpecType | StringSpecType;
export type RecursiveScalarType<T extends Scalar> = T | RecursiveScalarType<T>[];
export type RecursiveShapeType<T extends ShapeSpecType> = {
    [K in keyof T]: RecursiveTypeOf<T[K]>;
};
export type ShapeSpecType<T extends Shape = Shape> = {
    [K in keyof T]: BooleanSpecType | NumberSpecType | StringSpecType | ShapeSpecType<Shape> | ChoicesSpecType | DecimalSpecType | MatchedSpecType;
};
export type RecursiveTypeOf<T extends SpecType | ShapeSpecType<Shape>> = T extends BooleanSpecType ? RecursiveScalarType<boolean> : T extends ChoicesSpecType ? RecursiveScalarType<string> : T extends DecimalSpecType ? RecursiveScalarType<string> : T extends MatchedSpecType ? RecursiveScalarType<string> : T extends NumberSpecType ? RecursiveScalarType<number> : T extends StringSpecType ? RecursiveScalarType<string> : T extends ShapeSpecType ? RecursiveShapeType<T> : unknown;
//# sourceMappingURL=SpecType.d.ts.map