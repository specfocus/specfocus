import Container from "../ioc/Container";
import { TypeClass } from "./SpecType.class";
import { type StringSpec } from "./SpecType.string";
export type Validation = (value: unknown) => boolean;
export declare class StringClass extends Container<Validation> implements TypeClass<string> {
    static readonly String: any;
    /** Alpha-Numeric: A combination of letters and numbers without any specific case or separators, e.g., File123. */
    static readonly AlphaNumeric: any;
    /** Camel Case: Words are joined together without spaces, and each word except the first starts with an uppercase letter, e.g., myFileDocument.docx. */
    static readonly CamelCase: any;
    /** Dot Notation: Words are joined with dots, often used in web domains or URLs, e.g., website.com/index.html. */
    /** Flat Case (flatcase): All lowercase with no delimiters: thisisflatcase. */
    /** Hashed: A file name generated using a hash function, often used to represent the content of the file, e.g., d41d8cd98f00b204e9800998ecf8427e.txt. */
    /** Hexadecimal: Uses hexadecimal notation for uniqueness or identification, e.g., 0x1a3f8b.png. */
    /** 24 hours time format, e.g. 13:00 is 1:00 PM and 23:59 is 11:59 PM */
    /** Kebab Case: Words are joined with hyphens, and all letters are in lowercase, e.g., user-profile.jpg. */
    /** Lower Case: All letters are in lowercase, e.g., script.js. */
    /** Pascal Case (PascalCase): Similar to camel case, but the first letter is also capitalized: ThisIsPascalCase. Often used for class names in many programming languages. */
    /** Sentence Case: "The quick brown fox jumps over the lazy dog." */
    /** Snake Case: Lowercase and separated by underscores e.g. user_name, read_file, error_list. */
    /** Space Separated: Words are separated by spaces, often used for file names in more casual settings, e.g., my vacation photo.jpg. */
    /** Title Case: "The Quick Brown Fox Jumps Over the Lazy Dog" */
    /** Train Case: Similar to kebab case, but each word starts with an uppercase letter, e.g., User-Profile.jpg. */
    /** Upper Case: All letters are capitalized, e.g., IMAGE.PNG. */
    /** Upper Snake Case (UPPER_SNAKE_CASE): Like snake case, but all letters are uppercase. Often used for constants in programming: THIS_IS_UPPER_SNAKE_CASE. */
    /** UUID: Universally Unique Identifier, a long string of letters, numbers, and hyphens used for generating unique identifiers, e.g., 550e8400-e29b-41d4-a716-446655440000. */
    constructor();
    valueOf(val: unknown): string | undefined;
    validate(value: unknown, error: (msg: string) => void): value is string | string[];
}
declare const AlphaNumeric_base: any;
/** Alpha-Numeric: A combination of letters and numbers without any specific case or separators, e.g., File123. */
export declare class AlphaNumeric extends AlphaNumeric_base {
}
declare const CamelCase_base: any;
/** Camel Case: Words are joined together without spaces, and each word except the first starts with an uppercase letter, e.g., myFileDocument.docx. */
export declare class CamelCase extends CamelCase_base {
}
declare const KebabCase_base: any;
/** Dot Notation: Words are joined with dots, often used in web domains or URLs, e.g., website.com/index.html. */
/** Flat Case (flatcase): All lowercase with no delimiters: thisisflatcase. */
/** Hashed: A file name generated using a hash function, often used to represent the content of the file, e.g., d41d8cd98f00b204e9800998ecf8427e.txt. */
/** Hexadecimal: Uses hexadecimal notation for uniqueness or identification, e.g., 0x1a3f8b.png. */
/** 24 hours time format, e.g. 13:00 is 1:00 PM and 23:59 is 11:59 PM */
/** Kebab Case: Words are joined with hyphens, and all letters are in lowercase, e.g., user-profile.jpg. */
export declare class KebabCase extends KebabCase_base {
}
declare const LowerCase_base: any;
/** Lower Case: All letters are in lowercase, e.g., script.js. */
export declare class LowerCase extends LowerCase_base {
}
declare const Numeric_base: any;
export declare class Numeric extends Numeric_base {
}
declare const PascalCase_base: any;
/** Pascal Case (PascalCase): Similar to camel case, but the first letter is also capitalized: ThisIsPascalCase. Often used for class names in many programming languages. */
export declare class PascalCase extends PascalCase_base {
}
declare const SnakeCase_base: any;
/** Sentence Case: "The quick brown fox jumps over the lazy dog." */
/** Snake Case: Lowercase and separated by underscores e.g. user_name, read_file, error_list. */
export declare class SnakeCase extends SnakeCase_base {
}
declare const SpaceSeparated_base: any;
/** Space Separated: Words are separated by spaces, often used for file names in more casual settings, e.g., my vacation photo.jpg. */
export declare class SpaceSeparated extends SpaceSeparated_base {
}
declare const UpperCase_base: any;
/** Title Case: "The Quick Brown Fox Jumps Over the Lazy Dog" */
/** Train Case: Similar to kebab case, but each word starts with an uppercase letter, e.g., User-Profile.jpg. */
/** Upper Case: All letters are capitalized, e.g., IMAGE.PNG. */
export declare class UpperCase extends UpperCase_base {
}
/** Upper Snake Case (UPPER_SNAKE_CASE): Like snake case, but all letters are uppercase. Often used for constants in programming: THIS_IS_UPPER_SNAKE_CASE. */
/** UUID: Universally Unique Identifier, a long string of letters, numbers, and hyphens used for generating unique identifiers, e.g., 550e8400-e29b-41d4-a716-446655440000. */
export type StringType = [typeof StringClass.name, StringSpec?];
export {};
//# sourceMappingURL=SpecType.string.class.d.ts.map