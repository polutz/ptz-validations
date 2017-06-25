import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
import { IHaveValidation } from './IHaveValidation';

export const requiredWithError = R.curry((errorMessage: string, propName: string, obj: IHaveValidation) => {
    const propValue = R.prop(propName, obj);

    return P.isNilOrEmpty(propValue)
        ? addError(obj, propName, errorMessage)
        : obj;
});

export const required = requiredWithError(allErrors.REQUIRED);
