import { IError } from './error';

/**
 * Validate any prop.
 */
export interface IPropValidation {
    required?: boolean;
    requiredError?: string;
}

/**
 * Options to validate an array.
 */
export type IArrayValidation = IPropValidation;
