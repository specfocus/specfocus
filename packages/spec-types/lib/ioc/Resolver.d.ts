import ContainerBase from "./Container";
import { Namespace, type Container, type InstanceOrClassOrLazy, type NamespaceContainer, type ContainerImport, type LazyContainer } from "./ns";
export declare class Resolver extends ContainerBase<Namespace> implements NamespaceContainer {
    static readonly merge: (prefix: string, nodes?: Map<string, InstanceOrClassOrLazy>) => Resolver;
    constructor(namespace?: Namespace);
    readonly add: (ns: string, className: string, container: Container) => void;
    readonly lazy: (moniker: string, ctor: ContainerImport) => LazyContainer;
    readonly resolve: <Service = unknown>(moniker: string) => Promise<Container<Service>>;
}
declare const root: Resolver;
export default root;
//# sourceMappingURL=Resolver.d.ts.map