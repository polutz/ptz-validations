import { IError } from './IError';

export interface IPropValidation {
    required?: boolean;
    requiredError?: string;
}

export interface IStringValidation extends IPropValidation {
    minLength?: number;
    minLengthError?: string;
    maxLength?: number;
    maxLengthError?: string;
    toLowerCase?: boolean;
    toUpperCase?: boolean;
}

export interface INumberValidation extends IPropValidation {
    min?: number;
    minError?: string;
    max?: number;
    maxError?: string;
}

export type IArrayValidation = IPropValidation;

export type IDateValidation = IPropValidation;

export type IEmailValidation = IPropValidation;

export interface IValidateContext<TData> {
    propName: string;
    data: TData;
    errors?: IError[];
}

export interface IValidations {
    [key: string]: IValidateResult<any, any>;
}

export interface IValidateResult<TValidation, T> {
    propValidation: TValidation;
    validate: (context: IValidateContext<T>) => IValidateContext<T>;
}
