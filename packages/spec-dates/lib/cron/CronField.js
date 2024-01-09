"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.offset = exports.CronField = void 0;
var ArrayEnumerator_1 = require("@specfocus/spec-types/lib/iterations/ArrayEnumerator");
var ParallelEnumerator_1 = require("@specfocus/spec-types/lib/iterations/ParallelEnumerator");
var has_undefined_type_1 = __importDefault(require("@specfocus/spec-types/lib/types/has-undefined-type"));
var Cron_1 = require("./Cron");
var CronInterval_1 = __importStar(require("./CronInterval"));
var CronRange_1 = __importStar(require("./CronRange"));
var CronValue_1 = __importStar(require("./CronValue"));
var every = function (expr, scope) {
    if (expr === Cron_1.ASTERISK) {
        var _a = __read(scope, 2), start = _a[0], end = _a[1];
        return new CronRange_1.CronConstantRange(new CronValue_1.CronConstantValue(start), new CronValue_1.CronConstantValue(end));
    }
};
var base = function (expr, scope) { var _a, _b; return (_b = (_a = every(expr, scope)) !== null && _a !== void 0 ? _a : (0, CronValue_1.default)(expr, scope)) !== null && _b !== void 0 ? _b : (0, CronRange_1.default)(expr, scope); };
var parse = function (expr, scope) { var _a; return (_a = base(expr, scope)) !== null && _a !== void 0 ? _a : (0, CronInterval_1.default)(expr, scope, base); };
var CronField = /** @class */ (function () {
    function CronField(nodes) {
        var _this = this;
        this.nodes = nodes;
        this.clone = function () { return new CronField(_this.nodes); };
        this.includes = function (value) { return _this.nodes.some(function (node) { return node.includes(value); }); };
        this.enumerate = function (initial) {
            if (_this.nodes.length === 0) {
                // don't do this for days if it is empty, just don't use parallel
                return new ArrayEnumerator_1.ArrayEnumerator([]);
            }
            if (_this.nodes.length > 1) {
                return new ParallelEnumerator_1.ParallelEnumerator(_this.nodes.map(function (obj) { return obj.enumerate(initial); }));
            }
            var _a = __read(_this.nodes, 1), obj = _a[0];
            return obj.enumerate(initial);
        };
        this.specs = function (errors) {
            return _this.nodes.reduce(function (flat, _a) {
                var spec = _a.spec, issues = _a.issues;
                if (!(0, has_undefined_type_1.default)(errors) && issues.length > 0) {
                    errors.push.apply(errors, __spreadArray([], __read(issues), false));
                }
                flat.push(spec);
                return flat;
            }, []);
        };
        this.toString = function () { return _this.specs().map(function (spec) { return spec.toString(); }).join(','); };
    }
    Object.defineProperty(CronField.prototype, "issues", {
        get: function () {
            return this.nodes.map(function (node) { return node.issues; }).flat();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronField.prototype, "length", {
        get: function () {
            return this.nodes.length;
        },
        enumerable: false,
        configurable: true
    });
    return CronField;
}());
exports.CronField = CronField;
var offset = function (start, end) {
    return (0, has_undefined_type_1.default)(end)
        ? new CronField([new CronInterval_1.CronInterval(new CronValue_1.CronConstantValue(start), 1)])
        : new CronField([new CronRange_1.CronConstantRange(new CronValue_1.CronConstantValue(start), new CronValue_1.CronConstantValue(end))]);
};
exports.offset = offset;
var field = function (scope, parts) {
    var e_1, _a;
    var nodes = [];
    try {
        for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
            var expr = parts_1_1.value;
            var obj = parse(expr, scope);
            if (!(0, has_undefined_type_1.default)(obj)) {
                nodes.push(obj);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return new CronField(nodes);
};
exports.default = field;
