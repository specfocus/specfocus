"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Energy = exports.foot_pound = exports.british_thermal_unit = exports.kilowatt_hour = exports.electronvolt = exports.calorie = exports.joule = void 0;
/** Joule (J): The joule is the International System of Units (SI) unit of energy. It's defined as the amount of energy transferred when a force of one newton is applied over a distance of one meter. The joule is the base unit for energy and is used globally for scientific and practical measurements of energy. */
exports.joule = 'J';
/** Calorie (cal): The calorie is a non-SI unit of energy commonly used in nutrition and discussions of energy in food. There are two types of calories: the small calorie (cal) and the larger kilocalorie (kcal). One kilocalorie is equal to 4184 joules. */
exports.calorie = 'cal';
/** Electronvolt (eV): The electronvolt is a unit of energy used in atomic and particle physics. It's defined as the energy gained or lost by an electron when it moves through an electric potential difference of one volt. One electronvolt is approximately equal to 1.602 x 10^-19 joules. */
exports.electronvolt = 'eV';
/** Kilowatt-Hour (kWh): The kilowatt-hour is a unit of energy commonly used for measuring electricity consumption. One kilowatt-hour is equal to 3600 kilojoules (3.6 million joules). */
exports.kilowatt_hour = 'kWh';
/** British Thermal Unit (BTU): The British thermal unit is commonly used in the United States, especially in discussions of heating and cooling systems. One BTU is approximately equal to 1055.05585 joules. */
exports.british_thermal_unit = 'BTU';
/** Foot-Pound (ft-lbf): The foot-pound is a unit of energy often used in mechanical engineering. It's the energy required to move a one-pound object a distance of one foot. One foot-pound is approximately equal to 1.35582 joules. */
exports.foot_pound = 'ft-lbf';
/** Unit of energy, work, quantity of heat (joule, J) */
exports.Energy = ['choices', exports.joule, exports.calorie, exports.electronvolt, exports.kilowatt_hour, exports.british_thermal_unit, exports.foot_pound];
