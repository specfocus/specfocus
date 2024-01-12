"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parse decimals like "1,000,000.00"
 * @param val - The string representation of the decimal
 * @returns Parsed `Decimal` object
 */
var parseDecimal = function (val) {
    var _a;
    var trimmedVal = val.trim();
    // Extract numeric part including optional negative sign, commas, and period
    var numericMatch = trimmedVal.match(/(-?[\d,]+(?:\.\d+)?)/);
    var numericPartWithoutCommas = numericMatch ? numericMatch[0].replace(/,/g, '') : '0';
    // Convert to number
    var pureNumber = parseFloat(numericPartWithoutCommas);
    // Count total digits and digits after the decimal point
    var digitCount = numericPartWithoutCommas.replace(/-|\./g, '').length;
    var scale = numericPartWithoutCommas.includes('.') ? numericPartWithoutCommas.split('.')[1].length : 0;
    if (numericMatch === null) {
        return {
            value: NaN,
            precision: 0,
            scale: 0
        };
    }
    // Extract prefix and suffix
    var prefix = trimmedVal.split(numericMatch[0])[0].trim();
    var suffix = (_a = trimmedVal.split(numericMatch[0])[1]) === null || _a === void 0 ? void 0 : _a.trim();
    var value = pureNumber;
    if (prefix.startsWith('-')) {
        // Adjust prefix to include the negative sign if it's in the "-$100" format
        prefix = prefix.substring(1);
        value = -pureNumber;
    }
    return {
        value: value,
        precision: digitCount,
        scale: scale,
        prefix: prefix || undefined,
        suffix: suffix || undefined
    };
};
exports.default = parseDecimal;
