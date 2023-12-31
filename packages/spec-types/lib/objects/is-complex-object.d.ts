import { type Primitive } from './is-primitive';
import { type ShallowObject } from './is-shallow-object';
export type PropertyType = Primitive | ShallowObject | null;
export interface ComplexObject {
    [K: string]: PropertyType;
}
declare const isComplexObject: (val: unknown) => val is ComplexObject;
export default isComplexObject;
//# sourceMappingURL=is-complex-object.d.ts.map