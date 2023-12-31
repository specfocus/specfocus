"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joinMagnitudes = function (source, magnitudes) {
    if (source.length > magnitudes.length)
        return 0;
    var result = 0;
    var multiplier = 1;
    for (var i = 0; i < source.length; i++) {
        multiplier *= magnitudes[i];
        result += source[i] * multiplier;
    }
    return result;
};
exports.default = joinMagnitudes;
