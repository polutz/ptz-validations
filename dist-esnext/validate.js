import R from 'ramda';
/**
 * Validate obj.
 */
export const validate = R.curry((validations, obj) => {
    return R.keys(validations).reduce((accObj, propName) => {
        const validateProp = validations[propName];
        return validateProp(propName, accObj);
    }, obj);
});
//# sourceMappingURL=validate.js.map