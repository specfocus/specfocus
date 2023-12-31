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
exports.I18nService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
const i18n_constants_1 = require("../i18n.constants");
const i18n_loader_1 = require("../loaders/i18n.loader");
const utils_1 = require("../utils");
const i18n_error_1 = require("../i18n.error");
const pluralKeys = ['zero', 'one', 'two', 'few', 'many', 'other'];
let I18nService = class I18nService {
    constructor(i18nOptions, translations, supportedLanguages, logger, loader, languagesSubject, translationsSubject) {
        this.i18nOptions = i18nOptions;
        this.logger = logger;
        this.loader = loader;
        this.languagesSubject = languagesSubject;
        this.translationsSubject = translationsSubject;
        this.pluralRules = new Map();
        this.unsubscribe = new rxjs_1.Subject();
        this.hbsHelper = (key, args, options) => {
            if (!options) {
                options = args;
            }
            const lang = options.lookupProperty(options.data.root, 'i18nLang');
            return this.t(key, { lang, args });
        };
        supportedLanguages
            .pipe((0, rxjs_1.takeUntil)(this.unsubscribe))
            .subscribe((languages) => {
            this.supportedLanguages = languages;
        });
        translations.pipe((0, rxjs_1.takeUntil)(this.unsubscribe)).subscribe((t) => {
            this.translations = t;
        });
    }
    onModuleDestroy() {
        this.unsubscribe.next(null);
        this.unsubscribe.complete();
    }
    translate(key, options) {
        options = {
            lang: this.i18nOptions.fallbackLanguage,
            ...options,
        };
        const { defaultValue } = options;
        let { lang } = options;
        if (lang === 'debug') {
            return key;
        }
        const previousFallbackLang = lang;
        lang = lang ?? this.i18nOptions.fallbackLanguage;
        lang = this.resolveLanguage(lang);
        const translationsByLanguage = this.translations[lang];
        const translation = this.translateObject(key, (translationsByLanguage ?? key), lang, options, translationsByLanguage);
        if (translationsByLanguage == null || !translation) {
            const translationKeyMissing = `Translation "${key}" in "${lang}" does not exist.`;
            if (lang !== this.i18nOptions.fallbackLanguage || !!defaultValue) {
                if (this.i18nOptions.logging && this.i18nOptions.throwOnMissingKey) {
                    throw new i18n_error_1.I18nError(translationKeyMissing);
                }
                const nextFallbackLanguage = this.getFallbackLanguage(lang);
                if (previousFallbackLang !== nextFallbackLanguage) {
                    return this.translate(key, {
                        ...options,
                        lang: nextFallbackLanguage,
                    });
                }
            }
            this.logger.error(translationKeyMissing);
        }
        return (translation ?? key);
    }
    getFallbackLanguage(lang) {
        let regionSepIndex = -1;
        if (lang.includes('-')) {
            regionSepIndex = lang.lastIndexOf('-');
        }
        if (lang.includes('_')) {
            regionSepIndex = lang.lastIndexOf('_');
        }
        return regionSepIndex !== -1
            ? lang.slice(0, regionSepIndex)
            : this.i18nOptions.fallbackLanguage;
    }
    t(key, options) {
        return this.translate(key, options);
    }
    getSupportedLanguages() {
        return this.supportedLanguages;
    }
    getTranslations() {
        return this.translations;
    }
    async refresh(translations, languages) {
        if (!translations) {
            translations = await this.loader.load();
        }
        if (translations instanceof rxjs_1.Observable) {
            this.translationsSubject.next(await (0, rxjs_1.lastValueFrom)(translations.pipe((0, rxjs_1.take)(1))));
        }
        else {
            this.translationsSubject.next(translations);
        }
        if (!languages) {
            languages = await this.loader.languages();
        }
        if (languages instanceof rxjs_1.Observable) {
            this.languagesSubject.next(await (0, rxjs_1.lastValueFrom)(languages.pipe((0, rxjs_1.take)(1))));
        }
        else {
            this.languagesSubject.next(languages);
        }
    }
    translateObject(key, translations, lang, options, rootTranslations) {
        const keys = key.split('.');
        const [firstKey] = keys;
        const args = options?.args;
        if (keys.length > 1 && !translations[key]) {
            const newKey = keys.slice(1, keys.length).join('.');
            if (translations && translations[firstKey]) {
                return this.translateObject(newKey, translations[firstKey], lang, options, rootTranslations);
            }
        }
        let translation = translations[key] ?? options?.defaultValue;
        if (translation && (args || (args instanceof Array && args.length > 0))) {
            const pluralObject = this.getPluralObject(translation);
            if (pluralObject && args && args['count'] !== undefined) {
                const count = Number(args['count']);
                if (!this.pluralRules.has(lang)) {
                    this.pluralRules.set(lang, new Intl.PluralRules(lang));
                }
                const pluralRules = this.pluralRules.get(lang);
                const pluralCategory = pluralRules.select(count);
                if (count === 0 && pluralObject['zero']) {
                    translation = pluralObject['zero'];
                }
                else if (pluralObject[pluralCategory]) {
                    translation = pluralObject[pluralCategory];
                }
            }
            else if (translation instanceof Object) {
                const result = Object.keys(translation).reduce((obj, nestedKey) => {
                    return {
                        ...obj,
                        [nestedKey]: this.translateObject(nestedKey, translation, lang, options, rootTranslations),
                    };
                }, {});
                if (translation instanceof Array) {
                    return Object.values(result);
                }
                return result;
            }
            translation = this.i18nOptions.formatter(translation, ...(args instanceof Array ? args || [] : [args]));
            const nestedTranslations = this.getNestedTranslations(translation);
            if (nestedTranslations && nestedTranslations.length > 0) {
                let offset = 0;
                for (const nestedTranslation of nestedTranslations) {
                    const result = rootTranslations
                        ? this.translateObject(nestedTranslation.key, rootTranslations, lang, {
                            ...options,
                            args: { parent: options.args, ...nestedTranslation.args },
                        }) ?? ''
                        : '';
                    translation =
                        translation.substring(0, nestedTranslation.index - offset) +
                            result +
                            translation.substring(nestedTranslation.index + nestedTranslation.length - offset);
                    offset = offset + (nestedTranslation.length - result.length);
                }
            }
        }
        return translation;
    }
    resolveLanguage(lang) {
        if (this.i18nOptions.fallbacks && !this.supportedLanguages.includes(lang)) {
            const sanitizedLang = lang.includes('-')
                ? lang.substring(0, lang.indexOf('-')).concat('-*')
                : lang;
            for (const key in this.i18nOptions.fallbacks) {
                if (key === lang || key === sanitizedLang) {
                    lang = this.i18nOptions.fallbacks[key];
                    break;
                }
            }
        }
        return lang;
    }
    getPluralObject(translation) {
        for (const k of pluralKeys) {
            if (translation[k]) {
                return translation;
            }
        }
        return undefined;
    }
    getNestedTranslations(translation) {
        const list = [];
        const regex = /\$t\((.*?)(,(.*?))?\)/g;
        let result;
        while ((result = regex.exec(translation))) {
            let key = undefined;
            let args = {};
            let index = undefined;
            let length = undefined;
            if (result && result.length > 0) {
                key = result[1].trim();
                index = result.index;
                length = result[0].length;
                if (result.length >= 3 && result[3]) {
                    try {
                        args = JSON.parse(result[3]);
                    }
                    catch (e) {
                        this.logger.error(`Error while parsing JSON`, e);
                    }
                }
            }
            if (key) {
                list.push({ index, length, key, args });
            }
            result = undefined;
        }
        return list.length > 0 ? list : undefined;
    }
    async validate(value, options) {
        const errors = await (0, class_validator_1.validate)(value, this.i18nOptions.validatorOptions);
        return (0, utils_1.formatI18nErrors)(errors, this, options);
    }
};
exports.I18nService = I18nService;
exports.I18nService = I18nService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(i18n_constants_1.I18N_OPTIONS)),
    __param(1, (0, common_1.Inject)(i18n_constants_1.I18N_TRANSLATIONS)),
    __param(2, (0, common_1.Inject)(i18n_constants_1.I18N_LANGUAGES)),
    __param(5, (0, common_1.Inject)(i18n_constants_1.I18N_LANGUAGES_SUBJECT)),
    __param(6, (0, common_1.Inject)(i18n_constants_1.I18N_TRANSLATIONS_SUBJECT)),
    __metadata("design:paramtypes", [Object, rxjs_1.Observable,
        rxjs_1.Observable,
        common_1.Logger,
        i18n_loader_1.I18nLoader,
        rxjs_1.BehaviorSubject,
        rxjs_1.BehaviorSubject])
], I18nService);
//# sourceMappingURL=i18n.service.js.map