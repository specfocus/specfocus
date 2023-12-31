type Value = boolean | bigint | number | object | string | Formatter;
type Lookup = Record<string, Value>;
type Formatter = (lookup: Lookup) => void;
/**
 * http://crockford.com/javascript/
 * @param template
 * @param lookup
 * @example supplant("I'm {age} years old!", { age: 29 })
 * @example supplant("The {a} says {n}, {n}, {n}!", { a: 'cow', n: 'moo' })
 * @returns
 */
declare const supplant: (template: string, lookup: Lookup) => string;
export default supplant;
//# sourceMappingURL=supplant.d.ts.map