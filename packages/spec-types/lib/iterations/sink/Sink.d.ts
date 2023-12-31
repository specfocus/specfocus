export interface Sink<TValue = unknown, TError = unknown> {
    next: (value: TValue) => void;
    error: (error: TError) => void;
    complete: () => void;
}
//# sourceMappingURL=Sink.d.ts.map