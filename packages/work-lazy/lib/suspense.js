"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lazy_1 = require("./lazy");
function suspense(payload) {
    if (payload._status === lazy_1.LazyStatus.Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor();
        // Transition to the next state.
        // This might throw either because it's missing or throws. If so, we treat it
        // as still uninitialized and try again next time. Which is the same as what
        // happens if the ctor or any wrappers processing the ctor throws. This might
        // end up fixing it if the resolution was a concurrency bug.
        thenable.then(function (moduleObject) {
            if (payload._status === lazy_1.LazyStatus.Pending || payload._status === lazy_1.LazyStatus.Uninitialized) {
                // Transition to the next state.
                var resolved = payload;
                resolved._status = lazy_1.LazyStatus.Resolved;
                resolved._result = moduleObject;
            }
        }, function (error) {
            if (payload._status === lazy_1.LazyStatus.Pending || payload._status === lazy_1.LazyStatus.Uninitialized) {
                // Transition to the next state.
                var rejected = payload;
                rejected._status = lazy_1.LazyStatus.Rejected;
                rejected._result = error;
            }
        });
        if (payload._status === lazy_1.LazyStatus.Uninitialized) {
            // In case, we're still uninitialized, then we're waiting for the thenable
            // to resolve. Set it as pending in the meantime.
            var pending_1 = payload;
            pending_1._status = lazy_1.LazyStatus.Pending;
            pending_1._result = thenable;
        }
    }
    if (payload._status === lazy_1.LazyStatus.Resolved) {
        var moduleObject = payload._result;
        if (moduleObject && 'default' in moduleObject) {
            return moduleObject.default;
        }
        else {
            throw new Error("moduleObject or moduleObject.default is undefined");
        }
    }
    else {
        throw payload._result;
    }
}
exports.default = suspense;
