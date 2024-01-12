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
exports.evaluate = void 0;
var is_bigint_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-bigint"));
var lib_1 = require("@specfocus/spec-objects/lib");
var has_bigint_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-bigint-type"));
var has_number_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-number-type"));
var has_string_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-string-type"));
var is_number_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-number-object"));
var is_string_object_1 = __importDefault(require("@specfocus/spec-objects/lib/is-string-object"));
var has_object_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-object-type"));
var arithmetics_1 = require("./arithmetics");
var binary_1 = __importDefault(require("./binary"));
var parse_1 = __importDefault(require("./parse"));
var unary_1 = __importDefault(require("./unary"));
var computeBinary = function (_a, context, errors) {
    var _b = __read(_a, 3), operator = _b[0], operand1 = _b[1], operand2 = _b[2];
    var value1 = (0, exports.evaluate)(operand1, context, errors);
    var value2 = (0, exports.evaluate)(operand2, context, errors);
    if ((0, lib_1.hasUndefinedType)(value2))
        return;
    if (!(0, has_number_type_1.default)(value2)) {
        errors.push("Invalid value: ".concat(value2));
        return;
    }
    if ((0, lib_1.hasUndefinedType)(value1))
        return;
    var fn = binary_1.default[operator];
    return fn(value1, value2);
};
var computeUnary = function (_a, context, errors) {
    var _b = __read(_a, 2), operator = _b[0], operand = _b[1];
    var value = (0, exports.evaluate)(operand, context, errors);
    if ((0, lib_1.hasUndefinedType)(value))
        return;
    var fn = unary_1.default[operator];
    return fn(value);
};
var evaluate = function (expr, context, errors) {
    var _a;
    if ((0, lib_1.hasUndefinedType)(expr) || expr === null) {
        errors.push("Invalid value: ".concat(expr));
        return;
    }
    if ((0, has_object_type_1.default)(expr)) {
        if (Array.isArray(expr)) {
            var _b = __read(expr, 1), $tag = _b[0];
            if (arithmetics_1.$UNARY.includes($tag))
                return computeUnary(expr, context, errors);
            if (arithmetics_1.$BINARY.includes($tag))
                return computeBinary(expr, context, errors);
            return expr.map(function (val) { return (0, exports.evaluate)(val, context, errors); }).filter(has_number_type_1.default);
        }
        if ((0, is_number_object_1.default)(expr))
            expr = expr.valueOf();
        else if ((0, is_string_object_1.default)(expr))
            expr = expr.valueOf();
        else if ((0, is_bigint_1.default)(expr))
            expr = expr.valueOf();
        else if ((0, lib_1.isBooleanObject)(expr))
            expr = expr.valueOf();
        else {
            errors.push("Invalid value: ".concat(expr));
            return;
        }
    }
    if ((0, has_string_type_1.default)(expr)) {
        expr = (0, parse_1.default)(expr);
        if ((0, lib_1.hasUndefinedType)(expr))
            return;
        if ((0, has_object_type_1.default)(expr))
            return (0, exports.evaluate)(expr, context, errors);
        if ((0, has_string_type_1.default)(expr)) {
            return (_a = context[expr]) !== null && _a !== void 0 ? _a : expr;
        }
    }
    if ((0, has_number_type_1.default)(expr))
        return expr;
    if ((0, has_bigint_type_1.default)(expr))
        return Number(expr).valueOf();
    if ((0, lib_1.hasBooleanType)(expr))
        return Number(expr).valueOf();
    errors.push("Invalid value: ".concat(expr));
};
exports.evaluate = evaluate;
var compute = function (expr, context, errors) {
    if (!(0, has_object_type_1.default)(expr))
        return;
    if (Array.isArray(expr)) {
        var _a = __read(expr, 1), $tag = _a[0];
        if (arithmetics_1.$UNARY.includes($tag))
            return computeUnary(expr, context, errors);
        if (arithmetics_1.$BINARY.includes($tag))
            return computeBinary(expr, context, errors);
    }
};
exports.default = compute;
