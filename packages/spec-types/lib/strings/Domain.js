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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain = exports.prototype = exports.$sld$tld = exports.$tld = exports.$sld = exports.$domain = void 0;
var comparisons_1 = require("../comparisons");
var SpecType_string__length_1 = require("../prototypes/SpecType.string.$length");
var SpecType_string_class_1 = require("../prototypes/SpecType.string.class");
var verifications_1 = require("../verifications");
exports.$domain = '$domain';
/** Second-level domain (SLD): This is the readable part of the address, often representing the name of the company, organization, or the topic of the website. For example, in "google.com", "google" is the SLD. */
exports.$sld = '$sld';
/** Top-level domain (TLD): This is the last segment of the domain name, coming after the last dot. Examples include ".com", ".org", ".net", and ".gov". There are also country-code top-level domains (ccTLDs) like ".uk" for the United Kingdom or ".ca" for Canada. */
exports.$tld = '$tld';
exports.$sld$tld = '$sld$tld';
exports.prototype = ['string', [SpecType_string__length_1.$length, [verifications_1.$and, [comparisons_1.$gte, 5], [comparisons_1.$lte, 100]]]];
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    function Domain(tag, $default) {
        var _this = _super.call(this) || this;
        _this.tag = tag;
        _this.prototype = ['string', [SpecType_string__length_1.$length, [verifications_1.$and, [comparisons_1.$gte, 5], [comparisons_1.$lte, 100]]]];
        return _this;
    }
    Domain.$sld = new Domain(exports.$sld, 'domain');
    Domain.$tld = new Domain(exports.$tld, '.org');
    Domain.$sld$tld = new Domain(exports.$sld$tld, 'domain.org');
    return Domain;
}(SpecType_string_class_1.StringClass.extend(SpecType_string_class_1.StringClass, function () { return true; })));
exports.Domain = Domain;
exports.default = exports.prototype;
