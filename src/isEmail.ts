import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
import { IHaveValidation } from './IHaveValidation';
import { isStringWithError } from './isString';
import { toLowerCase } from './toLowerCase';

/**
 * returns true if an E-mail is valid.
 */
export const isValidEmail = R.test(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // tslint:disable-line:max-line-length

/**
 * Validates E-mail prop of an object.
 *  - Checks if It is a string.
 *  - toLowerCase.
 *  - Checks if It is a valid E-mail.
 */
export const isEmailWithError = R.curry((errorMsg: string, propName: string, obj: IHaveValidation) => {
    obj = isStringWithError(errorMsg, propName, obj);
    obj = toLowerCase(propName, obj);

    const propValue = R.prop<string>(propName, obj);

    return isValidEmail(propValue)
        ? obj
        : addError(obj, propName, errorMsg);
});

/**
 * Validates E-mail prop of an object.
 *  - Checks if It is a string.
 *  - toLowerCase.
 *  - Checks if It is a valid E-mail.
 */
export const isEmail = isEmailWithError(allErrors.INVALID_EMAIL);
