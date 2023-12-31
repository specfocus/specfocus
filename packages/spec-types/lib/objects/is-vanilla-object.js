"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isVanillaObject = function (value) {
    return value &&
        (value.constructor === Object ||
            value.constructor === Array ||
            value.constructor.toString() === "function Object() { [native code] }" ||
            value.constructor.toString() === "function Array() { [native code] }") &&
        !value.toJSON;
};
exports.default = isVanillaObject;
