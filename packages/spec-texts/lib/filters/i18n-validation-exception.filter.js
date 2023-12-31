"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nValidationExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const iterare_1 = __importDefault(require("iterare"));
const i18n_context_1 = require("../i18n.context");
const interfaces_1 = require("../interfaces");
const utils_1 = require("../utils");
let I18nValidationExceptionFilter = class I18nValidationExceptionFilter {
    constructor(options = {
        detailedErrors: true,
    }) {
        this.options = options;
    }
    catch(exception, host) {
        const i18n = i18n_context_1.I18nContext.current();
        const errors = (0, utils_1.formatI18nErrors)(exception.errors ?? [], i18n.service, {
            lang: i18n.lang,
        });
        const normalizedErrors = this.normalizeValidationErrors(errors);
        switch (host.getType()) {
            case 'http':
                const response = host.switchToHttp().getResponse();
                const responseBody = this.buildResponseBody(host, exception, normalizedErrors);
                response
                    .status(this.options.errorHttpStatusCode || exception.getStatus())
                    .send(responseBody);
                break;
            case 'graphql':
                exception.errors = normalizedErrors;
                return exception;
        }
    }
    isWithErrorFormatter(options) {
        return 'errorFormatter' in options;
    }
    normalizeValidationErrors(validationErrors) {
        if (this.isWithErrorFormatter(this.options) &&
            !('detailedErrors' in this.options))
            return this.options.errorFormatter(validationErrors);
        if (!this.isWithErrorFormatter(this.options) &&
            !this.options.detailedErrors)
            return this.flattenValidationErrors(validationErrors);
        return validationErrors;
    }
    flattenValidationErrors(validationErrors) {
        return (0, iterare_1.default)(validationErrors)
            .map((error) => (0, utils_1.mapChildrenToValidationErrors)(error))
            .flatten()
            .filter((item) => !!item.constraints)
            .map((item) => Object.values(item.constraints))
            .flatten()
            .toArray();
    }
    buildResponseBody(host, exc, errors) {
        if ('responseBodyFormatter' in this.options) {
            return this.options.responseBodyFormatter(host, exc, errors);
        }
        else {
            return {
                statusCode: this.options.errorHttpStatusCode === undefined
                    ? exc.getStatus()
                    : this.options.errorHttpStatusCode,
                message: exc.getResponse(),
                errors,
            };
        }
    }
};
exports.I18nValidationExceptionFilter = I18nValidationExceptionFilter;
exports.I18nValidationExceptionFilter = I18nValidationExceptionFilter = __decorate([
    (0, common_1.Catch)(interfaces_1.I18nValidationException),
    __metadata("design:paramtypes", [Object])
], I18nValidationExceptionFilter);
//# sourceMappingURL=i18n-validation-exception.filter.js.map