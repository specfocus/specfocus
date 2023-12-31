export declare const $class = "$class";
export type $Class = typeof $class;
export type TaggedNumberClassSpec = [$Class, string];
export type NumberClassSpec = {
    [$class]: string;
};
export declare const verifyNumberClass: (val: number | number[], spec: NumberClassSpec | TaggedNumberClassSpec, error: (msg: string) => void) => Promise<boolean | undefined>;
//# sourceMappingURL=SpecType.number.$class.d.ts.map