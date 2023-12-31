import { ArgumentsHost, ExceptionFilter, ValidationError } from "@nestjs/common";
import { I18nValidationError, I18nValidationExceptionFilterDetailedErrorsOption, I18nValidationExceptionFilterErrorFormatterOption, I18nValidationException } from "../interfaces";
type I18nValidationExceptionFilterOptions = I18nValidationExceptionFilterDetailedErrorsOption | I18nValidationExceptionFilterErrorFormatterOption;
export declare class I18nValidationExceptionFilter implements ExceptionFilter {
    private readonly options;
    constructor(options?: I18nValidationExceptionFilterOptions);
    catch(exception: I18nValidationException, host: ArgumentsHost): I18nValidationException;
    private isWithErrorFormatter;
    protected normalizeValidationErrors(validationErrors: ValidationError[]): string[] | I18nValidationError[] | object;
    protected flattenValidationErrors(validationErrors: ValidationError[]): string[];
    protected buildResponseBody(host: ArgumentsHost, exc: I18nValidationException, errors: string[] | I18nValidationError[] | object): Record<string, unknown>;
}
export {};
