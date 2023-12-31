export declare const clamp: (x: number, min: number, max: number) => number;
export declare const pad: (x: number, pad: number) => string;
export declare const ceil: (v: number) => number;
export declare const parseNumber: (v: number | string) => number | "";
export declare function getStep(number: number): number;
export declare const range: (v: number, min: number, max: number) => number;
export declare const invertedRange: (p: number, min: number, max: number) => number;
export declare const getUid: () => string;
/**
 * Copyright: copied from here: https://stackoverflow.com/a/63105543
 * by @aanrudolph2 https://github.com/aanrudolph2

/**
 * Evaluates a numerical expression as a string and returns a Number
 * Follows standard PEMDAS operation ordering
 * @param {String} expr Numerical expression input
 * @returns {Number} Result of expression
 * @example evaluate('2 + 4*(30/5) - 34 + 45/2')
 */
declare const evaluate: (expr: string) => number;
export default evaluate;
//# sourceMappingURL=evaluate.d.ts.map