"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getter = exports.setter = exports.expr = void 0;
var property_expr_1 = require("./property-expr");
var setCache = new property_expr_1.Cache(512), getCache = new property_expr_1.Cache(512);
function makeSafe(path, param) {
    var result = param, parts = (0, property_expr_1.split)(path), isLast;
    (0, property_expr_1.forEach)(parts, function (part, isBracket, isArray, idx, parts) {
        isLast = idx === parts.length - 1;
        part = isBracket || isArray ? '[' + part + ']' : '.' + part;
        result += part + (!isLast ? ' || {})' : ')');
    });
    return new Array(parts.length + 1).join('(') + result;
}
function expr(expression, safe, param) {
    expression = expression || '';
    if (typeof safe === 'string') {
        param = safe;
        safe = false;
    }
    param = param || 'data';
    if (expression && expression.charAt(0) !== '[')
        expression = '.' + expression;
    return safe ? makeSafe(expression, param) : param + expression;
}
exports.expr = expr;
var setter = function (path) {
    if (path.indexOf('__proto__') !== -1 ||
        path.indexOf('constructor') !== -1 ||
        path.indexOf('prototype') !== -1) {
        return function (obj) { return obj; };
    }
    return (setCache.get(path) ||
        setCache.set(path, new Function('data, value', expr(path, 'data') + ' = value')));
};
exports.setter = setter;
var getter = function (path, safe) {
    var key = path + '_' + safe;
    return (getCache.get(key) ||
        getCache.set(key, new Function('data', 'return ' + expr(path, safe, 'data'))));
};
exports.getter = getter;
