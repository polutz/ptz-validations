import { IError } from './error';

export interface IHaveValidation {
    errors?: IError[];
}

export type IHaveValidationArgs  = IHaveValidation;
