"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = exports.kelvin = exports.celsius = void 0;
var arithmetics_1 = require("../../numbers/calculus/arithmetics");
/** */
exports.celsius = ['°C', -273.15, arithmetics_1.$add];
/** */
exports.kelvin = ['K', 0, arithmetics_1.$add];
/** Unit of thermodynamic temperature (kelvin	K) */
exports.Temperature = ['choices', exports.kelvin, exports.celsius];
