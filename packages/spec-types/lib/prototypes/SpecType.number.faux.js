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
exports.NumberFactory = void 0;
var comparisons_1 = require("../comparisons");
var _in_1 = require("../comparisons/$in");
var _nin_1 = require("../comparisons/$nin");
var intersect_1 = __importDefault(require("@specfocus/spec-numbers/lib/ranges/intersect"));
var merge_1 = __importDefault(require("@specfocus/spec-numbers/lib/ranges/merge"));
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
var is_tuple_1 = __importDefault(require("../types/is-tuple"));
var verifications_1 = require("../verifications");
var NumberFactory = /** @class */ (function () {
    function NumberFactory(condition, scale, bound) {
        if (scale === void 0) { scale = 0; }
        if (bound === void 0) { bound = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]; }
        var _this = this;
        this.condition = condition;
        this.scale = scale;
        this.bound = bound;
        this.constrain = function (ranges, operator, value) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f;
            if (ranges.length === 0)
                return ranges;
            var result = [];
            switch (operator) {
                case comparisons_1.$eq:
                    try {
                        for (var ranges_1 = __values(ranges), ranges_1_1 = ranges_1.next(); !ranges_1_1.done; ranges_1_1 = ranges_1.next()) {
                            var range = ranges_1_1.value;
                            var _g = __read(range, 2), min = _g[0], max = _g[1];
                            if (min <= value && value <= max)
                                result.push([value, value]);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (ranges_1_1 && !ranges_1_1.done && (_a = ranges_1.return)) _a.call(ranges_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    break;
                case comparisons_1.$gt:
                    try {
                        for (var ranges_2 = __values(ranges), ranges_2_1 = ranges_2.next(); !ranges_2_1.done; ranges_2_1 = ranges_2.next()) {
                            var range = ranges_2_1.value;
                            var _h = __read(range, 2), min = _h[0], max = _h[1];
                            if (min <= value && value <= max)
                                result.push([_this.gt(value), max]);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (ranges_2_1 && !ranges_2_1.done && (_b = ranges_2.return)) _b.call(ranges_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    break;
                case comparisons_1.$gte:
                    try {
                        for (var ranges_3 = __values(ranges), ranges_3_1 = ranges_3.next(); !ranges_3_1.done; ranges_3_1 = ranges_3.next()) {
                            var range = ranges_3_1.value;
                            var _j = __read(range, 2), min = _j[0], max = _j[1];
                            if (min <= value && value <= max)
                                result.push([value, max]);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (ranges_3_1 && !ranges_3_1.done && (_c = ranges_3.return)) _c.call(ranges_3);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    break;
                case comparisons_1.$lt:
                    try {
                        for (var ranges_4 = __values(ranges), ranges_4_1 = ranges_4.next(); !ranges_4_1.done; ranges_4_1 = ranges_4.next()) {
                            var range = ranges_4_1.value;
                            var _k = __read(range, 2), min = _k[0], max = _k[1];
                            if (min <= value && value <= max)
                                result.push([min, _this.lt(value)]);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (ranges_4_1 && !ranges_4_1.done && (_d = ranges_4.return)) _d.call(ranges_4);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    break;
                case comparisons_1.$lte:
                    try {
                        for (var ranges_5 = __values(ranges), ranges_5_1 = ranges_5.next(); !ranges_5_1.done; ranges_5_1 = ranges_5.next()) {
                            var range = ranges_5_1.value;
                            var _l = __read(range, 2), min = _l[0], max = _l[1];
                            if (min <= value && value <= max)
                                result.push([min, value]);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (ranges_5_1 && !ranges_5_1.done && (_e = ranges_5.return)) _e.call(ranges_5);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    break;
                case comparisons_1.$ne:
                    try {
                        for (var ranges_6 = __values(ranges), ranges_6_1 = ranges_6.next(); !ranges_6_1.done; ranges_6_1 = ranges_6.next()) {
                            var range = ranges_6_1.value;
                            var _m = __read(range, 2), min = _m[0], max = _m[1];
                            if (min <= value && value <= max) {
                                if (min < value)
                                    result.push([min, _this.lt(value)]);
                                if (value < max)
                                    result.push([_this.gt(value), max]);
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (ranges_6_1 && !ranges_6_1.done && (_f = ranges_6.return)) _f.call(ranges_6);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    break;
            }
            return result;
        };
        this.checkIn = function (ranges) {
            var e_7, _a, e_8, _b;
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            if (ranges.length === 0)
                return ranges;
            var result = [];
            try {
                for (var ranges_7 = __values(ranges), ranges_7_1 = ranges_7.next(); !ranges_7_1.done; ranges_7_1 = ranges_7.next()) {
                    var range = ranges_7_1.value;
                    var _c = __read(range, 2), min = _c[0], max = _c[1];
                    try {
                        for (var values_1 = (e_8 = void 0, __values(values)), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                            var value = values_1_1.value;
                            if (min <= value && value <= max)
                                result.push([value, value]);
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (values_1_1 && !values_1_1.done && (_b = values_1.return)) _b.call(values_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (ranges_7_1 && !ranges_7_1.done && (_a = ranges_7.return)) _a.call(ranges_7);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return result;
        };
        this.notIn = function (ranges) {
            var e_9, _a, e_10, _b;
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            if (ranges.length === 0)
                return ranges;
            var result = [];
            try {
                for (var ranges_8 = __values(ranges), ranges_8_1 = ranges_8.next(); !ranges_8_1.done; ranges_8_1 = ranges_8.next()) {
                    var range = ranges_8_1.value;
                    var _c = __read(range, 2), min = _c[0], max = _c[1];
                    try {
                        for (var values_2 = (e_10 = void 0, __values(values)), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                            var value = values_2_1.value;
                            if (min <= value && value <= max) {
                                if (min < value)
                                    result.push([min, _this.lt(value)]);
                                if (value < max)
                                    result.push([_this.gt(value), max]);
                            }
                        }
                    }
                    catch (e_10_1) { e_10 = { error: e_10_1 }; }
                    finally {
                        try {
                            if (values_2_1 && !values_2_1.done && (_b = values_2.return)) _b.call(values_2);
                        }
                        finally { if (e_10) throw e_10.error; }
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (ranges_8_1 && !ranges_8_1.done && (_a = ranges_8.return)) _a.call(ranges_8);
                }
                finally { if (e_9) throw e_9.error; }
            }
            return result;
        };
        this.gt = function (value) { return _this.scale === 0 ? value + 1 : (value * _this.factor + 1) / _this.factor; };
        this._limit = function (ranges, condition) {
            if (!(0, has_object_type_1.default)(condition) || condition === null)
                return ranges;
            if (Array.isArray(condition))
                return _this._limit(ranges, condition);
            return []; // todo reduce
        };
        this.limit = function (ranges, condition) {
            if (!(0, has_object_type_1.default)(condition) || condition === null)
                return ranges;
            if ((0, is_tuple_1.default)(condition))
                return _this._limit(ranges, condition);
            Object.entries(condition).forEach(function (_a) {
                var _b = __read(_a, 2), $tag = _b[0], test = _b[1];
                switch ($tag) {
                    case verifications_1.$and:
                        var x = test.map(function (vero) { return _this.limit(ranges, vero); });
                        ranges = (0, intersect_1.default)(x);
                        break;
                    case verifications_1.$or:
                        ranges = test.reduce(function (acc, vero) { return _this.limit(ranges, vero).reduce(function (acc, res) { (0, merge_1.default)(acc, res); return acc; }, acc); }, []);
                        break;
                    case comparisons_1.$eq:
                    case comparisons_1.$gt:
                    case comparisons_1.$gte:
                    case comparisons_1.$lt:
                    case comparisons_1.$lte:
                    case comparisons_1.$ne:
                        ranges = _this.constrain(ranges, $tag, test);
                        break;
                    case _in_1.$in:
                        ranges = _this.checkIn.apply(_this, __spreadArray([ranges], __read(test), false));
                        break;
                    case _nin_1.$nin:
                        ranges = _this.notIn.apply(_this, __spreadArray([ranges], __read(test), false));
                        break;
                }
            });
            return ranges;
        };
        this.lt = function (value) { return _this.scale === 0 ? value - 1 : (value * _this.factor - 1) / _this.factor; };
        this.factor = Math.pow(10, scale);
        this.ranges = Object.freeze(this.limit([__spreadArray([], __read(bound), false)], condition));
    }
    NumberFactory.prototype[Symbol.iterator] = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.faux()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    };
    NumberFactory.prototype.faux = function () {
        if (this.ranges.length === 0)
            return Number.NaN;
        var index = this.ranges.length > 1 ? Math.floor(Math.random() * this.ranges.length) : 0;
        var range = this.ranges[index];
        var _a = __read(range, 2), min = _a[0], max = _a[1];
        return min + (max - min) * Math.random();
    };
    return NumberFactory;
}());
exports.NumberFactory = NumberFactory;
var generator = function (condition, scale) { return new NumberFactory(condition, scale); };
exports.default = generator;
