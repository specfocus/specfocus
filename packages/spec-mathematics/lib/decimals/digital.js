"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digital = exports.DigitalUnit = exports.bytes = exports.bits = void 0;
/** Digital information */
/** The smallest unit of digital information. A bit can represent either a 0 or a 1. */
exports.bits = ['b', 8];
/** Composed of 8 bits. It is the basic unit for representing characters and data in computer systems. */
exports.bytes = ['B', 1];
exports.DigitalUnit = ['choices', exports.bits, exports.bytes];
exports.Digital = ['decimal', { $suffix: exports.DigitalUnit, $gte: 0 }];
