import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError as addErrorBase } from './error';
import { IHaveValidation } from './IHaveValidation';
import { IPropValidation } from './IPropValidation';

/**
 * Options to validate a date
 */
export interface IDateValidation extends IPropValidation {
    min?: Date;
    minError?: string;
    max?: Date;
    maxError?: string;
}

/**
 * Validate Date
 */
export const validateDate = R.curry((opts: IDateValidation, propName: string, obj: IHaveValidation) => {
    const propValue = R.prop<Date>(propName, obj);
    const addError = addErrorBase(obj, propName);

    if (P.isNilOrEmpty(propValue))
        return opts.required
            ? addError(opts.requiredError || allErrors.REQUIRED)
            : obj;

    if (propValue > opts.max)
        return addError(opts.maxError || allErrors.MAX_LENGTH);

    if (propValue < opts.min)
        return addError(opts.minError || allErrors.MIN_LENGTH);

    return obj;
});
