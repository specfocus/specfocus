import { type BooleanSpecType } from "./SpecType.boolean";
import { type ChoicesSpecType } from "./SpecType.choices";
import { type DecimalSpecType } from "./SpecType.decimal";
import { type MatchedSpecType } from "./SpecType.matched";
import { type NumberSpecType } from "./SpecType.number";
import { type Scalar } from "./SpecType.scalar";
import { type StringSpecType } from "./SpecType.string";
export declare const $spec = "$spec";
export type SpecType<T extends Scalar> = T extends boolean ? BooleanSpecType : T extends number ? NumberSpecType : (StringSpecType | ChoicesSpecType | DecimalSpecType | MatchedSpecType);
//# sourceMappingURL=Field.$spec.d.ts.map