import { type StringSpecType } from "../SpecType.string";
export declare const $domain = "$domain";
/** Second-level domain (SLD): This is the readable part of the address, often representing the name of the company, organization, or the topic of the website. For example, in "google.com", "google" is the SLD. */
export declare const $sld = "$sld";
/** Top-level domain (TLD): This is the last segment of the domain name, coming after the last dot. Examples include ".com", ".org", ".net", and ".gov". There are also country-code top-level domains (ccTLDs) like ".uk" for the United Kingdom or ".ca" for Canada. */
export declare const $tld = "$tld";
export declare const $sld$tld = "$sld$tld";
export declare const prototype: StringSpecType;
declare const Domain_base: any;
export declare class Domain extends Domain_base {
    tag: string;
    static readonly $sld: Domain;
    static readonly $tld: Domain;
    static readonly $sld$tld: Domain;
    readonly prototype: StringSpecType;
    constructor(tag: string, $default: string);
}
export default prototype;
//# sourceMappingURL=Domain.d.ts.map