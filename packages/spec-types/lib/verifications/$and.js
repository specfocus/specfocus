"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
exports.verifyAnd = exports.xand = exports.$and = void 0;
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
/** Logical AND */
exports.$and = '$and';
;
var xand = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, cur) { return false === cur ? false : acc; }, true);
};
exports.xand = xand;
var verifyAnd = function (val, expr, error, fallback) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, $tag, verification, result, verification_1, verification_1_1, verif, partialResult, e_1_1, _b, _c, verification, result, verification_2, verification_2_1, verif, partialResult, e_2_1;
    var _d, _e, e_1, _f, e_2, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (!(0, has_object_type_1.default)(expr))
                    return [2 /*return*/];
                if (!Array.isArray(expr)) return [3 /*break*/, 9];
                _a = __read(expr, 1), $tag = _a[0];
                if (expr.length < 2 || $tag !== exports.$and)
                    return [2 /*return*/];
                verification = void 0;
                if (expr.length === 2) {
                    _d = __read(expr, 2), verification = _d[1];
                }
                else {
                    _e = __read(expr), verification = _e.slice(1);
                }
                if (!Array.isArray(verification))
                    return [2 /*return*/];
                result = undefined;
                _h.label = 1;
            case 1:
                _h.trys.push([1, 6, 7, 8]);
                verification_1 = __values(verification), verification_1_1 = verification_1.next();
                _h.label = 2;
            case 2:
                if (!!verification_1_1.done) return [3 /*break*/, 5];
                verif = verification_1_1.value;
                return [4 /*yield*/, fallback(val, verif, error)];
            case 3:
                partialResult = _h.sent();
                result = (0, exports.xand)(result, partialResult);
                _h.label = 4;
            case 4:
                verification_1_1 = verification_1.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _h.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (verification_1_1 && !verification_1_1.done && (_f = verification_1.return)) _f.call(verification_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/, result];
            case 9:
                _b = expr, _c = exports.$and, verification = _b[_c];
                if (!Array.isArray(verification))
                    return [2 /*return*/];
                result = undefined;
                _h.label = 10;
            case 10:
                _h.trys.push([10, 15, 16, 17]);
                verification_2 = __values(verification), verification_2_1 = verification_2.next();
                _h.label = 11;
            case 11:
                if (!!verification_2_1.done) return [3 /*break*/, 14];
                verif = verification_2_1.value;
                return [4 /*yield*/, fallback(val, verif, error)];
            case 12:
                partialResult = _h.sent();
                result = (0, exports.xand)(result, partialResult);
                _h.label = 13;
            case 13:
                verification_2_1 = verification_2.next();
                return [3 /*break*/, 11];
            case 14: return [3 /*break*/, 17];
            case 15:
                e_2_1 = _h.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 17];
            case 16:
                try {
                    if (verification_2_1 && !verification_2_1.done && (_g = verification_2.return)) _g.call(verification_2);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 17: return [2 /*return*/, result];
        }
    });
}); };
exports.verifyAnd = verifyAnd;
