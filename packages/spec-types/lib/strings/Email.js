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
exports.Email = void 0;
var SpecType_string_class_1 = require("../prototypes/SpecType.string.class");
var Email = /** @class */ (function (_super) {
    __extends(Email, _super);
    function Email() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Email;
}(SpecType_string_class_1.StringClass.extend(SpecType_string_class_1.StringClass, function () { return true; })));
exports.Email = Email;