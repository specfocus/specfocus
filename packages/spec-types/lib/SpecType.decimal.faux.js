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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalFactory = void 0;
var SpecType_number_faux_1 = require("./SpecType.number.faux");
var maximum = function (precision, scale) {
    if (precision === void 0) { precision = 15; }
    if (scale === void 0) { scale = 0; }
    return (Math.pow(10, ((precision !== null && precision !== void 0 ? precision : 15) + 1)) - 1) / (Math.pow(10, scale));
};
var DecimalFactory = /** @class */ (function () {
    function DecimalFactory(condition, options) {
        var _a, _b, _c;
        this.condition = condition;
        this.options = options;
        var bound = maximum((_a = options.precision) !== null && _a !== void 0 ? _a : 15, (_b = options.scale) !== null && _b !== void 0 ? _b : 2);
        this._factory = new SpecType_number_faux_1.NumberFactory(condition, (_c = options.scale) !== null && _c !== void 0 ? _c : 2, [-bound, bound]);
    }
    DecimalFactory.prototype[Symbol.iterator] = function () {
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
    DecimalFactory.prototype.faux = function () {
        var _a;
        var value = this._factory.faux();
        if (isNaN(value)) {
            console.log('NaN', value);
            return '';
        }
        var result = [value.toFixed((_a = this.options.scale) !== null && _a !== void 0 ? _a : 2)];
        if (this.options.prefix) {
            result.unshift(this.options.prefix);
        }
        if (this.options.suffix) {
            result.push(this.options.suffix);
        }
        return result.join('');
    };
    return DecimalFactory;
}());
exports.DecimalFactory = DecimalFactory;
var generator = function (condition, options) { return new DecimalFactory(condition, options); };
exports.default = generator;
