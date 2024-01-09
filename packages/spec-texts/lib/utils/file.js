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
exports.getFiles = exports.getDirectories = exports.isDirectory = exports.filterAsync = exports.mapAsync = exports.exists = void 0;
const promises_1 = require("fs/promises");
const path = __importStar(require("path"));
const exists = async (path) => {
    return !!(await (0, promises_1.stat)(path));
};
exports.exists = exists;
function mapAsync(array, callbackfn) {
    return Promise.all(array.map(callbackfn));
}
exports.mapAsync = mapAsync;
async function filterAsync(array, callbackfn) {
    const filterMap = await mapAsync(array, callbackfn);
    return array.filter((_, index) => filterMap[index]);
}
exports.filterAsync = filterAsync;
const isDirectory = async (source) => (await (0, promises_1.lstat)(source)).isDirectory();
exports.isDirectory = isDirectory;
const getDirectories = async (source) => {
    const dirs = await (0, promises_1.readdir)(source);
    return filterAsync(dirs.map((name) => path.join(source, name)), exports.isDirectory);
};
exports.getDirectories = getDirectories;
const getFiles = async (dirPath, pattern, includeSubfolders) => {
    const dirs = await (0, promises_1.readdir)(dirPath, {
        withFileTypes: true,
    });
    const files = [];
    const deepFiles = [];
    for (const f of dirs) {
        try {
            if (typeof f === 'string') {
                if ((await (0, exports.exists)(path.join(dirPath, f))) && pattern.test(f)) {
                    files.push(f);
                }
            }
            else if (f.isFile() && pattern.test(f.name)) {
                files.push(f);
            }
            else if (includeSubfolders && f.isDirectory()) {
                deepFiles.push(...(await (0, exports.getFiles)(path.join(dirPath, f.name), pattern, includeSubfolders)));
            }
        }
        catch {
            continue;
        }
    }
    return files
        .map((f) => path.join(dirPath, typeof f === 'string' ? f : f.name))
        .concat(deepFiles);
};
exports.getFiles = getFiles;
//# sourceMappingURL=file.js.map