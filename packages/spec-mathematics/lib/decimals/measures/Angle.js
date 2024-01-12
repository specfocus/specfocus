"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Angle = exports.gradian = exports.degree = exports.radian = void 0;
/*
  A gradian, also known as a gon or grade, is a unit of measurement for angles. It's less commonly used than other angle units like degrees and radians, but it's still important to understand.
  
  1 gradian is equal to 1/400th of a circle. This means that a full circle, which is 360 degrees, is equivalent to 400 gradians. The relationship between degrees and gradians is:
  
  1 degree = 9/10 gradian
  1 gradian = 10/9 degrees
  Gradians were historically used in surveying and some engineering applications, especially in parts of Europe. However, degrees and radians are more widely recognized and used in most fields.
  
  For comparison:
  
  360 degrees = 400 gradians = 2π radians (approximately)
  Given that degrees and radians are the more prevalent units for measuring angles, gradians are not as commonly encountered in everyday mathematics and science.
*/
exports.radian = ['radian', 1 / (2 * Math.PI)];
exports.degree = ['degree', 1 / 360];
exports.gradian = ['gradian', 1 / 400];
/** Unit of plane angle radian (a) rad */
exports.Angle = ['choices', exports.radian, exports.degree, exports.gradian];
