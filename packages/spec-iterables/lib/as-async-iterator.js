"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asAsyncIterator = function (asyncIterable) {
    return asyncIterable[Symbol.asyncIterator].call(asyncIterable);
};
exports.default = asAsyncIterator;
