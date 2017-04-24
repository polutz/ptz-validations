import allErrors from './allErrors';
import { IError } from './IError';
import { IValidateEmailArgs, IValidateStringArgs } from './IValidate';

export function validateString(args: IValidateStringArgs): IError[] {

    if (args.propValidation.required && (args.data == null || args.data.length === 0))
        return [{
            propName: args.propName,
            errorMsg: args.propValidation.requiredError || allErrors.REQUIRED
        }];

    if (args.data == null)
        return [];

    if (args.data.length < args.propValidation.minLength)
        return [{
            propName: args.propName,
            errorMsg: args.propValidation.minLengthError || allErrors.MIN_LENGTH
        }];

    if (args.data.length > args.propValidation.maxLength)
        return [{
            propName: args.propName,
            errorMsg: args.propValidation.maxLengthError || allErrors.MAX_LENGTH
        }];

    return [];
}

export function isValidEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // tslint:disable-line:max-line-length
    return re.test(email);
}

export function validateEmail(args: IValidateEmailArgs): IError[] {
    const errors = validateString(args);

    if (!isValidEmail(args.data))
        errors.push({
            propName: args.propName,
            errorMsg: allErrors.INVALID_EMAIL
        });

    return errors;
}
