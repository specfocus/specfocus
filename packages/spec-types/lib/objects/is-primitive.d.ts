import { type PrimitiveObject } from './is-primitive-object';
import { type PrimitiveValue } from './is-primitive-value';
export type Primitive = PrimitiveValue | PrimitiveObject;
declare const isPrimitive: (val: unknown) => val is Primitive;
export default isPrimitive;
//# sourceMappingURL=is-primitive.d.ts.map