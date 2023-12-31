import { type Sink } from "./Sink";
export declare const makeAsyncIterableIteratorFromSink: <TValue = unknown, TError = unknown>(make: (sink: Sink<TValue, TError>) => () => void) => AsyncIterableIterator<TValue>;
//# sourceMappingURL=makeAsyncIterableIteratorFromSink.d.ts.map