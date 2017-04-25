import allErrors from './allErrors';
import { IError } from './IError';
import {
    IEmailValidation,
    IStringValidation,
    IValidateContext,
    IValidateResult
} from './IValidate';

export function validateString(propValidation: IStringValidation): IValidateResult<IStringValidation, string> {
    function validate(context: IValidateContext<string>): IValidateContext<string> {

        if (context.errors == null)
            context.errors = [];

        if (propValidation.required && (context.data == null || context.data.length === 0)) {
            context.errors.push({
                propName: context.propName,
                errorMsg: propValidation.requiredError || allErrors.REQUIRED
            });
            return context;
        }

        if (context.data == null)
            return context;

        if (context.data.length < propValidation.minLength)
            context.errors.push({
                propName: context.propName,
                errorMsg: propValidation.minLengthError || allErrors.MIN_LENGTH
            });

        if (context.data.length > propValidation.maxLength)
            context.errors.push({
                propName: context.propName,
                errorMsg: propValidation.maxLengthError || allErrors.MAX_LENGTH
            });

        if (propValidation.toLowerCase)
            context.data = context.data.toLowerCase();

        if (propValidation.toUpperCase)
            context.data = context.data.toUpperCase();

        return context;
    }

    return {
        validate,
        propValidation
    };
}

export function isValidEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // tslint:disable-line:max-line-length
    return re.test(email);
}

export function validateEmail(propValidation: IEmailValidation): IValidateResult<IEmailValidation, string> {
    function validate(context: IValidateContext<string>): IValidateContext<string> {
        const stringValidation: IStringValidation = {
            required: propValidation.required,
            requiredError: propValidation.requiredError,
            toLowerCase: true
        };

        context = validateString(stringValidation).validate(context);

        if (!isValidEmail(context.data))
            context.errors.push({
                propName: context.propName,
                errorMsg: allErrors.INVALID_EMAIL
            });

        return context;
    }

    return {
        validate,
        propValidation
    };
}
