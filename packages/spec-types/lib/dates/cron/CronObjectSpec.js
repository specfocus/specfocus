"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCronInterval = exports.isCronRangeSpec = exports.isCronValueSpec = exports.isCronParametricSpec = exports.isCronBinarySpec = exports.isCronUnarySpec = exports.isCronVariableSpec = exports.isCronConstantSpec = exports.cronBinarySpec = exports.cronUnarySpec = exports.cronVariableSpec = exports.CRON_INTERVAL = exports.CRON_RANGE = exports.CRON_VALUE = void 0;
var is_non_negative_integer_1 = __importDefault(require("../../numbers/is-non-negative-integer"));
var is_positive_integer_1 = __importDefault(require("../../numbers/is-positive-integer"));
var is_valid_number_1 = __importDefault(require("../../numbers/is-valid-number"));
exports.CRON_VALUE = 'v';
exports.CRON_RANGE = 'r';
exports.CRON_INTERVAL = 'i';
var cronVariableSpec = function (type) { return type; };
exports.cronVariableSpec = cronVariableSpec;
var cronUnarySpec = function (type, primary) { return [type, primary]; };
exports.cronUnarySpec = cronUnarySpec;
var cronBinarySpec = function (type, primary, secondary) { return [type, primary, secondary]; };
exports.cronBinarySpec = cronBinarySpec;
var isCronConstantSpec = function (spec) { return (0, is_valid_number_1.default)(spec) && (0, is_non_negative_integer_1.default)(spec); };
exports.isCronConstantSpec = isCronConstantSpec;
var isCronVariableSpec = function (spec) { return typeof spec === 'string'; };
exports.isCronVariableSpec = isCronVariableSpec;
var isCronUnarySpec = function (spec) {
    return Array.isArray(spec) && spec.length === 2 &&
        typeof spec[0] === 'string' && [exports.CRON_RANGE, exports.CRON_INTERVAL].includes(spec[0]) &&
        (0, is_non_negative_integer_1.default)(spec[1]);
};
exports.isCronUnarySpec = isCronUnarySpec;
var isCronBinarySpec = function (spec) {
    return Array.isArray(spec) && spec.length === 3 &&
        typeof spec[0] === 'string' && [exports.CRON_RANGE, exports.CRON_INTERVAL].includes(spec[0]) &&
        (0, is_non_negative_integer_1.default)(spec[1] && (0, is_positive_integer_1.default)(spec[2]));
};
exports.isCronBinarySpec = isCronBinarySpec;
var isCronParametricSpec = function (spec) { return (0, exports.isCronUnarySpec)(spec) || (0, exports.isCronBinarySpec)(spec); };
exports.isCronParametricSpec = isCronParametricSpec;
var isCronValueSpec = function (spec) { return (0, exports.isCronConstantSpec)(spec) || (0, exports.isCronVariableSpec)(spec) || (0, exports.isCronParametricSpec)(spec); };
exports.isCronValueSpec = isCronValueSpec;
var isCronRangeSpec = function (spec) {
    return Array.isArray(spec) &&
        spec.length === 3 &&
        exports.CRON_RANGE === spec[0];
};
exports.isCronRangeSpec = isCronRangeSpec;
var isCronInterval = function (obj) {
    return Array.isArray(obj) &&
        obj.length == 3 &&
        exports.CRON_INTERVAL === obj[0];
};
exports.isCronInterval = isCronInterval;
