import * as assert from 'ptz-assert';
import * as V from './index';

describe('validateEmail', () => {
    describe('isValidEmail', () => {
        it('Valid Email', () => {
            assert.ok(V.isValidEmail('angeloocana@gmail.com'));
        });
        it('Invalid Email', () => {
            assert.notOk(V.isValidEmail('angeloocana_gmail.com'));
        });
    });

    describe('validateEmail', () => {
        describe('required', () => {
            describe('null', () => {
                it('add default error msg when null', () => {
                    const propName = 'email';

                    const propValidation: V.IEmailValidation = {
                        required: true
                    };

                    const objToValidate = {
                        [propName]: null
                    };

                    const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

                    const error = { propName, errorMsg: V.allErrors.REQUIRED };

                    assert.ok(V.containsError(error, validatedObj.errors));
                });

                it('add custom error msg when null', () => {
                    const propName = 'email';

                    const propValidation: V.IEmailValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const objToValidate = {
                        [propName]: null
                    };

                    const error = { propName, errorMsg: propValidation.requiredError };

                    const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

                    assert.ok(V.containsError(error, validatedObj.errors));
                });
            });

            describe('undefined', () => {
                it('add default error msg when undefined', () => {
                    const propName = 'email';

                    const propValidation: V.IEmailValidation = {
                        required: true
                    };

                    const objToValidate = {
                        [propName]: undefined
                    };

                    const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

                    const error = { propName, errorMsg: V.allErrors.REQUIRED };

                    assert.ok(V.containsError(error, validatedObj.errors));
                });

                it('add custom error msg when undefined', () => {
                    const propName = 'email';

                    const propValidation: V.IEmailValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const objToValidate = {
                        [propName]: undefined
                    };

                    const error = { propName, errorMsg: propValidation.requiredError };

                    const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

                    assert.ok(V.containsError(error, validatedObj.errors));
                });
            });

            describe('empty', () => {
                it('add default error msg when null', () => {
                    const propName = 'email';

                    const propValidation: V.IEmailValidation = {
                        required: true
                    };

                    const objToValidate = {
                        [propName]: ''
                    };

                    const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

                    const error = { propName, errorMsg: V.allErrors.REQUIRED };

                    assert.ok(V.containsError(error, validatedObj.errors));
                });

                it('add custom error msg when null', () => {
                    const propName = 'email';

                    const propValidation: V.IEmailValidation = {
                        required: true,
                        requiredError: 'CUSTOM_ERROR_MSG'
                    };

                    const objToValidate = {
                        [propName]: ''
                    };

                    const error = { propName, errorMsg: propValidation.requiredError };

                    const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

                    assert.ok(V.containsError(error, validatedObj.errors));
                });
            });

            it('do NOT add error when not empty', () => {
                const propName = 'email';

                const propValidation: V.IEmailValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: 'angeloocana'
                };

                const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.notOk(V.containsError(error, validatedObj.errors));
            });
        });

        it('add error when invalid email', () => {
            const propName = 'email';

            const propValidation: V.IEmailValidation = {
                required: false
            };

            const objToValidate = { email: 'angeloocana_gmail_com' };

            const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.INVALID_EMAIL };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add error when valid email', () => {
            const propName = 'email';

            const propValidation: V.IEmailValidation = {
                required: false
            };

            const objToValidate = { email: 'angeloocana@gmail.com' };

            const validatedObj = V.validateEmail(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.INVALID_EMAIL };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });
});
