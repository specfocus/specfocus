"use strict";
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
exports.years = exports.months = exports.minutes = exports.hours = exports.days = void 0;
var add = __importStar(require("./add"));
var days = function (DateTuple, amount) {
    if (amount === void 0) { amount = 1; }
    return add.days(DateTuple, -amount);
};
exports.days = days;
var hours = function (DateTuple, amount) {
    if (amount === void 0) { amount = 1; }
    return add.hours(DateTuple, -amount);
};
exports.hours = hours;
var minutes = function (DateTuple, amount) {
    if (amount === void 0) { amount = 1; }
    return add.minutes(DateTuple, -amount);
};
exports.minutes = minutes;
var months = function (DateTuple, amount) {
    if (amount === void 0) { amount = 1; }
    return add.months(DateTuple, -amount);
};
exports.months = months;
var years = function (DateTuple, amount) {
    if (amount === void 0) { amount = 1; }
    return add.years(DateTuple, -amount);
};
exports.years = years;
