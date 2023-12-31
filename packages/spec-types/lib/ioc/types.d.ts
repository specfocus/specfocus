export interface Wakeable {
    then(onFulfill: () => unknown, onReject: () => unknown): void | Wakeable;
}
export interface ThenableImpl<T> {
    then(onFulfill: (value: T) => unknown, onReject: (error: unknown) => unknown): void | Wakeable;
}
export interface UntrackedThenable<T> extends ThenableImpl<T> {
    status?: void;
}
export interface PendingThenable<T> extends ThenableImpl<T> {
    status: 'pending';
}
export interface FulfilledThenable<T> extends ThenableImpl<T> {
    status: 'fulfilled';
    value: T;
}
export interface RejectedThenable<T> extends ThenableImpl<T> {
    status: 'rejected';
    reason: unknown;
}
export type Thenable<T> = UntrackedThenable<T> | PendingThenable<T> | FulfilledThenable<T> | RejectedThenable<T>;
//# sourceMappingURL=types.d.ts.map