import { contains, containsNTimes, emptyArray, equal, notEmptyString, notOk, ok, throws } from 'ptz-assert';
import { HaveValidation, IError } from './index';

describe('HaveValidation', () => {

    describe('addError', () => {
        it('do not throw error when args.errors is null', () => {
            const error: IError = {
                errorMsg: 'ERROR_'
            };

            const entity = new HaveValidation({ errors: null });
            entity.addError(error);
            contains(entity.errors, error);
        });

        it('add errors from args.errors', () => {
            const error: IError = { errorMsg: 'ERROR_' };
            const errorArgs: IError = { errorMsg: 'ERROR_ANOTHER_ERROR' };
            const entity = new HaveValidation({ errors: [errorArgs] });

            entity.addError(error);

            contains(entity.errors, errorArgs);
            contains(entity.errors, error);
        });

        it('does not duplicate errors', () => {
            const error: IError = { errorMsg: 'ERROR_' };
            const entity = new HaveValidation({ errors: [error] });
            entity.addError(error);
            containsNTimes(entity.errors, error, 1);
        });
    });

    describe('addErrors', () => {
        it('add 2 errors', () => {
            const error1: IError = { errorMsg: 'ERROR_1' };
            const error2: IError = { errorMsg: 'ERROR_2' };
            const error3: IError = { errorMsg: 'ERROR_3' };

            const entity = new HaveValidation({ errors: [error1] });
            entity.addErrors([error2, error3]);

            contains(entity.errors, error1, 'Error from args not added');
            contains(entity.errors, error2);
            contains(entity.errors, error3);
        });

        it('add no errors', () => {
            const entity = new HaveValidation({});
            entity.addErrors(null);
            emptyArray(entity.errors);
        });
    });

    describe('IsValid', () => {
        it('should return true when errors is null', () => {
            const entity = new HaveValidation({ errors: null });
            ok(entity.isValid());
        });

        it('should return true when error is empty', () => {
            const entity = new HaveValidation({ errors: [] });
            ok(entity.isValid());
        });

        it('should return false when there are errors', () => {
            const entity = new HaveValidation({ errors: [{ errorMsg: 'ERROR_ANOTHER_ERROR' }] });
            notOk(entity.isValid());
        });
    });
});
