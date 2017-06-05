import R from 'ramda';
import { IHaveValidation } from './IHaveValidation';

/**
 * Validate prop functions curried.
 */
export type IValidateProp = (propName: string, obj: IHaveValidation) => IHaveValidation;

/**
 * Validations obj interface, It maps keys with validation functions.
 */
export interface IValidations {
    /**
     * propName and validation function.
     */
    [key: string]: IValidateProp;
}

/**
 * Validate obj.
 */
export const validate = R.curry((validations: IValidations, obj: IHaveValidation & any) => {
    return R.keys(validations).reduce((accObj: IHaveValidation, propName) => {
        const validateProp = validations[propName];
        return validateProp(propName, accObj);
    }, obj);
});
