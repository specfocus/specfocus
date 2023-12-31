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
exports.verifyField = void 0;
var has_function_type_1 = __importDefault(require("../types/has-function-type"));
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
var has_undefined_type_1 = __importDefault(require("../types/has-undefined-type"));
var is_array_1 = __importDefault(require("../types/is-array"));
var is_object_1 = __importDefault(require("../types/is-object"));
var _and_1 = require("../verifications/$and");
var Field__size_1 = __importDefault(require("./Field.$size"));
var Field__type_1 = __importDefault(require("./Field.$type"));
var Fieldset_1 = require("./Fieldset");
var SpecType_verify_1 = __importDefault(require("./SpecType.verify"));
var verifyField = function (val, field, error) { return __awaiter(void 0, void 0, void 0, function () {
    var type_1, _a, _b, _c, _d, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                if (!(0, is_object_1.default)(field)) {
                    error("Expected an object for field verification but got ".concat(typeof field));
                    return [2 /*return*/];
                }
                if ((0, has_undefined_type_1.default)(val)) {
                    if (field.$exists === false)
                        return [2 /*return*/, true];
                    error("Expected to exist");
                    return [2 /*return*/, false];
                }
                if (val === null) {
                    if (field.$nullable === true)
                        return [2 /*return*/, true];
                    error("Expected to be not null");
                    return [2 /*return*/, false];
                }
                if (!(field.$type === 'array')) return [3 /*break*/, 2];
                if (!Array.isArray(val)) {
                    error("Expected an array but got ".concat(typeof val));
                    return [2 /*return*/, false];
                }
                type_1 = field.$elem;
                if ((0, has_undefined_type_1.default)(type_1))
                    (0, Field__size_1.default)(val, field, error);
                _b = (_a = _and_1.xand).apply;
                _c = [void 0];
                _d = [[(0, Field__size_1.default)(val, field, error)]];
                return [4 /*yield*/, Promise.all(val.map(function (elem) { return (0, exports.verifyField)(elem, type_1, error); }))];
            case 1: return [2 /*return*/, _b.apply(_a, _c.concat([__spreadArray.apply(void 0, _d.concat([__read.apply(void 0, [_j.sent()]), false]))]))];
            case 2:
                ;
                if (!(0, Fieldset_1.isAtom)(field)) return [3 /*break*/, 5];
                if (!(0, is_array_1.default)(field.$spec)) return [3 /*break*/, 4];
                _e = _and_1.xand;
                _f = [(0, Field__type_1.default)(val, { $type: field.$type }, error)];
                return [4 /*yield*/, (0, SpecType_verify_1.default)(val, field.$spec, error)];
            case 3: return [2 /*return*/, _e.apply(void 0, _f.concat([_j.sent()]))];
            case 4: return [2 /*return*/, (0, Field__type_1.default)(val, { $type: field.$type }, error)];
            case 5:
                if (!(0, has_function_type_1.default)(field.$type)) return [3 /*break*/, 7];
                _g = verifyFieldset;
                _h = [val];
                return [4 /*yield*/, field.$type()];
            case 6: return [2 /*return*/, _g.apply(void 0, _h.concat([_j.sent(), error]))];
            case 7:
                if ((0, has_object_type_1.default)(field.$type))
                    return [2 /*return*/, verifyFieldset(val, field.$type, error)];
                error("Unrecognized $type: ".concat(field.$type));
                return [2 /*return*/, false];
        }
    });
}); };
exports.verifyField = verifyField;
var verifyFieldset = function (shape, fieldset, error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                if (!(0, has_object_type_1.default)(shape)) {
                    error("Expected an object for fieldset verification but got ".concat(typeof shape));
                    return [2 /*return*/, false];
                }
                if (shape === null) {
                    error("Expected an object for fieldset verification but got null");
                    return [2 /*return*/, false];
                }
                if (Array.isArray(shape)) {
                    error("Expected an object for fieldset verification but got array");
                    return [2 /*return*/, false];
                }
                _b = (_a = _and_1.xand).apply;
                _c = [void 0];
                _d = [[]];
                return [4 /*yield*/, Promise.all(Object.entries(fieldset).map(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], field = _b[1];
                        return (0, exports.verifyField)(shape[key], field, function (e) { return error("".concat(key, "::").concat(e)); });
                    }))];
            case 1: return [2 /*return*/, _b.apply(_a, _c.concat([__spreadArray.apply(void 0, _d.concat([__read.apply(void 0, [_e.sent()]), false]))]))];
        }
    });
}); };
exports.default = verifyFieldset;
