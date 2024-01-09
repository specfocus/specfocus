"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.suspense = exports.lazy = void 0;
var lazy_1 = require("./lazy");
Object.defineProperty(exports, "lazy", { enumerable: true, get: function () { return __importDefault(lazy_1).default; } });
var suspense_1 = require("./suspense");
Object.defineProperty(exports, "suspense", { enumerable: true, get: function () { return __importDefault(suspense_1).default; } });
