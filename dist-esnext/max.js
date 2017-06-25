import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
/**
 * Adds error if prop is grather than maxValue.
 */
export const maxWithError = R.curry((errorMsg, maxValue, propName, obj) => {
    const propValue = R.prop(propName, obj);
    if (R.isNil(propValue))
        return obj;
    // tslint:disable-next-line:no-string-literal
    if (maxValue < (propValue['length'] ? propValue.length : propValue))
        return addError(obj, propName, errorMsg);
    return obj;
});
export const max = maxWithError(allErrors.MAX);
//# sourceMappingURL=max.js.map