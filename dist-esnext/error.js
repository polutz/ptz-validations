import * as P from 'ptz-fp';
import R from 'ramda';
/**
 * Compares if to errors are the same.
 */
export const sameError = R.curry((a, b) => a.propName === b.propName && a.errorMsg === b.errorMsg);
/**
 * Checks if a list of errors contains some error.
 * @param error
 * @param errors
 */
export const containsError = (error, errors) => R.any(sameError(error), errors || []);
/**
 * Add error to obj.errors
 */
export const addError = R.curry((obj, propName, errorMsg) => {
    const error = { propName, errorMsg };
    if (R.isNil(obj))
        return { errors: [error] };
    if (P.isNilOrEmpty(obj.errors))
        return R.assoc('errors', [error], obj);
    if (containsError(error, obj.errors))
        return obj;
    const errors = obj.errors.concat(error);
    return R.assoc('errors', errors, obj);
});
//# sourceMappingURL=error.js.map