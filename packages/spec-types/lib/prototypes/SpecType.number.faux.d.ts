import { type Verification } from "../verifications/Verification";
export declare class NumberFactory implements Iterable<number> {
    readonly condition: Verification<number>;
    readonly scale: number;
    readonly bound: Readonly<[number, number]>;
    [Symbol.iterator](): Generator<number, void, unknown>;
    private readonly factor;
    private readonly ranges;
    constructor(condition: Verification<number>, scale?: number, bound?: Readonly<[number, number]>);
    faux(): number;
    private readonly constrain;
    private readonly checkIn;
    private readonly notIn;
    private readonly gt;
    private _limit;
    private limit;
    private readonly lt;
}
declare const generator: (condition: Verification<number>, scale: number) => Iterable<number>;
export default generator;
//# sourceMappingURL=SpecType.number.faux.d.ts.map