import { type NonNegativeInteger } from "@specfocus/spec-numbers/lib/is-non-negative-integer";
import { type PositiveInteger } from "@specfocus/spec-numbers/lib/is-positive-integer";
export declare const CRON_VALUE = "v";
export declare const CRON_RANGE = "r";
export declare const CRON_INTERVAL = "i";
export type CronValueType = typeof CRON_VALUE;
export type CronRangeType = typeof CRON_RANGE;
export type CronOffsetType = CronValueType | CronRangeType;
export type CronIntervalType = typeof CRON_INTERVAL;
export type CronObjectType = CronOffsetType | CronIntervalType;
export type CronConstantSpec<V extends NonNegativeInteger = NonNegativeInteger> = V;
export type CronVariableType = string & {
    __variableBrand: never;
};
export type CronVariableSpec<T extends CronVariableType = CronVariableType> = T;
export type CronUnarySpec<T extends CronVariableType = CronVariableType, P extends NonNegativeInteger = NonNegativeInteger> = Readonly<[T, P]>;
export type CronBinarySpec<T extends CronVariableType = CronVariableType, P extends NonNegativeInteger = NonNegativeInteger, S extends PositiveInteger = PositiveInteger> = Readonly<[T, P, S]>;
export type CronValueSpec<V extends NonNegativeInteger = NonNegativeInteger> = CronConstantSpec<V> | CronVariableSpec | CronBinarySpec | CronUnarySpec;
export type CronRangeSpec<V extends NonNegativeInteger = NonNegativeInteger> = Readonly<[CronRangeType, CronValueSpec<V>, CronValueSpec<V>]>;
export type CronOffsetSpec<V extends NonNegativeInteger = NonNegativeInteger> = CronValueSpec<V> | CronRangeSpec<V>;
export type CronIntervalSpec<V extends NonNegativeInteger = NonNegativeInteger> = Readonly<[CronIntervalType, CronValueSpec<V> | CronRangeSpec<V>, PositiveInteger]>;
export type CronObjectSpec<V extends NonNegativeInteger = NonNegativeInteger> = CronOffsetSpec<V> | CronIntervalSpec<V>;
export declare const cronVariableSpec: <T extends CronVariableType = CronVariableType>(type: T) => CronVariableSpec<T>;
export declare const cronUnarySpec: <T extends CronVariableType = CronVariableType, P extends number = number>(type: T, primary: P) => CronUnarySpec<T, P>;
export declare const cronBinarySpec: <T extends CronVariableType = CronVariableType, P extends number = number, S extends number = number>(type: T, primary: P, secondary: S) => CronBinarySpec<T, P, S>;
export declare const isCronConstantSpec: (spec: unknown) => spec is number;
export declare const isCronVariableSpec: <T extends CronVariableType = CronVariableType>(spec: unknown) => spec is T;
export declare const isCronUnarySpec: <T extends CronVariableType = CronVariableType, P extends number = number>(spec: unknown) => spec is readonly [T, P];
export declare const isCronBinarySpec: <T extends CronVariableType = CronVariableType, P extends number = number, S extends number = number>(spec: unknown) => spec is readonly [T, P, S];
export declare const isCronParametricSpec: <T extends CronVariableType = CronVariableType, P extends number = number>(spec: unknown) => spec is readonly [T, P] | readonly [T, P, number];
export declare const isCronValueSpec: (spec: unknown) => spec is CronValueSpec<number>;
export declare const isCronRangeSpec: (spec: unknown) => spec is readonly ["r", CronValueSpec<number>, CronValueSpec<number>];
export declare const isCronInterval: (obj: unknown) => obj is readonly ["i", CronValueSpec<number> | readonly ["r", CronValueSpec<number>, CronValueSpec<number>], number];
//# sourceMappingURL=CronObjectSpec.d.ts.map