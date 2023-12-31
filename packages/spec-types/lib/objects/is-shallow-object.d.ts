import { type Primitive } from './is-primitive';
export interface ShallowObject {
    [K: string]: Primitive;
}
declare const isShallowObject: (val: unknown) => val is ShallowObject;
export default isShallowObject;
//# sourceMappingURL=is-shallow-object.d.ts.map