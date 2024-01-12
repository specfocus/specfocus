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
exports.verifyNor = exports.xnor = exports.$nor = void 0;
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
/** Logical NOR */
exports.$nor = '$nor';
;
var xnor = function (acc, value) {
    if (acc === undefined)
        return !value;
    if (value === undefined)
        return acc;
    return acc && !value;
};
exports.xnor = xnor;
var verifyNor = function (val, expr, error, fallback) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, $tag, verification, result_1, verification_1, verification_1_1, test_1, partialResult, e_1_1, _b, _c, tests, result, tests_1, tests_1_1, test_2, partialResult, e_2_1;
    var _d, _e, e_1, _f, e_2, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (!(0, has_object_type_1.default)(expr))
                    return [2 /*return*/];
                if (!Array.isArray(expr)) return [3 /*break*/, 8];
                _a = __read(expr, 1), $tag = _a[0];
                if (expr.length < 2 || $tag !== exports.$nor)
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
                result_1 = undefined;
                _h.label = 1;
            case 1:
                _h.trys.push([1, 6, 7, 8]);
                verification_1 = __values(verification), verification_1_1 = verification_1.next();
                _h.label = 2;
            case 2:
                if (!!verification_1_1.done) return [3 /*break*/, 5];
                test_1 = verification_1_1.value;
                return [4 /*yield*/, fallback(val, test_1, error)];
            case 3:
                partialResult = _h.sent();
                result_1 = (0, exports.xnor)(result_1, partialResult);
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
            case 8:
                _b = expr, _c = exports.$nor, tests = _b[_c];
                result = undefined;
                _h.label = 9;
            case 9:
                _h.trys.push([9, 14, 15, 16]);
                tests_1 = __values(tests), tests_1_1 = tests_1.next();
                _h.label = 10;
            case 10:
                if (!!tests_1_1.done) return [3 /*break*/, 13];
                test_2 = tests_1_1.value;
                return [4 /*yield*/, fallback(val, test_2, error)];
            case 11:
                partialResult = _h.sent();
                result = (0, exports.xnor)(result, partialResult);
                _h.label = 12;
            case 12:
                tests_1_1 = tests_1.next();
                return [3 /*break*/, 10];
            case 13: return [3 /*break*/, 16];
            case 14:
                e_2_1 = _h.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 16];
            case 15:
                try {
                    if (tests_1_1 && !tests_1_1.done && (_g = tests_1.return)) _g.call(tests_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 16: return [2 /*return*/, result];
        }
    });
}); };
exports.verifyNor = verifyNor;
