import * as P from 'ptz-fp';
import R from 'ramda';
import { IHaveValidation } from './IHaveValidation';

export interface IError {
    propName?: string;
    errorMsg: string;
}

/**
 * Compares if to errors are the same.
 */
export const sameError = R.curry((a: IError, b: IError) =>
    a.propName === b.propName && a.errorMsg === b.errorMsg);

/**
 * Checks if a list of errors contains some error.
 * @param error
 * @param errors
 */
export const containsError = (error, errors) => R.any(sameError(error), errors || []);

/**
 * Type to be use in params on validate functions.
 */
export type IAddError = (errorMsg: string) => IHaveValidation;

/**
 * Add error to obj.errors
 */
export const addError = R.curry((obj: IHaveValidation, propName: string, errorMsg: string): IHaveValidation => {
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
