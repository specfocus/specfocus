export declare const $class = "$class";
export type $Class = typeof $class;
export type TaggedDecimalClassSpec = [$Class, string];
export type DecimalClassSpec = {
    [$class]: string;
};
export declare const verifyDecimalClass: (val: string | string[], spec: DecimalClassSpec | TaggedDecimalClassSpec, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=SpecType.decimal.$class.d.ts.map