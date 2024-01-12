"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("../container");
var path_1 = __importDefault(require("path"));
/*
jest.mock('path', () => ({
    resolve: jest.fn((...paths) => path.resolve(...paths)), // Mock path.resolve
}));
*/
describe('ModuleEntriesContainer', function () {
    var rootModulePath = path_1.default.resolve(__dirname, '../texts');
    beforeEach(function () {
        jest.clearAllMocks();
    });
    it('should cache and return root entries', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, rootEntries, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    container = new container_1.ModuleEntriesContainer(rootModulePath);
                    return [4 /*yield*/, container.getRoot()];
                case 1:
                    rootEntries = _b.sent();
                    expect(Array.isArray(rootEntries)).toBe(true);
                    expect(rootEntries.length).toBe(3);
                    expect(rootEntries.map(function (_a) {
                        var _b = __read(_a, 1), key = _b[0];
                        return key;
                    })).toEqual(['en', 'fr', 'es']);
                    // return cached value
                    _a = expect;
                    return [4 /*yield*/, container.getRoot()];
                case 2:
                    // return cached value
                    _a.apply(void 0, [_b.sent()]).toBe(rootEntries);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should cache and return "en" entries', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, enEntries, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    container = new container_1.ModuleEntriesContainer(rootModulePath);
                    return [4 /*yield*/, container.get('en')];
                case 1:
                    enEntries = _b.sent();
                    expect(Array.isArray(enEntries)).toBe(true);
                    expect(enEntries.length).toBe(1);
                    expect(enEntries).toEqual([['hello', 'Hello']]);
                    console.log(enEntries);
                    // return cached value
                    _a = expect;
                    return [4 /*yield*/, container.get('en')];
                case 2:
                    // return cached value
                    _a.apply(void 0, [_b.sent()]).toBe(enEntries);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should cache and return "fr" entries', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, frEntries, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    container = new container_1.ModuleEntriesContainer(rootModulePath);
                    return [4 /*yield*/, container.get('fr')];
                case 1:
                    frEntries = _b.sent();
                    expect(Array.isArray(frEntries)).toBe(true);
                    expect(frEntries.length).toBe(1);
                    expect(frEntries).toEqual([['hello', 'Bonjour']]);
                    console.log(frEntries);
                    // return cached value
                    _a = expect;
                    return [4 /*yield*/, container.get('fr')];
                case 2:
                    // return cached value
                    _a.apply(void 0, [_b.sent()]).toBe(frEntries);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should cache and return "es" entries', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, esEntries, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    container = new container_1.ModuleEntriesContainer(rootModulePath);
                    return [4 /*yield*/, container.get('es')];
                case 1:
                    esEntries = _b.sent();
                    expect(Array.isArray(esEntries)).toBe(true);
                    expect(esEntries.length).toBe(1);
                    expect(esEntries).toEqual([['hello', 'Hola']]);
                    console.log(esEntries);
                    // return cached value
                    _a = expect;
                    return [4 /*yield*/, container.get('es')];
                case 2:
                    // return cached value
                    _a.apply(void 0, [_b.sent()]).toBe(esEntries);
                    return [2 /*return*/];
            }
        });
    }); });
    /*
    it('should throw error when root module does not export default', async () => {
        jest.resetModules();
        jest.doMock(rootModulePath, () => ({}), { virtual: true });

        const container = new ModuleEntriesContainer(rootModulePath);
        await expect(container.getRoot()).rejects.toThrow(/does not export a default value/);
    });

    it('should resolve entries for a given moniker', async () => {
        // Assuming a specific moniker and its resolution logic
        const moniker = 'key1';
        const container = new ModuleEntriesContainer(path.resolve(rootModulePath, './deep'));
        const entries = await container.get(moniker);

        expect(entries).toBeDefined();
        // Additional assertions based on the expected structure of your entries
    });*/
});
