import { type Integer } from "./is-integer";
import { type Serie } from "./serie";
export { $Factors } from "../prototypes/SpecType.decimal.$factor";
interface IMeasure {
}
export type Decimal = number;
export declare const $measure = "$measure";
/** Left raised to the power of right. */
export declare const $pow$ = "$pow$";
export type $Pow$ = typeof $pow$;
/** Left divided by right. */
export declare const $per$ = "$per$";
export type $Per$ = typeof $per$;
export declare const $by$ = "$by$";
export type $By$ = typeof $by$;
export type Pre<U extends IMeasure = IMeasure> = [Decimal | Integer, U];
export type Pow<U extends IMeasure = IMeasure> = [Pre<U>, $Pow$, Serie<2, 4>];
export type By = [Formula, $By$, Formula] | [Formula, $By$, Formula, $By$, Formula];
export type Square<V extends Decimal | Integer = Decimal, U extends IMeasure = IMeasure> = [V, V, U];
export type Cubic<V extends Decimal = Decimal, U extends IMeasure = IMeasure> = [V, V, V, U];
export type Per = [Formula, $Per$, Formula];
export type Formula = Pre | By | Per | Pow | Square | Cubic;
export type TaggedMeasure<T extends string, S extends Formula> = [T, S];
//# sourceMappingURL=Formula.d.ts.map