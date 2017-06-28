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
    [key: string]: [IValidateProp];
}

type IValidate = <T>(validations: IValidations) => (obj: IHaveValidation & any) => T & IHaveValidation;

/**
 * Validate obj.
 */
export const validate: IValidate = R.curry((validations: IValidations, obj: IHaveValidation & any) =>
    R.keys(validations).reduce((accObj: IHaveValidation, propName) => {
        if (accObj) return validations[propName].reduce((accObj2, validation) =>
            validation(propName, accObj2), accObj);
    }, obj)
);
