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
exports.CronEnumerator = void 0;
var ExtendedEnumerator_1 = require("@specfocus/spec-types/lib/iterations/ExtendedEnumerator");
var ParallelEnumerator_1 = require("@specfocus/spec-types/lib/iterations/ParallelEnumerator");
var RecordEnumerator_1 = require("@specfocus/spec-types/lib/iterations/RecordEnumerator");
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-types/lib/types/has-undefined-type"));
var CronEnumerator = /** @class */ (function () {
    function CronEnumerator(cron) {
        var _this = this;
        this.cron = cron;
        this.clone = function () { return new CronEnumerator(_this.cron.clone()); };
        this.end = function () {
            var current = _this.root.end();
            if ((0, has_undefined_type_1.default)(current))
                return;
            var year = current.year, month = current.month, day = current.day, hour = current.hour, minute = current.minute;
            return [year, month, day, hour, minute];
        };
        this.next = function () {
            var current = _this.root.next();
            if ((0, has_undefined_type_1.default)(current))
                return;
            var year = current.year, month = current.month, day = current.day, hour = current.hour, minute = current.minute;
            return _this.cron.current = [year, month, day, hour, minute];
        };
        this.prior = function () {
            var current = _this.root.prior();
            if ((0, has_undefined_type_1.default)(current))
                return;
            var year = current.year, month = current.month, day = current.day, hour = current.hour, minute = current.minute;
            return _this.cron.current = [year, month, day, hour, minute];
        };
        this.reset = function () {
            var current = _this.root.reset();
            if ((0, has_undefined_type_1.default)(current))
                return;
            var year = current.year, month = current.month, day = current.day, hour = current.hour, minute = current.minute;
            return _this.cron.current = [year, month, day, hour, minute];
        };
        this.start = function () {
            var current = _this.root.start();
            if ((0, has_undefined_type_1.default)(current))
                return;
            var year = current.year, month = current.month, day = current.day, hour = current.hour, minute = current.minute;
            return _this.cron.current = [year, month, day, hour, minute];
        };
        var _a = __read(cron.initial, 5), year = _a[0], month = _a[1], date = _a[2], hour = _a[3], minute = _a[4];
        this.root = new ExtendedEnumerator_1.ExtendedEnumerator('minute', cron.minutes.enumerate(minute), new ExtendedEnumerator_1.ExtendedEnumerator('hour', cron.hours.enumerate(hour), new ExtendedEnumerator_1.ExtendedEnumerator('day', cron.days.nodes.length > 0
            ? new ParallelEnumerator_1.ParallelEnumerator([
                cron.dates.enumerate(date),
                cron.days.enumerate(date),
            ])
            : cron.dates.enumerate(date), new ExtendedEnumerator_1.ExtendedEnumerator('month', cron.months.enumerate(month), new RecordEnumerator_1.RecordEnumerator('year', cron.years.enumerate(year))))));
    }
    CronEnumerator.prototype[Symbol.iterator] = function () {
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
    Object.defineProperty(CronEnumerator.prototype, "current", {
        get: function () {
            var shape = this.root.current;
            if ((0, has_undefined_type_1.default)(shape))
                return;
            var year = shape.year, month = shape.month, day = shape.day, hour = shape.hour, minute = shape.minute;
            return [year, month, day, hour, minute];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronEnumerator.prototype, "first", {
        get: function () {
            var shape = this.root.first;
            if ((0, has_undefined_type_1.default)(shape))
                return;
            var year = shape.year, month = shape.month, day = shape.day, hour = shape.hour, minute = shape.minute;
            return [year, month, day, hour, minute];
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CronEnumerator.prototype, "hasNext", {
        get: function () {
            return this.root.hasNext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronEnumerator.prototype, "hasPrior", {
        get: function () {
            return this.root.hasPrior;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CronEnumerator.prototype, "last", {
        get: function () {
            var current = this.root.last;
            if ((0, has_undefined_type_1.default)(current))
                return;
            var year = current.year, month = current.month, day = current.day, hour = current.hour, minute = current.minute;
            return [year, month, day, hour, minute];
        },
        enumerable: false,
        configurable: true
    });
    ;
    CronEnumerator.prototype.toString = function () {
        return String(this.cron.current);
    };
    return CronEnumerator;
}());
exports.CronEnumerator = CronEnumerator;
