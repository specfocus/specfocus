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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolver = void 0;
var Container_1 = __importDefault(require("./Container"));
var ns_1 = __importStar(require("./ns"));
var Resolver = /** @class */ (function (_super) {
    __extends(Resolver, _super);
    function Resolver(namespace) {
        if (namespace === void 0) { namespace = ns_1.default; }
        var _this = _super.call(this, namespace) || this;
        _this.add = function (ns, className, container) { return _this.service.add(ns, className, container); };
        _this.lazy = function (moniker, ctor) { return _this.service.lazy(moniker, ctor); };
        _this.resolve = function (moniker) { return _this.service.get(moniker); };
        return _this;
    }
    Resolver.merge = function (prefix, nodes) {
        if (nodes === void 0) { nodes = new Map(); }
        var resolver = new Resolver(new ns_1.Namespace(nodes));
        return resolver;
    };
    return Resolver;
}(Container_1.default));
exports.Resolver = Resolver;
var root = new Resolver();
exports.default = root;
