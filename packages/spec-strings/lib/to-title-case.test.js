"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var to_title_case_1 = __importDefault(require("./to-title-case"));
describe('titleCase', function () {
    [
        ['hi  there', 'Hi There'],
        ['hi-There', 'Hi There'],
        ['hi_there_1', 'Hi There 1'],
        ['  hi_there  ', 'Hi There'],
    ].forEach(function (_a) {
        var _b = __read(_a, 2), input = _b[0], expected = _b[1];
        it("should ".concat(input, " => ").concat(expect), function () {
            expect((0, to_title_case_1.default)(input)).toBe(expected);
        });
    });
});
