import { type Container, type ContainerImport, type LazyContainer } from "./ns";
declare class ContainerBase<Service = unknown> implements Container<Service> {
    readonly service: Service;
    static readonly $$typeof: symbol;
    static add: (ns: string, className: string, container: Container) => void;
    static readonly extend: <Service_1 = unknown>(base: {
        new (service: Service_1): ContainerBase<Service_1>;
        readonly $$typeof: symbol;
        add: (ns: string, className: string, container: Container) => void;
        readonly extend: any;
        readonly resolve: <Service_2 = unknown>(moniker: string) => Promise<Container<Service_2>>;
        readonly lazy: (moniker: string, ctor: ContainerImport) => LazyContainer;
    }, service: Service_1, ns?: string) => {
        new (): {
            readonly service: Service_1;
            readonly moniker: string;
            toString(): string;
        };
        readonly $$typeof: symbol;
        add: (ns: string, className: string, container: Container) => void;
        readonly extend: any;
        readonly resolve: <Service_2 = unknown>(moniker: string) => Promise<Container<Service_2>>;
        readonly lazy: (moniker: string, ctor: ContainerImport) => LazyContainer;
    };
    static readonly resolve: <Service_1 = unknown>(moniker: string) => Promise<Container<Service_1>>;
    static readonly lazy: (moniker: string, ctor: ContainerImport) => LazyContainer;
    constructor(service: Service);
    readonly moniker: string;
    toString(): string;
}
export default ContainerBase;
//# sourceMappingURL=Container.d.ts.map