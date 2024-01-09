"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = exports.sentenceCase = exports.kebabCase = exports.snakeCase = exports.pascalCase = exports.camelCase = exports.join = exports.upperFirst = exports.words = exports.isValidJSON = exports.isUpperCase = exports.hasStringType = exports.isAlphaNumeric = exports.hasNumberTypeLike = exports.isLowerCase = exports.isIntegerLike = exports.isGuid = exports.isEmailAddress = exports.isAbsoluteUrl = exports.USERNAME = exports.URL = exports.STRING = exports.REGEX = exports.PASSWORD = exports.NAME = exports.GUID = exports.EMAIL = exports.DATE_STR = void 0;
exports.DATE_STR = "date";
exports.EMAIL = "email";
exports.GUID = "guid";
exports.NAME = "name";
exports.PASSWORD = "password";
exports.REGEX = "regex";
exports.STRING = "string";
exports.URL = "url";
exports.USERNAME = "username";
var EMAIL_EX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var GUID_EX = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/;
var URL_EX = /^[a-z][a-z0-9+.-]*:/;
var isAbsoluteUrl = function (val) {
    return (0, exports.hasStringType)(val) && URL_EX.test(val);
};
exports.isAbsoluteUrl = isAbsoluteUrl;
var isEmailAddress = function (val) {
    return (0, exports.hasStringType)(val) && EMAIL_EX.test(val);
};
exports.isEmailAddress = isEmailAddress;
var isGuid = function (val) {
    return (0, exports.hasStringType)(val) && GUID_EX.test(val);
};
exports.isGuid = isGuid;
var isIntegerLike = function (val) {
    return (0, exports.hasStringType)(val) && val === String(parseInt(val, 10));
};
exports.isIntegerLike = isIntegerLike;
var isLowerCase = function (val) {
    return (0, exports.hasStringType)(val) && val === val.toLowerCase();
};
exports.isLowerCase = isLowerCase;
var hasNumberTypeLike = function (val) {
    return (0, exports.hasStringType)(val) && val === String(parseFloat(val));
};
exports.hasNumberTypeLike = hasNumberTypeLike;
/*
(123) 456-7890
(123)456-7890
123-456-7890
123.456.7890
1234567890
+31636363634
075-63546725
*/
var isAlphaNumeric = function (val) {
    var regExp = /^[A-Za-z0-9]+$/;
    return (0, exports.hasStringType)(val) && !!val.match(regExp);
};
exports.isAlphaNumeric = isAlphaNumeric;
var hasStringType = function (val) {
    return val instanceof Object && val.constructor === String ||
        val instanceof String || typeof val === exports.STRING;
};
exports.hasStringType = hasStringType;
var isUpperCase = function (val) {
    return (0, exports.hasStringType)(val) && val === val.toUpperCase();
};
exports.isUpperCase = isUpperCase;
var isValidJSON = function (val) {
    if (!(0, exports.hasStringType)(val)) {
        return false;
    }
    try {
        JSON.parse(val);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isValidJSON = isValidJSON;
var reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
var words = function (str) { return str.match(reWords) || []; };
exports.words = words;
var upperFirst = function (str) { return str[0].toUpperCase() + str.slice(1); };
exports.upperFirst = upperFirst;
var join = function (str, d) { return (0, exports.words)(str).join(d).toLowerCase(); };
exports.join = join;
var camelCase = function (str) {
    return (0, exports.words)(str).reduce(function (acc, next) { return "".concat(acc).concat(!acc ? next : (0, exports.upperFirst)(next)); }, '');
};
exports.camelCase = camelCase;
var pascalCase = function (str) { return (0, exports.upperFirst)((0, exports.camelCase)(str)); };
exports.pascalCase = pascalCase;
var snakeCase = function (str) { return (0, exports.join)(str, '_'); };
exports.snakeCase = snakeCase;
var kebabCase = function (str) { return (0, exports.join)(str, '-'); };
exports.kebabCase = kebabCase;
var sentenceCase = function (str) { return (0, exports.upperFirst)((0, exports.join)(str, ' ')); };
exports.sentenceCase = sentenceCase;
var titleCase = function (str) { return (0, exports.words)(str).map(exports.upperFirst).join(' '); };
exports.titleCase = titleCase;
