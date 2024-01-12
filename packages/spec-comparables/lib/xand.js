"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xand = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, cur) { return false === cur ? false : acc; }, true);
};
exports.default = xand;
