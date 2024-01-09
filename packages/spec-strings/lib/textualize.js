"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var INDEXES = { xs: 0, sm: 1, md: 2, lg: 3 };
var VARIANTS = ['xs', 'sm', 'md', 'lg'];
var textualize = function (text, variant) {
    var _a, _b, _c;
    if (typeof text === 'string') {
        return text;
    }
    var result = (_a = text.default) !== null && _a !== void 0 ? _a : '';
    if (!variant)
        return result;
    if (variant in text)
        result = (_b = text[variant]) !== null && _b !== void 0 ? _b : '';
    else {
        for (var i = INDEXES[variant] - 1; i >= 0; i--) {
            var variant_1 = VARIANTS[i];
            if (variant_1 in text) {
                result = (_c = text[variant_1]) !== null && _c !== void 0 ? _c : '';
                break;
            }
        }
    }
    return result;
};
exports.default = textualize;
