"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createDeferred_1 = __importDefault(require("./createDeferred"));
var SYMBOL_FINISHED = Symbol();
var SYMBOL_NEW_VALUE = Symbol();
/**
 * createPushPull
 *
 * The iterable will publish values until return or throw is called.
 * Afterwards it is in the completed state and cannot be used for publishing any further values.
 * It will handle back-pressure and keep pushed values until they are consumed by a source.
 */
var createPushPull = function () {
    var isRunning = true;
    var values = [];
    var newValueD = (0, createDeferred_1.default)();
    var finishedD = (0, createDeferred_1.default)();
    var asyncIterableIterator = (function PushPullAsyncIterableIterator() {
        return __asyncGenerator(this, arguments, function PushPullAsyncIterableIterator_1() {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 6];
                        if (!(values.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, __await(values.shift())];
                    case 1: return [4 /*yield*/, _a.sent()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, __await(Promise.race([
                            newValueD.promise,
                            finishedD.promise,
                        ]))];
                    case 4:
                        result = _a.sent();
                        if (result === SYMBOL_FINISHED) {
                            return [3 /*break*/, 6];
                        }
                        if (result !== SYMBOL_NEW_VALUE) {
                            throw result;
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 0];
                    case 6: return [2 /*return*/];
                }
            });
        });
    })();
    function pushValue(value) {
        if (isRunning === false) {
            // TODO: Should this throw?
            return;
        }
        values.push(value);
        newValueD.resolve(SYMBOL_NEW_VALUE);
        newValueD = (0, createDeferred_1.default)();
    }
    // We monkey patch the original generator for clean-up
    var originalReturn = asyncIterableIterator.return.bind(asyncIterableIterator);
    asyncIterableIterator.return = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        isRunning = false;
        finishedD.resolve(SYMBOL_FINISHED);
        return originalReturn.apply(void 0, __spreadArray([], __read(args), false));
    };
    var originalThrow = asyncIterableIterator.throw.bind(asyncIterableIterator);
    asyncIterableIterator.throw = function (err) {
        isRunning = false;
        finishedD.resolve(err);
        return originalThrow(err);
    };
    return {
        pushValue: pushValue,
        asyncIterableIterator: asyncIterableIterator,
    };
};
exports.default = createPushPull;
