import * as P from 'ptz-fp';
import R from 'ramda';
/**
 * Checks if prop errors is empty
 * @param {Object} o object with .errors
 */
export const isValid = R.compose(P.isNilOrEmpty, R.prop('errors'));
//# sourceMappingURL=isValid.js.map