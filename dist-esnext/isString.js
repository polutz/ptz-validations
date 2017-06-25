import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
/**
 * Validate String.
 */
export const isStringWithError = R.curry((errorMsg, propName, obj) => {
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
//# sourceMappingURL=isString.js.map