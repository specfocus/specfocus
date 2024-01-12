"use strict";
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
exports.verifyComparison = exports.$COMPARISON = void 0;
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var _and_1 = require("@specfocus/spec-verifications/lib/$and");
var _eq_1 = require("./$eq");
var _gt_1 = require("./$gt");
var _gte_1 = require("./$gte");
var _in_1 = require("./$in");
var _lt_1 = require("./$lt");
var _lte_1 = require("./$lte");
var _neq_1 = require("./$neq");
var _nin_1 = require("./$nin");
exports.$COMPARISON = [_eq_1.$eq, _gt_1.$gt, _gte_1.$gte, _in_1.$in, _lt_1.$lt, _lte_1.$lte, _neq_1.$ne, _nin_1.$nin];
var verifyComparison = function (val, expr, error) {
    if (!(0, has_object_type_1.default)(expr))
        return;
    if (Array.isArray(expr)) {
        var _a = __read(expr, 1), $tag = _a[0];
        switch ($tag) {
            case _eq_1.$eq:
                return (0, _eq_1.checkEqualTo)(val, expr, error);
            case _gt_1.$gt:
                return (0, _gt_1.checkGreaterThan)(val, expr, error);
            case _gte_1.$gte:
                return (0, _gte_1.checkGreaterThanOrEqualTo)(val, expr, error);
            case _in_1.$in:
                return (0, _in_1.checkIn)(val, expr, error);
            case _lt_1.$lt:
                return (0, _lt_1.checkLessThan)(val, expr, error);
            case _lte_1.$lte:
                return (0, _lte_1.checkLessThanOrEqualTo)(val, expr, error);
            case _neq_1.$ne:
                return (0, _neq_1.checkNotEqualTo)(val, expr, error);
            case _nin_1.$nin:
                return (0, _nin_1.checkNotIn)(val, expr, error);
        }
    }
    ;
    return Object.entries(expr).reduce(function (result, _a) {
        var _b, _c, _d, _e, _f, _g, _h, _j;
        var _k = __read(_a, 2), $tag = _k[0], test = _k[1];
        switch ($tag) {
            case _eq_1.$eq:
                result = (0, _and_1.xand)(result, (0, _eq_1.checkEqualTo)(val, (_b = {}, _b[$tag] = test, _b), error));
                break;
            case _gt_1.$gt:
                result = (0, _and_1.xand)(result, (0, _gt_1.checkGreaterThan)(val, (_c = {}, _c[$tag] = test, _c), error));
                break;
            case _gte_1.$gte:
                result = (0, _and_1.xand)(result, (0, _gte_1.checkGreaterThanOrEqualTo)(val, (_d = {}, _d[$tag] = test, _d), error));
                break;
            case _in_1.$in:
                result = (0, _and_1.xand)(result, (0, _in_1.checkIn)(val, (_e = {}, _e[$tag] = test, _e), error));
                break;
            case _lt_1.$lt:
                result = (0, _and_1.xand)(result, (0, _lt_1.checkLessThan)(val, (_f = {}, _f[$tag] = test, _f), error));
                break;
            case _lte_1.$lte:
                result = (0, _and_1.xand)(result, (0, _lte_1.checkLessThanOrEqualTo)(val, (_g = {}, _g[$tag] = test, _g), error));
                break;
            case _neq_1.$ne:
                result = (0, _and_1.xand)(result, (0, _neq_1.checkNotEqualTo)(val, (_h = {}, _h[$tag] = test, _h), error));
                break;
            case _nin_1.$nin:
                result = (0, _and_1.xand)(result, (0, _nin_1.checkNotIn)(val, (_j = {}, _j[$tag] = test, _j), error));
                break;
        }
        return result;
    }, undefined);
};
exports.verifyComparison = verifyComparison;
