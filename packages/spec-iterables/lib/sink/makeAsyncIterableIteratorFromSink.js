"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAsyncIterableIteratorFromSink = void 0;
var createPushPull_1 = __importDefault(require("./createPushPull"));
var makeAsyncIterableIteratorFromSink = function (make) {
    var _a = (0, createPushPull_1.default)(), pushValue = _a.pushValue, asyncIterableIterator = _a.asyncIterableIterator;
    var dispose = make({
        next: function (value) {
            console.log("5", value);
            pushValue(value);
        },
        complete: function () {
            asyncIterableIterator.return();
        },
        error: function (err) {
            asyncIterableIterator.throw(err);
        },
    });
    var originalReturn = asyncIterableIterator.return;
    var returnValue;
    asyncIterableIterator.return = function () {
        if (returnValue === undefined) {
            dispose();
            returnValue = originalReturn();
        }
        console.log("3");
        return returnValue;
    };
    console.log("4");
    return asyncIterableIterator;
};
exports.makeAsyncIterableIteratorFromSink = makeAsyncIterableIteratorFromSink;
