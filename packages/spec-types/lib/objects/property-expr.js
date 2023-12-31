"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = exports.normalizePath = exports.forEach = exports.join = exports.getter = exports.setter = exports.Cache = void 0;
/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */
var Cache = /** @class */ (function () {
    function Cache(maxSize) {
        var _this = this;
        this._size = 0;
        this.clear = function () {
            _this._size = 0;
            _this._values = Object.create(null);
        };
        this.get = function (key) {
            return _this._values[key];
        };
        this.set = function (key, value) {
            _this._size >= _this._maxSize && _this.clear();
            if (!(key in _this._values))
                _this._size++;
            return (_this._values[key] = value);
        };
        this._maxSize = maxSize;
        this.clear();
    }
    return Cache;
}());
exports.Cache = Cache;
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g;
var DIGIT_REGEX = /^\d+$/;
var LEAD_DIGIT_REGEX = /^\d/;
var SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
var CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/;
var MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE);
var setCache = new Cache(MAX_CACHE_SIZE);
var getCache = new Cache(MAX_CACHE_SIZE);
var setter = function (path) {
    var parts = (0, exports.normalizePath)(path);
    return (setCache.get(path) ||
        setCache.set(path, function (obj, value) {
            var len = parts.length;
            var index = 0;
            var data = obj;
            while (index < len - 1) {
                var part = parts[index];
                if (part === '__proto__' ||
                    part === 'constructor' ||
                    part === 'prototype') {
                    return obj;
                }
                data = data[parts[index++]];
            }
            data[parts[index]] = value;
        }));
};
exports.setter = setter;
var getter = function (path, safe) {
    var parts = (0, exports.normalizePath)(path);
    return (getCache.get(path) ||
        getCache.set(path, function (data) {
            var index = 0, len = parts.length;
            while (index < len) {
                if (data != null || !safe)
                    data = data[parts[index++]];
                else
                    return;
            }
            return data;
        }));
};
exports.getter = getter;
var join = function (segments) {
    return segments.reduce(function (path, part) {
        return (path +
            (isQuoted(part) || DIGIT_REGEX.test(part)
                ? '[' + part + ']'
                : (path ? '.' : '') + part));
    }, '');
};
exports.join = join;
var forEach = function (path, cb, thisArg) {
    _forEach(Array.isArray(path) ? path : (0, exports.split)(path), cb, thisArg);
};
exports.forEach = forEach;
var normalizePath = function (path) {
    return pathCache.get(path) ||
        pathCache.set(path, (0, exports.split)(path).map(function (part) {
            return part.replace(CLEAN_QUOTES_REGEX, '$2');
        }));
};
exports.normalizePath = normalizePath;
var split = function (path) { return path.match(SPLIT_REGEX); };
exports.split = split;
function _forEach(parts, iter, thisArg) {
    for (var idx = 0, len = parts.length; idx < len; idx++) {
        var part = parts[idx];
        if (part) {
            if (shouldBeQuoted(part)) {
                part = '"' + part + '"';
            }
            var isBracket = isQuoted(part);
            var isArray = !isBracket && /^\d+$/.test(part);
            iter.call(thisArg, part, isBracket, isArray, idx, parts);
        }
    }
}
var isQuoted = function (str) {
    return typeof str === 'string' && str.length > 0 && ["'", '"'].indexOf(str.charAt(0)) !== -1;
};
var hasLeadingNumber = function (part) {
    return part.match(LEAD_DIGIT_REGEX) !== null && part.match(DIGIT_REGEX) === null;
};
var hasSpecialChars = function (part) { return SPEC_CHAR_REGEX.test(part); };
var shouldBeQuoted = function (part) {
    return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
};
