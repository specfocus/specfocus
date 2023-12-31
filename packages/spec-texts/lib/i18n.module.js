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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var I18nModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nModule = exports.logger = void 0;
const common_1 = require("@nestjs/common");
const i18n_constants_1 = require("./i18n.constants");
const i18n_service_1 = require("./services/i18n.service");
const i18n_language_interceptor_1 = require("./interceptors/i18n-language.interceptor");
const core_1 = require("@nestjs/core");
const decorators_1 = require("./decorators");
const utils_1 = require("./utils");
const i18n_loader_1 = require("./loaders/i18n.loader");
const rxjs_1 = require("rxjs");
const format = __importStar(require("string-format"));
const loaders_1 = require("./loaders");
const i18n_middleware_1 = require("./middlewares/i18n.middleware");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
exports.logger = new common_1.Logger('I18nService');
const defaultOptions = {
    resolvers: [],
    formatter: format,
    logging: true,
    throwOnMissingKey: false,
    loader: loaders_1.I18nJsonLoader,
};
let I18nModule = I18nModule_1 = class I18nModule {
    constructor(i18n, translations, i18nOptions, adapter) {
        this.i18n = i18n;
        this.translations = translations;
        this.i18nOptions = i18nOptions;
        this.adapter = adapter;
        this.unsubscribe = new rxjs_1.Subject();
    }
    async onModuleInit() {
        await this.i18n.refresh();
        if (this.i18nOptions.viewEngine == 'hbs') {
            try {
                const hbs = await Promise.resolve().then(() => __importStar(require('hbs')));
                hbs.registerHelper('t', this.i18n.hbsHelper);
                exports.logger.log('Handlebars helper registered');
            }
            catch (e) {
                exports.logger.error('hbs module failed to load', e);
            }
        }
        if (['pug', 'ejs'].includes(this.i18nOptions.viewEngine)) {
            const app = this.adapter.httpAdapter.getInstance();
            app.locals['t'] = (key, lang, args) => {
                return this.i18n.t(key, { lang, args });
            };
        }
        if (!!this.i18nOptions.typesOutputPath) {
            try {
                const ts = await Promise.resolve().then(() => __importStar(require('./utils/typescript')));
                this.translations
                    .pipe((0, rxjs_1.takeUntil)(this.unsubscribe))
                    .subscribe(async (t) => {
                    exports.logger.log('Checking translation changes');
                    const object = Object.keys(t).reduce((result, key) => (0, utils_1.mergeDeep)(result, t[key]), {});
                    const rawContent = await ts.createTypesFile(object);
                    if (!rawContent) {
                        return;
                    }
                    const outputFile = ts.annotateSourceCode(rawContent);
                    fs.mkdirSync(path.dirname(this.i18nOptions.typesOutputPath), {
                        recursive: true,
                    });
                    let currentFileContent = null;
                    try {
                        currentFileContent = fs.readFileSync(this.i18nOptions.typesOutputPath, 'utf8');
                    }
                    catch (err) {
                        exports.logger.error(err);
                    }
                    if (currentFileContent != outputFile) {
                        fs.writeFileSync(this.i18nOptions.typesOutputPath, outputFile);
                        exports.logger.log(`Types generated in: ${this.i18nOptions.typesOutputPath}.
                Please also add it to your eslintignore file to avoid linting errors
                `);
                    }
                    else {
                        exports.logger.log('No changes detected');
                    }
                });
            }
            catch (_) {
            }
        }
    }
    onModuleDestroy() {
        this.unsubscribe.complete();
    }
    configure(consumer) {
        if (this.i18nOptions.disableMiddleware)
            return;
        consumer
            .apply(i18n_middleware_1.I18nMiddleware)
            .forRoutes((0, utils_1.isNestMiddleware)(consumer) && (0, utils_1.usingFastify)(consumer) ? '(.*)' : '*');
    }
    static forRoot(options) {
        options = this.sanitizeI18nOptions(options);
        const i18nLanguagesSubject = new rxjs_1.BehaviorSubject([]);
        const i18nTranslationSubject = new rxjs_1.BehaviorSubject({});
        const i18nOptions = {
            provide: i18n_constants_1.I18N_OPTIONS,
            useValue: options,
        };
        const i18nLoaderProvider = {
            provide: i18n_loader_1.I18nLoader,
            useClass: options.loader,
        };
        const i18nLoaderOptionsProvider = {
            provide: i18n_constants_1.I18N_LOADER_OPTIONS,
            useValue: options.loaderOptions,
        };
        const i18nLanguagesSubjectProvider = {
            provide: i18n_constants_1.I18N_LANGUAGES_SUBJECT,
            useValue: i18nLanguagesSubject,
        };
        const i18nTranslationSubjectProvider = {
            provide: i18n_constants_1.I18N_TRANSLATIONS_SUBJECT,
            useValue: i18nTranslationSubject,
        };
        const translationsProvider = {
            provide: i18n_constants_1.I18N_TRANSLATIONS,
            useFactory: async (loader) => {
                try {
                    const translation = await loader.load();
                    if (translation instanceof rxjs_1.Observable) {
                        translation.subscribe(i18nTranslationSubject);
                    }
                    else {
                        i18nTranslationSubject.next(translation);
                    }
                }
                catch (e) {
                    exports.logger.error('parsing translation error', e);
                }
                return i18nTranslationSubject.asObservable();
            },
            inject: [i18n_loader_1.I18nLoader],
        };
        const languagesProvider = {
            provide: i18n_constants_1.I18N_LANGUAGES,
            useFactory: async (loader) => {
                try {
                    const languages = await loader.languages();
                    if (languages instanceof rxjs_1.Observable) {
                        languages.subscribe(i18nLanguagesSubject);
                    }
                    else {
                        i18nLanguagesSubject.next(languages);
                    }
                }
                catch (e) {
                    exports.logger.error('parsing translation error', e);
                }
                return i18nLanguagesSubject.asObservable();
            },
            inject: [i18n_loader_1.I18nLoader],
        };
        const resolversProvider = {
            provide: i18n_constants_1.I18N_RESOLVERS,
            useValue: options.resolvers || [],
        };
        return {
            module: I18nModule_1,
            providers: [
                { provide: common_1.Logger, useValue: exports.logger },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: i18n_language_interceptor_1.I18nLanguageInterceptor,
                },
                i18n_service_1.I18nService,
                i18nOptions,
                translationsProvider,
                languagesProvider,
                resolversProvider,
                i18nLoaderProvider,
                i18nLoaderOptionsProvider,
                i18nLanguagesSubjectProvider,
                i18nTranslationSubjectProvider,
                ...this.createResolverProviders(options.resolvers),
            ],
            exports: [i18n_constants_1.I18N_OPTIONS, i18n_constants_1.I18N_RESOLVERS, i18n_service_1.I18nService, languagesProvider],
        };
    }
    static forRootAsync(options) {
        options = this.sanitizeI18nOptions(options);
        const asyncOptionsProvider = this.createAsyncOptionsProvider(options);
        const asyncTranslationProvider = this.createAsyncTranslationProvider();
        const asyncLanguagesProvider = this.createAsyncLanguagesProvider();
        const asyncLoaderOptionsProvider = this.createAsyncLoaderOptionsProvider();
        const i18nLanguagesSubject = new rxjs_1.BehaviorSubject([]);
        const i18nTranslationSubject = new rxjs_1.BehaviorSubject({});
        const resolversProvider = {
            provide: i18n_constants_1.I18N_RESOLVERS,
            useValue: options.resolvers || [],
        };
        const i18nLoaderProvider = {
            provide: i18n_loader_1.I18nLoader,
            useClass: options.loader,
        };
        const i18nLanguagesSubjectProvider = {
            provide: i18n_constants_1.I18N_LANGUAGES_SUBJECT,
            useValue: i18nLanguagesSubject,
        };
        const i18nTranslationSubjectProvider = {
            provide: i18n_constants_1.I18N_TRANSLATIONS_SUBJECT,
            useValue: i18nTranslationSubject,
        };
        return {
            module: I18nModule_1,
            imports: options.imports || [],
            providers: [
                { provide: common_1.Logger, useValue: exports.logger },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: i18n_language_interceptor_1.I18nLanguageInterceptor,
                },
                asyncOptionsProvider,
                asyncTranslationProvider,
                asyncLanguagesProvider,
                asyncLoaderOptionsProvider,
                i18n_service_1.I18nService,
                resolversProvider,
                i18nLoaderProvider,
                i18nLanguagesSubjectProvider,
                i18nTranslationSubjectProvider,
                ...this.createResolverProviders(options.resolvers),
            ],
            exports: [
                i18n_constants_1.I18N_OPTIONS,
                i18n_constants_1.I18N_RESOLVERS,
                i18n_service_1.I18nService,
                asyncLanguagesProvider,
            ],
        };
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: i18n_constants_1.I18N_OPTIONS,
                useFactory: async (...args) => {
                    return this.sanitizeI18nOptions((await options.useFactory(...args)));
                },
                inject: options.inject || [],
            };
        }
        return {
            provide: i18n_constants_1.I18N_OPTIONS,
            useFactory: async (optionsFactory) => this.sanitizeI18nOptions((await optionsFactory.createI18nOptions())),
            inject: [options.useClass || options.useExisting],
        };
    }
    static createAsyncLoaderOptionsProvider() {
        return {
            provide: i18n_constants_1.I18N_LOADER_OPTIONS,
            useFactory: async (options) => {
                return this.sanitizeI18nOptions(options.loaderOptions);
            },
            inject: [i18n_constants_1.I18N_OPTIONS],
        };
    }
    static createAsyncTranslationProvider() {
        return {
            provide: i18n_constants_1.I18N_TRANSLATIONS,
            useFactory: async (loader, translationsSubject) => {
                try {
                    const translation = await loader.load();
                    if (translation instanceof rxjs_1.Observable) {
                        translation.subscribe(translationsSubject);
                    }
                    else {
                        translationsSubject.next(translation);
                    }
                }
                catch (e) {
                    exports.logger.error('parsing translation error', e);
                }
                return translationsSubject.asObservable();
            },
            inject: [i18n_loader_1.I18nLoader, i18n_constants_1.I18N_TRANSLATIONS_SUBJECT],
        };
    }
    static createAsyncLanguagesProvider() {
        return {
            provide: i18n_constants_1.I18N_LANGUAGES,
            useFactory: async (loader, languagesSubject) => {
                try {
                    const languages = await loader.languages();
                    if (languages instanceof rxjs_1.Observable) {
                        languages.subscribe(languagesSubject);
                    }
                    else {
                        languagesSubject.next(languages);
                    }
                }
                catch (e) {
                    exports.logger.error('parsing translation error', e);
                }
                return languagesSubject.asObservable();
            },
            inject: [i18n_loader_1.I18nLoader, i18n_constants_1.I18N_LANGUAGES_SUBJECT],
        };
    }
    static sanitizeI18nOptions(options) {
        options = { ...defaultOptions, ...options };
        return options;
    }
    static createResolverProviders(resolvers) {
        if (!resolvers || resolvers.length === 0) {
            exports.logger.error(`No resolvers provided! nestjs-i18n won't work properly, please follow the quick-start guide: https://nestjs-i18n.com/quick-start`);
        }
        return (resolvers || [])
            .filter(utils_1.shouldResolve)
            .reduce((providers, r) => {
            if (r['use']) {
                const { use: resolver, options, ...rest } = r;
                const optionsToken = (0, decorators_1.getI18nResolverOptionsToken)(resolver);
                providers.push({
                    provide: resolver,
                    useClass: resolver,
                });
                if (options) {
                    rest.useValue = options;
                }
                providers.push({
                    provide: optionsToken,
                    ...rest,
                });
            }
            else {
                const optionsToken = (0, decorators_1.getI18nResolverOptionsToken)(r);
                providers.push({
                    provide: r,
                    useClass: r,
                    inject: [optionsToken],
                });
                providers.push({
                    provide: optionsToken,
                    useFactory: () => undefined,
                });
            }
            return providers;
        }, []);
    }
};
exports.I18nModule = I18nModule;
exports.I18nModule = I18nModule = I18nModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({}),
    __param(1, (0, common_1.Inject)(i18n_constants_1.I18N_TRANSLATIONS)),
    __param(2, (0, common_1.Inject)(i18n_constants_1.I18N_OPTIONS)),
    __metadata("design:paramtypes", [i18n_service_1.I18nService,
        rxjs_1.Observable, Object, core_1.HttpAdapterHost])
], I18nModule);
//# sourceMappingURL=i18n.module.js.map