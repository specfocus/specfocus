"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.EntriesEditorService = void 0;
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-undefined-type"));
var is_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-object"));
var get_key_1 = __importDefault(require("./get-key"));
var viewer_1 = require("./viewer");
var patch = function (target, entry) {
    var index = target.findIndex(function (_a) {
        var _b = __read(_a, 1), key = _b[0];
        return key === (0, get_key_1.default)(entry);
    });
    if (index > -1) {
        return target.map(function (current) { return (0, get_key_1.default)(current) === (0, get_key_1.default)(entry) ? entry : current; });
    }
    return __spreadArray(__spreadArray([], __read(target), false), [entry], false);
};
var getSortable = function (entry, by) {
    var _a = __read(entry, 2), key = _a[0], value = _a[1];
    if ((0, has_undefined_type_1.default)(by) || !(0, is_object_1.default)(value)) {
        return key;
    }
    if (value && by in value) {
        return JSON.stringify(value[by]);
    }
    return key;
};
var EntriesEditorService = /** @class */ (function (_super) {
    __extends(EntriesEditorService, _super);
    function EntriesEditorService(get, set) {
        var _this = _super.call(this, get) || this;
        _this.set = set;
        _this.append = function (entry) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        entries = _a.sent();
                        entries.push(entry);
                        return [4 /*yield*/, this.set(entries)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, entries];
                }
            });
        }); };
        _this.merge = function (entries) { return __awaiter(_this, void 0, void 0, function () {
            var result, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = entries).reduce;
                        _c = [function (acc, entry) { return patch(acc, entry); }];
                        return [4 /*yield*/, this.get()];
                    case 1:
                        result = _b.apply(_a, _c.concat([_d.sent()]));
                        this.set(result);
                        return [2 /*return*/, result];
                }
            });
        }); };
        _this.patch = function (entry) { return __awaiter(_this, void 0, void 0, function () {
            var entries, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        entries = _a.sent();
                        result = patch(entries, entry);
                        this.set(result);
                        return [2 /*return*/, result];
                }
            });
        }); };
        _this.prepend = function (entry) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        entries = _a.sent();
                        entries.unshift(entry);
                        this.set(entries);
                        return [2 /*return*/, entries];
                }
            });
        }); };
        _this.remove = function (key) { return __awaiter(_this, void 0, void 0, function () {
            var entries, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        entries = _a.sent();
                        result = entries.filter(function (_a) {
                            var _b = __read(_a, 1), k = _b[0];
                            return k !== key;
                        });
                        if (entries.length === result.length)
                            return [2 /*return*/, entries];
                        return [4 /*yield*/, this.set(result)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        _this.replace = function (key, entry) { return __awaiter(_this, void 0, void 0, function () {
            var entries, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        entries = _a.sent();
                        result = entries.map(function (current) { return (0, get_key_1.default)(current) === key ? entry : current; });
                        return [4 /*yield*/, this.set(result)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        _this.reset = function (entries) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.set(entries);
                return [2 /*return*/, entries];
            });
        }); };
        _this.sort = function (by, direction) { return __awaiter(_this, void 0, void 0, function () {
            var entries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get()];
                    case 1:
                        entries = _a.sent();
                        entries.sort(function (a, b) {
                            var left = getSortable(a, by);
                            var right = getSortable(b, by);
                            if (direction === 'asc') {
                                return left > right ? 1 : -1;
                            }
                            return left < right ? 1 : -1;
                        });
                        return [4 /*yield*/, this.set(entries)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, entries];
                }
            });
        }); };
        _this.update = function (entry) { return __awaiter(_this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                key = (0, get_key_1.default)(entry);
                return [2 /*return*/, this.replace(key, entry)];
            });
        }); };
        return _this;
    }
    return EntriesEditorService;
}(viewer_1.EntriesViewerService));
exports.EntriesEditorService = EntriesEditorService;
