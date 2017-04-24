import { IError } from './IError';

export interface IHaveValidation {
    errors?: IError[];
    addError(error: IError): void;
    addErrors(errors: IError[]): void;
    isValid(): boolean;
}

export interface IHaveValidationArgs {
    errors?: IError[];
}
