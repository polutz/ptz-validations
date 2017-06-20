import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError as addErrorBase } from './error';
import { IHaveValidation } from './IHaveValidation';
import { IPropValidation } from './IPropValidation';

/**
 * Options to validate a number
 */
export interface INumberValidation extends IPropValidation {
    min?: number;
    invalidNumberError?: string;
    minError?: string;
    max?: number;
    maxError?: string;
}

/**
 * Checks if an number is valid.
 */
export const isValidNumber = (propValue: any) => (typeof (propValue) === 'number');

/**
 * Validate Number
 */
export const validateNumber = R.curry((opts: INumberValidation, propName: string, obj: IHaveValidation) => {
    const propValue = R.prop<number>(propName, obj);
    const addError = addErrorBase(obj, propName);

    if (P.isNilOrEmpty(propValue))
        return opts.required
            ? addError(opts.requiredError || allErrors.REQUIRED)
            : obj;

    if (propValue > opts.max)
        return addError(opts.maxError || allErrors.MAX_LENGTH);

    if (propValue < opts.min)
        return addError(opts.minError || allErrors.MIN_LENGTH);

    return isValidNumber(propValue)
        ? obj
        : addError(opts.invalidNumberError || allErrors.INVALID_NUMBER_ERROR);
});
