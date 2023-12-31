export declare const $class = "$class";
export type $Class = typeof $class;
export type TaggedStringClassSpec = [$Class, string];
export type StringClassSpec = {
    [$class]: string;
};
export declare const verifyStringClass: (val: string | string[], spec: StringClassSpec | TaggedStringClassSpec, error: (msg: string) => void) => Promise<boolean | undefined>;
//# sourceMappingURL=SpecType.string.$class.d.ts.map