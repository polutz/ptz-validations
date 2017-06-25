import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
/**
 * Adds error if prop is less than minValue.
 */
export const minWithError = R.curry((errorMsg, minValue, propName, obj) => {
    const propValue = R.prop(propName, obj);
    if (R.isNil(propValue))
        return obj;
    // tslint:disable-next-line:no-string-literal
    if (minValue > (propValue['length'] ? propValue.length : propValue))
        return addError(obj, propName, errorMsg);
    return obj;
});
export const min = minWithError(allErrors.MIN);
//# sourceMappingURL=min.js.map