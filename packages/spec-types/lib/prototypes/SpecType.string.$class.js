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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyStringClass = exports.$class = void 0;
var Container_1 = __importDefault(require("../ioc/Container"));
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
var has_undefined_type_1 = __importDefault(require("../types/has-undefined-type"));
exports.$class = '$class';
var validate = function (val, className, error) { return __awaiter(void 0, void 0, void 0, function () {
    var validator, validate, valid, val_1, val_1_1, item;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Container_1.default.resolve(className)];
            case 1:
                validator = _b.sent();
                if ((0, has_undefined_type_1.default)(validator)) {
                    error("Unknown class: ".concat(className));
                    return [2 /*return*/];
                }
                validate = validator.service;
                if (Array.isArray(val)) {
                    valid = true;
                    try {
                        for (val_1 = __values(val), val_1_1 = val_1.next(); !val_1_1.done; val_1_1 = val_1.next()) {
                            item = val_1_1.value;
                            if (!validate(item)) {
                                error("Expected a valid ".concat(className, ", but got ").concat(item));
                                valid = false;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (val_1_1 && !val_1_1.done && (_a = val_1.return)) _a.call(val_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [2 /*return*/, valid];
                }
                if (validate(val))
                    return [2 /*return*/, true];
                error("Expected a valid ".concat(className, ", but got ").concat(val));
                return [2 /*return*/, false];
        }
    });
}); };
var verifyStringClass = function (val, spec, error) {
    if (!(0, has_object_type_1.default)(spec))
        return Promise.resolve(undefined);
    if (Array.isArray(spec)) {
        var _a = __read(spec, 2), $tag = _a[0], name_1 = _a[1];
        if ($tag !== exports.$class || spec.length !== 2)
            return Promise.resolve(undefined);
        if ((0, has_undefined_type_1.default)(name_1))
            return Promise.resolve(undefined);
        return validate(val, name_1, error);
    }
    var _b = spec, _c = exports.$class, name = _b[_c];
    if ((0, has_undefined_type_1.default)(name))
        return Promise.resolve(undefined);
    return validate(val, name, error);
};
exports.verifyStringClass = verifyStringClass;
