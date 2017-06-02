import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
import { IHaveValidation } from './IHaveValidation';
import { IPropValidation } from './IPropValidation';
import { IStringValidation, validateString } from './validateString';

/**
 * Options to validate an E-mail.
 */
export interface IEmailValidation extends IPropValidation {
    /**
     * Custom error msg to invalid E-mail.
     */
    invalidEmailError?: string;
}

/**
 * Checks if an E-mail is valid.
 */
export const isValidEmail = R.test(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // tslint:disable-line:max-line-length

/**
 * Validate an E-mail prop of an object.
 */
export const validateEmail = R.curry((opts: IEmailValidation, propName: string, obj: IHaveValidation) => {

    const stringOpts: IStringValidation = {
        required: opts.required,
        requiredError: opts.requiredError,
        toLowerCase: true
    };

    obj = validateString(stringOpts, propName, obj);

    const propValue = R.prop<string>(propName, obj);

    return isValidEmail(propValue)
        ? obj
        : addError(obj, propName, opts.invalidEmailError || allErrors.INVALID_EMAIL);
});
