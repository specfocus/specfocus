"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazy = void 0;
var LAZY_TYPE = Symbol.for('component.lazy');
var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;
function lazyInitializer(payload) {
    if (payload._status === Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor();
        // Transition to the next state.
        // This might throw either because it's missing or throws. If so, we treat it
        // as still uninitialized and try again next time. Which is the same as what
        // happens if the ctor or any wrappers processing the ctor throws. This might
        // end up fixing it if the resolution was a concurrency bug.
        thenable.then(function (moduleObject) {
            if (payload._status === Pending || payload._status === Uninitialized) {
                // Transition to the next state.
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject;
            }
        }, function (error) {
            if (payload._status === Pending || payload._status === Uninitialized) {
                // Transition to the next state.
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error;
            }
        });
        if (payload._status === Uninitialized) {
            // In case, we're still uninitialized, then we're waiting for the thenable
            // to resolve. Set it as pending in the meantime.
            var pending_1 = payload;
            pending_1._status = Pending;
            pending_1._result = thenable;
        }
    }
    if (payload._status === Resolved) {
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
function lazy(ctor) {
    var payload = {
        // We use these fields to store the result.
        _status: Uninitialized,
        _result: ctor,
    };
    var lazyType = {
        $$typeof: LAZY_TYPE,
        _payload: payload,
        _init: lazyInitializer,
    };
    return lazyType;
}
exports.lazy = lazy;
