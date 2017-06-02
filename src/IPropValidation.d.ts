import { IError } from './error';

/**
 * Validate any prop.
 */
export interface IPropValidation {
    required?: boolean;
    requiredError?: string;
}

/**
 * Options to validate a number.
 */
export interface INumberValidation extends IPropValidation {
    min?: number;
    minError?: string;
    max?: number;
    maxError?: string;
}

/**
 * Options to validate an array.
 */
export type IArrayValidation = IPropValidation;

/**
 * Options to validate a DateTime.
 */
export type IDateValidation = IPropValidation;
