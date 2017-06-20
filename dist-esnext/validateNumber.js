import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError as addErrorBase } from './error';
/**
 * Checks if an number is valid.
 */
export const isValidNumber = (propValue) => (typeof (propValue) === 'number');
/**
 * Validate Number
 */
export const validateNumber = R.curry((opts, propName, obj) => {
    const propValue = R.prop(propName, obj);
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
//# sourceMappingURL=validateNumber.js.map