import { type Valuable } from "./Valuable";
/**  Present in a collection */
export declare const $in = "$in";
export type In<V extends Valuable = Valuable> = {
    [$in]: V[];
};
export type $In = typeof $in;
export type TaggedIn<V extends Valuable = Valuable> = [$In, V[]] | [$In, ...V[]];
export declare const checkIn: <V extends Valuable = Valuable>(val: V | V[], expr: In<V> | TaggedIn<V>, error: (msg: string) => void) => boolean | undefined;
//# sourceMappingURL=$in.d.ts.map