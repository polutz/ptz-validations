import R from 'ramda';
/**
 * returns a new object with some prop toLowerCase.
 */
export const toLowerCase = R.curry((propName, obj) => {
    const propValue = R.prop(propName, obj);
    if (propValue)
        return R.assoc(propName, propValue.toLowerCase(), obj);
    return obj;
});
//# sourceMappingURL=toLowerCase.js.map