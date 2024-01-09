"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timezone_1 = require("./timezone");
describe("Test Timezone", function () {
    it("should parse a correct timezone", function () {
        expect(timezone_1.Timezone.parse("Z08:00").value).toBe("+08:00");
        expect(timezone_1.Timezone.parse("+08:00").value).toBe("+08:00");
        expect(timezone_1.Timezone.parse("-08:00").value).toBe("-08:00");
        expect(timezone_1.Timezone.parse("Z0800").value).toBe("+08:00");
        expect(timezone_1.Timezone.parse("+0800").value).toBe("+08:00");
        expect(timezone_1.Timezone.parse("-0800").value).toBe("-08:00");
    });
});
