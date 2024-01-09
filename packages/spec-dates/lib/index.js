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
exports.substract = exports.add = exports.isWeekday = exports.isWednesday = exports.isTuesday = exports.isThursday = exports.isSunday = exports.isSaturday = exports.isMonday = exports.isFriday = exports.fromDateTuple = exports.fromDateShape = exports.dateTupleOf = exports.dateShapeOf = exports.DayOfTheWeek = void 0;
var DateLike_1 = require("./DateLike");
Object.defineProperty(exports, "DayOfTheWeek", { enumerable: true, get: function () { return DateLike_1.DayOfTheWeek; } });
Object.defineProperty(exports, "dateShapeOf", { enumerable: true, get: function () { return DateLike_1.dateShapeOf; } });
Object.defineProperty(exports, "dateTupleOf", { enumerable: true, get: function () { return DateLike_1.dateTupleOf; } });
Object.defineProperty(exports, "fromDateShape", { enumerable: true, get: function () { return DateLike_1.fromDateShape; } });
Object.defineProperty(exports, "fromDateTuple", { enumerable: true, get: function () { return DateLike_1.fromDateTuple; } });
Object.defineProperty(exports, "isFriday", { enumerable: true, get: function () { return DateLike_1.isFriday; } });
Object.defineProperty(exports, "isMonday", { enumerable: true, get: function () { return DateLike_1.isMonday; } });
Object.defineProperty(exports, "isSaturday", { enumerable: true, get: function () { return DateLike_1.isSaturday; } });
Object.defineProperty(exports, "isSunday", { enumerable: true, get: function () { return DateLike_1.isSunday; } });
Object.defineProperty(exports, "isThursday", { enumerable: true, get: function () { return DateLike_1.isThursday; } });
Object.defineProperty(exports, "isTuesday", { enumerable: true, get: function () { return DateLike_1.isTuesday; } });
Object.defineProperty(exports, "isWednesday", { enumerable: true, get: function () { return DateLike_1.isWednesday; } });
Object.defineProperty(exports, "isWeekday", { enumerable: true, get: function () { return DateLike_1.isWeekday; } });
exports.add = __importStar(require("./add"));
exports.substract = __importStar(require("./substract"));
