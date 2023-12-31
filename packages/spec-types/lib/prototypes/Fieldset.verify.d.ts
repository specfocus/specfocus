import { type ArrayField, type AtomField, type Fieldset, type OneOf } from "./Fieldset";
import { type Scalar } from "./SpecType.scalar";
import { type Shape } from "./SpecType.shape";
export declare const verifyField: <T extends Scalar | Shape>(val: T | T[], field: AtomField<T> | ArrayField<T> | OneOf<T>, error: (msg: string) => void) => Promise<boolean | undefined>;
declare const verifyFieldset: <T extends Shape>(shape: T, fieldset: Fieldset<T>, error: (msg: string) => void) => Promise<boolean | undefined>;
export default verifyFieldset;
//# sourceMappingURL=Fieldset.verify.d.ts.map