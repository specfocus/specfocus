"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDeferred = function () {
    var d = {};
    d.promise = new Promise(function (resolve, reject) {
        d.resolve = resolve;
        d.reject = reject;
    });
    return d;
};
exports.default = createDeferred;
