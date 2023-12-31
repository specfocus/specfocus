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
exports.I18nMiddleware = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const utils_1 = require("../utils");
const i18n_constants_1 = require("../i18n.constants");
const index_1 = require("../index");
const i18n_service_1 = require("../services/i18n.service");
const i18n_error_1 = require("../i18n.error");
const ExecutionContextMethodNotImplemented = new i18n_error_1.I18nError("Method not implemented. nestjs-i18n creates a fake Http context since it's using middleware to resolve your language. Nestjs middlewares don't have access to the ExecutionContext.");
let I18nMiddleware = class I18nMiddleware {
    constructor(i18nOptions, i18nResolvers, i18nService, moduleRef) {
        this.i18nOptions = i18nOptions;
        this.i18nResolvers = i18nResolvers;
        this.i18nService = i18nService;
        this.moduleRef = moduleRef;
    }
    async use(req, res, next) {
        let language = null;
        if (!!req.i18nLang) {
            return next();
        }
        req.i18nService = this.i18nService;
        for (const r of this.i18nResolvers) {
            const resolver = await this.getResolver(r);
            language = resolver.resolve(new MiddlewareHttpContext(req, res, next));
            if (language instanceof Promise) {
                language = await language;
            }
            if (language !== undefined) {
                break;
            }
        }
        req.i18nLang = language || this.i18nOptions.fallbackLanguage;
        if (req.app) {
            req.app.locals.i18nLang = req.i18nLang;
        }
        req.i18nContext = new index_1.I18nContext(req.i18nLang, this.i18nService);
        if (this.i18nOptions.skipAsyncHook) {
            next();
        }
        else {
            index_1.I18nContext.create(req.i18nContext, next);
        }
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
exports.I18nMiddleware = I18nMiddleware;
exports.I18nMiddleware = I18nMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(i18n_constants_1.I18N_OPTIONS)),
    __param(1, (0, common_1.Inject)(i18n_constants_1.I18N_RESOLVERS)),
    __metadata("design:paramtypes", [Object, Array, i18n_service_1.I18nService,
        core_1.ModuleRef])
], I18nMiddleware);
class MiddlewareHttpContext {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }
    getClass() {
        throw ExecutionContextMethodNotImplemented;
    }
    getHandler() {
        throw ExecutionContextMethodNotImplemented;
    }
    getArgs() {
        throw ExecutionContextMethodNotImplemented;
    }
    getArgByIndex() {
        throw ExecutionContextMethodNotImplemented;
    }
    switchToRpc() {
        throw ExecutionContextMethodNotImplemented;
    }
    switchToHttp() {
        return this;
    }
    switchToWs() {
        throw ExecutionContextMethodNotImplemented;
    }
    getType() {
        return 'http';
    }
    getRequest() {
        return this.req;
    }
    getResponse() {
        return this.res;
    }
    getNext() {
        return this.next;
    }
}
//# sourceMappingURL=i18n.middleware.js.map