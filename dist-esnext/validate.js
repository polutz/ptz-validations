import R from 'ramda';
import { allErrors } from './allErrors';
/**
 * Validate obj.
 */
export const validate = R.curry((validations, obj) => {
    if (!obj)
        throw new Error(allErrors.NULL_ARGS);
    return R.keys(validations).reduce((accObj, propName) => {
        if (accObj)
            return validations[propName].reduce((accObj2, validation) => validation(propName, accObj2), accObj);
    }, obj);
});
//# sourceMappingURL=validate.js.map