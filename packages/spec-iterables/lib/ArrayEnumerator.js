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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayEnumerator = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var ArrayEnumerator = /** @class */ (function () {
    function ArrayEnumerator(array, initial) {
        var _this = this;
        this.array = array;
        this.initial = initial;
        this.clone = function () { return new ArrayEnumerator(_this.array, _this.initial); };
        this.end = function () {
            _this._index = _this.array.length > 0 ? _this.array.length - 1 : -1;
            return _this.current;
        };
        this.next = function () {
            if (_this._index === -2 && !(0, has_undefined_type_1.default)(_this.initial)) {
                _this._index = _this.array.indexOf(_this.initial);
            }
            if (_this._index < 0) {
                _this._index = 0;
            }
            else if (_this._index < _this.array.length) {
                _this._index++;
            }
            return _this.current;
        };
        this.prior = function () {
            if (_this._index < 1) {
                _this._index = -1;
            }
            else {
                _this._index--;
            }
            return _this.current;
        };
        this.start = function () {
            _this._index = _this.array.length > 0 ? 0 : -1;
            return _this.current;
        };
        this.reset = function () {
            _this._index = (0, has_undefined_type_1.default)(_this.initial) ? -1 : -2;
            return _this.current;
        };
        this._index = (0, has_undefined_type_1.default)(initial) ? -1 : -2;
    }
    ArrayEnumerator.prototype[Symbol.iterator] = function () {
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
    Object.defineProperty(ArrayEnumerator.prototype, "current", {
        get: function () {
            return this._index >= 0 && this._index < this.array.length ? this.array[this._index] : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayEnumerator.prototype, "first", {
        get: function () {
            return this.array.length > 0 ? this.array[0] : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayEnumerator.prototype, "hasNext", {
        get: function () {
            return this._index < this.array.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayEnumerator.prototype, "hasPrior", {
        get: function () {
            return this._index > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArrayEnumerator.prototype, "last", {
        get: function () {
            return this.array.length > 0 ? this.array[this.array.length - 1] : undefined;
        },
        enumerable: false,
        configurable: true
    });
    ArrayEnumerator.prototype.toString = function () {
        return String(this.current);
    };
    return ArrayEnumerator;
}());
exports.ArrayEnumerator = ArrayEnumerator;
