"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Velocity = exports.VelocityUnit = void 0;
var Measure_1 = require("../Measure");
/** Unit of speed, velocity (meter per second m/s) */
exports.VelocityUnit = ['choices', 'm/s'];
exports.Velocity = ['decimal', { $class: Measure_1.Measure.name, $suffix: exports.VelocityUnit }];
