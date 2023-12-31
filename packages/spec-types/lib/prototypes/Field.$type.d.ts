import { type Scalar } from "./SpecType.scalar";
export declare const bigint = "bigint";
export declare const boolean = "boolean";
export declare const number = "number";
export declare const object = "object";
export declare const string = "string";
export declare const TYPE: readonly ["boolean", "number", "string"];
export type ScalarOrArray<T extends Scalar = Scalar> = T | T[];
export type TypeToString<T extends Scalar = Scalar> = T extends boolean ? 'boolean' : T extends bigint ? 'number' : T extends number ? 'number' : T extends string ? 'string' : T extends Scalar ? ScalarOrArray<'boolean' | 'number' | 'string'> : T extends (number | string) ? ScalarOrArray<'number' | 'string'> : 'string';
/** Checks the data type */
export declare const $type = "$type";
export interface Type<T extends Scalar = Scalar> {
    [$type]: TypeToString<T>;
}
export declare const TypeBoolean: Type<boolean>;
export declare const TypeNumber: Type<number>;
export declare const TypeString: Type<string>;
declare const verifyType: <T>(val: T, field: Partial<Type>, error: (msg: string) => void) => boolean | undefined;
export default verifyType;
//# sourceMappingURL=Field.$type.d.ts.map