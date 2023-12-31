"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPushPull = exports.createDeferred = exports.applyAsyncIterableIteratorToSink = void 0;
var applyAsyncIterableIteratorToSink_1 = require("./applyAsyncIterableIteratorToSink");
Object.defineProperty(exports, "applyAsyncIterableIteratorToSink", { enumerable: true, get: function () { return __importDefault(applyAsyncIterableIteratorToSink_1).default; } });
var createDeferred_1 = require("./createDeferred");
Object.defineProperty(exports, "createDeferred", { enumerable: true, get: function () { return __importDefault(createDeferred_1).default; } });
// export { default as createSink } from "./createSink";
// export { default as createSinkFromDeferred } from "./createSinkFromDeferred";
var createPushPull_1 = require("./createPushPull");
Object.defineProperty(exports, "createPushPull", { enumerable: true, get: function () { return __importDefault(createPushPull_1).default; } });
// work-kit/lib/iterable.js
// dom-focus/src/fetch.ts
// dom-focus/src/download/subscription.ts
// dom-focus/src/graphql-multipart-fetcher.ts
/*
export const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // expected output:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})();
*/ 
