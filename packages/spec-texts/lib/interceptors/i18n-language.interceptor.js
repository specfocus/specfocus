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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nLanguageInterceptor = void 0;
const common_1 = require("@nestjs/common");
const i18n_constants_1 = require("../i18n.constants");
const index_1 = require("../index");
const i18n_service_1 = require("../services/i18n.service");
const core_1 = require("@nestjs/core");
const utils_1 = require("../utils");
const rxjs_1 = require("rxjs");
let I18nLanguageInterceptor = class I18nLanguageInterceptor {
    constructor(i18nOptions, i18nResolvers, i18nService, moduleRef) {
        this.i18nOptions = i18nOptions;
        this.i18nResolvers = i18nResolvers;
        this.i18nService = i18nService;
        this.moduleRef = moduleRef;
    }
    async intercept(context, next) {
        const i18nContext = index_1.I18nContext.current();
        let language = null;
        const ctx = (0, utils_1.getContextObject)(context);
        if (ctx === undefined || !!ctx.i18nLang) {
            return next.handle();
        }
        ctx.i18nService = this.i18nService;
        for (const r of this.i18nResolvers) {
            const resolver = await this.getResolver(r);
            language = resolver.resolve(context);
            if (language instanceof Promise) {
                language = await language;
            }
            if (language !== undefined) {
                break;
            }
        }
        ctx.i18nLang = language || this.i18nOptions.fallbackLanguage;
        if (ctx.app && ctx.app.locals) {
            ctx.app.locals.i18nLang = ctx.i18nLang;
        }
        if (!i18nContext) {
            ctx.i18nContext = new index_1.I18nContext(ctx.i18nLang, this.i18nService);
            if (!this.i18nOptions.skipAsyncHook) {
                return new rxjs_1.Observable((observer) => {
                    index_1.I18nContext.createAsync(ctx.i18nContext, async (error) => {
                        if (error) {
                            throw error;
                        }
                        return next.handle().subscribe(observer);
                    });
                });
            }
        }
        return next.handle();
    }
    async getResolver(r) {
        if ((0, utils_1.shouldResolve)(r)) {
            if (r['use']) {
                const resolver = r;
                return this.moduleRef.get(resolver.use);
            }
            else {
                return this.moduleRef.get(r);
            }
        }
        else {
            return r;
        }
    }
};
exports.I18nLanguageInterceptor = I18nLanguageInterceptor;
exports.I18nLanguageInterceptor = I18nLanguageInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(i18n_constants_1.I18N_OPTIONS)),
    __param(1, (0, common_1.Inject)(i18n_constants_1.I18N_RESOLVERS)),
    __metadata("design:paramtypes", [Object, Array, i18n_service_1.I18nService,
        core_1.ModuleRef])
], I18nLanguageInterceptor);
//# sourceMappingURL=i18n-language.interceptor.js.map