import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError as addErrorBase } from './error';
import { IHaveValidation } from './IHaveValidation';
import { IPropValidation } from './IPropValidation';

/**
 * Options to validate a string
 */
export interface IStringValidation extends IPropValidation {
    minLength?: number;
    minLengthError?: string;
    maxLength?: number;
    maxLengthError?: string;
    toLowerCase?: boolean;
    toUpperCase?: boolean;
}

/**
 * Validate String
 */
export const validateString = R.curry((opts: IStringValidation, propName: string, obj: IHaveValidation) => {
    const propValue = R.prop<string>(propName, obj);
    const addError = addErrorBase(obj, propName);

    if (P.isNilOrEmpty(propValue))
        return opts.required
            ? addError(opts.requiredError || allErrors.REQUIRED)
            : obj;

    if (propValue.length > opts.maxLength)
        return addError(opts.maxLengthError || allErrors.MAX_LENGTH);

    if (propValue.length < opts.minLength)
        return addError(opts.minLengthError || allErrors.MIN_LENGTH);

    if (opts.toLowerCase)
        return R.assoc(propName, propValue.toLowerCase(), obj);

    if (opts.toUpperCase)
        return R.assoc(propName, propValue.toUpperCase(), obj);

    return obj;
});
