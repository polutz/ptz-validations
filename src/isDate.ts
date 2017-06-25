import R from 'ramda';
import allErrors from './allErrors';
import { addError } from './error';
import { IHaveValidation } from './IHaveValidation';

/**
 * Validate Date.
 */
export const isDateWithError = R.curry((errorMsg: string, propName: string, obj: IHaveValidation) => {
    const propValue = R.prop<Date>(propName, obj);

    if (R.isNil(propValue))
        return obj;

    // tslint:disable-next-line:no-string-literal
    if (Object.prototype.toString.call(propValue) === '[object Date]')
        return obj;

    if (typeof propValue === 'number')
        return addError(obj, propName, errorMsg);

    const date = new Date(propValue);

    if (date.toString() === 'Invalid Date')
        return addError(obj, propName, errorMsg);
    else
        return R.assoc(propName, date, obj);
});

/**
 * Validate Date.
 */
export const isDate = isDateWithError(allErrors.INVALID_DATE_ERROR);
