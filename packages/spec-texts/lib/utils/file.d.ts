export declare const exists: (path: string) => Promise<boolean>;
export declare function mapAsync<T, U>(array: T[], callbackfn: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]>;
export declare function filterAsync<T>(array: T[], callbackfn: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<T[]>;
export declare const isDirectory: (source: string) => Promise<boolean>;
export declare const getDirectories: (source: string) => Promise<string[]>;
export declare const getFiles: (dirPath: string, pattern: RegExp, includeSubfolders: boolean) => Promise<string[]>;
