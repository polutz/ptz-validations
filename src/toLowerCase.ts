import R from 'ramda';
import { IHaveValidation } from './IHaveValidation';

/**
 * returns a new object with some prop toLowerCase.
 */
export const toLowerCase = R.curry((propName: string, obj: IHaveValidation) => {
    const propValue = R.prop<string>(propName, obj);
    if (propValue)
        return R.assoc(propName, propValue.toLowerCase(), obj);
    return obj;
});
