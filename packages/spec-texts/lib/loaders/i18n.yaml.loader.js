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
exports.I18nYamlLoader = void 0;
const i18n_error_1 = require("../i18n.error");
const i18n_abstract_loader_1 = require("./i18n.abstract.loader");
const yaml = __importStar(require("js-yaml"));
class I18nYamlLoader extends i18n_abstract_loader_1.I18nAbstractLoader {
    getDefaultOptions() {
        return {
            filePattern: '*.yml',
            watch: false,
        };
    }
    formatData(data) {
        try {
            return yaml.load(data, { json: true });
        }
        catch (e) {
            if (e instanceof yaml.YAMLException) {
                throw new i18n_error_1.I18nError('Invalid YAML file. Please check your YAML syntax.');
            }
            throw e;
        }
    }
}
exports.I18nYamlLoader = I18nYamlLoader;
//# sourceMappingURL=i18n.yaml.loader.js.map