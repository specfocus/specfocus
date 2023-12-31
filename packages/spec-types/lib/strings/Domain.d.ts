import { type StringSpecType } from "../prototypes/SpecType.string";
export declare const $domain = "$domain";
/** Second-level domain (SLD): This is the readable part of the address, often representing the name of the company, organization, or the topic of the website. For example, in "google.com", "google" is the SLD. */
export declare const $sld = "$sld";
/** Top-level domain (TLD): This is the last segment of the domain name, coming after the last dot. Examples include ".com", ".org", ".net", and ".gov". There are also country-code top-level domains (ccTLDs) like ".uk" for the United Kingdom or ".ca" for Canada. */
export declare const $tld = "$tld";
export declare const $sld$tld = "$sld$tld";
export declare const prototype: StringSpecType;
declare const Domain_base: {
    new (): {
        readonly service: import("../prototypes/SpecType.string.class").Validation;
        readonly moniker: string;
        toString(): string;
    };
    readonly $$typeof: symbol;
    add: (ns: string, className: string, container: import("../ioc/ns").Container<unknown>) => void;
    readonly extend: <Service = unknown>(base: {
        new (service: Service): import("../ioc/Container").default<Service>;
        readonly $$typeof: symbol;
        add: (ns: string, className: string, container: import("../ioc/ns").Container<unknown>) => void;
        readonly extend: any;
        readonly resolve: <Service_1 = unknown>(moniker: string) => Promise<import("../ioc/ns").Container<Service_1>>;
        readonly lazy: (moniker: string, ctor: import("../ioc/ns").ContainerImport) => import("../ioc/ns").LazyContainer;
    }, service: Service, ns?: string | undefined) => {
        new (): {
            readonly service: Service;
            readonly moniker: string;
            toString(): string;
        };
        readonly $$typeof: symbol;
        add: (ns: string, className: string, container: import("../ioc/ns").Container<unknown>) => void;
        readonly extend: any;
        readonly resolve: <Service_1 = unknown>(moniker: string) => Promise<import("../ioc/ns").Container<Service_1>>;
        readonly lazy: (moniker: string, ctor: import("../ioc/ns").ContainerImport) => import("../ioc/ns").LazyContainer;
    };
    readonly resolve: <Service_1 = unknown>(moniker: string) => Promise<import("../ioc/ns").Container<Service_1>>;
    readonly lazy: (moniker: string, ctor: import("../ioc/ns").ContainerImport) => import("../ioc/ns").LazyContainer;
};
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