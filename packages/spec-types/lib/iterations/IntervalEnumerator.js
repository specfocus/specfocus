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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervalEnumerator = void 0;
var is_valid_number_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-valid-number"));
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var IntervalEnumerator = /** @class */ (function () {
    function IntervalEnumerator(range, step, initial) {
        if (step === void 0) { step = 1; }
        var _this = this;
        this.range = range;
        this.step = step;
        this.initial = initial;
        this.clone = function () { return new IntervalEnumerator(_this.range, _this.step, _this.initial); };
        this.end = function () {
            var _a = __read(_this.range, 2), start = _a[0], end = _a[1];
            if ((0, has_undefined_type_1.default)(end))
                return;
            // should be an integer divisible by step, but just in case
            _this._index = Math.floor((end - start) / _this.step);
            return _this.current;
        };
        this.next = function () {
            var _a = __read(_this.range, 2), start = _a[0], end = _a[1];
            if (!(0, is_valid_number_1.default)(end) || start + _this._index <= end - start) {
                _this._index++;
            }
            return _this.current;
        };
        this.prior = function () {
            if (_this._index < 0)
                return;
            _this._index--;
            return _this.current;
        };
        this.start = function () {
            _this._index = 0;
            return _this.current;
        };
        this.reset = function () {
            if ((0, has_undefined_type_1.default)(_this.initial)) {
                _this._index = -1;
                return _this.current;
            }
            var _a = __read(_this.range, 1), start = _a[0];
            _this._index = Math.floor((_this.initial - start) / _this.step);
            return _this.current;
        };
        var _a = __read(range, 1), start = _a[0];
        if ((0, has_undefined_type_1.default)(initial)) {
            this._index = -1;
        }
        else {
            this._index = Math.floor((initial - start) / step);
        }
    }
    IntervalEnumerator.prototype[Symbol.iterator] = function () {
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
    Object.defineProperty(IntervalEnumerator.prototype, "current", {
        get: function () {
            var _a = __read(this.range, 2), start = _a[0], end = _a[1];
            if (this._index < 0)
                return;
            if (!(0, is_valid_number_1.default)(end) || this._index <= end - start) {
                return start + this._index * this.step;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalEnumerator.prototype, "first", {
        get: function () {
            var _a = __read(this.range, 1), start = _a[0];
            return start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalEnumerator.prototype, "hasNext", {
        get: function () {
            var _a = __read(this.range, 2), start = _a[0], end = _a[1];
            return !(0, is_valid_number_1.default)(end) || start + this.step * (this._index + 1) <= end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalEnumerator.prototype, "hasPrior", {
        get: function () {
            return this._index > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntervalEnumerator.prototype, "last", {
        get: function () {
            var _a = __read(this.range, 2), start = _a[0], end = _a[1];
            if ((0, has_undefined_type_1.default)(end))
                return;
            var index = Math.floor((end - start) / this.step);
            return start + index * this.step;
        },
        enumerable: false,
        configurable: true
    });
    IntervalEnumerator.prototype.toString = function () {
        return "".concat(this.start, "-").concat(this.end, "/").concat(this.step, " (").concat(this.current, ")");
    };
    return IntervalEnumerator;
}());
exports.IntervalEnumerator = IntervalEnumerator;
