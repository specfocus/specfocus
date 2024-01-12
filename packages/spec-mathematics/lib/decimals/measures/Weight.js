"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weight = exports.tonne = exports.ounce = exports.pound = exports.gram = void 0;
/** Gram (g): The gram is a smaller unit of mass, where 1 kilogram is equal to 1000 grams. It's often used for smaller measurements of mass, especially in laboratory settings. */
exports.gram = ['g', 1];
exports.pound = ['lb', 1 / 453.59237];
exports.ounce = ['oz', 1 / 28.349523125];
/** Tonne (t): The tonne is a larger unit of mass, where 1 tonne is equal to 1000 kilograms. It's often used to measure large quantities of mass, such as in industrial or freight contexts. */
exports.tonne = ['t', 1 / 1000000];
exports.Weight = ['choices', exports.gram, exports.pound, exports.ounce, exports.tonne];
