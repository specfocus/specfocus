"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuminousIntensity = exports.lux = exports.lumen$ = exports.candela = void 0;
/**  */
exports.candela = 'cd';
/** Lumen (lm): The lumen is a unit of luminous flux, which measures the total amount of visible light emitted by a light source. Luminous flux takes into account the entire spectrum of visible light, not just the intensity in a specific direction. */
exports.lumen$ = 'lm';
/** Lux (lx): The lux is a unit of illuminance, which measures the amount of luminous flux per unit area. It indicates the brightness of a surface as illuminated by a light source. One lux is equal to one lumen per square meter (1 lx = 1 lm/m²). */
exports.lux = 'lx';
/** Unit of luminous intensity (candela) */
exports.LuminousIntensity = ['choices', exports.candela, exports.lumen$, exports.lux];
