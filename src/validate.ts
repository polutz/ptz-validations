import allErrors from './allErrors';
import { IError } from './IError';
import { IValidateStringArgs } from './IPropValidation';

export function validateString(args: IValidateStringArgs): IError[] {

    if (args.propValidation.required && (args.data == null || args.data.length === 0))
        return [{
            propName: args.propName,
            errorMsg: args.propValidation.requiredError || allErrors.REQUIRED
        }];

    if (args.data == null)
        return [];

    if (args.data.length < args.propValidation.minLength)
        return [{
            propName: args.propName,
            errorMsg: args.propValidation.minLengthError || allErrors.MIN_LENGTH
        }];

    if (args.data.length > args.propValidation.maxLength)
        return [{
            propName: args.propName,
            errorMsg: args.propValidation.maxLengthError || allErrors.MAX_LENGTH
        }];

    return [];
}
