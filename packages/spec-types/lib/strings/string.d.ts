export type AbsoluteUrl = string;
export type Base64 = string;
export type Base64Url = string;
export type Code = string;
export type EmailAddress = string;
export type Guid = string;
export type LowerCase = string;
export type Json = Code;
export type NumberLike = string;
export type UpperCase = string;
export declare const DATE_STR = "date";
export declare const EMAIL = "email";
export declare const GUID = "guid";
export declare const NAME = "name";
export declare const PASSWORD = "password";
export declare const REGEX = "regex";
export declare const STRING = "string";
export declare const URL = "url";
export declare const USERNAME = "username";
export declare const isAbsoluteUrl: (val: unknown) => val is string;
export declare const isEmailAddress: (val: unknown) => val is string;
export declare const isGuid: (val: unknown) => val is string;
export declare const isIntegerLike: (val: unknown) => val is number;
export declare const isLowerCase: (val: unknown) => val is string;
export declare const hasNumberTypeLike: (val: unknown) => val is string;
export declare const isAlphaNumeric: (val: unknown) => val is string;
export declare const hasStringType: (val: unknown) => val is string;
export declare const isUpperCase: (val: unknown) => val is string;
export declare const isValidJSON: (val: unknown) => val is string;
export declare const words: (str: string) => string[];
export declare const upperFirst: (str: string) => string;
export declare const join: (str: string, d: string) => string;
export declare const camelCase: (str: string) => string;
export declare const pascalCase: (str: string) => string;
export declare const snakeCase: (str: string) => string;
export declare const kebabCase: (str: string) => string;
export declare const sentenceCase: (str: string) => string;
export declare const titleCase: (str: string) => string;
//# sourceMappingURL=string.d.ts.map