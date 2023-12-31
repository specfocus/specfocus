import { Scalar } from "./SpecType.scalar";
export interface TypeClass<V extends Scalar> {
    valueOf(val: unknown): V | undefined;
    validate(value: unknown, error: (msg: string) => void): boolean;
}
//# sourceMappingURL=SpecType.class.d.ts.map