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
exports.verifyLogical = exports.LOGICAL = void 0;
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var _and_1 = require("./$and");
var xand_1 = __importDefault(require("@specfocus/spec-comparables/lib/xand"));
var _nor_1 = require("./$nor");
var _not_1 = require("./$not");
var _or_1 = require("./$or");
exports.LOGICAL = [_and_1.$and, _not_1.$not, _nor_1.$nor, _or_1.$or];
var verifyLogical = function (val, expr, error, fallback) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, $tag, result, _b, _c, _d, $tag, subExpr, partialResult, _e, e_1_1;
    var e_1, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                if (!(0, has_object_type_1.default)(expr))
                    return [2 /*return*/];
                if (Array.isArray(expr)) {
                    _a = __read(expr, 1), $tag = _a[0];
                    switch ($tag) {
                        case _and_1.$and:
                            return [2 /*return*/, (0, _and_1.verifyAnd)(val, expr, error, fallback)];
                        case _or_1.$or:
                            return [2 /*return*/, (0, _or_1.verifyOr)(val, expr, error, fallback)];
                        case _not_1.$not:
                            return [2 /*return*/, (0, _not_1.verifyNot)(val, expr, error, fallback)];
                        case _nor_1.$nor:
                            return [2 /*return*/, (0, _nor_1.verifyNor)(val, expr, error, fallback)];
                    }
                }
                result = undefined;
                _g.label = 1;
            case 1:
                _g.trys.push([1, 14, 15, 16]);
                _b = __values(Object.entries(expr)), _c = _b.next();
                _g.label = 2;
            case 2:
                if (!!_c.done) return [3 /*break*/, 13];
                _d = __read(_c.value, 2), $tag = _d[0], subExpr = _d[1];
                partialResult = void 0;
                _e = $tag;
                switch (_e) {
                    case _and_1.$and: return [3 /*break*/, 3];
                    case _or_1.$or: return [3 /*break*/, 5];
                    case _not_1.$not: return [3 /*break*/, 7];
                    case _nor_1.$nor: return [3 /*break*/, 9];
                }
                return [3 /*break*/, 11];
            case 3: return [4 /*yield*/, (0, _and_1.verifyAnd)(val, [$tag, subExpr], error, fallback)];
            case 4:
                partialResult = _g.sent();
                return [3 /*break*/, 11];
            case 5: return [4 /*yield*/, (0, _or_1.verifyOr)(val, [$tag, subExpr], error, fallback)];
            case 6:
                partialResult = _g.sent();
                return [3 /*break*/, 11];
            case 7: return [4 /*yield*/, (0, _not_1.verifyNot)(val, [$tag, subExpr], error, fallback)];
            case 8:
                partialResult = _g.sent();
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, (0, _nor_1.verifyNor)(val, [$tag, subExpr], error, fallback)];
            case 10:
                partialResult = _g.sent();
                return [3 /*break*/, 11];
            case 11:
                result = (0, xand_1.default)(result, partialResult);
                _g.label = 12;
            case 12:
                _c = _b.next();
                return [3 /*break*/, 2];
            case 13: return [3 /*break*/, 16];
            case 14:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 16];
            case 15:
                try {
                    if (_c && !_c.done && (_f = _b.return)) _f.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 16: return [2 /*return*/, result];
        }
    });
}); };
exports.verifyLogical = verifyLogical;
