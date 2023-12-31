import type { Wakeable, Thenable } from "./types";
export type UninitializedPayload<T> = {
    _status: number;
    _result: () => Thenable<{
        default: T;
    }>;
};
export type PendingPayload = {
    _status: 0;
    _result: Wakeable;
};
export type ResolvedPayload<T> = {
    _status: 1;
    _result: {
        default: T;
    };
};
export type RejectedPayload = {
    _status: 2;
    _result: unknown;
};
export type Payload<T> = UninitializedPayload<T> | PendingPayload | ResolvedPayload<T> | RejectedPayload;
export type LazyComponent<T, P> = {
    $$typeof: symbol | number;
    _payload: P;
    _init: (payload: P) => T;
};
export declare function lazy<T>(ctor: () => Thenable<{
    default: T;
}>): LazyComponent<T, Payload<T>>;
//# sourceMappingURL=lazy.d.ts.map