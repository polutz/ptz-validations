import R from 'ramda';
/**
 * Validate obj.
 */
export const validate = R.curry((validations, obj) => R.keys(validations).reduce((accObj, propName) => {
    if (accObj)
        return validations[propName].reduce((accObj2, validation) => validation(propName, accObj2), accObj);
}, obj));
//# sourceMappingURL=validate.js.map