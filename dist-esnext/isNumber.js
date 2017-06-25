import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
/**
 * Validate Number.
 */
export const isNumberWithError = R.curry((errorMsg, propName, obj) => {
    const propValue = R.prop(propName, obj);
    if (R.isNil(propValue) || typeof propValue === 'number')
        return obj;
    if (typeof propValue !== 'string')
        return addError(obj, propName, errorMsg);
    const numPropValue = parseFloat(propValue);
    return isNaN(numPropValue)
        ? addError(obj, propName, errorMsg)
        : R.assoc(propName, numPropValue, obj);
});
/**
 * Validate Number.
 */
export const isNumber = isNumberWithError(allErrors.INVALID_NUMBER_ERROR);
//# sourceMappingURL=isNumber.js.map