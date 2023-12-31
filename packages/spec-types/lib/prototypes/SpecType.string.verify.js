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
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
var _and_1 = require("../verifications/$and");
var Verification_1 = require("../verifications/Verification");
var SpecType_string__class_1 = require("./SpecType.string.$class");
var SpecType_string__length_1 = require("./SpecType.string.$length");
var verifyString = function (val, spec, error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, $tag, result, _b, _c, _d, $tag, test_1, partialResult, _e, e_1_1;
    var e_1, _f, _g, _h, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                if (!(0, has_object_type_1.default)(spec))
                    return [2 /*return*/];
                if (Array.isArray(spec)) {
                    _a = __read(spec, 1), $tag = _a[0];
                    switch ($tag) {
                        case SpecType_string__class_1.$class:
                            return [2 /*return*/, (0, SpecType_string__class_1.verifyStringClass)(val, spec, error)];
                        case SpecType_string__length_1.$length:
                            return [2 /*return*/, (0, SpecType_string__length_1.verifyStringLength)(val, spec, error)];
                        default:
                            return [2 /*return*/, (0, Verification_1.verify)(val, spec, error, verifyString)];
                    }
                }
                result = undefined;
                _k.label = 1;
            case 1:
                _k.trys.push([1, 12, 13, 14]);
                _b = __values(Object.entries(spec)), _c = _b.next();
                _k.label = 2;
            case 2:
                if (!!_c.done) return [3 /*break*/, 11];
                _d = __read(_c.value, 2), $tag = _d[0], test_1 = _d[1];
                partialResult = void 0;
                _e = $tag;
                switch (_e) {
                    case SpecType_string__class_1.$class: return [3 /*break*/, 3];
                    case SpecType_string__length_1.$length: return [3 /*break*/, 5];
                }
                return [3 /*break*/, 7];
            case 3: return [4 /*yield*/, (0, SpecType_string__class_1.verifyStringClass)(val, (_g = {}, _g[$tag] = test_1, _g), error)];
            case 4:
                partialResult = _k.sent();
                return [3 /*break*/, 9];
            case 5: return [4 /*yield*/, (0, SpecType_string__length_1.verifyStringLength)(val, (_h = {}, _h[$tag] = test_1, _h), error)];
            case 6:
                partialResult = _k.sent();
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, (0, Verification_1.verify)(val, (_j = {}, _j[$tag] = test_1, _j), error, verifyString)];
            case 8:
                partialResult = _k.sent();
                _k.label = 9;
            case 9:
                result = (0, _and_1.xand)(result, partialResult);
                _k.label = 10;
            case 10:
                _c = _b.next();
                return [3 /*break*/, 2];
            case 11: return [3 /*break*/, 14];
            case 12:
                e_1_1 = _k.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (_c && !_c.done && (_f = _b.return)) _f.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 14: return [2 /*return*/, result];
        }
    });
}); };
exports.default = verifyString;
