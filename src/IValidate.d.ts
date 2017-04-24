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

export interface IValidateArgs<TData, TPropValidation> {
    propName: string;
    data: TData;
    propValidation: TPropValidation;
}

export type IValidateStringArgs = IValidateArgs<string, IStringValidation>;

export type IValidateEmailArgs = IValidateArgs<string, IEmailValidation>;

export type IValidateString = (args: IValidateStringArgs) => IError[];
