import * as P from 'ptz-fp';
import R from 'ramda';
import shortid from 'shortid';
/**
 * Generate Id with custom function.
 */
export const generateIdWith = R.curry((genId, propName, o) => {
    if (!o)
        return { [propName]: genId() };
    if (P.isNotNilOrEmpty(o[propName]))
        return o;
    const _id = o['_' + propName]; // tslint:disable-line:variable-name
    const id = P.isNotNilOrEmpty(_id) ? _id : genId();
    return R.assoc(propName, id, o);
});
/**
 * Generate Id if .id and ._id are null or undefined.
 */
export const generateId = generateIdWith(shortid.generate);
//# sourceMappingURL=generateId.js.map