import R from 'ramda';
import { IHaveValidation } from './IHaveValidation';

/**
 * returns a new object with some prop toUpperCase.
 */
export const toUpperCase = R.curry((propName: string, obj: IHaveValidation) => {
    const propValue = R.prop<string>(propName, obj);

    return R.assoc(propName, propValue.toUpperCase(), obj);
});
