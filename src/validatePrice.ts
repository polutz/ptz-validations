import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError as addErrorBase } from './error';
import { IHaveValidation } from './IHaveValidation';
import { IPropValidation } from './IPropValidation';

/**
 * Options to validate a price.
 */
export interface IPriceValidation extends IPropValidation {
    canBeNegative?: boolean;
    canBeZero?: boolean;
    cannotBeZeroError?: string;
    cannotBeNegativeError?: string;
}

/**
 * Validate Price
 */
export const validatePrice = R.curry((opts: IPriceValidation, propName: string, obj: IHaveValidation) => {
    const propValue = R.prop<string>(propName, obj);
    const addError = addErrorBase(obj, propName);

    if (P.isNilOrEmpty(propValue))
        return opts.required
            ? addError(opts.requiredError || allErrors.REQUIRED)
            : obj;

    if (!opts.canBeZero && parseInt(propValue, 10) === 0)
        return addError(opts.cannotBeZeroError || allErrors.CANNOT_BE_ZERO);

    if (!opts.canBeNegative && parseInt(propValue, 10) < 0)
        return addError(opts.cannotBeNegativeError || allErrors.CANNOT_BE_NEGATIVE);

    return obj;
});
