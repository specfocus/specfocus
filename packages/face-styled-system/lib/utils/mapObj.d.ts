declare const mapObj: <T extends {}, U>(fn: (val: T[Extract<keyof T, string>], key: Extract<keyof T, string>, index: number) => U, obj: T) => { [K in keyof T]: U; };
export default mapObj;
//# sourceMappingURL=mapObj.d.ts.map