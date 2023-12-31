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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ns_1 = __importStar(require("./ns"));
var ContainerBase = /** @class */ (function () {
    function ContainerBase(service) {
        this.service = service;
    }
    ContainerBase.prototype.toString = function () {
        var _a;
        return (_a = this.moniker) !== null && _a !== void 0 ? _a : this.constructor.name;
    };
    ContainerBase.$$typeof = ns_1.CONTAINER_TYPE;
    ContainerBase.add = function (ns, className, container) { return ns_1.default.add(ns, className, container); };
    ContainerBase.extend = function (base, service, ns) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super.call(this, service) || this;
                ns_1.default.register("".concat(ns, "::").concat(base.name), _this.constructor);
                return _this;
            }
            return class_1;
        }(base));
    };
    ContainerBase.resolve = function (moniker) { return ns_1.default.get(moniker); };
    ContainerBase.lazy = function (moniker, ctor) { return ns_1.default.lazy(moniker, ctor); };
    return ContainerBase;
}());
exports.default = ContainerBase;
