import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
import { validateString } from './validateString';
/**
 * Checks if an E-mail is valid.
 */
export const isValidEmail = R.test(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // tslint:disable-line:max-line-length
/**
 * Validate an E-mail prop of an object.
 */
// tslint:disable-line:max-line-length
export const validateEmail = R.curry((opts, propName, obj) => {
    const stringOpts = {
        required: opts.required,
        requiredError: opts.requiredError,
        toLowerCase: true
    };
    obj = validateString(stringOpts, propName, obj);
    const propValue = R.prop(propName, obj);
    return isValidEmail(propValue)
        ? obj
        : addError(obj, propName, opts.invalidEmailError || allErrors.INVALID_EMAIL);
});
//# sourceMappingURL=validateEmail.js.map