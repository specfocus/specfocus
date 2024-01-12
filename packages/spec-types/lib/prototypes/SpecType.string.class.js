"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpperCase = exports.SpaceSeparated = exports.SnakeCase = exports.PascalCase = exports.Numeric = exports.LowerCase = exports.KebabCase = exports.CamelCase = exports.AlphaNumeric = exports.StringClass = void 0;
var Container_1 = __importDefault(require("../ioc/Container"));
var is_alpha_numeric_1 = __importDefault(require("@specfocus/spec-strings/lib/is-alpha-numeric"));
var is_camel_case_1 = __importDefault(require("@specfocus/spec-strings/lib/is-camel-case"));
var is_kebab_case_1 = __importDefault(require("@specfocus/spec-strings/lib/is-kebab-case"));
var is_lower_case_1 = __importDefault(require("@specfocus/spec-strings/lib/is-lower-case"));
var is_numeric_1 = __importDefault(require("@specfocus/spec-strings/lib/is-numeric"));
var is_pascal_case_1 = __importDefault(require("@specfocus/spec-strings/lib/is-pascal-case"));
var is_snake_case_1 = __importDefault(require("@specfocus/spec-strings/lib/is-snake-case"));
var is_string_1 = __importDefault(require("@specfocus/spec-strings/lib/is-string"));
var is_upper_case_1 = __importDefault(require("@specfocus/spec-strings/lib/is-upper-case"));
var has_string_type_1 = __importDefault(require("@specfocus/spec-objects/lib/has-string-type"));
var value_of_1 = __importDefault(require("@specfocus/spec-objects/lib/value-of"));
var SpecType_string__length_1 = require("./SpecType.string.$length");
var validate = function (value, error) {
    var e_1, _a;
    if (Array.isArray(value)) {
        var valid = true;
        try {
            for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                var item = value_1_1.value;
                if (!validate(item, error))
                    valid = false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return valid;
    }
    if ((0, is_string_1.default)(value))
        return true;
    error("Expected a ".concat(typeof _this, ", but got ").concat(value, "."));
    return false;
};
var StringClass = /** @class */ (function (_super) {
    __extends(StringClass, _super);
    /** Dot Notation: Words are joined with dots, often used in web domains or URLs, e.g., website.com/index.html. */
    // static readonly DotNotation = new (StringDomain.extend(StringDomain, isDotNotation));
    /** Flat Case (flatcase): All lowercase with no delimiters: thisisflatcase. */
    // static readonly FlatCase = new (StringDomain.extend(StringDomain, isFlatCase));
    /** Hashed: A file name generated using a hash function, often used to represent the content of the file, e.g., d41d8cd98f00b204e9800998ecf8427e.txt. */
    // static readonly Hashed = new (StringDomain.extend(StringDomain, isHashed));
    /** Hexadecimal: Uses hexadecimal notation for uniqueness or identification, e.g., 0x1a3f8b.png. */
    // static readonly HexaDecimal = new (StringDomain.extend(StringDomain, isHexadecimal);
    /** 24 hours time format, e.g. 13:00 is 1:00 PM and 23:59 is 11:59 PM */
    // static readonly IsoTime = new (StringDomain.extend(StringDomain, isIsoTime);
    /** Kebab Case: Words are joined with hyphens, and all letters are in lowercase, e.g., user-profile.jpg. */
    // static readonly KebabCase = new (StringClass.extend(StringClass, isKebabCase));
    /** Lower Case: All letters are in lowercase, e.g., script.js. */
    // static readonly LowerCase = new (StringClass.extend(StringClass, isLowerCase));
    /** Pascal Case (PascalCase): Similar to camel case, but the first letter is also capitalized: ThisIsPascalCase. Often used for class names in many programming languages. */
    // static readonly PascalCase = new (StringClass.extend(StringClass, isPascalCase));
    /** Sentence Case: "The quick brown fox jumps over the lazy dog." */
    // static readonly SentenceCase =  = new (StringDomain.extend(StringDomain, isSentenceCase));
    /** Snake Case: Lowercase and separated by underscores e.g. user_name, read_file, error_list. */
    // static readonly SnakeCase = new (StringClass.extend(StringClass, isSnakeCase));
    /** Space Separated: Words are separated by spaces, often used for file names in more casual settings, e.g., my vacation photo.jpg. */
    // static readonly SpaceSeparated = new (StringClass.extend(StringClass, isUpperCase));
    /** Title Case: "The Quick Brown Fox Jumps Over the Lazy Dog" */
    // static readonly TitleCase = new StringDomain([$string, , $title$case], isTitleCase);
    /** Train Case: Similar to kebab case, but each word starts with an uppercase letter, e.g., User-Profile.jpg. */
    // static readonly TrainCase = new StringDomain([$string, , $train$case], isTrainCase);
    /** Upper Case: All letters are capitalized, e.g., IMAGE.PNG. */
    // static readonly UpperCase = new (StringClass.extend(StringClass, isUpperCase));
    /** Upper Snake Case (UPPER_SNAKE_CASE): Like snake case, but all letters are uppercase. Often used for constants in programming: THIS_IS_UPPER_SNAKE_CASE. */
    // static readonly UpperSnakeCase = new (StringDomain.extend(StringDomain, isUpperSnakeCase);
    /** UUID: Universally Unique Identifier, a long string of letters, numbers, and hyphens used for generating unique identifiers, e.g., 550e8400-e29b-41d4-a716-446655440000. */
    // static readonly UUID = new (StringDomain.extend(StringDomain, isUUID);
    function StringClass() {
        return _super.call(this, is_string_1.default) || this;
    }
    StringClass.prototype.valueOf = function (val) {
        val = (0, value_of_1.default)(val);
        if ((0, has_string_type_1.default)(val))
            return val;
        return undefined;
    };
    StringClass.prototype.validate = function (value, error) {
        var e_2, _a;
        if (Array.isArray(value)) {
            var valid = true;
            try {
                for (var value_2 = __values(value), value_2_1 = value_2.next(); !value_2_1.done; value_2_1 = value_2.next()) {
                    var item = value_2_1.value;
                    if (!this.validate(item, error))
                        valid = false;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (value_2_1 && !value_2_1.done && (_a = value_2.return)) _a.call(value_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return valid;
        }
        if ((0, is_string_1.default)(value) && this.service(value))
            return true;
        error("Expected a ".concat(typeof this, ", but got ").concat(value, "."));
        return false;
    };
    StringClass.String = new (Container_1.default.extend(StringClass, is_alpha_numeric_1.default));
    /** Alpha-Numeric: A combination of letters and numbers without any specific case or separators, e.g., File123. */
    StringClass.AlphaNumeric = new (Container_1.default.extend(StringClass, is_alpha_numeric_1.default));
    /** Camel Case: Words are joined together without spaces, and each word except the first starts with an uppercase letter, e.g., myFileDocument.docx. */
    StringClass.CamelCase = new (Container_1.default.extend(StringClass, is_camel_case_1.default));
    return StringClass;
}(Container_1.default));
exports.StringClass = StringClass;
/** Alpha-Numeric: A combination of letters and numbers without any specific case or separators, e.g., File123. */
var AlphaNumeric = /** @class */ (function (_super) {
    __extends(AlphaNumeric, _super);
    function AlphaNumeric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AlphaNumeric;
}(StringClass.extend(StringClass, is_alpha_numeric_1.default)));
exports.AlphaNumeric = AlphaNumeric;
/** Camel Case: Words are joined together without spaces, and each word except the first starts with an uppercase letter, e.g., myFileDocument.docx. */
var CamelCase = /** @class */ (function (_super) {
    __extends(CamelCase, _super);
    function CamelCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CamelCase;
}(StringClass.extend(StringClass, is_camel_case_1.default)));
exports.CamelCase = CamelCase;
/** Dot Notation: Words are joined with dots, often used in web domains or URLs, e.g., website.com/index.html. */
// export class DotNotation extends StringDomain.extend(StringDomain, isDotNotation) { }
/** Flat Case (flatcase): All lowercase with no delimiters: thisisflatcase. */
// static readonly FlatCase extends StringDomain.extend(StringDomain, isFlatCase) { }
/** Hashed: A file name generated using a hash function, often used to represent the content of the file, e.g., d41d8cd98f00b204e9800998ecf8427e.txt. */
// export class Hashed extends StringDomain.extend(StringDomain, isHashed) { }
/** Hexadecimal: Uses hexadecimal notation for uniqueness or identification, e.g., 0x1a3f8b.png. */
// export class HexaDecimal extends StringDomain.extend(StringDomain, isHexadecimal) { }
/** 24 hours time format, e.g. 13:00 is 1:00 PM and 23:59 is 11:59 PM */
// export class IsoTime extends StringDomain.extend(StringDomain, isIsoTime) { }
/** Kebab Case: Words are joined with hyphens, and all letters are in lowercase, e.g., user-profile.jpg. */
var KebabCase = /** @class */ (function (_super) {
    __extends(KebabCase, _super);
    function KebabCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KebabCase;
}(StringClass.extend(StringClass, is_kebab_case_1.default)));
exports.KebabCase = KebabCase;
/** Lower Case: All letters are in lowercase, e.g., script.js. */
var LowerCase = /** @class */ (function (_super) {
    __extends(LowerCase, _super);
    function LowerCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LowerCase;
}(StringClass.extend(StringClass, is_lower_case_1.default)));
exports.LowerCase = LowerCase;
var Numeric = /** @class */ (function (_super) {
    __extends(Numeric, _super);
    function Numeric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Numeric;
}(StringClass.extend(StringClass, is_numeric_1.default)));
exports.Numeric = Numeric;
/** Pascal Case (PascalCase): Similar to camel case, but the first letter is also capitalized: ThisIsPascalCase. Often used for class names in many programming languages. */
var PascalCase = /** @class */ (function (_super) {
    __extends(PascalCase, _super);
    function PascalCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PascalCase;
}(StringClass.extend(StringClass, is_pascal_case_1.default)));
exports.PascalCase = PascalCase;
/** Sentence Case: "The quick brown fox jumps over the lazy dog." */
// export class SentenceCase = new StringDomain([$string, , $sentence$case], isSentenceCase) { }
/** Snake Case: Lowercase and separated by underscores e.g. user_name, read_file, error_list. */
var SnakeCase = /** @class */ (function (_super) {
    __extends(SnakeCase, _super);
    function SnakeCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SnakeCase;
}(StringClass.extend(StringClass, is_snake_case_1.default)));
exports.SnakeCase = SnakeCase;
/** Space Separated: Words are separated by spaces, often used for file names in more casual settings, e.g., my vacation photo.jpg. */
var SpaceSeparated = /** @class */ (function (_super) {
    __extends(SpaceSeparated, _super);
    function SpaceSeparated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SpaceSeparated;
}(StringClass.extend(StringClass, is_upper_case_1.default)));
exports.SpaceSeparated = SpaceSeparated;
/** Title Case: "The Quick Brown Fox Jumps Over the Lazy Dog" */
// export class TitleCase = new StringDomain([$string, , $title$case], isTitleCase) { }
/** Train Case: Similar to kebab case, but each word starts with an uppercase letter, e.g., User-Profile.jpg. */
// export class TrainCase = new StringDomain([$string, , $train$case], isTrainCase) { }
/** Upper Case: All letters are capitalized, e.g., IMAGE.PNG. */
var UpperCase = /** @class */ (function (_super) {
    __extends(UpperCase, _super);
    function UpperCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpperCase;
}(StringClass.extend(StringClass, is_upper_case_1.default)));
exports.UpperCase = UpperCase;
var field = [StringClass.name, [SpecType_string__length_1.$length, 5]];
