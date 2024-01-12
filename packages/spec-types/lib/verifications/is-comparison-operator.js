"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comparison_1 = require("@specfocus/spec-comparables/lib/Comparison");
var isConditionalOperator = function ($tag) {
    return Comparison_1.$COMPARISON.includes($tag);
};
exports.default = isConditionalOperator;
