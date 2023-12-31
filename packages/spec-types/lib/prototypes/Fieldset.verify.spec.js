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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Velocity_1 = require("../decimals/measures/Velocity");
var Integer_1 = require("../numbers/Integer");
var Fieldset_verify_1 = __importStar(require("./Fieldset.verify"));
describe('verifyFieldset', function () {
    var errors = [];
    var error = function (msg) { return errors.push(msg); };
    beforeEach(function () {
        errors.length = 0;
    });
    var fieldset = {
        id: { $type: 'string', $exists: true, $nullable: false },
        name: { $type: 'string', $exists: true, $nullable: false, $spec: ['string', { $class: 'KebabKase', $length: { $gte: 8, $lte: 20 } }] },
        speed: { $type: 'string', $exists: false, $nullable: false, $spec: Velocity_1.Velocity },
        created: { $type: 'string', $exists: true, $nullable: false, $spec: ['string', { $class: 'IsoDateTime' }] },
        deleted: { $type: 'string', $exists: false, $nullable: false, $spec: ['string', { $class: 'IsoDateTime' }] },
        modified: { $type: 'string', $exists: false, $nullable: false, $spec: ['string', { $class: 'IsoDateTime' }] },
        published: { $type: 'number', $exists: true, $nullable: true, $spec: Integer_1.$Timestamp }
    };
    var document = {
        id: '123',
        name: 'user-profile',
        created: '2020-01-01T00:00:00.000Z',
        deleted: '2020-01-01T00:00:00.000Z',
        modified: '2020-01-01T00:00:00.000Z',
        published: 1696794188436
    };
    it('should pass', function () {
        expect(fieldset).toBeDefined();
        expect(document).toBeDefined();
    });
    it('should verify', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(document, fieldset, error)];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('verifyField', function () {
    var errors;
    var error = function (e) { return errors.push(e); };
    beforeEach(function () {
        errors = [];
    });
    it('should return undefined for non-object fields', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.verifyField)(42, 123, error)];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBeUndefined();
                    expect(errors).toHaveLength(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle $exists tag', function () { return __awaiter(void 0, void 0, void 0, function () {
        var field, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    field = { $type: 'number', $exists: true, $spec: ['number', { $gt: 0 }] };
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.verifyField)(42, field, error)];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle $nullable tag', function () { return __awaiter(void 0, void 0, void 0, function () {
        var field, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    field = { $type: 'array', $size: 1, $nullable: false, $elem: { $type: 'number' } };
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.verifyField)([7], field, error)];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0); // Assuming your verifyNullable adds an error
                    return [2 /*return*/];
            }
        });
    }); });
    // ... Add similar tests for $size, $type, and 'fieldset'
    /*
      it('should handle unknown tags', async () => {
        const field = { unknownTag: true };
        expect(await verifyField(42, field as any, error)).toBe(false);
        expect(errors).toEqual(['Unrecognized tag: unknownTag']);
      });
    */
    // ... Additional tests based on specific behaviors or edge cases
});
describe('verifyFieldset', function () {
    var errors;
    var error = function (e) { return errors.push(e); };
    beforeEach(function () {
        errors = [];
    });
    it('should return false for non-object shapes', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)('string', {}, error)];
                case 1:
                    _a.apply(void 0, [_d.sent()]).toBeFalsy();
                    _b = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(null, {}, error)];
                case 2:
                    _b.apply(void 0, [_d.sent()]).toBeFalsy();
                    _c = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)([], {}, error)];
                case 3:
                    _c.apply(void 0, [_d.sent()]).toBeFalsy();
                    expect(errors).toContain('Expected an object for fieldset verification but got string');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle $exists tag correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var shape, fieldset, _a, missingShape, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    shape = { key: 'value' };
                    fieldset = { key: { $type: 'string', $exists: true } };
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(shape, fieldset, error)];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0);
                    missingShape = {};
                    _b = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(missingShape, fieldset, error)];
                case 2:
                    _b.apply(void 0, [_c.sent()]).toBeFalsy();
                    expect(errors).toHaveLength(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle $nullable tag', function () { return __awaiter(void 0, void 0, void 0, function () {
        var shape, fieldset, _a, nonNullableShape, nonNullableFieldset, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    shape = { key: '' };
                    fieldset = { key: { $type: 'string', $nullable: true } };
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(shape, fieldset, error)];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0);
                    nonNullableShape = { key: 'value' };
                    nonNullableFieldset = { key: { $type: 'string', $nullable: false } };
                    _b = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(nonNullableShape, nonNullableFieldset, error)];
                case 2:
                    _b.apply(void 0, [_c.sent()]).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle $type tag', function () { return __awaiter(void 0, void 0, void 0, function () {
        var shape, fieldset, _a, invalidTypeShape, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    shape = { key: 'value' };
                    fieldset = { key: { $type: 'string' } };
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(shape, fieldset, error)];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0);
                    invalidTypeShape = { key: 123 };
                    _b = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(invalidTypeShape, fieldset, error)];
                case 2:
                    _b.apply(void 0, [_c.sent()]).toBeFalsy();
                    expect(errors).toEqual(['key::Expected 123 (number) to be of type string']);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle $size tag for arrays', function () { return __awaiter(void 0, void 0, void 0, function () {
        var shape, fieldset, _a, invalidSizeShape, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    shape = { key: [1, 2, 3] };
                    fieldset = { key: { $type: 'array', $elem: { $type: 'number' }, $size: 3 } };
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(shape, fieldset, error)];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0);
                    invalidSizeShape = { key: [1, 2] };
                    _b = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(invalidSizeShape, fieldset, error)];
                case 2:
                    _b.apply(void 0, [_c.sent()]).toBeFalsy();
                    return [2 /*return*/];
            }
        });
    }); });
    /*
      it('should handle unrecognized tags', async () => {
        const shape = { key: 'value' };
        const fieldset = { key: { $type: 'string', unrecognizedTag: true } } as any;
        expect(await verifyFieldset(shape, fieldset, error)).toBeFalsy();
        expect(errors).toEqual(['key::Unrecognized tag: unrecognizedTag']);
      });
    */
    it('should handle nested fieldsets', function () { return __awaiter(void 0, void 0, void 0, function () {
        var shape, fieldset, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    shape = {
                        user: {
                            name: 'John',
                            age: 30
                        }
                    };
                    fieldset = {
                        user: {
                            $exists: true,
                            $nullable: false,
                            $type: {
                                name: { $type: 'string' },
                                age: { $type: 'number' }
                            }
                        }
                    };
                    _a = expect;
                    return [4 /*yield*/, (0, Fieldset_verify_1.default)(shape, fieldset, error)];
                case 1:
                    _a.apply(void 0, [_b.sent()]).toBeTruthy();
                    expect(errors).toHaveLength(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
