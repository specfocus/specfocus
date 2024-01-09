declare const TaggedUsername_base: {
    new (): {
        readonly service: import("../prototypes/SpecType.string.class").Validation;
        readonly moniker: string;
        toString(): string;
    };
    readonly $$typeof: symbol;
    add: (ns: string, className: string, container: import("lib/ioc/ns").Container<unknown>) => void;
    readonly extend: <Service = unknown>(base: typeof ContainerBase<Service>, service: Service, ns?: string | undefined) => {
        new (): {
            readonly service: Service;
            readonly moniker: string;
            toString(): string;
        };
        readonly $$typeof: symbol;
        add: (ns: string, className: string, container: import("lib/ioc/ns").Container<unknown>) => void;
        readonly extend: any;
        readonly resolve: <Service_1 = unknown>(moniker: string) => Promise<import("lib/ioc/ns").Container<Service_1>>;
        readonly lazy: (moniker: string, ctor: import("lib/ioc/ns").ContainerImport) => import("lib/ioc/ns").LazyContainer;
    };
    readonly resolve: <Service_1 = unknown>(moniker: string) => Promise<import("lib/ioc/ns").Container<Service_1>>;
    readonly lazy: (moniker: string, ctor: import("lib/ioc/ns").ContainerImport) => import("lib/ioc/ns").LazyContainer;
};
export declare class TaggedUsername extends TaggedUsername_base {
}
export {};
//# sourceMappingURL=Username.d.ts.map