import { type Exists } from "./Field.$exists";
import { type Nullable } from "./Field.$nullable";
import { type Size } from "./Field.$size";
import { $spec, type SpecType } from "./Field.$spec";
import { $type, type Type } from "./Field.$type";
import { type Scalar } from "./SpecType.scalar";
import { type Shape } from "./SpecType.shape";
export declare const $elem = "$elem";
export interface Elective extends Partial<Exists>, Partial<Nullable> {
}
export interface Atom<T extends Scalar> extends Elective, Type<T> {
    [$spec]?: SpecType<T>;
}
export interface Inline<T extends Shape> extends Elective {
    [$type]: Fieldset<T>;
}
export interface Sequence<T extends Shape> extends Elective, Partial<Size> {
    [$type]: 'array';
    [$elem]: Readonly<Inline<T>> | Readonly<Reference<T>>;
}
export interface Vector<T extends Scalar> extends Elective, Partial<Size> {
    [$type]: 'array';
    [$elem]?: Readonly<Atom<T>>;
}
export interface Reference<T extends Shape> extends Elective {
    [$type]: () => Promise<Fieldset<T>>;
}
export type AtomField<T = Scalar | Shape> = T extends Shape ? Readonly<Inline<T>> | Readonly<Reference<T>> : T extends Scalar ? Readonly<Atom<T>> : never;
export type ArrayField<T = Scalar | Shape> = T extends Shape ? Readonly<Sequence<T>> : T extends Scalar ? Readonly<Vector<T>> : never;
type FieldType = Scalar | Scalar[] | Shape | Shape[];
export type Field<T extends FieldType = FieldType> = T extends (infer U)[] ? ArrayField<U> : AtomField<T>;
export type OneOf<T extends FieldType> = {
    $oneOf: {
        <U extends T>(...fields: U[]): Field<U>;
    };
};
export type Fieldset<T extends Shape = Shape> = {
    [K in keyof T]: Field<T[K]> | OneOf<T[K]>;
};
export declare const isAtom: <T extends Scalar = Scalar>(field: any) => field is Readonly<Atom<T>>;
export {};
//# sourceMappingURL=Fieldset.d.ts.map