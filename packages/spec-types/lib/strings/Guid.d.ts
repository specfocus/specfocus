declare const Guid_base: {
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
export declare class Guid extends Guid_base {
}
export {};
//# sourceMappingURL=Guid.d.ts.map