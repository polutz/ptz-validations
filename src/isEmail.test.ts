import * as assert from 'ptz-assert';
import * as V from './index';

describe('isEmail', () => {
    describe('isValidEmail', () => {
        it('Valid Email', () => {
            assert.ok(V.isValidEmail('angeloocana@gmail.com'));
        });
        it('Invalid Email', () => {
            assert.notOk(V.isValidEmail('angeloocana_gmail.com'));
        });
    });

    describe('isEmail', () => {
        const propName = 'email';
        const error = { propName, errorMsg: V.allErrors.INVALID_EMAIL };

        it('add error when invalid email', () => {
            const objToValidate = {
                email: 'angeloocana_gmail_com',
                errors: []
            };

            const validatedObj = V.isEmail(propName, objToValidate);

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add error when valid email', () => {
            const objToValidate = {
                email: 'angeloocana@gmail.com',
                errors: []
            };

            const validatedObj = V.isEmail(propName, objToValidate);

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
