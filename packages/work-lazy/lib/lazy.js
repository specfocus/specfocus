"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyStatus = void 0;
var LazyStatus;
(function (LazyStatus) {
    LazyStatus[LazyStatus["Uninitialized"] = -1] = "Uninitialized";
    LazyStatus[LazyStatus["Pending"] = 0] = "Pending";
    LazyStatus[LazyStatus["Resolved"] = 1] = "Resolved";
    LazyStatus[LazyStatus["Rejected"] = 2] = "Rejected";
})(LazyStatus || (exports.LazyStatus = LazyStatus = {}));
var lazy = function (ctor) { return ({
    // We use these fields to store the result.
    _status: LazyStatus.Uninitialized,
    _result: ctor,
}); };
exports.default = lazy;
