"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logical_1 = require("./Logical");
var isLogicalOperator = function ($tag) { return Logical_1.LOGICAL.includes($tag); };
exports.default = isLogicalOperator;
