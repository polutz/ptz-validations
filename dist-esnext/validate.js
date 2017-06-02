import R from 'ramda';
/**
 * Validate obj.
 */
export const validate = R.curry((validations, obj) => {
    console.log('validations \n', validations);
    console.log('obj \n', obj);
    return R.keys(validations).reduce((accObj, propName) => {
        console.log('accObj \n', accObj);
        console.log('propName \n', propName);
        const newObj = validations[propName](propName, accObj);
        console.log('newObj \n', newObj);
        return newObj;
    }, obj);
});
//# sourceMappingURL=validate.js.map