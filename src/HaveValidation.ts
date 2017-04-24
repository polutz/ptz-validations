import { IError } from './IError';
import { IHaveValidation, IHaveValidationArgs } from './IHaveValidation';

export default class HaveValidation implements IHaveValidation {

    errors: IError[];

    constructor(args?: IHaveValidationArgs) {
        if (!args)
            args = {};

        this.addErrors(args.errors);
    }

    addError(error: IError): void {
        if (error == null)
            return;

        const sameErrorIndex = this.errors
            .findIndex(e =>
                e.propName === error.propName
                && e.errorMsg === error.errorMsg);

        if (!(sameErrorIndex >= 0))
            this.errors.push(error);
    }

    addErrors(errors: IError[]): void {
        if (this.errors == null)
            this.errors = [];

        if (errors == null)
            return;

        errors.forEach(error => this.addError(error));
    }

    isValid(): boolean {
        return !this.errors || this.errors.length === 0;
    }
}

export {
    HaveValidation
};
