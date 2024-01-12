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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParallelEnumerator = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var ParallelEnumerator = /** @class */ (function () {
    function ParallelEnumerator(children) {
        var _this = this;
        this.children = children;
        this.clone = function () { return new ParallelEnumerator(_this.children.map(function (child) { return child.clone(); })); };
        this.end = function () {
            var e_1, _a;
            try {
                for (var _b = __values(_this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.end();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return _this.current;
        };
        this.next = function () {
            if ((0, has_undefined_type_1.default)(_this._current)) {
                var values_1 = _this.children.map(function (child) { return child.start(); }).filter(function (current) { return !(0, has_undefined_type_1.default)(current); });
                if (values_1.length === 0)
                    return;
                return _this._current = Math.min.apply(values_1);
            }
            var values = _this.children.map(function (child) {
                var current = child.current;
                while (!(0, has_undefined_type_1.default)(current)) {
                    if (current > _this.current)
                        return current;
                    current = child.next();
                }
            }).filter(function (current) { return !(0, has_undefined_type_1.default)(current); });
            if (values.length === 0)
                return;
            return _this._current = Math.min.apply(values);
        };
        this.prior = function () {
            if (_this._current === undefined)
                return undefined;
            var values = _this.children.map(function (child) {
                var current = child.current;
                while (!(0, has_undefined_type_1.default)(current)) {
                    if (current < _this.current)
                        return current;
                    current = child.prior();
                }
            }).filter(function (current) { return !(0, has_undefined_type_1.default)(current); });
            if (values.length === 0)
                return;
            return _this._current = Math.max.apply(values);
        };
        this.refresh = function () {
            var values = _this.children.map(function (child) { return child.current; }).filter(function (current) { return !(0, has_undefined_type_1.default)(current); });
            switch (values.length) {
                case 0:
                    break;
                case 1:
                    _this._current = values[0];
                default:
                    _this._current = Math.min.apply(values);
            }
        };
        this.reset = function () {
            var e_2, _a;
            try {
                for (var _b = __values(_this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.reset();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return _this.current;
        };
        this.start = function () {
            var e_3, _a;
            try {
                for (var _b = __values(_this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.start();
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return _this.current;
        };
        this.refresh();
    }
    ParallelEnumerator.prototype[Symbol.iterator] = function () {
        var enumerator, current;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    enumerator = this.clone();
                    current = enumerator.next();
                    _a.label = 1;
                case 1:
                    if (!!(0, has_undefined_type_1.default)(current)) return [3 /*break*/, 4];
                    return [4 /*yield*/, current];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    current = enumerator.next();
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(ParallelEnumerator.prototype, "current", {
        get: function () {
            var _this = this;
            if (!(0, has_undefined_type_1.default)(this._current) && this.children.some(function (child) { return child.current === _this._current; }))
                return this._current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParallelEnumerator.prototype, "first", {
        get: function () {
            var values = this.children.map(function (child) { return child.first; });
            return Math.min.apply(values);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParallelEnumerator.prototype, "hasNext", {
        get: function () {
            return this.children.some(function (child) { return child.hasNext; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParallelEnumerator.prototype, "hasPrior", {
        get: function () {
            return this.children.some(function (child) { return child.hasPrior; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParallelEnumerator.prototype, "last", {
        get: function () {
            var values = this.children.map(function (child) { return child.last; }).filter(function (last) { return typeof last !== 'undefined'; });
            if (values.length > 0)
                return Math.max.apply(values);
        },
        enumerable: false,
        configurable: true
    });
    ParallelEnumerator.prototype.toString = function () {
        return String(this.current);
    };
    return ParallelEnumerator;
}());
exports.ParallelEnumerator = ParallelEnumerator;
