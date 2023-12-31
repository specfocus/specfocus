import { DynamicModule, Logger, MiddlewareConsumer, OnModuleDestroy } from "@nestjs/common";
import { I18nService } from "./services/i18n.service";
import { I18nAsyncOptions, I18nOptions } from "./interfaces/i18n-options.interface";
import { OnModuleInit, NestModule } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { I18nTranslation } from "./interfaces/i18n-translation.interface";
import { Observable } from "rxjs";
export declare const logger: Logger;
export declare class I18nModule implements OnModuleInit, OnModuleDestroy, NestModule {
    private readonly i18n;
    private translations;
    private readonly i18nOptions;
    private adapter;
    private unsubscribe;
    constructor(i18n: I18nService, translations: Observable<I18nTranslation>, i18nOptions: I18nOptions, adapter: HttpAdapterHost);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): void;
    configure(consumer: MiddlewareConsumer): void;
    static forRoot(options: I18nOptions): DynamicModule;
    static forRootAsync(options: I18nAsyncOptions): DynamicModule;
    private static createAsyncOptionsProvider;
    private static createAsyncLoaderOptionsProvider;
    private static createAsyncTranslationProvider;
    private static createAsyncLanguagesProvider;
    private static sanitizeI18nOptions;
    private static createResolverProviders;
}
