"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { type Scalar } from "./SpecType.scalar";
var SomethingProto /*: ShapeProtoType */ = {
    b: ['boolean'],
    n: ['number'],
    s: ['string'],
    // c: ['scalar'] as const,
    nested: {
        anotherBool: ['boolean'],
        anotherNested: {
            yetAnotherNumber: ['number']
        }
    }
};
var something = {
    b: true,
    n: [2, [3, [4]]],
    s: 's',
    // c: [true, 2, 's'],
    nested: {
        anotherBool: true,
        anotherNested: {
            yetAnotherNumber: [2]
        }
    }
};
describe('RecordOf', function () {
    it('should be typed correctly', function () {
        var isTrue = true;
        expect(isTrue).toBe(true);
    });
});
