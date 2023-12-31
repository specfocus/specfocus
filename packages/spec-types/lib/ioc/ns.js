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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace = exports.isContainerInstance = exports.isContainerClass = exports.CONTAINER_TYPE = void 0;
var lazy_1 = require("./lazy");
exports.CONTAINER_TYPE = Symbol.for('container');
// Type guards to improve code readability
var isContainerClass = function (container) {
    return '$$typeof' in container && container.$$typeof === exports.CONTAINER_TYPE;
};
exports.isContainerClass = isContainerClass;
var isContainerInstance = function (obj) { return obj && 'service' in obj; };
exports.isContainerInstance = isContainerInstance;
var isFunction = function (container) { return typeof container === 'function'; };
var isResolver = function (container) { return (0, exports.isContainerInstance)(container) && container.service instanceof Namespace; };
var getContainerRefType = function (container) {
    return !isFunction(container)
        ? 'ContainerInstance'
        : (0, exports.isContainerClass)(container)
            ? 'ContainerClass'
            : 'ContainerRef';
};
var RESOLVER_TYPE = Symbol.for('service.namespace');
var Namespace = /** @class */ (function () {
    function Namespace(nodes) {
        if (nodes === void 0) { nodes = new Map(); }
        this.nodes = nodes;
    }
    Namespace.prototype.add = function (ns, className, container) {
        var moniker = "".concat(ns, "::").concat(className);
        Object.assign(container, { moniker: moniker });
        this.nodes.set(moniker, container);
    };
    Namespace.prototype.get = function (moniker) {
        return __awaiter(this, void 0, void 0, function () {
            var container, type, load, module_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = this.nodes.get(moniker);
                        if (!container) {
                            throw new Error("Not found: ".concat(moniker));
                        }
                        type = getContainerRefType(container);
                        type = getContainerRefType(container);
                        _a.label = 1;
                    case 1:
                        if (!(type === 'ContainerRef')) return [3 /*break*/, 7];
                        load = container;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, load()];
                    case 3:
                        module_1 = _a.sent();
                        container = module_1 === null || module_1 === void 0 ? void 0 : module_1.default;
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw new Error("Error loading: ".concat(moniker, " (").concat(error_1, ")"));
                    case 5:
                        if (!container) {
                            throw new Error("No default export found loading: ".concat(moniker, " (").concat(Object.keys(module), ")"));
                        }
                        _a.label = 6;
                    case 6:
                        type = getContainerRefType(container);
                        return [3 /*break*/, 1];
                    case 7:
                        switch (type) {
                            case 'ContainerInstance':
                                return [2 /*return*/, container];
                            case 'ContainerClass':
                                return [2 /*return*/, new container()];
                            default:
                                throw new Error("Not found: ".concat(moniker));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Namespace.prototype.lazy = function (moniker, ctor) {
        var lazyType = (0, lazy_1.lazy)(ctor);
        this.nodes.set(moniker, ctor);
        return lazyType;
    };
    Namespace.prototype.options = function (moniker) {
        return Array.from(this.nodes.entries())
            .sort(function (_a, _b) {
            var _c = __read(_a, 1), a = _c[0];
            var _d = __read(_b, 1), b = _d[0];
            return a.length - b.length;
        })
            .filter(function (_a) {
            var _b = __read(_a, 2), left = _b[0], container = _b[1];
            if (typeof container !== 'object' || !container || !('resolver' in container)) {
                return;
            }
            if (!moniker.startsWith(left) || left.includes('::')) {
                return false;
            }
            return true;
        }).map(function (_a) {
            var _b = __read(_a, 2), left = _b[0], container = _b[1];
            var right = moniker.substring(left.length);
            if (!right.startsWith('.')) {
                return [, container];
            }
            right = right.substring(1);
            return [right, container];
        }).filter(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return typeof key === 'string' && key.length > 0;
        });
    };
    Namespace.prototype.register = function (ns, containerClass) {
        var e_1, _a;
        this.nodes.set(ns, containerClass);
        try {
            // Traverse static members
            for (var _b = __values(Object.entries(containerClass)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), name = _d[0], member = _d[1];
                if ((0, exports.isContainerInstance)(member)) {
                    var moniker = "".concat(ns, "::").concat(name);
                    Object.assign(member, { moniker: moniker });
                    this.nodes.set(moniker, member);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return Namespace;
}());
exports.Namespace = Namespace;
var root = new Namespace();
exports.default = root;
