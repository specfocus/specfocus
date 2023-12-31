import { type LazyComponent, type Payload } from "./lazy";
import { type Thenable } from "./types";
export interface Container<Service = unknown> {
    readonly service: Service;
}
export declare const CONTAINER_TYPE: unique symbol;
export type ContainerClass<Service = unknown> = {
    new (): Container<Service>;
    $$typeof: typeof CONTAINER_TYPE;
};
export type ContainerInstanceOrClass<Service = unknown> = Container<Service> | ContainerClass<Service>;
export type ContainerImport<Service = unknown> = () => Thenable<{
    default: ContainerInstanceOrClass<Service>;
}>;
export type InstanceOrClassOrLazy<Service = unknown> = ContainerInstanceOrClass<Service> | ContainerImport<Service>;
export type LazyContainer = LazyComponent<ContainerInstanceOrClass, Payload<ContainerInstanceOrClass>>;
export interface NamespaceContainer extends Container<Namespace> {
}
export declare const isContainerClass: <Service>(container: InstanceOrClassOrLazy<Service>) => container is ContainerClass<Service>;
export declare const isContainerInstance: <Service = unknown>(obj: object) => obj is Container<Service>;
export declare class Namespace {
    readonly nodes: Map<string, InstanceOrClassOrLazy>;
    constructor(nodes?: Map<string, InstanceOrClassOrLazy>);
    add(ns: string, className: string, container: Container): void;
    get<Service = unknown>(moniker: string): Promise<Container<Service>>;
    lazy(moniker: string, ctor: ContainerImport): LazyContainer;
    options(moniker: string): [string, Container][];
    register(ns: string, containerClass: ContainerClass): void;
}
declare const root: Namespace;
export default root;
//# sourceMappingURL=ns.d.ts.map