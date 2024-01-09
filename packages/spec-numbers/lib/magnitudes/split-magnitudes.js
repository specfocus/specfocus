"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var splitMagnitudes = function (value, magnitudes) {
    var result = [];
    var remainder = value;
    for (var i = 0; i < magnitudes.length; i++) {
        var magnitude = magnitudes[i];
        var quotient = Math.floor(remainder / magnitude);
        remainder -= quotient * magnitude;
        result.push(quotient);
    }
    return result;
};
exports.default = splitMagnitudes;
