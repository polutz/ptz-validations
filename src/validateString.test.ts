import * as assert from 'ptz-assert';
import * as V from './index';

describe('validateString', () => {
    describe('required', () => {
        describe('null', () => {
            it('add default error msg when null', () => {
                const propName = 'userName';

                const propValidation: V.IStringValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: null
                };

                const validatedObj = V.validateString(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when null', () => {
                const propName = 'userName';

                const propValidation: V.IStringValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: null
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateString(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        describe('undefined', () => {
            it('add default error msg when undefined', () => {
                const propName = 'userName';

                const propValidation: V.IStringValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: undefined
                };

                const validatedObj = V.validateString(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when undefined', () => {
                const propName = 'userName';

                const propValidation: V.IStringValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: undefined
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateString(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        describe('empty', () => {
            it('add default error msg when null', () => {
                const propName = 'userName';

                const propValidation: V.IStringValidation = {
                    required: true
                };

                const objToValidate = {
                    [propName]: ''
                };

                const validatedObj = V.validateString(propValidation, propName, objToValidate);

                const error = { propName, errorMsg: V.allErrors.REQUIRED };

                assert.ok(V.containsError(error, validatedObj.errors));
            });

            it('add custom error msg when null', () => {
                const propName = 'userName';

                const propValidation: V.IStringValidation = {
                    required: true,
                    requiredError: 'CUSTOM_ERROR_MSG'
                };

                const objToValidate = {
                    [propName]: ''
                };

                const error = { propName, errorMsg: propValidation.requiredError };

                const validatedObj = V.validateString(propValidation, propName, objToValidate);

                assert.ok(V.containsError(error, validatedObj.errors));
            });
        });

        it('do NOT add error when not empty', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                required: true
            };

            const objToValidate = {
                [propName]: 'angeloocana'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.REQUIRED };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });

    describe('minLength', () => {
        it('add default minLength error when less than minLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                minLength: 3
            };

            const objToValidate = {
                [propName]: 'angeloocana'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('add custom minLength error when less than minLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                minLength: 3,
                minLengthError: 'CUSTOM_MIN_LENGTH_ERROR'
            };

            const objToValidate = {
                [propName]: 'a'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: propValidation.minLengthError };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add minLength error when equal than minLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                minLength: 3
            };

            const objToValidate = {
                [propName]: 'ang'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add minLength error when grater than minLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                minLength: 3
            };

            const objToValidate = {
                [propName]: 'angeloocana'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add minLength error when null and not required', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                required: false,
                minLength: 3
            };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });

    describe('maxLength', () => {
        it('add default maxLength error when grater than maxLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                maxLength: 3
            };

            const objToValidate = {
                [propName]: 'angeloocana'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MIN_LENGTH };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('add custom maxLength error when grater than maxLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                maxLength: 3,
                maxLengthError: 'CUSTOM_MAX_LENGTH_ERROR'
            };

            const objToValidate = {
                [propName]: 'angeloocana'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: propValidation.maxLengthError };

            assert.ok(V.containsError(error, validatedObj.errors));
        });

        it('do not add maxLength error when equal than maxLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                maxLength: 3
            };

            const objToValidate = {
                [propName]: 'ang'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add maxLength error when less than maxLength', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                maxLength: 3
            };

            const objToValidate = {
                [propName]: 'an'
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });

        it('do NOT add maxLength error when null and not required', () => {
            const propName = 'userName';

            const propValidation: V.IStringValidation = {
                required: false,
                maxLength: 3
            };

            const objToValidate = {
                [propName]: null
            };

            const validatedObj = V.validateString(propValidation, propName, objToValidate);

            const error = { propName, errorMsg: V.allErrors.MAX_LENGTH };

            assert.notOk(V.containsError(error, validatedObj.errors));
        });
    });

    it('toLowerCase', () => {
        const propName = 'userName';

        const propValidation: V.IStringValidation = {
            toLowerCase: true
        };

        const objToValidate = {
            [propName]: 'ANGELOOCANA'
        };

        const validatedObj = V.validateString(propValidation, propName, objToValidate);

        assert.equal(validatedObj[propName], 'angeloocana');
    });

    it('toUpperCase', () => {
        const propName = 'userName';

        const propValidation: V.IStringValidation = {
            toUpperCase: true
        };

        const objToValidate = {
            [propName]: 'angeloocana'
        };

        const validatedObj = V.validateString(propValidation, propName, objToValidate);

        assert.equal(validatedObj[propName], 'ANGELOOCANA');
    });
});
