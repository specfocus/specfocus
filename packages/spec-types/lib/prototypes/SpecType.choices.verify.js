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
var has_object_type_1 = __importDefault(require("../types/has-object-type"));
var is_array_1 = __importDefault(require("../types/is-array"));
var verifyChoices = function (val, spec, error) {
    if (!(0, has_object_type_1.default)(spec) || !(0, is_array_1.default)(spec) || spec.length < 2 || spec[0] !== 'choices')
        return;
    if (spec.some(function (choice, index) {
        if (index === 0)
            return;
        if (choice === val)
            return true;
        if ((0, is_array_1.default)(choice)) {
            var _a = __read(choice, 1), choiceName = _a[0];
            if (choiceName === val)
                return true;
        }
    }))
        return true;
    error("Value '".concat(val, "' is not one of the ").concat(spec.length - 1, " choices"));
    return false;
};
exports.default = verifyChoices;
