import { type SimpleObject, type SimpleValue } from './simple';
declare const flatten: <T extends {} = SimpleObject>(src: T, path?: string[]) => Record<string, SimpleValue | SimpleValue[]>;
export default flatten;
//# sourceMappingURL=flatten.d.ts.map