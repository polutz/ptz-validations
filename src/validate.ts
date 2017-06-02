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
    console.log('validations \n', validations);
    console.log('obj \n', obj);

    return R.keys(validations).reduce((accObj: IHaveValidation, propName) => {
        console.log('accObj \n', accObj);
        console.log('propName \n', propName);
        const newObj = validations[propName](propName, accObj);
        console.log('newObj \n', newObj);
        return newObj;
    }, obj);
});
