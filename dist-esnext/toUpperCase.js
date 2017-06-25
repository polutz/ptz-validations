import R from 'ramda';
/**
 * returns a new object with some prop toUpperCase.
 */
export const toUpperCase = R.curry((propName, obj) => {
    const propValue = R.prop(propName, obj);
    return R.assoc(propName, propValue.toUpperCase(), obj);
});
//# sourceMappingURL=toUpperCase.js.map