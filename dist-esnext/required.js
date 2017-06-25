import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
export const requiredWithError = R.curry((errorMessage, propName, obj) => {
    const propValue = R.prop(propName, obj);
    return P.isNilOrEmpty(propValue)
        ? addError(obj, propName, errorMessage)
        : obj;
});
export const required = requiredWithError(allErrors.REQUIRED);
//# sourceMappingURL=required.js.map