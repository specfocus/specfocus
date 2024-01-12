"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBreakpoints = void 0;
const has_undefined_type_1 = __importDefault(require("@specfocus/spec-objects/lib/types/has-undefined-type"));
const string_format_1 = __importDefault(require("string-format"));
const is_valid_number_1 = __importDefault(require("@specfocus/spec-numbers/lib/is-valid-number"));
const has_string_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-string-type"));
const is_object_1 = __importDefault(require("@specfocus/spec-types/lib/types/is-object"));
const MISSING = '<missing>';
const find = (key, ...vars) => {
    const item = vars.find(item => typeof item === 'object' && item !== null && !Array.isArray(item) && key in item);
    return item && (0, is_object_1.default)(item) ? item[key] : undefined;
};
var TextBreakpoints;
(function (TextBreakpoints) {
    TextBreakpoints["xs"] = "xs";
    TextBreakpoints["sm"] = "sm";
    TextBreakpoints["md"] = "md";
    TextBreakpoints["lg"] = "lg";
})(TextBreakpoints || (exports.TextBreakpoints = TextBreakpoints = {}));
;
const INDEXES = { xs: 0, sm: 1, md: 2, lg: 3 };
const VARIANTS = ['xs', 'sm', 'md', 'lg'];
const genderize = (text, vars) => {
    let result;
    const gender = find('gender', ...vars);
    if (!(0, has_undefined_type_1.default)(gender) && gender in text) {
        result = text[gender] ?? text['f'] ?? text['m'] ?? MISSING;
    }
    else {
        result = text['n'] ?? text['m'] ?? text['f'];
    }
    return result;
};
const plurality = (text, vars) => {
    let counted;
    if ((0, has_string_type_1.default)(text)) {
        counted = text;
    }
    else {
        counted = text[1];
        const arg = find('count', ...vars);
        if (!(0, has_undefined_type_1.default)(arg)) {
            const count = Number(arg).valueOf();
            if (count === 0) {
                counted = text[0];
            }
            else if (count === 1) {
                counted = text[1];
            }
            else if ((0, is_valid_number_1.default)(count)) {
                counted = (text.length > 2 ? text[2] : text[0]) ?? MISSING;
            }
            else {
                counted = text[0];
            }
        }
    }
    return counted;
};
const responsive = (text, variant) => {
    let sized = text[variant];
    if ((0, has_undefined_type_1.default)(sized)) {
        for (let i = INDEXES[variant] - 1; i >= 0; i--) {
            const variant = VARIANTS[i];
            sized = text[variant];
            if (!(0, has_undefined_type_1.default)(sized)) {
                break;
            }
        }
    }
    if ((0, has_undefined_type_1.default)(sized)) {
        for (let i = INDEXES[variant] + 1; i < VARIANTS.length; i++) {
            const variant = VARIANTS[i];
            sized = text[variant];
            if (!(0, has_undefined_type_1.default)(sized)) {
                break;
            }
        }
    }
    return sized ?? MISSING;
};
const contextualize = (text, variant = TextBreakpoints.md, ...vars) => {
    const res = Array.isArray(text) ? plurality(text, vars) : text;
    const gen = (0, is_object_1.default)(res) ? responsive(res, variant) : res;
    const str = (0, is_object_1.default)(gen) ? genderize(gen, vars) : gen;
    return !(0, has_undefined_type_1.default)(str) && vars.length ? (0, string_format_1.default)(str, ...vars) : str;
};
exports.default = contextualize;
//# sourceMappingURL=contextualize.js.map