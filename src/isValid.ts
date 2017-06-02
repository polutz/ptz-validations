import * as P from 'ptz-fp';
import R from 'ramda';
import { IHaveValidation } from './IHaveValidation';

type IIsValid = (o: IHaveValidation) => boolean;

/**
 * Checks if prop errors is empty
 * @param {Object} o object with .errors
 */
export const isValid: IIsValid = R.compose(P.isNilOrEmpty, R.prop('errors'));
