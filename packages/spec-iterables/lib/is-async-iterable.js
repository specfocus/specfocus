"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAsyncIterable = function (input) { return (typeof input === "object" &&
    input !== null &&
    // The AsyncGenerator check is for Safari on iOS which currently does not have
    // Symbol.asyncIterator implemented
    // That means every custom AsyncIterable must be built using a AsyncGeneratorFunction (async function * () {})
    (input[Symbol.toStringTag] === "AsyncGenerator" ||
        (Symbol.asyncIterator && Symbol.asyncIterator in input))); };
exports.default = isAsyncIterable;
