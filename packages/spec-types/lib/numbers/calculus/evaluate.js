"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUid = exports.invertedRange = exports.range = exports.getStep = exports.parseNumber = exports.ceil = exports.pad = exports.clamp = void 0;
var clamp = function (x, min, max) {
    return x > max ? max : x < min ? min : x;
};
exports.clamp = clamp;
var pad = function (x, pad) { return String(x).padStart(pad, "0"); };
exports.pad = pad;
var ceil = function (v) { return Math.sign(v) * Math.ceil(Math.abs(v)); };
exports.ceil = ceil;
var parseNumber = function (v) {
    if (v === "" || typeof v === "number")
        return v;
    try {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        var _v = evaluate(v);
        if (!isNaN(_v))
            return _v;
    }
    catch (_a) { }
    return parseFloat(v);
};
exports.parseNumber = parseNumber;
var log10 = Math.log(10);
function getStep(number) {
    var n = Math.abs(+String(number).replace(".", "")); //remove decimal and make positive
    if (n === 0)
        return 0.01;
    while (n !== 0 && n % 10 === 0)
        n /= 10;
    //kill the 0s at the end of n
    var significantDigits = Math.floor(Math.log(n) / log10) + 1;
    var numberLog = Math.floor(Math.log10(Math.abs(number)));
    var step = Math.pow(10, numberLog - significantDigits);
    return Math.max(step, 0.001);
}
exports.getStep = getStep;
var range = function (v, min, max) {
    if (max === min)
        return 0;
    return (v - min) / (max - min);
};
exports.range = range;
var invertedRange = function (p, min, max) {
    return p * (max - min) + min;
};
exports.invertedRange = invertedRange;
// from https://gist.github.com/gordonbrander/2230317
var getUid = function () { return "_" + Math.random().toString(36).substr(2, 9); };
exports.getUid = getUid;
var parens = /\(([0-9+\-*/^ .]+)\)/; // Regex for identifying parenthetical expressions
var exp = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/; // Regex for identifying exponentials (x ^ y)
var mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/; // Regex for identifying multiplication (x * y)
var div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/; // Regex for identifying division (x / y)
var add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/; // Regex for identifying addition (x + y)
var sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/; // Regex for identifying subtraction (x - y)
/**
 * Copyright: copied from here: https://stackoverflow.com/a/63105543
 * by @aanrudolph2 https://github.com/aanrudolph2

/**
 * Evaluates a numerical expression as a string and returns a Number
 * Follows standard PEMDAS operation ordering
 * @param {String} expr Numerical expression input
 * @returns {Number} Result of expression
 * @example evaluate('2 + 4*(30/5) - 34 + 45/2')
 */
var evaluate = function (expr) {
    if (isNaN(Number(expr))) {
        if (parens.test(expr)) {
            var newExpr = expr.replace(parens, function (match, subExpr) {
                return String(evaluate(subExpr));
            });
            return evaluate(newExpr);
        }
        else if (exp.test(expr)) {
            var newExpr = expr.replace(exp, function (match, base, pow) {
                return String(Math.pow(Number(base), Number(pow)));
            });
            return evaluate(newExpr);
        }
        else if (mul.test(expr)) {
            var newExpr = expr.replace(mul, function (match, a, b) {
                return String(Number(a) * Number(b));
            });
            return evaluate(newExpr);
        }
        else if (div.test(expr)) {
            var newExpr = expr.replace(div, function (match, a, b) {
                // b can equal either 0 or "0" this is on purpose
                // eslint-disable-next-line eqeqeq
                if (b != 0)
                    return String(Number(a) / Number(b));
                else
                    throw new Error("Division by zero");
            });
            return evaluate(newExpr);
        }
        else if (add.test(expr)) {
            var newExpr = expr.replace(add, function (match, a, b) {
                return String(Number(a) + Number(b));
            });
            return evaluate(newExpr);
        }
        else if (sub.test(expr)) {
            var newExpr = expr.replace(sub, function (match, a, b) {
                return String(Number(a) - Number(b));
            });
            return evaluate(newExpr);
        }
        else {
            return Number(expr);
        }
    }
    return Number(expr);
};
exports.default = evaluate;
