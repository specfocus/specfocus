"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetics_1 = require("./arithmetics");
var parse = function (exp) {
    var index = 0;
    var consumeToken = function (pattern) {
        var match = exp.substr(index).match(pattern);
        if (match) {
            index += match[0].length;
            return match[0];
        }
        return null;
    };
    var parseConstant = function () {
        var constantToken = consumeToken(/^\b[a-z_][a-z0-9_]*\b/i); // Regex for variable or field names (starts with letter or _, followed by letters, numbers, or _)
        if (constantToken)
            return constantToken;
        return null;
    };
    var parsePrimary = function () {
        if (consumeToken(/^\s*\(\s*/)) {
            var expr = parseExpression();
            consumeToken(/^\s*\)\s*/); // consume the closing parenthesis
            return expr;
        }
        var constant = parseConstant();
        if (constant !== null)
            return constant;
        var num = consumeToken(/^\d+/);
        return num ? parseInt(num, 10) : 0;
    };
    var parseFactor = function () {
        var result = parsePrimary();
        while (true) {
            var divOp = consumeToken(/^\s*\/\s*/);
            if (divOp) {
                result = [arithmetics_1.$div, result, parsePrimary()];
            }
            else {
                break;
            }
        }
        return result;
    };
    var parseTerm = function () {
        var result = parseFactor();
        while (true) {
            var mulOp = consumeToken(/^\s*\*\s*/);
            if (mulOp) {
                result = [arithmetics_1.$mul, result, parseFactor()];
            }
            else {
                break;
            }
        }
        return result;
    };
    var parseExpression = function () {
        var result = parseTerm();
        while (true) {
            var addOp = consumeToken(/^\s*\+\s*/);
            if (addOp) {
                result = [arithmetics_1.$add, result, parseTerm()];
            }
            else {
                var subOp = consumeToken(/^\s*-\s*/);
                if (subOp) {
                    result = [arithmetics_1.$sub, result, parseTerm()];
                }
                else {
                    break;
                }
            }
        }
        return result;
    };
    return parseExpression();
};
exports.default = parse;
