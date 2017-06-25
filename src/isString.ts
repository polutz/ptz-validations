import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
import { IHaveValidation } from './IHaveValidation';

/**
 * Validate String.
 */
export const isStringWithError = R.curry((errorMsg: string, propName: string, obj: IHaveValidation) => {
    const propValue = R.prop(propName, obj);

    if (R.isNil(propValue))
        return obj;

    return typeof propValue === 'string'
        ? obj
        : addError(obj, propName, errorMsg);
});

/**
 * Validate String.
 */
export const isString = isStringWithError(allErrors.INVALID_NUMBER_ERROR);
