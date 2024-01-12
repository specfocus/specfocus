"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ExtendedEnumerator = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var ExtendedEnumerator = /** @class */ (function () {
    function ExtendedEnumerator(key, root, base) {
        var _this = this;
        this.key = key;
        this.root = root;
        this.base = base;
        this.clone = function () { return new ExtendedEnumerator(_this.key, _this.root.clone(), _this.base.clone()); };
        this.end = function () {
            var base = _this.base.end();
            var root = _this.root.end();
            if ((0, has_undefined_type_1.default)(base) || (0, has_undefined_type_1.default)(root)) {
                throw new Error('cant end');
            }
            return _this.extend(base, root);
        };
        this.extend = function (base, value) {
            var _a;
            return (__assign(__assign({}, base), (_a = {}, _a[_this.key] = value, _a)));
        };
        this.next = function () {
            if (_this.root.hasNext) {
                return _this.extend(_this.base.current, _this.root.next());
            }
            if (_this.base.hasNext) {
                return _this.extend(_this.base.next(), _this.root.start());
            }
        };
        this.prior = function () {
            if (_this.root.hasPrior) {
                return _this.extend(_this.base.current, _this.root.prior());
            }
            var end = _this.root.end();
            if (_this.base.hasPrior && !(0, has_undefined_type_1.default)(end)) {
                return _this.extend(_this.base.prior(), end);
            }
        };
        this.reset = function () {
            return _this.extend(_this.base.reset(), _this.root.reset());
        };
        this.start = function () {
            return _this.extend(_this.base.start(), _this.root.start());
        };
    }
    ExtendedEnumerator.prototype[Symbol.iterator] = function () {
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
    Object.defineProperty(ExtendedEnumerator.prototype, "current", {
        get: function () {
            return this.extend(this.base.current, this.root.current);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedEnumerator.prototype, "first", {
        get: function () {
            return this.extend(this.base.first, this.root.first);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedEnumerator.prototype, "hasNext", {
        get: function () {
            return this.root.hasNext || this.base.hasNext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedEnumerator.prototype, "hasPrior", {
        get: function () {
            return this.root.hasPrior || this.base.hasPrior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendedEnumerator.prototype, "last", {
        get: function () {
            var base = this.base.last;
            var last = this.root.last;
            return ((0, has_undefined_type_1.default)(base) || (0, has_undefined_type_1.default)(last)) ? undefined : this.extend(base, last);
        },
        enumerable: false,
        configurable: true
    });
    ExtendedEnumerator.prototype.toString = function () {
        return "".concat(this.base.toString(), "-").concat(this.root.toString());
    };
    return ExtendedEnumerator;
}());
exports.ExtendedEnumerator = ExtendedEnumerator;
