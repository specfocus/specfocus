"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comparison_1 = require("@specfocus/spec-comparables/lib/comparison");
var isConditionalOperator = function ($tag) {
    return comparison_1.$COMPARISON.includes($tag);
};
exports.default = isConditionalOperator;
