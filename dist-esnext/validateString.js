import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError as addErrorBase } from './error';
/**
 * Validate String
 */
export const validateString = R.curry((opts, propName, obj) => {
    const propValue = R.prop(propName, obj);
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
//# sourceMappingURL=validateString.js.map